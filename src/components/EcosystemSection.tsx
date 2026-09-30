import React from 'react';
import { siteContent } from '@/content/home';
import styles from './EcosystemSection.module.css';

export const EcosystemSection: React.FC = () => {
  const { sectionLabel, heading, description, pillars } = siteContent.ecosystem;

  return (
    <section id="ecosystem" className={styles.section} aria-labelledby="ecosystem-heading">
      <div className="container">
        <div className={styles.headerRow}>
          <div className={styles.leftCol}>
            <span className={styles.sectionLabel}>{sectionLabel}</span>
            <h2 id="ecosystem-heading" className={styles.title}>
              <span className={styles.titleLine}>{heading.line1}</span>
              <span className={styles.titleLine}>{heading.line2}</span>
            </h2>
          </div>

          <div className={styles.rightCol}>
            <p className={styles.sectionDesc}>{description}</p>
          </div>
        </div>

        <div className={styles.grid}>
          {pillars.map((pillar) => (
            <div key={pillar.number} className={styles.card}>
              <span className={styles.cardNum}>{pillar.number}</span>
              <span className={styles.cardName}>{pillar.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
