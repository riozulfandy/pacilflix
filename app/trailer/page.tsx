'use client';


import { Table } from '@/components/common';
import { query } from '@/db';
import { useState, useEffect } from 'react';



export default function Page() {

    const [datas, setDatas] = useState<any[]>();
    const [headers, setHeaders] = useState<string[]>();


    useEffect(() => {
        async function fetchData() {
            const result = await query('SELECT * FROM tayangan', []);
            setDatas(result);
            setHeaders(Object.keys(result[0]));
        }

        fetchData();
    }, []);
	return (
		<main>			
				<h2 className='py-8 text-3xl font-bold tracking-tight text-white sm:text-5xl'>
                    10 Tayangan Terbaik Minggu ini
				</h2>
                <form className="max-w-sm mx-auto">
                <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-300">Opsi</label>
                <select id="country" className="bg-neutral-900 border border-gray-300 text-white text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5">
                    <option  defaultValue="global">Global</option>
                </select>
                </form>
                <div className="py-8">
                <div className="relative overflow-x-auto shadow-md rounded-lg">
                {datas && headers && <Table headers={headers} data={datas}/>}
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
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
		</main>
	);
}
