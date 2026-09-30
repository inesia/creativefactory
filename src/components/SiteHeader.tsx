'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { siteContent } from '@/content/home';
import styles from './SiteHeader.module.css';

export const SiteHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { brand, navItems, contactCta } = siteContent.header;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brandGroup} aria-label={`${brand.name} ${brand.subname}`}>
          <span className={styles.brandTitle}>{brand.name}</span>
          <span className={styles.brandSubtitle}>{brand.subname}</span>
          <span className={styles.brandDot} aria-hidden="true">●</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.nav} aria-label="Main Navigation">
          {navItems.map((item) => (
            <React.Fragment key={item.label}>
              {item.isDisabled ? (
                <span
                  className={`${styles.navLink} ${styles.disabled}`}
                  role="link"
                  aria-disabled="true"
                  title={item.disabledReason}
                  tabIndex={0}
                >
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          ))}
          <Link href={contactCta.href} className={styles.contactBtn}>
            {contactCta.label}
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className={styles.mobileToggle}
          type="button"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Tutup navigasi' : 'Buka navigasi'}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={styles.hamburgerLine}
            style={{
              transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            }}
          />
          <span
            className={styles.hamburgerLine}
            style={{
              opacity: isOpen ? 0 : 1,
            }}
          />
          <span
            className={styles.hamburgerLine}
            style={{
              transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            }}
          />
        </button>

        {/* Mobile Drawer */}
        {isOpen && (
          <div className={styles.mobileMenu} role="dialog" aria-modal="true">
            {navItems.map((item) => (
              <React.Fragment key={item.label}>
                {item.isDisabled ? (
                  <span
                    className={`${styles.navLink} ${styles.disabled}`}
                    role="link"
                    aria-disabled="true"
                    title={item.disabledReason}
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className={styles.navLink}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </React.Fragment>
            ))}
            <Link
              href={contactCta.href}
              className={styles.contactBtn}
              onClick={() => setIsOpen(false)}
            >
              {contactCta.label}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
