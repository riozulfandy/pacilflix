import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Mutex } from 'async-mutex';

const mutex = new Mutex();
const baseQuery = fetchBaseQuery({
	baseUrl: `${process.env.NEXT_PUBLIC_HOST}/api`,
	credentials: 'include',
});


export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: baseQuery,
	endpoints: builder => ({}),
});
