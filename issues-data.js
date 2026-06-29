window.ISSUES_DATA = {
  "generatedAt": "2026-06-29 15:44",
  "source": "Issues Register.xlsm",
  "strategy": [
    {
      "id": "SP01",
      "title": "Continue the Move to NPP and deliver economic transformation opportunities"
    },
    {
      "id": "SP02",
      "title": "Extend Eftpos addressable market"
    },
    {
      "id": "SP03",
      "title": "Defend and extend our role in bill payments"
    },
    {
      "id": "SP04",
      "title": "Grow ConnectID"
    },
    {
      "id": "SP05",
      "title": "Increase security and resilience"
    },
    {
      "id": "SP06",
      "title": "Continue risk management uplift"
    },
    {
      "id": "SP07",
      "title": "Enhance fraud and scam protections"
    },
    {
      "id": "SP08",
      "title": "Simplify & transform business"
    },
    {
      "id": "SP09",
      "title": "Digital assets strategy"
    },
    {
      "id": "SP10",
      "title": "Agentic commerce strategy"
    },
    {
      "id": "SP11",
      "title": "Integrate identity into payments flows"
    },
    {
      "id": "SP12",
      "title": "Integrated product and asset strategy"
    }
  ],
  "objectives": [
    {
      "id": "OBJ01",
      "title": "Critically Important",
      "description": "Our infrastructure underpins economically significant flows in Australia"
    },
    {
      "id": "OBJ02",
      "title": "Secure, resilient and competitive",
      "description": "National payments and identity infrastructure that are best-in-class"
    },
    {
      "id": "OBJ03",
      "title": "Leverage emerging trends",
      "description": "Enable members to leverage emerging trends to win and create opportunities to derive economic value"
    }
  ],
  "scorecard": [
    {
      "id": "KR01",
      "keyResult": "Support Australia’s vision for a digital economy with NPP",
      "threshold": "Super enabled: all funds accepting NPP; PRN passed through",
      "target": "Threshold plus 4+ clearing houses using NPP",
      "maximum": "Target plus 200k PayTo Super transactions"
    }
  ],
  "useCases": [
    {
      "name": "Super",
      "description": "Enable the superannuation ecosystem to adopt NPP and related capabilities, supporting Payday Super legislation, improved payment processing, reconciliation, and industry readiness.",
      "desiredOutcome": "Employers, clearing houses and super funds can process super contributions using NPP with end-to-end reconciliation.",
      "status": "Amber"
    },
    {
      "name": "Payroll",
      "description": "Enable payroll providers, employers and financial institutions to process payroll payments using modern payment capabilities that improve speed, efficiency and customer experience.",
      "desiredOutcome": "Payroll payments are processed using modern payment capabilities with improved speed and reliability.",
      "status": "Discovery"
    },
    {
      "name": "MDDR",
      "description": "Enable the migration of Direct Debit Request (DDR) capabilities to modern NPP-based payment experiences, supporting improved customer outcomes and future payment innovation.",
      "desiredOutcome": "",
      "status": "Discovery"
    },
    {
      "name": "Government",
      "description": "Enable government agencies to send and receive payments using modern payment capabilities, improving service delivery, speed, reconciliation and citizen experience.",
      "desiredOutcome": "Government payment services deliver faster, more transparent payment experiences.",
      "status": "Discovery"
    },
    {
      "name": "Business Payments",
      "description": "Enable businesses to adopt modern payment capabilities across domestic payment scenarios, improving operational efficiency, automation, reconciliation and customer experience.",
      "desiredOutcome": "",
      "status": "Discovery"
    },
    {
      "name": "Tax",
      "description": "Enable tax-related payments and refunds to leverage modern payment capabilities, supporting faster processing, improved reconciliation and enhanced payment certainty.",
      "desiredOutcome": "",
      "status": "Discovery"
    },
    {
      "name": "eInvoicing",
      "description": "Enable payment experiences that complement electronic invoicing by supporting straight-through processing, automation and improved business payment workflows.",
      "desiredOutcome": "",
      "status": "Discovery"
    },
    {
      "name": "eConveyancing",
      "description": "Enable property settlement and related payment processes through modern payment capabilities that improve settlement efficiency, certainty and customer outcomes.",
      "desiredOutcome": "",
      "status": "Discovery"
    },
    {
      "name": "Securities",
      "description": "Enable securities-related payment flows using modern payment capabilities to improve settlement efficiency, reconciliation and operational resilience.",
      "desiredOutcome": "",
      "status": "Discovery"
    },
    {
      "name": "All",
      "description": "Cross-cutting initiatives, capabilities or issues that apply across multiple strategic use cases rather than a single business scenario.",
      "desiredOutcome": "",
      "status": "Amber"
    }
  ],
  "capabilities": [
    {
      "name": "Accounts",
      "owner": "Nick",
      "description": "Account enablement, reachability and routing"
    },
    {
      "name": "CATSCT",
      "owner": "TBD",
      "description": ""
    },
    {
      "name": "CoP",
      "owner": "Tina",
      "description": "Confirmation of Payee"
    },
    {
      "name": "Osko",
      "owner": "TBD",
      "description": ""
    },
    {
      "name": "Payment Instruction",
      "owner": "Bianca",
      "description": ""
    },
    {
      "name": "PayID",
      "owner": "Ronita",
      "description": "Addressing capability"
    },
    {
      "name": "PayTo",
      "owner": "Edith",
      "description": "Payment initiation capability"
    },
    {
      "name": "Reporting",
      "owner": "Bianca",
      "description": "Reporting and reconciliation"
    },
    {
      "name": "SCT",
      "owner": "TBD",
      "description": ""
    },
    {
      "name": "Other",
      "owner": "Bianca",
      "description": ""
    }
  ],
  "issues": [
    {
      "id": "ID-01",
      "useCasesImpacted": "Super; Payroll; Government; Business Payments",
      "category": "Ecosystem Readiness & External Constraints",
      "journeyStage": "Set up & Account, onboarding",
      "title": "Understanding of the usage of off-system BSBs",
      "problemScenario": "Currently, there is limited visibility and understanding of how off-system BSBs are being used across use cases and Participants. This results in uncertainty around how payments are routed, the availability of alternatives, and the potential impact on AP+ products and services. There is a need to conduct analysis of off-system BSB usage, associated challenges, and viable alternatives to inform product and ecosystem decisions.",
      "issueType": "Gap",
      "dependencies": "Participants",
      "relatedInitiative": "",
      "productsImpacted": "Accounts",
      "owner": "Nick",
      "priority": "MEDIUM",
      "horizon": "LONG",
      "status": "WIP",
      "currentAction": "",
      "decisionNeeded": "",
      "notes": "As part of the account reach reporting, details of the usage of BSB was collected",
      "link1": "",
      "link2": "",
      "strategicPriorityId": "",
      "objectiveId": "OBJ01",
      "scorecardId": "KR01",
      "lastUpdated": "2026-06-22",
      "execSummaryTag": "Yes",
      "strategicObjective": "",
      "scorecardItem": "",
      "readinessStatus": "",
      "readinessRationale": "",
      "decisionOwner": "",
      "decisionDueDate": "",
      "dependencyOwnerType": "",
      "impactDriver": "",
      "roadmapAlignment": "",
      "externalMessagingStatus": "",
      "reviewDate": "",
      "isExecSummary": true,
      "useCases": [
        "Super",
        "Payroll",
        "Government",
        "Business Payments"
      ],
      "useCase": "Super; Payroll; Government; Business Payments",
      "categories": [
        "Ecosystem Readiness & External Constraints"
      ],
      "products": [
        "Accounts"
      ],
      "product": "Accounts",
      "journeyStages": [
        "Set up & Account, onboarding"
      ],
      "strategicPriority": {},
      "objective": {
        "id": "OBJ01",
        "title": "Critically Important",
        "description": "Our infrastructure underpins economically significant flows in Australia"
      },
      "scorecard": {
        "id": "KR01",
        "keyResult": "Support Australia’s vision for a digital economy with NPP",
        "threshold": "Super enabled: all funds accepting NPP; PRN passed through",
        "target": "Threshold plus 4+ clearing houses using NPP",
        "maximum": "Target plus 200k PayTo Super transactions"
      },
      "useCaseRefs": [
        {
          "name": "Super",
          "description": "Enable the superannuation ecosystem to adopt NPP and related capabilities, supporting Payday Super legislation, improved payment processing, reconciliation, and industry readiness.",
          "desiredOutcome": "Employers, clearing houses and super funds can process super contributions using NPP with end-to-end reconciliation.",
          "status": "Amber"
        },
        {
          "name": "Payroll",
          "description": "Enable payroll providers, employers and financial institutions to process payroll payments using modern payment capabilities that improve speed, efficiency and customer experience.",
          "desiredOutcome": "Payroll payments are processed using modern payment capabilities with improved speed and reliability.",
          "status": "Discovery"
        },
        {
          "name": "Government",
          "description": "Enable government agencies to send and receive payments using modern payment capabilities, improving service delivery, speed, reconciliation and citizen experience.",
          "desiredOutcome": "Government payment services deliver faster, more transparent payment experiences.",
          "status": "Discovery"
        },
        {
          "name": "Business Payments",
          "description": "Enable businesses to adopt modern payment capabilities across domestic payment scenarios, improving operational efficiency, automation, reconciliation and customer experience.",
          "desiredOutcome": "",
          "status": "Discovery"
        }
      ],
      "capabilityRefs": [
        {
          "name": "Accounts",
          "owner": "Nick",
          "description": "Account enablement, reachability and routing"
        }
      ]
    },
    {
      "id": "ID-02",
      "useCasesImpacted": "Super; Payroll; Government; Business Payments",
      "category": "Payment instruction and Operation; Ecosystem Readiness & External Constraints",
      "journeyStage": "Set up & Account, onboarding",
      "title": "Account Reach",
      "problemScenario": "Currently there are some accounts that haven't been made NPP reachable. This results in the payment being rejected if a payment is made to them. There is a need for plans and timeframes for when accounts will be made reachable, alternative solutions or an understanding of how it impacts any NPP payments being processed.",
      "issueType": "Opportunity",
      "dependencies": "Participants",
      "relatedInitiative": "",
      "productsImpacted": "Accounts",
      "owner": "Nick",
      "priority": "MEDIUM",
      "horizon": "LONG",
      "status": "WIP",
      "currentAction": "Ensure contribution accounts are NPP-enabled and accurately maintained.",
      "decisionNeeded": "",
      "notes": "Account Reach data for Feb 2026 has been collected. August data cycle to begin soon",
      "link1": "NPP Bank account enablement - Troubleshooting - Move to NPP (MTN) Program Squad - Confluence",
      "link2": "",
      "strategicPriorityId": "SP01",
      "objectiveId": "OBJ01",
      "scorecardId": "KR01",
      "lastUpdated": "2026-06-22",
      "execSummaryTag": "Yes",
      "strategicObjective": "",
      "scorecardItem": "",
      "readinessStatus": "",
      "readinessRationale": "",
      "decisionOwner": "",
      "decisionDueDate": "",
      "dependencyOwnerType": "",
      "impactDriver": "",
      "roadmapAlignment": "",
      "externalMessagingStatus": "",
      "reviewDate": "",
      "isExecSummary": true,
      "useCases": [
        "Super",
        "Payroll",
        "Government",
        "Business Payments"
      ],
      "useCase": "Super; Payroll; Government; Business Payments",
      "categories": [
        "Payment instruction and Operation",
        "Ecosystem Readiness & External Constraints"
      ],
      "products": [
        "Accounts"
      ],
      "product": "Accounts",
      "journeyStages": [
        "Set up & Account, onboarding"
      ],
      "strategicPriority": {
        "id": "SP01",
        "title": "Continue the Move to NPP and deliver economic transformation opportunities"
      },
      "objective": {
        "id": "OBJ01",
        "title": "Critically Important",
        "description": "Our infrastructure underpins economically significant flows in Australia"
      },
      "scorecard": {
        "id": "KR01",
        "keyResult": "Support Australia’s vision for a digital economy with NPP",
        "threshold": "Super enabled: all funds accepting NPP; PRN passed through",
        "target": "Threshold plus 4+ clearing houses using NPP",
        "maximum": "Target plus 200k PayTo Super transactions"
      },
      "useCaseRefs": [
        {
          "name": "Super",
          "description": "Enable the superannuation ecosystem to adopt NPP and related capabilities, supporting Payday Super legislation, improved payment processing, reconciliation, and industry readiness.",
          "desiredOutcome": "Employers, clearing houses and super funds can process super contributions using NPP with end-to-end reconciliation.",
          "status": "Amber"
        },
        {
          "name": "Payroll",
          "description": "Enable payroll providers, employers and financial institutions to process payroll payments using modern payment capabilities that improve speed, efficiency and customer experience.",
          "desiredOutcome": "Payroll payments are processed using modern payment capabilities with improved speed and reliability.",
          "status": "Discovery"
        },
        {
          "name": "Government",
          "description": "Enable government agencies to send and receive payments using modern payment capabilities, improving service delivery, speed, reconciliation and citizen experience.",
          "desiredOutcome": "Government payment services deliver faster, more transparent payment experiences.",
          "status": "Discovery"
        },
        {
          "name": "Business Payments",
          "description": "Enable businesses to adopt modern payment capabilities across domestic payment scenarios, improving operational efficiency, automation, reconciliation and customer experience.",
          "desiredOutcome": "",
          "status": "Discovery"
        }
      ],
      "capabilityRefs": [
        {
          "name": "Accounts",
          "owner": "Nick",
          "description": "Account enablement, reachability and routing"
        }
      ]
    },
    {
      "id": "ID-03",
      "useCasesImpacted": "Super; Payroll; Government; Business Payments",
      "category": "Ecosystem Readiness & External Constraints",
      "journeyStage": "Payment processing",
      "title": "BSB Redirection",
      "problemScenario": "Currently Under BECS processing, these obsolete or unused BSBs are often mapped to current BSBs by the Payer or Payee institution. This results in rejected payments despite it being successful in BECS Some industry sectors with low employee turnover have undertaken minimal maintenance of employee banking details. In these cases, payroll and accounting systems continue to use outdated BSBs that are still visible in BSB reference listings but are no longer in active use. ​ This results in payments being rejected particularly super refunds, super pension payments, welfare and payroll payments) There is a need for an industry solution or coordination to solve for this issue",
      "issueType": "Risk",
      "dependencies": "Participants",
      "relatedInitiative": "",
      "productsImpacted": "Accounts",
      "owner": "Nick",
      "priority": "HIGH",
      "horizon": "MEDIUM",
      "status": "WIP",
      "currentAction": "Better understand the implications of BSB redirection and assess potential solutions to improve transparency, control and reliability of payment routing.",
      "decisionNeeded": "",
      "notes": "Analysis on possible solutions are being undertaken. Was discussed in the June PRC",
      "link1": "BSB Redirection Troubleshooting",
      "link2": "",
      "strategicPriorityId": "",
      "objectiveId": "OBJ01",
      "scorecardId": "KR01",
      "lastUpdated": "2026-06-22",
      "execSummaryTag": "Yes",
      "strategicObjective": "",
      "scorecardItem": "",
      "readinessStatus": "",
      "readinessRationale": "",
      "decisionOwner": "",
      "decisionDueDate": "",
      "dependencyOwnerType": "",
      "impactDriver": "",
      "roadmapAlignment": "",
      "externalMessagingStatus": "",
      "reviewDate": "",
      "isExecSummary": true,
      "useCases": [
        "Super",
        "Payroll",
        "Government",
        "Business Payments"
      ],
      "useCase": "Super; Payroll; Government; Business Payments",
      "categories": [
        "Ecosystem Readiness & External Constraints"
      ],
      "products": [
        "Accounts"
      ],
      "product": "Accounts",
      "journeyStages": [
        "Payment processing"
      ],
      "strategicPriority": {},
      "objective": {
        "id": "OBJ01",
        "title": "Critically Important",
        "description": "Our infrastructure underpins economically significant flows in Australia"
      },
      "scorecard": {
        "id": "KR01",
        "keyResult": "Support Australia’s vision for a digital economy with NPP",
        "threshold": "Super enabled: all funds accepting NPP; PRN passed through",
        "target": "Threshold plus 4+ clearing houses using NPP",
        "maximum": "Target plus 200k PayTo Super transactions"
      },
      "useCaseRefs": [
        {
          "name": "Super",
          "description": "Enable the superannuation ecosystem to adopt NPP and related capabilities, supporting Payday Super legislation, improved payment processing, reconciliation, and industry readiness.",
          "desiredOutcome": "Employers, clearing houses and super funds can process super contributions using NPP with end-to-end reconciliation.",
          "status": "Amber"
        },
        {
          "name": "Payroll",
          "description": "Enable payroll providers, employers and financial institutions to process payroll payments using modern payment capabilities that improve speed, efficiency and customer experience.",
          "desiredOutcome": "Payroll payments are processed using modern payment capabilities with improved speed and reliability.",
          "status": "Discovery"
        },
        {
          "name": "Government",
          "description": "Enable government agencies to send and receive payments using modern payment capabilities, improving service delivery, speed, reconciliation and citizen experience.",
          "desiredOutcome": "Government payment services deliver faster, more transparent payment experiences.",
          "status": "Discovery"
        },
        {
          "name": "Business Payments",
          "description": "Enable businesses to adopt modern payment capabilities across domestic payment scenarios, improving operational efficiency, automation, reconciliation and customer experience.",
          "desiredOutcome": "",
          "status": "Discovery"
        }
      ],
      "capabilityRefs": [
        {
          "name": "Accounts",
          "owner": "Nick",
          "description": "Account enablement, reachability and routing"
        }
      ]
    },
    {
      "id": "ID-04",
      "useCasesImpacted": "Super; Payroll; Government; Business Payments",
      "category": "Ecosystem Readiness & External Constraints",
      "journeyStage": "Receiving, validating, reconciling, and reporting",
      "title": "Readiness of super funds to receive NPP payments by 1 July",
      "problemScenario": "As a result of NPP being approved as a payment method for SuperStream by the ATO, all super funds must be able to receive NPP payments for employer contributions Currently, accounts are either not enabled for NPP due to being on legacy platforms or are using off system BSBs. This results in funds not being ready to meet their ATO SuperStream obligations There is a need for super funds to ensure their contribution accounts are NPP-enabled and accurately maintained in the FVS, including enabling existing accounts or opening new accounts to ensure that can receive and reconcile employer contributions via NPP.",
      "issueType": "Product Idea",
      "dependencies": "Participants",
      "relatedInitiative": "",
      "productsImpacted": "Accounts",
      "owner": "Bianca",
      "priority": "HIGH",
      "horizon": "SHORT",
      "status": "WIP",
      "currentAction": "Follow up with super funds to assess readiness.",
      "decisionNeeded": "",
      "notes": "Tracking of SF readiness - 96% of large APRA super funds are NPP reachable.",
      "link1": "NPP Bank account enablement - Troubleshooting - Move to NPP (MTN) Program Squad - Confluence",
      "link2": "",
      "strategicPriorityId": "SP01",
      "objectiveId": "OBJ01",
      "scorecardId": "KR01",
      "lastUpdated": "2026-06-22",
      "execSummaryTag": "Yes",
      "strategicObjective": "",
      "scorecardItem": "",
      "readinessStatus": "",
      "readinessRationale": "",
      "decisionOwner": "",
      "decisionDueDate": "",
      "dependencyOwnerType": "",
      "impactDriver": "",
      "roadmapAlignment": "",
      "externalMessagingStatus": "",
      "reviewDate": "",
      "isExecSummary": true,
      "useCases": [
        "Super",
        "Payroll",
        "Government",
        "Business Payments"
      ],
      "useCase": "Super; Payroll; Government; Business Payments",
      "categories": [
        "Ecosystem Readiness & External Constraints"
      ],
      "products": [
        "Accounts"
      ],
      "product": "Accounts",
      "journeyStages": [
        "Receiving, validating, reconciling, and reporting"
      ],
      "strategicPriority": {
        "id": "SP01",
        "title": "Continue the Move to NPP and deliver economic transformation opportunities"
      },
      "objective": {
        "id": "OBJ01",
        "title": "Critically Important",
        "description": "Our infrastructure underpins economically significant flows in Australia"
      },
      "scorecard": {
        "id": "KR01",
        "keyResult": "Support Australia’s vision for a digital economy with NPP",
        "threshold": "Super enabled: all funds accepting NPP; PRN passed through",
        "target": "Threshold plus 4+ clearing houses using NPP",
        "maximum": "Target plus 200k PayTo Super transactions"
      },
      "useCaseRefs": [
        {
          "name": "Super",
          "description": "Enable the superannuation ecosystem to adopt NPP and related capabilities, supporting Payday Super legislation, improved payment processing, reconciliation, and industry readiness.",
          "desiredOutcome": "Employers, clearing houses and super funds can process super contributions using NPP with end-to-end reconciliation.",
          "status": "Amber"
        },
        {
          "name": "Payroll",
          "description": "Enable payroll providers, employers and financial institutions to process payroll payments using modern payment capabilities that improve speed, efficiency and customer experience.",
          "desiredOutcome": "Payroll payments are processed using modern payment capabilities with improved speed and reliability.",
          "status": "Discovery"
        },
        {
          "name": "Government",
          "description": "Enable government agencies to send and receive payments using modern payment capabilities, improving service delivery, speed, reconciliation and citizen experience.",
          "desiredOutcome": "Government payment services deliver faster, more transparent payment experiences.",
          "status": "Discovery"
        },
        {
          "name": "Business Payments",
          "description": "Enable businesses to adopt modern payment capabilities across domestic payment scenarios, improving operational efficiency, automation, reconciliation and customer experience.",
          "desiredOutcome": "",
          "status": "Discovery"
        }
      ],
      "capabilityRefs": [
        {
          "name": "Accounts",
          "owner": "Nick",
          "description": "Account enablement, reachability and routing"
        }
      ]
    },
    {
      "id": "ID-05",
      "useCasesImpacted": "All",
      "category": "Data Quality & Validation",
      "journeyStage": "Set up & Account, onboarding",
      "title": "Opportunity: More information for COP calls for DSPs",
      "problemScenario": "COP is the match outcome that a DSP receives. Is this enough information or is there more information that could be provided to DSPs to ensure that upfront validation can occur and ensure better processing.",
      "issueType": "Opportunity",
      "dependencies": "",
      "relatedInitiative": "",
      "productsImpacted": "CoP",
      "owner": "Tina",
      "priority": "MEDIUM",
      "horizon": "MEDIUM",
      "status": "WIP",
      "currentAction": "CoP being assessed for Payday Super",
      "decisionNeeded": "",
      "notes": "External privacy advice currently underway with June PRC paper planned to address Use Case N12.5.3b expansion",
      "link1": "",
      "link2": "",
      "strategicPriorityId": "SP07",
      "objectiveId": "OBJ01",
      "scorecardId": "KR01",
      "lastUpdated": "2026-04-01",
      "execSummaryTag": "Yes",
      "strategicObjective": "",
      "scorecardItem": "",
      "readinessStatus": "",
      "readinessRationale": "",
      "decisionOwner": "",
      "decisionDueDate": "",
      "dependencyOwnerType": "",
      "impactDriver": "",
      "roadmapAlignment": "",
      "externalMessagingStatus": "",
      "reviewDate": "",
      "isExecSummary": true,
      "useCases": [
        "All"
      ],
      "useCase": "All",
      "categories": [
        "Data Quality & Validation"
      ],
      "products": [
        "CoP"
      ],
      "product": "CoP",
      "journeyStages": [
        "Set up & Account, onboarding"
      ],
      "strategicPriority": {
        "id": "SP07",
        "title": "Enhance fraud and scam protections"
      },
      "objective": {
        "id": "OBJ01",
        "title": "Critically Important",
        "description": "Our infrastructure underpins economically significant flows in Australia"
      },
      "scorecard": {
        "id": "KR01",
        "keyResult": "Support Australia’s vision for a digital economy with NPP",
        "threshold": "Super enabled: all funds accepting NPP; PRN passed through",
        "target": "Threshold plus 4+ clearing houses using NPP",
        "maximum": "Target plus 200k PayTo Super transactions"
      },
      "useCaseRefs": [
        {
          "name": "All",
          "description": "Cross-cutting initiatives, capabilities or issues that apply across multiple strategic use cases rather than a single business scenario.",
          "desiredOutcome": "",
          "status": "Amber"
        }
      ],
      "capabilityRefs": [
        {
          "name": "CoP",
          "owner": "Tina",
          "description": "Confirmation of Payee"
        }
      ]
    },
    {
      "id": "ID-08",
      "useCasesImpacted": "All",
      "category": "Ecosystem Readiness & External Constraints",
      "journeyStage": "Preparation and data creation",
      "title": "Impacts on cashflow due to sequencing of payments",
      "problemScenario": "Currently under BECS, banks sequence the processing of debits and credits to ensure that the business has sufficient funds to cover any direct debit request. Given PayTo can be triggered during anytime, this results in the Payer having insufficient funds when the request comes through. There is a need to understand how is this managed by the Payer and the initiator to ensure that PayTo payment initiation can be as successful as it can be?",
      "issueType": "Opportunity",
      "dependencies": "",
      "relatedInitiative": "",
      "productsImpacted": "Other",
      "owner": "Bianca",
      "priority": "MEDIUM",
      "horizon": "MEDIUM",
      "status": "NOT STARTED",
      "currentAction": "",
      "decisionNeeded": "",
      "notes": "Create general awareness of the impacts of cash flow management (Base deck/FAQs/Implementation Guide)",
      "link1": "",
      "link2": "",
      "strategicPriorityId": "",
      "objectiveId": "OBJ01",
      "scorecardId": "KR01",
      "lastUpdated": "2026-04-01",
      "execSummaryTag": "Yes",
      "strategicObjective": "",
      "scorecardItem": "",
      "readinessStatus": "",
      "readinessRationale": "",
      "decisionOwner": "",
      "decisionDueDate": "",
      "dependencyOwnerType": "",
      "impactDriver": "",
      "roadmapAlignment": "",
      "externalMessagingStatus": "",
      "reviewDate": "",
      "isExecSummary": true,
      "useCases": [
        "All"
      ],
      "useCase": "All",
      "categories": [
        "Ecosystem Readiness & External Constraints"
      ],
      "products": [
        "Other"
      ],
      "product": "Other",
      "journeyStages": [
        "Preparation and data creation"
      ],
      "strategicPriority": {},
      "objective": {
        "id": "OBJ01",
        "title": "Critically Important",
        "description": "Our infrastructure underpins economically significant flows in Australia"
      },
      "scorecard": {
        "id": "KR01",
        "keyResult": "Support Australia’s vision for a digital economy with NPP",
        "threshold": "Super enabled: all funds accepting NPP; PRN passed through",
        "target": "Threshold plus 4+ clearing houses using NPP",
        "maximum": "Target plus 200k PayTo Super transactions"
      },
      "useCaseRefs": [
        {
          "name": "All",
          "description": "Cross-cutting initiatives, capabilities or issues that apply across multiple strategic use cases rather than a single business scenario.",
          "desiredOutcome": "",
          "status": "Amber"
        }
      ],
      "capabilityRefs": [
        {
          "name": "Other",
          "owner": "Bianca",
          "description": ""
        }
      ]
    },
    {
      "id": "ID-10",
      "useCasesImpacted": "All; Super; Payroll; Government; Business Payments",
      "category": "Exceptions, Returns & Error Handling",
      "journeyStage": "Investigation and returns (unhappy path)",
      "title": "Lack of automated payment return solutions by Participants",
      "problemScenario": "Currently there are scenarios where the Payee wants to return the funds back to the original Payer. Today, the Payee could do this under BECS if they have the original Payer details or under NPP contact their bank to process those returns. This results in additional operational burden on participants in order to process these returns. There is a need to Understand the unsolicited payment return process and whether it is fit for purpose for businesses use cases and the impacts it may have on business processes, Participant operational teams.",
      "issueType": "Product Idea",
      "dependencies": "Participants",
      "relatedInitiative": "",
      "productsImpacted": "Other",
      "owner": "Bianca",
      "priority": "HIGH",
      "horizon": "SHORT",
      "status": "NOT STARTED",
      "currentAction": "",
      "decisionNeeded": "",
      "notes": "Next Step: Understanding what are current offerings - incorporated into the scorecard",
      "link1": "NPP for super contribution refunds - Move to NPP (MTN) Program Squad - Confluence",
      "link2": "",
      "strategicPriorityId": "SP01",
      "objectiveId": "OBJ01",
      "scorecardId": "KR01",
      "lastUpdated": "2026-06-22",
      "execSummaryTag": "Yes",
      "strategicObjective": "",
      "scorecardItem": "",
      "readinessStatus": "",
      "readinessRationale": "",
      "decisionOwner": "",
      "decisionDueDate": "",
      "dependencyOwnerType": "",
      "impactDriver": "",
      "roadmapAlignment": "",
      "externalMessagingStatus": "",
      "reviewDate": "",
      "isExecSummary": true,
      "useCases": [
        "All",
        "Super",
        "Payroll",
        "Government",
        "Business Payments"
      ],
      "useCase": "All; Super; Payroll; Government; Business Payments",
      "categories": [
        "Exceptions, Returns & Error Handling"
      ],
      "products": [
        "Other"
      ],
      "product": "Other",
      "journeyStages": [
        "Investigation and returns (unhappy path)"
      ],
      "strategicPriority": {
        "id": "SP01",
        "title": "Continue the Move to NPP and deliver economic transformation opportunities"
      },
      "objective": {
        "id": "OBJ01",
        "title": "Critically Important",
        "description": "Our infrastructure underpins economically significant flows in Australia"
      },
      "scorecard": {
        "id": "KR01",
        "keyResult": "Support Australia’s vision for a digital economy with NPP",
        "threshold": "Super enabled: all funds accepting NPP; PRN passed through",
        "target": "Threshold plus 4+ clearing houses using NPP",
        "maximum": "Target plus 200k PayTo Super transactions"
      },
      "useCaseRefs": [
        {
          "name": "All",
          "description": "Cross-cutting initiatives, capabilities or issues that apply across multiple strategic use cases rather than a single business scenario.",
          "desiredOutcome": "",
          "status": "Amber"
        },
        {
          "name": "Super",
          "description": "Enable the superannuation ecosystem to adopt NPP and related capabilities, supporting Payday Super legislation, improved payment processing, reconciliation, and industry readiness.",
          "desiredOutcome": "Employers, clearing houses and super funds can process super contributions using NPP with end-to-end reconciliation.",
          "status": "Amber"
        },
        {
          "name": "Payroll",
          "description": "Enable payroll providers, employers and financial institutions to process payroll payments using modern payment capabilities that improve speed, efficiency and customer experience.",
          "desiredOutcome": "Payroll payments are processed using modern payment capabilities with improved speed and reliability.",
          "status": "Discovery"
        },
        {
          "name": "Government",
          "description": "Enable government agencies to send and receive payments using modern payment capabilities, improving service delivery, speed, reconciliation and citizen experience.",
          "desiredOutcome": "Government payment services deliver faster, more transparent payment experiences.",
          "status": "Discovery"
        },
        {
          "name": "Business Payments",
          "description": "Enable businesses to adopt modern payment capabilities across domestic payment scenarios, improving operational efficiency, automation, reconciliation and customer experience.",
          "desiredOutcome": "",
          "status": "Discovery"
        }
      ],
      "capabilityRefs": [
        {
          "name": "Other",
          "owner": "Bianca",
          "description": ""
        }
      ]
    },
    {
      "id": "ID-11",
      "useCasesImpacted": "Super",
      "category": "Ecosystem Readiness & External Constraints",
      "journeyStage": "Payment processing",
      "title": "Increase super transaction volumes including refunds",
      "problemScenario": "There will be changes in how super payments are being processed due to: - Increase frequency of super payments in-line with payroll - Changes to how clearing houses are processing e.g. Sending contributions by employer for each super fund, rather than aggregating employer payments together. This will result in an Increase in transaction volumes for super contributions to occur due to a number of reason: Additionally there is an expectation that the number of refunds will increase initially as the industry transitions into new processes. There is a need for Participants need to ensure that they are able to support automated processing as a result of the increase volumes.",
      "issueType": "PE",
      "dependencies": "",
      "relatedInitiative": "",
      "productsImpacted": "Other",
      "owner": "Bianca",
      "priority": "HIGH",
      "horizon": "SHORT",
      "status": "WIP",
      "currentAction": "",
      "decisionNeeded": "",
      "notes": "Next Step: Education of the ecosystem (Base deck/FAQs)",
      "link1": "To be created",
      "link2": "",
      "strategicPriorityId": "SP01",
      "objectiveId": "OBJ01",
      "scorecardId": "KR01",
      "lastUpdated": "2026-04-01",
      "execSummaryTag": "Yes",
      "strategicObjective": "",
      "scorecardItem": "",
      "readinessStatus": "",
      "readinessRationale": "",
      "decisionOwner": "",
      "decisionDueDate": "",
      "dependencyOwnerType": "",
      "impactDriver": "",
      "roadmapAlignment": "",
      "externalMessagingStatus": "",
      "reviewDate": "",
      "isExecSummary": true,
      "useCases": [
        "Super"
      ],
      "useCase": "Super",
      "categories": [
        "Ecosystem Readiness & External Constraints"
      ],
      "products": [
        "Other"
      ],
      "product": "Other",
      "journeyStages": [
        "Payment processing"
      ],
      "strategicPriority": {
        "id": "SP01",
        "title": "Continue the Move to NPP and deliver economic transformation opportunities"
      },
      "objective": {
        "id": "OBJ01",
        "title": "Critically Important",
        "description": "Our infrastructure underpins economically significant flows in Australia"
      },
      "scorecard": {
        "id": "KR01",
        "keyResult": "Support Australia’s vision for a digital economy with NPP",
        "threshold": "Super enabled: all funds accepting NPP; PRN passed through",
        "target": "Threshold plus 4+ clearing houses using NPP",
        "maximum": "Target plus 200k PayTo Super transactions"
      },
      "useCaseRefs": [
        {
          "name": "Super",
          "description": "Enable the superannuation ecosystem to adopt NPP and related capabilities, supporting Payday Super legislation, improved payment processing, reconciliation, and industry readiness.",
          "desiredOutcome": "Employers, clearing houses and super funds can process super contributions using NPP with end-to-end reconciliation.",
          "status": "Amber"
        }
      ],
      "capabilityRefs": [
        {
          "name": "Other",
          "owner": "Bianca",
          "description": ""
        }
      ]
    },
    {
      "id": "ID-12",
      "useCasesImpacted": "Super",
      "category": "Ecosystem Readiness & External Constraints",
      "journeyStage": "Receiving, validating, reconciling, and reporting",
      "title": "Readiness of Clearing Houses to accept and send NPP payments",
      "problemScenario": "Currently The role of the clearing house is to take funds from the employer and re-distribute the payments to the super funds in accordance to the details provided by the employer. There is a need for these enablers to adopt NPP for volumes to increase as they need to both receieve and send NPP payments",
      "issueType": "Dependency",
      "dependencies": "Clearing Houses, Participants",
      "relatedInitiative": "",
      "productsImpacted": "Other",
      "owner": "Bianca",
      "priority": "HIGH",
      "horizon": "MEDIUM",
      "status": "WIP",
      "currentAction": "Clearing house assessment against receive and send NPP payments",
      "decisionNeeded": "",
      "notes": "Enablement: Tracking of CH readiness. Pilots are underway",
      "link1": "To be created",
      "link2": "PRN reporting and Enablers analysis and tracking.xlsx",
      "strategicPriorityId": "SP01",
      "objectiveId": "OBJ01",
      "scorecardId": "KR01",
      "lastUpdated": "2026-04-01",
      "execSummaryTag": "Yes",
      "strategicObjective": "",
      "scorecardItem": "",
      "readinessStatus": "",
      "readinessRationale": "",
      "decisionOwner": "",
      "decisionDueDate": "",
      "dependencyOwnerType": "",
      "impactDriver": "",
      "roadmapAlignment": "",
      "externalMessagingStatus": "",
      "reviewDate": "",
      "isExecSummary": true,
      "useCases": [
        "Super"
      ],
      "useCase": "Super",
      "categories": [
        "Ecosystem Readiness & External Constraints"
      ],
      "products": [
        "Other"
      ],
      "product": "Other",
      "journeyStages": [
        "Receiving, validating, reconciling, and reporting"
      ],
      "strategicPriority": {
        "id": "SP01",
        "title": "Continue the Move to NPP and deliver economic transformation opportunities"
      },
      "objective": {
        "id": "OBJ01",
        "title": "Critically Important",
        "description": "Our infrastructure underpins economically significant flows in Australia"
      },
      "scorecard": {
        "id": "KR01",
        "keyResult": "Support Australia’s vision for a digital economy with NPP",
        "threshold": "Super enabled: all funds accepting NPP; PRN passed through",
        "target": "Threshold plus 4+ clearing houses using NPP",
        "maximum": "Target plus 200k PayTo Super transactions"
      },
      "useCaseRefs": [
        {
          "name": "Super",
          "description": "Enable the superannuation ecosystem to adopt NPP and related capabilities, supporting Payday Super legislation, improved payment processing, reconciliation, and industry readiness.",
          "desiredOutcome": "Employers, clearing houses and super funds can process super contributions using NPP with end-to-end reconciliation.",
          "status": "Amber"
        }
      ],
      "capabilityRefs": [
        {
          "name": "Other",
          "owner": "Bianca",
          "description": ""
        }
      ]
    },
    {
      "id": "ID-13",
      "useCasesImpacted": "All",
      "category": "Ecosystem Readiness & External Constraints",
      "journeyStage": "Payment processing",
      "title": "Variability in bank offerings",
      "problemScenario": "Currently banks offer different product capabilities, rules and behaviours that are outside of AP+ visibility and control. These differences result in operational complexity and fragmented user journeys. This results in inconsistencies in how payments are processed and experienced by customers. There is a need to align on minimum standards and expected behaviours across banks to provide a more consistent and predictable experience.",
      "issueType": "Gap",
      "dependencies": "Participants, A2A vision",
      "relatedInitiative": "",
      "productsImpacted": "Other",
      "owner": "Bianca",
      "priority": "MEDIUM",
      "horizon": "MEDIUM",
      "status": "NOT STARTED",
      "currentAction": "",
      "decisionNeeded": "",
      "notes": "Next Steps: Understanding some of the product differences when understanding the use cases",
      "link1": "",
      "link2": "",
      "strategicPriorityId": "",
      "objectiveId": "OBJ01",
      "scorecardId": "KR01",
      "lastUpdated": "2026-04-01",
      "execSummaryTag": "Yes",
      "strategicObjective": "",
      "scorecardItem": "",
      "readinessStatus": "",
      "readinessRationale": "",
      "decisionOwner": "",
      "decisionDueDate": "",
      "dependencyOwnerType": "",
      "impactDriver": "",
      "roadmapAlignment": "",
      "externalMessagingStatus": "",
      "reviewDate": "",
      "isExecSummary": true,
      "useCases": [
        "All"
      ],
      "useCase": "All",
      "categories": [
        "Ecosystem Readiness & External Constraints"
      ],
      "products": [
        "Other"
      ],
      "product": "Other",
      "journeyStages": [
        "Payment processing"
      ],
      "strategicPriority": {},
      "objective": {
        "id": "OBJ01",
        "title": "Critically Important",
        "description": "Our infrastructure underpins economically significant flows in Australia"
      },
      "scorecard": {
        "id": "KR01",
        "keyResult": "Support Australia’s vision for a digital economy with NPP",
        "threshold": "Super enabled: all funds accepting NPP; PRN passed through",
        "target": "Threshold plus 4+ clearing houses using NPP",
        "maximum": "Target plus 200k PayTo Super transactions"
      },
      "useCaseRefs": [
        {
          "name": "All",
          "description": "Cross-cutting initiatives, capabilities or issues that apply across multiple strategic use cases rather than a single business scenario.",
          "desiredOutcome": "",
          "status": "Amber"
        }
      ],
      "capabilityRefs": [
        {
          "name": "Other",
          "owner": "Bianca",
          "description": ""
        }
      ]
    },
    {
      "id": "ID-14",
      "useCasesImpacted": "All",
      "category": "Reconciliation, Reporting & Traceability",
      "journeyStage": "Receiving, validating, reconciling, and reporting",
      "title": "NPP data elements within business reporting",
      "problemScenario": "Currently business reporting/account statements have been based on BSB/Account number. Those reporting hasn't been enhanced to support NPP including PayID. This applies to both EOD and intraday reporting across all Participants. Additionally, DSPs need to have the ability to reconcile a PayID within their systems. As a result, it makes it more difficult for businesses to reconcile as it is a key piece of data. There is a need to include elements like PayID, PayTo data elements",
      "issueType": "Opportunity",
      "dependencies": "Participants",
      "relatedInitiative": "",
      "productsImpacted": "Reporting",
      "owner": "Bianca",
      "priority": "HIGH",
      "horizon": "MEDIUM",
      "status": "WIP",
      "currentAction": "Assessing account statement report",
      "decisionNeeded": "",
      "notes": "Enablement: Is doing analysis of what reporting is available for PayID and PayTo Next steps: Discussions with Participants",
      "link1": "PayID Reconciliation on bank statements - Move to NPP (MTN) Program Squad - Confluence",
      "link2": "",
      "strategicPriorityId": "",
      "objectiveId": "OBJ01",
      "scorecardId": "KR01",
      "lastUpdated": "2026-06-22",
      "execSummaryTag": "Yes",
      "strategicObjective": "",
      "scorecardItem": "",
      "readinessStatus": "",
      "readinessRationale": "",
      "decisionOwner": "",
      "decisionDueDate": "",
      "dependencyOwnerType": "",
      "impactDriver": "",
      "roadmapAlignment": "",
      "externalMessagingStatus": "",
      "reviewDate": "",
      "isExecSummary": true,
      "useCases": [
        "All"
      ],
      "useCase": "All",
      "categories": [
        "Reconciliation, Reporting & Traceability"
      ],
      "products": [
        "Reporting"
      ],
      "product": "Reporting",
      "journeyStages": [
        "Receiving, validating, reconciling, and reporting"
      ],
      "strategicPriority": {},
      "objective": {
        "id": "OBJ01",
        "title": "Critically Important",
        "description": "Our infrastructure underpins economically significant flows in Australia"
      },
      "scorecard": {
        "id": "KR01",
        "keyResult": "Support Australia’s vision for a digital economy with NPP",
        "threshold": "Super enabled: all funds accepting NPP; PRN passed through",
        "target": "Threshold plus 4+ clearing houses using NPP",
        "maximum": "Target plus 200k PayTo Super transactions"
      },
      "useCaseRefs": [
        {
          "name": "All",
          "description": "Cross-cutting initiatives, capabilities or issues that apply across multiple strategic use cases rather than a single business scenario.",
          "desiredOutcome": "",
          "status": "Amber"
        }
      ],
      "capabilityRefs": [
        {
          "name": "Reporting",
          "owner": "Bianca",
          "description": "Reporting and reconciliation"
        }
      ]
    },
    {
      "id": "ID-15",
      "useCasesImpacted": "All",
      "category": "Payment instruction and Operation",
      "journeyStage": "Preparation and data creation",
      "title": "PayID not available in the payment instruction",
      "problemScenario": "Currently Some Participants are offering an ABA translation service as a bulk NPP solution which means businesses can continue to use their existing file formats but still process on NPP. As a result, businesses wouldn't be able to pay to a PayID which can impact the rollout of PayID receivables. There is a need for a longer term strategy for the adoption of a NPP payment instruction for Participants and end users",
      "issueType": "Risk",
      "dependencies": "Participants",
      "relatedInitiative": "",
      "productsImpacted": "PayID",
      "owner": "Ronita",
      "priority": "HIGH",
      "horizon": "MEDIUM",
      "status": "WIP",
      "currentAction": "Piloting PayID field for payment instruction.",
      "decisionNeeded": "Decisions pending.",
      "notes": "Enablement: Is doing analysis of what reporting is available for PayID and PayTo",
      "link1": "PayID - Payment Instruction - Move to NPP (MTN) Program Squad - Confluence",
      "link2": "",
      "strategicPriorityId": "SP01",
      "objectiveId": "OBJ01",
      "scorecardId": "KR01",
      "lastUpdated": "2026-06-22",
      "execSummaryTag": "Yes",
      "strategicObjective": "",
      "scorecardItem": "",
      "readinessStatus": "",
      "readinessRationale": "",
      "decisionOwner": "",
      "decisionDueDate": "",
      "dependencyOwnerType": "",
      "impactDriver": "",
      "roadmapAlignment": "",
      "externalMessagingStatus": "",
      "reviewDate": "",
      "isExecSummary": true,
      "useCases": [
        "All"
      ],
      "useCase": "All",
      "categories": [
        "Payment instruction and Operation"
      ],
      "products": [
        "PayID"
      ],
      "product": "PayID",
      "journeyStages": [
        "Preparation and data creation"
      ],
      "strategicPriority": {
        "id": "SP01",
        "title": "Continue the Move to NPP and deliver economic transformation opportunities"
      },
      "objective": {
        "id": "OBJ01",
        "title": "Critically Important",
        "description": "Our infrastructure underpins economically significant flows in Australia"
      },
      "scorecard": {
        "id": "KR01",
        "keyResult": "Support Australia’s vision for a digital economy with NPP",
        "threshold": "Super enabled: all funds accepting NPP; PRN passed through",
        "target": "Threshold plus 4+ clearing houses using NPP",
        "maximum": "Target plus 200k PayTo Super transactions"
      },
      "useCaseRefs": [
        {
          "name": "All",
          "description": "Cross-cutting initiatives, capabilities or issues that apply across multiple strategic use cases rather than a single business scenario.",
          "desiredOutcome": "",
          "status": "Amber"
        }
      ],
      "capabilityRefs": [
        {
          "name": "PayID",
          "owner": "Ronita",
          "description": "Addressing capability"
        }
      ]
    },
    {
      "id": "ID-16",
      "useCasesImpacted": "All",
      "category": "Payment instruction and Operation",
      "journeyStage": "Set up & Account, onboarding",
      "title": "DSP adoption of PayID",
      "problemScenario": "In order for a business to pay to a PayID, their DSP must support the ability to. This includes the ability to store a PayID instead of a BSB/Account and then be able to generate a payment instruction to send to the bank. As a result, if it's not offered out of the box, businesses may need to customised their version which adds to the costs of implementation and maintenance There is a need for DSPs to adopt PayID as an alternative to BSB/Account number",
      "issueType": "Product Idea",
      "dependencies": "Participants, DSPs",
      "relatedInitiative": "",
      "productsImpacted": "PayID",
      "owner": "Bianca",
      "priority": "HIGH",
      "horizon": "MEDIUM",
      "status": "WIP",
      "currentAction": "Assessing DSP feasibility",
      "decisionNeeded": "Decisions pending.",
      "notes": "Enablement: Working with DSPANZ, SAP, Xero on their implementation. Trying to get traction with Oracle Payroll providers will be targetted next",
      "link1": "Minimal coverage from the banks to pay to a PayID outside of an IB channel - Move to NPP (MTN) Program Squad - Confluence",
      "link2": "",
      "strategicPriorityId": "",
      "objectiveId": "OBJ01",
      "scorecardId": "KR01",
      "lastUpdated": "2026-06-22",
      "execSummaryTag": "Yes",
      "strategicObjective": "",
      "scorecardItem": "",
      "readinessStatus": "",
      "readinessRationale": "",
      "decisionOwner": "",
      "decisionDueDate": "",
      "dependencyOwnerType": "",
      "impactDriver": "",
      "roadmapAlignment": "",
      "externalMessagingStatus": "",
      "reviewDate": "",
      "isExecSummary": true,
      "useCases": [
        "All"
      ],
      "useCase": "All",
      "categories": [
        "Payment instruction and Operation"
      ],
      "products": [
        "PayID"
      ],
      "product": "PayID",
      "journeyStages": [
        "Set up & Account, onboarding"
      ],
      "strategicPriority": {},
      "objective": {
        "id": "OBJ01",
        "title": "Critically Important",
        "description": "Our infrastructure underpins economically significant flows in Australia"
      },
      "scorecard": {
        "id": "KR01",
        "keyResult": "Support Australia’s vision for a digital economy with NPP",
        "threshold": "Super enabled: all funds accepting NPP; PRN passed through",
        "target": "Threshold plus 4+ clearing houses using NPP",
        "maximum": "Target plus 200k PayTo Super transactions"
      },
      "useCaseRefs": [
        {
          "name": "All",
          "description": "Cross-cutting initiatives, capabilities or issues that apply across multiple strategic use cases rather than a single business scenario.",
          "desiredOutcome": "",
          "status": "Amber"
        }
      ],
      "capabilityRefs": [
        {
          "name": "PayID",
          "owner": "Ronita",
          "description": "Addressing capability"
        }
      ]
    },
    {
      "id": "ID-17",
      "useCasesImpacted": "Super",
      "category": "Addressing Model (PayID & Account Structure)",
      "journeyStage": "Set up & Account, onboarding",
      "title": "Risks of business customers making payments to a PayID in online banking channels.",
      "problemScenario": "Currently If the DSP that a business is using doesn't support the ability to sore and pay to a PayID, businesses may make the payment through their online banking channel. As a result, there are additional audit risks the business will take on as well as implementing process changes (e.g. authorisation processes) The business may also encounter channel limits as payments made through online banking channels often have lower limits. There is a need to understand the implications of this and to create awareness",
      "issueType": "PE",
      "dependencies": "",
      "relatedInitiative": "",
      "productsImpacted": "PayID",
      "owner": "Bianca",
      "priority": "HIGH",
      "horizon": "SHORT",
      "status": "NOT STARTED",
      "currentAction": "",
      "decisionNeeded": "",
      "notes": "Enablement: Working with DSPs to include PayID and understand existing reporting for reconciliation Next Steps: Education of employers and understanding the impacts (FAQs)",
      "link1": "",
      "link2": "",
      "strategicPriorityId": "",
      "objectiveId": "OBJ01",
      "scorecardId": "KR01",
      "lastUpdated": "2026-06-22",
      "execSummaryTag": "Yes",
      "strategicObjective": "",
      "scorecardItem": "",
      "readinessStatus": "",
      "readinessRationale": "",
      "decisionOwner": "",
      "decisionDueDate": "",
      "dependencyOwnerType": "",
      "impactDriver": "",
      "roadmapAlignment": "",
      "externalMessagingStatus": "",
      "reviewDate": "",
      "isExecSummary": true,
      "useCases": [
        "Super"
      ],
      "useCase": "Super",
      "categories": [
        "Addressing Model (PayID & Account Structure)"
      ],
      "products": [
        "PayID"
      ],
      "product": "PayID",
      "journeyStages": [
        "Set up & Account, onboarding"
      ],
      "strategicPriority": {},
      "objective": {
        "id": "OBJ01",
        "title": "Critically Important",
        "description": "Our infrastructure underpins economically significant flows in Australia"
      },
      "scorecard": {
        "id": "KR01",
        "keyResult": "Support Australia’s vision for a digital economy with NPP",
        "threshold": "Super enabled: all funds accepting NPP; PRN passed through",
        "target": "Threshold plus 4+ clearing houses using NPP",
        "maximum": "Target plus 200k PayTo Super transactions"
      },
      "useCaseRefs": [
        {
          "name": "Super",
          "description": "Enable the superannuation ecosystem to adopt NPP and related capabilities, supporting Payday Super legislation, improved payment processing, reconciliation, and industry readiness.",
          "desiredOutcome": "Employers, clearing houses and super funds can process super contributions using NPP with end-to-end reconciliation.",
          "status": "Amber"
        }
      ],
      "capabilityRefs": [
        {
          "name": "PayID",
          "owner": "Ronita",
          "description": "Addressing capability"
        }
      ]
    },
    {
      "id": "ID-18",
      "useCasesImpacted": "All",
      "category": "Ecosystem Readiness & External Constraints",
      "journeyStage": "Set up & Account, onboarding",
      "title": "Lack of understanding the process of registration of ABN PayIDs",
      "problemScenario": "The registration and management of ABN PayIDs by Participants is not clearly understood. This can result in potential vulnerabilities if the registration process is not in-line with the verification service or if there are potential for the registration to be exploited for fraud. There is a need to better understand the registration process that is currently being undertaken by the Participants.",
      "issueType": "Dependency",
      "dependencies": "",
      "relatedInitiative": "",
      "productsImpacted": "PayID",
      "owner": "Ronita",
      "priority": "MEDIUM",
      "horizon": "SHORT",
      "status": "NOT STARTED",
      "currentAction": "",
      "decisionNeeded": "",
      "notes": "",
      "link1": "",
      "link2": "",
      "strategicPriorityId": "SP01",
      "objectiveId": "OBJ01",
      "scorecardId": "KR01",
      "lastUpdated": "",
      "execSummaryTag": "Yes",
      "strategicObjective": "",
      "scorecardItem": "",
      "readinessStatus": "",
      "readinessRationale": "",
      "decisionOwner": "",
      "decisionDueDate": "",
      "dependencyOwnerType": "",
      "impactDriver": "",
      "roadmapAlignment": "",
      "externalMessagingStatus": "",
      "reviewDate": "",
      "isExecSummary": true,
      "useCases": [
        "All"
      ],
      "useCase": "All",
      "categories": [
        "Ecosystem Readiness & External Constraints"
      ],
      "products": [
        "PayID"
      ],
      "product": "PayID",
      "journeyStages": [
        "Set up & Account, onboarding"
      ],
      "strategicPriority": {
        "id": "SP01",
        "title": "Continue the Move to NPP and deliver economic transformation opportunities"
      },
      "objective": {
        "id": "OBJ01",
        "title": "Critically Important",
        "description": "Our infrastructure underpins economically significant flows in Australia"
      },
      "scorecard": {
        "id": "KR01",
        "keyResult": "Support Australia’s vision for a digital economy with NPP",
        "threshold": "Super enabled: all funds accepting NPP; PRN passed through",
        "target": "Threshold plus 4+ clearing houses using NPP",
        "maximum": "Target plus 200k PayTo Super transactions"
      },
      "useCaseRefs": [
        {
          "name": "All",
          "description": "Cross-cutting initiatives, capabilities or issues that apply across multiple strategic use cases rather than a single business scenario.",
          "desiredOutcome": "",
          "status": "Amber"
        }
      ],
      "capabilityRefs": [
        {
          "name": "PayID",
          "owner": "Ronita",
          "description": "Addressing capability"
        }
      ]
    },
    {
      "id": "ID-19",
      "useCasesImpacted": "All",
      "category": "Ecosystem Readiness & External Constraints",
      "journeyStage": "Set up & Account, onboarding",
      "title": "Understanding the PayID limits that have been implemented by banks",
      "problemScenario": "Currently if the DSP that a business is using doesn't support the ability to sore and pay to a PayID, businesses may make the payment through their online banking channel. When doing so, they may hit channel limits which are typically lower in online banking channels. This results in potentially businesses may need to make multiple payments. There is a need to understand what limitations may apply",
      "issueType": "Gap",
      "dependencies": "",
      "relatedInitiative": "",
      "productsImpacted": "PayID",
      "owner": "Ronita",
      "priority": "HIGH",
      "horizon": "SHORT",
      "status": "WIP",
      "currentAction": "",
      "decisionNeeded": "",
      "notes": "Creating the Capability Matrix and collecting the information",
      "link1": "Payments via PayID Limits - Move to NPP (MTN) Program Squad - Confluence",
      "link2": "Member Capability Matrix _PayID only.xlsx",
      "strategicPriorityId": "",
      "objectiveId": "OBJ01",
      "scorecardId": "KR01",
      "lastUpdated": "2026-06-22",
      "execSummaryTag": "Yes",
      "strategicObjective": "",
      "scorecardItem": "",
      "readinessStatus": "",
      "readinessRationale": "",
      "decisionOwner": "",
      "decisionDueDate": "",
      "dependencyOwnerType": "",
      "impactDriver": "",
      "roadmapAlignment": "",
      "externalMessagingStatus": "",
      "reviewDate": "",
      "isExecSummary": true,
      "useCases": [
        "All"
      ],
      "useCase": "All",
      "categories": [
        "Ecosystem Readiness & External Constraints"
      ],
      "products": [
        "PayID"
      ],
      "product": "PayID",
      "journeyStages": [
        "Set up & Account, onboarding"
      ],
      "strategicPriority": {},
      "objective": {
        "id": "OBJ01",
        "title": "Critically Important",
        "description": "Our infrastructure underpins economically significant flows in Australia"
      },
      "scorecard": {
        "id": "KR01",
        "keyResult": "Support Australia’s vision for a digital economy with NPP",
        "threshold": "Super enabled: all funds accepting NPP; PRN passed through",
        "target": "Threshold plus 4+ clearing houses using NPP",
        "maximum": "Target plus 200k PayTo Super transactions"
      },
      "useCaseRefs": [
        {
          "name": "All",
          "description": "Cross-cutting initiatives, capabilities or issues that apply across multiple strategic use cases rather than a single business scenario.",
          "desiredOutcome": "",
          "status": "Amber"
        }
      ],
      "capabilityRefs": [
        {
          "name": "PayID",
          "owner": "Ronita",
          "description": "Addressing capability"
        }
      ]
    },
    {
      "id": "ID-20",
      "useCasesImpacted": "All",
      "category": "Addressing Model (PayID & Account Structure)",
      "journeyStage": "Payment processing",
      "title": "Bulk PayID Resolution",
      "problemScenario": "As Participants offering bulk payment instructions and as the usage of PayID increases, there will be a need to resolve the PayIDs as part of payment processing. This results in multiple PayID resolution calls to the addressing to process all the payments within that instruction. There is a need to resolve PayID in bulk in order to sufficiently process all the payments in a timely manner.",
      "issueType": "Opportunity",
      "dependencies": "",
      "relatedInitiative": "",
      "productsImpacted": "PayID",
      "owner": "Ronita",
      "priority": "MEDIUM",
      "horizon": "LONG",
      "status": "HOLD / BLOCKED",
      "currentAction": "",
      "decisionNeeded": "",
      "notes": "PE raised: i.110",
      "link1": "",
      "link2": "",
      "strategicPriorityId": "",
      "objectiveId": "OBJ01",
      "scorecardId": "KR01",
      "lastUpdated": "2026-04-01",
      "execSummaryTag": "Yes",
      "strategicObjective": "",
      "scorecardItem": "",
      "readinessStatus": "",
      "readinessRationale": "",
      "decisionOwner": "",
      "decisionDueDate": "",
      "dependencyOwnerType": "",
      "impactDriver": "",
      "roadmapAlignment": "",
      "externalMessagingStatus": "",
      "reviewDate": "",
      "isExecSummary": true,
      "useCases": [
        "All"
      ],
      "useCase": "All",
      "categories": [
        "Addressing Model (PayID & Account Structure)"
      ],
      "products": [
        "PayID"
      ],
      "product": "PayID",
      "journeyStages": [
        "Payment processing"
      ],
      "strategicPriority": {},
      "objective": {
        "id": "OBJ01",
        "title": "Critically Important",
        "description": "Our infrastructure underpins economically significant flows in Australia"
      },
      "scorecard": {
        "id": "KR01",
        "keyResult": "Support Australia’s vision for a digital economy with NPP",
        "threshold": "Super enabled: all funds accepting NPP; PRN passed through",
        "target": "Threshold plus 4+ clearing houses using NPP",
        "maximum": "Target plus 200k PayTo Super transactions"
      },
      "useCaseRefs": [
        {
          "name": "All",
          "description": "Cross-cutting initiatives, capabilities or issues that apply across multiple strategic use cases rather than a single business scenario.",
          "desiredOutcome": "",
          "status": "Amber"
        }
      ],
      "capabilityRefs": [
        {
          "name": "PayID",
          "owner": "Ronita",
          "description": "Addressing capability"
        }
      ]
    },
    {
      "id": "ID-21",
      "useCasesImpacted": "Super",
      "category": "Addressing Model (PayID & Account Structure)",
      "journeyStage": "Receiving, validating, reconciling, and reporting",
      "title": "Lack of defined governance for PayID Receivables",
      "problemScenario": "Currently PayID receivables are a common solution offered by Participants however AP+ currently only enables rather than defines the usage. Given the growth and investment Participants have been made results in inconsistent implementation which impacts the overall customer experience. There is a need to consider whether AP+ wants to play a role and amend the rules to accomodate.",
      "issueType": "Risk",
      "dependencies": "",
      "relatedInitiative": "",
      "productsImpacted": "PayID",
      "owner": "Ronita",
      "priority": "MEDIUM",
      "horizon": "LONG",
      "status": "WIP",
      "currentAction": "",
      "decisionNeeded": "Decisions pending.",
      "notes": "PE raised: i.150 and is currently in progress Internal discussions and analysis in progress",
      "link1": "",
      "link2": "",
      "strategicPriorityId": "",
      "objectiveId": "OBJ01",
      "scorecardId": "KR01",
      "lastUpdated": "2026-06-22",
      "execSummaryTag": "Yes",
      "strategicObjective": "",
      "scorecardItem": "",
      "readinessStatus": "",
      "readinessRationale": "",
      "decisionOwner": "",
      "decisionDueDate": "",
      "dependencyOwnerType": "",
      "impactDriver": "",
      "roadmapAlignment": "",
      "externalMessagingStatus": "",
      "reviewDate": "",
      "isExecSummary": true,
      "useCases": [
        "Super"
      ],
      "useCase": "Super",
      "categories": [
        "Addressing Model (PayID & Account Structure)"
      ],
      "products": [
        "PayID"
      ],
      "product": "PayID",
      "journeyStages": [
        "Receiving, validating, reconciling, and reporting"
      ],
      "strategicPriority": {},
      "objective": {
        "id": "OBJ01",
        "title": "Critically Important",
        "description": "Our infrastructure underpins economically significant flows in Australia"
      },
      "scorecard": {
        "id": "KR01",
        "keyResult": "Support Australia’s vision for a digital economy with NPP",
        "threshold": "Super enabled: all funds accepting NPP; PRN passed through",
        "target": "Threshold plus 4+ clearing houses using NPP",
        "maximum": "Target plus 200k PayTo Super transactions"
      },
      "useCaseRefs": [
        {
          "name": "Super",
          "description": "Enable the superannuation ecosystem to adopt NPP and related capabilities, supporting Payday Super legislation, improved payment processing, reconciliation, and industry readiness.",
          "desiredOutcome": "Employers, clearing houses and super funds can process super contributions using NPP with end-to-end reconciliation.",
          "status": "Amber"
        }
      ],
      "capabilityRefs": [
        {
          "name": "PayID",
          "owner": "Ronita",
          "description": "Addressing capability"
        }
      ]
    },
    {
      "id": "ID-23",
      "useCasesImpacted": "All",
      "category": "Ecosystem Readiness & External Constraints",
      "journeyStage": "Set up & Account, onboarding",
      "title": "Not all members support all types of PayID",
      "problemScenario": "In the current ecosystem, PayID is not a mandatory capability and is not consistently supported across participants, including differences in supported PayID types. This results in a fragmented experience and limits the scalability of PayID-based solutions. There is a need to define a clear strategic direction for PayID adoption, including whether it should be mandated or incentivised.",
      "issueType": "PE",
      "dependencies": "",
      "relatedInitiative": "",
      "productsImpacted": "PayID",
      "owner": "Ronita",
      "priority": "MEDIUM",
      "horizon": "MEDIUM",
      "status": "WIP",
      "currentAction": "",
      "decisionNeeded": "Decisions pending.",
      "notes": "Creating the Capability Matrix and collecting the information",
      "link1": "",
      "link2": "Member Capability Matrix _PayID only.xlsx",
      "strategicPriorityId": "",
      "objectiveId": "OBJ01",
      "scorecardId": "KR01",
      "lastUpdated": "2026-06-22",
      "execSummaryTag": "Yes",
      "strategicObjective": "",
      "scorecardItem": "",
      "readinessStatus": "",
      "readinessRationale": "",
      "decisionOwner": "",
      "decisionDueDate": "",
      "dependencyOwnerType": "",
      "impactDriver": "",
      "roadmapAlignment": "",
      "externalMessagingStatus": "",
      "reviewDate": "",
      "isExecSummary": true,
      "useCases": [
        "All"
      ],
      "useCase": "All",
      "categories": [
        "Ecosystem Readiness & External Constraints"
      ],
      "products": [
        "PayID"
      ],
      "product": "PayID",
      "journeyStages": [
        "Set up & Account, onboarding"
      ],
      "strategicPriority": {},
      "objective": {
        "id": "OBJ01",
        "title": "Critically Important",
        "description": "Our infrastructure underpins economically significant flows in Australia"
      },
      "scorecard": {
        "id": "KR01",
        "keyResult": "Support Australia’s vision for a digital economy with NPP",
        "threshold": "Super enabled: all funds accepting NPP; PRN passed through",
        "target": "Threshold plus 4+ clearing houses using NPP",
        "maximum": "Target plus 200k PayTo Super transactions"
      },
      "useCaseRefs": [
        {
          "name": "All",
          "description": "Cross-cutting initiatives, capabilities or issues that apply across multiple strategic use cases rather than a single business scenario.",
          "desiredOutcome": "",
          "status": "Amber"
        }
      ],
      "capabilityRefs": [
        {
          "name": "PayID",
          "owner": "Ronita",
          "description": "Addressing capability"
        }
      ]
    },
    {
      "id": "ID-24",
      "useCasesImpacted": "All",
      "category": "Ecosystem Readiness & External Constraints",
      "journeyStage": "Set up & Account, onboarding",
      "title": "PayID is NOT a mandatory product to be implemented",
      "problemScenario": "In the current ecosystem, PayID is not a mandatory capability and is not consistently supported across participants, including differences in supported PayID types. This means that if Payees are offering a PayID receivables solution must also provide an alternative to support any customers who's Participant doesn't support the ability to send to a PayID There is a need to define a clear strategic direction for PayID adoption, including whether it should be mandated or incentivised.",
      "issueType": "Dependency",
      "dependencies": "",
      "relatedInitiative": "",
      "productsImpacted": "PayID",
      "owner": "Ronita",
      "priority": "MEDIUM",
      "horizon": "LONG",
      "status": "NOT STARTED",
      "currentAction": "",
      "decisionNeeded": "",
      "notes": "",
      "link1": "Payments to PayID availability - Move to NPP (MTN) Program Squad - Confluence",
      "link2": "",
      "strategicPriorityId": "",
      "objectiveId": "OBJ01",
      "scorecardId": "KR01",
      "lastUpdated": "2026-06-22",
      "execSummaryTag": "Yes",
      "strategicObjective": "",
      "scorecardItem": "",
      "readinessStatus": "",
      "readinessRationale": "",
      "decisionOwner": "",
      "decisionDueDate": "",
      "dependencyOwnerType": "",
      "impactDriver": "",
      "roadmapAlignment": "",
      "externalMessagingStatus": "",
      "reviewDate": "",
      "isExecSummary": true,
      "useCases": [
        "All"
      ],
      "useCase": "All",
      "categories": [
        "Ecosystem Readiness & External Constraints"
      ],
      "products": [
        "PayID"
      ],
      "product": "PayID",
      "journeyStages": [
        "Set up & Account, onboarding"
      ],
      "strategicPriority": {},
      "objective": {
        "id": "OBJ01",
        "title": "Critically Important",
        "description": "Our infrastructure underpins economically significant flows in Australia"
      },
      "scorecard": {
        "id": "KR01",
        "keyResult": "Support Australia’s vision for a digital economy with NPP",
        "threshold": "Super enabled: all funds accepting NPP; PRN passed through",
        "target": "Threshold plus 4+ clearing houses using NPP",
        "maximum": "Target plus 200k PayTo Super transactions"
      },
      "useCaseRefs": [
        {
          "name": "All",
          "description": "Cross-cutting initiatives, capabilities or issues that apply across multiple strategic use cases rather than a single business scenario.",
          "desiredOutcome": "",
          "status": "Amber"
        }
      ],
      "capabilityRefs": [
        {
          "name": "PayID",
          "owner": "Ronita",
          "description": "Addressing capability"
        }
      ]
    },
    {
      "id": "ID-25",
      "useCasesImpacted": "All",
      "category": "Data Quality & Validation",
      "journeyStage": "Preparation and data creation",
      "title": "Requirement for upfront validation of PayID by DSP",
      "problemScenario": "Currently the NPP rules only allow the PayID resolution to occur prior to a payment/payment initiation or mandate creation. This means that DSPs cannot resolve a PayID within their systems. It has been noted with DSPs, that upfront validation is ideal to prevent from downstream failure and more operational re-work to resolve the issue. There needs to be a consideration whether the rules can be uplifted to support those scenario including what information is display, CX and controls that will be required to support this.",
      "issueType": "Gap",
      "dependencies": "",
      "relatedInitiative": "",
      "productsImpacted": "PayID",
      "owner": "Ronita",
      "priority": "MEDIUM",
      "horizon": "LONG",
      "status": "WIP",
      "currentAction": "Makes reports action-oriented instead of note-oriented",
      "decisionNeeded": "",
      "notes": "Paper is being taken up to PRC",
      "link1": "",
      "link2": "",
      "strategicPriorityId": "",
      "objectiveId": "OBJ01",
      "scorecardId": "KR01",
      "lastUpdated": "2026-04-01",
      "execSummaryTag": "Yes",
      "strategicObjective": "",
      "scorecardItem": "",
      "readinessStatus": "",
      "readinessRationale": "",
      "decisionOwner": "",
      "decisionDueDate": "",
      "dependencyOwnerType": "",
      "impactDriver": "",
      "roadmapAlignment": "",
      "externalMessagingStatus": "",
      "reviewDate": "",
      "isExecSummary": true,
      "useCases": [
        "All"
      ],
      "useCase": "All",
      "categories": [
        "Data Quality & Validation"
      ],
      "products": [
        "PayID"
      ],
      "product": "PayID",
      "journeyStages": [
        "Preparation and data creation"
      ],
      "strategicPriority": {},
      "objective": {
        "id": "OBJ01",
        "title": "Critically Important",
        "description": "Our infrastructure underpins economically significant flows in Australia"
      },
      "scorecard": {
        "id": "KR01",
        "keyResult": "Support Australia’s vision for a digital economy with NPP",
        "threshold": "Super enabled: all funds accepting NPP; PRN passed through",
        "target": "Threshold plus 4+ clearing houses using NPP",
        "maximum": "Target plus 200k PayTo Super transactions"
      },
      "useCaseRefs": [
        {
          "name": "All",
          "description": "Cross-cutting initiatives, capabilities or issues that apply across multiple strategic use cases rather than a single business scenario.",
          "desiredOutcome": "",
          "status": "Amber"
        }
      ],
      "capabilityRefs": [
        {
          "name": "PayID",
          "owner": "Ronita",
          "description": "Addressing capability"
        }
      ]
    },
    {
      "id": "ID-26",
      "useCasesImpacted": "All",
      "category": "Addressing Model (PayID & Account Structure)",
      "journeyStage": "Set up & Account, onboarding",
      "title": "Capacity and performance implication on the Addressing Service due to increasing PayID usage",
      "problemScenario": "Given the update of PayID receivables and the potential volumes of PayID resolution especially as bulk payment instructions are being offered and used. This means that this could potentially impact the performance and capacity of the addressing service. There is a need to continuous reviews of the capacity in-line with the uptake of PayIDs",
      "issueType": "Opportunity",
      "dependencies": "",
      "relatedInitiative": "",
      "productsImpacted": "PayID",
      "owner": "Ronita",
      "priority": "MEDIUM",
      "horizon": "LONG",
      "status": "NOT STARTED",
      "currentAction": "",
      "decisionNeeded": "",
      "notes": "",
      "link1": "",
      "link2": "",
      "strategicPriorityId": "",
      "objectiveId": "OBJ01",
      "scorecardId": "KR01",
      "lastUpdated": "",
      "execSummaryTag": "Yes",
      "strategicObjective": "",
      "scorecardItem": "",
      "readinessStatus": "",
      "readinessRationale": "",
      "decisionOwner": "",
      "decisionDueDate": "",
      "dependencyOwnerType": "",
      "impactDriver": "",
      "roadmapAlignment": "",
      "externalMessagingStatus": "",
      "reviewDate": "",
      "isExecSummary": true,
      "useCases": [
        "All"
      ],
      "useCase": "All",
      "categories": [
        "Addressing Model (PayID & Account Structure)"
      ],
      "products": [
        "PayID"
      ],
      "product": "PayID",
      "journeyStages": [
        "Set up & Account, onboarding"
      ],
      "strategicPriority": {},
      "objective": {
        "id": "OBJ01",
        "title": "Critically Important",
        "description": "Our infrastructure underpins economically significant flows in Australia"
      },
      "scorecard": {
        "id": "KR01",
        "keyResult": "Support Australia’s vision for a digital economy with NPP",
        "threshold": "Super enabled: all funds accepting NPP; PRN passed through",
        "target": "Threshold plus 4+ clearing houses using NPP",
        "maximum": "Target plus 200k PayTo Super transactions"
      },
      "useCaseRefs": [
        {
          "name": "All",
          "description": "Cross-cutting initiatives, capabilities or issues that apply across multiple strategic use cases rather than a single business scenario.",
          "desiredOutcome": "",
          "status": "Amber"
        }
      ],
      "capabilityRefs": [
        {
          "name": "PayID",
          "owner": "Ronita",
          "description": "Addressing capability"
        }
      ]
    },
    {
      "id": "ID-27",
      "useCasesImpacted": "All",
      "category": "Payment instruction and Operation",
      "journeyStage": "Set up & Account, onboarding",
      "title": "Limits on PayIDs payments within a bulk payment instruction.",
      "problemScenario": "Currently, as part of a bulk payment instruction, there can be a number of PayIDs included. This could be due to enumeration controls or throughput. This can result DSPs or customers need to separate their files in order for it to be processed which isn't ideal processing. There needs to be an understand of the current constraints and whether there needs to be changes to rules or capacity to support this.",
      "issueType": "Risk",
      "dependencies": "",
      "relatedInitiative": "",
      "productsImpacted": "PayID",
      "owner": "Ronita",
      "priority": "MEDIUM",
      "horizon": "MEDIUM",
      "status": "WIP",
      "currentAction": "Makes reports action-oriented instead of note-oriented",
      "decisionNeeded": "Decisions pending.",
      "notes": "Creating the Capability Matrix and collecting the information to understand existing limits",
      "link1": "",
      "link2": "Member Capability Matrix _PayID only.xlsx",
      "strategicPriorityId": "",
      "objectiveId": "OBJ01",
      "scorecardId": "KR01",
      "lastUpdated": "2026-04-01",
      "execSummaryTag": "Yes",
      "strategicObjective": "",
      "scorecardItem": "",
      "readinessStatus": "",
      "readinessRationale": "",
      "decisionOwner": "",
      "decisionDueDate": "",
      "dependencyOwnerType": "",
      "impactDriver": "",
      "roadmapAlignment": "",
      "externalMessagingStatus": "",
      "reviewDate": "",
      "isExecSummary": true,
      "useCases": [
        "All"
      ],
      "useCase": "All",
      "categories": [
        "Payment instruction and Operation"
      ],
      "products": [
        "PayID"
      ],
      "product": "PayID",
      "journeyStages": [
        "Set up & Account, onboarding"
      ],
      "strategicPriority": {},
      "objective": {
        "id": "OBJ01",
        "title": "Critically Important",
        "description": "Our infrastructure underpins economically significant flows in Australia"
      },
      "scorecard": {
        "id": "KR01",
        "keyResult": "Support Australia’s vision for a digital economy with NPP",
        "threshold": "Super enabled: all funds accepting NPP; PRN passed through",
        "target": "Threshold plus 4+ clearing houses using NPP",
        "maximum": "Target plus 200k PayTo Super transactions"
      },
      "useCaseRefs": [
        {
          "name": "All",
          "description": "Cross-cutting initiatives, capabilities or issues that apply across multiple strategic use cases rather than a single business scenario.",
          "desiredOutcome": "",
          "status": "Amber"
        }
      ],
      "capabilityRefs": [
        {
          "name": "PayID",
          "owner": "Ronita",
          "description": "Addressing capability"
        }
      ]
    },
    {
      "id": "ID-28",
      "useCasesImpacted": "All",
      "category": "Addressing Model (PayID & Account Structure)",
      "journeyStage": "Preparation and data creation",
      "title": "Consistent ongoing maintenance of PayID",
      "problemScenario": "Currently, there are NPP rules that cover the maintenance of PayIDs such as ensuring it's de-registered when an account is closed. Given the use of PayID receivables, there are a large number of PayIDs that are being registered however it's unknown how this is managed. This may result in a build up unused PayIDs that are registered with no process to maintain the currency of them. There needs to be processes relating to PayID to ensure there is maintenance processes set up (e.g. if the employer leaves the clearing house as a customer, is the PayID de-registered)?",
      "issueType": "Product Idea",
      "dependencies": "",
      "relatedInitiative": "",
      "productsImpacted": "PayID",
      "owner": "Ronita",
      "priority": "MEDIUM",
      "horizon": "MEDIUM",
      "status": "NOT STARTED",
      "currentAction": "",
      "decisionNeeded": "Decisions pending.",
      "notes": "Next Step: Understand the business processes that may be required. Do we need to look at the maintaince of banks?",
      "link1": "",
      "link2": "",
      "strategicPriorityId": "",
      "objectiveId": "OBJ01",
      "scorecardId": "KR01",
      "lastUpdated": "2026-04-01",
      "execSummaryTag": "Yes",
      "strategicObjective": "",
      "scorecardItem": "",
      "readinessStatus": "",
      "readinessRationale": "",
      "decisionOwner": "",
      "decisionDueDate": "",
      "dependencyOwnerType": "",
      "impactDriver": "",
      "roadmapAlignment": "",
      "externalMessagingStatus": "",
      "reviewDate": "",
      "isExecSummary": true,
      "useCases": [
        "All"
      ],
      "useCase": "All",
      "categories": [
        "Addressing Model (PayID & Account Structure)"
      ],
      "products": [
        "PayID"
      ],
      "product": "PayID",
      "journeyStages": [
        "Preparation and data creation"
      ],
      "strategicPriority": {},
      "objective": {
        "id": "OBJ01",
        "title": "Critically Important",
        "description": "Our infrastructure underpins economically significant flows in Australia"
      },
      "scorecard": {
        "id": "KR01",
        "keyResult": "Support Australia’s vision for a digital economy with NPP",
        "threshold": "Super enabled: all funds accepting NPP; PRN passed through",
        "target": "Threshold plus 4+ clearing houses using NPP",
        "maximum": "Target plus 200k PayTo Super transactions"
      },
      "useCaseRefs": [
        {
          "name": "All",
          "description": "Cross-cutting initiatives, capabilities or issues that apply across multiple strategic use cases rather than a single business scenario.",
          "desiredOutcome": "",
          "status": "Amber"
        }
      ],
      "capabilityRefs": [
        {
          "name": "PayID",
          "owner": "Ronita",
          "description": "Addressing capability"
        }
      ]
    },
    {
      "id": "ID-29",
      "useCasesImpacted": "Super",
      "category": "Data Quality & Validation",
      "journeyStage": "Receiving, validating, reconciling, and reporting",
      "title": "Opportunity: PayID Receivables could be an alternative to PRN for super",
      "problemScenario": "There may be opportunity for PayID receivables to be used as an alternative to PRN. Noting there are restriction given that it's not mandatory for Participants and it would require significant SuperStream changes",
      "issueType": "PE",
      "dependencies": "",
      "relatedInitiative": "",
      "productsImpacted": "PayID",
      "owner": "Bianca",
      "priority": "LOW",
      "horizon": "LONG",
      "status": "NOT STARTED",
      "currentAction": "",
      "decisionNeeded": "",
      "notes": "",
      "link1": "",
      "link2": "",
      "strategicPriorityId": "SP01",
      "objectiveId": "OBJ01",
      "scorecardId": "KR01",
      "lastUpdated": "2026-04-01",
      "execSummaryTag": "Yes",
      "strategicObjective": "",
      "scorecardItem": "",
      "readinessStatus": "",
      "readinessRationale": "",
      "decisionOwner": "",
      "decisionDueDate": "",
      "dependencyOwnerType": "",
      "impactDriver": "",
      "roadmapAlignment": "",
      "externalMessagingStatus": "",
      "reviewDate": "",
      "isExecSummary": true,
      "useCases": [
        "Super"
      ],
      "useCase": "Super",
      "categories": [
        "Data Quality & Validation"
      ],
      "products": [
        "PayID"
      ],
      "product": "PayID",
      "journeyStages": [
        "Receiving, validating, reconciling, and reporting"
      ],
      "strategicPriority": {
        "id": "SP01",
        "title": "Continue the Move to NPP and deliver economic transformation opportunities"
      },
      "objective": {
        "id": "OBJ01",
        "title": "Critically Important",
        "description": "Our infrastructure underpins economically significant flows in Australia"
      },
      "scorecard": {
        "id": "KR01",
        "keyResult": "Support Australia’s vision for a digital economy with NPP",
        "threshold": "Super enabled: all funds accepting NPP; PRN passed through",
        "target": "Threshold plus 4+ clearing houses using NPP",
        "maximum": "Target plus 200k PayTo Super transactions"
      },
      "useCaseRefs": [
        {
          "name": "Super",
          "description": "Enable the superannuation ecosystem to adopt NPP and related capabilities, supporting Payday Super legislation, improved payment processing, reconciliation, and industry readiness.",
          "desiredOutcome": "Employers, clearing houses and super funds can process super contributions using NPP with end-to-end reconciliation.",
          "status": "Amber"
        }
      ],
      "capabilityRefs": [
        {
          "name": "PayID",
          "owner": "Ronita",
          "description": "Addressing capability"
        }
      ]
    },
    {
      "id": "ID-30",
      "useCasesImpacted": "Super",
      "category": "Addressing Model (PayID & Account Structure)",
      "journeyStage": "Set up & Account, onboarding",
      "title": "Opportunity: Add USI as a new PayID alias type",
      "problemScenario": "The Unique Superannuation Identifier (USI) is used in SuperStream to identify an APRA fund and/or its superannuation product which an employee (member) is contributing to. This would assist APRA super funds in reconciling payments for employer contributions. It would also provide opportunity to apply specific rules that can then be applied to the super use case.",
      "issueType": "Dependency",
      "dependencies": "",
      "relatedInitiative": "",
      "productsImpacted": "PayID",
      "owner": "Ronita",
      "priority": "LOW",
      "horizon": "LONG",
      "status": "BACKLOG",
      "currentAction": "",
      "decisionNeeded": "",
      "notes": "Enablement backlog",
      "link1": "",
      "link2": "",
      "strategicPriorityId": "",
      "objectiveId": "OBJ01",
      "scorecardId": "KR01",
      "lastUpdated": "2026-04-01",
      "execSummaryTag": "Yes",
      "strategicObjective": "",
      "scorecardItem": "",
      "readinessStatus": "",
      "readinessRationale": "",
      "decisionOwner": "",
      "decisionDueDate": "",
      "dependencyOwnerType": "",
      "impactDriver": "",
      "roadmapAlignment": "",
      "externalMessagingStatus": "",
      "reviewDate": "",
      "isExecSummary": true,
      "useCases": [
        "Super"
      ],
      "useCase": "Super",
      "categories": [
        "Addressing Model (PayID & Account Structure)"
      ],
      "products": [
        "PayID"
      ],
      "product": "PayID",
      "journeyStages": [
        "Set up & Account, onboarding"
      ],
      "strategicPriority": {},
      "objective": {
        "id": "OBJ01",
        "title": "Critically Important",
        "description": "Our infrastructure underpins economically significant flows in Australia"
      },
      "scorecard": {
        "id": "KR01",
        "keyResult": "Support Australia’s vision for a digital economy with NPP",
        "threshold": "Super enabled: all funds accepting NPP; PRN passed through",
        "target": "Threshold plus 4+ clearing houses using NPP",
        "maximum": "Target plus 200k PayTo Super transactions"
      },
      "useCaseRefs": [
        {
          "name": "Super",
          "description": "Enable the superannuation ecosystem to adopt NPP and related capabilities, supporting Payday Super legislation, improved payment processing, reconciliation, and industry readiness.",
          "desiredOutcome": "Employers, clearing houses and super funds can process super contributions using NPP with end-to-end reconciliation.",
          "status": "Amber"
        }
      ],
      "capabilityRefs": [
        {
          "name": "PayID",
          "owner": "Ronita",
          "description": "Addressing capability"
        }
      ]
    },
    {
      "id": "ID-31",
      "useCasesImpacted": "Super",
      "category": "Addressing Model (PayID & Account Structure)",
      "journeyStage": "Receiving, validating, reconciling, and reporting",
      "title": "Opportunity: Register a PayID for each employee for super contributions",
      "problemScenario": "Register a dedicated PayID for each employee which moves with the employee when they go across to different super funds. This would need to consider the processes around this and the SuperStream governance around it",
      "issueType": "Gap",
      "dependencies": "",
      "relatedInitiative": "",
      "productsImpacted": "PayID",
      "owner": "Bianca",
      "priority": "LOW",
      "horizon": "LONG",
      "status": "NOT STARTED",
      "currentAction": "",
      "decisionNeeded": "Decisions pending.",
      "notes": "",
      "link1": "",
      "link2": "",
      "strategicPriorityId": "",
      "objectiveId": "OBJ01",
      "scorecardId": "KR01",
      "lastUpdated": "2026-04-01",
      "execSummaryTag": "Yes",
      "strategicObjective": "",
      "scorecardItem": "",
      "readinessStatus": "",
      "readinessRationale": "",
      "decisionOwner": "",
      "decisionDueDate": "",
      "dependencyOwnerType": "",
      "impactDriver": "",
      "roadmapAlignment": "",
      "externalMessagingStatus": "",
      "reviewDate": "",
      "isExecSummary": true,
      "useCases": [
        "Super"
      ],
      "useCase": "Super",
      "categories": [
        "Addressing Model (PayID & Account Structure)"
      ],
      "products": [
        "PayID"
      ],
      "product": "PayID",
      "journeyStages": [
        "Receiving, validating, reconciling, and reporting"
      ],
      "strategicPriority": {},
      "objective": {
        "id": "OBJ01",
        "title": "Critically Important",
        "description": "Our infrastructure underpins economically significant flows in Australia"
      },
      "scorecard": {
        "id": "KR01",
        "keyResult": "Support Australia’s vision for a digital economy with NPP",
        "threshold": "Super enabled: all funds accepting NPP; PRN passed through",
        "target": "Threshold plus 4+ clearing houses using NPP",
        "maximum": "Target plus 200k PayTo Super transactions"
      },
      "useCaseRefs": [
        {
          "name": "Super",
          "description": "Enable the superannuation ecosystem to adopt NPP and related capabilities, supporting Payday Super legislation, improved payment processing, reconciliation, and industry readiness.",
          "desiredOutcome": "Employers, clearing houses and super funds can process super contributions using NPP with end-to-end reconciliation.",
          "status": "Amber"
        }
      ],
      "capabilityRefs": [
        {
          "name": "PayID",
          "owner": "Ronita",
          "description": "Addressing capability"
        }
      ]
    },
    {
      "id": "ID-33",
      "useCasesImpacted": "All",
      "category": "Payment instruction and Operation",
      "journeyStage": "Receiving, validating, reconciling, and reporting",
      "title": "Variability on NPP data elements included within the payment instruction",
      "problemScenario": "Currently, Payment instruction and response for NPP should include fields for PayID, PayTo and COP outcomes. Currently there is variability on the payment instruction for NPP for the products (i.e. PayID is not available for some) This results in the inability for end users to utilise some NPP products when sending payments with that Participant. There needs to be uplift by Participants in their payment instruction offering to include all relevant NPP products.",
      "issueType": "Risk",
      "dependencies": "",
      "relatedInitiative": "",
      "productsImpacted": "Payment Instruction",
      "owner": "Bianca",
      "priority": "MEDIUM",
      "horizon": "LONG",
      "status": "WIP",
      "currentAction": "Makes reports action-oriented instead of note-oriented",
      "decisionNeeded": "",
      "notes": "Was being incorporated in the standard payment instruction Review of payment instructions were had",
      "link1": "",
      "link2": "",
      "strategicPriorityId": "",
      "objectiveId": "OBJ01",
      "scorecardId": "KR01",
      "lastUpdated": "2026-06-26",
      "execSummaryTag": "Yes",
      "strategicObjective": "",
      "scorecardItem": "",
      "readinessStatus": "",
      "readinessRationale": "",
      "decisionOwner": "",
      "decisionDueDate": "",
      "dependencyOwnerType": "",
      "impactDriver": "",
      "roadmapAlignment": "",
      "externalMessagingStatus": "",
      "reviewDate": "",
      "isExecSummary": true,
      "useCases": [
        "All"
      ],
      "useCase": "All",
      "categories": [
        "Payment instruction and Operation"
      ],
      "products": [
        "Payment Instruction"
      ],
      "product": "Payment Instruction",
      "journeyStages": [
        "Receiving, validating, reconciling, and reporting"
      ],
      "strategicPriority": {},
      "objective": {
        "id": "OBJ01",
        "title": "Critically Important",
        "description": "Our infrastructure underpins economically significant flows in Australia"
      },
      "scorecard": {
        "id": "KR01",
        "keyResult": "Support Australia’s vision for a digital economy with NPP",
        "threshold": "Super enabled: all funds accepting NPP; PRN passed through",
        "target": "Threshold plus 4+ clearing houses using NPP",
        "maximum": "Target plus 200k PayTo Super transactions"
      },
      "useCaseRefs": [
        {
          "name": "All",
          "description": "Cross-cutting initiatives, capabilities or issues that apply across multiple strategic use cases rather than a single business scenario.",
          "desiredOutcome": "",
          "status": "Amber"
        }
      ],
      "capabilityRefs": [
        {
          "name": "Payment Instruction",
          "owner": "Bianca",
          "description": ""
        }
      ]
    },
    {
      "id": "ID-34",
      "useCasesImpacted": "All",
      "category": "Payment instruction and Operation",
      "journeyStage": "Payment processing",
      "title": "A bulk payment instruction is not available across all Participants",
      "problemScenario": "Currently, Not all Participants offer a bulk payment instruction and can do it at scale. This results in the inability for customers to make payments in the following scenarios: - For super, it is required for super funds wanting to make refund payments and employers who send directly to the super fund (channel B) - This will also impact payroll, business payments and migrated DDR payments. There is a need for Participants to offer a bulk payments instruction.",
      "issueType": "Product Idea",
      "dependencies": "",
      "relatedInitiative": "",
      "productsImpacted": "Payment Instruction",
      "owner": "Bianca",
      "priority": "MEDIUM",
      "horizon": "MEDIUM",
      "status": "WIP",
      "currentAction": "Makes reports action-oriented instead of note-oriented",
      "decisionNeeded": "",
      "notes": "Enablement: Working with DSPs (SAP) to enable bulk payment instruction.",
      "link1": "",
      "link2": "",
      "strategicPriorityId": "",
      "objectiveId": "OBJ01",
      "scorecardId": "KR01",
      "lastUpdated": "",
      "execSummaryTag": "Yes",
      "strategicObjective": "",
      "scorecardItem": "",
      "readinessStatus": "",
      "readinessRationale": "",
      "decisionOwner": "",
      "decisionDueDate": "",
      "dependencyOwnerType": "",
      "impactDriver": "",
      "roadmapAlignment": "",
      "externalMessagingStatus": "",
      "reviewDate": "",
      "isExecSummary": true,
      "useCases": [
        "All"
      ],
      "useCase": "All",
      "categories": [
        "Payment instruction and Operation"
      ],
      "products": [
        "Payment Instruction"
      ],
      "product": "Payment Instruction",
      "journeyStages": [
        "Payment processing"
      ],
      "strategicPriority": {},
      "objective": {
        "id": "OBJ01",
        "title": "Critically Important",
        "description": "Our infrastructure underpins economically significant flows in Australia"
      },
      "scorecard": {
        "id": "KR01",
        "keyResult": "Support Australia’s vision for a digital economy with NPP",
        "threshold": "Super enabled: all funds accepting NPP; PRN passed through",
        "target": "Threshold plus 4+ clearing houses using NPP",
        "maximum": "Target plus 200k PayTo Super transactions"
      },
      "useCaseRefs": [
        {
          "name": "All",
          "description": "Cross-cutting initiatives, capabilities or issues that apply across multiple strategic use cases rather than a single business scenario.",
          "desiredOutcome": "",
          "status": "Amber"
        }
      ],
      "capabilityRefs": [
        {
          "name": "Payment Instruction",
          "owner": "Bianca",
          "description": ""
        }
      ]
    },
    {
      "id": "ID-35",
      "useCasesImpacted": "All",
      "category": "Standardisation & Interoperability",
      "journeyStage": "Preparation and data creation",
      "title": "Lack of standardised integration and customer experience.",
      "problemScenario": "Currently, the NPP rules didn't dictate how Participants build their offerings to their customers, each Participant has built bespoke formats and integration. This results in making it difficult for DSPs to adopt NPP as they cannot afford to build and maintain different integration for each of the banks. Additionally, it makes it difficult for smaller financial institution to get DSPs to adopt their formats. There is a need to standardise formats and integration and experiences",
      "issueType": "PE",
      "dependencies": "Participants, Payment instruction, A2A Vision",
      "relatedInitiative": "",
      "productsImpacted": "Payment Instruction",
      "owner": "Bianca",
      "priority": "MEDIUM",
      "horizon": "LONG",
      "status": "WIP",
      "currentAction": "Makes reports action-oriented instead of note-oriented",
      "decisionNeeded": "",
      "notes": "Work on a standard payment instruction is ongoing however is dependent on the A2A vision and roadmap",
      "link1": "",
      "link2": "",
      "strategicPriorityId": "",
      "objectiveId": "OBJ01",
      "scorecardId": "KR01",
      "lastUpdated": "2026-06-26",
      "execSummaryTag": "Yes",
      "strategicObjective": "",
      "scorecardItem": "",
      "readinessStatus": "",
      "readinessRationale": "",
      "decisionOwner": "",
      "decisionDueDate": "",
      "dependencyOwnerType": "",
      "impactDriver": "",
      "roadmapAlignment": "",
      "externalMessagingStatus": "",
      "reviewDate": "",
      "isExecSummary": true,
      "useCases": [
        "All"
      ],
      "useCase": "All",
      "categories": [
        "Standardisation & Interoperability"
      ],
      "products": [
        "Payment Instruction"
      ],
      "product": "Payment Instruction",
      "journeyStages": [
        "Preparation and data creation"
      ],
      "strategicPriority": {},
      "objective": {
        "id": "OBJ01",
        "title": "Critically Important",
        "description": "Our infrastructure underpins economically significant flows in Australia"
      },
      "scorecard": {
        "id": "KR01",
        "keyResult": "Support Australia’s vision for a digital economy with NPP",
        "threshold": "Super enabled: all funds accepting NPP; PRN passed through",
        "target": "Threshold plus 4+ clearing houses using NPP",
        "maximum": "Target plus 200k PayTo Super transactions"
      },
      "useCaseRefs": [
        {
          "name": "All",
          "description": "Cross-cutting initiatives, capabilities or issues that apply across multiple strategic use cases rather than a single business scenario.",
          "desiredOutcome": "",
          "status": "Amber"
        }
      ],
      "capabilityRefs": [
        {
          "name": "Payment Instruction",
          "owner": "Bianca",
          "description": ""
        }
      ]
    },
    {
      "id": "ID-37",
      "useCasesImpacted": "All",
      "category": "Ecosystem Readiness & External Constraints",
      "journeyStage": "Set up & Account, onboarding",
      "title": "PayTo service variability",
      "problemScenario": "Currently PayTo capabilities vary significantly across banks, including whether initiation capabilities is supported, business account availability, customer approval processes This results in an inconsistent experience for users and increased operational complexity for providers. There is a need to standardise PayTo capabilities across the ecosystem, potentially through defining minimum scheme requirements.",
      "issueType": "Gap",
      "dependencies": "Participants",
      "relatedInitiative": "",
      "productsImpacted": "PayTo",
      "owner": "Edith",
      "priority": "MEDIUM",
      "horizon": "MEDIUM",
      "status": "WIP",
      "currentAction": "Makes reports action-oriented instead of note-oriented",
      "decisionNeeded": "",
      "notes": "Working on the March Service Variability report",
      "link1": "Payments via PayTo availability - Move to NPP (MTN) Program Squad - Confluence",
      "link2": "",
      "strategicPriorityId": "",
      "objectiveId": "OBJ01",
      "scorecardId": "KR01",
      "lastUpdated": "2026-06-26",
      "execSummaryTag": "Yes",
      "strategicObjective": "",
      "scorecardItem": "",
      "readinessStatus": "",
      "readinessRationale": "",
      "decisionOwner": "",
      "decisionDueDate": "",
      "dependencyOwnerType": "",
      "impactDriver": "",
      "roadmapAlignment": "",
      "externalMessagingStatus": "",
      "reviewDate": "",
      "isExecSummary": true,
      "useCases": [
        "All"
      ],
      "useCase": "All",
      "categories": [
        "Ecosystem Readiness & External Constraints"
      ],
      "products": [
        "PayTo"
      ],
      "product": "PayTo",
      "journeyStages": [
        "Set up & Account, onboarding"
      ],
      "strategicPriority": {},
      "objective": {
        "id": "OBJ01",
        "title": "Critically Important",
        "description": "Our infrastructure underpins economically significant flows in Australia"
      },
      "scorecard": {
        "id": "KR01",
        "keyResult": "Support Australia’s vision for a digital economy with NPP",
        "threshold": "Super enabled: all funds accepting NPP; PRN passed through",
        "target": "Threshold plus 4+ clearing houses using NPP",
        "maximum": "Target plus 200k PayTo Super transactions"
      },
      "useCaseRefs": [
        {
          "name": "All",
          "description": "Cross-cutting initiatives, capabilities or issues that apply across multiple strategic use cases rather than a single business scenario.",
          "desiredOutcome": "",
          "status": "Amber"
        }
      ],
      "capabilityRefs": [
        {
          "name": "PayTo",
          "owner": "Edith",
          "description": "Payment initiation capability"
        }
      ]
    },
    {
      "id": "ID-38",
      "useCasesImpacted": "All",
      "category": "Payment Setup & Configuration",
      "journeyStage": "Set up & Account, onboarding",
      "title": "PayTo limits are too low for use cases",
      "problemScenario": "Currently PayTo limits are set to a value that doesn't cater for use cases such as super and payroll. This is tied to the work associated with PayTo liability. This results in a negative experience for initiators and the payers who can't create PayTo agreement as it will be rejected by the banks. For the case of super, it prevents employers from meeting their Payday super legislation. There needs to be limits that can accommodate for the values expected for these use cases especially where they pertain B2B.",
      "issueType": "Opportunity",
      "dependencies": "Participants",
      "relatedInitiative": "",
      "productsImpacted": "PayTo",
      "owner": "Edith",
      "priority": "HIGH",
      "horizon": "MEDIUM",
      "status": "WIP",
      "currentAction": "Makes reports action-oriented instead of note-oriented",
      "decisionNeeded": "",
      "notes": "Enablement/PayTo: Working on a Super PayTo agreement proposal",
      "link1": "PayTo Limits - Move to NPP (MTN) Program Squad - Confluence",
      "link2": "",
      "strategicPriorityId": "",
      "objectiveId": "OBJ01",
      "scorecardId": "KR01",
      "lastUpdated": "2026-06-26",
      "execSummaryTag": "Yes",
      "strategicObjective": "",
      "scorecardItem": "",
      "readinessStatus": "",
      "readinessRationale": "",
      "decisionOwner": "",
      "decisionDueDate": "",
      "dependencyOwnerType": "",
      "impactDriver": "",
      "roadmapAlignment": "",
      "externalMessagingStatus": "",
      "reviewDate": "",
      "isExecSummary": true,
      "useCases": [
        "All"
      ],
      "useCase": "All",
      "categories": [
        "Payment Setup & Configuration"
      ],
      "products": [
        "PayTo"
      ],
      "product": "PayTo",
      "journeyStages": [
        "Set up & Account, onboarding"
      ],
      "strategicPriority": {},
      "objective": {
        "id": "OBJ01",
        "title": "Critically Important",
        "description": "Our infrastructure underpins economically significant flows in Australia"
      },
      "scorecard": {
        "id": "KR01",
        "keyResult": "Support Australia’s vision for a digital economy with NPP",
        "threshold": "Super enabled: all funds accepting NPP; PRN passed through",
        "target": "Threshold plus 4+ clearing houses using NPP",
        "maximum": "Target plus 200k PayTo Super transactions"
      },
      "useCaseRefs": [
        {
          "name": "All",
          "description": "Cross-cutting initiatives, capabilities or issues that apply across multiple strategic use cases rather than a single business scenario.",
          "desiredOutcome": "",
          "status": "Amber"
        }
      ],
      "capabilityRefs": [
        {
          "name": "PayTo",
          "owner": "Edith",
          "description": "Payment initiation capability"
        }
      ]
    },
    {
      "id": "ID-39",
      "useCasesImpacted": "All",
      "category": "Payment Setup & Configuration",
      "journeyStage": "Set up & Account, onboarding",
      "title": "The population of ultimate creditor in the PayTo agreement and subsequent payment",
      "problemScenario": "Currently, with the third party model via PayTo is becoming a common model. This is when PayTo is used for funding and separate Osko payments are made to distribute the payments. This results in the third party being displayed within the agreement and/or account statement (as opposed to the business the Payer is dealing with) which can cause confusion. There needs to be guidance on how an initatior is populating the parties within the agreement and payment initation as well as potential rules updates to expose more information in reporting, statements etc",
      "issueType": "Risk",
      "dependencies": "",
      "relatedInitiative": "",
      "productsImpacted": "PayTo",
      "owner": "Edith",
      "priority": "MEDIUM",
      "horizon": "SHORT",
      "status": "WIP",
      "currentAction": "Makes reports action-oriented instead of note-oriented",
      "decisionNeeded": "",
      "notes": "Enablement/PayTo: Working on a Super PayTo agreement proposal",
      "link1": "",
      "link2": "",
      "strategicPriorityId": "SP01",
      "objectiveId": "OBJ01",
      "scorecardId": "KR01",
      "lastUpdated": "2026-06-26",
      "execSummaryTag": "Yes",
      "strategicObjective": "",
      "scorecardItem": "",
      "readinessStatus": "",
      "readinessRationale": "",
      "decisionOwner": "",
      "decisionDueDate": "",
      "dependencyOwnerType": "",
      "impactDriver": "",
      "roadmapAlignment": "",
      "externalMessagingStatus": "",
      "reviewDate": "",
      "isExecSummary": true,
      "useCases": [
        "All"
      ],
      "useCase": "All",
      "categories": [
        "Payment Setup & Configuration"
      ],
      "products": [
        "PayTo"
      ],
      "product": "PayTo",
      "journeyStages": [
        "Set up & Account, onboarding"
      ],
      "strategicPriority": {
        "id": "SP01",
        "title": "Continue the Move to NPP and deliver economic transformation opportunities"
      },
      "objective": {
        "id": "OBJ01",
        "title": "Critically Important",
        "description": "Our infrastructure underpins economically significant flows in Australia"
      },
      "scorecard": {
        "id": "KR01",
        "keyResult": "Support Australia’s vision for a digital economy with NPP",
        "threshold": "Super enabled: all funds accepting NPP; PRN passed through",
        "target": "Threshold plus 4+ clearing houses using NPP",
        "maximum": "Target plus 200k PayTo Super transactions"
      },
      "useCaseRefs": [
        {
          "name": "All",
          "description": "Cross-cutting initiatives, capabilities or issues that apply across multiple strategic use cases rather than a single business scenario.",
          "desiredOutcome": "",
          "status": "Amber"
        }
      ],
      "capabilityRefs": [
        {
          "name": "PayTo",
          "owner": "Edith",
          "description": "Payment initiation capability"
        }
      ]
    },
    {
      "id": "ID-40",
      "useCasesImpacted": "All",
      "category": "Ecosystem Readiness & External Constraints",
      "journeyStage": "Payment processing",
      "title": "Education of the implications of fast fail to businesses",
      "problemScenario": "Currently, with direct debits, payment failures due to issues such as insufficient funds can often be managed by the payer’s bank. For example through processing order controls - prioritising direct credits before debits. As a result, businesses may not need to take any action when a payment initially fails. However, PayTo is fast fail therefore the payer bank cannot do similar processing to avoid the failure. This results in the business requiring to reinitiate the payment initation when the debit fails. The action they take will depend on the reason for the failure. There needs to be education on how businesses deal with fast fail in comparison to how they manage direct debits today.",
      "issueType": "Product Idea",
      "dependencies": "",
      "relatedInitiative": "",
      "productsImpacted": "PayTo",
      "owner": "Bianca",
      "priority": "MEDIUM",
      "horizon": "MEDIUM",
      "status": "NOT STARTED",
      "currentAction": "",
      "decisionNeeded": "",
      "notes": "",
      "link1": "",
      "link2": "",
      "strategicPriorityId": "",
      "objectiveId": "OBJ01",
      "scorecardId": "KR01",
      "lastUpdated": "",
      "execSummaryTag": "Yes",
      "strategicObjective": "",
      "scorecardItem": "",
      "readinessStatus": "",
      "readinessRationale": "",
      "decisionOwner": "",
      "decisionDueDate": "",
      "dependencyOwnerType": "",
      "impactDriver": "",
      "roadmapAlignment": "",
      "externalMessagingStatus": "",
      "reviewDate": "",
      "isExecSummary": true,
      "useCases": [
        "All"
      ],
      "useCase": "All",
      "categories": [
        "Ecosystem Readiness & External Constraints"
      ],
      "products": [
        "PayTo"
      ],
      "product": "PayTo",
      "journeyStages": [
        "Payment processing"
      ],
      "strategicPriority": {},
      "objective": {
        "id": "OBJ01",
        "title": "Critically Important",
        "description": "Our infrastructure underpins economically significant flows in Australia"
      },
      "scorecard": {
        "id": "KR01",
        "keyResult": "Support Australia’s vision for a digital economy with NPP",
        "threshold": "Super enabled: all funds accepting NPP; PRN passed through",
        "target": "Threshold plus 4+ clearing houses using NPP",
        "maximum": "Target plus 200k PayTo Super transactions"
      },
      "useCaseRefs": [
        {
          "name": "All",
          "description": "Cross-cutting initiatives, capabilities or issues that apply across multiple strategic use cases rather than a single business scenario.",
          "desiredOutcome": "",
          "status": "Amber"
        }
      ],
      "capabilityRefs": [
        {
          "name": "PayTo",
          "owner": "Edith",
          "description": "Payment initiation capability"
        }
      ]
    },
    {
      "id": "ID-41",
      "useCasesImpacted": "All",
      "category": "Ecosystem Readiness & External Constraints",
      "journeyStage": "Payment processing",
      "title": "PayTo liability impact and implications to the ecosystem",
      "problemScenario": "As PayTo is adopted, the liability model are not clearly defined and how it affects the parties across the value chain which is impacting limits. This results in uncertainty for participants and introduces operational and risk management challenges. There is a need to establish clear scheme-level rules and guidance on liability and fraud handling to ensure consistency and confidence across the ecosystem.",
      "issueType": "PE",
      "dependencies": "",
      "relatedInitiative": "",
      "productsImpacted": "PayTo",
      "owner": "Edith",
      "priority": "HIGH",
      "horizon": "MEDIUM",
      "status": "WIP",
      "currentAction": "Makes reports action-oriented instead of note-oriented",
      "decisionNeeded": "",
      "notes": "Continued work on liability and claim process",
      "link1": "",
      "link2": "",
      "strategicPriorityId": "",
      "objectiveId": "OBJ01",
      "scorecardId": "KR01",
      "lastUpdated": "",
      "execSummaryTag": "Yes",
      "strategicObjective": "",
      "scorecardItem": "",
      "readinessStatus": "",
      "readinessRationale": "",
      "decisionOwner": "",
      "decisionDueDate": "",
      "dependencyOwnerType": "",
      "impactDriver": "",
      "roadmapAlignment": "",
      "externalMessagingStatus": "",
      "reviewDate": "",
      "isExecSummary": true,
      "useCases": [
        "All"
      ],
      "useCase": "All",
      "categories": [
        "Ecosystem Readiness & External Constraints"
      ],
      "products": [
        "PayTo"
      ],
      "product": "PayTo",
      "journeyStages": [
        "Payment processing"
      ],
      "strategicPriority": {},
      "objective": {
        "id": "OBJ01",
        "title": "Critically Important",
        "description": "Our infrastructure underpins economically significant flows in Australia"
      },
      "scorecard": {
        "id": "KR01",
        "keyResult": "Support Australia’s vision for a digital economy with NPP",
        "threshold": "Super enabled: all funds accepting NPP; PRN passed through",
        "target": "Threshold plus 4+ clearing houses using NPP",
        "maximum": "Target plus 200k PayTo Super transactions"
      },
      "useCaseRefs": [
        {
          "name": "All",
          "description": "Cross-cutting initiatives, capabilities or issues that apply across multiple strategic use cases rather than a single business scenario.",
          "desiredOutcome": "",
          "status": "Amber"
        }
      ],
      "capabilityRefs": [
        {
          "name": "PayTo",
          "owner": "Edith",
          "description": "Payment initiation capability"
        }
      ]
    },
    {
      "id": "ID-42",
      "useCasesImpacted": "All",
      "category": "Ecosystem Readiness & External Constraints",
      "journeyStage": "Set up & Account, onboarding",
      "title": "Fraud hold or rejection for PayTo transactions",
      "problemScenario": "Currently, once a PayTo agreement is accepted, Participants can apply fraud controls to the payment initation request. This is occuring even for payments in low risk use cases. This results in the payment initation either failing or it's held and no outcome can be passed onto the initatior. This impacts the experience particularly for use cases such as super. There needs to be enough information that is passed on the Initating Participant to appropriately advise the initatior. Additionally, friction should be applied appropriately to the use case so it doesn't impact the overall experience while protecting the Payer.",
      "issueType": "Dependency",
      "dependencies": "",
      "relatedInitiative": "",
      "productsImpacted": "PayTo",
      "owner": "Edith",
      "priority": "MEDIUM",
      "horizon": "MEDIUM",
      "status": "NOT STARTED",
      "currentAction": "",
      "decisionNeeded": "",
      "notes": "With the PayTo Super agreement, further discussions about what it means when we get to the payment",
      "link1": "",
      "link2": "",
      "strategicPriorityId": "SP07",
      "objectiveId": "OBJ01",
      "scorecardId": "KR01",
      "lastUpdated": "2026-06-26",
      "execSummaryTag": "Yes",
      "strategicObjective": "",
      "scorecardItem": "",
      "readinessStatus": "",
      "readinessRationale": "",
      "decisionOwner": "",
      "decisionDueDate": "",
      "dependencyOwnerType": "",
      "impactDriver": "",
      "roadmapAlignment": "",
      "externalMessagingStatus": "",
      "reviewDate": "",
      "isExecSummary": true,
      "useCases": [
        "All"
      ],
      "useCase": "All",
      "categories": [
        "Ecosystem Readiness & External Constraints"
      ],
      "products": [
        "PayTo"
      ],
      "product": "PayTo",
      "journeyStages": [
        "Set up & Account, onboarding"
      ],
      "strategicPriority": {
        "id": "SP07",
        "title": "Enhance fraud and scam protections"
      },
      "objective": {
        "id": "OBJ01",
        "title": "Critically Important",
        "description": "Our infrastructure underpins economically significant flows in Australia"
      },
      "scorecard": {
        "id": "KR01",
        "keyResult": "Support Australia’s vision for a digital economy with NPP",
        "threshold": "Super enabled: all funds accepting NPP; PRN passed through",
        "target": "Threshold plus 4+ clearing houses using NPP",
        "maximum": "Target plus 200k PayTo Super transactions"
      },
      "useCaseRefs": [
        {
          "name": "All",
          "description": "Cross-cutting initiatives, capabilities or issues that apply across multiple strategic use cases rather than a single business scenario.",
          "desiredOutcome": "",
          "status": "Amber"
        }
      ],
      "capabilityRefs": [
        {
          "name": "PayTo",
          "owner": "Edith",
          "description": "Payment initiation capability"
        }
      ]
    },
    {
      "id": "ID-43",
      "useCasesImpacted": "All",
      "category": "Payment Setup & Configuration",
      "journeyStage": "Set up & Account, onboarding",
      "title": "Lack of consistency and ease to approve PayTo agreements especially for businesses",
      "problemScenario": "Currently, the focus on CX has been within the retail banking channels however a similar issue exists for business banking channels. There is also added complexity with mutli-signatories and opt in processes. This results in a poor customer experience and impacts the adoption of PayTo if they cannot successful setup and approve PayTo agreements. There needs to be consistent CX that is also applied to the business channels to improve authorisation rates especially as many businesses are multi-banked",
      "issueType": "Gap",
      "dependencies": "",
      "relatedInitiative": "",
      "productsImpacted": "PayTo",
      "owner": "Edith",
      "priority": "MEDIUM",
      "horizon": "SHORT",
      "status": "NOT STARTED",
      "currentAction": "",
      "decisionNeeded": "",
      "notes": "This is not just affecting super but other implementation e.g. Xero. Understand the processes around who is approving and how it works in practice in a business context Next Steps: Enablement can work through the thinking of the processes and recommendations",
      "link1": "PayTo approval process for businesses - Move to NPP (MTN) Program Squad - Confluence",
      "link2": "",
      "strategicPriorityId": "",
      "objectiveId": "OBJ01",
      "scorecardId": "KR01",
      "lastUpdated": "2026-06-22",
      "execSummaryTag": "Yes",
      "strategicObjective": "",
      "scorecardItem": "",
      "readinessStatus": "",
      "readinessRationale": "",
      "decisionOwner": "",
      "decisionDueDate": "",
      "dependencyOwnerType": "",
      "impactDriver": "",
      "roadmapAlignment": "",
      "externalMessagingStatus": "",
      "reviewDate": "",
      "isExecSummary": true,
      "useCases": [
        "All"
      ],
      "useCase": "All",
      "categories": [
        "Payment Setup & Configuration"
      ],
      "products": [
        "PayTo"
      ],
      "product": "PayTo",
      "journeyStages": [
        "Set up & Account, onboarding"
      ],
      "strategicPriority": {},
      "objective": {
        "id": "OBJ01",
        "title": "Critically Important",
        "description": "Our infrastructure underpins economically significant flows in Australia"
      },
      "scorecard": {
        "id": "KR01",
        "keyResult": "Support Australia’s vision for a digital economy with NPP",
        "threshold": "Super enabled: all funds accepting NPP; PRN passed through",
        "target": "Threshold plus 4+ clearing houses using NPP",
        "maximum": "Target plus 200k PayTo Super transactions"
      },
      "useCaseRefs": [
        {
          "name": "All",
          "description": "Cross-cutting initiatives, capabilities or issues that apply across multiple strategic use cases rather than a single business scenario.",
          "desiredOutcome": "",
          "status": "Amber"
        }
      ],
      "capabilityRefs": [
        {
          "name": "PayTo",
          "owner": "Edith",
          "description": "Payment initiation capability"
        }
      ]
    },
    {
      "id": "ID-44",
      "useCasesImpacted": "All",
      "category": "Standardisation & Interoperability",
      "journeyStage": "Set up & Account, onboarding",
      "title": "Lack of standardised PayTo APIs hinders adoption by Digital Service Providers",
      "problemScenario": "Currently, Participants and PSPs have built bespoked PayTo APIs implementation This results in DSPs having to implement and maintain different integration or prevent DSPs from implementing. There needs to be a level of standardisation to enable DSPs to adopt while also allowing competition and innovation.",
      "issueType": "Opportunity",
      "dependencies": "A2A vision",
      "relatedInitiative": "",
      "productsImpacted": "PayTo",
      "owner": "Edith",
      "priority": "MEDIUM",
      "horizon": "LONG",
      "status": "NOT STARTED",
      "currentAction": "",
      "decisionNeeded": "",
      "notes": "",
      "link1": "",
      "link2": "",
      "strategicPriorityId": "",
      "objectiveId": "OBJ01",
      "scorecardId": "KR01",
      "lastUpdated": "",
      "execSummaryTag": "Yes",
      "strategicObjective": "",
      "scorecardItem": "",
      "readinessStatus": "",
      "readinessRationale": "",
      "decisionOwner": "",
      "decisionDueDate": "",
      "dependencyOwnerType": "",
      "impactDriver": "",
      "roadmapAlignment": "",
      "externalMessagingStatus": "",
      "reviewDate": "",
      "isExecSummary": true,
      "useCases": [
        "All"
      ],
      "useCase": "All",
      "categories": [
        "Standardisation & Interoperability"
      ],
      "products": [
        "PayTo"
      ],
      "product": "PayTo",
      "journeyStages": [
        "Set up & Account, onboarding"
      ],
      "strategicPriority": {},
      "objective": {
        "id": "OBJ01",
        "title": "Critically Important",
        "description": "Our infrastructure underpins economically significant flows in Australia"
      },
      "scorecard": {
        "id": "KR01",
        "keyResult": "Support Australia’s vision for a digital economy with NPP",
        "threshold": "Super enabled: all funds accepting NPP; PRN passed through",
        "target": "Threshold plus 4+ clearing houses using NPP",
        "maximum": "Target plus 200k PayTo Super transactions"
      },
      "useCaseRefs": [
        {
          "name": "All",
          "description": "Cross-cutting initiatives, capabilities or issues that apply across multiple strategic use cases rather than a single business scenario.",
          "desiredOutcome": "",
          "status": "Amber"
        }
      ],
      "capabilityRefs": [
        {
          "name": "PayTo",
          "owner": "Edith",
          "description": "Payment initiation capability"
        }
      ]
    },
    {
      "id": "ID-45",
      "useCasesImpacted": "Super",
      "category": "Reconciliation, Reporting & Traceability",
      "journeyStage": "Receiving, validating, reconciling, and reporting",
      "title": "Inconsistent pass through of the PRN",
      "problemScenario": "Currently, the end to end field which the PRN is populated in, is not consistently exposed to the Payee. This results in the super fund unable to reconcile the payment. This means that they may need to do this manually. This can impact the employer's ability to meet their Payday super obligation There needs to be the pass through of the PRN in full in reporting that the Payee can use as part of their reconciliation",
      "issueType": "Risk",
      "dependencies": "",
      "relatedInitiative": "",
      "productsImpacted": "Reporting",
      "owner": "Bianca",
      "priority": "HIGH",
      "horizon": "SHORT",
      "status": "WIP",
      "currentAction": "Makes reports action-oriented instead of note-oriented",
      "decisionNeeded": "",
      "notes": "Analysing how the PRN is being populated",
      "link1": "PRN Reconciliation - Troubleshooting - Move to NPP (MTN) Program Squad - Confluence",
      "link2": "",
      "strategicPriorityId": "SP01",
      "objectiveId": "OBJ01",
      "scorecardId": "KR01",
      "lastUpdated": "2026-06-22",
      "execSummaryTag": "Yes",
      "strategicObjective": "",
      "scorecardItem": "",
      "readinessStatus": "",
      "readinessRationale": "",
      "decisionOwner": "",
      "decisionDueDate": "",
      "dependencyOwnerType": "",
      "impactDriver": "",
      "roadmapAlignment": "",
      "externalMessagingStatus": "",
      "reviewDate": "",
      "isExecSummary": true,
      "useCases": [
        "Super"
      ],
      "useCase": "Super",
      "categories": [
        "Reconciliation, Reporting & Traceability"
      ],
      "products": [
        "Reporting"
      ],
      "product": "Reporting",
      "journeyStages": [
        "Receiving, validating, reconciling, and reporting"
      ],
      "strategicPriority": {
        "id": "SP01",
        "title": "Continue the Move to NPP and deliver economic transformation opportunities"
      },
      "objective": {
        "id": "OBJ01",
        "title": "Critically Important",
        "description": "Our infrastructure underpins economically significant flows in Australia"
      },
      "scorecard": {
        "id": "KR01",
        "keyResult": "Support Australia’s vision for a digital economy with NPP",
        "threshold": "Super enabled: all funds accepting NPP; PRN passed through",
        "target": "Threshold plus 4+ clearing houses using NPP",
        "maximum": "Target plus 200k PayTo Super transactions"
      },
      "useCaseRefs": [
        {
          "name": "Super",
          "description": "Enable the superannuation ecosystem to adopt NPP and related capabilities, supporting Payday Super legislation, improved payment processing, reconciliation, and industry readiness.",
          "desiredOutcome": "Employers, clearing houses and super funds can process super contributions using NPP with end-to-end reconciliation.",
          "status": "Amber"
        }
      ],
      "capabilityRefs": [
        {
          "name": "Reporting",
          "owner": "Bianca",
          "description": "Reporting and reconciliation"
        }
      ]
    },
    {
      "id": "ID-46",
      "useCasesImpacted": "Super",
      "category": "Exceptions, Returns & Error Handling",
      "journeyStage": "Investigation and returns (unhappy path)",
      "title": "Lack of details to return payment back to source",
      "problemScenario": "Currently, under BECS, the Payer account details are provided to the Payee so that they can use this to make payments back to the source. This information is not available for NPP payments. This results in customers unable to pay back to source by sending a new payment without contacting their bank. There needs to be the ability for a Payee to return payments back to the source (either as an unsolicited payment return or as a brand new payment)",
      "issueType": "Product Idea",
      "dependencies": "",
      "relatedInitiative": "",
      "productsImpacted": "Reporting",
      "owner": "Nick",
      "priority": "HIGH",
      "horizon": "MEDIUM",
      "status": "NOT STARTED",
      "currentAction": "",
      "decisionNeeded": "",
      "notes": "Discussions have been had about the Osko CX",
      "link1": "NPP for super contribution refunds - Move to NPP (MTN) Program Squad - Confluence",
      "link2": "PRN reporting and Enablers analysis and tracking.xlsx",
      "strategicPriorityId": "SP01",
      "objectiveId": "OBJ01",
      "scorecardId": "KR01",
      "lastUpdated": "2026-04-01",
      "execSummaryTag": "Yes",
      "strategicObjective": "",
      "scorecardItem": "",
      "readinessStatus": "",
      "readinessRationale": "",
      "decisionOwner": "",
      "decisionDueDate": "",
      "dependencyOwnerType": "",
      "impactDriver": "",
      "roadmapAlignment": "",
      "externalMessagingStatus": "",
      "reviewDate": "",
      "isExecSummary": true,
      "useCases": [
        "Super"
      ],
      "useCase": "Super",
      "categories": [
        "Exceptions, Returns & Error Handling"
      ],
      "products": [
        "Reporting"
      ],
      "product": "Reporting",
      "journeyStages": [
        "Investigation and returns (unhappy path)"
      ],
      "strategicPriority": {
        "id": "SP01",
        "title": "Continue the Move to NPP and deliver economic transformation opportunities"
      },
      "objective": {
        "id": "OBJ01",
        "title": "Critically Important",
        "description": "Our infrastructure underpins economically significant flows in Australia"
      },
      "scorecard": {
        "id": "KR01",
        "keyResult": "Support Australia’s vision for a digital economy with NPP",
        "threshold": "Super enabled: all funds accepting NPP; PRN passed through",
        "target": "Threshold plus 4+ clearing houses using NPP",
        "maximum": "Target plus 200k PayTo Super transactions"
      },
      "useCaseRefs": [
        {
          "name": "Super",
          "description": "Enable the superannuation ecosystem to adopt NPP and related capabilities, supporting Payday Super legislation, improved payment processing, reconciliation, and industry readiness.",
          "desiredOutcome": "Employers, clearing houses and super funds can process super contributions using NPP with end-to-end reconciliation.",
          "status": "Amber"
        }
      ],
      "capabilityRefs": [
        {
          "name": "Reporting",
          "owner": "Bianca",
          "description": "Reporting and reconciliation"
        }
      ]
    },
    {
      "id": "ID-48",
      "useCasesImpacted": "All",
      "category": "Ecosystem Readiness & External Constraints",
      "journeyStage": "Receiving, validating, reconciling, and reporting",
      "title": "Lack of business account reach for PayTo",
      "problemScenario": "Currently, there a large portion of accounts that aren't PayTo enable for businesses (including those with the majors) This results in PayTo agreement being rejected or confused customers who are trying to set PayTo agreements out There needs to be better coverage for business accounts to improve experiences for the initatior.",
      "issueType": "Dependency",
      "dependencies": "",
      "relatedInitiative": "",
      "productsImpacted": "PayTo",
      "owner": "Edith",
      "priority": "HIGH",
      "horizon": "MEDIUM",
      "status": "WIP",
      "currentAction": "",
      "decisionNeeded": "",
      "notes": "",
      "link1": "",
      "link2": "",
      "strategicPriorityId": "",
      "objectiveId": "OBJ01",
      "scorecardId": "KR01",
      "lastUpdated": "2026-06-26",
      "execSummaryTag": "Yes",
      "strategicObjective": "",
      "scorecardItem": "",
      "readinessStatus": "",
      "readinessRationale": "",
      "decisionOwner": "",
      "decisionDueDate": "",
      "dependencyOwnerType": "",
      "impactDriver": "",
      "roadmapAlignment": "",
      "externalMessagingStatus": "",
      "reviewDate": "",
      "isExecSummary": true,
      "useCases": [
        "All"
      ],
      "useCase": "All",
      "categories": [
        "Ecosystem Readiness & External Constraints"
      ],
      "products": [
        "PayTo"
      ],
      "product": "PayTo",
      "journeyStages": [
        "Receiving, validating, reconciling, and reporting"
      ],
      "strategicPriority": {},
      "objective": {
        "id": "OBJ01",
        "title": "Critically Important",
        "description": "Our infrastructure underpins economically significant flows in Australia"
      },
      "scorecard": {
        "id": "KR01",
        "keyResult": "Support Australia’s vision for a digital economy with NPP",
        "threshold": "Super enabled: all funds accepting NPP; PRN passed through",
        "target": "Threshold plus 4+ clearing houses using NPP",
        "maximum": "Target plus 200k PayTo Super transactions"
      },
      "useCaseRefs": [
        {
          "name": "All",
          "description": "Cross-cutting initiatives, capabilities or issues that apply across multiple strategic use cases rather than a single business scenario.",
          "desiredOutcome": "",
          "status": "Amber"
        }
      ],
      "capabilityRefs": [
        {
          "name": "PayTo",
          "owner": "Edith",
          "description": "Payment initiation capability"
        }
      ]
    }
  ]
};
