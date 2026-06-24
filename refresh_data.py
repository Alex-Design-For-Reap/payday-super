from __future__ import annotations

import json
import re
from datetime import date, datetime
from pathlib import Path

import openpyxl


ROOT = Path(__file__).resolve().parent
WORKBOOK_PATH = ROOT / "Issues Register.xlsm"
OUTPUT_PATH = ROOT / "issues-data.js"


FIELD_MAP = {
    "ID (Unique Identifier)": "id",
    "Use Cases": "useCasesImpacted",
    "Category": "category",
    "Journey Stage": "journeyStage",
    "Issue Title": "title",
    "Problem Scenario\n[context] + [problem] + [impact] + [current state] + [Direction]": "problemScenario",
    "Issue Type": "issueType",
    "Dependencies\n": "dependencies",
    "Related Initiative / PE / Jira / Confluence": "relatedInitiative",
    "Product": "productsImpacted",
    "Product Owner (Accountable)": "owner",
    "Priority to unlock the use case": "priority",
    "Time Horizon Short Term - 0 -6 months\nMedium Term - 6 months -2 years\nLong Term - 2 years+": "horizon",
    "Status": "status",
    "Current Action": "currentAction",
    "Decision Needed": "decisionNeeded",
    "Comments / Notes": "notes",
    "Link 1\n(details of the issue)": "link1",
    "Link 2": "link2",
    "Last Updated": "lastUpdated",
    "Exec Summary Tag": "execSummaryTag",
}


def clean_text(value):
    if value is None:
        return ""
    if isinstance(value, (datetime, date)):
        return value.strftime("%Y-%m-%d")
    text = str(value).strip()
    return re.sub(r"\s+", " ", text)


def normalize(value):
    text = clean_text(value)
    return text.upper() if text else ""


def split_values(*values):
    items = []
    seen = set()
    for value in values:
        text = "" if value is None else str(value).strip()
        if not text:
            continue
        for item in re.split(r"\s*(?:;|\n)\s*", text):
            item = clean_text(item)
            key = item.lower()
            if item and key not in seen:
                items.append(item)
                seen.add(key)
    return items


def main() -> None:
    workbook = openpyxl.load_workbook(WORKBOOK_PATH, data_only=True)
    sheet = workbook["IssuesRegister"]
    headers = [cell.value for cell in sheet[1]]

    issues = []
    for row in sheet.iter_rows(min_row=2, values_only=True):
        raw = dict(zip(headers, row))
        if not any(value is not None for value in raw.values()):
            continue

        issue = {}
        for source, target in FIELD_MAP.items():
            issue[target] = clean_text(raw.get(source))

        issue["priority"] = normalize(issue["priority"])
        issue["horizon"] = normalize(issue["horizon"])
        issue["status"] = normalize(issue["status"])
        issue["isExecSummary"] = issue["execSummaryTag"].lower() == "yes"

        issue["useCases"] = split_values(raw.get("Use Cases"))
        issue["useCasesImpacted"] = "; ".join(issue["useCases"])
        issue["mainUseCase"] = issue["useCasesImpacted"]
        issue["useCase"] = issue["useCasesImpacted"]
        issue["category2"] = ""
        issue["categories"] = split_values(raw.get("Category"))
        issue["category"] = "; ".join(issue["categories"])
        issue["products"] = split_values(raw.get("Product"))
        issue["productsImpacted"] = "; ".join(issue["products"])
        issue["primaryProduct"] = issue["productsImpacted"]
        issue["product"] = issue["productsImpacted"]
        issue["journeyStages"] = split_values(raw.get("Journey Stage"))
        issue["journeyStage"] = "; ".join(issue["journeyStages"])
        issues.append(issue)

    payload = {
        "generatedAt": datetime.now().strftime("%Y-%m-%d %H:%M"),
        "source": WORKBOOK_PATH.name,
        "issues": issues,
    }

    OUTPUT_PATH.write_text(
        "window.ISSUES_DATA = "
        + json.dumps(payload, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )
    print(f"Wrote {len(issues)} issues to {OUTPUT_PATH.name}")


if __name__ == "__main__":
    main()
