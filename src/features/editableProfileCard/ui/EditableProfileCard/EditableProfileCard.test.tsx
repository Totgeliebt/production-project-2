import { Profile } from 'entities/Profile';
import { ComponentRender } from 'shared/lib/tests/componentRende/ComponentRender';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { userEvent } from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { $api } from 'shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './editableProfileCard';

const profile: Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 23,
    currency: Currency.USD,
    country: Country.Ukraine,
    city: 'Kyiv',
    username: 'admin',
};
const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: {
                id: '1',
                username: 'admin',
            },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};
describe('features/EditableProfileCard', () => {
    test('readonly must switch', async () => {
        ComponentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton'))
            .toBeInTheDocument();
    });
    test('cancel edited fields', async () => {
        ComponentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user');

        expect(screen.getByTestId('ProfileCard.firstname'))
            .toHaveValue('user');
        expect(screen.getByTestId('ProfileCard.lastname'))
            .toHaveValue('user');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));
        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'admin');
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'admin');
    });
    test('error appearing', async () => {
        ComponentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));
        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph'))
            .toBeInTheDocument();
    });
    test('without any errors, sent PUT request to server', async () => {
        const mockPutReq = jest.spyOn($api, 'put');
        ComponentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));
        expect(mockPutReq)
            .toHaveBeenCalled();
    });
});
