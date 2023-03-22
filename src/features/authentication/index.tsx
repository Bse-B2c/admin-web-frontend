import LoginForm from '@features/authentication/components/LoginForm';
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
	authApi,
	getToken,
	getRefreshToken,
	removeTokens,
	setTokens,
};
