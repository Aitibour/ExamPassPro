import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    // Verify secret header for security
    const secret = request.headers.get('x-publish-secret')
    const expectedSecret = process.env.PUBLISH_SECRET || 'dev-only-secret'

    if (process.env.NODE_ENV === 'production' && secret !== expectedSecret) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const supabase = await createClient()

    // Publish all courses using a filter that matches all rows
    // Using gte with minimum UUID to match all records
    const { error } = await supabase
      .from('courses')
      .update({ is_published: true })
      .gte('id', '00000000-0000-0000-0000-000000000000')

    if (error) {
      return NextResponse.json(
        { error: `Failed to publish courses: ${error.message}` },
        { status: 500 }
      )
    }

    // Verify results
    const { data: allCourses, error: countError } = await supabase
      .from('courses')
      .select('id, title, is_published')

    if (countError) {
      return NextResponse.json(
        { error: `Failed to verify: ${countError.message}` },
        { status: 500 }
      )
    }

    const publishedCount = allCourses?.filter(c => c.is_published).length || 0

    return NextResponse.json({
      success: true,
      message: `✅ Successfully published all courses`,
      stats: {
        totalCourses: allCourses?.length || 0,
        publishedCourses: publishedCount,
      }
    })
  } catch (err) {
    return NextResponse.json(
      { error: `Fatal error: ${err instanceof Error ? err.message : String(err)}` },
      { status: 500 }
    )
  }
}
