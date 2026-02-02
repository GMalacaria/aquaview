import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';

const Privacy = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <h1>{t('privacy_title')}</h1>
      <p>{t('privacy_text')}</p>
      <button onClick={() => i18n.changeLanguage(i18n.language === 'it' ? 'en' : 'it')}>
        {t('change_language')}
      </button>
    </div>
  );
};

export default Privacy;
