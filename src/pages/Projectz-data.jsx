// src/data/projects.js

export const projects = [
  {
    id: 1,
    title: "E-Commerce Case Study",
    category: "case studies",
    thumbnail: "https://via.placeholder.com/600x400?text=E-Commerce+Case+Study",
    slug: "ecommerce-case-study",
  },
  {
    id: 2,
    title: "Healthcare App Case Study",
    category: "case studies",
    thumbnail: "https://via.placeholder.com/600x400?text=Healthcare+Case+Study",
    slug: "healthcare-app",
  },
  {
    id: 3,
    title: "Digital Art Collection #1",
    category: "art",
    thumbnail: "https://via.placeholder.com/600x400?text=Digital+Art+1",
    slug: "digital-art-1",
  },
  {
    id: 4,
    title: "Nature Illustration",
    category: "art",
    thumbnail: "https://via.placeholder.com/600x400?text=Nature+Illustration",
    slug: "nature-illustration",
  },
  {
    id: 5,
    title: "Portfolio Website",
    category: "web pages",
    thumbnail: "https://via.placeholder.com/600x400?text=Portfolio+Website",
    slug: "portfolio-website",
  },
  {
    id: 6,
    title: "Landing Page Redesign",
    category: "web pages",
    thumbnail: "https://via.placeholder.com/600x400?text=Landing+Page+Redesign",
    slug: "landing-page-redesign",
  },
];

// Optional: export categories derived from data so you never hardcode them.
// First item is "all", then unique categories in alphabetical order.
export const categories = [
  "all",
  ...Array.from(new Set(projects.map(p => p.category))).sort(),
];
