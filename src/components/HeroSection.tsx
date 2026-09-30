import React from 'react';
import Link from 'next/link';
import { siteContent } from '@/content/home';
import styles from './HeroSection.module.css';

export const HeroSection: React.FC = () => {
  const { categoryLabel, heading, description, ctaPrimary, ctaSecondary, watermark } =
    siteContent.hero;

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={`container ${styles.inner}`}>
        <div className={styles.textCol}>
          <span className={styles.categoryTag}>{categoryLabel}</span>

          <h1 id="hero-heading" className={styles.title}>
            <span className={styles.titleLine}>{heading.line1}</span>
            <span className={styles.titleLine}>{heading.line2}</span>
            <span className={styles.titleLine}>{heading.line3}</span>
            <span className={styles.titleLine}>{heading.line4}</span>
          </h1>

          <p className={styles.description}>{description}</p>

          <div className={styles.ctaGroup}>
            <Link href={ctaPrimary.href} className={styles.primaryBtn}>
              {ctaPrimary.label}
            </Link>
            <Link href={ctaSecondary.href} className={styles.secondaryBtn}>
              {ctaSecondary.label}
            </Link>
          </div>
        </div>

        <div className={styles.watermark} aria-hidden="true">
          {watermark}
        </div>
      </div>
    </section>
  );
};
