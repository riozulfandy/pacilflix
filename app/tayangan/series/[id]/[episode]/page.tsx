import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Pacilflix | Series',
	description: 'Pacilflix series page',
};

interface Props {
	params: {
        id: string;
		episode: string;
	};
}

export default function Page({ params }: Props) {
    return (
        <main>
            <div className='relative isolate px-6 py-7 lg:px-8'>
            <div className='mx-auto py-4 sm:py-4 lg:py-10 px-5 sm:px-5 lg:px-10 bg-neutral-900 rounded-xl'>
                <h1 className='text-3xl font-bold tracking-tight text-white'>
                Series dengan ID {params.id} Episode {params.episode}
                </h1>
                <button className='px-4 py-2 m-2 bg-red-600 hover:bg-red-500 text-white rounded-md'>Tonton</button>
                <p className='text-lg font-bold text-white'>
                Episode Lainnya:
                </p>
                <ul className='list-disc pl-6 text-white'>
                    <li><Link
                    href='/tayangan/series/1/1'
                    className='font-medium text-red-600 hover:text-red-500 rounded-lg'
                    >
                    Episode 1
                    </Link></li>
                    <li><Link
                    href='/tayangan/series/1/2'
                    className='font-medium text-red-600 hover:text-red-500 rounded-lg'
                    >
                    Episode 2
                    </Link></li>
                    <li><Link
                    href='/tayangan/series/1/3'
                    className='font-medium text-red-600 hover:text-red-500 rounded-lg'
                    >
                    Episode 3
                    </Link></li>
                </ul>
                <p className='text-lg font-bold text-white'>
                Sinopsis Episode:
                </p>
                <p className='text-lg font-bold text-white'>
                Durasi Episode:
                </p>
                <p className='text-lg font-bold text-white'>
                URL Episode:
                </p>
                <p className='text-lg font-bold text-white'>
                Tanggal Rilis Episode:
                </p>
            </div>
            </div>
        </main>
    );
}