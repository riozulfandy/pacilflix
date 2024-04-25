import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Pacilflix | Series',
	description: 'Pacilflix series page',
};

interface Props {
	params: {
		id: string;
	};
}


export default function Page({ params }: Props) {
    return (
        <main>
            <div className='relative isolate px-6 py-7 lg:px-8'>
            <div className='mx-auto py-4 sm:py-4 lg:py-10 px-5 sm:px-5 lg:px-10 bg-neutral-900 rounded-xl'>
                <h1 className='text-3xl font-bold tracking-tight text-white py-4'>
                Series dengan ID {params.id}
                </h1>
                <p className='text-lg font-bold text-white'>
                Episode:
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
                <button className='px-4 py-2 m-2 bg-green-600 hover:bg-green-500 text-white rounded-md'>Download{' '}<span aria-hidden='true'>&darr;</span></button>
                <button className='px-4 py-2 m-2 bg-yellow-600 hover:bg-yellow-500 text-white rounded-md'>Favorit{' '}<span aria-hidden='true'>&#9733;</span></button>
                <p className='text-lg font-bold text-white'>
                Total View: 
                </p>
                <p className='text-lg font-bold text-white'>
                Rating: 
                </p>
                <p className='text-lg font-bold text-white'>
                Total View: 
                </p>
                <p className='text-lg font-bold text-white'>
                Sinopsis: 
                </p>
                <p className='text-lg font-bold text-white'>
                Durasi: 
                </p>
                <p className='text-lg font-bold text-white'>
                Tanggal Rilis: 
                </p>
                <p className='text-lg font-bold text-white'>
                URL: 
                </p>
                <p className='text-lg font-bold text-white'>
                Genre:
                </p>
                <ul className='list-disc pl-6 text-white'>
                    <li>Genre 1</li>
                    <li>Genre 2</li>
                    <li>Genre 3</li>
                </ul>
                <p className='text-lg font-bold text-white'>
                Asal Negara:
                </p>
                <p className='text-lg font-bold text-white'>
                Pemain:
                </p>
                <ul className='list-disc pl-6 text-white'>
                    <li>Pemain 1</li>
                    <li>Pemain 2</li>
                    <li>Pemain 3</li>
                </ul>
                <p className='text-lg font-bold text-white'>
                Penulis Skenario:
                </p>
                <ul className='list-disc pl-6 text-white'>
                    <li>Penulis 1</li>
                    <li>Penulis 2</li>
                    <li>Penulis 3</li>
                </ul>
                <p className='text-lg font-bold text-white'>
                Sutradara: 
                </p>
                <h1 className='text-3xl font-bold tracking-tight text-white py-4'>
                 Ulasan
                </h1>
                <form className="max-w-sm mx-auto">
                <label htmlFor="rating" className="block mb-2 text-sm font-medium text-gray-300">Rating</label>
                <select id="rating" className="bg-neutral-900 border border-gray-300 text-white text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5">
                    <option  defaultValue="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <label htmlFor="textbox" className="block mt-4 mb-2 text-sm font-medium text-gray-300">Deskripsi Rating</label>
                <textarea id="textbox" className="bg-neutral-900 border border-gray-300 text-white text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5" />
                <button type="submit" className="flex w-full justify-center mt-4 px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-md">Kirim</button>
                </form>
                <p className='text-lg font-bold text-white'>
                Daftar Ulasan:
                </p>
                <ul className='list-disc pl-6 text-white'>
                    <li>Ulasan 1</li>
                    <li>Ulasan 2</li>
                    <li>Ulasan 3</li>
                </ul>
            </div>
            </div>			
        </main>
    );
}