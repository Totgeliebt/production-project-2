import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListBox } from './ListBox';

// @ts-ignore
// @ts-ignore
export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
        // decorators: [
        //     (Story) => <div style={{ padding: '100px' }}><Story /></div>,
        // ],
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});

Normal.args = {
    value: 'open',
    items: [
        {
            content: 'sdfasdf123',
            value: '123',
        },
        {
            content: 'sasdf123',
            value: '345',
        },
    ],
};

export const TopLeft = Template.bind({});

TopLeft.args = {
    direction: 'top left',
    value: 'open',
    items: [
        {
            content: 'sdfasdf123',
            value: '123',
        },
        {
            content: 'sasdf123',
            value: '345',
        },
    ],
};
export const TopRight = Template.bind({});

TopRight.args = {
    direction: 'top right',
    value: 'open',
    items: [
        {
            content: 'sdfasdf123',
            value: '123',
        },
        {
            content: 'sasdf123',
            value: '345',
        },
    ],
};
export const BottomLeft = Template.bind({});

BottomLeft.args = {
    direction: 'bottom left',
    value: 'open',
    items: [
        {
            content: 'sdfasdf123',
            value: '123',
        },
        {
            content: 'sasdf123',
            value: '345',
        },
    ],
};
export const BottomRight = Template.bind({});

BottomRight.args = {
    direction: 'bottom right',
    value: 'open',
    items: [
        {
            content: 'sdfasdf123',
            value: '123',
        },
        {
            content: 'sasdf123',
            value: '345',
        },
    ],
};
