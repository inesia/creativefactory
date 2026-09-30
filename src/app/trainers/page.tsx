import React from 'react';
import styles from './Trainers.module.css';

export default function TrainersPage() {
  const trainers = [
    {
      name: 'Rizky Pratama',
      expertise: 'Live Commerce Expert',
      bio: 'Memiliki pengalaman 5+ tahun dalam mengelola kampanye live streaming untuk top brand FMCG di TikTok Shop dan Shopee Live.'
    },
    {
      name: 'Siti Aisyah',
      expertise: 'Digital Marketing Strategist',
      bio: 'Mantan Head of Marketing di startup unicorn. Spesialis dalam growth hacking, SEO, dan paid advertising untuk UMKM.'
    },
    {
      name: 'Budi Santoso',
      expertise: 'Video Production Specialist',
      bio: 'Sutradara komersial yang telah memproduksi ratusan video kampanye. Menguasai alur produksi dari pra hingga pasca.'
    },
    {
      name: 'Andi Wijaya',
      expertise: 'Copywriting & Content Strategy',
      bio: 'Content creator dengan 1M+ followers. Mengajarkan seni storytelling dan hook writing untuk memancing engagement.'
    },
    {
      name: 'Maya Indah',
      expertise: 'Affiliate Marketing Coach',
      bio: 'Telah membimbing lebih dari 1000 afiliator pemula untuk mencapai omzet jutaan rupiah pertama mereka melalui media sosial.'
    },
    {
      name: 'David Kurniawan',
      expertise: 'Podcast & Audio Engineer',
      bio: 'Producer podcast no.1 di Indonesia. Berbagi teknik wawancara, sound engineering, dan monetisasi konten audio.'
    }
  ];

  return (
    <main>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.categoryTag}>Our Experts</span>
          <h1 className={styles.title}>Learn from the Best</h1>
          <p className={styles.description}>
            Di PCFN, Anda tidak hanya belajar teori. Para pengajar kami adalah praktisi 
            aktif di industri yang telah bersertifikasi untuk membagikan pengalaman nyata mereka.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            {trainers.map((trainer, idx) => (
              <div key={idx} className={styles.trainerCard}>
                <div className={styles.imagePlaceholder}>
                  [Foto: {trainer.name}]
                </div>
                <div className={styles.info}>
                  <h3 className={styles.name}>{trainer.name}</h3>
                  <div className={styles.expertise}>{trainer.expertise}</div>
                  <p className={styles.bio}>{trainer.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
