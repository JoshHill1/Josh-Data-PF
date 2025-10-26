import freeToPaid from "./proj-images/free-to-paid_conversion_rate_with_sql.png";
import PAS from "./proj-images/PAS_FinalAssets.png";
import MindOverload from "./proj-images/MindOverload.png";
import ReactPortfolio from "./proj-images/ReactPortfolio.png";
import HTMLPortfolio from "./proj-images/HTMLPortfolio.png";

export const projects = [
  {
    id: 1,
    title: "Free to Paid Conversion Rate",
    category: "Case Studies",
    thumbnail: freeToPaid,
    slug: "free-to-paid-conversion-rate",
  },
  {
    id: 2,
    title: "PLAIN AND SIMPLE",
    category: "Art",
    thumbnail: PAS,
    slug: "plain-and-simple",
  },
  {
    id: 3,
    title: "Mind Overload",
    category: "Art",
    thumbnail: MindOverload,
    slug: "mind-overload",
  },
  {
    id: 4,
    title: "React Portfolio",
    category: "Web Development",
    thumbnail: ReactPortfolio,
    slug: "react-portfolio",
  },
  {
    id: 5,
    title: "HTML Portfolio",
    category: "Web Development",
    thumbnail: HTMLPortfolio,
    slug: "html-portfolio",
  },
];

// Optional: export categories derived from data so you never hardcode them.
// First item is "all", then unique categories in alphabetical order.
export const categories = [
  "all",
  ...Array.from(new Set(projects.map(p => p.category))).sort(),
];
