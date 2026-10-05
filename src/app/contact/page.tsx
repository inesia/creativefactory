import React from 'react';
import styles from './Contact.module.css';

export default function ContactPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.categoryTag}>Get In Touch</span>
          <h1 className={styles.title}>Let's Build What's Next</h1>
          <p className={styles.description}>
            Bawa kebutuhan bisnis Anda, bergabung sebagai trainer atau kreator, atau 
            membangun Creator Factory di daerah.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`container ${styles.grid}`}>
          <div className={styles.contactInfo}>
            <h2>Hubungi Kami</h2>
            <div className={styles.infoItem}>
              <div className={styles.infoLabel}>Alamat Kantor Pusat</div>
              <div className={styles.infoText}>
                Promedia HQ<br/>
                Jl. Terusan Halimun No.52, Lkr. Sel., Kec.<br/>
                Lengkong, Kota Bandung, Jawa Barat 40263
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoLabel}>Email</div>
              <div className={styles.infoText}>marcomm@promediateknologi.id</div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoLabel}>Telepon / WhatsApp</div>
              <div className={styles.infoText}>0811-2007-667</div>
            </div>
          </div>

          <div className={styles.contactForm}>
            <form>
              <div className={styles.formGroup}>
                <label>Nama Lengkap</label>
                <input type="text" placeholder="Masukkan nama Anda" />
              </div>
              <div className={styles.formGroup}>
                <label>Email</label>
                <input type="email" placeholder="nama@email.com" />
              </div>
              <div className={styles.formGroup}>
                <label>Tujuan Kemitraan</label>
                <select>
                  <option>Menjadi Kreator / Peserta Pelatihan</option>
                  <option>Kerjasama Brand (B2B)</option>
                  <option>Mendaftar sebagai Trainer</option>
                  <option>Membuka Cabang (Regional Partner)</option>
                  <option>Lainnya</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Pesan</label>
                <textarea placeholder="Ceritakan detail kebutuhan Anda..."></textarea>
              </div>
              <button type="button" className={styles.submitBtn}>Kirim Pesan</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
