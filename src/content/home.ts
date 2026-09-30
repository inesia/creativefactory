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
    categoryLabel: 'MAVERICKS & AHEAD / INDONESIA CREATOR ECONOMY',
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
      'Satu jaringan yang mempertemukan pelatihan, studio, kreator, brand, UMKM, dan peluang kerja.',
    cta: {
      label: 'EXPLORE THE NETWORK ↗',
      href: '#ecosystem',
    },
  },

  howItWorks: {
    sectionLabel: '01 / HOW IT WORKS',
    heading: {
      line1: 'More than',
      line2: 'a training space.',
    },
    description:
      'Creator Factory dirancang sebagai tempat orang belajar, menghasilkan karya, lalu terhubung dengan kebutuhan bisnis yang nyata.',
    items: [
      {
        number: '01 / LEARN',
        stepName: 'Learn',
        title: 'Learn.',
        description:
          'Pelatihan praktis untuk keterampilan media, kreator, dan perdagangan digital.',
        cardTheme: 'white',
      },
      {
        number: '02 / MAKE',
        stepName: 'Make',
        title: 'Create.',
        description:
          'Produksi konten dan siaran dengan dukungan studio serta pendampingan.',
        cardTheme: 'darkTeal',
      },
      {
        number: '03 / GROW',
        stepName: 'Grow',
        title: 'Connect.',
        description:
          'Kolaborasi dengan brand, instansi, UMKM, dan pasar melalui jejaring Promedia.',
        cardTheme: 'midnightTeal',
      },
    ] as HowItWorksItem[],
  },

  pathways: {
    sectionLabel: '02 / FIND YOUR PATH',
    heading: {
      line1: 'One ecosystem.',
      line2: 'Four pathways.',
    },
    description:
      'Jalur dibuat jelas agar setiap pengunjung langsung menemukan langkah yang tepat.',
    items: [
      {
        id: 'pathway-b2b',
        code: '01 / B2B',
        title: 'Business Partners',
        description:
          'Kampanye kreator, produksi konten, pelatihan, dan live commerce.',
        ctaText: 'Start a Partnership ↗',
        ctaHref: '#contact',
        isPrimaryHighlight: true,
      },
      {
        id: 'pathway-talent',
        code: '02 / TALENT',
        title: 'Creators & Learners',
        description:
          'Belajar, membuat portofolio, dan ikut kegiatan di kota Anda.',
        ctaText: 'Explore Programs ↗',
        ctaHref: '#pathway-talent',
        isPrimaryHighlight: false,
      },
      {
        id: 'pathway-trainer',
        code: '03 / TRAINER',
        title: 'Become a Trainer',
        description:
          'Ikuti seleksi, TOT internal, lalu mengajar sesuai penugasan.',
        ctaText: 'Apply as Trainer ↗',
        ctaHref: '#pathway-trainer',
        isPrimaryHighlight: false,
      },
      {
        id: 'pathway-network',
        code: '04 / NETWORK',
        title: 'Regional Partners',
        description:
          'Bangun Creator Factory bersama jaringan Promedia.',
        ctaText: 'Build With Us ↗',
        ctaHref: '#contact',
        isPrimaryHighlight: false,
      },
    ] as PathwayItem[],
  },

  ecosystem: {
    sectionLabel: '03 / OUR ECOSYSTEM',
    heading: {
      line1: 'Eight pillars.',
      line2: 'One network.',
    },
    description:
      'Setiap cabang mengembangkan fasilitas dan program sesuai kesiapan lokal, dengan arah yang sama: dari perhatian menuju transaksi.',
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
      'Bawa kebutuhan bisnis Anda, bergabung sebagai trainer, atau mulai membangun Creator Factory di daerah.',
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
