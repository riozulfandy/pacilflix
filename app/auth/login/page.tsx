import Link from 'next/link';
import { LoginForm } from '@/components/forms';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Pacilflix | Login',
	description: 'Pacilflix login page',
};

export default function Page() {
	return (
		<div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
			<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
				<h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white'>
					Masuk ke akun Anda
				</h2>
			</div>

			<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
				<LoginForm />

				<p className='mt-10 text-center text-sm text-gray-300'>
					Belum memiliki akun?{' '}
					<Link
						href='/auth/register'
						className='font-semibold leading-6 text-red-600 hover:text-red-500'
					>
						Daftar
					</Link>
				</p>
			</div>
		</div>
	);
}
