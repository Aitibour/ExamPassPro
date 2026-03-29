-- ── ServiceNow CSA 2025/2026 Exam Seed ───────────────────────────────────────
-- Creates 60 questions + Mock Exam 1 (60Q, 90 min) + Practice Exam 1 (60Q, untimed)
-- Both exam sets share the same 60 questions.
-- Free: 10 questions shown  |  Starter: 60  |  Pro: 60  |  All-Access: 60
-- Run in Supabase SQL Editor.

DO $$
DECLARE
  v_course_id UUID;
  q UUID[] := ARRAY[]::UUID[];
  v UUID;
BEGIN
  SELECT id INTO v_course_id FROM courses WHERE slug = 'servicenow-csa' LIMIT 1;
  IF v_course_id IS NULL THEN
    RAISE NOTICE 'Course servicenow-csa not found — aborting seed';
    RETURN;
  END IF;

  -- Clean up previous seed
  DELETE FROM exam_sets WHERE course_id = v_course_id AND title IN ('CSA Mock Exam 1','CSA Practice Exam 1');
  DELETE FROM questions  WHERE course_id = v_course_id;

  -- ── Q1 ─────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is the horizontal bar displayed at the top of every ServiceNow page called?',
    '{"A":"Application Navigator","B":"Banner Frame","C":"Content Frame","D":"Module Bar"}','B',
    'The Banner Frame runs across the top of every ServiceNow page and contains the company logo, global search, Connect Chat icon, help icon, and the logged-in user''s profile menu.',
    'User Interface & Navigation') RETURNING id INTO v; q := q || v;

  -- ── Q2 ─────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'Where in the ServiceNow UI are application menus and their modules found?',
    '{"A":"Banner Frame","B":"Content Frame","C":"Application Navigator","D":"Status Bar"}','C',
    'The Application Navigator is the collapsible left-side panel that lists all application menus and their child modules. Filtering the navigator bar searches module names in real time.',
    'User Interface & Navigation') RETURNING id INTO v; q := q || v;

  -- ── Q3 ─────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is a "module" in ServiceNow?',
    '{"A":"A JavaScript file used for customisation","B":"A link in the Application Navigator that opens a page, list, or URL","C":"A database table definition","D":"A UI Policy rule"}','B',
    'Modules are navigational links within Application Menus in the Application Navigator. They can open a list, a form, a URL, or a custom page and can be role-restricted.',
    'User Interface & Navigation') RETURNING id INTO v; q := q || v;

  -- ── Q4 ─────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'Which keyboard shortcut focuses the Application Navigator filter field?',
    '{"A":"Ctrl + F","B":"Alt + F","C":"Ctrl + /","D":"Alt + /"}','C',
    'Pressing Ctrl + / (forward slash) immediately moves keyboard focus to the filter field at the top of the Application Navigator, allowing fast module searching without touching the mouse.',
    'User Interface & Navigation') RETURNING id INTO v; q := q || v;

  -- ── Q5 ─────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'In ServiceNow, what does the Content Frame display?',
    '{"A":"Application menus and modules","B":"The currently selected application or module content","C":"The global header with user info","D":"System notifications only"}','B',
    'The Content Frame (main pane) is the large working area to the right of the Application Navigator. It renders the currently active list, form, dashboard, or page.',
    'User Interface & Navigation') RETURNING id INTO v; q := q || v;

  -- ── Q6 ─────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is a "View" in ServiceNow form configuration?',
    '{"A":"A saved report configuration","B":"A specific layout of a form that determines which fields are shown","C":"A list of records filtered by criteria","D":"A dashboard perspective"}','B',
    'A View defines which fields appear on a form and in what order. Administrators can create multiple views (e.g., ITIL, ESS) so different roles see a tailored set of fields.',
    'User Interface & Navigation') RETURNING id INTO v; q := q || v;

  -- ── Q7 ─────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'Which feature lets users bookmark frequently used records and pages for quick access?',
    '{"A":"Breadcrumbs","B":"Favorites (star icon)","C":"History","D":"Tags"}','B',
    'The Favorites feature (star icon in the Application Navigator) lets users pin records, list filters, or module links so they appear under the Favorites heading for instant access.',
    'User Interface & Navigation') RETURNING id INTO v; q := q || v;

  -- ── Q8 ─────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is the purpose of the "System Dictionary" (sys_dictionary) in ServiceNow?',
    '{"A":"Stores all user passwords","B":"Defines all tables and fields with their metadata","C":"Lists all active workflows","D":"Contains ServiceNow documentation"}','B',
    'The System Dictionary defines every table and field in the instance, including data types, maximum lengths, default values, attributes, and reference relationships.',
    'Database Management') RETURNING id INTO v; q := q || v;

  -- ── Q9 ─────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'Which table do all task-based tables (Incident, Problem, Change) extend in ServiceNow?',
    '{"A":"sys_db_object","B":"task","C":"cmdb_ci","D":"sys_user"}','B',
    'The task [task] table is the parent of all task-based records. Incident, Problem, Change Request, and many other tables extend task, inheriting common fields like number, short_description, assigned_to, and state.',
    'Database Management') RETURNING id INTO v; q := q || v;

  -- ── Q10 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'Which field is automatically assigned to every record in every ServiceNow table?',
    '{"A":"name","B":"sys_id","C":"number","D":"state"}','B',
    'The sys_id is a 32-character GUID (globally unique identifier) that ServiceNow automatically generates for every record in every table. It is the primary key used in all internal relationships.',
    'Database Management') RETURNING id INTO v; q := q || v;

  -- ── Q11 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What term describes the ServiceNow mechanism where a child table automatically inherits all fields from its parent table?',
    '{"A":"Table composition","B":"Schema inheritance","C":"Table extension","D":"Field propagation"}','C',
    'Table extension allows a child table to inherit all columns, business rules, and UI policies from its parent. The child can add new fields but cannot remove inherited ones.',
    'Database Management') RETURNING id INTO v; q := q || v;

  -- ── Q12 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is the purpose of a "Reference" field type in ServiceNow?',
    '{"A":"To store documents and attachments","B":"To create a pointer to a record in another table","C":"To define a calculated field","D":"To store encrypted data"}','B',
    'A Reference field stores the sys_id of a record in another table and displays a human-readable value (usually the display value). It creates a database relationship between tables.',
    'Database Management') RETURNING id INTO v; q := q || v;

  -- ── Q13 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is "dot-walking" in ServiceNow?',
    '{"A":"Navigating through related table fields using dot notation","B":"Moving records between applications","C":"A method to loop through list items","D":"Exporting data to CSV"}','A',
    'Dot-walking lets you access fields on related (referenced) records using dot notation. For example, incident.caller_id.department.name walks from the Incident to the Caller''s Department name.',
    'Database Management') RETURNING id INTO v; q := q || v;

  -- ── Q14 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'Which ServiceNow table contains a row definition for every table in the instance?',
    '{"A":"sys_field","B":"sys_db_object","C":"sys_schema","D":"sys_metadata"}','B',
    'sys_db_object (Tables) has one row per table, storing the table name, label, parent table, and other configuration. It is used by administrators to manage table definitions.',
    'Database Management') RETURNING id INTO v; q := q || v;

  -- ── Q15 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is the purpose of a "Glide List" (list) field type in ServiceNow?',
    '{"A":"To display a sorted drop-down menu","B":"To store multiple reference values pointing to records in another table","C":"To embed a list view inside a form","D":"To create a dependent picklist"}','B',
    'A Glide List field stores multiple sys_id values from a referenced table, displaying them as a comma-separated list. Unlike a Reference field (one record), a Glide List field can hold many records.',
    'Database Management') RETURNING id INTO v; q := q || v;

  -- ── Q16 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'In ServiceNow, what does the "Active" field control on most records?',
    '{"A":"Whether the record is currently being edited","B":"Whether the record is available for use and visible in reference fields","C":"Whether the record has been recently accessed","D":"Whether the record is queued for processing"}','B',
    'Setting Active = false makes a record inactive. Inactive records are hidden from reference field lookups, list views (by default), and drop-downs, preventing them from being used in new transactions.',
    'Database Management') RETURNING id INTO v; q := q || v;

  -- ── Q17 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'Which ServiceNow tool provides a visual map of table relationships and inheritance hierarchies?',
    '{"A":"Table Lineage View","B":"Schema Map","C":"Hierarchy Navigator","D":"Dependency View"}','B',
    'The Schema Map (accessible from a table''s context menu in the Dictionary) displays a visual diagram of table inheritance and relationships, making it easy to understand data model connections.',
    'Database Management') RETURNING id INTO v; q := q || v;

  -- ── Q18 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is the primary difference between a Business Rule and a UI Policy in ServiceNow?',
    '{"A":"Business Rules run server-side; UI Policies run client-side","B":"Business Rules are read-only; UI Policies handle writes","C":"Business Rules require scripts; UI Policies never do","D":"Business Rules apply to workflows only"}','A',
    'Business Rules execute on the server when records are queried, inserted, updated, or deleted. UI Policies execute in the browser and control form behaviour such as mandatory fields and visibility — but can be bypassed by server-side operations.',
    'Self-service & Automation') RETURNING id INTO v; q := q || v;

  -- ── Q19 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'When does a "Before" Business Rule execute relative to the database operation?',
    '{"A":"After the record is committed to the database","B":"Before the record is committed, allowing field values to be changed","C":"When a user first opens a form","D":"On a schedule, before other business rules fire"}','B',
    'A Before Business Rule runs before the INSERT or UPDATE is written to the database. This allows you to set or validate field values before they are persisted. After rules run post-commit.',
    'Self-service & Automation') RETURNING id INTO v; q := q || v;

  -- ── Q20 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is the purpose of an ACL (Access Control List) in ServiceNow?',
    '{"A":"To define workflow state transitions","B":"To control who can read, write, create, or delete records and fields","C":"To specify field-level encryption","D":"To manage application scoping"}','B',
    'ACLs (sys_security_acl) are rules evaluated in order that determine whether a user can perform a specific operation (read/write/create/delete) on a table, record, or field, based on roles, conditions, and scripts.',
    'Self-service & Automation') RETURNING id INTO v; q := q || v;

  -- ── Q21 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'Which automation tool introduced in the Orlando release uses a visual drag-and-drop interface to replace the legacy Workflow Editor?',
    '{"A":"Orchestration","B":"Flow Designer","C":"Process Flow","D":"Automation Engine"}','B',
    'Flow Designer is the modern low-code/no-code process automation tool. It uses triggers, actions, and conditions in a visual canvas and has replaced the legacy Workflow Editor for most use cases.',
    'Self-service & Automation') RETURNING id INTO v; q := q || v;

  -- ── Q22 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is a "Scheduled Job" in ServiceNow?',
    '{"A":"A task assigned to a user on a recurring schedule","B":"An automated script that runs at defined time intervals","C":"A report that generates on a recurring basis","D":"A workflow triggered at a specific time"}','B',
    'Scheduled Jobs (sys_trigger) are server-side scripts configured to run automatically at set intervals (e.g., daily, hourly) or at a specific date/time, useful for maintenance and automation tasks.',
    'Self-service & Automation') RETURNING id INTO v; q := q || v;

  -- ── Q23 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is the purpose of "Transform Maps" in ServiceNow?',
    '{"A":"To convert workflow diagrams to scripts","B":"To map imported data fields to ServiceNow table fields","C":"To transform UI layouts between views","D":"To convert data types between tables"}','B',
    'Transform Maps (sys_transform_map) define field-to-field mappings between an Import Set staging table and a target ServiceNow table. They can include scripts to transform data during import.',
    'Self-service & Automation') RETURNING id INTO v; q := q || v;

  -- ── Q24 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is an "Inbound Email Action" in ServiceNow?',
    '{"A":"A rule that processes incoming emails to create or update records","B":"An action triggered when a workflow starts","C":"A script that fires when a record is imported","D":"A UI button that submits a form"}','A',
    'Inbound Email Actions (sys_email_action) define how ServiceNow handles incoming emails, such as automatically creating incidents from emails sent to a support address or adding work notes when a reply is received.',
    'Self-service & Automation') RETURNING id INTO v; q := q || v;

  -- ── Q25 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What does a "Data Policy" enforce in ServiceNow compared to a UI Policy?',
    '{"A":"Data Policies apply on both client and server side; UI Policies only apply client-side","B":"Data Policies define data retention schedules","C":"Data Policies control synchronisation between instances","D":"Data Policies encrypt sensitive fields"}','A',
    'Data Policies (sys_data_policy2) enforce mandatory and read-only rules on the server side as well as the client side, so the rules apply even to records created via web services, import sets, or scripting — unlike UI Policies which are browser-only.',
    'Self-service & Automation') RETURNING id INTO v; q := q || v;

  -- ── Q26 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is a "Client Script" in ServiceNow?',
    '{"A":"A JavaScript that runs on the ServiceNow server","B":"A JavaScript that runs in the user''s browser on forms and lists","C":"A shell script executed by the MID Server","D":"A Python script for data migration"}','B',
    'Client Scripts execute in the user''s browser. They can run on load (onLoad), when a field changes (onChange), or when a form is submitted (onSubmit). They can read/set fields and display alerts but cannot directly write to the database.',
    'Self-service & Automation') RETURNING id INTO v; q := q || v;

  -- ── Q27 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'Which ServiceNow feature automatically assigns records to users or groups when defined conditions are met?',
    '{"A":"Workflow Escalation","B":"Assignment Rules","C":"Routing Policies","D":"SLA Targets"}','B',
    'Assignment Rules (sys_auto_rules) automatically set the assigned_to and assignment_group fields on records (like Incidents) when they match defined filter conditions, without requiring manual assignment.',
    'Self-service & Automation') RETURNING id INTO v; q := q || v;

  -- ── Q28 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is a "Notification" (sys_notification) in ServiceNow?',
    '{"A":"A pop-up alert shown in the Content Frame","B":"A configured email sent to specified recipients when conditions are met","C":"A record in the Incident table","D":"An in-app chat message"}','B',
    'Notifications (sys_notification) define when ServiceNow sends emails — specifying the trigger event, conditions, recipients (users, groups, or email fields), subject, and body using templates or scripts.',
    'Self-service & Automation') RETURNING id INTO v; q := q || v;

  -- ── Q29 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'In ServiceNow, what is a "Script Include"?',
    '{"A":"A client-side JavaScript library","B":"A reusable server-side JavaScript class or function callable from other scripts","C":"An embedded HTML block in a form","D":"A placeholder for dynamic field values"}','B',
    'Script Includes (sys_script_include) are server-side JavaScript libraries that define reusable functions or classes. They are called by business rules, processors, REST APIs, or other server scripts using the class name.',
    'Self-service & Automation') RETURNING id INTO v; q := q || v;

  -- ── Q30 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'Which ServiceNow object type is used to add custom buttons, links, or context-menu actions on forms and lists?',
    '{"A":"Client Script","B":"Business Rule","C":"UI Action","D":"UI Policy"}','C',
    'UI Actions (sys_ui_action) create buttons, links, and context-menu items on forms and lists. They can execute client-side JavaScript, call server-side scripts, or both, enabling custom user-triggered operations.',
    'Self-service & Automation') RETURNING id INTO v; q := q || v;

  -- ── Q31 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is a "Catalog Item" in ServiceNow Service Catalog?',
    '{"A":"A type of knowledge article","B":"A requestable item available through the Service Catalog or Service Portal","C":"A hardware inventory record","D":"A pre-built workflow template"}','B',
    'Catalog Items (sc_cat_item) are the individual goods or services users can request through the Service Catalog or Service Portal — for example, "New Laptop," "VPN Access," or "Password Reset."',
    'Service Catalog') RETURNING id INTO v; q := q || v;

  -- ── Q32 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'Which table stores the top-level Service Catalog request record in ServiceNow?',
    '{"A":"sc_req_item","B":"sc_request","C":"sc_catalog","D":"sc_cart"}','B',
    'sc_request holds the overall request submitted by the user. Each item within that request is stored in sc_req_item (RITM). A single sc_request can contain multiple sc_req_item records.',
    'Service Catalog') RETURNING id INTO v; q := q || v;

  -- ── Q33 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What are "Variables" in the context of a ServiceNow Catalog Item?',
    '{"A":"Stored values used in business rules","B":"Input fields on a catalog item that collect information from the requester","C":"Dynamic references to another table","D":"Placeholders in notification templates"}','B',
    'Variables are the questions or input fields (text, date, reference, checkbox, etc.) on a catalog item form. The information users enter is stored on the sc_req_item record and used to fulfil the request.',
    'Service Catalog') RETURNING id INTO v; q := q || v;

  -- ── Q34 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is the purpose of an "Order Guide" in the ServiceNow Service Catalog?',
    '{"A":"To display ordering instructions","B":"To bundle multiple catalog items ordered together in one submission","C":"To define the approval workflow for an item","D":"To set pricing tiers for catalog items"}','B',
    'An Order Guide (sc_cat_item_guide) allows multiple catalog items to be presented together so they can be ordered in a single transaction, useful for onboarding scenarios (laptop + software + badge).',
    'Service Catalog') RETURNING id INTO v; q := q || v;

  -- ── Q35 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What are "Record Producers" in ServiceNow?',
    '{"A":"Catalog items that, when submitted, create records in any specified ServiceNow table","B":"Users who create knowledge articles","C":"Scripts that generate records from templates","D":"Import sets that generate CI records"}','A',
    'Record Producers (sc_cat_item_producer) are catalog items configured to create records in any ServiceNow table (not just sc_req_item). For example, a Record Producer can create an Incident, a Change Request, or a custom table record from the portal.',
    'Service Catalog') RETURNING id INTO v; q := q || v;

  -- ── Q36 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is the ServiceNow "Service Portal"?',
    '{"A":"A legacy UI for older ServiceNow versions","B":"A modern self-service web interface built with AngularJS widgets for end users","C":"The admin interface for configuring ITSM processes","D":"An integration hub for third-party services"}','B',
    'Service Portal (sp_portal) is a responsive, widget-based self-service portal built on AngularJS and Bootstrap. It allows end users to submit requests, search the knowledge base, and track their tickets without accessing the main Now UI.',
    'Service Catalog') RETURNING id INTO v; q := q || v;

  -- ── Q37 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'Which field on a Catalog Item controls which users can see and request it in the Service Portal?',
    '{"A":"Visibility","B":"Available for","C":"Roles","D":"User Criteria"}','D',
    'User Criteria (sc_user_criteria) records define conditions (roles, groups, companies, locations) that determine who can view or order a catalog item. They replaced the older direct roles field on catalog items.',
    'Service Catalog') RETURNING id INTO v; q := q || v;

  -- ── Q38 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is the primary purpose of the ServiceNow Knowledge Base?',
    '{"A":"To store system configuration documentation","B":"To provide a repository of articles helping users and agents resolve issues","C":"To record all closed incidents for auditing","D":"To manage training materials for new employees"}','B',
    'The Knowledge Base (kb_knowledge_base) stores searchable articles that enable self-service resolution for end users and provide agents with documented solutions, reducing repeat incidents and call volume.',
    'Knowledge Management') RETURNING id INTO v; q := q || v;

  -- ── Q39 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'Which table stores Knowledge Base articles in ServiceNow?',
    '{"A":"kb_knowledge_base","B":"kb_article","C":"kb_knowledge","D":"sys_knowledge"}','C',
    'Knowledge articles are stored in the kb_knowledge table. The kb_knowledge_base table stores the knowledge base containers, while kb_knowledge holds individual articles with their content, state, and metadata.',
    'Knowledge Management') RETURNING id INTO v; q := q || v;

  -- ── Q40 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What does the default Knowledge Management workflow do?',
    '{"A":"Automatically categorises articles using AI","B":"Routes new articles through review and approval before publishing","C":"Sends article view counts to analytics","D":"Archives old articles based on an expiration date"}','B',
    'The default KM workflow routes newly created articles through a review/approval process. Articles must be approved before their state changes to Published and they become visible to users.',
    'Knowledge Management') RETURNING id INTO v; q := q || v;

  -- ── Q41 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What are "Knowledge Blocks" in ServiceNow?',
    '{"A":"Sections within a single knowledge article","B":"Reusable content snippets that can be embedded in multiple articles","C":"Restrictions that prevent certain users from viewing articles","D":"Automated responses generated from knowledge articles"}','B',
    'Knowledge Blocks are reusable content pieces (text, images, procedures) defined once and embedded into multiple knowledge articles. Updating a block automatically updates all articles that use it.',
    'Knowledge Management') RETURNING id INTO v; q := q || v;

  -- ── Q42 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'In ServiceNow, what does "Feedback" on a knowledge article allow users to do?',
    '{"A":"Flag articles for deletion","B":"Rate and comment on the usefulness of an article","C":"Trigger a review workflow","D":"Notify the author of required changes"}','B',
    'Article feedback lets users rate knowledge articles (thumbs up/down) and leave comments. This data helps knowledge managers identify articles that need improvement and rewards high-quality contributions.',
    'Knowledge Management') RETURNING id INTO v; q := q || v;

  -- ── Q43 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'Which ServiceNow feature links a knowledge article directly to an Incident so agents can easily share the solution with callers?',
    '{"A":"Knowledge Integration","B":"Attach Knowledge","C":"Solution Linker","D":"Case Deflection"}','B',
    'The "Attach Knowledge" option on an Incident form allows agents to search for and link relevant knowledge articles directly to the record. The linked articles are visible in the Related Knowledge tab.',
    'Knowledge Management') RETURNING id INTO v; q := q || v;

  -- ── Q44 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'In ServiceNow, what is a "Report"?',
    '{"A":"An automated email sent to users","B":"A visual or tabular representation of data from one or more tables","C":"A list of unresolved incidents","D":"A dashboard tile showing a single KPI"}','B',
    'Reports provide analysis of ServiceNow data through bar charts, pie charts, lists, pivot tables, and other visualisations. They can be shared, scheduled for email delivery, or embedded in dashboards.',
    'Reporting & Analytics') RETURNING id INTO v; q := q || v;

  -- ── Q45 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is a "Dashboard" in ServiceNow?',
    '{"A":"A form view of a single record","B":"A configurable page displaying multiple reports and data widgets","C":"An automated email digest","D":"A workspace for administrators only"}','B',
    'Dashboards (pa_dashboards) are configurable pages that can display multiple reports, Performance Analytics widgets, gauges, and other content. They are shareable and can be tailored per role or user.',
    'Reporting & Analytics') RETURNING id INTO v; q := q || v;

  -- ── Q46 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'Which ServiceNow module is used to configure and monitor Service Level Agreements?',
    '{"A":"Performance Analytics","B":"Task SLA","C":"SLA Definition","D":"Service Level Management (SLM)"}','D',
    'Service Level Management (SLM) is the application that manages SLA definitions, OLAs, and underpinning contracts. It attaches Task SLA records to tasks and tracks whether response and resolution targets are met.',
    'Reporting & Analytics') RETURNING id INTO v; q := q || v;

  -- ── Q47 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is the difference between an SLA and an OLA in ServiceNow terminology?',
    '{"A":"SLAs are commitments to external customers; OLAs are internal team commitments","B":"SLAs are automated; OLAs are manual","C":"SLAs cover uptime; OLAs cover response times","D":"There is no functional difference"}','A',
    'An SLA (Service Level Agreement) is a commitment made to an external customer defining response and resolution times. An OLA (Operational Level Agreement) is an internal agreement between IT teams supporting the delivery of the SLA.',
    'Reporting & Analytics') RETURNING id INTO v; q := q || v;

  -- ── Q48 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What does "PA" stand for in ServiceNow and what is its primary purpose?',
    '{"A":"Process Automation — to automate recurring tasks","B":"Performance Analytics — to analyse trends and KPIs over time","C":"Protocol Application — to manage integrations","D":"Policy Administration — to manage security policies"}','B',
    'Performance Analytics (PA) collects time-series data on key metrics, enabling trend analysis, forecasting, and historical KPI tracking that goes beyond the point-in-time view of standard reports.',
    'Reporting & Analytics') RETURNING id INTO v; q := q || v;

  -- ── Q49 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'Which feature helps prevent SLA breaches by triggering notifications or escalations before the deadline is reached?',
    '{"A":"Escalation Engine","B":"Task SLA workflow escalations","C":"SLA Breach Prevention module","D":"Automated Response Rules"}','B',
    'Task SLA records can trigger workflow or Flow Designer escalation actions at defined percentages of elapsed time (e.g., 50%, 75%, 90%), alerting managers or reassigning records before a breach occurs.',
    'Reporting & Analytics') RETURNING id INTO v; q := q || v;

  -- ── Q50 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is the "Condition Builder" in ServiceNow?',
    '{"A":"A tool to write complex database queries in SQL","B":"A code editor for business rules","C":"A visual UI element for defining filter criteria using AND/OR logic","D":"A module for building approval conditions"}','C',
    'The Condition Builder is the visual filter interface used throughout ServiceNow (lists, business rules, notifications, SLA definitions, etc.) to define AND/OR conditions without writing code.',
    'Reporting & Analytics') RETURNING id INTO v; q := q || v;

  -- ── Q51 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'In ServiceNow, which role typically has the highest level of system access and can configure all platform features?',
    '{"A":"itil","B":"admin","C":"security_admin","D":"system_admin"}','B',
    'The admin role grants full access to configure the ServiceNow platform, including creating tables, modifying business rules, managing users, and installing applications. The security_admin role specifically manages ACLs and security policies.',
    'User Interface & Navigation') RETURNING id INTO v; q := q || v;

  -- ── Q52 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is the purpose of "Impersonation" in ServiceNow?',
    '{"A":"Creating a fake user account for testing","B":"Logging in as another user to troubleshoot their experience without knowing their password","C":"Masking sensitive data in reports","D":"Simulating a workflow in a test environment"}','B',
    'Impersonation allows administrators (with the admin role) to temporarily act as another user to reproduce issues, test role-based access, or troubleshoot problems from that user''s perspective without needing their credentials.',
    'User Interface & Navigation') RETURNING id INTO v; q := q || v;

  -- ── Q53 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is a "Group" used for in ServiceNow?',
    '{"A":"A collection of tables with shared business logic","B":"A set of users who share responsibilities, can receive assignments, and share roles","C":"A category of knowledge articles","D":"A named filter on a list view"}','B',
    'Groups (sys_user_group) organise users who share responsibilities. Records such as Incidents can be assigned to a group''s queue. Groups can also have roles, making role management easier than assigning roles to individuals.',
    'Self-service & Automation') RETURNING id INTO v; q := q || v;

  -- ── Q54 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What does CMDB stand for in ServiceNow?',
    '{"A":"Configuration Management Database","B":"Change Management Database","C":"Central Monitoring and Discovery Base","D":"Compliance Monitoring and Data Base"}','A',
    'CMDB stands for Configuration Management Database. It stores Configuration Items (CIs) and their relationships, providing a central record of the IT infrastructure supporting business services.',
    'Database Management') RETURNING id INTO v; q := q || v;

  -- ── Q55 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'In ServiceNow, which process is used to populate the CMDB automatically by scanning the network?',
    '{"A":"Integration Hub","B":"Discovery","C":"Service Mapping","D":"MID Server"}','B',
    'Discovery is the ServiceNow application that automatically identifies and populates CI records in the CMDB by scanning the network using the MID Server to probe devices and services.',
    'Database Management') RETURNING id INTO v; q := q || v;

  -- ── Q56 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is the role of the "MID Server" in ServiceNow?',
    '{"A":"A middleware server that facilitates communication between the ServiceNow instance and network infrastructure","B":"A server that stores ServiceNow backups","C":"A dedicated reporting server","D":"A server that hosts the Service Portal"}','A',
    'The Management, Instrumentation, and Discovery (MID) Server is a Java application installed on a server in the customer''s network. It acts as a bridge between the ServiceNow cloud instance and on-premise systems for Discovery, Orchestration, and integrations.',
    'Self-service & Automation') RETURNING id INTO v; q := q || v;

  -- ── Q57 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'Which ServiceNow table stores information about all users in the system?',
    '{"A":"sys_group","B":"sys_person","C":"sys_user","D":"cmdb_user"}','C',
    'sys_user stores all user records in ServiceNow, including their name, email, department, location, roles, and login credentials. It is the primary user directory for the platform.',
    'User Interface & Navigation') RETURNING id INTO v; q := q || v;

  -- ── Q58 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is "Application Scope" in ServiceNow?',
    '{"A":"The number of users allowed to access an application","B":"A namespace that isolates customisations and prevents conflicts between applications","C":"The set of tables visible in a given application menu","D":"A license restriction on feature usage"}','B',
    'Application Scope (introduced in Helsinki) is a namespace for customisations. Scoped applications isolate their files, scripts, and tables, preventing naming conflicts and enabling controlled sharing through the ServiceNow Store.',
    'Self-service & Automation') RETURNING id INTO v; q := q || v;

  -- ── Q59 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'In ServiceNow, what is the "Update Set" feature used for?',
    '{"A":"A batch update that modifies multiple records at once","B":"A mechanism to capture and migrate customisations between instances","C":"A scheduled job that updates CMDB records","D":"A version control system for knowledge articles"}','B',
    'Update Sets capture configuration changes (business rules, forms, scripts, etc.) made in one instance (e.g., development) so they can be exported and applied to another instance (e.g., test or production).',
    'Self-service & Automation') RETURNING id INTO v; q := q || v;

  -- ── Q60 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is the Incident Management process primarily used for in ServiceNow?',
    '{"A":"Identifying and eliminating the root cause of recurring failures","B":"Restoring normal service operation as quickly as possible after a disruption","C":"Managing planned changes to IT infrastructure","D":"Tracking hardware assets and their lifecycle"}','B',
    'Incident Management (ITIL) focuses on restoring normal service as quickly as possible following an unplanned interruption, minimising business impact. Root cause analysis is handled by Problem Management.',
    'Self-service & Automation') RETURNING id INTO v; q := q || v;

  -- ── Create Exam Sets ────────────────────────────────────────────────────────

  -- Mock Exam 1: timed, 90 minutes, 60 questions
  INSERT INTO exam_sets (course_id, title, question_ids, duration_mins)
  VALUES (v_course_id, 'CSA Mock Exam 1', q, 90)
  ON CONFLICT DO NOTHING;

  -- Practice Exam 1: same questions, accessed via /study (StudyMode — untimed, shows explanations)
  INSERT INTO exam_sets (course_id, title, question_ids, duration_mins)
  VALUES (v_course_id, 'CSA Practice Exam 1', q, 120)
  ON CONFLICT DO NOTHING;

  RAISE NOTICE 'CSA seed complete: % questions, 2 exam sets created', array_length(q, 1);
END $$;
