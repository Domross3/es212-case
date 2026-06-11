/**
 * Verbatim content from the ES 212/UC 214 Fall 2025 syllabus (Johnson),
 * structured so coverage chips can be attached to the real text.
 * Source of truth: /public/es212-syllabus.pdf
 */

export const ES212_HEADER = {
  course: "ES 212 / UC 214 — Entrepreneurial Business Basics",
  term: "Fall 2025 · Section 003 · Mike Johnson, MD",
};

export const ES212_OVERVIEW: string[] = [
  "This course introduces you to business basics that are useful in entrepreneurial businesses and across business stages. We will introduce foundational business concepts and consider how entrepreneurial ventures create value.",
  "We will consider what makes for a good entrepreneurial idea, how entrepreneurial ventures work, and how entrepreneurial companies turn ideas into products and services. Students will evaluate opportunities and challenges in entrepreneurial businesses, understand ways to mitigate risks, and develop a foundation to further understand entrepreneurship and business for your time at U of M and in your career.",
];

export const ES212_OBJECTIVES_INTRO =
  "This course introduces you to fundamental concepts in business and entrepreneurship and essential skill development for entrepreneurs including innovation / creativity, analytical and integrative thinking, decision-making under uncertainty, project management and working on diverse teams, and communicating effectively.";

export const ES212_KNOWLEDGE: string[] = [
  "Foundational business areas, concepts, and terminology",
  "What entrepreneurship is and why it matters to society",
  "Key challenges faced by entrepreneurs",
  "How to understand customer needs",
  "How entrepreneurs create value for customers and users",
  "Different types of business models",
  "Product design and development",
  "Markets and market research",
  "Introductory economic ideas",
  "Introductory accounting concepts and startup financials",
  "Company formation and team-building",
  "Startup financing and investor perspective",
  "Startup presentations and plans",
];

/** Verbatim skills bullets; index aligns with SKILLS in lib/coverage.ts */
export const ES212_SKILLS_TEXT: string[] = [
  "Develop hypotheses on entrepreneurial value creation",
  "Gather relevant, important information and effectively synthesize findings from research and data",
  "Communicate clearly and effectively through presentations and written deliverables",
  "Develop project management and team skills",
  "Develop business viability analysis skills",
  "Formulate an innovation strategy and apply design skills through action-based learning",
];

export type Es212Module = {
  /** matches Unit.id in lib/coverage.ts; 14 = wrap-up, no mapping */
  id: number;
  title: string;
  topics: string[];
  materials?: string[];
};

export const ES212_MODULES: Es212Module[] = [
  {
    id: 1,
    title: "Introduction to business, entrepreneurship, and this course",
    topics: [
      "Foundational business concepts and terminology",
      "What is entrepreneurship? What are different types of entrepreneurship?",
      "What is this course about?",
      "Key tasks and challenges in entrepreneurship",
    ],
    materials: ["Syllabus"],
  },
  {
    id: 2,
    title: "Entrepreneurship and creating value",
    topics: [
      "Thinking about entrepreneurial problems and customer needs",
      "What is a value proposition?",
    ],
  },
  {
    id: 3,
    title: "Trends, technology, and thinking about the future",
    topics: [
      "Trends analysis and technology forecasting",
      "How do you think about entrepreneurial opportunities in these trends?",
    ],
    materials: ['"How Computers Changed Everything", Johnson'],
  },
  {
    id: 4,
    title: "Intro to business models",
    topics: [
      "What is a business model? Overview of different business model concepts",
      "How is a business model developed and used?",
    ],
    materials: ['"Business Model Analysis for Entrepreneurs", Eisenmann'],
  },
  {
    id: 5,
    title: "Entrepreneurial opportunities and business models",
    topics: [
      "What makes an entrepreneurial opportunity worth pursuing?",
      "Intro to presentations and plans",
    ],
    materials: ['"Hypothesis-Driven Entrepreneurship", Eisenmann, Ries, Dillard'],
  },
  {
    id: 6,
    title: "Entrepreneurship and society",
    topics: [
      "How social entrepreneurship ventures create value",
      "Thinking about needs, opportunities, and measuring impact",
    ],
    materials: ["University of Michigan Social Venture Fund on Triple Bottom Line"],
  },
  {
    id: 7,
    title: "Basic economic ideas for startups",
    topics: [
      "Markets and pricing",
      "Supply and demand",
      "Pricing and elasticity, substitutes and complements",
    ],
    materials: [
      '"Marketing Analysis Toolkit: Pricing and Profitability Analysis", Steenburgh, Avery',
    ],
  },
  {
    id: 8,
    title: "Design and production of products and services",
    topics: [
      "What is customer discovery?",
      "Product design, product development phases",
      "Customer feedback, iterative process",
    ],
    materials: ['"Customer Movie Experience" exercise'],
  },
  {
    id: 9,
    title: "Market entry planning, marketing, and selling, product / market fit",
    topics: [
      "Describing and sizing a market, market research techniques",
      "Promotion and selling in a startup",
      "Product / market fit and startup metrics",
      "Risks and mitigation",
    ],
    materials: [
      '"Food Truck Challenge", Roberto',
      '"How Superhuman Built an Engine to Find Product / Market Fit", Vohra, firstround.com',
    ],
  },
  {
    id: 10,
    title: "Forming a company",
    topics: [
      "Choosing a business structure",
      "Introduction to business contracts and intellectual property (IP)",
      "Regulatory context for entrepreneurial ventures",
    ],
  },
  {
    id: 11,
    title: "Entrepreneurial teams",
    topics: [
      "Building an entrepreneurial team",
      "Establishing roles and founder shares in the company",
    ],
    materials: [
      '"Lean in Stories: Heather Hiles", Hiles, leanin.org',
      '"The Management Team: While Building Usage", Wilson, avc.com',
    ],
  },
  {
    id: 12,
    title: "Startup projections and financials",
    topics: [
      "Assumptions for financial projections",
      "Intro to financial statements (income statement, balance sheet, cash flow statement)",
      "Value-creating milestones",
    ],
    materials: ["Notes on Projections and Milestones, Johnson"],
  },
  {
    id: 13,
    title: "Funding for Startups",
    topics: [
      "Overview of funding sources",
      "What do investors look for?",
      "Plans and presentations",
    ],
    materials: ['"Financing New Ventures", Kerr, Nanda'],
  },
  {
    id: 14,
    title: "Fitting it all together",
    topics: ["What did you learn?", "How will you take this forward?"],
  },
];
