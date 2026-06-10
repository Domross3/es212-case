export const QUESTION_BANK = [
  "Did Dom cover supply and demand, pricing, and elasticity anywhere?",
  "Where did Dom learn financial statements?",
  "Which courses covered business models?",
  "What hands-on customer discovery has Dom done?",
  "What startup funding or investor-perspective experience does he have?",
  "What does Dom's coursework NOT cover from ES 212?",
  "How does ELP's project work compare to ES 212's venture project?",
  "What did the DIS Copenhagen practicum involve?",
  "Has Dom covered company formation, contracts, and IP?",
  "Which ES 212 topics has Dom covered more than once?",
];

export function sampleQuestions(n: number, exclude: string[] = []): string[] {
  const pool = QUESTION_BANK.filter((q) => !exclude.includes(q));
  const out: string[] = [];
  const copy = [...pool];
  while (out.length < n && copy.length > 0) {
    const i = Math.floor(Math.random() * copy.length);
    out.push(copy.splice(i, 1)[0]);
  }
  return out;
}
