// Central content config — edit here to update copy, stats, and images
// across the whole site. Swap any `*Image` value for a real asset path
// (e.g. "/images/hero-portrait.jpg") once real photography is ready.

export const siteConfig = {
  name: "Dominic Nova",
  shortName: "D. Nova",
  domain: "dnova.com",
  email: "hello@dnova.com",
};

export const navLinks = [
  { label: "About Me", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
];

export const heroContent = {
  eyebrow: "Design start here..",
  pageTitle: "Personal Portfolio Website",
  sideLabel: "Portfolio 2024",
  stats: [
    { value: "+200", label: "Projects completed" },
    { value: "+50", label: "Startup teams" },
  ],
  headline: "Hello",
  tagline: "— it's Dominic Nova, a design wizard",
  scrollLabel: "Scroll down",
  portraitImage:
    "https://picsum.photos/id/1005/1200/1400",
};

export const aboutContent = {
  eyebrow: "About Me",
  heading: "About Me",
  paragraphs: [
    "I'm specialize in turning complex problems into elegant solutions. My approach blends creativity with strategic thinking to deliver designs that not only look great but work seamlessly.",
    "Ready to start your next project? Let's build something people remember, together.",
  ],
  badgeIcon: "✦",
  statValue: "120%",
  statCaption:
    "Average increase in client engagement in the first 6 months",
  primaryPortrait: "https://picsum.photos/id/1012/600/700",
  floatingHeadshot: "https://picsum.photos/id/1027/200/200",
  blurbs: [
    {
      text: "With 4+ years of experience, I specialize in creating intuitive, user-focused designs that solve real-world problems and deliver seamless digital experiences.",
    },
    {
      text: "I'm working closely with clients, blending creativity with strategy to bring their vision to life through thoughtful, impactful design solutions.",
    },
  ],
};

export type WorkItem = {
  title: string;
  agency: string;
  image: string;
};

export const featuredWork: WorkItem[] = [
  {
    title: "Halo Digital Agency website",
    agency: "Squarize",
    image: "https://picsum.photos/id/1015/800/900",
  },
  {
    title: "Halo Digital Agency website",
    agency: "Squarize",
    image: "https://picsum.photos/id/1039/800/900",
  },
  {
    title: "Digital Agency website",
    agency: "Squarize",
    image: "https://picsum.photos/id/1043/800/900",
  },
];

export type ExperienceRow = {
  company: string;
  location: string;
  dateRange: string;
  role: string;
  tags: string[];
  expanded?: {
    images: string[];
    paragraph: string;
  };
};

export const experienceContent = {
  eyebrow: "• Experiences",
  heading: "Explore My Design Journey",
  paragraph:
    "Over the past 4+ years, I've had the opportunity to work on a wide range of design projects, collaborating with diverse teams and clients to bring compelling visions to life.",
  cta: "Book A Call",
  rows: [
    {
      company: "Creative Minds, New York, USA",
      location: "New York, USA",
      dateRange: "February 2023 - Present",
      role: "Freelance designer, New York, Senior Product Designer",
      tags: ["UI/UX"],
    },
    {
      company: "Innovative Designs Inc, USA",
      location: "USA",
      dateRange: "January 2022 - February 2023",
      role: "Lead Product Designer, San Francisco - Clothing brand experiences",
      tags: ["Branding"],
    },
    {
      company: "Visionary Creations Ltd, UK",
      location: "UK",
      dateRange: "February 2022 - Present",
      role: "Principal Designer, London - Clothing brand experiences",
      tags: ["Branding", "UI/UX"],
    },
    {
      company: "FutureTech, Berlin, Germany",
      location: "Berlin, Germany",
      dateRange: "February 2022 - Present",
      role: "Senior Product Designer",
      tags: [],
      expanded: {
        images: [
          "https://picsum.photos/id/1016/400/400",
          "https://picsum.photos/id/1024/400/400",
          "https://picsum.photos/id/1035/400/400",
        ],
        paragraph:
          "Here I had the opportunity to work on an exciting range of design projects, collaborating with cross-functional teams to elevate strategic product design initiatives and stay sharpened for evolving design challenges.",
      },
    },
    {
      company: "Expert Designs Inc, USA",
      location: "USA",
      dateRange: "February 2022 - Present",
      role: "Freelance designer, New York, Senior Product Designer",
      tags: ["Branding"],
    },
  ] satisfies ExperienceRow[],
};

export const ctaBannerContent = {
  eyebrow: "Your Next Free Consultation Now!",
  heading: "Exclusive Winter Deal Days Get a Free Consultation!",
  subtext:
    "Book your free consultation today and let's craft a design strategy tailored to your goals.",
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

export type BlogPost = {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
};

export const blogContent = {
  eyebrow: "• Blogs",
  heading: "Design Insights & Trends",
  posts: [
    {
      title: "Conducting In-Depth Research and Usability Testing",
      excerpt:
        "Conducting in-depth research and usability testing to inform design decisions.",
      category: "Research",
      readTime: "5 min read",
      image: "https://picsum.photos/id/180/700/700",
    },
    {
      title: "Designing Cohesive Strategies and Visual Identities",
      excerpt: "Designing cohesive strategies and visual identities for brands.",
      category: "Branding",
      readTime: "5 min read",
      image: "https://picsum.photos/id/190/700/700",
    },
    {
      title: "Providing Expert Advice and Strategic Guidance",
      excerpt: "Providing expert advice and strategic guidance to product teams.",
      category: "Strategy",
      readTime: "5 min read",
      image: "https://picsum.photos/id/201/700/700",
    },
  ] satisfies BlogPost[],
};

export const finalCtaContent = {
  heading: "Got a Vision? Let's Bring It to Life!",
  subtext:
    "I'm always excited to collaborate on new and innovative projects. Whether you're starting from scratch or refining an existing idea, let's talk.",
  cta: "Book A Call",
};

export const footerContent = {
  links: [
    { label: "Home", href: "#" },
    { label: "About Me", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Services", href: "#services" },
    { label: "Blog", href: "#blog" },
  ],
  email: siteConfig.email,
  legal: `© ${new Date().getFullYear()} ${siteConfig.name}. All rights reserved.`,
};
