// SEO Configuration and utilities for 7xcoder.com

export const updateMetaTags = (
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
) => {
  // Update title
  document.title =
    title || "7xcoder.com - Digital Marketing & Creative Services";

  // Update or create meta tags
  const metaTags = {
    'meta[name="description"]':
      description ||
      "7xcoder.com is a premier software agency providing digital marketing, web apps, branding, graphic design, and creative services in Noida, UP, founded by Chandan Kumar.",
    'meta[name="keywords"]':
      keywords ||
      "7xcoder, Chandan Kumar, digital marketing, software agency, web development, graphic design, SEO, branding, Noida, NCR, UP",
    'meta[property="og:title"]': title || "7xcoder.com - Software Agency Noida",
    'meta[property="og:description"]':
      description || "Comprehensive digital marketing and software development services by Chandan Kumar.",
    'meta[property="og:url"]':
      canonicalUrl || "https://7xcoder.onrender.com/",
    'meta[property="og:image"]':
      ogImage || "https://7xcoder.onrender.com/Logo PNG.png",
  };

  Object.entries(metaTags).forEach(([selector, content]) => {
    let element = document.querySelector(selector);
    if (!element) {
      element = document.createElement("meta");
      const [tagType, attrValue] =
        selector.split("[name=")[1] || selector.split("[property=")[1];
      const attr = selector.includes("property") ? "property" : "name";
      element.setAttribute(attr, attrValue.replace('"]', ""));
      document.head.appendChild(element);
    }
    element.setAttribute("content", content);
  });

  // Update canonical link
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = canonicalUrl || "https://7xcoder.onrender.com/";
};

export const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    // We are extending to a multi-type or using Organization/LocalBusiness
    additionalType: ["http://schema.org/Organization", "http://schema.org/LocalBusiness"],
    name: "7xcoder.com",
    description: "Digital Marketing & Software Agency in Noida",
    url: "https://7xcoder.onrender.com",
    logo: "https://7xcoder.onrender.com/logo-favicon.png",
    founder: {
      "@type": "Person",
      name: "Chandan Kumar",
    },
    foundingDate: "2024",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bahlolpur sec-63A noida,up",
      addressLocality: "Noida",
      addressRegion: "UP",
      postalCode: "201301",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: "+91-85273-07240",
      areaServed: "IN",
    },
    areaServed: ["IN", "Global"],
    sameAs: [
      "https://www.facebook.com/7xcodermedia",
      "https://www.instagram.com/7xcodermedia",
      "https://www.linkedin.com/company/7xcodermedia",
      "https://twitter.com/7xcodermedia",
    ],
  },

  service: (title, description) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description: description,
    provider: {
      "@type": "LocalBusiness",
      name: "7xcoder.com",
      url: "https://7xcoder.onrender.com",
    },
  }),

  article: (title, description, image, datePublished) => ({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    image: image,
    datePublished: datePublished,
    author: {
      "@type": "Organization",
      name: "7xcoder.com",
    },
  }),
};

export const pageConfigs = {
  home: {
    title: "7xcoder.com - Top Digital Marketing & Software Agency in Noida",
    description:
      "Award-winning digital agency in Noida led by Chandan Kumar, offering scalable software solutions, web development, SEO, branding, and creative services.",
    keywords:
      "7xcoder, 7xcoder.com, Chandan Kumar, digital marketing, software agency Noida, web design, SEO, custom software",
    canonicalUrl: "https://7xcoder.onrender.com/",
  },
  about: {
    title: "About Us - 7xcoder.com | Software Agency Noida",
    description:
      "Learn about 7xcoder.com's mission, our founder Chandan Kumar, and our approach to delivering innovative software and digital solutions in Noida.",
    keywords:
      "about 7xcoder, Chandan Kumar, digital agency Noida, software company, creative team UP",
    canonicalUrl: "https://7xcoder.onrender.com/about",
  },
  contact: {
    title: "Contact Us - 7xcoder.com | Digital Agency in Noida, UP",
    description:
      "Contact 7xcoder.com at Bahlolpur sec-63A Noida for digital marketing, web app development, and creative IT services. Get a quote today.",
    keywords:
      "contact 7xcoder, contact Chandan Kumar, web design agency Noida, branding services UP",
    canonicalUrl: "https://7xcoder.onrender.com/contact",
  },
  blog: {
    title: "Blog - 7xcoder.com | Technology & Marketing Insights",
    description:
      "Read the latest insights from 7xcoder.com on modern software development, digital marketing, web design, SEO, and tech trends.",
    keywords:
      "7xcoder blog, digital marketing tips, web development tutorials, software engineering, SEO guide",
    canonicalUrl: "https://7xcoder.onrender.com/blog",
  },
  career: {
    title: "Careers - 7xcoder.com | Join Our Software Agency",
    description:
      "Join the 7xcoder team in Noida! We're hiring talented developers, designers, and marketers. Grow your career with Chandan Kumar and team.",
    keywords: "careers at 7xcoder, IT jobs Noida, hiring developers, web design jobs, marketing roles",
    canonicalUrl: "https://7xcoder.onrender.com/career",
  },
};

export const addSchemaMarkup = (schemaData) => {
  let script = document.querySelector('script[type="application/ld+json"]');
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(schemaData);
};
