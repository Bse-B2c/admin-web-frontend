import React, { FC } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useGetMeQuery } from '@features/authentication/services/auth';

interface RequireAuthStateProps {
	allowedRole: number;
}
interface RequireAuthDispatchProps {}

type RequireAuthProps = RequireAuthStateProps & RequireAuthDispatchProps;

const RequireAuth: FC<RequireAuthProps> = ({ allowedRole }) => {
	const location = useLocation();
	const { data, isLoading, isFetching } = useGetMeQuery();

	if (isLoading || isFetching) return null;

	if (data && data.id) {
		if (data.roles && !data.roles.includes(allowedRole))
			return <Navigate to={'/forbidden'} state={{ from: location }} replace />;

		return <Outlet />;
	}

	return <Navigate to={'/login'} state={{ from: location }} replace />;
};

export default RequireAuth;
