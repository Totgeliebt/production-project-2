import { FC, lazy } from 'react';
import { addCommentFormProps } from 'features/addCommentForm';

export const AddCommentFormAsync = lazy<FC<addCommentFormProps>>(() => new Promise((resolve) => {
    // @ts-ignore
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
    setTimeout(() => resolve(import('./AddCommentForm')), 1500);
}));
