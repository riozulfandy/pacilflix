import Link from 'next/link';
import { RegisterForm } from '@/components/forms';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Pacilflix | Register',
	description: 'Pacilflix register page',
};

export default function Page() {
	return (
		<div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
			<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
				<h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white'>
					Buat akun baru
				</h2>
			</div>

			<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
				<RegisterForm />

				<p className='mt-10 text-center text-sm text-gray-300'>
					Sudah memiliki akun?{' '}
					<Link
						href='/auth/login'
						className='font-semibold leading-6 text-red-600 hover:text-red-500'
					>
						Masuk
					</Link>
				</p>
			</div>
		</div>
	);
}
