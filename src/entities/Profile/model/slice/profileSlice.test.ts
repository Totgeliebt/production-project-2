import {
    profileActions,
    profileReducer,
    ProfileSchema,
    updateProfileData,
    ValidateProfileError,
} from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

const data = {
    username: 'admin',
    age: 22,
    country: Country.Ukraine,
    lastname: 'Ulbi TV',
    first: 'Timur',
    city: 'Moscow',
    currency: Currency.RUB,
};
describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true)))
            .toEqual({ readonly: true });
    });
    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {};
        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit()))
            .toEqual({
                readonly: true,
                validateErrors: undefined,
            });
    });
    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: { username: 'tim' },
        };
        expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({ username: 'timur' })))
            .toEqual({
                form: { username: 'timur' },
            });
    });
    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateError: [ValidateProfileError.SERVER_ERROR],
        };
        expect(profileReducer(state as ProfileSchema, updateProfileData.pending))
            .toEqual({
                isLoading: true,
                validateError: undefined,
            });
    });
    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, '')))
            .toEqual({
                isLoading: false,
                validateError: undefined,
                readonly: true,
                form: data,
                data,
            });
    });
});
