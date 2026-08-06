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
  eyebrow: "Design start here..",
  pageTitle: "Gabe Gonzalez's Personal Portfolio Website",
  sideLabel: "Portfolio 2026",
  stats: [
    { value: "+200", label: "Projects completed" },
    { value: "+50", label: "Startup teams" },
  ],
  headline: "Hello",
  tagline: "— it's Gabe Gonzalez, an AI marketing strategist",
  scrollLabel: "Scroll down",
  portraitImage:
    "https://picsum.photos/id/1005/1200/1400",
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
  // TODO: swap for a real headshot — no photo was supplied yet.
  primaryPortrait: "https://picsum.photos/id/1012/600/700",
  floatingHeadshot: "https://picsum.photos/id/1027/200/200",
  blurbs: [
    {
      text: "I partner closely with sales leadership to align messaging, lead scoring, and pipeline attribution — turning marketing into a revenue driver that closed $651K in influenced deals at a 46% win rate.",
    },
    {
      text: "From a $2M+ Google Ads program to a 335K-send lifecycle email engine, I build full-funnel systems that compound — not just campaigns that spike and fade.",
    },
  ],
};

export type WorkItem = {
  title: string;
  agency: string;
  image: string;
};

export type ExperienceRow = {
  company: string;
  location: string;
  dateRange: string;
  role: string;
  tags: string[];
  expanded?: {
    paragraph: string;
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
        paragraph:
          "Built AI-powered workflows across competitive intelligence, programmatic SEO, content, and outreach — scaling a lean team to an 18.96x blended marketing ROI, 32.5% YoY organic session growth, and 66% marketing influence on new-logo wins.",
      },
    },
    {
      company: "TCS World Travel, Seattle, WA",
      location: "Seattle, WA",
      dateRange: "Oct 2022 - June 2025",
      role: "Paid Media Strategist — $2M+ Google Ads & multi-touch attribution",
      tags: ["Paid Media"],
    },
    {
      company: "Here to Help Marketing, Deltona, FL",
      location: "Deltona, FL",
      dateRange: "Dec 2019 - Oct 2022",
      role: "Freelance Digital Marketing & E-Commerce Consultant",
      tags: ["SEO", "E-Commerce"],
    },
    {
      company: "Wiley Education Services, Maitland, FL",
      location: "Maitland, FL",
      dateRange: "Aug 2017 - Oct 2019",
      role: "Student Services & Marketing Coordinator",
      tags: ["Lifecycle Marketing"],
    },
  ] satisfies ExperienceRow[],
};

export const ctaBannerContent = {
  eyebrow: "Your Next Free Consultation Now!",
  heading: "Exclusive Winter Deal Days Get a Free Consultation!",
  subtext:
    "Book your free consultation today and let's craft a growth strategy tailored to your goals.",
  cta: "Book A Call",
  backgroundImage: "https://picsum.photos/id/60/1600/900",
};

export const latestWorksContent = {
  eyebrow: "• Portfolio",
  heading: "Latest Works",
  viewMore: "View More",
  items: [
    {
      title: "Halo Digital Agency website",
      agency: "Squarize",
      image: "https://picsum.photos/id/1050/800/900",
    },
    {
      title: "Halo Digital Agency website",
      agency: "Squarize",
      image: "https://picsum.photos/id/1051/800/900",
    },
    {
      title: "Halo Digital Agency website",
      agency: "Squarize",
      image: "https://picsum.photos/id/1052/800/900",
    },
  ] satisfies WorkItem[],
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
