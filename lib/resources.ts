export type Section = { h: string; p?: string[]; list?: string[]; table?: { head: string[]; rows: string[][] } };
export type Article = { slug: string; title: string; description: string; programme: "MYP" | "DP" | "Both"; topic: string; date: string; readMins: number; intro: string; sections: Section[]; related?: { label: string; href: string } };

export const articles: Article[] = [
  {
    slug: "myp-assessment-criteria-by-subject-group",
    title: "MYP assessment criteria by subject group: the complete list",
    description: "All four MYP assessment criteria (A–D) for every subject group, how the 0–8 bands work, and how criterion totals become a final 1–7 grade.",
    programme: "MYP", topic: "Assessment", date: "2026-09-30", readMins: 6,
    intro: "Every MYP subject group is assessed against four criteria, A to D. Each criterion is marked on a 0–8 scale using band descriptors, and the four scores add up to a total out of 32. This guide lists the criteria for each subject group and explains how final grades are reached.",
    sections: [
      { h: "Criteria for each subject group", table: { head: ["Subject group", "A", "B", "C", "D"], rows: [
        ["Language and literature", "Analysing", "Organizing", "Producing text", "Using language"],
        ["Language acquisition", "Listening", "Reading", "Speaking", "Writing"],
        ["Individuals and societies", "Knowing and understanding", "Investigating", "Communicating", "Thinking critically"],
        ["Sciences", "Knowing and understanding", "Inquiring and designing", "Processing and evaluating", "Reflecting on the impacts of science"],
        ["Mathematics", "Knowing and understanding", "Investigating patterns", "Communicating", "Applying mathematics in real-life contexts"],
        ["Arts", "Investigating", "Developing", "Creating/performing", "Evaluating"],
        ["Physical and health education", "Knowing and understanding", "Planning for performance", "Applying and performing", "Reflecting and improving performance"],
        ["Design", "Inquiring and analysing", "Developing ideas", "Creating the solution", "Evaluating"],
      ] } },
      { h: "How the 0–8 bands work", p: ["Each criterion has band descriptors for 0, 1–2, 3–4, 5–6 and 7–8. Teachers read the student's work against the descriptors and choose the band that best fits, then the level within it.", "Criteria are broken into strands, labelled i, ii, iii and sometimes iv. The descriptors describe what achievement looks like on each strand, so a sound judgement looks at every strand before settling on a band."] },
      { h: "From criterion scores to a final grade", p: ["At the end of a reporting period, teachers make a final judgement for each criterion from the evidence gathered. The four criterion levels are added to give a total out of 32, which is converted to a final MYP grade from 1 to 7 using the IB's grade boundaries."], list: ["Every criterion must be assessed within each year; how often varies by subject group, so check your subject guide", "Tasks can assess one criterion or several", "Use the year-appropriate objectives: MYP 1, 3 and 5 descriptors differ in demand"] },
    ],
    related: { label: "See strand-level marking in Cocoon", href: "/product/assessment" },
  },
  {
    slug: "myp-strands-best-fit-marking",
    title: "Strands and best-fit: how to mark MYP criteria consistently",
    description: "What MYP strands are, how best-fit judgement works across them, and practical steps for consistent, moderated criterion marking.",
    programme: "MYP", topic: "Assessment", date: "2026-09-30", readMins: 5,
    intro: "MYP marking is not about counting errors. It is a best-fit judgement against band descriptors, made strand by strand. Getting that right is the difference between consistent grades and grades that depend on who marked the work.",
    sections: [
      { h: "What a strand is", p: ["Each MYP criterion is made up of strands: the separate skills the criterion assesses. In Mathematics criterion C (Communicating), for example, strands cover using appropriate mathematical language, using different forms of representation, moving between forms, communicating complete and coherent lines of reasoning, and organising information logically."] },
      { h: "Best-fit, not averaging", p: ["A student rarely sits neatly in one band on every strand. Best-fit means weighing the evidence across all strands and choosing the band whose descriptor describes the work as a whole. It is a professional judgement, not an arithmetic average."], list: ["Start with the band that seems closest, then check each strand against it", "If most strands meet the band, look at the next band up", "Choose the lower level in a band when the work only partly meets it, the higher when it clearly does"] },
      { h: "Making marking consistent", list: ["Write task-specific clarifications of the descriptors before marking", "Mark a few scripts together as a department and agree the bands", "Record strand-level notes so decisions can be explained to students and moderators", "Moderate a sample across teachers each term"] },
      { h: "Where AI can help", p: ["AI can propose a band for each criterion and point to evidence on each strand. Used well, it speeds up marking and makes reasoning visible, but the teacher still makes the final best-fit judgement."] },
    ],
    related: { label: "How Cocoon evaluates strand by strand", href: "/product/assessment" },
  },
  {
    slug: "myp-command-terms",
    title: "MYP command terms: what they ask students to do",
    description: "Common MYP command terms explained in plain language, grouped by the thinking they demand, with tips for using them in tasks.",
    programme: "MYP", topic: "Planning", date: "2026-09-30", readMins: 5,
    intro: "Command terms tell students exactly what kind of thinking a task needs. Using them precisely in task sheets and assessment makes expectations clear and links tasks directly to the criteria. Always check definitions against your current subject guide.",
    sections: [
      { h: "Recall and describe", table: { head: ["Term", "What students do"], rows: [
        ["State", "Give a specific name, value or short answer without explanation"],
        ["Identify", "Recognise and provide an answer from a number of possibilities"],
        ["Outline", "Give a brief account or summary"],
        ["Describe", "Give a detailed account or picture of a situation, event, pattern or process"],
      ] } },
      { h: "Explain and apply", table: { head: ["Term", "What students do"], rows: [
        ["Explain", "Give a detailed account including reasons or causes"],
        ["Apply", "Use knowledge and understanding in response to a given situation or real circumstances"],
        ["Solve", "Obtain the answer(s) using algebraic, numerical or graphical methods"],
        ["Suggest", "Propose a solution, hypothesis or other possible answer"],
      ] } },
      { h: "Analyse and judge", table: { head: ["Term", "What students do"], rows: [
        ["Analyse", "Break down to bring out the essential elements or structure; identify parts and relationships"],
        ["Compare and contrast", "Give an account of similarities and differences, referring to both or all items throughout"],
        ["Evaluate", "Make an appraisal by weighing up strengths and limitations"],
        ["Justify", "Give valid reasons or evidence to support an answer or conclusion"],
        ["Discuss", "Offer a considered and balanced review that includes a range of arguments, factors or hypotheses"],
      ] } },
      { h: "Using command terms well", list: ["Match the command term to the criterion strand the task assesses", "Use the MYP-year-appropriate term: 'outline' in MYP 1 may become 'explain' by MYP 5", "Teach the terms explicitly, with model answers at each band"] },
    ],
    related: { label: "Plan units with Cocoon", href: "/product/unit-planning" },
  },
];
