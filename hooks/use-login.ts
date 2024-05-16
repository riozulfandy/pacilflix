import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/redux/hooks';
import { setAuth, setNegara, setUsername } from '@/redux/features/authSlice';
import { toast } from 'react-toastify';
import { query } from '@/db';
import Cookies from 'js-cookie';

export default function useLogin() {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const [isLoading, setIsLoading] = useState(false);

	const [formData, setFormData] = useState({
		username: '',
		password: '',
	});

	const { username, password } = formData;

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setFormData({ ...formData, [name]: value });
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		
		event.preventDefault();
		setIsLoading(true);
		query('SELECT * FROM pengguna WHERE username = $1 AND password = $2', [username, password]).then((result) => {
			if (result.length > 0) {
				query("INSERT INTO pengguna_login (username) VALUES ($1)",[username]).then(() => {
					dispatch(setAuth());
					dispatch(setNegara(result[0].negara_asal));
					dispatch(setUsername(result[0].username));
					Cookies.set('username', result[0].username);
					setIsLoading(false);
					toast.success('Berhasil masuk');
					router.push('/');
				}).catch(() => {
					setIsLoading(false);
					toast.error('Terjadi kesalahan');
				});
			} else {
				setIsLoading(false);
				toast.error('Username atau password salah');
			}
		}
	).catch(() => {
		setIsLoading(false);
		toast.error('Terjadi kesalahan');
	}
	);
	};

	return {
		username,
		password,
		isLoading,
		onChange,
		onSubmit,
	};
}
