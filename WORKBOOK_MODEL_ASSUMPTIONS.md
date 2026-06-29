# Workbook Model Assumptions

- `Issues Register.xlsm` is the source of truth for the dashboard.
- `IssuesRegister` remains the operational issue table.
- Reference data is read from `Ref_Strategy`, `Ref_Objectives`, `Ref_Scorecard`, `Ref_Use_Cases`, and `Ref_Capabilities`.
- Missing reference sheets or columns should not block dashboard generation; missing references are emitted as empty arrays or empty linked objects.
- Issues link to strategy, objectives and scorecard through `Strategic Priority ID`, `Objective ID`, and `Scorecard ID`.
- Issues link to use cases and capabilities by normalized names when IDs are not available.
- The executive landing page uses workbook reference data to lead with strategy, objectives, scorecard and transformation use cases; issues provide supporting readiness evidence.
- `All` is treated as cross-cutting capability friction rather than a standard use case.
