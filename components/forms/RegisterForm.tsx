'use client';

import { useRegister } from '@/hooks';
import { Form } from '@/components/forms';

export default function RegisterForm() {
	const {
		username,
		password,
		negara,
		isLoading,
		onChange,
		onSubmit,
	} = useRegister();

	const config = [
		{
			labelText: 'Username',
			labelId: 'username',
			type: 'text',
			value: username,
			required: true,
		},
		{
			labelText: 'Password',
			labelId: 'password',
			type: 'password',
			value: password,
			required: true,
		},
		{
			labelText: 'Negara Asal',
			labelId: 'negara',
			type: 'text',
			value: negara,
			required: true,
		},
	];

	return (
		<Form
			config={config}
			isLoading={isLoading}
			btnText='Daftar'
			onChange={onChange}
			onSubmit={onSubmit}
		/>
	);
}
