import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useRegisterMutation } from '@/redux/features/authApiSlice';
import { toast } from 'react-toastify';

export default function useRegister() {
	const router = useRouter();
	const [register, { isLoading }] = useRegisterMutation();

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

		register({ username, password, negara })
			.unwrap()
			.then(() => {
				toast.success('Berhasil mendaftar');
				router.push('/auth/login');
			})
			.catch(() => {
				toast.error('Gagal mendaftar');
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
