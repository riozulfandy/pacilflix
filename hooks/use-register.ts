import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { query } from '@/db';

export default function useRegister() {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	const [formData, setFormData] = useState({
		username: '',
		password: '',
		negara:'',
	});

	const { username, password, negara } = formData;

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setFormData({ ...formData, [name]: value });
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsLoading(true);

		query('INSERT INTO pengguna (username, password, negara_asal) VALUES ($1, $2, $3)', [username, password, negara]).then(() => {
			setIsLoading(false);
			toast.success('Akun berhasil dibuat');
			router.push('/auth/login');
		}).catch(() => {
			setIsLoading(false);
			toast.error("Terdapat kesalahan");
		});
		
	};

	return {
		username,
		password,
		negara,
		isLoading,
		onChange,
		onSubmit,
	};
}
