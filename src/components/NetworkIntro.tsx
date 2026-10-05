import React from 'react';
import Link from 'next/link';
import { siteContent } from '@/content/home';
import styles from './NetworkIntro.module.css';

export const NetworkIntro: React.FC = () => {
  const { heading, description, cta } = siteContent.networkIntro;

  return (
    <section className={styles.introSection} aria-label="Network Overview">
      <div className="container">
        <div className={styles.banner}>
          <div className={styles.leftCol}>
            <h2 className={styles.title}>
              <div>{heading.line1}</div>
              <div>{heading.line2}</div>
            </h2>
          </div>

          <div className={styles.midCol}>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
