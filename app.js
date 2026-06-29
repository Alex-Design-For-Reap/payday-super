const data = window.ISSUES_DATA || { issues: [], generatedAt: "", source: "" };

const journeyPhases = [
  "Preparation and data creation",
  "Set up & Account, onboarding",
  "Payment processing",
  "Receiving, validating, reconciling, and reporting",
  "Investigation and returns (unhappy path)",
];

const strategicUseCases = [
  "Super",
  "Payroll",
  "Tax",
  "eConveyancing",
  "eInvoicing",
  "Securities",
  "Government",
  "Business Payments",
  "MDDR",
  "All",
];

const externalDependencyTypes = [
  { type: "Participants", terms: ["participant", "member"] },
  { type: "Banks", terms: ["bank", "ad i", "adi"] },
  { type: "Schemes", terms: ["scheme"] },
  { type: "DSPs", terms: ["dsp", "erp", "software provider"] },
  { type: "Regulators", terms: ["regulator", "ato", "apra", "asic"] },
  { type: "Clearing Houses", terms: ["clearing house", "superstream", "gateway"] },
  { type: "Other External Parties", terms: ["external", "vendor", "provider", "third party"] },
];

const views = [
  {
    id: "executive",
    icon: "◇",
    title: "Business Payments Strategic Enablement",
    nav: "Strategic Readiness",
    audience: "Exec / Business Payments",
    description:
      "Readiness, dependencies and decisions across strategic Business Payments use cases.",
    filter: () => true,
  },
  {
    id: "issue-summary",
    icon: "!",
    title: "Issue Summary",
    nav: "Issue Summary",
    audience: "Exec / Business Payments",
    description:
      "The previous issue-led executive view, kept visible for comparison with the strategic readiness landing page.",
    filter: issue => issue.isExecSummary || issue.priority === "HIGH",
  },
  {
    id: "product",
    icon: "▣",
    title: "Product & Capability Lens",
    nav: "Product & Capability",
    audience: "Product / Capability Owners",
    description:
      "A product-owner view of issues by impacted product or capability. Use the Product filter to focus the capability lens.",
    filter: issue => Boolean((issue.products || []).length || issue.product),
  },
  {
    id: "journey",
    icon: "↦",
    title: "E2E Journey",
    nav: "E2E Journey",
    audience: "Product / Enablement",
    description:
      "A phase-by-phase view of where issues are landing across the end-to-end journey. Each dot is an issue and can be opened for detail.",
    filter: () => true,
  },
  {
    id: "enablement",
    icon: "↗",
    title: "Enablement Actions",
    nav: "Enablement Actions",
    audience: "Enablement Team",
    description:
      "A working view of issues with active actions, WIP status, blockers, or follow-up needed by owners.",
    filter: issue =>
      Boolean(issue.currentAction) || issue.status === "WIP" || issue.status === "HOLD / BLOCKED",
  },
  {
    id: "dependencies",
    icon: "⌘",
    title: "Decisions & Dependencies",
    nav: "Decisions & Dependencies",
    audience: "Enablement / Product Leadership",
    description:
      "A coordination view of issue-to-issue blockers, related external initiatives, and decisions needed from owners or leaders.",
    filter: issue => Boolean(issue.dependencies) || Boolean(issue.relatedInitiative) || Boolean(issue.decisionNeeded),
  },
  {
    id: "register",
    icon: "≡",
    title: "Full Register",
    nav: "Full Register",
    audience: "All working groups",
    description:
      "A searchable view of every issue currently loaded from the spreadsheet source of truth.",
    filter: () => true,
  },
];

const state = {
  view: "executive",
  search: "",
  category: "All",
  useCase: "All",
  product: "All",
  issueType: "All",
  status: "All",
  productExpanded: {
    opportunities: false,
    capabilityGaps: false,
  },
};

const els = {
  viewTabs: document.querySelector("#viewTabs"),
  viewTitle: document.querySelector("#viewTitle"),
  viewDescription: document.querySelector("#viewDescription"),
  audienceLabel: document.querySelector("#audienceLabel"),
  metricsLabel: document.querySelector("#metricsLabel"),
  lastUpdated: document.querySelector("#lastUpdated"),
  sourceMeta: document.querySelector("#sourceMeta"),
  searchInput: document.querySelector("#searchInput"),
  categoryFilter: document.querySelector("#categoryFilter"),
  useCaseFilter: document.querySelector("#useCaseFilter"),
  productFilter: document.querySelector("#productFilter"),
  issueTypeFilter: document.querySelector("#issueTypeFilter"),
  statusFilter: document.querySelector("#statusFilter"),
  kpiGrid: document.querySelector("#kpiGrid"),
  productSections: document.querySelector("#productSections"),
  opportunityTable: document.querySelector("#opportunityTable"),
  capabilityGapTable: document.querySelector("#capabilityGapTable"),
  opportunityToggle: document.querySelector("[data-action='toggle-opportunities']"),
  capabilityGapToggle: document.querySelector("[data-action='toggle-capability-gaps']"),
  journeySection: document.querySelector("#journeySection"),
  journeySummary: document.querySelector("#journeySummary"),
  journeyMap: document.querySelector("#journeyMap"),
  dashboardGrid: document.querySelector("#dashboardGrid"),
  priorityTable: document.querySelector("#priorityTable"),
  progressList: document.querySelector("#progressList"),
  dependencyList: document.querySelector("#dependencyList"),
  decisionList: document.querySelector("#decisionList"),
  watchModule: document.querySelector("#watchModule"),
  watchList: document.querySelector("#watchList"),
  primaryListTitle: document.querySelector("#primaryListTitle"),
  registerSection: document.querySelector("#registerSection"),
  registerCount: document.querySelector("#registerCount"),
  issueCards: document.querySelector("#issueCards"),
  strategicExecutiveSection: document.querySelector("#strategicExecutiveSection"),
  strategicSummaryStrip: document.querySelector("#strategicSummaryStrip"),
  readinessSummary: document.querySelector("#readinessSummary"),
  readinessGrid: document.querySelector("#readinessGrid"),
  executiveAttentionList: document.querySelector("#executiveAttentionList"),
  strategicDecisionList: document.querySelector("#strategicDecisionList"),
  capabilityBottleneckList: document.querySelector("#capabilityBottleneckList"),
  externalDependencyList: document.querySelector("#externalDependencyList"),
  governanceWatchoutList: document.querySelector("#governanceWatchoutList"),
  issueModal: document.querySelector("#issueModal"),
  modalIssueId: document.querySelector("#modalIssueId"),
  modalTitle: document.querySelector("#modalTitle"),
  modalBody: document.querySelector("#modalBody"),
  modalClose: document.querySelector("#modalClose"),
};

function uniqueValues(field) {
  return [
    ...new Set(
      data.issues
        .flatMap(issue => {
          const value = issue[field];
          return Array.isArray(value) ? value : [value];
        })
        .filter(Boolean),
    ),
  ].sort();
}

function fillSelect(select, values) {
  select.innerHTML = ["All", ...values]
    .map(value => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`)
    .join("");
}

function currentView() {
  return views.find(view => view.id === state.view) || views[0];
}

function filteredIssues() {
  const view = currentView();
  const query = state.search.trim().toLowerCase();

  return data.issues.filter(issue => {
    if (!view.filter(issue)) return false;
    if (state.category !== "All" && !(issue.categories || [issue.category]).includes(state.category)) return false;
    if (state.useCase !== "All" && !getIssueUseCases(issue).includes(state.useCase)) return false;
    if (state.product !== "All" && !(issue.products || [issue.product]).includes(state.product)) return false;
    if (state.issueType !== "All" && issue.issueType !== state.issueType) return false;
    if (state.status !== "All" && issue.status !== state.status) return false;
    if (!query) return true;

    return [
      issue.id,
      issue.title,
      issue.problemScenario,
      issue.owner,
      issue.useCase,
      issue.useCases,
      issue.product,
      issue.products,
      issue.issueType,
      issue.currentAction,
      issue.decisionNeeded,
      issue.category,
      issue.categories,
      issue.journeyStage,
      issue.journeyStages,
      issue.dependencies,
      issue.relatedInitiative,
      issue.notes,
    ]
      .join(" ")
      .toLowerCase()
      .includes(query);
  });
}

function metricCount(issues, predicate) {
  return issues.filter(predicate).length;
}

function percent(value, total) {
  if (!total) return "0%";
  return `${Math.round((value / total) * 100)}%`;
}

function renderTabs() {
  els.viewTabs.innerHTML = views
    .map(
      view => `
        <button class="nav-tab" type="button" data-view="${view.id}" aria-selected="${view.id === state.view}">
          <span class="nav-icon">${view.icon}</span>
          <span>${view.nav}</span>
        </button>
      `,
    )
    .join("");

  els.viewTabs.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      state.view = button.dataset.view;
      render();
    });
  });
}

function renderHeader(issues) {
  const view = currentView();
  const latest = data.issues
    .map(issue => issue.lastUpdated)
    .filter(Boolean)
    .sort()
    .at(-1);

  els.viewTitle.textContent = view.title;
  els.viewDescription.textContent = view.description;
  els.audienceLabel.textContent = `Audience: ${view.audience}`;
  els.metricsLabel.textContent =
    state.view === "executive"
      ? "Focus: Use case readiness, capability friction and executive decisions."
      : `Metrics: ${issues.length} visible issue${issues.length === 1 ? "" : "s"} after filters`;
  els.lastUpdated.textContent = `Last updated: ${formatDate(latest)}`;
  els.sourceMeta.textContent = `${data.source} • ${data.issues.length} issues • refreshed ${data.generatedAt}`;
  els.registerCount.textContent = `${issues.length} issue${issues.length === 1 ? "" : "s"} shown`;
  els.primaryListTitle.textContent =
    state.view === "register" ? "Priority Issues In Current Filter" : "Top Priority Issues";
}

function renderViewShell() {
  const isJourneyView = state.view === "journey";
  const isRegisterView = state.view === "register";
  const isStrategicExecutive = state.view === "executive";
  els.dashboardGrid.dataset.view = state.view;
  els.kpiGrid.hidden = isJourneyView || isRegisterView || isStrategicExecutive;
  els.productSections.hidden = state.view !== "product";
  els.dashboardGrid.hidden = isJourneyView || isRegisterView || isStrategicExecutive;
  els.registerSection.hidden = !isRegisterView;
  els.strategicExecutiveSection.hidden = !isStrategicExecutive;
  els.watchModule.hidden = state.view === "issue-summary";
}

function renderKpis(issues) {
  const total = issues.length;
  const high = metricCount(issues, issue => issue.priority === "HIGH");
  const wip = metricCount(issues, issue => issue.status === "WIP");
  const dependency = metricCount(issues, issue => Boolean(issue.dependencies));
  const framingGaps = metricCount(issues, issue => !issue.problemScenario);
  const decisions = metricCount(issues, issue => Boolean(issue.decisionNeeded));

  const cards = [
    ["Total Issues", total, "All visible issue cards", "◇"],
    ["High Priority", high, `${percent(high, total)} of current view`, "!"],
    ["In Progress", wip, `${percent(wip, total)} of current view`, "↻"],
    ["Dependencies", dependency, `${percent(dependency, total)} with dependency noted`, "⌘"],
    ["Decisions", decisions, `${percent(decisions, total)} need a call`, "?"],
  ];

  if (state.view === "product") {
    cards.push(["Framing Gaps", framingGaps, `${percent(framingGaps, total)} missing scenario`, "△"]);
  }

  els.kpiGrid.innerHTML = cards
    .map(
      ([label, value, note, icon]) => `
        <article class="kpi-card">
          <div class="kpi-top"><span>${label}</span><span>${icon}</span></div>
          <div class="kpi-value">${value}</div>
          <div class="kpi-note">${note}</div>
        </article>
      `,
    )
    .join("");
}

function renderStrategicExecutive(issues) {
  if (state.view !== "executive") {
    els.readinessGrid.innerHTML = "";
    els.strategicSummaryStrip.innerHTML = "";
    return;
  }

  const readiness = aggregateUseCaseReadiness(issues);
  const attentionIssues = sortExecutiveAttention(issues).slice(0, 8);
  const decisionIssues = sortExecutiveAttention(issues.filter(issue => issue.decisionNeeded)).slice(0, 8);
  const allBottlenecks = aggregateCapabilityBottlenecks(issues);
  const allExternalDependencies = aggregateExternalDependencies(issues);
  const bottlenecks = allBottlenecks.slice(0, 8);
  const externalDependencies = allExternalDependencies.slice(0, 8);
  const governanceWatchouts = aggregateGovernanceWatchouts(issues);
  const atRiskCount = readiness.filter(item => ["Red", "Amber"].includes(item.status)).length;

  els.strategicSummaryStrip.innerHTML = renderStrategicSummaryStrip({
    attention: readiness.filter(item => item.useCase !== "All" && ["Red", "Amber"].includes(item.status)).length,
    decisions: issues.filter(issue => issue.decisionNeeded).length,
    externalDependencies: issues.filter(isExternalDependency).length,
    bottlenecks: allBottlenecks.length,
    governance: governanceWatchouts.reduce((total, item) => total + item.issues.length, 0),
  });
  els.readinessSummary.textContent = `${atRiskCount} readiness area${atRiskCount === 1 ? "" : "s"} need attention`;
  els.readinessGrid.innerHTML = readiness.map(renderReadinessCard).join("");
  els.executiveAttentionList.innerHTML = renderExecutiveIssueList(
    attentionIssues,
    "No leadership attention items match the current filters.",
  );
  els.strategicDecisionList.innerHTML = renderDecisionExecutiveList(
    decisionIssues,
    "No decisions required in the current filters.",
  );
  els.capabilityBottleneckList.innerHTML = renderBottleneckList(
    bottlenecks,
    "No capability bottlenecks match the current filters.",
  );
  els.externalDependencyList.innerHTML = renderDependencyGroupList(
    externalDependencies,
    "No external dependencies match the current filters.",
  );
  els.governanceWatchoutList.innerHTML = renderGovernanceList(governanceWatchouts);
}

function renderStrategicSummaryStrip(summary) {
  const items = [
    ["Use cases needing attention", summary.attention],
    ["Executive decisions required", summary.decisions],
    ["External dependencies", summary.externalDependencies],
    ["Capability bottlenecks", summary.bottlenecks],
    ["Governance watchouts", summary.governance],
  ];

  return items
    .map(
      ([label, value]) => `
        <article class="strategic-summary-item">
          <strong>${value}</strong>
          <span>${escapeHtml(label)}</span>
        </article>
      `,
    )
    .join("");
}

function aggregateUseCaseReadiness(issues) {
  return strategicUseCases.map(useCase => {
    const linkedIssues = issues.filter(issue => getIssueUseCases(issue).includes(useCase));
    const highIssues = linkedIssues.filter(issue => issue.priority === "HIGH");
    const decisions = linkedIssues.filter(issue => issue.decisionNeeded);
    const dependencies = linkedIssues.filter(issue => issue.dependencies);
    const blocked = linkedIssues.filter(issue => isBlocked(issue));
    const activeWork = linkedIssues.filter(issue => issue.status === "WIP");
    const externalDependencies = linkedIssues.filter(isExternalDependency);
    const status = deriveReadinessStatus(useCase, linkedIssues, highIssues, externalDependencies, blocked, activeWork);
    const statusNote = deriveReadinessNote(useCase, linkedIssues, status);
    const topCapability = topValue(linkedIssues.flatMap(issue => getIssueProducts(issue))) || "Not captured";

    return {
      useCase,
      status,
      statusNote,
      issueCount: linkedIssues.length,
      highCount: highIssues.length,
      decisionCount: decisions.length,
      dependencyCount: dependencies.length,
      topCapability,
    };
  });
}

function deriveReadinessStatus(useCase, issues, highIssues, externalDependencies, blocked, activeWork) {
  if (useCase === "All") return "Cross-cutting";
  if (!issues.length) return "Discovery";
  if (blocked.length || highIssues.some(issue => isBlocked(issue))) return "Red";
  if (highIssues.length || externalDependencies.length) return "Amber";
  if (activeWork.length) return "Green";
  return "Green";
}

function deriveReadinessNote(useCase, issues, status) {
  if (useCase === "All") return "Cross-cutting capability friction";
  if (!issues.length) return "Not yet assessed";
  if (status === "Red") return "Blocked or high-risk blocker";
  if (status === "Amber") return "High risk or external dependency";
  return "Active work with no high risks";
}

function renderReadinessCard(item) {
  return `
    <article class="readiness-card ${item.useCase === "All" ? "readiness-card-cross" : ""}">
      <div class="readiness-card-head">
        <h4>${escapeHtml(item.useCase)}</h4>
        <span class="${readinessClass(item.status)}">${escapeHtml(item.status)}</span>
      </div>
      <p class="readiness-note">${escapeHtml(item.statusNote)}</p>
      <dl class="readiness-metrics">
        <div><dt>Linked records</dt><dd>${item.issueCount}</dd></div>
        <div><dt>High risk</dt><dd>${item.highCount}</dd></div>
        <div><dt>Decisions</dt><dd>${item.decisionCount}</dd></div>
        <div><dt>Dependencies</dt><dd>${item.dependencyCount}</dd></div>
      </dl>
      <p><span>Top capability</span>${escapeHtml(item.topCapability)}</p>
    </article>
  `;
}

function sortExecutiveAttention(issues) {
  return [...issues]
    .filter(issue => issue.priority === "HIGH" || isBlocked(issue) || issue.decisionNeeded || isExternalDependency(issue))
    .sort((a, b) => executiveAttentionScore(b) - executiveAttentionScore(a));
}

function executiveAttentionScore(issue) {
  let score = 0;
  if (issue.priority === "HIGH") score += 40;
  if (isBlocked(issue)) score += 35;
  if (issue.decisionNeeded) score += 25;
  if (isExternalDependency(issue)) score += 15;
  if (issue.dependencies) score += 10;
  return score;
}

function renderExecutiveIssueList(issues, emptyMessage) {
  if (!issues.length) return `<div class="empty-state">${escapeHtml(emptyMessage)}</div>`;
  return issues
    .map(
      issue => `
        <button class="executive-issue-card" type="button" data-issue-id="${escapeHtml(issue.id)}">
          <div>
            <span class="id-pill">${escapeHtml(issue.id)}</span>
            <strong>${escapeHtml(issue.title || "Untitled issue")}</strong>
          </div>
          <p>${escapeHtml(summarise(issue.problemScenario || issue.currentAction || issue.notes || "Business impact not captured."))}</p>
          <span class="executive-meta">
            <span>${escapeHtml(issue.owner || "TBD owner")}</span>
            <span class="${statusClass(issue.status)}">${escapeHtml(displayStatus(issue.status))}</span>
            <span>${escapeHtml(formatList(getIssueUseCases(issue)))}</span>
          </span>
        </button>
      `,
    )
    .join("");
}

function renderDecisionExecutiveList(issues, emptyMessage) {
  if (!issues.length) return `<div class="empty-state">${escapeHtml(emptyMessage)}</div>`;
  return issues
    .map(
      issue => `
        <button class="executive-issue-card compact-executive-card" type="button" data-issue-id="${escapeHtml(issue.id)}">
          <div>
            <span class="id-pill">${escapeHtml(issue.id)}</span>
            <strong>${escapeHtml(issue.decisionNeeded || "Decision required")}</strong>
          </div>
          <span class="executive-meta">
            <span>${escapeHtml(issue.owner || "TBD owner")}</span>
            <span>${escapeHtml(formatList(getIssueUseCases(issue)))}</span>
            <span>${escapeHtml(formatList(getIssueProducts(issue)))}</span>
            <span class="${statusClass(issue.status)}">${escapeHtml(displayStatus(issue.status))}</span>
          </span>
        </button>
      `,
    )
    .join("");
}

function aggregateCapabilityBottlenecks(issues) {
  const groups = groupByValues(issues, getIssueProducts, "Not captured");
  return [...groups.entries()]
    .map(([capability, groupedIssues]) => ({
      label: capability,
      issueCount: groupedIssues.length,
      highCount: groupedIssues.filter(issue => issue.priority === "HIGH").length,
      dependencyCount: groupedIssues.filter(issue => issue.dependencies).length,
      decisionCount: groupedIssues.filter(issue => issue.decisionNeeded).length,
    }))
    .sort((a, b) => bottleneckScore(b) - bottleneckScore(a));
}

function bottleneckScore(item) {
  return item.issueCount + item.highCount * 3 + item.dependencyCount * 2 + item.decisionCount * 2;
}

function renderBottleneckList(items, emptyMessage) {
  if (!items.length) return `<div class="empty-state">${escapeHtml(emptyMessage)}</div>`;
  return items
    .map(
      item => `
        <div class="bottleneck-row">
          <strong>${escapeHtml(item.label)}</strong>
          <span>${item.issueCount} records</span>
          <span>${item.highCount} high</span>
          <span>${item.dependencyCount} deps</span>
          <span>${item.decisionCount} decisions</span>
        </div>
      `,
    )
    .join("");
}

function aggregateExternalDependencies(issues) {
  const groups = new Map();
  issues.filter(issue => issue.dependencies && isExternalDependency(issue)).forEach(issue => {
    const type = dependencyOwnerType(issue);
    if (!groups.has(type)) groups.set(type, []);
    groups.get(type).push(issue);
  });
  return [...groups.entries()]
    .map(([type, groupedIssues]) => ({
      label: type,
      issueCount: groupedIssues.length,
      highCount: groupedIssues.filter(issue => issue.priority === "HIGH").length,
      decisionCount: groupedIssues.filter(issue => issue.decisionNeeded).length,
      examples: groupedIssues.slice(0, 3),
    }))
    .sort((a, b) => b.issueCount + b.highCount * 2 - (a.issueCount + a.highCount * 2));
}

function renderDependencyGroupList(items, emptyMessage) {
  if (!items.length) return `<div class="empty-state">${escapeHtml(emptyMessage)}</div>`;
  return items
    .map(
      item => `
        <div class="dependency-group">
          <div class="bottleneck-row">
            <strong>${escapeHtml(item.label)}</strong>
            <span>${item.issueCount} records</span>
            <span>${item.highCount} high</span>
            <span>${item.decisionCount} decisions</span>
          </div>
          <div class="dependency-examples">
            ${item.examples
              .map(
                issue => `
                  <button type="button" data-issue-id="${escapeHtml(issue.id)}">
                    <span class="id-pill">${escapeHtml(issue.id)}</span>
                    ${escapeHtml(issue.dependencies)}
                  </button>
                `,
              )
              .join("")}
          </div>
        </div>
      `,
    )
    .join("");
}

function aggregateGovernanceWatchouts(issues) {
  const checks = [
    {
      label: "Missing owner",
      issues: issues.filter(issue => !issue.owner),
    },
    {
      label: "Missing problem scenario",
      issues: issues.filter(issue => !issue.problemScenario),
    },
    {
      label: "Missing current action",
      issues: issues.filter(issue => !issue.currentAction),
    },
    {
      label: "Decision owner/date not captured",
      issues: issues.filter(issue => issue.decisionNeeded && (!issue.decisionOwner || !issue.decisionDueDate)),
    },
    {
      label: "Roadmap alignment not captured",
      issues: issues.filter(issue => !issue.roadmapAlignment),
    },
  ];

  return checks.filter(check => check.issues.length);
}

function renderGovernanceList(items) {
  if (!items.length) return `<div class="empty-state">No governance watchouts in the current filters.</div>`;
  return items
    .map(
      item => `
        <div class="governance-row">
          <strong>${escapeHtml(item.label)}</strong>
          <span>${item.issues.length} issue${item.issues.length === 1 ? "" : "s"}</span>
        </div>
      `,
    )
    .join("");
}

function renderProductSections(issues) {
  const isProductView = state.view === "product";
  els.productSections.hidden = !isProductView;
  if (!isProductView) {
    els.opportunityTable.innerHTML = "";
    els.capabilityGapTable.innerHTML = "";
    return;
  }

  const opportunityIssues = issues.filter(issue => ["opportunity", "product idea"].includes(normaliseType(issue.issueType)));
  const capabilityGapIssues = issues.filter(issue => ["gap", "risk"].includes(normaliseType(issue.issueType)));

  els.opportunityToggle.hidden = opportunityIssues.length <= 10;
  els.capabilityGapToggle.hidden = capabilityGapIssues.length <= 10;
  els.opportunityToggle.textContent = state.productExpanded.opportunities ? "Show less" : "View all";
  els.capabilityGapToggle.textContent = state.productExpanded.capabilityGaps ? "Show less" : "View all";

  els.opportunityTable.innerHTML = renderProductTable(
    opportunityIssues,
    "No opportunities or product ideas match the current filters.",
    state.productExpanded.opportunities,
  );
  els.capabilityGapTable.innerHTML = renderProductTable(
    capabilityGapIssues,
    "No gaps or risks match the current filters.",
    state.productExpanded.capabilityGaps,
  );
}

function renderProductTable(issues, emptyMessage, isExpanded) {
  if (!issues.length) {
    return `<div class="empty-state">${escapeHtml(emptyMessage)}</div>`;
  }

  const visibleIssues = isExpanded ? issues : issues.slice(0, 10);
  const hiddenCount = issues.length - visibleIssues.length;

  return `
    ${visibleIssues.map(renderProductTableRow).join("")}
    ${hiddenCount > 0 ? `<div class="product-table-note">${hiddenCount} more issue${hiddenCount === 1 ? "" : "s"} hidden</div>` : ""}
  `;
}

function renderProductTableRow(issue) {
  return `
    <button class="product-table-row" type="button" data-issue-id="${escapeHtml(issue.id)}">
      <span class="product-table-title">${escapeHtml(issue.title || "Untitled issue")}</span>
      <span class="product-table-meta">
        <span class="id-pill">${escapeHtml(issue.id)}</span>
        <span class="${statusClass(issue.status)}">${escapeHtml(displayStatus(issue.status))}</span>
        <span>${escapeHtml(productScope(issue))}</span>
        <span class="list-owner">${escapeHtml(issue.owner || "TBD")}</span>
      </span>
    </button>
  `;
}

function renderJourney(issues) {
  const isJourneyView = state.view === "journey";
  els.journeySection.hidden = !isJourneyView;
  if (!isJourneyView) {
    els.journeyMap.innerHTML = "";
    return;
  }

  const phaseGroups = journeyPhases.map(phase => ({
    phase,
    issues: issues.filter(issue => issueJourneyPhases(issue).includes(phase)),
  }));
  const mappedIssueIds = new Set(phaseGroups.flatMap(group => group.issues.map(issue => issue.id)));
  const unmappedIssues = issues.filter(issue => !mappedIssueIds.has(issue.id));
  const columns = unmappedIssues.length
    ? [...phaseGroups, { phase: "Not mapped to E2E phase", issues: unmappedIssues, isUnmapped: true }]
    : phaseGroups;

  const mappedCount = mappedIssueIds.size;
  els.journeySummary.textContent = `${mappedCount} mapped • ${unmappedIssues.length} unmapped`;
  els.journeyMap.innerHTML = columns.map(column => renderJourneyColumn(column)).join("");
}

function renderJourneyColumn(column) {
  const count = column.issues.length;
  return `
    <article class="journey-column ${column.isUnmapped ? "journey-column-muted" : ""}">
      <div class="journey-phase">
        <strong>${escapeHtml(column.phase)}</strong>
        <span>${count} issue${count === 1 ? "" : "s"}</span>
      </div>
      <div class="journey-issues" aria-label="${escapeHtml(column.phase)} has ${count} issue${count === 1 ? "" : "s"}">
        ${
          column.issues.length
            ? column.issues.map(issue => renderJourneyIssue(issue)).join("")
            : `<div class="journey-empty">No issues</div>`
        }
      </div>
    </article>
  `;
}

function renderJourneyIssue(issue) {
  return `
    <button
      class="journey-issue"
      type="button"
      data-issue-id="${escapeHtml(issue.id)}"
      title="${escapeHtml(`${issue.id}: ${issue.title}`)}"
      aria-label="${escapeHtml(`Open ${issue.id}: ${issue.title}`)}"
    >
      <span class="journey-dot ${priorityDotClass(issue.priority)}"></span>
      <span>
        <strong>${escapeHtml(issue.id)}</strong>
        <small>${escapeHtml(productScope(issue))}</small>
      </span>
    </button>
  `;
}

function renderPriorityTable(issues) {
  const priorityOrder = { HIGH: 1, MEDIUM: 2, LOW: 3, TBD: 4, "": 5 };
  const rows = [...issues]
    .sort((a, b) => (priorityOrder[a.priority] || 9) - (priorityOrder[b.priority] || 9))
    .slice(0, 7);

  if (!rows.length) {
    els.priorityTable.innerHTML = `<div class="empty-state">No priority issues match this view.</div>`;
    return;
  }

  els.priorityTable.innerHTML = rows
    .map(
      issue => `
        <button class="issue-row issue-row-button" type="button" data-issue-id="${escapeHtml(issue.id)}">
          <span class="issue-title">${escapeHtml(issue.title)}</span>
          <span class="issue-row-meta">
            <span class="id-pill">${escapeHtml(issue.id)}</span>
            <span class="issue-meta">${escapeHtml(issue.category || "Uncategorised")}</span>
            <span class="issue-row-actions">
              <span class="${priorityClass(issue.priority)}">${escapeHtml(displayValue(issue.priority))}</span>
              <span class="${statusClass(issue.status)}">${escapeHtml(displayStatus(issue.status))}</span>
              <span class="list-owner">${escapeHtml(issue.owner || "TBD")}</span>
            </span>
          </span>
        </button>
      `,
    )
    .join("");
}

function renderCompactLists(issues) {
  const inProgress = issues.filter(issue => issue.status === "WIP").slice(0, 6);
  const dependencies = issues.filter(issue => issue.dependencies).slice(0, 6);
  const decisions = issues.filter(issue => issue.decisionNeeded).slice(0, 6);
  const watchOuts = issues
    .filter(issue => issue.priority === "HIGH" || !issue.problemScenario || issue.status === "HOLD / BLOCKED")
    .slice(0, 6);

  renderList(
    els.progressList,
    inProgress,
    issue => issue.currentAction || issue.title,
    issue => issue.owner || "TBD",
  );
  renderList(
    els.dependencyList,
    dependencies,
    issue => `${issue.dependencies}: ${issue.title}`,
    issue => issue.owner || "TBD",
  );
  renderDecisionList(els.decisionList, decisions);
  renderList(
    els.watchList,
    watchOuts,
    issue => {
      if (!issue.problemScenario) return `${issue.title} needs problem scenario completion`;
      if (issue.status === "HOLD / BLOCKED") return `${issue.title} is blocked`;
      return issue.title;
    },
    issue => productScope(issue) || issue.category || "Review",
  );
}

function renderList(element, items, labelFn, metaFn) {
  if (!items.length) {
    element.innerHTML = `<li><span class="dot"></span><span>No matching items in this view.</span><span></span></li>`;
    return;
  }

  element.innerHTML = items
    .map(
      item => `
        <li>
          <button class="compact-issue-button" type="button" data-issue-id="${escapeHtml(item.id)}">
            <span class="dot"></span>
            <span>${escapeHtml(labelFn(item))}</span>
            <span class="list-owner">${escapeHtml(metaFn(item))}</span>
          </button>
        </li>
      `,
    )
    .join("");
}

function renderDecisionList(element, items) {
  if (!items.length) {
    element.innerHTML = `<li><span class="dot"></span><span>No matching items in this view.</span><span></span></li>`;
    return;
  }

  element.innerHTML = items
    .map(
      issue => `
        <li class="decision-item">
          <button class="decision-button" type="button" data-issue-id="${escapeHtml(issue.id)}">
            <span class="id-pill">${escapeHtml(issue.id)}</span>
            <span class="decision-copy">${escapeHtml(issue.decisionNeeded)}</span>
            <span class="list-owner">${escapeHtml(issue.owner || "TBD")}</span>
            <span class="decision-tooltip" role="tooltip">${escapeHtml(issue.title || "Untitled issue")}</span>
          </button>
        </li>
      `,
    )
    .join("");
}

function renderCards(issues) {
  const rows = issues.slice(0, state.view === "register" ? 48 : 12);

  if (!rows.length) {
    els.issueCards.innerHTML = `<div class="empty-state">No issues match the current filters.</div>`;
    return;
  }

  els.issueCards.innerHTML = rows
    .map(
      issue => `
        <button class="issue-card issue-card-button" type="button" data-issue-id="${escapeHtml(issue.id)}">
          <div class="card-head">
            <span class="id-pill">${escapeHtml(issue.id)}</span>
            <span class="${statusClass(issue.status)}">${escapeHtml(displayStatus(issue.status))}</span>
          </div>
          <h4 class="card-title">${escapeHtml(issue.title)}</h4>
          <p class="scenario">${escapeHtml(summarise(issue.problemScenario || issue.currentAction || issue.notes || "Problem scenario to be completed."))}</p>
          ${renderCardDetail("Action", issue.currentAction)}
          ${renderCardDetail("Decision", issue.decisionNeeded)}
          <div class="card-footer">
            <span class="${priorityClass(issue.priority)}">${escapeHtml(displayValue(issue.priority))}</span>
            ${renderOptionalBadge(issue.issueType)}
            <span class="badge status">${escapeHtml(productScope(issue))}</span>
            <span class="badge status">${escapeHtml(displayImpacts(issue.products || [issue.product]))}</span>
            <span class="badge status not-started">${escapeHtml(issue.owner || "TBD")}</span>
          </div>
        </button>
      `,
    )
    .join("");
}

function render() {
  const issues = filteredIssues();
  renderTabs();
  renderViewShell();
  renderHeader(issues);

  if (state.view === "executive") {
    renderStrategicExecutive(issues);
    renderProductSections(issues);
    renderJourney(issues);
    return;
  }

  if (state.view === "journey") {
    renderStrategicExecutive(issues);
    renderProductSections(issues);
    renderJourney(issues);
    return;
  }

  if (state.view === "register") {
    renderStrategicExecutive(issues);
    renderProductSections(issues);
    renderJourney(issues);
    renderCards(issues);
    return;
  }

  renderStrategicExecutive(issues);
  renderKpis(issues);
  renderProductSections(issues);
  renderJourney(issues);
  renderPriorityTable(issues);
  renderCompactLists(issues);
  renderCards(issues);
}

function setupControls() {
  fillSelect(els.categoryFilter, uniqueValues("categories"));
  const workbookUseCases = uniqueList(data.issues.flatMap(getIssueUseCases));
  const useCaseOptions = [
    ...strategicUseCases.filter(value => value !== "All"),
    ...workbookUseCases.filter(value => !strategicUseCases.includes(value) && value !== "All"),
  ];
  fillSelect(els.useCaseFilter, useCaseOptions);
  fillSelect(els.productFilter, uniqueValues("products"));
  fillSelect(els.issueTypeFilter, uniqueValues("issueType"));
  fillSelect(els.statusFilter, uniqueValues("status").map(displayStatus));

  els.searchInput.addEventListener("input", event => {
    state.search = event.target.value;
    render();
  });

  els.categoryFilter.addEventListener("change", event => {
    state.category = event.target.value;
    render();
  });

  els.useCaseFilter.addEventListener("change", event => {
    state.useCase = event.target.value;
    render();
  });

  els.productFilter.addEventListener("change", event => {
    state.product = event.target.value;
    render();
  });

  els.issueTypeFilter.addEventListener("change", event => {
    state.issueType = event.target.value;
    render();
  });

  els.statusFilter.addEventListener("change", event => {
    state.status = reverseStatus(event.target.value);
    render();
  });

  document.querySelectorAll("[data-action='show-register']").forEach(button => {
    button.addEventListener("click", () => {
      state.view = "register";
      render();
      els.registerSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  els.issueCards.addEventListener("click", event => {
    const card = event.target.closest("[data-issue-id]");
    if (!card) return;
    openIssueModal(card.dataset.issueId);
  });

  els.priorityTable.addEventListener("click", event => {
    const row = event.target.closest("[data-issue-id]");
    if (!row) return;
    openIssueModal(row.dataset.issueId);
  });

  [els.progressList, els.dependencyList, els.decisionList, els.watchList].forEach(list => {
    list.addEventListener("click", event => {
      const item = event.target.closest("[data-issue-id]");
      if (!item) return;
      openIssueModal(item.dataset.issueId);
    });
  });

  els.journeyMap.addEventListener("click", event => {
    const dot = event.target.closest("[data-issue-id]");
    if (!dot) return;
    openIssueModal(dot.dataset.issueId);
  });

  els.productSections.addEventListener("click", event => {
    const row = event.target.closest("[data-issue-id]");
    if (!row) return;
    openIssueModal(row.dataset.issueId);
  });

  [
    els.executiveAttentionList,
    els.strategicDecisionList,
    els.externalDependencyList,
  ].forEach(container => {
    container.addEventListener("click", event => {
      const item = event.target.closest("[data-issue-id]");
      if (!item) return;
      openIssueModal(item.dataset.issueId);
    });
  });

  els.opportunityToggle.addEventListener("click", () => {
    state.productExpanded.opportunities = !state.productExpanded.opportunities;
    render();
  });

  els.capabilityGapToggle.addEventListener("click", () => {
    state.productExpanded.capabilityGaps = !state.productExpanded.capabilityGaps;
    render();
  });

  els.modalClose.addEventListener("click", closeIssueModal);
  els.issueModal.addEventListener("click", event => {
    if (event.target === els.issueModal) closeIssueModal();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !els.issueModal.hidden) closeIssueModal();
  });
}

function priorityClass(priority) {
  const key = (priority || "").toLowerCase();
  if (key === "high") return "badge high";
  if (key === "low") return "badge low";
  return "badge medium";
}

function priorityDotClass(priority) {
  const key = (priority || "").toLowerCase();
  if (key === "high") return "journey-dot-high";
  if (key === "low") return "journey-dot-low";
  return "journey-dot-medium";
}

function statusClass(status) {
  const key = (status || "").toLowerCase();
  if (key.includes("not started") || key === "acknowledge") return "badge status not-started";
  if (key.includes("backlog")) return "badge status backlog";
  if (key.includes("blocked") || key.includes("hold")) return "badge status blocked";
  return "badge status";
}

function displayStatus(status) {
  const labels = {
    WIP: "In Progress",
    "NOT STARTED": "Not Started",
    ACKNOWLEDGE: "Acknowledged",
    BACKLOG: "Backlog",
    "HOLD / BLOCKED": "Blocked",
    COMPLETED: "Completed",
    CLOSED: "Closed",
  };
  return labels[status] || displayValue(status);
}

function reverseStatus(label) {
  if (label === "All") return "All";
  const match = uniqueValues("status").find(status => displayStatus(status) === label);
  return match || label.toUpperCase();
}

function displayValue(value) {
  if (!value) return "TBD";
  return value.charAt(0) + value.slice(1).toLowerCase();
}

function openIssueModal(issueId) {
  const issue = data.issues.find(item => item.id === issueId);
  if (!issue) return;

  els.modalIssueId.textContent = issue.id || "ID";
  els.modalTitle.textContent = issue.title || "Untitled issue";
  els.modalBody.innerHTML = renderIssueModal(issue);
  els.issueModal.hidden = false;
  document.body.classList.add("modal-open");
  els.modalClose.focus();
}

function closeIssueModal() {
  els.issueModal.hidden = true;
  document.body.classList.remove("modal-open");
}

function renderIssueModal(issue) {
  return `
    <div class="modal-tags">
      <span class="${priorityClass(issue.priority)}">${escapeHtml(displayValue(issue.priority))}</span>
      <span class="${statusClass(issue.status)}">${escapeHtml(displayStatus(issue.status))}</span>
      ${renderOptionalBadge(issue.issueType)}
      ${issue.isExecSummary ? `<span class="badge status">Exec Summary</span>` : ""}
    </div>

    <section class="detail-section">
      <h4>Scope</h4>
      <div class="detail-grid">
        ${renderChipField("Use Case(s) Impacted", issue.useCases)}
        ${renderChipField("Categories", issue.categories || [issue.category])}
        ${renderChipField("Journey Stage", issue.journeyStages || [issue.journeyStage])}
        ${renderChipField("Product(s) Impacted", issue.products)}
      </div>
    </section>

    <section class="detail-section">
      <h4>Ownership And Tracking</h4>
      <div class="detail-grid">
        ${renderField("Owner", issue.owner)}
        ${renderField("Horizon", displayValue(issue.horizon))}
        ${renderField("Last Updated", formatDate(issue.lastUpdated))}
        ${renderField("Dependencies", issue.dependencies)}
        ${renderField("Related Initiative / PE / Jira / Confluence", issue.relatedInitiative)}
        ${renderField("Link 1", issue.link1)}
        ${renderField("Link 2", issue.link2)}
      </div>
    </section>

    <section class="detail-section">
      <h4>Problem And Action</h4>
      ${renderLongField("Problem Scenario", issue.problemScenario)}
      ${renderLongField("Current Action", issue.currentAction)}
      ${renderLongField("Decision Needed", issue.decisionNeeded)}
      ${renderLongField("Comments / Notes", issue.notes)}
    </section>
  `;
}

function renderField(label, value) {
  return `
    <div class="detail-field">
      <span>${escapeHtml(label)}</span>
      <p>${escapeHtml(value || "Not captured")}</p>
    </div>
  `;
}

function renderLongField(label, value) {
  return `
    <div class="detail-field detail-field-wide">
      <span>${escapeHtml(label)}</span>
      <p>${escapeHtml(value || "Not captured")}</p>
    </div>
  `;
}

function renderChipField(label, values) {
  const cleanValues = (values || []).filter(Boolean);
  return `
    <div class="detail-field">
      <span>${escapeHtml(label)}</span>
      <div class="chip-list">
        ${
          cleanValues.length
            ? cleanValues.map(value => `<span class="badge status">${escapeHtml(value)}</span>`).join("")
            : `<p>Not captured</p>`
        }
      </div>
    </div>
  `;
}

function getIssueUseCases(issue) {
  const values = Array.isArray(issue.useCases) && issue.useCases.length
    ? issue.useCases
    : splitMultiValue(issue.useCase || issue.useCasesImpacted);
  const normalised = values.map(normaliseUseCaseName).filter(Boolean);
  return uniqueList(normalised.length ? normalised : ["All"]);
}

function normaliseUseCaseName(value) {
  const text = String(value || "").trim();
  const key = text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
  const aliases = {
    all: "All",
    super: "Super",
    "payday super": "Super",
    payroll: "Payroll",
    tax: "Tax",
    econveyancing: "eConveyancing",
    "electronic conveyancing": "eConveyancing",
    "electronic conveyancing econveyancing": "eConveyancing",
    einvoicing: "eInvoicing",
    "e invoicing": "eInvoicing",
    securities: "Securities",
    government: "Government",
    "business payments": "Business Payments",
    bp: "Business Payments",
    mddr: "MDDR",
  };
  return aliases[key] || strategicUseCases.find(useCase => useCase.toLowerCase() === text.toLowerCase()) || text;
}

function getIssueProducts(issue) {
  const values = Array.isArray(issue.products) && issue.products.length ? issue.products : splitMultiValue(issue.product);
  return uniqueList(values.filter(Boolean));
}

function groupByValues(issues, valuesFn, fallback) {
  const groups = new Map();
  issues.forEach(issue => {
    const values = valuesFn(issue);
    const groupValues = values.length ? values : [fallback];
    groupValues.forEach(value => {
      if (!groups.has(value)) groups.set(value, []);
      groups.get(value).push(issue);
    });
  });
  return groups;
}

function topValue(values) {
  const counts = new Map();
  values.filter(Boolean).forEach(value => counts.set(value, (counts.get(value) || 0) + 1));
  return [...counts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] || "";
}

function isBlocked(issue) {
  return String(issue.status || "").toLowerCase().includes("blocked") || String(issue.status || "").toLowerCase().includes("hold");
}

function isExternalDependency(issue) {
  return dependencyOwnerType(issue) !== "Internal / Not Classified";
}

function dependencyOwnerType(issue) {
  const text = String(issue.dependencyOwnerType || issue.dependencies || "").toLowerCase();
  if (!text) return "Internal / Not Classified";
  const match = externalDependencyTypes.find(group => group.terms.some(term => text.includes(term)));
  return match ? match.type : "Other External Parties";
}

function readinessClass(status) {
  const key = String(status || "").toLowerCase();
  if (key === "green") return "readiness-status readiness-green";
  if (key === "amber") return "readiness-status readiness-amber";
  if (key === "red") return "readiness-status readiness-red";
  if (key === "discovery") return "readiness-status readiness-discovery";
  if (key === "cross-cutting") return "readiness-status readiness-cross";
  return "readiness-status readiness-not-started";
}

function formatList(values) {
  const cleanValues = uniqueList((values || []).filter(Boolean));
  if (!cleanValues.length) return "Not captured";
  if (cleanValues.length <= 3) return cleanValues.join(", ");
  return `${cleanValues.slice(0, 3).join(", ")} +${cleanValues.length - 3}`;
}

function uniqueList(values) {
  const seen = new Set();
  return values.filter(value => {
    const key = String(value || "").toLowerCase();
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function issueJourneyPhases(issue) {
  const rawValues = issue.journeyStages || splitMultiValue(issue.journeyStage);
  return rawValues
    .map(value => {
      const normalised = normaliseJourneyLabel(value);
      return journeyPhases.find(phase => normaliseJourneyLabel(phase) === normalised);
    })
    .filter(Boolean);
}

function normaliseJourneyLabel(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function splitMultiValue(value) {
  return String(value || "")
    .split(/;|\n/)
    .map(item => item.trim())
    .filter(Boolean);
}

function displayImpacts(values) {
  const cleanValues = (values || []).filter(Boolean);
  if (cleanValues.length <= 1) return "No other impacts";
  return `${cleanValues.length} products`;
}

function productScope(issue) {
  return (issue.products || [issue.product]).filter(Boolean).join("; ") || "No product";
}

function normaliseType(value) {
  return String(value || "").trim().toLowerCase();
}

function renderOptionalBadge(value) {
  return value ? `<span class="badge status">${escapeHtml(value)}</span>` : "";
}

function renderCardDetail(label, value) {
  if (!value) return "";
  return `
    <div class="card-detail">
      <span>${escapeHtml(label)}</span>
      <p>${escapeHtml(summarise(value))}</p>
    </div>
  `;
}

function formatDate(value) {
  if (!value) return "-";
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en-AU", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

function summarise(text) {
  if (!text) return "";
  return text.length > 230 ? `${text.slice(0, 227)}...` : text;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

setupControls();
render();
