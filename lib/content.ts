// Central content config — edit here to update copy, stats, and images
// across the whole site. Swap any `*Image` value for a real asset path
// (e.g. "/images/hero-portrait.jpg") once real photography is ready.

export const siteConfig = {
  name: "Gabe Gonzalez",
  shortName: "G. Gonzalez",
  location: "Blue Springs, MO",
  email: "gabeagonzalez14@gmail.com",
  resumeUrl: "/resume.pdf",
};

export const navLinks = [
  { label: "About Me", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
];

export const heroContent = {
  pageTitle: "Gabe Gonzalez's Personal Portfolio Website",
  sideLabel: "Portfolio 2026",
  stats: [
    { value: "+200", label: "Projects completed" },
    { value: "+7", label: "Products brought to market" },
  ],
  headline: "Hello",
  tagline: "— it's Gabe Gonzalez, an AI marketing strategist",
  scrollLabel: "Scroll down",
  portraitImage: "/images/hero-portrait.webp",
};

export const aboutContent = {
  eyebrow: "About Me",
  heading: "About Me",
  paragraphs: [
    "I'm a strategic marketing leader who builds AI-augmented growth systems — from competitive intelligence to programmatic SEO — turning a lean operating budget into an 18.96x blended marketing ROI.",
    "I use AI to compress research and content production timelines while scaling organic search, lifecycle email, and outreach programs that now influence 66% of new-logo wins.",
  ],
  badgeIcon: "✦",
  statValue: "18.96x",
  statCaption: "Blended marketing ROI built from a lean operating budget at Go Solutions",
  primaryPortrait: "/images/about-portrait.webp",
  floatingHeadshot: "/images/headshot.webp",
  blurbs: [
    {
      text: "I partner closely with sales leadership to align messaging, lead scoring, and pipeline attribution — turning marketing into a revenue driver that closed $651K in influenced deals at a 46% win rate.",
    },
    {
      text: "From a $2M+ Google Ads program to a 335K-send lifecycle email engine, I build full-funnel systems that compound — not just campaigns that spike and fade.",
    },
  ],
};

export type PortfolioItem =
  | { kind: "video"; title: string; videoId: string }
  | { kind: "website"; title: string; href: string; image: string };

// Thumbnail is derived from the video ID — no API key or fetch needed.
// Falls back to hqdefault (always exists) if a video has no maxres thumbnail.
export function youtubeThumbnail(videoId: string) {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

export function youtubeUrl(videoId: string) {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

export type ExperienceRow = {
  company: string;
  location: string;
  dateRange: string;
  role: string;
  tags: string[];
  expanded?: {
    bullets: string[];
  };
};

export const experienceContent = {
  eyebrow: "• Experiences",
  heading: "Explore My AI Marketing Journey",
  paragraph:
    "From programmatic SEO to AI-assisted competitive intelligence, I've spent the past several years building full-funnel growth systems — partnering with sales and leadership to turn marketing into a measurable revenue driver.",
  cta: "Book A Call",
  resumeLabel: "View Resume",
  rows: [
    {
      company: "Go Solutions, Lansing, MI",
      location: "Lansing, MI",
      dateRange: "June 2025 - July 2026",
      role: "Head of Marketing — AI-driven growth, programmatic SEO & lifecycle email",
      tags: ["AI Marketing", "Growth"],
      expanded: {
        bullets: [
          "Built AI-powered workflows to architect a multi-channel growth model — from competitive intelligence and programmatic SEO to campaign reporting and outreach — helping a lean team sustain an 18.96x blended marketing ROI.",
          "Directed a search-visibility strategy that repositioned the company from page-two obscurity to top-of-page-one authority, improving average ranking position from 13.5 to 8.4 and driving 32.5% YoY organic session growth.",
        ],
      },
    },
    {
      company: "TCS World Travel, Seattle, WA",
      location: "Seattle, WA",
      dateRange: "Oct 2022 - June 2025",
      role: "Paid Media Strategist — $2M+ Google Ads & multi-touch attribution",
      tags: ["Paid Media"],
      expanded: {
        bullets: [
          "Directed strategy and allocation for a $2M+ Google Ads investment, prioritizing spend toward highest-intent segments to achieve a 9:1 ROAS, plus a complementary $480K Meta/LinkedIn paid social program.",
          "Built multi-touch attribution infrastructure (Salesforce + Looker Studio) and redesigned lead scoring to lift MQL conversion from 3.7% to 4.9% in two months.",
        ],
      },
    },
    {
      company: "Here to Help Marketing, Deltona, FL",
      location: "Deltona, FL",
      dateRange: "Dec 2019 - Oct 2022",
      role: "Freelance Digital Marketing & E-Commerce Consultant",
      tags: ["SEO", "E-Commerce"],
      expanded: {
        bullets: [
          "Led SEO and paid media strategy engagements for multiple freelance clients.",
          "Re-architected a global e-commerce platform to support over $40K in monthly sales at scale.",
        ],
      },
    },
    {
      company: "Wiley Education Services, Maitland, FL",
      location: "Maitland, FL",
      dateRange: "Aug 2017 - Oct 2019",
      role: "Student Services & Marketing Coordinator",
      tags: ["Lifecycle Marketing"],
      expanded: {
        bullets: [
          "Directed multi-channel re-enrollment campaigns (email and SMS) achieving a 3% conversion rate.",
          "Served as key liaison between leadership and external partners on budget forecasting and program execution.",
        ],
      },
    },
  ] satisfies ExperienceRow[],
};

export const ctaBannerContent = {
  eyebrow: "Your Next Free Consultation Now!",
  heading: "Book your free consultation today and let's craft a growth strategy tailored to your goals.",
  cta: "Book A Call",
  backgroundImage: "https://picsum.photos/id/60/1600/900",
};

export const latestWorksContent = {
  eyebrow: "• Portfolio",
  heading: "Latest Works",
  viewMore: "View More",
  channelUrl: "",
  items: [
    {
      kind: "video",
      title: "How to Start Google Meridian in 60 Seconds FAST",
      videoId: "Am73sKyZ01U",
    },
    {
      kind: "website",
      title: "Go Solutions — Simplicity Is Now Roundtable",
      href: "https://www.gosolutions.com/simplicity-is-now-roundtable/",
      image: "/images/portfolio-gosolutions.webp",
    },
    {
      kind: "website",
      title: "Kansas City TV Mounting Experts",
      href: "https://kansascitytvmounting.com/",
      image: "/images/portfolio-kctv.webp",
    },
    {
      kind: "website",
      title: "Pareo Island",
      href: "https://pareoisland.com/",
      image: "/images/portfolio-pareo.webp",
    },
  ] satisfies PortfolioItem[],
};

export const finalCtaContent = {
  heading: "Got a Vision? Let's Bring It to Life!",
  subtext:
    "I'm always excited to collaborate on new and innovative projects. Whether you're starting from scratch or refining an existing idea, let's talk.",
  form: {
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    submitLabel: "Send Message",
    sentLabel: "Opening your email client…",
  },
};

export const footerContent = {
  links: [
    { label: "Home", href: "#" },
    { label: "About Me", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Services", href: "#services" },
  ],
  email: siteConfig.email,
  legal: `© ${new Date().getFullYear()} ${siteConfig.name}. All rights reserved.`,
};
