-- ── ServiceNow CSA 2025/2026 Practice Exam Seed ────────────────────────────────
-- Replaces Practice Exam 1 with 60 NEW questions (Q61–Q120).
-- These questions are entirely distinct from the 60 Mock Exam questions in 0006.
-- Mock Exam 1  → Q1–Q60   (from 0006)
-- Practice Exam 1 → Q61–Q120 (from this file)
--
-- After running this file no question_id should appear in more than 3 exam_sets
-- (verified by the CHECK query at the bottom).

DO $$
DECLARE
  v_course_id UUID;
  p UUID[] := ARRAY[]::UUID[];   -- practice question ids
  v UUID;
BEGIN
  SELECT id INTO v_course_id FROM courses WHERE slug = 'servicenow-csa' LIMIT 1;
  IF v_course_id IS NULL THEN
    RAISE NOTICE 'Course servicenow-csa not found — aborting seed';
    RETURN;
  END IF;

  -- Remove only the old Practice exam set (keep Mock Exam 1 untouched)
  DELETE FROM exam_sets WHERE course_id = v_course_id AND title = 'CSA Practice Exam 1';

  -- ══════════════════════════════════════════════════════════════════════════════
  -- DOMAIN: User Interface & Navigation  (Q61–Q72)
  -- ══════════════════════════════════════════════════════════════════════════════

  -- ── Q61 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What does the "Global Search" bar in the ServiceNow Banner Frame search across by default?',
    '{"A":"Only the Incident table","B":"All tables the user has read access to, returning top results per category","C":"Only the Knowledge Base","D":"Only open tasks assigned to the current user"}','B',
    'Global Search performs a full-text, cross-table search and returns results grouped by category (Incidents, Users, Knowledge, etc.), limited to records the logged-in user can read via ACLs.',
    'User Interface & Navigation') RETURNING id INTO v; p := p || v;

  -- ── Q62 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'Which Application Navigator section displays the most recently visited records and pages?',
    '{"A":"Favorites","B":"History","C":"Recent Items","D":"Bookmarks"}','B',
    'The History section (clock icon) in the Application Navigator automatically tracks the last ~30 records and pages a user visited, allowing quick return navigation without searching.',
    'User Interface & Navigation') RETURNING id INTO v; p := p || v;

  -- ── Q63 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is the purpose of "Breadcrumbs" shown at the top of a ServiceNow list or form?',
    '{"A":"They show the table inheritance hierarchy","B":"They display the navigation path and allow clicking back to parent list views","C":"They show record ownership history","D":"They indicate unsaved changes"}','B',
    'Breadcrumbs display the path from the application menu → module → record (e.g., Incident > All > INC0001234). Clicking a breadcrumb navigates back to that level, making it easy to return to a list without using the browser back button.',
    'User Interface & Navigation') RETURNING id INTO v; p := p || v;

  -- ── Q64 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'How can a user personalise the columns displayed in a ServiceNow list view?',
    '{"A":"By editing the sys_dictionary table","B":"By right-clicking a column header and choosing \"Configure > List Layout\"","C":"By submitting a request to an administrator","D":"By editing the URL query string"}','B',
    'Right-clicking a column header provides a context menu including "Configure > List Layout" (or "List Columns"), which opens a slushbucket to add, remove, or reorder columns for that user''s personal view of the list.',
    'User Interface & Navigation') RETURNING id INTO v; p := p || v;

  -- ── Q65 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is the "Activity Stream" displayed on a ServiceNow record?',
    '{"A":"A real-time feed of all system events","B":"A chronological log of work notes, comments, state changes, and field edits on a single record","C":"A live chat window with other agents","D":"A list of related child records"}','B',
    'The Activity Stream (also called Activities or Work History) shows an audit-style log on the record form: all comments, work notes, field changes (what changed, who changed it, when), and email communications related to that specific record.',
    'User Interface & Navigation') RETURNING id INTO v; p := p || v;

  -- ── Q66 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'In ServiceNow, what is the difference between "Work Notes" and "Additional Comments" on a task form?',
    '{"A":"Work Notes are internal; Additional Comments are visible to end users via the portal","B":"Work Notes are mandatory; Additional Comments are optional","C":"Work Notes trigger SLA escalations; Additional Comments do not","D":"There is no functional difference"}','A',
    'Work Notes are internal journal entries visible only to agents with the itil role. Additional Comments (Customer-visible) are shared with the end user via the self-service portal and email notifications, making the distinction critical for communication management.',
    'User Interface & Navigation') RETURNING id INTO v; p := p || v;

  -- ── Q67 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is a "Workspace" in ServiceNow (e.g., Agent Workspace)?',
    '{"A":"A sandboxed sub-instance used for development","B":"A modern, role-optimised interface designed for specific personas like agents or field workers","C":"A shared folder for storing scripts","D":"A scoped application container"}','B',
    'Workspaces are purpose-built UI experiences (built on the Now Platform UX framework) tailored for specific roles. Agent Workspace, for example, gives service desk agents a unified view with multi-tab browsing, contextual actions, and guided decision-making.',
    'User Interface & Navigation') RETURNING id INTO v; p := p || v;

  -- ── Q68 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What does "Personalise Form" allow a user to do in ServiceNow?',
    '{"A":"Change the platform theme for all users","B":"Add, remove, or reorder fields on a form for that user only without affecting other users","C":"Create new database fields","D":"Change mandatory field settings for all roles"}','B',
    'Personalise Form (accessed from the form context menu) lets an individual user adjust which fields are shown on their form view. These changes are personal and do not affect other users'' views, unlike administrator-level form layout changes.',
    'User Interface & Navigation') RETURNING id INTO v; p := p || v;

  -- ── Q69 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is the purpose of "Tags" in ServiceNow?',
    '{"A":"To define ACL conditions","B":"To categorise and organise records with user-defined labels for easy filtering","C":"To mark records for deletion","D":"To trigger automation workflows"}','B',
    'Tags (label_entry) allow users to attach custom labels to records across any table. Tagged records can then be filtered and found in the "My Tagged Documents" module, providing flexible personal organisation beyond standard categories.',
    'User Interface & Navigation') RETURNING id INTO v; p := p || v;

  -- ── Q70 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is the "Connect Chat" feature in ServiceNow?',
    '{"A":"An integration with external messaging apps","B":"A built-in real-time messaging system allowing collaboration within ServiceNow records","C":"A video conferencing module","D":"A bot that answers ITSM questions automatically"}','B',
    'Connect Chat (Connect Support) is ServiceNow''s built-in instant messaging tool. Agents can chat in real time within the context of a record, @mention colleagues, and the conversation is saved to the record''s activity stream.',
    'User Interface & Navigation') RETURNING id INTO v; p := p || v;

  -- ── Q71 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What does saving a "Filter" in a ServiceNow list create?',
    '{"A":"A permanent database view","B":"A named condition set that can be reapplied to the same list later","C":"A scheduled report","D":"A new table with filtered records"}','B',
    'Saved filters store the current list filter criteria under a user-defined name. They appear in the filter breadcrumb dropdown and can be re-applied at any time without re-entering the conditions, and can optionally be shared with other users.',
    'User Interface & Navigation') RETURNING id INTO v; p := p || v;

  -- ── Q72 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is the purpose of "Homepages" in ServiceNow?',
    '{"A":"They are the same as Dashboards","B":"They are user-configurable portal-style pages with widgets, available in the classic UI","C":"They replace the Application Navigator","D":"They are only visible to administrators"}','B',
    'Homepages (classic UI) are customisable pages built with a column layout of widgets (gazetteers). They have been largely superseded by Dashboards but are still widely used for personalised landing pages in classic ServiceNow UIs.',
    'User Interface & Navigation') RETURNING id INTO v; p := p || v;

  -- ══════════════════════════════════════════════════════════════════════════════
  -- DOMAIN: Database Administration & Tables  (Q73–Q82)
  -- ══════════════════════════════════════════════════════════════════════════════

  -- ── Q73 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is a "Choice" field type in ServiceNow?',
    '{"A":"A field that stores Boolean true/false values","B":"A field with a predefined, selectable list of options stored in the sys_choice table","C":"A reference field pointing to any table","D":"A field that stores a URL"}','B',
    'Choice fields present a drop-down menu to users. The available options are stored in sys_choice records keyed by table name and field name. Administrators can add, edit, or deactivate choice options without code changes.',
    'Database Management') RETURNING id INTO v; p := p || v;

  -- ── Q74 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is the "Display Value" of a Reference field in ServiceNow?',
    '{"A":"The sys_id stored in the database","B":"The human-readable value shown in the UI, usually the referenced record''s display field","C":"The field label shown above the input","D":"The default value assigned on insert"}','B',
    'A Reference field stores the sys_id in the database but renders the display value in the UI. The display value is determined by the referenced table''s "Display" field (often the name or number field). Scripts can access both via gr.field.getValue() (sys_id) and gr.field.getDisplayValue().',
    'Database Management') RETURNING id INTO v; p := p || v;

  -- ── Q75 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is a "Journal" field in ServiceNow (e.g., work_notes)?',
    '{"A":"A field that stores a single date and time","B":"An append-only text field that keeps all previous entries; new text is prepended","C":"A field linked to an external audit log","D":"A field type that stores structured JSON"}','B',
    'Journal fields (type = journal) are append-only: each save prepends the new entry with a timestamp and user name. The full history is preserved in the sys_journal_field table, making them ideal for audit trails like Work Notes and Additional Comments.',
    'Database Management') RETURNING id INTO v; p := p || v;

  -- ── Q76 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is a "Calculated" field in ServiceNow?',
    '{"A":"A field whose value is computed by a formula or script automatically, never edited manually","B":"A field used only in reports","C":"A field populated by a Business Rule on insert","D":"A field that aggregates values from child records"}','A',
    'Calculated fields have the "Calculated" checkbox enabled in the Dictionary. Their value is derived from a formula (for numeric types) or a calculation script and is read-only on forms. They are recomputed automatically when related field values change.',
    'Database Management') RETURNING id INTO v; p := p || v;

  -- ── Q77 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is a "Database View" in ServiceNow?',
    '{"A":"A saved filter configuration on a list","B":"A virtual read-only table that joins two or more real tables, used mainly for reporting","C":"A custom form layout for a specific role","D":"A replica of a table in an external database"}','B',
    'Database Views (sys_db_view) join multiple tables into a single virtual read-only table without duplicating data. They are useful for cross-table reports, especially when dot-walking is insufficient for complex joins.',
    'Database Management') RETURNING id INTO v; p := p || v;

  -- ── Q78 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What does the "Unique" attribute on a Dictionary field enforce?',
    '{"A":"That the field must be filled in before saving","B":"That no two records in the table can have the same value in that field","C":"That the field is indexed for faster searches","D":"That the field is read-only"}','B',
    'Setting the Unique attribute creates a database-level unique constraint on the column, preventing duplicate values across all records in the table. ServiceNow will display an error if a save would violate the constraint.',
    'Database Management') RETURNING id INTO v; p := p || v;

  -- ── Q79 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is the CMDB (Configuration Management Database) primarily used for in ServiceNow?',
    '{"A":"Storing email templates","B":"Recording and managing Configuration Items (CIs) and their relationships to support ITSM processes","C":"Archiving closed incidents","D":"Managing user accounts and roles"}','B',
    'The CMDB stores CIs (servers, applications, services, etc.) and the relationships between them. It underpins Change, Incident, and Problem management by showing what is affected when a CI has an issue, and supports service dependency mapping.',
    'Database Management') RETURNING id INTO v; p := p || v;

  -- ── Q80 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'Which CMDB table is the base table for all Configuration Items in ServiceNow?',
    '{"A":"cmdb_rel_ci","B":"cmdb","C":"cmdb_ci","D":"sys_ci_base"}','C',
    'cmdb_ci is the base CI table. All specific CI types (servers: cmdb_ci_computer; applications: cmdb_ci_appl; services: cmdb_ci_service) extend cmdb_ci, inheriting common fields like name, asset_tag, and operational_status.',
    'Database Management') RETURNING id INTO v; p := p || v;

  -- ── Q81 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is the purpose of the "Audit" (sys_audit) table in ServiceNow?',
    '{"A":"To store user login history","B":"To record every field-level change made to audited records, including old and new values","C":"To log all failed ACL checks","D":"To store system error messages"}','B',
    'When auditing is enabled on a table/field, every change is written to sys_audit with the record sys_id, field name, old value, new value, timestamp, and user. This provides a complete change history for compliance and troubleshooting.',
    'Database Management') RETURNING id INTO v; p := p || v;

  -- ── Q82 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is "Field Normalization" in the ServiceNow CMDB?',
    '{"A":"Converting field types from String to Integer","B":"Standardising CI attribute values to canonical forms (e.g., \"Windows Server 2019\" vs \"Win Svr 19\") to ensure data consistency","C":"Archiving outdated field definitions","D":"Removing duplicate fields from inherited tables"}','B',
    'CMDB Field Normalization identifies and corrects inconsistent or non-standard values in CI attributes (manufacturer, OS, model) by mapping them to approved reference values, improving data quality for Discovery and CMDB Health dashboards.',
    'Database Management') RETURNING id INTO v; p := p || v;

  -- ══════════════════════════════════════════════════════════════════════════════
  -- DOMAIN: Service Catalog & Request Management  (Q83–Q92)
  -- ══════════════════════════════════════════════════════════════════════════════

  -- ── Q83 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'In ServiceNow Service Catalog, what is the relationship between a REQ (Request) and a RITM (Requested Item)?',
    '{"A":"They are the same record","B":"A REQ is the shopping-cart container; each line item ordered generates one RITM","C":"A RITM is the parent of a REQ","D":"REQ records belong to end users; RITM records belong to fulfillers"}','B',
    'When a user submits a Service Catalog order, a Request (REQ) record is created as a container. Each catalog item in the order produces a separate Requested Item (RITM) with its own approval and fulfilment tasks, allowing independent tracking.',
    'Self-service & Automation') RETURNING id INTO v; p := p || v;

  -- ── Q84 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is a "Variable" in a ServiceNow Catalog Item?',
    '{"A":"A reusable JavaScript function","B":"A custom input field added to the catalog item form to collect information from the requester","C":"A system field that auto-populates","D":"A price adjustment rule"}','B',
    'Variables are the user-facing input fields (text, checkbox, reference, date, etc.) added to a catalog item. The answers users provide are stored on the RITM and can drive approval logic, fulfilment workflows, and Service Portal behaviour.',
    'Self-service & Automation') RETURNING id INTO v; p := p || v;

  -- ── Q85 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is an "Order Guide" in the ServiceNow Service Catalog?',
    '{"A":"A PDF guide on how to order catalog items","B":"A catalog item that bundles multiple catalog items together, ordered with a single submission","C":"An approval rule for catalog orders","D":"A report showing most-ordered items"}','B',
    'An Order Guide lets administrators bundle several catalog items into a single request form. When a user orders an Order Guide, all included items are added to their cart simultaneously, simplifying complex, multi-step ordering scenarios.',
    'Self-service & Automation') RETURNING id INTO v; p := p || v;

  -- ── Q86 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is a "Record Producer" in ServiceNow?',
    '{"A":"A scheduled job that generates records","B":"A catalog item type that creates a record in any table (not just sc_req_item) when submitted","C":"A business rule that duplicates records","D":"A report that lists all created records"}','B',
    'Record Producers are catalog items that, on submission, create a record in a target table of your choice (e.g., an Incident, Problem, or custom table) rather than an RITM. They allow self-service creation of non-catalog records through the Service Portal.',
    'Self-service & Automation') RETURNING id INTO v; p := p || v;

  -- ── Q87 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What does a "Catalog Client Script" do in ServiceNow?',
    '{"A":"Runs on the server when a catalog item is submitted","B":"Runs in the browser to dynamically change catalog form behaviour based on variable values","C":"Sends an email when a catalog item is ordered","D":"Updates CI records related to the catalog item"}','B',
    'Catalog Client Scripts (sc_cat_item_script) are JavaScript functions that execute in the browser on catalog item forms. They can show/hide, mandate, or populate variables in real time in response to user input, similar to UI Policies but specifically for catalog variables.',
    'Self-service & Automation') RETURNING id INTO v; p := p || v;

  -- ── Q88 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is the purpose of "Approval" rules in a Service Catalog item?',
    '{"A":"To validate variable input before submission","B":"To require one or more users or groups to approve an RITM before fulfilment begins","C":"To automatically fulfil items without human review","D":"To notify the requester that their item is ready"}','B',
    'Approval rules on catalog items pause fulfilment and create Approval records for designated approvers (by user, group, or manager). Fulfilment tasks only start once all required approvals are granted, enforcing governance controls.',
    'Self-service & Automation') RETURNING id INTO v; p := p || v;

  -- ── Q89 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is a "Service Portal" in ServiceNow?',
    '{"A":"A separate ServiceNow instance for external customers","B":"A mobile-friendly self-service web interface where users can submit requests, search knowledge, and track tickets","C":"The administrator console for managing platform settings","D":"An API gateway for external integrations"}','B',
    'Service Portal (sp_portal) is a responsive, widget-based self-service interface. Users can browse the Service Catalog, search knowledge articles, view and update their incidents, and interact with Now Virtual Agent — all without accessing the classic UI.',
    'Self-service & Automation') RETURNING id INTO v; p := p || v;

  -- ── Q90 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is a "Content Management System (CMS)" in ServiceNow and how does it differ from Service Portal?',
    '{"A":"They are identical products","B":"CMS is the older, frame-based self-service interface; Service Portal is the modern widget-based replacement","C":"CMS is for internal use; Service Portal is for external customers only","D":"CMS manages catalog item content; Service Portal manages dashboard content"}','B',
    'The original CMS used iFrames and page-based design and has been deprecated in favour of Service Portal, which uses a widget/AngularJS architecture. Most organisations migrate from CMS to Service Portal for improved mobile responsiveness and maintainability.',
    'Self-service & Automation') RETURNING id INTO v; p := p || v;

  -- ── Q91 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is a "Catalog UI Policy" in ServiceNow?',
    '{"A":"An access control restricting who can view catalog items","B":"A rule that controls the visibility, mandatory state, or read-only state of catalog variables on a catalog item form","C":"A policy governing catalog item pricing","D":"A UI customisation for the Service Portal header"}','B',
    'Catalog UI Policies work like standard UI Policies but are scoped to Service Catalog variable sets and catalog item forms. They can show/hide variables, make them mandatory, or set them read-only based on other variable values — without requiring a client script.',
    'Self-service & Automation') RETURNING id INTO v; p := p || v;

  -- ── Q92 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What happens to a Service Catalog request when an approval is "Rejected"?',
    '{"A":"The request moves to the next approver","B":"The RITM is cancelled and the requester is notified","C":"The RITM is placed on hold indefinitely","D":"A new approval request is generated automatically"}','B',
    'When an approval is rejected, the associated RITM state moves to Cancelled (or Rejected depending on the workflow). A notification is typically sent to the requester explaining the rejection, and fulfilment tasks are not created.',
    'Self-service & Automation') RETURNING id INTO v; p := p || v;

  -- ══════════════════════════════════════════════════════════════════════════════
  -- DOMAIN: Self-service & Automation (Business Rules, Client Scripts, Notifications, Flows)  (Q93–Q104)
  -- ══════════════════════════════════════════════════════════════════════════════

  -- ── Q93 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is the execution order of multiple Business Rules that fire on the same table operation?',
    '{"A":"Alphabetically by name","B":"By the Order field value on each Business Rule (lower number runs first)","C":"Randomly","D":"By creation date, oldest first"}','B',
    'When multiple Business Rules fire on the same table/operation, ServiceNow executes them in ascending Order field sequence (e.g., 100 before 200). Within the same Order value, execution sequence is not guaranteed, so carefully setting Order avoids conflicts.',
    'Self-service & Automation') RETURNING id INTO v; p := p || v;

  -- ── Q94 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is a "Client Script" in ServiceNow and when does it execute?',
    '{"A":"A server-side script that runs after a record is saved","B":"A JavaScript function that runs in the user''s browser in response to form events","C":"A scheduled script that runs nightly","D":"A script embedded in email notifications"}','B',
    'Client Scripts (sys_script_client) run in the browser and respond to form events: onLoad (when the form loads), onChange (when a field value changes), onSubmit (before save), and onCellEdit (in list editing). They can manipulate fields but cannot directly access server-side data without a GlideAjax call.',
    'Self-service & Automation') RETURNING id INTO v; p := p || v;

  -- ── Q95 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is the purpose of a "Script Include" in ServiceNow?',
    '{"A":"To store reusable server-side JavaScript libraries callable from Business Rules, REST APIs, and other scripts","B":"To include external CSS files","C":"To add third-party JavaScript to a client script","D":"To run scheduled background scripts"}','A',
    'Script Includes (sys_script_include) are reusable server-side JavaScript classes or functions. Defining logic once in a Script Include allows Business Rules, scheduled jobs, REST endpoints, and other server scripts to call it, promoting DRY (Don''t Repeat Yourself) code.',
    'Self-service & Automation') RETURNING id INTO v; p := p || v;

  -- ── Q96 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is a "Notification" in ServiceNow used for?',
    '{"A":"Displaying pop-up messages in the UI to all users simultaneously","B":"Sending email, SMS, or push messages to users when specific record conditions are met","C":"Logging system warnings to the application log","D":"Alerting developers to JavaScript errors"}','B',
    'Notifications (sysevent_email_action) are configured rules that send messages (email, SMS, push) when specific events occur or record conditions are met — for example, emailing the assigned user when an Incident is assigned to them.',
    'Self-service & Automation') RETURNING id INTO v; p := p || v;

  -- ── Q97 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is the purpose of an "Update Set" in ServiceNow?',
    '{"A":"To apply bulk data changes to records","B":"To capture configuration changes made in one instance so they can be transferred to another instance","C":"To update all records in a table using a background script","D":"To store the version history of a single record"}','B',
    'Update Sets record configuration changes (business rules, form layouts, scripts, etc.) made in a development or UAT instance. The Update Set XML is exported and imported into higher environments (e.g., Production) to deploy those changes.',
    'Self-service & Automation') RETURNING id INTO v; p := p || v;

  -- ── Q98 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'In ServiceNow, what is a "Fix Script"?',
    '{"A":"A script used to fix JavaScript syntax errors automatically","B":"A one-time server-side script run in a specific instance to repair or migrate data, then deactivated","C":"A client script that prevents invalid form submissions","D":"A background script that continuously monitors for data issues"}','B',
    'Fix Scripts (sys_script_fix) are one-time server-side Rhino scripts used to perform data migrations, backfill fields, or correct bad data in a specific instance. They are run once and then inactivated to prevent accidental re-execution.',
    'Self-service & Automation') RETURNING id INTO v; p := p || v;

  -- ── Q99 ────────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is "GlideAjax" used for in ServiceNow client scripts?',
    '{"A":"To perform AJAX calls from the server to external APIs","B":"To make asynchronous server-side calls from a client script without reloading the page","C":"To synchronise two tables in real time","D":"To generate dynamic HTML in the Content Frame"}','B',
    'GlideAjax allows client scripts to call a server-side Script Include method asynchronously. The script include must extend AbstractAjaxProcessor. The result is returned via a callback, enabling client scripts to fetch server data (e.g., query a table) without a full page load.',
    'Self-service & Automation') RETURNING id INTO v; p := p || v;

  -- ── Q100 ───────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'Which Flow Designer trigger starts a flow when a specific field value changes on a record?',
    '{"A":"Record Created","B":"Record Updated","C":"Scheduled","D":"Inbound Email"}','B',
    'The "Record Updated" trigger fires a flow when a record in the specified table is updated. You can further restrict it to fire only when a particular field (e.g., State) changes to a specific value, making it highly targeted.',
    'Self-service & Automation') RETURNING id INTO v; p := p || v;

  -- ── Q101 ───────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is a "Subflow" in ServiceNow Flow Designer?',
    '{"A":"A flow that runs inside a workflow","B":"A reusable flow component that can be called from other flows or subflows, promoting modularity","C":"A child flow triggered by a parent approval","D":"A flow that runs in the background silently"}','B',
    'Subflows are reusable Flow Designer components. A main flow or another subflow can call a subflow with inputs and receive outputs. They prevent duplication of complex logic — for example, a "Send Approval" subflow can be reused across multiple processes.',
    'Self-service & Automation') RETURNING id INTO v; p := p || v;

  -- ── Q102 ───────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is the "Inbound Email Action" feature in ServiceNow?',
    '{"A":"A rule that sends emails when a record is created","B":"A configuration that parses inbound emails and creates or updates records based on email content","C":"A spam filter for the ServiceNow mailbox","D":"An IMAP connection setting for reading emails"}','B',
    'Inbound Email Actions (sysevent_in_email_action) define rules applied to emails arriving in the ServiceNow mailbox. Based on subject, sender, or body content, they can create new records (e.g., Incidents), update existing records, or route emails to specific groups.',
    'Self-service & Automation') RETURNING id INTO v; p := p || v;

  -- ── Q103 ───────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What does it mean when a Business Rule has "Run as" set to a specific user?',
    '{"A":"The business rule will only fire when that user edits a record","B":"The business rule''s script will execute with that user''s session and ACL permissions","C":"Notifications triggered by the rule are sent only to that user","D":"The rule is owned by that user for auditing"}','B',
    '"Run as" on a Business Rule determines the user context in which the script runs. If set to a specific user, the script''s access to records is governed by that user''s roles. This is used to elevate or restrict permissions during automated processing.',
    'Self-service & Automation') RETURNING id INTO v; p := p || v;

  -- ── Q104 ───────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is the purpose of "Event Management" (sys_event) in ServiceNow automation?',
    '{"A":"To manage IT infrastructure monitoring alerts","B":"To provide a publish-subscribe mechanism where scripts fire named events and notifications/workflows listen for them","C":"To track user activity events for compliance","D":"To schedule platform maintenance windows"}','B',
    'Event Management (sys_event) is ServiceNow''s pub-sub system. Scripts call gs.eventQueue() to publish a named event. Notifications and script actions listen for those events and react — for example, the ''incident.commented'' event triggers a notification to the assigned user.',
    'Self-service & Automation') RETURNING id INTO v; p := p || v;

  -- ══════════════════════════════════════════════════════════════════════════════
  -- DOMAIN: Knowledge Management  (Q105–Q110)
  -- ══════════════════════════════════════════════════════════════════════════════

  -- ── Q105 ───────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is a "Knowledge Base" in ServiceNow and how does it differ from an individual Knowledge Article?',
    '{"A":"They are the same thing","B":"A Knowledge Base is the top-level container (category) that organises multiple articles; an article is a single content document within it","C":"A Knowledge Base is a database of FAQs; articles are step-by-step guides only","D":"A Knowledge Base is read-only; articles can be edited"}','B',
    'Knowledge Bases (kb_knowledge_base) are organisational containers, each with their own set of managers, access controls, and workflow configurations. Knowledge Articles (kb_knowledge) live inside a Knowledge Base and contain the actual content.',
    'Knowledge Management') RETURNING id INTO v; p := p || v;

  -- ── Q106 ───────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What are "Article Templates" in ServiceNow Knowledge Management used for?',
    '{"A":"To automatically publish articles on a schedule","B":"To provide pre-structured content frameworks that authors fill in when creating new articles","C":"To restrict who can read certain articles","D":"To translate articles into multiple languages"}','B',
    'Article Templates (kb_template) provide a structured starting point with predefined sections, headings, and placeholder text. They ensure consistency across articles — for example, an incident resolution template with sections for Symptom, Cause, and Resolution.',
    'Knowledge Management') RETURNING id INTO v; p := p || v;

  -- ── Q107 ───────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What does the "Valid to" date on a ServiceNow knowledge article control?',
    '{"A":"The date after which the article can no longer be edited","B":"The date on which the article automatically expires and is retired if not renewed","C":"The publish date of the article","D":"The date the article review was last approved"}','B',
    'The "Valid to" date defines the article''s expiration. When reached, the article state changes to "Review" or "Retired" depending on the Knowledge Base''s retirement workflow, prompting knowledge managers to verify the content is still accurate.',
    'Knowledge Management') RETURNING id INTO v; p := p || v;

  -- ── Q108 ───────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is "Knowledge Centered Service (KCS)" integration in ServiceNow?',
    '{"A":"A third-party plugin for importing external knowledge","B":"A methodology and set of ServiceNow features that encourage creating and updating knowledge articles as part of the normal incident resolution process","C":"A dedicated KCS chatbot module","D":"An automated knowledge article generator using AI"}','B',
    'KCS (Knowledge Centered Service) in ServiceNow provides guided prompts for agents to search before creating tickets, suggest or create articles during resolution, and rate article quality. The goal is to build the knowledge base organically through daily work rather than separate authoring projects.',
    'Knowledge Management') RETURNING id INTO v; p := p || v;

  -- ── Q109 ───────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is the purpose of "Knowledge Subscriptions" in ServiceNow?',
    '{"A":"Paid tiers for accessing premium knowledge content","B":"Allowing users to follow a knowledge article or category and receive notifications when content is updated","C":"Restricting access to knowledge articles by subscription level","D":"Scheduling knowledge article deliveries by email digest"}','B',
    'Knowledge Subscriptions let users subscribe to specific articles or knowledge bases. When subscribed content is updated or a new article is published in a followed base, subscribers receive a notification — keeping teams up-to-date without manual checking.',
    'Knowledge Management') RETURNING id INTO v; p := p || v;

  -- ── Q110 ───────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What happens when an agent clicks "Mark as Helpful" on a Knowledge Article attached to an Incident?',
    '{"A":"The article is immediately published to the portal","B":"A positive feedback entry is created and the article''s view/helpful count increments, informing knowledge quality scores","C":"The article is attached as a PDF to the incident","D":"The agent is prompted to edit the article"}','B',
    'Marking an article helpful creates a feedback record (kb_feedback) and increments helpful metrics on the article. These metrics feed into knowledge quality dashboards, helping knowledge managers prioritise which articles to promote or improve.',
    'Knowledge Management') RETURNING id INTO v; p := p || v;

  -- ══════════════════════════════════════════════════════════════════════════════
  -- DOMAIN: Incident, Problem & Change Management  (Q111–Q118)
  -- ══════════════════════════════════════════════════════════════════════════════

  -- ── Q111 ───────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is an "Incident" in ITIL/ServiceNow terminology?',
    '{"A":"A planned maintenance window","B":"An unplanned interruption to or reduction in the quality of an IT service","C":"A request for new IT equipment","D":"A security vulnerability report"}','B',
    'An Incident is an unplanned event that disrupts or degrades a service. The goal of Incident Management is to restore normal service operation as quickly as possible to minimise business impact. Incidents are distinct from Service Requests (planned actions).',
    'Self-service & Automation') RETURNING id INTO v; p := p || v;

  -- ── Q112 ───────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'Which standard Incident states are available in a default ServiceNow implementation (in order)?',
    '{"A":"Open → In Progress → Pending → Resolved → Closed","B":"New → Investigating → Fixing → Closed","C":"Draft → Submitted → Approved → Closed","D":"Open → Assigned → Completed → Verified"}','A',
    'The default Incident lifecycle is: 1-New, 2-In Progress, 3-On Hold (pending), 6-Resolved, 7-Closed. The "Pending" state uses sub-states (e.g., Awaiting Caller, Awaiting Change) to track why the incident is on hold.',
    'Self-service & Automation') RETURNING id INTO v; p := p || v;

  -- ── Q113 ───────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is a "Problem" record in ServiceNow and how does it differ from an Incident?',
    '{"A":"They are identical — Problem is just older terminology","B":"A Problem investigates the root cause of one or more Incidents; an Incident focuses on restoring service quickly","C":"A Problem is a planned change; an Incident is unplanned","D":"A Problem is raised only by managers; Incidents are raised by end users"}','B',
    'Problem Management investigates root causes to prevent recurrence. Problems are raised when the same Incident recurs or when a major Incident needs root-cause analysis. An Incident targets fast restoration; a Problem targets permanent fix.',
    'Self-service & Automation') RETURNING id INTO v; p := p || v;

  -- ── Q114 ───────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is a "Known Error" in ServiceNow Problem Management?',
    '{"A":"A documented error in the ServiceNow codebase","B":"A Problem where the root cause is identified and a workaround or fix exists, stored in the KEDB","C":"An Incident flagged as a recurring issue","D":"An article in the Knowledge Base describing a common mistake"}','B',
    'A Known Error (KEDB entry) is created when a Problem''s root cause is identified. It documents the cause, impact, and available workaround. Agents can reference Known Errors to resolve related Incidents faster, and link new Incidents to the Known Error.',
    'Self-service & Automation') RETURNING id INTO v; p := p || v;

  -- ── Q115 ───────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What are the three standard Change Request types in ServiceNow and their key differences?',
    '{"A":"Normal, Standard, Emergency","B":"Minor, Major, Critical","C":"Planned, Unplanned, Emergency","D":"Low, Medium, High"}','A',
    'Normal Changes require full CAB approval. Standard Changes are pre-approved, low-risk, routine changes (e.g., password reset procedure) that follow a defined process without CAB. Emergency Changes are expedited for urgent situations and follow a streamlined approval process with an Emergency CAB if needed.',
    'Self-service & Automation') RETURNING id INTO v; p := p || v;

  -- ── Q116 ───────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is the role of the Change Advisory Board (CAB) in ServiceNow Change Management?',
    '{"A":"A group of users who test new ServiceNow features","B":"A body that reviews and approves or rejects Normal and Emergency Change Requests before implementation","C":"The team responsible for deploying code to production","D":"An automated approval workflow with no human involvement"}','B',
    'The CAB reviews Change Requests to assess risk, resource requirements, and impact. In ServiceNow, a CAB workbench allows the CAB manager to schedule and conduct CAB meetings, review changes, and record decisions — approving, rejecting, or requesting more information.',
    'Self-service & Automation') RETURNING id INTO v; p := p || v;

  -- ── Q117 ───────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What does "Major Incident Management" (MIM) in ServiceNow provide?',
    '{"A":"A report showing all incidents with P1 priority","B":"A dedicated workspace and process for managing high-impact incidents requiring cross-team coordination","C":"An automated escalation to external vendors","D":"A compliance audit trail for Severity 1 issues"}','B',
    'Major Incident Management provides a dedicated workbench, communication templates, stakeholder bridges, and streamlined workflows for P1/P2 incidents. It helps major incident managers coordinate resolution, communicate status, and conduct post-incident reviews.',
    'Self-service & Automation') RETURNING id INTO v; p := p || v;

  -- ── Q118 ───────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is the purpose of the "Close Notes" field when resolving an Incident in ServiceNow?',
    '{"A":"To record internal comments visible only to administrators","B":"To document the resolution applied so the solution is captured for future reference and knowledge creation","C":"To trigger the SLA timer to stop","D":"To attach files to the resolved incident"}','B',
    'Close Notes (resolution_notes) capture the steps taken to resolve the incident. This information is surfaced to end users in their portal view and is used as source material for creating Knowledge Articles — forming the link between Incident Management and Knowledge Management.',
    'Self-service & Automation') RETURNING id INTO v; p := p || v;

  -- ══════════════════════════════════════════════════════════════════════════════
  -- DOMAIN: Reporting & Analytics  (Q119–Q120)
  -- ══════════════════════════════════════════════════════════════════════════════

  -- ── Q119 ───────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is the purpose of "Scheduled Reports" in ServiceNow?',
    '{"A":"To run reports during off-peak hours only","B":"To automatically generate and email reports to specified recipients at defined intervals","C":"To lock reports so they cannot be edited during business hours","D":"To create reports that refresh every second on a dashboard"}','B',
    'Scheduled Reports (sysauto_report) automatically run a saved report on a defined schedule (daily, weekly, monthly) and email the output (PDF, Excel, CSV) to a list of recipients. This eliminates the need for users to manually run recurring reports.',
    'Reporting & Analytics') RETURNING id INTO v; p := p || v;

  -- ── Q120 ───────────────────────────────────────────────────────────────────
  INSERT INTO questions (course_id,body,options,correct,explanation,domain) VALUES (v_course_id,
    'What is a "Gauge" widget in ServiceNow and where is it used?',
    '{"A":"A speedometer-style visual that shows a single metric value against a target range, used on Dashboards and Homepages","B":"A graph type for time-series trend data only","C":"A Progress Bar shown inside a form record","D":"A KPI tile that only displays numeric counts"}','A',
    'Gauge widgets display a single value (e.g., current open incidents: 47) against a configurable range with colour zones (green/yellow/red). They are added to Dashboards and Homepages to give instant visibility into KPIs without needing to open a full report.',
    'Reporting & Analytics') RETURNING id INTO v; p := p || v;

  -- ══════════════════════════════════════════════════════════════════════════════
  -- Create new Practice Exam 1 using only Q61–Q120
  -- ══════════════════════════════════════════════════════════════════════════════
  INSERT INTO exam_sets (course_id, title, question_ids, duration_minutes)
  VALUES (v_course_id, 'CSA Practice Exam 1', p, 120);

  RAISE NOTICE 'Practice Exam 1 created with % new questions (Q61–Q120). No question is shared with Mock Exam 1.', array_length(p,1);

  -- ── Verify no question appears in more than 3 exam_sets (safety check) ─────
  -- This query is informational; if any question_id appears in > 3 sets the
  -- NOTICE will report it.
  DECLARE
    v_violations INT;
  BEGIN
    SELECT COUNT(*) INTO v_violations
    FROM (
      SELECT qid, COUNT(*) AS set_count
      FROM exam_sets, UNNEST(question_ids) AS qid
      GROUP BY qid
      HAVING COUNT(*) > 3
    ) sub;

    IF v_violations > 0 THEN
      RAISE WARNING '% question(s) appear in more than 3 exam_sets — review seeding logic!', v_violations;
    ELSE
      RAISE NOTICE 'Repetition check passed: no question appears in more than 3 exam_sets.';
    END IF;
  END;

END $$;
