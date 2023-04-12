import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ProfileCard } from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/storybook.jpg';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    data: {
        username: 'admin',
        age: 22,
        country: Country.Ukraine,
        lastname: 'Ulbi TV',
        first: 'Timur',
        city: 'Moscow',
        currency: Currency.RUB,
        avatar,
    },
};

export const withError = Template.bind({});

withError.args = {
    error: 'error',
};
export const loading = Template.bind({});

loading.args = {
    isLoading: true,
};
