import React from 'react';
import { siteContent, HowItWorksItem } from '@/content/home';
import styles from './HowItWorks.module.css';

export const HowItWorks: React.FC = () => {
  const { sectionLabel, heading, description, items } = siteContent.howItWorks;

  const getThemeClass = (theme: HowItWorksItem['cardTheme']) => {
    switch (theme) {
      case 'darkTeal':
        return styles.cardDarkTeal;
      case 'midnightTeal':
        return styles.cardMidnightTeal;
      case 'white':
      default:
        return styles.cardWhite;
    }
  };

  return (
    <section id="how-it-works" className={styles.section} aria-labelledby="how-it-works-heading">
      <div className="container">
        <div className={styles.headerRow}>
          <div className={styles.leftCol}>
            <span className={styles.sectionLabel}>{sectionLabel}</span>
            <h2 id="how-it-works-heading" className={styles.title}>
              <span className={styles.titleLine}>{heading.line1}</span>
              <span className={styles.titleLine}>{heading.line2}</span>
            </h2>
          </div>

          <div className={styles.rightCol}>
            <p className={styles.sectionDesc}>{description}</p>
          </div>
        </div>

        <div className={styles.grid}>
          {items.map((item) => (
            <div
              key={item.number}
              className={`${styles.card} ${getThemeClass(item.cardTheme)}`}
            >
              {item.number && <span className={styles.cardLabel}>{item.number}</span>}
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
