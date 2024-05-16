import { useEffect } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { setAuth, finishInitialLoad, setUsername, setNegara } from '@/redux/features/authSlice';
import Cookies from 'js-cookie';
import { query } from '@/db';

export default function useVerify() {
	const dispatch = useAppDispatch();

	const username = Cookies.get('username');


	useEffect(() => {
		query('SELECT * FROM pengguna_login WHERE username = $1', [username]).then((result) => {
			if (result.length > 0) {
				dispatch(setAuth());
				dispatch(setUsername(username));
				query('SELECT negara_asal FROM pengguna WHERE username = $1', [username]).then((result) => {
					dispatch(setNegara(result[0].negara_asal));
				});
			}
		}).finally(() => {
			dispatch(finishInitialLoad());
		});
	}, []);
}
