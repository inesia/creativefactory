import React from 'react';
import { siteContent } from '@/content/home';
import styles from './SiteFooter.module.css';

export const SiteFooter: React.FC = () => {
  const { copyright, websiteUrl } = siteContent.footer;

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.copyright}>{copyright}</span>
        <a
          href={`https://${websiteUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.domainLink}
        >
          {websiteUrl}
        </a>
      </div>
    </footer>
  );
};
