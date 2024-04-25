import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Pacilflix | Tayangan',
	description: 'Pacilflix tayangan page',
};


export default function Page() {
	return (
		<main>			
				<h2 className='py-8 text-3xl font-bold tracking-tight text-white sm:text-5xl'>
                    10 Tayangan Terbaik Minggu ini
				</h2>
                <form className="max-w-sm mx-auto">
                <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-300">Opsi</label>
                <select id="country" className="bg-neutral-900 border border-gray-300 text-white text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5">
                    <option  defaultValue="global">Global</option>
                    <option value="negara">Negara</option>
                </select>
                </form>
                <div className="py-8">
                <div className="relative overflow-x-auto shadow-md rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-300">
                        <thead className="text-xs uppercase bg-neutral-900 text-white">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Peringkat
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Judul
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Sinopsis Trailer
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Url Trailer
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Tanggal Rilis Trailer
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Total View 7 Hari Terakhir
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Tayangan
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-neutral-900 border-b border-gray-300">
                                <td className="px-6 py-4">
                                    1
                                </td>
                                <td className="px-6 py-4">
                                    Ini judul
                                </td>
                                <td className="px-6 py-4">
                                    Ini Sinopsis
                                </td>
                                <td className="px-6 py-4">
                                <a href="#" className="font-medium text-red-600 hover:underline">Ini url trailer</a>
                                </td>
                                <td className="px-6 py-4">
                                    2021-10-10
                                </td>
                                <td className="px-6 py-4">
                                    1000
                                </td>
                                <td className="px-6 py-4">
                                <Link
								href='/tayangan/film/1'
								className='p-3 font-medium text-white bg-red-600 hover:bg-red-500 rounded-lg'
								>
								<span aria-hidden='true'>&rarr;</span>
								</Link>
                                </td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-gray-300">
                                <td className="px-6 py-4">
                                    2
                                </td>
                                <td className="px-6 py-4">
                                    Ini judul
                                </td>
                                <td className="px-6 py-4">
                                    Ini Sinopsis
                                </td>
                                <td className="px-6 py-4">
                                <a href="#" className="font-medium text-red-600 hover:underline">Ini url trailer</a>
                                </td>
                                <td className="px-6 py-4">
                                    2021-10-10
                                </td>
                                <td className="px-6 py-4">
                                    1000
                                </td>
                                <td className="px-6 py-4">
                                <Link
								href='/tayangan/film/1'
								className='p-3 font-medium text-white bg-red-600 hover:bg-red-500 rounded-lg'
								>
								<span aria-hidden='true'>&rarr;</span>
								</Link>
                                </td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-gray-300">
                                <td className="px-6 py-4">
                                    3
                                </td>
                                <td className="px-6 py-4">
                                    Ini judul
                                </td>
                                <td className="px-6 py-4">
                                    Ini Sinopsis
                                </td>
                                <td className="px-6 py-4">
                                <a href="#" className="font-medium text-red-600 hover:underline">Ini url trailer</a>
                                </td>
                                <td className="px-6 py-4">
                                    2021-10-10
                                </td>
                                <td className="px-6 py-4">
                                    1000
                                </td>
                                <td className="px-6 py-4">
                                <Link
								href='/tayangan/film/1'
								className='p-3 font-medium text-white bg-red-600 hover:bg-red-500 rounded-lg'
								>
								<span aria-hidden='true'>&rarr;</span>
								</Link>
                                </td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-gray-300">
                                <td className="px-6 py-4">
                                    4
                                </td>
                                <td className="px-6 py-4">
                                    Ini judul
                                </td>
                                <td className="px-6 py-4">
                                    Ini Sinopsis
                                </td>
                                <td className="px-6 py-4">
                                <a href="#" className="font-medium text-red-600 hover:underline">Ini url trailer</a>
                                </td>
                                <td className="px-6 py-4">
                                    2021-10-10
                                </td>
                                <td className="px-6 py-4">
                                    1000
                                </td>
                                <td className="px-6 py-4">
                                <Link
								href='/tayangan/film/1'
								className='p-3 font-medium text-white bg-red-600 hover:bg-red-500 rounded-lg'
								>
								<span aria-hidden='true'>&rarr;</span>
								</Link>
                                </td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-gray-300">
                                <td className="px-6 py-4">
                                    5
                                </td>
                                <td className="px-6 py-4">
                                    Ini judul
                                </td>
                                <td className="px-6 py-4">
                                    Ini Sinopsis
                                </td>
                                <td className="px-6 py-4">
                                <a href="#" className="font-medium text-red-600 hover:underline">Ini url trailer</a>
                                </td>
                                <td className="px-6 py-4">
                                    2021-10-10
                                </td>
                                <td className="px-6 py-4">
                                    1000
                                </td>
                                <td className="px-6 py-4">
                                <Link
								href='/tayangan/film/1'
								className='p-3 font-medium text-white bg-red-600 hover:bg-red-500 rounded-lg'
								>
								<span aria-hidden='true'>&rarr;</span>
								</Link>
                                </td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-gray-300">
                                <td className="px-6 py-4">
                                    6
                                </td>
                                <td className="px-6 py-4">
                                    Ini judul
                                </td>
                                <td className="px-6 py-4">
                                    Ini Sinopsis
                                </td>
                                <td className="px-6 py-4">
                                <a href="#" className="font-medium text-red-600 hover:underline">Ini url trailer</a>
                                </td>
                                <td className="px-6 py-4">
                                    2021-10-10
                                </td>
                                <td className="px-6 py-4">
                                    1000
                                </td>
                                <td className="px-6 py-4">
                                <Link
								href='/tayangan/film/1'
								className='p-3 font-medium text-white bg-red-600 hover:bg-red-500 rounded-lg'
								>
								<span aria-hidden='true'>&rarr;</span>
								</Link>
                                </td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-gray-300">
                                <td className="px-6 py-4">
                                    7
                                </td>
                                <td className="px-6 py-4">
                                    Ini judul
                                </td>
                                <td className="px-6 py-4">
                                    Ini Sinopsis
                                </td>
                                <td className="px-6 py-4">
                                <a href="#" className="font-medium text-red-600 hover:underline">Ini url trailer</a>
                                </td>
                                <td className="px-6 py-4">
                                    2021-10-10
                                </td>
                                <td className="px-6 py-4">
                                    1000
                                </td>
                                <td className="px-6 py-4">
                                <Link
								href='/tayangan/film/1'
								className='p-3 font-medium text-white bg-red-600 hover:bg-red-500 rounded-lg'
								>
								<span aria-hidden='true'>&rarr;</span>
								</Link>
                                </td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-gray-300">
                                <td className="px-6 py-4">
                                    8
                                </td>
                                <td className="px-6 py-4">
                                    Ini judul
                                </td>
                                <td className="px-6 py-4">
                                    Ini Sinopsis
                                </td>
                                <td className="px-6 py-4">
                                <a href="#" className="font-medium text-red-600 hover:underline">Ini url trailer</a>
                                </td>
                                <td className="px-6 py-4">
                                    2021-10-10
                                </td>
                                <td className="px-6 py-4">
                                    1000
                                </td>
                                <td className="px-6 py-4">
                                <Link
								href='/tayangan/film/1'
								className='p-3 font-medium text-white bg-red-600 hover:bg-red-500 rounded-lg'
								>
								<span aria-hidden='true'>&rarr;</span>
								</Link>
                                </td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-gray-300">
                                <td className="px-6 py-4">
                                    9
                                </td>
                                <td className="px-6 py-4">
                                    Ini judul
                                </td>
                                <td className="px-6 py-4">
                                    Ini Sinopsis
                                </td>
                                <td className="px-6 py-4">
                                <a href="#" className="font-medium text-red-600 hover:underline">Ini url trailer</a>
                                </td>
                                <td className="px-6 py-4">
                                    2021-10-10
                                </td>
                                <td className="px-6 py-4">
                                    1000
                                </td>
                                <td className="px-6 py-4">
                                <Link
								href='/tayangan/film/1'
								className='p-3 font-medium text-white bg-red-600 hover:bg-red-500 rounded-lg'
								>
								<span aria-hidden='true'>&rarr;</span>
								</Link>
                                </td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-gray-300">
                                <td className="px-6 py-4">
                                    10
                                </td>
                                <td className="px-6 py-4">
                                    Ini judul
                                </td>
                                <td className="px-6 py-4">
                                    Ini Sinopsis
                                </td>
                                <td className="px-6 py-4">
                                <a href="#" className="font-medium text-red-600 hover:underline">Ini url trailer</a>
                                </td>
                                <td className="px-6 py-4">
                                    2021-10-10
                                </td>
                                <td className="px-6 py-4">
                                    1000
                                </td>
                                <td className="px-6 py-4">
                                <Link
								href='/tayangan/film/1'
								className='p-3 font-medium text-white bg-red-600 hover:bg-red-500 rounded-lg'
								>
								<span aria-hidden='true'>&rarr;</span>
								</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
                <h2 className='py-8 text-3xl font-bold tracking-tight text-white sm:text-5xl'>
                    Tayangan
				</h2>
                <form className="max-w-sm mx-auto">
                <label htmlFor="tayangan" className="block mb-2 text-sm font-medium text-gray-300">Jenis tayangan</label>
                <select id="tayangan" className="bg-neutral-900 border border-gray-300 text-white text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5">
                    <option  defaultValue="film">Film</option>
                    <option value="series">Series</option>
                </select>
                <label htmlFor="search" className="block mt-4 mb-2 text-sm font-medium text-gray-300">Cari judul</label>
                <input id="search" type="text" className="bg-neutral-900 border border-gray-300 text-white text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5" placeholder="Search..." />
                </form>
                <div className="py-8">
                <div className="relative overflow-x-auto shadow-md rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-300">
                        <thead className="text-xs uppercase bg-neutral-900 text-white">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Judul
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Sinopsis Trailer
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Url Trailer
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Tanggal Rilis Trailer
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Tayangan
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-neutral-900 border-b border-gray-300">
                                <td className="px-6 py-4">
                                    Ini judul
                                </td>
                                <td className="px-6 py-4">
                                    Ini Sinopsis
                                </td>
                                <td className="px-6 py-4">
                                <a href="#" className="font-medium text-red-600 hover:underline">Ini url trailer</a>
                                </td>
                                <td className="px-6 py-4">
                                    2021-10-10
                                </td>
                                <td className="px-6 py-4">
                                <Link
								href='/tayangan/film/1'
								className='p-3 font-medium text-white bg-red-600 hover:bg-red-500 rounded-lg'
								>
								<span aria-hidden='true'>&rarr;</span>
								</Link>
                                </td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-gray-300">
                                <td className="px-6 py-4">
                                    Ini judul
                                </td>
                                <td className="px-6 py-4">
                                    Ini Sinopsis
                                </td>
                                <td className="px-6 py-4">
                                <a href="#" className="font-medium text-red-600 hover:underline">Ini url trailer</a>
                                </td>
                                <td className="px-6 py-4">
                                    2021-10-10
                                </td>
                                <td className="px-6 py-4">
                                <Link
								href='/tayangan/film/1'
								className='p-3 font-medium text-white bg-red-600 hover:bg-red-500 rounded-lg'
								>
								<span aria-hidden='true'>&rarr;</span>
								</Link>
                                </td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-gray-300">
                                <td className="px-6 py-4">
                                    Ini judul
                                </td>
                                <td className="px-6 py-4">
                                    Ini Sinopsis
                                </td>
                                <td className="px-6 py-4">
                                <a href="#" className="font-medium text-red-600 hover:underline">Ini url trailer</a>
                                </td>
                                <td className="px-6 py-4">
                                    2021-10-10
                                </td>
                                <td className="px-6 py-4">
                                <Link
								href='/tayangan/film/1'
								className='p-3 font-medium text-white bg-red-600 hover:bg-red-500 rounded-lg'
								>
								<span aria-hidden='true'>&rarr;</span>
								</Link>
                                </td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-gray-300">
                                <td className="px-6 py-4">
                                    Ini judul
                                </td>
                                <td className="px-6 py-4">
                                    Ini Sinopsis
                                </td>
                                <td className="px-6 py-4">
                                <a href="#" className="font-medium text-red-600 hover:underline">Ini url trailer</a>
                                </td>
                                <td className="px-6 py-4">
                                    2021-10-10
                                </td>
                                <td className="px-6 py-4">
                                <Link
								href='/tayangan/film/1'
								className='p-3 font-medium text-white bg-red-600 hover:bg-red-500 rounded-lg'
								>
								<span aria-hidden='true'>&rarr;</span>
								</Link>
                                </td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-gray-300">
                                <td className="px-6 py-4">
                                    Ini judul
                                </td>
                                <td className="px-6 py-4">
                                    Ini Sinopsis
                                </td>
                                <td className="px-6 py-4">
                                <a href="#" className="font-medium text-red-600 hover:underline">Ini url trailer</a>
                                </td>
                                <td className="px-6 py-4">
                                    2021-10-10
                                </td>
                                <td className="px-6 py-4">
                                <Link
								href='/tayangan/film/1'
								className='p-3 font-medium text-white bg-red-600 hover:bg-red-500 rounded-lg'
								>
								<span aria-hidden='true'>&rarr;</span>
								</Link>
                                </td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-gray-300">
                                <td className="px-6 py-4">
                                    Ini judul
                                </td>
                                <td className="px-6 py-4">
                                    Ini Sinopsis
                                </td>
                                <td className="px-6 py-4">
                                <a href="#" className="font-medium text-red-600 hover:underline">Ini url trailer</a>
                                </td>
                                <td className="px-6 py-4">
                                    2021-10-10
                                </td>
                                <td className="px-6 py-4">
                                <Link
								href='/tayangan/film/1'
								className='p-3 font-medium text-white bg-red-600 hover:bg-red-500 rounded-lg'
								>
								<span aria-hidden='true'>&rarr;</span>
								</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
		</main>
	);
}
