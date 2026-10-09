// Image paths are relative to /public. Leave `image` empty to show a placeholder.

export const art = [
  { title: 'The Field', image: '/images/art/the-field.jpg' },
  { title: 'Blue Ridge Mountains', image: '/images/art/blue-ridge-mountains.jpg' },
  { title: 'Siwa Sunset', image: '/images/art/siwa-sunset.jpg' },
  { title: 'Snow White', image: '/images/art/snow-white.jpg' },
  { title: 'Lonely Dreamer', image: '/images/art/lonely-dreamer.jpg' },
  { title: 'Ponyo', image: '/images/art/ponyo.jpg' },
  { title: 'Blossom', image: '/images/art/blossom.jpg' },
  { title: 'Autumn', image: '/images/art/autumn.jpg' },
];

export const portfolio = [
  {
    company: 'Shemsi',
    role: 'Brand Manager',
    text: 'Took a period underwear brand to 11× sales growth across six MENA markets.',
    href: '/shemsi-mena',
    image: '/images/about/speaking-auc.jpg',
  },
  {
    company: 'Jawda (Taager)',
    role: 'Marketing Manager',
    text: "Launched Taager's B2C warranty and after-sales brand, serving 10K+ users a day.",
    href: '/jawda',
    image: '',
  },
  {
    company: 'Flextock',
    role: 'Marketing & Sales Lead',
    text: 'Founding-team growth: 30+ high-value clients onboarded with 97% retention.',
    href: '/cv',
    image: '',
  },
  {
    company: 'Vimail.io',
    role: 'Freelance Marketer',
    text: 'Freelance marketing work. Case study coming soon.',
    href: '',
    image: '',
  },
];

export const shemsiProjects = [
  {
    title: 'Website content & SEO',
    text: "I wrote all the copy and did the SEO for Shemsi's website.",
    link: { href: 'https://www.myshemsi.com', label: 'Visit website' },
    image: '',
  },
  {
    title: 'Product photoshoot',
    text: 'I led the photoshoot end to end: moodboard, photographer, stylist, make-up artist and models.',
    link: { href: '/photoshoot-highlights', label: 'See highlights' },
    image: '',
  },
  {
    title: 'Influencer partnerships',
    text: 'Built a network of 150+ influencers creating content for Shemsi across Egypt, KSA, UAE and Morocco, contributing 40%+ of revenue.',
    image: '',
  },
  {
    title: 'Offline marketing',
    text: 'Took part in 50+ pop-ups and local bazaars.',
    image: '',
  },
  {
    title: 'PR event: Shemsi Wellness Festival',
    text: 'Conceived and produced a wellness festival around the Shemsi brand.',
    link: { href: 'https://www.instagram.com/myshemsi.wellness/', label: 'Event Instagram' },
    image: '',
  },
  {
    title: 'PR event: press conference',
    text: 'For the partnership announcement between Shemsi and Tadwein for Gender Studies, I co-organized the conference and gave a speech on behalf of Shemsi.',
    image: '/images/about/speaking-auc.jpg',
  },
  {
    title: 'Social impact annual report',
    text: "Through continuous data analysis, I produced Shemsi's first annual impact report.",
    link: { href: 'https://drive.google.com/file/d/1lJygCaMHts0_gJU5IbIeMhJWnggO_AmR/view?usp=sharing', label: 'Read the report' },
    image: '',
  },
  {
    title: 'Cairo Rugby Team sponsorship',
    text: "Empowering women is at the core of Shemsi, so we sponsored the Cairo Rugby Team. It was a great brand fit.",
    image: '',
  },
];

export const shemsiSocial = [
  { platform: 'Instagram', stat: '100K+ followers', href: 'https://www.instagram.com/myshemsi/' },
  { platform: 'Facebook', stat: '50K followers', href: 'https://www.facebook.com/share/VRUPhVSnUCSjdrGd/' },
  { platform: 'TikTok', stat: '10K followers · 1M+ views', href: 'https://www.tiktok.com/@myshemsi.com' },
  { platform: 'LinkedIn', stat: '4K+ followers', href: 'https://www.linkedin.com/company/shemsi/' },
];

export const campaigns = [
  { title: 'Black Friday 2023', text: "Broke both the company's sales and profit benchmarks.", channels: 'Paid & organic Meta, Amazon, Noon, offline', image: '' },
  { title: 'Ramadan 2024', text: "The most successful engagement campaign in the company's history.", channels: 'Meta platforms', image: '' },
  { title: 'Product awareness', text: 'Significantly increased contact and sales rates.', channels: 'Meta platforms & TikTok', image: '' },
  { title: 'Bundle & Save', text: '', channels: 'Meta paid ads', image: '' },
  { title: 'Doctors Recommend Shemsi', text: '', channels: 'Meta influencer collabs & paid ads', image: '' },
  { title: 'Genuine customer reviews', text: '', channels: 'Organic Meta & website', image: '' },
  { title: 'GCC boost campaign', text: '', channels: 'Meta & Google Ads, organic Meta', image: '' },
  { title: 'Launching Dr. Shemsi, AI gynaecologist', text: '', channels: 'Shemsi website & organic channels', image: '' },
  { title: "Valentine's Day", text: '', channels: 'Shemsi website & organic channels', image: '' },
];

export const photoshoot = Array.from({ length: 8 }, (_, i) => ({ image: '', alt: `Shemsi photoshoot 2024, photo ${i + 1}` }));
