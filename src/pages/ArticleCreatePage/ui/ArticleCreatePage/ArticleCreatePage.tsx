import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticleCreatePage.module.scss';

interface ArticleCreatePageProps {
    className?: string;
}

export const ArticleCreatePage = memo((props: ArticleCreatePageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.ArticleCreatePage, {}, [className])}>
            ARTICLE CREATE
            PAGE
        </div>
    );
});
