import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { CommentCard } from '../CommentsCard/CommentCard';
import cls from './CommentList.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const {
        className,
        comments,
        isLoading,
    } = props;
    const { t } = useTranslation('article');
    if (isLoading) {
        return (
            <div className={classNames(cls.CommentList, {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </div>
        );
    }
    if (!comments) {
        return null;
    }
    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length ? comments?.map((comment) => (
                <CommentCard isLoading={isLoading} className={cls.comment} comment={comment} />
            )) : (
                <Text title={t('Комментарии отсутствуют')} />
            )}
        </div>
    );
});
