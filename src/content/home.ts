export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
  isDisabled?: boolean;
  disabledReason?: string;
}

export interface HowItWorksItem {
  number: string;
  stepName: string;
  title: string;
  description: string;
  cardTheme: 'white' | 'darkTeal' | 'midnightTeal';
}

export interface PathwayItem {
  id: string;
  code: string;
  title: string;
  subtitle?: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  isPrimaryHighlight?: boolean;
}

export interface PillarItem {
  number: string;
  name: string;
}

export const siteContent = {
  header: {
    brand: {
      name: 'PROMEDIA',
      subname: 'CREATOR FACTORY NETWORK',
    },
    navItems: [
      { label: 'About', href: '/about' },
      { label: 'Solutions', href: '/solutions' },
      { label: 'Programs', href: '/programs' },
      { label: 'Locations', href: '/locations' },
      { label: 'Trainers', href: '/trainers' },
    ] as NavItem[],
    contactCta: {
      label: 'Contact Us ↗',
      href: '/contact',
    },
  },

  hero: {
    categoryLabel: 'Indonesia Creator Economy',
    heading: {
      line1: 'Where ideas',
      line2: 'become content.',
      line3: 'Content becomes',
      line4: 'opportunity.',
    },
    description:
      'Promedia Creator Factory Network menghubungkan talenta daerah dengan keterampilan, fasilitas produksi, jaringan kreator, dan kebutuhan pasar.',
    ctaPrimary: {
      label: 'Partner With Us ↗',
      href: '#contact',
    },
    ctaSecondary: {
      label: 'Explore Our Network',
      href: '#ecosystem',
    },
    watermark: 'PCFN',
  },

  networkIntro: {
    heading: {
      line1: 'Local talent.',
      line2: 'National opportunity.',
    },
    description:
      'Satu jaringan yang mempertemukan talenta daerah dengan pelatihan, studio, UMKM, brand nasional, hingga peluang kerja.',
    cta: {
      label: 'EXPLORE THE NETWORK ↗',
      href: '#ecosystem',
    },
  },

  howItWorks: {
    sectionLabel: 'HOW IT WORKS',
    heading: {
      line1: 'More than',
      line2: 'a training space.',
    },
    description:
      'Creator Factory dirancang sebagai tempat orang belajar, menghasilkan karya, lalu terhubung dengan kebutuhan bisnis yang nyata.',
    items: [
      {
        number: '',
        stepName: 'Learn',
        title: '1. Learn.',
        description:
          'Pelatihan praktis untuk keterampilan media, kreator, dan perdagangan digital.',
        cardTheme: 'white',
      },
      {
        number: '',
        stepName: 'Make',
        title: '2. Create.',
        description:
          'Produksi konten dan siaran dengan dukungan studio serta pendampingan.',
        cardTheme: 'darkTeal',
      },
      {
        number: '',
        stepName: 'Grow',
        title: '3. Connect.',
        description:
          'Kolaborasi dengan brand, instansi, UMKM, dan pasar melalui jejaring Promedia.',
        cardTheme: 'midnightTeal',
      },
    ] as HowItWorksItem[],
  },

  pathways: {
    sectionLabel: 'FIND YOUR PATH',
    heading: {
      line1: 'One ecosystem.',
      line2: 'Four pathways.',
    },
    description:
      'Pilih peran yang sesuai dengan kebutuhan Anda untuk mulai berkolaborasi.',
    items: [
      {
        id: 'pathway-b2b',
        code: '',
        title: '1. Business Partners',
        description:
          'Kampanye kreatif, produksi konten, hingga layanan pelatihan & livecommerce.',
        ctaText: 'Start a Partnership ↗',
        ctaHref: '#contact',
        isPrimaryHighlight: true,
      },
      {
        id: 'pathway-talent',
        code: '',
        title: '2. Creators & Learners',
        description:
          'Pelajari keterampilan baru, bangun portofolio, dan ikuti pelatihan seru di kota Anda',
        ctaText: 'Explore Programs ↗',
        ctaHref: '#pathway-talent',
        isPrimaryHighlight: false,
      },
      {
        id: 'pathway-trainer',
        code: '',
        title: '3. Become a Trainer',
        description:
          'Bagikan keahlian Anda, ikuti program ToT, dan bimbing generasi kreator berikutnya.',
        ctaText: 'Apply as Trainer ↗',
        ctaHref: '#pathway-trainer',
        isPrimaryHighlight: false,
      },
      {
        id: 'pathway-network',
        code: '',
        title: '4. Regional Partner',
        description:
          'Buka Creator Factory di kota Anda dan bangun pusat pertumbuhan ekonomi digital lokal.',
        ctaText: 'Build With Us ↗',
        ctaHref: '#contact',
        isPrimaryHighlight: false,
      },
    ] as PathwayItem[],
  },

  ecosystem: {
    sectionLabel: 'OUR ECOSYSTEM',
    heading: {
      line1: 'Eight pillars.',
      line2: 'One network.',
    },
    description:
      'Setiap cabang mengembangkan fasilitas dan program sesuai dengan kesiapan daerah dengan tujuan nasional yang sama: menciptakan kemandirian ekonomi digital lokal.',
    pillars: [
      { number: '01', name: 'Live Commerce Studios' },
      { number: '02', name: 'Broadcast & Podcast Studio' },
      { number: '03', name: 'Creator Studio' },
      { number: '04', name: 'Digital Skills Academy' },
      { number: '05', name: 'Creator Network' },
      { number: '06', name: 'Commerce & Affiliate Center' },
      { number: '07', name: 'Media Production Center' },
      { number: '08', name: 'Digital Job Center' },
    ] as PillarItem[],
  },

  closingCta: {
    sectionLabel: "LET'S BUILD WHAT'S NEXT",
    heading: {
      line1: 'Local talent.',
      line2: 'Greater impact.',
    },
    description:
      'Bawa kebutuhan bisnis Anda, bergabung sebagai trainer atau kreator, atau membangun Creator Factory di daerah.',
    button: {
      label: 'Connect With PCFN ↗',
      href: '#contact',
    },
    watermark: 'CREATOR',
  },

  footer: {
    copyright: '© Promedia Creator Factory Network · Part of Promedia Group',
    websiteUrl: 'creatorfactory.promediateknologi.id',
  },
};
