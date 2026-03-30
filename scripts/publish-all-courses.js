const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function publishAllCourses() {
  try {
    console.log('Publishing all 40 courses...')

    const { data, error } = await supabase
      .from('courses')
      .update({ is_published: true })
      .neq('id', null) // Update all rows

    if (error) {
      console.error('Error publishing courses:', error)
      process.exit(1)
    }

    console.log(`✅ Successfully published all courses`)

    // Verify
    const { data: allCourses } = await supabase
      .from('courses')
      .select('id, title, is_published')

    const publishedCount = allCourses?.filter(c => c.is_published).length || 0
    console.log(`Total courses in database: ${allCourses?.length}`)
    console.log(`Published courses: ${publishedCount}`)

    process.exit(0)
  } catch (err) {
    console.error('Fatal error:', err)
    process.exit(1)
  }
}

publishAllCourses()
