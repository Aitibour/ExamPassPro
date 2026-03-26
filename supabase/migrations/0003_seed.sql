-- Seed courses (10 IT certifications)
insert into courses (slug, title, description, brand_color, price_cents, enrolled_count, is_published) values
  ('servicenow-csa', 'ServiceNow CSA', 'Certified System Administrator — 850+ exam-style questions', '#3d9b3d', 1900, 4210, true),
  ('aws-saa-c03', 'AWS SAA-C03', 'Solutions Architect Associate — 900+ practice questions', '#232f3e', 1900, 3840, true),
  ('azure-az-900', 'Azure AZ-900', 'Microsoft Azure Fundamentals — 800+ questions', '#0078d4', 1900, 3110, true),
  ('google-cloud-ace', 'Google Cloud ACE', 'Associate Cloud Engineer — 820+ questions', '#1a73e8', 1900, 2700, true),
  ('comptia-security-plus', 'CompTIA Security+', 'SY0-701 — 780+ cybersecurity questions', '#c0392b', 1900, 2400, true),
  ('vmware-vcp-dcv', 'VMware VCP-DCV', 'Data Center Virtualization — 760+ questions', '#607078', 1900, 1900, true),
  ('cisco-ccna', 'Cisco CCNA 200-301', 'Network Associate — 860+ questions', '#1ba0d7', 1900, 1750, true),
  ('kubernetes-cka', 'Kubernetes CKA', 'Certified Kubernetes Administrator — 720+ questions', '#326ce5', 1900, 1600, true),
  ('hashicorp-terraform', 'HashiCorp Terraform', 'Infrastructure as Code Associate — 700+ questions', '#7B42BC', 1900, 1400, true),
  ('itil-4-foundation', 'ITIL 4 Foundation', 'IT Service Management — 680+ questions', '#8b2fc9', 1900, 1200, true)
on conflict (slug) do nothing;
