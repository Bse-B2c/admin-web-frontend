import LoginForm from '@features/authentication/components/LoginForm';
import RequireAuth from '@features/authentication/components/RequireAuth';
import {
	getToken,
	getRefreshToken,
	setTokens,
	removeTokens,
} from '@features/authentication/utils/utilsAuth';
import { Tokens } from '@features/authentication/model/Tokens';
import { authApi } from '@features/authentication/services/auth';

export type { Tokens };
export {
	LoginForm,
	RequireAuth,
	authApi,
	getToken,
	getRefreshToken,
	removeTokens,
	setTokens,
};
