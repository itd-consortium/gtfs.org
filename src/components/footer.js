import React from 'react';
import styles from './footer.module.css';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { getPathForLanguage } from '../lib/i18n'

const Footer = (props) => {
  const { t, i18n } = useTranslation()
  const { className } = props

  return (
    <div className={[styles[className], styles.footer].join(' ')}>
      <div className="container">
        <div className={styles.footerCredits}>
          <Link to={getPathForLanguage('/about', i18n.language)}>{t('menu:About')}</Link>
          <Link to={getPathForLanguage('/license', i18n.language)}>{t('menu:License')}</Link>
          <a href="https://mobilitydata.org/">{t('menu:MobilityData')}</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
