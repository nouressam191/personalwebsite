export const site = {
  name: 'Nour Essam',
  url: 'https://www.nouressam.com',
  tagline: 'Marketer, growth strategist, artist & home cook',
  description:
    'I am Nour Essam, a growth marketing and brand manager working across MENA and the US, and an artist and home cook in my spare time.',
};

export const contact = {
  email: 'nour.essam.ns@gmail.com',
  // Google Calendar appointment booking page (calendar.app.google/...). Paste it here;
  // until then "Book a call" falls back to an email.
  booking: '',
  linkedin: 'https://www.linkedin.com/in/nour-essam-taha/',
  whatsapp: 'https://wa.link/ozvyxr',
  instagramFood: 'https://www.instagram.com/nour.ish.diary/',
  toptal: 'https://www.toptal.com/marketing/resume/nour-essam#vZ79W9',
  adplist: 'https://adplist.org/mentors/nour-essam-mqmnym3n',
  oxtongrid: 'https://www.oxtongrid.com/?utm_source=nouressam.com&utm_medium=referral&utm_campaign=personal_site',
};

export const bookingHref =
  contact.booking || `mailto:${contact.email}?subject=${encodeURIComponent('Booking a call')}`;

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about-me', label: 'About' },
  { href: '/cv', label: 'CV' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/art-projects', label: 'Art' },
  { href: '/cooking', label: 'Cooking' },
];

// The hats I wear, shown under the homepage headline.
export const roles = [
  'Marketing Strategist',
  'Content Copywriter',
  'Graphic Designer & Video Editor',
  'Performance Marketer',
  'Website Designer & Builder',
  'PR Expert',
  'Offline Marketing Expert',
];

export const oxtongrid = {
  services: [
    { title: 'Digital transformation consultancy', tools: 'Strategy-led, practical and scalable' },
    { title: 'ERP implementation', tools: 'Odoo · Zoho' },
    { title: 'E-commerce', tools: 'Shopify · WooCommerce' },
    { title: 'Customer support platforms', tools: 'Zendesk · Freshworks · ZIWO' },
  ],
};

export const services = [
  {
    title: 'Build & grow your brand',
    text: 'From positioning and content to performance marketing, I build brands that people remember and buy from again.',
    href: '/shemsi-mena',
    cta: 'See Shemsi case study',
  },
  {
    title: 'Mentoring',
    text: 'One-to-one guidance for marketers and founders who want to grow faster and avoid the mistakes I already made.',
    href: 'https://adplist.org/mentors/nour-essam-mqmnym3n',
    cta: 'Book a session on ADPList',
  },
  {
    title: 'Business consulting',
    text: 'Growth strategy, market expansion across MENA and the US, and customer experience audits for startups and SMEs.',
    href: '/cv',
    cta: 'View my experience',
  },
  {
    title: 'Art for your walls',
    text: 'Buy one of my ready paintings, or commission a custom piece made by hand for your home or as a one-of-a-kind gift.',
    href: '/art-projects',
    cta: 'Browse my art',
  },
];

// Logo carousel on the homepage. Entries without a `logo` render as a wordmark;
// `tall` gives square logos more height so their text stays readable;
// `showName` prints the name next to a symbol-only logo.
export const organizations: { name: string; logo?: string; tall?: boolean; showName?: boolean }[] = [
  { name: 'OneCommerce', logo: '/images/logos/onecommerce.png', showName: true },
  { name: 'DIKOCHI', logo: '/images/logos/dikochi.png' },
  { name: 'Shemsi', logo: '/images/logos/shemsi.png' },
  { name: 'Taager', logo: '/images/logos/taager.png' },
  { name: 'Jawda', logo: '/images/logos/jawda.svg' },
  { name: 'Flextock', logo: '/images/logos/flextock.png' },
  { name: 'bites', logo: '/images/logos/bites.png', tall: true },
  { name: 'Plan International', logo: '/images/logos/plan-international.svg' },
  { name: 'Terre des Hommes', logo: '/images/logos/terre-des-hommes.svg' },
  { name: 'AIESEC', logo: '/images/logos/aiesec.svg' },
];
