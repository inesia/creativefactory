import React from 'react';
import Link from 'next/link';
import styles from './Programs.module.css';

export default function ProgramsPage() {
  const pathways = [
    {
      id: 'b2b',
      code: '01 / B2B',
      title: 'Business Partners',
      desc: 'Solusi end-to-end untuk brand dan korporasi. Dari kampanye digital bersama ratusan kreator lokal, produksi konten berkualitas tinggi, pelatihan tim in-house, hingga manajemen live commerce terpadu.',
      cta: 'Mulai Kolaborasi'
    },
    {
      id: 'talent',
      code: '02 / TALENT',
      title: 'Creators & Learners',
      desc: 'Bergabunglah untuk mengasah skill Anda. Kami menyediakan kurikulum komprehensif, ruang untuk membangun portofolio riil, dan kesempatan terlibat langsung dalam proyek komersial di kota Anda.',
      cta: 'Lihat Program Pelatihan'
    },
    {
      id: 'trainer',
      code: '03 / TRAINER',
      title: 'Become a Trainer',
      desc: 'Bagi Anda yang sudah memiliki pengalaman mumpuni, mari berbagi ilmu. Ikuti seleksi, dapatkan sertifikasi Training of Trainers (TOT) internal kami, dan jadilah pengajar resmi di jaringan Promedia.',
      cta: 'Daftar Jadi Trainer'
    },
    {
      id: 'network',
      code: '04 / NETWORK',
      title: 'Regional Partners',
      desc: 'Bawa ekosistem Creator Factory ke kota Anda. Kami mencari mitra daerah yang siap berkolaborasi menyediakan fasilitas fisik dengan dukungan manajemen operasi dan kurikulum dari Promedia.',
      cta: 'Pelajari Sistem Kemitraan'
    }
  ];

  return (
    <main>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <span className={styles.categoryTag}>Our Programs</span>
          <h1 className={styles.title}>Find Your Path in the Network</h1>
          <p className={styles.description}>
            Ekosistem kami dirancang untuk menampung berbagai peran. 
            Apapun latar belakang Anda, baik sebagai individu yang ingin belajar 
            maupun korporasi yang butuh solusi, Anda akan menemukan jalurnya di sini.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.pathwaysWrapper}>
            {pathways.map((path) => (
              <div key={path.id} className={styles.pathwayRow}>
                <div className={styles.pathwayVisual}>
                  {path.code}
                </div>
                <div className={styles.pathwayInfo}>
                  <div className={styles.pathCode}>{path.code}</div>
                  <h2 className={styles.pathTitle}>{path.title}</h2>
                  <p className={styles.pathDesc}>{path.desc}</p>
                  <Link href="/contact" className={styles.pathCta}>
                    {path.cta} &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
