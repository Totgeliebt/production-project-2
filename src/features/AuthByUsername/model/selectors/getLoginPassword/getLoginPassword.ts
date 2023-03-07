import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginSPassword = (state: StateSchema) => state?.login?.password || '';
