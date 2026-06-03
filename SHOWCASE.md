# Payday Super Issues Register Showcase

## 1. The One Sentence Story

This project turns Payday Super workshop outputs into a lightweight, filterable source of truth for product enablement issues, using an Excel register as the source data and a browser-based report for executive, product, journey, dependency, and enablement views.

## 2. Why This Matters

The Payday Super work surfaced issues across products, participants, readiness, compliance, and operational processes. Before this project, those issues risked being spread across workshop notes, spreadsheets, product backlogs, Confluence pages, and team-specific trackers.

The goal is not to build another Jira. The goal is to help AP+ teams move from repeated issue discovery conversations to prioritised resolution conversations.

## 3. What The MVP Does

- Keeps `Issues Register.xlsx` as the lightweight source of truth.
- Converts the workbook into `issues-data.js` with `refresh_data.py`.
- Presents the register in a browser through `index.html`, `styles.css`, and `app.js`.
- Supports audience-specific views:
  - Executive Summary
  - Product & Capability Lens
  - E2E Journey
  - Enablement Workbench
  - Dependencies & Decisions
  - Full Register
- Adds filtering by search, use case, product, category, issue type, and status.
- Opens each issue into a detail modal with owner, priority, status, dependencies, current action, decisions needed, links, and notes.

## 4. Current Register Snapshot

As of the latest generated data:

- 48 issues loaded from the Excel register.
- 14 high-priority issues.
- 21 issues in progress.
- 12 issues with decisions needed.
- 10 issues with dependencies.
- 39 issues still missing a completed problem scenario.
- 10 product or capability values represented: Accounts, CATSCT, CoP, Osko, Other, PayID, PayTo, Payment Instruction, Reporting, and SCT.
- 5 use case values represented: Super, Payroll, Government, Business Payments, and All.

This gives the team both a reporting view and a data quality view. The register is not just showing issues; it is also showing where the underlying issue framing needs improvement.

## 5. Demo Flow

### Demo Step 1: Start With The Executive View

Open `index.html` and begin on Executive Summary.

Talking point:

> This is the leadership view. It focuses attention on high-priority or executive-tagged issues, with visible metrics for priority, progress, dependencies, and decisions.

What to show:

- KPI cards across the top.
- Top Priority Issues.
- What's In Progress.
- Decisions Needed.
- Key Dependencies.

### Demo Step 2: Show That It Is Still A Working Register

Switch to Full Register.

Talking point:

> The report is not a manually rebuilt presentation. It is generated from the working register, so teams can keep updating the spreadsheet while the report stays current.

What to show:

- Search.
- Product, use case, category, issue type, and status filters.
- Issue cards.
- Click an issue to open the detail modal.

### Demo Step 3: Move Into Product Conversations

Switch to Product & Capability Lens.

Talking point:

> This lets product owners focus on their part of the landscape without losing the cross-product context. A single issue can point to a primary product and other impacted products.

What to show:

- Product filter.
- Opportunity Mapping.
- Capability Gaps.
- Products impacted.

### Demo Step 4: Show The E2E Journey View

Switch to E2E Journey.

Talking point:

> This maps issues onto the end-to-end Payday Super journey, so we can see whether problems are clustering around setup, payment processing, reconciliation, returns, or reporting.

What to show:

- Journey columns.
- Issue dots by journey phase.
- Unmapped issues as data quality signal.

### Demo Step 5: Show Dependencies And Decisions

Switch to Dependencies & Decisions.

Talking point:

> This is the coordination view. It separates issues that need action from issues that need a decision, dependency follow-up, or linkage to another initiative.

What to show:

- Dependencies list.
- Decisions Needed.
- Related initiative fields in the modal.

## 6. How Codex Helped

Codex is being used as a project partner across four layers:

### 1. Requirements Shaping

Codex helped turn workshop themes and meeting feedback into `REQUIREMENTS.md`, including requirement IDs, priorities, rationale, current MVP fit, recommended field changes, report views, validation questions, and definition of done.

### 2. Data Model And Transformation

Codex helped define a spreadsheet-friendly data model that keeps the register lightweight while supporting richer reporting. It also helped write `refresh_data.py`, which reads the workbook and generates the JavaScript data file used by the browser report.

### 3. Report UI

Codex helped build the browser app with navigation, filters, KPI cards, issue lists, journey mapping, product sections, and modal detail views. This allows the team to generate useful working reports without needing Power BI, Jira, or specialist licences.

### 4. Iteration And Quality Control

Codex is being used to inspect the current project, identify gaps, suggest next changes, and keep the artefacts aligned. The next Codex-assisted iterations can focus on data quality metrics, stronger external messaging status, better decision/escalation reporting, and presentation assets.

## 7. Suggested Slide Outline

### Slide 1: Title

Payday Super Issues Register MVP

Subtitle: Using Codex to turn workshop outputs into a working product enablement view.

### Slide 2: The Problem

Workshop outputs were valuable but fragmented. Issues sat across spreadsheets, notes, product backlogs, Confluence pages, and conversations. Teams needed a lightweight way to stop rediscovering the same issues and start resolving the most important ones.

### Slide 3: The Approach

Keep Excel as the source of truth. Use a small transformation script to generate structured data. Present the data in a browser report with audience-specific views.

### Slide 4: The MVP

Show the live report or use screenshots:

- `Report1.png`
- `Report2.png`
- `Report3.png`

Focus on the six views and the fact that the report is generated from the register.

### Slide 5: What We Can See Now

Use the current snapshot:

- 48 issues.
- 14 high priority.
- 21 in progress.
- 12 decisions needed.
- 10 dependencies.
- 39 missing completed problem scenarios.

Key message: the MVP creates both reporting visibility and data quality visibility.

### Slide 6: How Codex Was Used

Show Codex as a collaborator in:

- Requirements synthesis.
- Data model design.
- Python data extraction.
- HTML/CSS/JS report generation.
- Gap analysis and next-step planning.

### Slide 7: What Changes In The Way We Work

Before: repeated discovery, manual reporting, fragmented ownership.

After: shared register, reusable report, product and journey views, clearer dependencies, clearer decisions.

### Slide 8: Next Iteration

Recommended next steps:

- Add visible data quality metrics.
- Improve decision and escalation reporting.
- Add external messaging status.
- Track dependency owner type.
- Strengthen multi-product and multi-use-case analysis.
- Prepare participant-facing candidate messages separately from internal working detail.

## 8. Short Talk Track

> The purpose of this MVP is to create a lightweight source of truth for Payday Super product enablement issues. We are deliberately keeping Excel as the register because the teams need something easy to maintain, not another delivery tool.
>
> Codex helped me turn the workshop feedback into structured requirements, then into a spreadsheet data model, then into a working browser report. The report gives different audiences the views they need: executives can see priorities and decisions, product owners can see capability gaps, enablement teams can see actions and data quality gaps, and the journey view shows where issues land across the end-to-end flow.
>
> The biggest value is that this changes the conversation. Instead of asking "what were the issues again?", we can ask "which issues unlock the most value, who owns them, what decision is needed, and what data do we still need to clean up?"

## 9. Suggested Live Demo Script

1. Open the browser report.
2. Point to the source panel: "This is generated from the Issues Register workbook."
3. Show the Executive Summary KPIs.
4. Click a high-priority issue and show the detail modal.
5. Filter by a product such as Accounts, CoP, PayID, or PayTo.
6. Switch to E2E Journey and show issue clustering by phase.
7. Switch to Dependencies & Decisions and show where leadership input is needed.
8. Close by showing `REQUIREMENTS.md` as the forward backlog and validation frame.

## 10. Strong Closing

This is not only a dashboard. It is a working method:

- Capture issues once.
- Structure them enough to analyse.
- Report them differently for different audiences.
- Use data quality gaps to improve the register over time.
- Use Codex to accelerate the cycle from messy input to usable decision support.
