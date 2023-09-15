import { FC, lazy } from 'react';
import { addCommentFormProps } from 'features/addCommentForm';

export const AddCommentFormAsync = lazy<FC<addCommentFormProps>>(() => import('./AddCommentForm'));
