'use client';

import {useRouter , usePathname } from 'next/navigation';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { logout as setLogout, setNegara, setUsername } from '@/redux/features/authSlice';
import { NavLink } from '@/components/common';
import Image from 'next/image';
import { query } from '@/db';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

export default function Navbar() {
	const pathname = usePathname();
	const dispatch = useAppDispatch();
	const router = useRouter();


	const { isAuthenticated } = useAppSelector(state => state.auth);
	const username = Cookies.get('username');

	const handleLogout = () => {
		query("DELETE FROM pengguna_login WHERE username = $1", [username]).then(() => {
			Cookies.remove('username');
			dispatch(setUsername(''));
			dispatch(setNegara(''));
			dispatch(setLogout());
			toast.success('Berhasil keluar');
		}).catch(() => {
			toast.error("Terjadi kesalahan");
		});
	};

	const isSelected = (path: string) => (pathname.includes(path) ? true : false);

	const authLinks = (isMobile: boolean) => (
		<>
			<NavLink
				isSelected={isSelected('/tayangan')}
				isMobile={isMobile}
				href='/tayangan'
			>
				Tayangan
			</NavLink>
			<NavLink
				isSelected={isSelected('/kontributor')}
				isMobile={isMobile}
				href='/kontributor'
			>
				Kontributor
			</NavLink>
			<NavLink
				isSelected={isSelected('/langganan')}
				isMobile={isMobile}
				href='/langganan'
			>
				Langganan
			</NavLink>
			<NavLink isMobile={isMobile} onClick={handleLogout}>
				Logout
			</NavLink>
		</>
	);

	const guestLinks = (isMobile: boolean) => (
		<>
			<NavLink
				isSelected={isSelected('/trailer')}
				isMobile={isMobile}
				href='/trailer'
			>
				Trailer
			</NavLink>
		</>
	);

	return (
		<Disclosure as='nav' className='bg-neutral-900'>
			{({ open }) => (
				<>
					<div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
						<div className='relative flex h-16 items-center justify-between'>
							<div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
								<Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
									<span className='sr-only'>
										Open main menu
									</span>
									{open ? (
										<XMarkIcon
											className='block h-6 w-6'
											aria-hidden='true'
										/>
									) : (
										<Bars3Icon
											className='block h-6 w-6'
											aria-hidden='true'
										/>
									)}
								</Disclosure.Button>
							</div>
							<div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
								<div className='flex flex-shrink-0 items-center'>
									<NavLink href='/' isBanner>
									<div className="flex items-center">
										<Image
											src="/logo.svg"
											alt="Logo"
											width={30}
											height={30}
										/>
										<span className="ml-2">PACILFLIX</span>
									</div>
									</NavLink>
								</div>
								<div className='hidden sm:ml-6 sm:block'>
									<div className='flex space-x-4'>
									{isAuthenticated
											? authLinks(false)
											: guestLinks(false)}
									</div>
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className='sm:hidden'>
						<div className='space-y-1 px-2 pb-3 pt-2'>
							{isAuthenticated
								? authLinks(true)
								: guestLinks(true)}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
