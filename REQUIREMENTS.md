# Payday Super Issues Register MVP Requirements

## Purpose

The MVP should provide a lightweight source of truth for product enablement issues that were surfaced through the Payday Super workshops. It should help AP+ teams move from repeated issue discovery conversations to prioritised resolution conversations.

The register and reports are internal working artefacts first. Participant-facing updates may be derived from this material, but they need a separate messaging lens before being shared externally.

## Current Direction Check

The project is broadly on the right path:

- It keeps the spreadsheet as the source of truth, which matches the feedback that this should stay lightweight and not become Jira.
- It already supports audience-specific views: executive, ecosystem, product, enablement, dependencies, and full register.
- It tracks the core fields needed for early reporting: issue, category, product, owner, priority, status, horizon, dependencies, notes, and executive summary tag.
- It can generate a shareable browser report without requiring Power BI, Jira, or specialist licences.

The main gap is not the report UI. The main gap is the data model. The transcript makes it clear that the register needs to support cross-cutting analysis across use cases, products, participants, initiatives, and external communication status.

## Requirement Themes From The Meeting

### 1. Source Of Truth And Lightweight Governance

| ID | Requirement | Priority | Rationale | Current MVP Fit |
| --- | --- | --- | --- | --- |
| REQ-01 | Maintain one internal issue register as the source of truth for product enablement issues. | Must | Workshop outputs were fragmented across spreadsheets, Jira, product backlogs, and team-specific tracking. | Met |
| REQ-02 | Keep data entry lightweight and suitable for product/enablement teams, not delivery oversight. | Must | Managers explicitly said this should not become Jira or require updating many fields. | Partially met |
| REQ-03 | Track enough fields to discuss progress, ownership, overlap, dependencies, and priority. | Must | The goal is to spend time resolving top issues rather than rediscovering them. | Partially met |
| REQ-04 | Show data quality gaps so the team can clean the register progressively. | Should | 38 of 48 current issues do not yet have a completed problem scenario. | Not met |

### 2. Issue Definition And Problem Framing

| ID | Requirement | Priority | Rationale | Current MVP Fit |
| --- | --- | --- | --- | --- |
| REQ-05 | Use a standard problem scenario structure: context, problem, impact, current state, and direction/action. | Must | Alex introduced this to remove inconsistent descriptions. | Partially met |
| REQ-06 | Flag issues where problem framing is incomplete. | Must | Incomplete scenarios reduce report quality and AI summary reliability. | Partially met in watch-outs |
| REQ-07 | Separate issue type from category: risk, gap, opportunity, product idea, enhancement, decision, or dependency. | Should | The meeting identified overlap between risks, gaps, opportunities, and product ideas. | Not met |
| REQ-08 | Capture whether an issue is a product weakness, ecosystem constraint, participant readiness issue, compliance issue, or reporting-only item. | Should | Managers distinguished product layer, member readiness layer, and compliance reporting. | Partially met through categories only |

### 3. Product, Use Case, And Horizontal/Vertical Slicing

| ID | Requirement | Priority | Rationale | Current MVP Fit |
| --- | --- | --- | --- | --- |
| REQ-09 | Support filtering by use case, starting with Payday Super and later Payroll, Government, and other verticals. | Must | The register is intended to scale beyond Payday Super. | Partially met; current data has only `Super` |
| REQ-10 | Support filtering by AP+ product/capability such as PayTo, PayID, Osko, SCT, Accounts, CoP, Reporting, and Payment Instruction. | Must | Managers need to see whether each product has enablement gaps. | Partially met |
| REQ-11 | Allow one issue to link to multiple products/capabilities. | Must | Several issues apply across PayTo, PayID, Osko, NPP, and account structures. | Not met |
| REQ-12 | Allow one issue to link to multiple use cases. | Must | Horizontal fixes may unlock several vertical use cases. | Not met |
| REQ-13 | Identify whether an issue is vertical, horizontal, or both. | Should | Managers asked how horizontal tracking maps to vertical use cases. | Not met |
| REQ-14 | Show overlap/conflict between products where work on one product affects another. | Should | Feedback called out the need to identify overlapping or conflicting product enablement. | Not met |

### 4. Ownership, Initiatives, And External Tracking Links

| ID | Requirement | Priority | Rationale | Current MVP Fit |
| --- | --- | --- | --- | --- |
| REQ-15 | Track accountable owner and supporting contributors separately. | Should | Some issues have one accountable owner but require input from product, marketing, POMs, schemes, or banks. | Partially met |
| REQ-16 | Link issues to existing work items such as PE requests, product backlogs, Confluence pages, or Jira items where they already exist. | Must | Bulk registration/cap issues were already in a product enhancement request and should not be lost. | Partially met with two links |
| REQ-17 | Track current action/next step separately from comments. | Must | Reports need clear movement, not just notes. | Partially met |
| REQ-18 | Track target decision/date or next review date. | Should | Helps keep issues from becoming stale and supports weekly/fortnightly reporting. | Not met |
| REQ-19 | Track dependency owner type: internal AP+, bank, participant, scheme, super fund, DSP/ERP, regulator, or vendor. | Should | Dependencies are currently text only, which makes dependency reporting hard. | Not met |

### 5. Reporting And Audience Views

| ID | Requirement | Priority | Rationale | Current MVP Fit |
| --- | --- | --- | --- | --- |
| REQ-20 | Generate an executive summary of top issues, movement, blocked items, and decisions needed. | Must | Original stated output and current app direction. | Met |
| REQ-21 | Generate product-specific reports for product owners. | Must | PayTo, PayID, Accounts, CoP, and others may need their own views. | Partially met |
| REQ-22 | Generate enablement workbench reports showing open actions, owners, stale items, and incomplete framing. | Should | Internal teams need a working view, not just an executive view. | Partially met |
| REQ-23 | Generate participant-facing candidate messages separately from internal detail. | Should | Feedback noted internal issues need finessing before playback to participants. | Not met |
| REQ-24 | Distinguish this report from Member Insights/readiness reporting. | Must | Managers clarified that Member Insights tracks participant readiness, while this tracks product readiness and enablement gaps. | Partially met in wording only |
| REQ-25 | Distinguish this report from compliance reporting while linking related compliance risks where relevant. | Should | Compliance data is patchy and has a different purpose, but related risks may need references. | Not met |

### 6. Prioritisation And Decision Support

| ID | Requirement | Priority | Rationale | Current MVP Fit |
| --- | --- | --- | --- | --- |
| REQ-26 | Prioritise issues by ability to unlock volume or use-case adoption. | Must | Managers repeatedly framed this as finding best bang for buck and volume enablement. | Partially met through priority only |
| REQ-27 | Capture impact dimensions: volume, revenue, member experience, operational risk, regulatory risk, and product adoption. | Should | Priority needs to be explainable, not just labelled high/medium/low. | Not met |
| REQ-28 | Capture effort/complexity or likely delivery path. | Could | Helps compare opportunities, but may make the register too heavy if overdone. | Not met |
| REQ-29 | Show top issues requiring decision, escalation, or cross-product alignment. | Should | Executive and leadership audiences need clear asks. | Not met |

## Recommended Spreadsheet Field Changes

Keep the existing fields, but add the following columns over time:

| Field | Type | Why It Matters |
| --- | --- | --- |
| Issue Type | Picklist | Separates risk, gap, opportunity, product idea, enhancement, decision, dependency. |
| Layer | Picklist | Product, ecosystem, member readiness, compliance, participant messaging, reporting. |
| Use Cases Impacted | Multi-value | Supports vertical slicing beyond Payday Super. |
| Products Impacted | Multi-value | Supports horizontal product/capability slicing. |
| Primary Product | Picklist | Keeps the simple product filter while allowing many-to-many mapping. |
| Horizontal / Vertical | Picklist | Makes cross-cutting issues visible. |
| Dependency Owner Type | Picklist | Enables clearer dependency reporting. |
| Related Initiative / PE / Jira / Confluence | Text or link | Prevents losing work already tracked elsewhere. |
| Current Action | Text | Separates next action from historical notes. |
| Decision Needed | Text | Makes escalation reporting useful. |
| External Messaging Status | Picklist | Internal only, candidate for participant update, approved message, shared. |
| Related Member Insight | Link/text | Keeps boundary with Member Insights while allowing traceability. |
| Related Compliance Item | Link/text | Keeps boundary with compliance while allowing traceability. |
| Impact Driver | Picklist | Volume, revenue, adoption, risk reduction, member experience, operational efficiency. |
| Review Date | Date | Helps identify stale or overdue issues. |

## Suggested Report Views

| View | Audience | Purpose |
| --- | --- | --- |
| Executive Summary | ELT / Business Payments | Top issues, decisions needed, blocked items, movement since last update. |
| Product Readiness | Product owners | Product-specific gaps, dependencies, current actions, and overlapping use cases. |
| Use Case Readiness | Payday Super and future verticals | End-to-end view of what blocks a use case from scaling. |
| Horizontal Capability View | Product and strategy leads | Common issues across products/use cases and best bang-for-buck fixes. |
| Enablement Workbench | Alex/Bianca/enablement team | Data quality gaps, owners, stale issues, actions, links to source artefacts. |
| Participant Messaging Candidate View | Product, POMs, marketing | Internal issues that may need external positioning or market messaging. |

## Immediate Backlog For This MVP

1. Add data quality metrics to the UI: missing problem scenario, missing owner, missing priority, missing dependency owner type.
2. Add a use case filter, even while all current records are `Super`, so the structure is ready for future verticals.
3. Change the data model from single `product` to `primaryProduct` plus `productsImpacted`.
4. Add `issueType`, `layer`, and `horizontalVertical` fields to the spreadsheet and report output.
5. Add a report section for "Decisions / Escalations Needed".
6. Add an "External Messaging" status so internal details are not accidentally treated as participant-ready.
7. Add links or reference IDs for PE requests and existing product backlog items.

## Validation Questions For Managers

Use these to confirm the MVP with stakeholders:

1. Is the register intended to capture only product enablement issues, or also member readiness and compliance references where they materially affect product enablement?
2. Which audiences need recurring reports: ELT, Business Payments, product owners, enablement team, participant-facing forums, or all of these?
3. What is the minimum data required before an issue can appear in the executive summary?
4. Should priority be based on volume unlock, regulatory urgency, product risk, participant demand, or a weighted combination?
5. Who approves participant-facing messaging derived from internal issue records?
6. Should existing PE/Jira/backlog items remain outside the register with links, or should their status be mirrored in the register?
7. How often should the register be reviewed, and who owns stale item follow-up?

## Definition Of Done For The MVP

The MVP is ready for broader validation when:

- Each issue has a title, owner, status, priority, product/capability, use case, and current action.
- High-priority issues have complete problem scenario framing.
- Cross-product and cross-use-case issues can be sliced both horizontally and vertically.
- Reports clearly distinguish internal working detail from participant-ready messaging.
- Existing PE/backlog/compliance/member-insight artefacts can be referenced without duplicating their full workflows.
- The executive report can be generated from the register without manual rewriting.
