// CV content. `experience` drives the detailed /cv page; `cvDocument` drives the
// downloadable PDF (/cv-print), which follows the layout of Nour's own CV.
// Shared sections (profile, education, skills, etc.) feed both.

export const headline = 'Marketing & Growth Leader';

export const profile =
  'Marketing & Growth Leader and Co-founder with experience building and scaling brands, go-to-market strategies and revenue engines across MENA and the USA. Proven track record across B2B, D2C and digital transformation environments. I specialize in combining strategy with execution, driving growth through branding, growth marketing, partnerships and scalable systems.';

export const contactLine = {
  location: 'UAE',
  phone: '+971 50 707 3583',
  email: 'nour.essam.ns@gmail.com',
  linkedinHandle: 'nour-essam-taha',
  linkedin: 'https://www.linkedin.com/in/nour-essam-taha/',
  website: 'nouressam.com',
};

export type Role = {
  period: string;
  company: string;
  location: string;
  title: string;
  via?: string;
  freelance?: boolean;
  about?: string;
  intro?: string;
  points?: string[];
  responsibilities?: string[];
  highlights?: string[];
};

export const experience: Role[] = [
  {
    period: '2025 – Present',
    company: 'OxtonGrid',
    location: 'UAE',
    title: 'Co-founder & Chief Marketing Officer (CMO)',
    points: [
      'Co-founded and built the OxtonGrid brand from the ground up, including naming, brand identity, voice and positioning, establishing the company as a digital transformation partner for SMEs and mid-market businesses across MENA.',
      "Designed and developed OxtonGrid's website and conversion infrastructure on Odoo, with a strong focus on SEO, performance, lead generation and future scalability.",
      'Launched a content strategy across LinkedIn and the company blog that positions OxtonGrid as a trusted advisor in digital transformation.',
      'Created and rolled out a partner and referral model with a commission structure, scaling acquisition without increasing fixed costs.',
      'Led brand development, go-to-market strategy and market positioning, with sector-specific messaging for SaaS, retail and logistics.',
      "Created and ran OxtonGrid's social media strategy.",
    ],
  },
  {
    period: '2026',
    company: 'Fotopia',
    location: 'UAE',
    title: 'Product Marketing Consultant',
    points: [
      "Led the go-to-market launch of DigitizeMe, Fotopia's new product, from positioning to launch.",
      "Managed Fotopia's presence at AI Everything Abu Dhabi 2026, from event planning and booth experience to on-site execution.",
      'Revamped the website to support the launch, with new messaging, product pages and lead capture.',
      'Ran social media, PR and paid ads for the launch to build awareness and generate demand.',
    ],
  },
  {
    period: '2026',
    company: 'DIKOCHI',
    location: 'UAE',
    title: 'Growth Expert',
    about: 'DIKOCHI is a UAE-based luxury outlet e-commerce store offering authentic designer fashion, footwear, bags and fragrances at outlet prices, alongside its own Dikochi Originals line.',
    points: [
      'Led the growth strategy for the online store, positioning the brand around authentic luxury at outlet prices and aligning paid media, content, CRM and conversion to grow revenue across the UAE.',
      'Planned and managed performance marketing across Meta, TikTok and Google, with seasonal campaigns around key retail moments such as Ramadan, White Friday and DSF, optimizing for ROAS and acquisition cost.',
      'Optimized the Shopify store from product pages to checkout, and built email and CRM journeys (back-in-stock, abandoned-cart and win-back flows) to lift conversion, order value and repeat purchases.',
      'Grew the brand on Instagram, TikTok and Facebook through content and influencer collaborations, tracking performance in analytics dashboards to run weekly growth experiments.',
    ],
  },
  {
    period: '2026',
    company: 'Deniz Moda IQ',
    location: 'Iraq',
    title: 'Paid Ads & CRO Expert',
    via: 'Toptal',
    points: [
      'Drove the growth marketing strategy, aligning content, paid media and conversion.',
      'Increased sales compared with the previous six months.',
      'Delivered 3 ads with the lowest cost per result of the past year.',
      'Developed a content guide the content team uses to create high-performing ads.',
    ],
  },
  {
    period: '2025 – 2026',
    company: 'Kairosa Design LLC',
    location: 'USA',
    title: 'Website and Social Media Manager',
    via: 'Toptal',
    points: [
      'Delivered the branding and positioning strategy, including a new brand book with full brand guidelines.',
      'Audited the tech stack of the old website and recommended improvements.',
      'Created a social media growth strategy for the brand.',
    ],
  },
  {
    period: '2025',
    company: 'Fotopia',
    location: 'UAE',
    title: 'Product Marketing Lead',
    points: [
      "Led the launch of FotoVerifai, Fotopia's AI product, from strategy to execution.",
      'Managed the full product launch lifecycle, including launch events at AI Everything Dubai, AI Festival Dubai and GITEX Morocco.',
      'Led social media, PR and the website launch for the product.',
      'Gathered feedback from customers, partners and field teams to inform product development and marketing content.',
      'Worked with designers, copywriters and performance marketers on demand-generating content, including case studies, blog posts, videos and white papers.',
      'Built sales enablement assets, including pitch decks, one-pagers, battle cards and training materials.',
    ],
  },
  {
    period: '2025',
    company: 'Mishary Alyahya Group',
    location: 'KSA',
    title: 'Marketing Expert',
    via: 'Toptal',
    points: [
      'Managed social media and digital presence to support real estate marketing.',
      'Revamped the WordPress website with new content and a new design in English and Arabic.',
      'Created social media content for Instagram, LinkedIn and X.',
      'Created sales enablement material for the sales team.',
    ],
  },
  {
    period: '2025',
    company: 'Zerene Luxury Home Fragrance',
    location: 'UAE & KSA',
    title: 'Go-to-Market & Product Marketing Lead (KSA Expansion)',
    freelance: true,
    about: 'Zerene is a luxury home fragrance brand specializing in aromatherapy and essential oils, selling primarily through e-commerce and expanding from the UAE into Saudi Arabia.',
    points: [
      "Planned and managed the business setup and go-to-market strategy for Zerene's expansion into Saudi Arabia, including the B2C operating model.",
      'Partnered with two local partners for logistics, sales support and market insights, and built a product-market fit framework to guide them.',
      'Managed product launch and registration for upcoming product lines, coordinating with an international project coordinator on manufacturing.',
      'Led a distributed team of freelancers, including a paid ads marketer and a market researcher, overseeing workflow, vendors and stakeholders.',
      'Validated and refined marketing assets and strategies to fit the cultural and market dynamics of Saudi Arabia.',
    ],
  },
  {
    period: '2024 – 2025',
    company: 'Hope Flower Farm Winery LLC',
    location: 'USA',
    title: 'Shopify Developer',
    via: 'Toptal',
    points: [
      'Led Shopify development and growth strategy, improving conversion and user experience.',
      'Built a custom wholesale solution on Shopify, with a dedicated wholesale collection and a wholesale sign-up form.',
      'Revamped storefront menu items for clearer navigation and better conversion.',
      'Introduced SKU codes for all 2,000+ products for better tracking.',
      'Cleaned up inventory by moving out-of-stock items to draft status.',
      'Removed unnecessary apps to improve site performance and back-end efficiency.',
    ],
  },
  {
    period: 'Mar 2023 – 2025',
    company: 'OneCommerce Group · Shemsi',
    location: 'Egypt, GCC, Morocco, Lebanon',
    title: 'Growth & Marketing Manager / Brand Manager',
    intro:
      "I designed and executed the growth strategy for Shemsi, one of OneCommerce Group's brands, overseeing all marketing functions: branding, digital marketing, content, performance marketing and customer insights.",
    responsibilities: [
      'Shemsi brand management and positioning',
      'Growth strategy development',
      'Media strategy planning and performance marketing',
      'Company website revamp',
      'Customer acquisition, loyalty and retention programs',
      'Content strategy and community-driven growth',
      'Partnerships, collaborations and influencer marketing',
      'Brand awareness and community events',
      'Data analysis, reporting and team management',
    ],
    highlights: [
      'Drove revenue growth and led 11× orders growth',
      'Grew sales 6× in H1 2024 vs 2023',
      'Built a 150+ influencer network contributing 40%+ of revenue',
      'Conceived and executed the Shemsi Wellness Festival',
      '20+ pop-ups executed',
      '150K+ social media followers and 10M+ accounts reached',
      '10+ NGO partners trusting Shemsi as their period underwear supplier',
    ],
  },
  {
    period: 'Aug 2021 – Feb 2023',
    company: 'Taager.com',
    location: 'Egypt · UAE',
    title: 'Marketing Manager',
    about:
      'Taager is a social e-commerce platform that lets resellers sell products online without worrying about inventory, logistics or supply chain.',
    intro:
      "I led projects in market expansion, brand development and customer experience, including new market launches, white-label brands and Taager's after-sales subsidiary.",
    responsibilities: [
      'Market expansion and new market launches',
      'Joint marketing campaigns with key partners and promotional calendars',
      "After-sales marketing strategy through Taager's subsidiary, Jawda",
      'Data-led segmentation and targeting, reaching 120% of sales targets',
      'Managing a cross-functional marketing team',
    ],
    highlights: [
      'Launched Taager in the UAE and hit the yearly target',
      "Launched Jawda and led a 100+ person team running Taager's after-sales service",
      'Launched a plus-size white-label brand for men',
    ],
  },
  {
    // TODO(Nour): confirm exact dates (within 2020 – 2023).
    period: '',
    company: 'Flextock',
    location: 'Egypt',
    title: 'Marketing & Sales Lead · Growth Sales Lead (founding team)',
    about: "Flextock is Egypt's #1 on-demand warehousing and fulfillment platform.",
    intro: 'My role focused on acquiring and retaining high-value strategic clients.',
    responsibilities: [
      'Lead generation',
      'Closing high-value deals with major clients',
      'Building long-term partnerships',
      'Negotiation and contract management',
      'Sales strategy and market research',
      'Team leadership and performance tracking',
    ],
    highlights: [
      'Onboarded 30+ high-value clients',
      'Established the account management department',
      'Retained 97% of clients',
      'Delivered results that contributed to raising a $3M+ YC-backed round',
    ],
  },
];

export const volunteering = [
  { org: 'AIESEC', period: '2015 – 2020' },
  { org: 'Plan International Egypt', period: '2017' },
  { org: 'Terre des Hommes', period: '2016' },
];

// Damietta is intentionally omitted (site-wide decision).
// `inDocument: false` keeps an entry off the downloadable CV (Nour's own CV omits the MBA).
export const education: { degree: string; school?: string; place?: string; period: string; inDocument?: boolean }[] = [
  { degree: 'Master of Business Administration', school: 'Arab Academy for Science, Technology & Maritime Transport', period: '2020 – 2022', inDocument: false },
  { degree: 'Bachelor of English Arts and Literature', place: 'Egypt', period: '2013 – 2017' },
  { degree: 'Undergraduate studies in Applied Arts, Fashion Design', place: 'Egypt', period: '2013 – 2015' },
];

export const skills = [
  'Digital Marketing', 'Growth Marketing', 'Growth Strategy', 'Brand Management', 'Performance Marketing',
  'Content Creation', 'Content Marketing & SEO', 'SEM', 'Social Media Marketing', 'E-commerce',
  'WhatsApp Marketing', 'Email Marketing', 'Customer Experience', 'Project Management', 'Team Leadership',
  'Strategic Planning', 'Data Analysis', 'Event Planning', 'Public Speaking', 'Blog Posting',
];

export const tools = [
  'Odoo', 'WordPress', 'Shopify', 'Canva', 'Hootsuite', 'Coda', 'Buffer', 'Mixpanel', 'Klaviyo', 'Mailchimp',
  'Slack', 'Tableau', 'Google Analytics', 'HubSpot', 'Jira', 'Asana', 'Freshdesk', 'Zendesk', 'Google Workspace',
  'Microsoft Dynamics 365',
];

export const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'English', level: 'Fluent' },
];

export const courses = [
  'Google Project Management',
  'Google Foundations of Digital Marketing & E-commerce',
  'Google Attract and Engage Customers with Digital Marketing',
  'Odoo Functional Certification',
];

// The downloadable CV, in the format of Nour's own document.
// `**text**` renders bold.
export const cvDocument = {
  experience: [
    {
      title: 'Co-founder & Chief Marketing Officer (CMO)',
      org: 'OxtonGrid',
      location: 'UAE',
      period: '2025 – Present',
      bullets: [
        'Co-founded and built OxtonGrid, positioning it as a digital transformation partner across MENA.',
        'Led brand development, GTM strategy and market positioning across SaaS, retail and logistics sectors.',
        'Built website and conversion infrastructure with a strong focus on SEO and lead generation.',
        'Developed a partner/referral model to scale acquisition without increasing fixed costs.',
        'Established content and LinkedIn strategy to position the company as a trusted advisor.',
      ],
    },
    {
      title: 'Product Marketing Consultant',
      org: 'Fotopia',
      location: 'UAE',
      period: '2026',
      bullets: [
        'Led the launch of **DigitizeMe (new product)**, from positioning to go-to-market.',
        'Managed event presence at **AI Everything Abu Dhabi 2026**, from planning to on-site execution.',
        'Revamped the website with new messaging, product pages and lead capture.',
        'Ran **social media, PR and paid ads** for the launch.',
      ],
    },
    {
      title: 'Growth Expert',
      org: 'DIKOCHI (Luxury Outlet E-commerce)',
      location: 'UAE',
      period: '2026',
      bullets: [
        'Led **growth strategy** for a luxury outlet e-commerce store, aligning paid media, content, CRM and conversion.',
        'Managed **performance marketing** across Meta, TikTok and Google, optimizing for ROAS and acquisition cost.',
        'Optimized the **Shopify store experience** to improve conversion rate and average order value.',
        'Built **email and CRM journeys** (abandoned cart, back-in-stock, win-back) to drive repeat purchases.',
        'Planned **seasonal campaigns** around key UAE retail moments (Ramadan, White Friday, DSF).',
      ],
    },
    {
      title: 'Product Marketing Lead',
      org: 'Fotopia',
      location: 'UAE',
      period: '2025',
      bullets: [
        'Led the launch of **FotoVerifai (AI product)** from strategy to execution.',
        'Managed the full product launch lifecycle, including event launches at AI Everything Dubai, AI Festival Dubai and GITEX Morocco.',
        'Built sales enablement assets (pitch decks, one-pagers, battle cards).',
        'Led social media, PR and website launch for the product.',
      ],
    },
    {
      title: 'Growth & Marketing Manager / Brand Manager',
      org: 'OneCommerce Group - Shemsi',
      location: 'Egypt, GCC, Morocco, Lebanon',
      period: '2023 – 2025',
      bullets: [
        'Drove revenue growth through marketing strategies and led orders growth 11x.',
        'Planned and led media strategies.',
        'Revamped the company website.',
        'Built a 150+ influencer network, contributing 40%+ of revenue.',
        'Led brand positioning and community-driven growth strategy.',
        'Organized brand awareness and community events.',
        'Conducted multiple partnerships with NGOs.',
      ],
    },
    {
      title: 'Growth & Marketing Roles',
      org: 'Taager | Flextock | Bites',
      location: 'Egypt',
      period: '2020 – 2023',
      summary:
        'Drove market expansion, launched new brands and subsidiaries, built high-performing teams, secured strategic partnerships and delivered measurable growth across startups in e-commerce, logistics and F&B sectors.',
    },
  ] as { title: string; org: string; location: string; period: string; bullets?: string[]; summary?: string }[],
  freelanceNote: 'Alongside full-time roles - international exposure across USA, KSA, Iraq, UAE',
  freelance: [
    'Led **Shopify development and growth strategy** for Hope Flower Farm (USA), improving conversion and user experience.',
    'Drove **growth marketing strategy** for Deniz Moda (Iraq), aligning content, paid media and conversion.',
    'Managed **social media and digital presence** for Mishary Alyahya Group (KSA), supporting real estate marketing.',
    'Led the **Saudi Arabia go-to-market and business setup** for Zerene Luxury Home Fragrance (UAE & KSA), managing local partners, product launch and registration, and a distributed freelance team.',
    'Delivered **branding and positioning strategy** for Kairosa Design (USA), including full brand guidelines.',
  ],
};
