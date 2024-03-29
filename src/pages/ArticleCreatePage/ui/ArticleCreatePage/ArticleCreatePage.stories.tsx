import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleCreatePage } from './ArticleCreatePage';

export default {
    title: 'shared/ArticleCreatePage',
    component: ArticleCreatePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleCreatePage>;

const Template: ComponentStory<typeof ArticleCreatePage> = (args) => <ArticleCreatePage {...args} />;

export const Normal = Template.bind({});

Normal.args = {};
