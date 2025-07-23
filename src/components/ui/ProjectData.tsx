// src/data/projectsData.ts
import cover1 from '../../assets/cover/cn1.png';
import cover2 from '../../assets/cover/cn2.png';
import cover3 from '../../assets/cover/cn3.png';
import cover4 from '../../assets/cover/cn4.png';
import cover5 from '../../assets/cover/cn5.png';
import cover6 from '../../assets/cover/cn6.png';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  challenge: string;
  solution: string;
  link: string;
  sourceCodeLink?: string;
  techStack?: { name: string; icon: string }[];
  stats?: { value: string; label: string }[];
  galleryImages?: string[];
  problem?: string;
  designProcess?: string;
  keyInsights?: string[];
  solutionDescription?: string;
  keyFeatures?: string[];
  results?: string;
  resultStats?: { value: string; label: string }[];
  tags?: string[];
}

export const projects: Project[] = [
  {
    id: 'lhc',
    title: 'LHC',
    description: 'Designed a premium booking interface tailored for luxury travelers.',
    image: cover1,
    category: 'SaaS',
    challenge: 'Crafting an ultra-premium booking experience with seamless concierge integration.',
    solution: 'Luxury-first UX with personalized recommendations and clean design.',
    link: 'https://theluxuryhotelconcierge.com/',
    sourceCodeLink: 'https://github.com/vvc10/luxury-hotel-concierge',
    techStack: [
      { name: "Figma", icon: "figma" },
      { name: "Framer", icon: "framer" }
    ],
    stats: [
      { value: "40%", label: "Conversion Boost" },
      { value: "15K", label: "Monthly Visitors" },
      { value: "92%", label: "User Satisfaction" }
    ],
    galleryImages: [cover1, cover1, cover1, cover1],
    problem: "Existing luxury booking platforms lacked high-end UX design and personal concierge features.",
    designProcess: "Conducted interviews with luxury travelers, mapped their booking journeys, then built interactive prototypes using Figma.",
    keyInsights: [
      "Visual elegance influences trust in luxury",
      "Personalization > pricing",
      "Mobile booking matters most for travelers"
    ],
    solutionDescription: "A high-end digital concierge platform with intuitive booking flow, elite service discovery, and aesthetic harmony.",
    keyFeatures: [
      "Clean luxury interface",
      "Concierge booking tools",
      "Visual-first listing previews"
    ],
    results: "The UI overhaul led to a dramatic rise in engagement, satisfaction, and user retention. ~client   ",
    resultStats: [
      { value: "4.8★", label: "Avg. Feedback" },
      { value: "40%", label: "Conversion Rate" }
    ],
    tags: ["portfolio", "sidebar"]
  },
  {
    id: 'hmf',
    title: 'HMF',
    description: 'Designed secure, modern mobile banking UI for new investors.',
    image: cover2,
    category: 'FinTech',
    challenge: 'Designing an intuitive interface that balances investment clarity and trust.',
    solution: 'Visualized investment insights with simple flows and secure aesthetics.',
    link: 'https://www.hedgemyfunds.com/',
    sourceCodeLink: 'https://github.com/yourusername/hedgemyfunds',
    techStack: [
      { name: "Figma", icon: "figma" },
      { name: "D3.js", icon: "d3" }
    ],
    stats: [
      { value: "2.8M", label: "Assets Managed" },
      { value: "95%", label: "Security Trust" }
    ],
    galleryImages: [cover4, cover4, cover4, cover4],
    problem: "Complex interfaces discouraged new investors; security concerns led to low trust.",
    designProcess: "User journey audits and low-fidelity sketches focused on simplicity and clarity. Emphasis was placed on data visualization and secure UI elements.",
    keyInsights: [
      "Clear graphs increase user trust",
      "Security cues influence app stickiness",
      "Minimal onboarding boosts adoption"
    ],
    solutionDescription: "We built a visually secure, beginner-friendly investment dashboard with high retention design principles.",
    keyFeatures: [
      "Insightful data visualizations",
      "Secure feel UI",
      "User education micro-interactions"
    ],
    results: "UI/UX revamp contributed to high user satisfaction and reduced app abandonment. ~client",
    resultStats: [
      { value: "4.9★", label: "App Rating" },
      { value: "78%", label: "Referral Rate" }
    ],
    tags: ["UIUX", "App"]
  },
  // {
  //   id: 'whatsbuy',
  //   title: 'Whatsbuy - Frontend + UI/UX',
  //   description: 'Developed and designed a storefront builder for hyperlocal stores.',
  //   image: cover6,
  //   category: 'SaaS',
  //   challenge: 'Digitizing small stores with minimal setup friction.',
  //   solution: 'Built frontend with Next.js and designed fast, clean UI for WhatsApp-based orders.',
  //   link: 'https://whatsbuy.in/',
  //   sourceCodeLink: 'https://github.com/vvc10/whatsbuy',
  //   techStack: [
  //     { name: "Next.js", icon: "nextjs" },
  //     { name: "TypeScript", icon: "typescript" },
  //     { name: "Tailwind CSS", icon: "tailwind" },
  //     { name: "WhatsApp API", icon: "whatsapp" }
  //   ],
  //   stats: [
  //     { value: "3.5K", label: "Daily Orders" },
  //     { value: "85%", label: "Order Success Rate" }
  //   ],
  //   galleryImages: [cover6, cover6, cover6, cover6],
  //   problem: "Local shops lacked digital tools to quickly go online, and customers couldn’t easily reach them.",
  //   designProcess: "Mapped out seller and buyer journeys; rapid prototyping followed by real-world feedback iterations.",
  //   keyInsights: [
  //     "Shops need zero-learning setup",
  //     "WhatsApp > app for communication",
  //     "Visual clarity boosts order confidence"
  //   ],
  //   solutionDescription: "A fast, responsive platform with WhatsApp order sync, real-time inventory, and minimal interface for sellers.",
  //   keyFeatures: [
  //     "One-click store builder",
  //     "Frontend performance optimization",
  //     "WhatsApp integrated checkout"
  //   ],
  //   results: "Digitized 1.2K+ stores, driving local commerce and user loyalty.",
  //   resultStats: [
  //     { value: "40%", label: "Repeat Customers" },
  //     { value: "1.2K", label: "Stores Onboarded" }
  //   ],
  //   tags: ["Design System", "Web"]
  // },
  {
    id: 'flashy',
    title: 'FlashyPanels',
    description: 'Designed user-friendly SMM dashboard with real-time service automation.',
    image: cover4,
    category: 'SaaS',
    challenge: 'Visualizing complex campaign data simply.',
    solution: 'Streamlined dashboard with bulk controls, analytics, and real-time feedback.',
    link: 'https://flashypanels.com/',
    sourceCodeLink: 'https://github.com/vvc10/flashypanels',
    techStack: [
      { name: "Figma", icon: "figma" }
    ],
    stats: [
      { value: "98%", label: "System Uptime" },
      { value: "50K", label: "Orders Monthly" }
    ],
    galleryImages: [cover3, cover3, cover3, cover3],
    problem: "Marketers lacked visibility into service status and needed intuitive controls.",
    designProcess: "Analyzed power-user behaviors and pain points, then wireframed minimalist dashboards with layered UX logic.",
    keyInsights: [
      "Bulk UX saves hours",
      "Minimal design reduces fatigue",
      "Color-coded feedback = fewer queries"
    ],
    solutionDescription: "Modern interface with simple yet powerful management tools for high-volume social media orders.",
    keyFeatures: [
      "Visual bulk controls",
      "Status-based UI feedback",
      "Clean campaign view layout"
    ],
    results: "Adoption increased significantly post-redesign, especially among heavy users. ~client",
    resultStats: [
      { value: "4.7★", label: "User Rating" },
      { value: "45%", label: "MoM Growth" }
    ],
    tags: ["SaaS", "Web"]
  },
  {
    id: 'genvogue',
    title: 'Genogue',
    description: 'Platform to design Merches like hoodie, t-shirt, etc. using AI',
    image: cover5,
    category: 'Org',
    challenge: 'Designing a platform to design Merches like hoodie, t-shirt, etc. using AI',
    solution: 'UX built around verified communities, structured knowledge sharing, and events.',
    link: 'https://genvogue.vercel.app/',
    sourceCodeLink: 'https://github.com/vvc10/genvogue',
    techStack: [
      { name: "Figma", icon: "figma" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Shadcn UI", icon: "shadcn" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Supabase", icon: "supabase" },
      { name: "Vercel", icon: "vercel" }
    ],
    stats: [
      { value: "8K", label: "Members" },
      { value: "95%", label: "Engagement" }
    ],
    galleryImages: [cover5, cover5, cover5, cover5],
    problem: "Lack of industry-centric platforms led to fragmentation among mining experts.",
    designProcess: "Stakeholder sessions with associations; created personas and mapped digital needs for knowledge and jobs.",
    keyInsights: [
      "Verified membership builds trust",
      "Job board = retention engine",
      "Events drive recurring visits"
    ],
    solutionDescription: "UI centered around trust and functionality, built for real community utility and collaboration.",
    keyFeatures: [
      "Specialized job board",
      "Knowledge base structure",
      "Professional profile UX"
    ],
    results: "High engagement and community retention after launch.",
    resultStats: [
      { value: "500+", label: "Resources Shared" },
      { value: "1.2K", label: "Jobs Posted" }
    ],
    tags: ["SaaS", "Web"]
  },
  {
    id: 'aideoa',
    title: 'AIDEOA',
    description: 'Crafted an industry-focused community portal for mining professionals.',
    image: cover6,
    category: 'Org',
    challenge: 'Designing a trust-driven, functional network for a niche audience.',
    solution: 'UX built around verified communities, structured knowledge sharing, and events.',
    link: 'https://aideoa.org/',
    sourceCodeLink: 'https://github.com/vvc10/aideoa',
    techStack: [
      { name: "Figma", icon: "figma" },
      { name: "Miro", icon: "miro" }
    ],
    stats: [
      { value: "8K", label: "Members" },
      { value: "95%", label: "Engagement" }
    ],
    galleryImages: [cover6, cover6, cover6, cover6],
    problem: "Lack of industry-centric platforms led to fragmentation among mining experts.",
    designProcess: "Stakeholder sessions with associations; created personas and mapped digital needs for knowledge and jobs.",
    keyInsights: [
      "Verified membership builds trust",
      "Job board = retention engine",
      "Events drive recurring visits"
    ],
    solutionDescription: "UI centered around trust and functionality, built for real community utility and collaboration.",
    keyFeatures: [
      "Specialized job board",
      "Knowledge base structure",
      "Professional profile UX"
    ],
    results: "High engagement and community retention after launch.",
    resultStats: [
      { value: "500+", label: "Resources Shared" },
      { value: "1.2K", label: "Jobs Posted" }
    ],
    tags: ["SaaS", "Web"]
  }
];


export type Category = 'All' | 'SaaS' | 'FinTech' | 'Bookings' | 'Org';
export const categories: Category[] = ['All', 'SaaS', 'FinTech', 'Bookings', 'Org'];