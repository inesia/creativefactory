import React from 'react';
import Link from 'next/link';
import { siteContent } from '@/content/home';
import styles from './ContactSection.module.css';

export const ContactSection: React.FC = () => {
  const { sectionLabel, heading, description, button, watermark } = siteContent.closingCta;

  return (
    <section id="contact" className={styles.section} aria-labelledby="closing-cta-heading">
      <div className={`container ${styles.inner}`}>
        <div className={styles.leftCol}>
          <span className={styles.sectionLabel}>{sectionLabel}</span>
          <h2 id="closing-cta-heading" className={styles.title}>
            <span className={styles.titleLine}>{heading.line1}</span>
            <span className={styles.titleLine}>{heading.line2}</span>
          </h2>
        </div>

        <div className={styles.rightCol}>
          <p className={styles.description}>{description}</p>
          <Link href={button.href} className={styles.ctaBtn}>
            {button.label}
          </Link>
        </div>

        <div className={styles.watermark} aria-hidden="true">
          {watermark}
        </div>
      </div>
    </section>
  );
};
