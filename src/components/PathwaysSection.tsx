import React from 'react';
import Link from 'next/link';
import { siteContent } from '@/content/home';
import styles from './PathwaysSection.module.css';

export const PathwaysSection: React.FC = () => {
  const { sectionLabel, heading, description, items } = siteContent.pathways;

  return (
    <section id="pathways" className={styles.section} aria-labelledby="pathways-heading">
      <div className="container">
        <div className={styles.headerRow}>
          <div className={styles.leftCol}>
            <span className={styles.sectionLabel}>{sectionLabel}</span>
            <h2 id="pathways-heading" className={styles.title}>
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
              key={item.id}
              id={item.id}
              className={`${styles.card} ${
                item.isPrimaryHighlight ? styles.cardHighlight : styles.cardDark
              }`}
            >
              <div>
                <span className={styles.cardLabel}>{item.code}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>

              <Link href={item.ctaHref} className={styles.cardCta}>
                {item.ctaText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
