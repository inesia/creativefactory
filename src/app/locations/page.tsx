import React from 'react';
import styles from './Locations.module.css';

export default function LocationsPage() {
  const branches = [
    {
      city: 'Jakarta',
      address: 'Promedia HQ, Jl. Jendral Sudirman No. Kav 21, Jakarta Selatan',
      status: 'Active',
      facilities: ['Broadcast & Podcast Studio', 'Live Commerce Studios', 'Digital Skills Academy', 'Creator Studio']
    },
    {
      city: 'Bandung',
      address: 'Bandung Creative Hub, Jl. Laswi No. 7, Kota Bandung',
      status: 'Active',
      facilities: ['Creator Studio', 'Digital Skills Academy', 'Commerce & Affiliate Center']
    },
    {
      city: 'Surabaya',
      address: 'Pakuwon Center, Tunjungan Plaza, Surabaya',
      status: 'Active',
      facilities: ['Live Commerce Studios', 'Creator Studio', 'Media Production Center']
    },
    {
      city: 'Medan',
      address: 'DeliPark Podomoro, Jl. Putri Hijau, Medan',
      status: 'Coming Soon',
      facilities: ['Creator Studio', 'Digital Skills Academy']
    },
    {
      city: 'Makassar',
      address: 'Nipah Mall, Jl. Urip Sumoharjo, Makassar',
      status: 'Coming Soon',
      facilities: ['Live Commerce Studios', 'Creator Studio']
    },
    {
      city: 'Banyuwangi',
      address: 'Jl. Letjen S Parman No.7, Sobo, Kec. Banyuwangi, Kabupaten Banyuwangi, Jawa Timur 68418',
      status: 'Coming Soon',
      facilities: ['Live Commerce Studios', 'Broadcast & Podcast Studios', 'Creator Studios', 'Digital Skills Academy']
    },
    {
      city: 'Mojokerto',
      address: '',
      status: 'Coming Soon',
      facilities: []
    },
    {
      city: 'Pandeglang',
      address: '',
      status: 'Coming Soon',
      facilities: []
    }
  ];

  return (
    <main>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.categoryTag}>Our Network</span>
          <h1 className={styles.title}>Creator Factory Locations</h1>
          <p className={styles.description}>
            Kami terus memperluas jaringan ke berbagai daerah di Indonesia. 
            Temukan fasilitas terdekat di kota Anda dan mulailah berkreasi hari ini.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            {branches.map((branch, idx) => (
              <div key={idx} className={styles.locationCard}>
                <h2 className={styles.city}>{branch.city}</h2>
                <div className={branch.status === 'Active' ? `${styles.status} ${styles.statusActive}` : `${styles.status} ${styles.statusComing}`}>
                  {branch.status}
                </div>
                {branch.address && (
                  <p className={styles.address} style={{ marginTop: '16px' }}>{branch.address}</p>
                )}
                {branch.facilities && branch.facilities.length > 0 && (
                  <>
                    <span className={styles.facilitiesLabel}>Available Facilities:</span>
                    <ul className={styles.facilityList}>
                      {branch.facilities.map((fac, i) => (
                        <li key={i}>{fac}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
