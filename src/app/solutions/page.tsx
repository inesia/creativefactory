import React from 'react';
import styles from './Solutions.module.css';

export default function SolutionsPage() {
  const pillars = [
    { title: 'Live Commerce Studios', desc: 'Fasilitas streaming profesional untuk brand dan kreator yang fokus pada penjualan langsung interaktif.' },
    { title: 'Broadcast & Podcast Studio', desc: 'Ruang kedap suara dengan peralatan audio-video mutakhir untuk produksi podcast dan siaran berkualitas tinggi.' },
    { title: 'Creator Studio', desc: 'Set modular dengan berbagai latar belakang estetis untuk produksi konten kreatif harian (TikTok, Reels, Shorts).' },
    { title: 'Digital Skills Academy', desc: 'Pusat pelatihan intensif untuk mengasah skill dari videografi, copywriting, hingga strategi pemasaran digital.' },
    { title: 'Creator Network', desc: 'Jejaring kolaborasi yang menghubungkan Anda dengan kreator lokal lainnya serta brand dari seluruh Indonesia.' },
    { title: 'Commerce & Affiliate Center', desc: 'Sistem dukungan afiliasi yang memudahkan kreator mendapatkan komisi dari penjualan produk mitra kami.' },
  ];

  return (
    <main>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <span className={styles.categoryTag}>Our Solutions</span>
          <h1 className={styles.title}>An Ecosystem Built for Impact</h1>
          <p className={styles.description}>
            PCFN bukan sekadar penyewaan studio. Kami menyediakan solusi 
            end-to-end yang dirancang khusus untuk memenuhi kebutuhan produksi, 
            pembelajaran, dan komersialisasi bagi seluruh pelaku ekonomi kreatif.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>The Core Facilities</h2>
          <div className={styles.grid}>
            {pillars.map((p, idx) => (
              <div key={idx} className={styles.solutionCard}>
                <div className={styles.iconWrapper}>0{idx + 1}</div>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
