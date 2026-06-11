export type Citation = {
  slug: string;
  course: string;
  quote: string;
  note: string;
};

export type Unit = {
  id: number;
  title: string;
  topics: string;
  citations: Citation[]; // ordered strongest-first
};

export type SkillRow = {
  skill: string;
  citations: Citation[]; // ordered strongest-first
};

export const SUPPLEMENTARY_SLUGS = ["entr-407-entrepreneurship-hour"];

export const SKILLS: SkillRow[] = [
  {
    skill: "Develop hypotheses on entrepreneurial value creation",
    citations: [
      {
        slug: "dis-innovation-entrepreneurship-europe",
        course: "DIS Copenhagen",
        quote: "develop hypotheses about customers and solutions",
        note: "Hypotheses validated with real customers via surveys, interviews, MVPs",
      },
      {
        slug: "elp-sem1-management-leadership",
        course: "ELP 1",
        quote: "actively test approaches, ideas, products, and services",
        note: "Validation is a named ELP learning outcome",
      },
    ],
  },
  {
    skill:
      "Gather relevant, important information and effectively synthesize findings from research and data",
    citations: [
      {
        slug: "elp-sem1-management-leadership",
        course: "ELP 1",
        quote: "Conduct Industry Assessments",
        note: "Industry research and analysis as a named outcome",
      },
      {
        slug: "strat-400-sustainable-development",
        course: "STRAT 400",
        quote: "grounded in models, evidence, analysis of tradeoffs",
        note: "Position papers held to op-ed evidentiary standard",
      },
      {
        slug: "dis-innovation-entrepreneurship-europe",
        course: "DIS Copenhagen",
        quote: "competitive landscape, trends, opportunity sizing, target market size",
        note: "Graded market-analysis research paper",
      },
    ],
  },
  {
    skill:
      "Communicate clearly and effectively through presentations and written deliverables",
    citations: [
      {
        slug: "eecs-441-mobile-app-dev-entrepreneurs",
        course: "EECS 441",
        quote: "Company Preso",
        note: "Seven graded presentations across the semester",
      },
      {
        slug: "elp-sem2-action-and-vision",
        course: "ELP 2",
        quote: "Proposal, 10 Updates, Final Presentation",
        note: "Sustained written + oral delivery on one venture",
      },
      {
        slug: "strat-445-base-of-pyramid",
        course: "STRAT 445",
        quote: "~25-page final report",
        note: "Long-form written analysis plus in-class presentations",
      },
    ],
  },
  {
    skill: "Develop project management and team skills",
    citations: [
      {
        slug: "elp-sem2-action-and-vision",
        course: "ELP 2",
        quote: "GANTT charts",
        note: "Formal project-management tooling on the capstone",
      },
      {
        slug: "dis-entrepreneurship-practicum",
        course: "DIS Practicum",
        quote: "Project management, proactiveness and commitment",
        note: "40% of the grade, assessed inside a real startup",
      },
      {
        slug: "mo-302-positively-leading-people-organizations",
        course: "MO 302",
        quote: "Working in Teams I & II",
        note: "Ross core course on teams and organizations",
      },
      {
        slug: "psych-223-entrepreneurial-creativity",
        course: "PSYCH 223",
        quote: "creative member of a team",
        note: "Team creativity with peer accountability",
      },
    ],
  },
  {
    skill: "Develop business viability analysis skills",
    citations: [
      {
        slug: "fin-302-making-financial-decisions",
        course: "FIN 302",
        quote: "Project Valuation and Investment Decision Rules",
        note: "NPV/IRR — the quantitative core of viability analysis",
      },
      {
        slug: "strat-445-base-of-pyramid",
        course: "STRAT 445",
        quote: "Evaluating a Venture",
        note: "Dedicated two-session venture-evaluation module",
      },
      {
        slug: "entr-410-finding-your-venture",
        course: "ENTR 410",
        quote: "Prioritize and execute the most important steps to launch a business",
        note: "Opportunity evaluation against a high standard",
      },
    ],
  },
  {
    skill:
      "Formulate an innovation strategy and apply design skills through action-based learning",
    citations: [
      {
        slug: "eecs-441-mobile-app-dev-entrepreneurs",
        course: "EECS 441",
        quote: "inventing, building, testing, and marketing",
        note: "Action-based by construction: ship a real product",
      },
      {
        slug: "dis-innovation-entrepreneurship-europe",
        course: "DIS Copenhagen",
        quote: "think like an innovator",
        note: "Lean Startup incubator with design frameworks",
      },
      {
        slug: "psych-223-entrepreneurial-creativity",
        course: "PSYCH 223",
        quote: "comes up with and implements a creative idea",
        note: "A full course on the psychology and practice of creativity",
      },
      {
        slug: "elp-sem1-management-leadership",
        course: "ELP 1",
        quote: "Brainstorming, Creativity, Innovation, Project and Program Management",
        note: "Named Innovation & Execution module",
      },
    ],
  },
];

export const UNITS: Unit[] = [
  {
    id: 1,
    title: "Introduction to business & entrepreneurship",
    topics:
      "Foundational business concepts and terminology · types of entrepreneurship · key tasks and challenges",
    citations: [
      {
        slug: "entr-410-finding-your-venture",
        course: "ENTR 410",
        quote:
          'Gain an understanding of practical "how to start a business" fundamentals',
        note: "Course Dom later helped teach as Instructional Aide",
      },
      {
        slug: "elp-sem1-management-leadership",
        course: "ELP 1",
        quote:
          "opportunity identification, innovation, experimentation, relationship building, risk management, and perseverance",
        note: "The six entrepreneurial-mindset behaviors the ELP curriculum is built on",
      },
      {
        slug: "dis-entrepreneurship-practicum",
        course: "DIS Practicum",
        quote:
          "experience first-hand the challenges young companies face getting products and services to market",
        note: "~100 hours embedded in a real Danish startup",
      },
    ],
  },
  {
    id: 2,
    title: "Creating value · customer needs · value proposition",
    topics: "Entrepreneurial problems and customer needs · what is a value proposition",
    citations: [
      {
        slug: "entr-410-finding-your-venture",
        course: "ENTR 410",
        quote: "Use customer interviews to find business-to-business opportunities",
        note: "Real customer interviews outside the classroom, graded weekly",
      },
      {
        slug: "dis-innovation-entrepreneurship-europe",
        course: "DIS Copenhagen",
        quote:
          "Methods for identifying customer needs and continuously getting feedback on solutions",
        note: "Value Proposition Design is a core course framework",
      },
      {
        slug: "eecs-441-mobile-app-dev-entrepreneurs",
        course: "EECS 441",
        quote: "Customer Preso + MVP Design",
        note: "Graded customer analysis driving product design",
      },
      {
        slug: "strat-445-base-of-pyramid",
        course: "STRAT 445",
        quote: "Creating Mutual Value",
        note: "A dedicated two-session module",
      },
    ],
  },
  {
    id: 3,
    title: "Trends, technology & thinking about the future",
    topics: "Trends analysis · technology forecasting · opportunities in trends",
    citations: [
      {
        slug: "eecs-441-mobile-app-dev-entrepreneurs",
        course: "EECS 441",
        quote:
          "technology adoption lifecycle, market segmentation, marketing strategy for technology products, mainstream market entry",
        note: "Crossing the Chasm is required reading",
      },
      {
        slug: "mo-302-positively-leading-people-organizations",
        course: "MO 302",
        quote: "Business and Technology",
        note: "Dedicated session",
      },
      {
        slug: "entr-407-entrepreneurship-hour",
        course: "ENTR 407",
        quote: "Technology innovation",
        note: "Supplementary: practitioner speaker series",
      },
    ],
  },
  {
    id: 4,
    title: "Business models",
    topics: "What a business model is · concepts · how one is developed and used",
    citations: [
      {
        slug: "elp-sem1-management-leadership",
        course: "ELP 1",
        quote: "Business Models, Legal Overview, Finance and Investment",
        note: "Business Model Generation (Osterwalder) is a course text",
      },
      {
        slug: "entr-410-finding-your-venture",
        course: "ENTR 410",
        quote: "10 Business Models: 2 Pains x 5 solutions each",
        note: "Graded business-model generation exercise",
      },
      {
        slug: "dis-innovation-entrepreneurship-europe",
        course: "DIS Copenhagen",
        quote: "Developing a Business Model for a startup venture",
        note: "Business Model Canvas built, iterated, and graded",
      },
      {
        slug: "strat-445-base-of-pyramid",
        course: "STRAT 445",
        quote: "BoP Business Models",
        note: "Business-model analysis module with case write-ups",
      },
    ],
  },
  {
    id: 5,
    title: "Entrepreneurial opportunities worth pursuing",
    topics: "What makes an opportunity worth pursuing · hypothesis-driven entrepreneurship · presentations and plans",
    citations: [
      {
        slug: "entr-410-finding-your-venture",
        course: "ENTR 410",
        quote: "Evaluate Opportunities Against a High Standard",
        note: "The course's organizing question",
      },
      {
        slug: "dis-innovation-entrepreneurship-europe",
        course: "DIS Copenhagen",
        quote: "develop hypotheses about customers and solutions",
        note: "Hypothesis validation through surveys, interviews, and MVPs",
      },
      {
        slug: "elp-sem2-action-and-vision",
        course: "ELP 2",
        quote: "idea, feasibility, impact, team, and stage",
        note: "Capstone selection criteria — opportunity evaluation in practice",
      },
    ],
  },
  {
    id: 6,
    title: "Entrepreneurship & society",
    topics: "Social-venture value creation · needs, opportunities, measuring impact · triple bottom line",
    citations: [
      {
        slug: "strat-400-sustainable-development",
        course: "STRAT 400",
        quote: "triple bottom line, sustainability reporting, impact investing",
        note: "A full Ross course on ES 212's single society session",
      },
      {
        slug: "strat-445-base-of-pyramid",
        course: "STRAT 445",
        quote: "deliver financial returns and social impact",
        note: "Semester-long social-venture assessment project",
      },
    ],
  },
  {
    id: 7,
    title: "Basic economic ideas for startups",
    topics: "Markets and pricing · supply and demand · elasticity, substitutes and complements",
    citations: [
      {
        slug: "econ-101-microeconomics",
        course: "ECON 101",
        quote: "Supply and Demand",
        note: "Full dedicated micro course: elasticity, utility, market structure, pricing",
      },
      {
        slug: "strat-400-sustainable-development",
        course: "STRAT 400",
        quote: "tragedy of the commons, comparative advantage",
        note: "Applied market economics: externalities, carbon pricing",
      },
    ],
  },
  {
    id: 8,
    title: "Design & production of products and services",
    topics: "Customer discovery · product design and development phases · feedback and iteration",
    citations: [
      {
        slug: "eecs-441-mobile-app-dev-entrepreneurs",
        course: "EECS 441",
        quote: "the app MUST be published",
        note: "MVP1 → live demo → results → MVP2, shipped to a real market",
      },
      {
        slug: "dis-innovation-entrepreneurship-europe",
        course: "DIS Copenhagen",
        quote: "Building Minimum Viable Products and testing them with customers",
        note: "Lean Startup incubator format",
      },
      {
        slug: "entr-410-finding-your-venture",
        course: "ENTR 410",
        quote: "Talking to customers & ListeningFest",
        note: "Structured customer-interview program",
      },
      {
        slug: "elp-sem1-management-leadership",
        course: "ELP 1",
        quote: "running customer discovery experiments, building prototypes",
        note: "Hands-on group project requirements",
      },
    ],
  },
  {
    id: 9,
    title: "Market entry, marketing, selling & product/market fit",
    topics: "Sizing a market · market research · promotion and selling · PMF and startup metrics · risks and mitigation",
    citations: [
      {
        slug: "entr-410-finding-your-venture",
        course: "ENTR 410",
        quote: "Learn how to sell your product to a customer by actually doing it",
        note: "Dedicated marketing and sales weeks with graded assets",
      },
      {
        slug: "dis-innovation-entrepreneurship-europe",
        course: "DIS Copenhagen",
        quote: "competitive landscape, trends, opportunity sizing, target market size",
        note: "Graded market-analysis paper",
      },
      {
        slug: "eecs-441-mobile-app-dev-entrepreneurs",
        course: "EECS 441",
        quote: "marketing of mobile apps",
        note: "Marketing a shipped product; Crossing the Chasm on market entry",
      },
      {
        slug: "aalto-international-strategy",
        course: "Aalto",
        quote: "entry strategy, entry mode choice",
        note: "Advanced international market-entry strategy",
      },
      {
        slug: "strat-445-base-of-pyramid",
        course: "STRAT 445",
        quote: "Reaching Scale",
        note: "Two-session module on scaling into new markets",
      },
    ],
  },
  {
    id: 10,
    title: "Forming a company",
    topics: "Business structure · contracts and IP · regulatory context",
    citations: [
      {
        slug: "elp-sem1-management-leadership",
        course: "ELP 1",
        quote: "consulting with an attorney for a contract or legal document",
        note: "Legal Overview module with real attorney consultation",
      },
      {
        slug: "entr-410-finding-your-venture",
        course: "ENTR 410",
        quote: "Get the Legal Basics Right",
        note: "Startup launch week",
      },
      {
        slug: "strat-400-sustainable-development",
        course: "STRAT 400",
        quote: "Benefit Corporations, B Corp, L3C",
        note: "Corporate forms and governance structures",
      },
    ],
  },
  {
    id: 11,
    title: "Entrepreneurial teams",
    topics: "Building a team · roles and founder shares",
    citations: [
      {
        slug: "mo-302-positively-leading-people-organizations",
        course: "MO 302",
        quote: "Working in Teams I & II",
        note: "Ross core course: teams, org design, motivation and incentives",
      },
      {
        slug: "elp-sem2-action-and-vision",
        course: "ELP 2",
        quote: "leadership, team building, and culture",
        note: "Explicit course focus; grew a startup team in the capstone",
      },
      {
        slug: "eecs-441-mobile-app-dev-entrepreneurs",
        course: "EECS 441",
        quote: "project-based, team of 3",
        note: "Venture team across a full build-and-launch cycle",
      },
      {
        slug: "psych-223-entrepreneurial-creativity",
        course: "PSYCH 223",
        quote: "leading creative teams",
        note: "Psychology of team creativity and leadership",
      },
    ],
  },
  {
    id: 12,
    title: "Startup projections & financials",
    topics: "Financial projections · income statement, balance sheet, cash flow statement · value-creating milestones",
    citations: [
      {
        slug: "acc-471-principles-of-accounting",
        course: "ACC 471",
        quote: "Statement of cash flows",
        note: "Full Ross accounting course: builds the statements from the ground up",
      },
      {
        slug: "fin-302-making-financial-decisions",
        course: "FIN 302",
        quote: "Project Valuation and Investment Decision Rules",
        note: "Ross finance course: projections, valuation, NPV/IRR",
      },
      {
        slug: "elp-sem1-management-leadership",
        course: "ELP 1",
        quote: "The Essentials of Finance and Accounting for Nonfinancial Managers",
        note: "Finance & Investment module with three accounting/finance texts",
      },
      {
        slug: "dis-innovation-entrepreneurship-europe",
        course: "DIS Copenhagen",
        quote: "Financial projections",
        note: "Required element of the graded investor pitch",
      },
    ],
  },
  {
    id: 13,
    title: "Funding for startups",
    topics: "Funding sources · what investors look for · plans and presentations",
    citations: [
      {
        slug: "elp-sem2-action-and-vision",
        course: "ELP 2",
        quote: "NSF SBIR Phase I Project Pitch",
        note: "Capstone is a real grant-format funding application",
      },
      {
        slug: "dis-innovation-entrepreneurship-europe",
        course: "DIS Copenhagen",
        quote: "pitch to real investors and serial entrepreneurs",
        note: "Final pitch judged by a professional investor panel",
      },
      {
        slug: "elp-sem1-management-leadership",
        course: "ELP 1",
        quote: "Venture Deals",
        note: "Feld & Mendelson on term sheets and VC mechanics",
      },
      {
        slug: "fin-302-making-financial-decisions",
        course: "FIN 302",
        quote: "relationship between risk and return",
        note: "The investor's analytical lens: risk, return, cost of capital",
      },
      {
        slug: "entr-407-entrepreneurship-hour",
        course: "ENTR 407",
        quote: "Financing, fundraising, venture capital",
        note: "Supplementary: VC and founder speaker sessions",
      },
    ],
  },
];
