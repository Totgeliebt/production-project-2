import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'admin' };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('admina')))
            .toEqual({ username: 'admina' });
    });
    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('12345')))
            .toEqual({ password: '12345' });
    });
});
