import { User } from '@/model/User';
import { authApi } from '@features/authentication';

export const useAuthUser = (): User | undefined => {
	const state = authApi.endpoints.getMe.useQueryState();

	return state?.data;
};
