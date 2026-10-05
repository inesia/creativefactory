import React from 'react';
import styles from './About.module.css';

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <span className={styles.categoryTag}>Our Story</span>
          <h1 className={styles.title}>Empowering the Next Generation of Local Creators</h1>
          <p className={styles.description}>
            Promedia Creator Factory Network (PCFN) hadir untuk meruntuhkan batasan geografis.
            Kami menghubungkan talenta daerah dengan fasilitas produksi kelas nasional,
            keterampilan terkini, dan akses langsung ke jaringan bisnis yang luas.
          </p>
        </div>
      </section>

      {/* The Problem & Our Solution */}
      <section className={styles.section}>
        <div className={`container ${styles.grid}`}>
          <div className={styles.textCol}>
            <h2>Why We Built This Ecosystem</h2>
            <p>
              Selama ini, ekosistem konten digital dan peluang komersial terpusat di ibu kota.
              Banyak talenta lokal berbakat di berbagai daerah kehilangan kesempatan karena kurangnya
              akses terhadap peralatan profesional, ruang studio yang memadai, maupun kurikulum 
              pelatihan yang tepat guna.
            </p>
            <p>
              Melalui Creator Factory, Promedia mendirikan simpul-simpul produksi (production nodes)
              di berbagai kota. Kami tidak hanya menyediakan ruangan dan kamera, tetapi juga ekosistem
              pembelajaran, pendampingan, hingga penyaluran peluang kerja (Job Center) dan kolaborasi
              dengan UMKM lokal hingga brand nasional (Commerce Center).
            </p>
          </div>
          <div className={styles.imageCol}>
            [Image: Local Talents Collaborating]
          </div>
        </div>
      </section>

      {/* Stats / Impact Section */}
      <section className={styles.sectionDark}>
        <div className="container">
          <div className={styles.textCol}>
            <h2>Building Local Talents, Creating National Impact</h2>
            <p>
              Visi kami sederhana: setiap ide kreatif dari ujung daerah pun bisa menjadi 
              konten berkualitas, dan setiap konten harus mampu membuka pintu rezeki dan
              peluang yang berkelanjutan.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
