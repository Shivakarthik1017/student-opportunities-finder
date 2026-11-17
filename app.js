// Student Opportunities Finder — data from research on 17 Nov 2026.
// Source: ~/workspace/research_notes/student-jobs-free-courses-india-20261117-0024/report.md
// Rules followed: no invented salaries, deadlines or links. Where a salary /
// stipend was not disclosed officially, the card says so. Where no exact
// official apply URL was captured, the card links to the source page that
// carries the official apply link, and says so in the link note.
// Deadline format: "YYYY-MM-DD" or null (no deadline published).

const OPPORTUNITIES = [
  {
    title: "Google — Student Researcher, 2027",
    provider: "Google (India, remote-eligible)",
    type: "Internship",
    deadline: "2026-12-04",
    deadlineText: "4 December 2026",
    eligibility: "Currently enrolled BS / MS / PhD in CS, Linguistics, Statistics, Biostatistics, Applied Maths, Operations Research, Economics or Natural Sciences, with experience in one CS area. Must remain in India for the whole engagement.",
    cost: "Free to apply. Stipend not disclosed by Google.",
    link: "https://www.google.com/about/careers/applications/jobs/results/125423735539671750-student-researcher-2027",
    linkNote: "Official Google Careers page. Rolling review — apply early."
  },
  {
    title: "Amazon — Software Development Engineer (SDE) Intern, Jan 2027",
    provider: "Amazon — Job ID 10517894",
    type: "Internship",
    deadline: null,
    deadlineText: "No deadline published — rolling applications",
    eligibility: "Students graduating in 2027; enrolled in (or completed) a Bachelor's or above in CS, Computer Engineering, Data Science, Information Systems or related STEM; 18+; one general-purpose programming language; data structures, algorithms, OOP.",
    cost: "Free to apply. Stipend not disclosed on the official listing. 22–24 weeks, start Jan 2027, in-person.",
    link: "https://www.amazon.jobs/en/jobs/10517894/software-development-engineer-intern-jan-2027-6-month-amazon-university-talent-acquisition",
    linkNote: "Official amazon.jobs page. Do not use the older Job ID 10490515 — it returned 404 on 17 Nov 2026."
  },
  {
    title: "State Street — Technology Early Career Entry Program 2027",
    provider: "State Street — Req R-800791, Bengaluru + Hyderabad",
    type: "Job",
    deadline: "2026-11-30",
    deadlineText: "30 November 2026",
    eligibility: "B.Tech graduates or equivalent in a related field. Branch, graduation year and CGPA were not stated on the posting — confirm with the recruiter.",
    cost: "Free to apply. Salary / stipend not disclosed officially.",
    link: "https://freshershunt.in/state-street-internship-2027/",
    linkNote: "Source page that links the official State Street (Workday) posting — the exact Workday URL was not captured, so check Req R-800791 there."
  },
  {
    title: "Google — Forward Deployed Engineer Intern, 2027",
    provider: "Google — Bengaluru",
    type: "Internship",
    deadline: null,
    deadlineText: "No deadline published",
    eligibility: "Penultimate-year students (per listing).",
    cost: "Free to apply.",
    link: "https://freshershunt.in/off-campus-drive-jobs/off-campus-drive/",
    linkNote: "Source list page — search Google Careers for “Forward Deployed Engineer Intern, 2027” to apply."
  },
  {
    title: "IndiaAI Fellowship 2026-27",
    provider: "IndiaAI Mission, MeitY, Govt. of India",
    type: "Scholarship",
    deadline: "2026-11-30",
    deadlineText: "30 November 2026",
    eligibility: "UG (incl. final-year), Integrated Dual Degree and PG students (semesters 1–3), and first-year PhD scholars working on AI-related projects/research, any stream.",
    cost: "Free to apply. Up to ₹1 lakh (UG / IDD), up to ₹2 lakh (PG); PhD scholars ₹70,000–80,000/month + support (amounts vary by source).",
    link: "https://fellowship.indiaai.gov.in/",
    linkNote: "Official portal. It timed out when checked on 17 Nov 2026 — apply well before the last day and re-check the portal."
  },
  {
    title: "UGC Ishan Uday Special Scholarship 2026-27",
    provider: "University Grants Commission (UGC) — North Eastern Region",
    type: "Scholarship",
    deadline: "2026-11-30",
    deadlineText: "30 November 2026 (extended from 31 Oct)",
    eligibility: "First-year UG students with domicile of a North-Eastern state, Class 12 passed from a school in the NER, parental income below ₹4.5 lakh/year; first regular UG degree only.",
    cost: "Free to apply. ₹8,000/month for 10 months a year; 10,000 fresh scholarships a year. Amount: check NSP for the current figure.",
    link: "https://scholarships.gov.in",
    linkNote: "National Scholarship Portal (NSP)."
  },
  {
    title: "Commonwealth Shared Scholarships 2027",
    provider: "Commonwealth Scholarship Commission, UK",
    type: "Scholarship",
    deadline: "2026-12-08",
    deadlineText: "8 December 2026, 16:00 GMT",
    eligibility: "Citizens / permanent residents of eligible Commonwealth countries including India; for a one-year full-time taught master's starting Sep/Oct 2027; applicants who could not otherwise afford UK study.",
    cost: "Free to apply. Fully funded: full tuition + stipend £1,712/month (£2,000 in London) + return flights + allowances.",
    link: "https://www.gla.ac.uk/scholarships/commonwealthsharedscholarshipscheme/",
    linkNote: "Details page — apply via CSC Central (cscuk.fcdo.gov.uk) and the participating university."
  },
  {
    title: "TCS CodeVita Season 14",
    provider: "TCS — coding contest",
    type: "Coding Contest",
    deadline: null,
    deadlineText: "Open now — no closing date published",
    eligibility: "Students of 2027–2030 batches.",
    cost: "Free entry. Top 3 share USD 20,000; 3-hour contest, four languages.",
    link: "https://freshershunt.in/off-campus-drive-jobs/off-campus-drive/",
    linkNote: "Source list page — register via the TCS CodeVita portal linked there."
  },
  {
    title: "Google Skills — Introduction to Generative AI",
    provider: "Google Skills / Google Cloud",
    type: "Free Course",
    deadline: null,
    deadlineText: "Always open — no deadline",
    eligibility: "Open to everyone, including students in India; free Google account sign-up. No coding needed.",
    cost: "Free. Free digital skill badge on completion. ~45 min intro course; ~2 hours for the full badge path.",
    link: "https://skills.google",
    linkNote: "Google Skills. Note: Google Career Certificates on Coursera are paid — do not confuse them with this free course."
  },
  {
    title: "IBM SkillsBuild — Artificial Intelligence Fundamentals",
    provider: "IBM SkillsBuild",
    type: "Free Course",
    deadline: null,
    deadlineText: "Always open — no deadline",
    eligibility: "Open to all learners; routes for high-school (13–18), university and adult learners (18+). Available in 12 languages including Hindi.",
    cost: "Free — homepage states “100% free and online”. 10+ hours, self-paced. Free IBM digital credential (Credly badge) on completion.",
    link: "https://skillsbuild.org/",
    linkNote: "Official IBM SkillsBuild site — verified live 17 Nov 2026."
  },
  {
    title: "AWS Skill Builder + AWS Educate",
    provider: "Amazon Web Services (AWS)",
    type: "Free Course",
    deadline: null,
    deadlineText: "Always open — no deadline",
    eligibility: "Skill Builder open to all; AWS Educate open to anyone 13+ with just an email (no credit card); Student Rewards for 18+ students at accredited institutions.",
    cost: "Free training and badges (900+ free courses). Formal AWS certification exams are paid — eligible students 18+ can earn a $100 exam voucher via AWS Student Rewards.",
    link: "https://builder.aws.com/content/3KKwg92ZL1WlwosByJKUrB01crE/free-aws-training-for-beginners-6-resources-to-learn-cloud-and-ai-from-official-aws-programs",
    linkNote: "Official AWS guide with links to Skill Builder and Educate."
  },
  {
    title: "Microsoft Learn — AI learning paths",
    provider: "Microsoft (Microsoft Learn)",
    type: "Free Course",
    deadline: null,
    deadlineText: "Always open — no deadline",
    eligibility: "Open to everyone; no sign-in needed to read content.",
    cost: "Free to learn — free Learn badges/trophies. The formal Azure AI Fundamentals certification exam (AI-901) is paid.",
    link: "https://learn.microsoft.com/",
    linkNote: "Microsoft Learn — AI learning hub / Azure AI Fundamentals path."
  },
  {
    title: "Salesforce Trailhead — free CRM & AI-agent learning",
    provider: "Salesforce (Trailhead)",
    type: "Free Course",
    deadline: null,
    deadlineText: "Always open — no deadline",
    eligibility: "Open to anyone with an email address.",
    cost: "Free learning and badges. Official proctored certification exams are paid (e.g. ~$200 Administrator exam).",
    link: "https://trailhead.salesforce.com/",
    linkNote: "Official Trailhead site."
  }
];

// ---------- Helpers ----------

function daysLeft(deadline) {
  if (!deadline) return null;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const due = new Date(deadline + "T23:59:59");
  return Math.ceil((due - today) / (1000 * 60 * 60 * 24));
}

function daysLeftLabel(item) {
  const d = daysLeft(item.deadline);
  if (d === null) return { text: "No deadline published", cls: "none" };
  if (d < 0) return { text: "Deadline passed — check the official link", cls: "soon" };
  if (d === 0) return { text: "Closing today!", cls: "soon" };
  if (d === 1) return { text: "1 day left", cls: "soon" };
  return { text: d + " days left", cls: d <= 7 ? "soon" : "" };
}

function sortItems(items, sortBy) {
  const copy = items.slice();
  if (sortBy === "az") {
    return copy.sort((a, b) => a.title.localeCompare(b.title));
  }
  // Deadline soonest first; no-deadline items last, then A–Z.
  return copy.sort((a, b) => {
    const da = daysLeft(a.deadline);
    const db = daysLeft(b.deadline);
    if (da === null && db === null) return a.title.localeCompare(b.title);
    if (da === null) return 1;
    if (db === null) return -1;
    return da - db || a.title.localeCompare(b.title);
  });
}

// ---------- Rendering ----------

const cardsEl = document.getElementById("cards");
const countEl = document.getElementById("resultCount");
const emptyEl = document.getElementById("emptyState");
const statsEl = document.getElementById("stats");
const searchEl = document.getElementById("search");
const typeEl = document.getElementById("typeFilter");
const deadlineEl = document.getElementById("deadlineFilter");
const sortEl = document.getElementById("sortBy");
const chipsEl = document.getElementById("typeChips");

function renderStats() {
  const closingSoon = OPPORTUNITIES.filter((o) => {
    const d = daysLeft(o.deadline);
    return d !== null && d >= 0 && d <= 7;
  }).length;
  const courses = OPPORTUNITIES.filter((o) => o.type === "Free Course").length;
  statsEl.innerHTML =
    "<span class='stat'><b>" + OPPORTUNITIES.length + "</b> opportunities</span>" +
    "<span class='stat'><b>" + closingSoon + "</b> closing in 7 days</span>" +
    "<span class='stat'><b>" + courses + "</b> free courses</span>";
}

function cardHtml(item) {
  const label = daysLeftLabel(item);
  const urgent = label.cls === "soon" ? " urgent" : "";
  const badgeCls = item.type === "Scholarship" ? "badge orange" : "badge";
  return (
    "<article class='card" + urgent + "'>" +
    "<div class='card-top'><h2>" + item.title + "</h2>" +
    "<span class='" + badgeCls + "'>" + item.type + "</span></div>" +
    "<p class='provider'>" + item.provider + "</p>" +
    "<dl>" +
    "<dt>Deadline</dt><dd>" + item.deadlineText + " — <span class='days-left " + label.cls + "'>" + label.text + "</span></dd>" +
    "<dt>Who can apply</dt><dd>" + item.eligibility + "</dd>" +
    "<dt>Cost / award</dt><dd>" + item.cost + "</dd>" +
    "</dl>" +
    "<a class='apply' href='" + item.link + "' target='_blank' rel='noopener'>Apply →</a>" +
    "<p class='link-note'>" + item.linkNote + "</p>" +
    "</article>"
  );
}

function render() {
  const q = searchEl.value.trim().toLowerCase();
  const type = typeEl.value;
  const deadline = deadlineEl.value;

  let items = OPPORTUNITIES.filter((item) => {
    if (type !== "all" && item.type !== type) return false;
    if (deadline === "7" || deadline === "30") {
      const d = daysLeft(item.deadline);
      if (d === null || d < 0 || d > Number(deadline)) return false;
    }
    if (deadline === "none" && item.deadline !== null) return false;
    if (q) {
      const hay = (item.title + " " + item.provider + " " + item.type + " " + item.eligibility + " " + item.cost).toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });

  items = sortItems(items, sortEl.value);
  cardsEl.innerHTML = items.map(cardHtml).join("");
  countEl.textContent = items.length === OPPORTUNITIES.length
    ? "Showing all " + items.length + " opportunities — sorted by deadline, soonest first."
    : "Showing " + items.length + " of " + OPPORTUNITIES.length + " opportunities.";
  emptyEl.hidden = items.length !== 0;

  // Keep chips in sync with the type dropdown.
  chipsEl.querySelectorAll(".chip").forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.type === type);
  });
}

// ---------- Events ----------

searchEl.addEventListener("input", render);
typeEl.addEventListener("change", render);
deadlineEl.addEventListener("change", render);
sortEl.addEventListener("change", render);

chipsEl.addEventListener("click", (event) => {
  const chip = event.target.closest(".chip");
  if (!chip) return;
  typeEl.value = chip.dataset.type;
  render();
});

renderStats();
render();
