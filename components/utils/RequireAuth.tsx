'use client';

import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/redux/hooks';
import { Spinner } from '@/components/common';

interface Props {
	children: React.ReactNode;
}

export default function RequireAuth({ children }: Props) {
	const { isLoading, isAuthenticated } = useAppSelector(state => state.auth);
	const router = useRouter();

	if (isLoading) {
		return (
			<div className='flex justify-center items-center py-4'>
				<Spinner lg />
			</div>
		);
	}

	if (!isAuthenticated) {
		router.push('/auth/login');
	}

	return <>{children}</>;
}
