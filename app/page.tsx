import Link from 'next/link';
import type { Metadata } from 'next';


export const metadata: Metadata = {
	title: 'Pacilflix | Home',
	description: 'Pacilflix home page',
};

export default function Page() {
	return (
		<main>
			<div className='relative isolate px-6 pt-14 lg:px-8'>
				<div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
					<div className='text-center'>
						<h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
							Pacilflix
						</h1>
						<p className='mt-6 text-lg leading-8 text-gray-300'>
							PacilFlix adalah aplikasi streaming yang sederhana, dirancang untuk memberikan akses mudah ke berbagai film dan serial populer.
						</p>
						<div className='mt-10 flex items-center justify-center gap-x-6'>			
						
								<Link
								href='/auth/login'
								className='rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'
								>
								Masuk
								</Link>
								<Link
								href='/auth/register'
								className='text-sm font-semibold leading-6 text-white'
								>
								Buat akun{' '}
								<span aria-hidden='true'>&rarr;</span>
								</Link>
							
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
