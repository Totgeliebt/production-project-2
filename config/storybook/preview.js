import { addDecorator } from '@storybook/react';
import { StyledDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { RouteDecorator } from '../../src/shared/config/storybook/RouteDecorator/RouteDecorator';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(StyledDecorator);
addDecorator(RouteDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
