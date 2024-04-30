import { apiSlice } from '../services/apiSlice';

const authApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		login: builder.mutation({
			query: ({ username, password }) => ({
				url: '/auth/login',
				method: 'POST',
				body: { username, password },
			}),
		}),
		register: builder.mutation({
			query: ({
				username,
				password,
				negara
			}) => ({
				url: '/auth/register',
				method: 'POST',
				body: { username, password, negara },
			}),
		}),
		verify: builder.mutation({
			query: () => ({
				url: '/jwt/verify/',
				method: 'POST',
			}),
		}),
		logout: builder.mutation({
			query: () => ({
				url: 'auth/logout/',
				method: 'POST',
			}),
		}),
	}),
});

export const {
	useLoginMutation,
	useRegisterMutation,
	useVerifyMutation,
	useLogoutMutation,
} = authApiSlice;
