import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation();

    return (
        <section>
            {t('О сайте')}
        </section>
    );
};

export default AboutPage;
