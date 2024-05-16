'use client';


import { Table } from '@/components/common';
import { query } from '@/db';
import { useState, useEffect, ChangeEvent } from 'react';



export default function Page() {

    const [datas, setDatas] = useState<any[]>();
    const [datas2, setDatas2] = useState<any[]>();
    const [headers, setHeaders] = useState<string[]>();
    const [headers2, setHeaders2] = useState<string[]>();
    const [selectedValue, setSelectedValue] = useState('film');
    const [search, setSearch] = useState('');

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(event.target.value);
    };

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }


    useEffect(() => {
        async function fetchData() {
            let queryValue = "";
            let queryValue2 = "SELECT * FROM view_peringkat_tayangan";
            ;
            if (selectedValue === 'film') {
                queryValue = 'SELECT tayangan.judul, tayangan.sinopsis_trailer, tayangan.url_video_trailer, tayangan.url_video_trailer, tayangan.release_date_trailer FROM tayangan, film WHERE film.id_tayangan = tayangan.id AND judul ILIKE $1';
            } else if (selectedValue === 'series') {
                queryValue = 'SELECT tayangan.judul, tayangan.sinopsis_trailer, tayangan.url_video_trailer, tayangan.url_video_trailer, tayangan.release_date_trailer FROM tayangan, series WHERE series.id_tayangan = tayangan.id AND judul ILIKE $1';
            }
            const result = await query(queryValue, [`%${search}%`]);
            const result2 = await query(queryValue2, []);
            setDatas(result);
            setDatas2(result2);
            if (result.length > 0) setHeaders(Object.keys(result[0]));
            if (result2.length > 0) setHeaders2(Object.keys(result2[0]));
        }

        fetchData();
    }, [selectedValue, search]);
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
                {datas2 && headers2 && <Table headers={headers2} data={datas2}/>}
                </div>
                </div>
                <h2 className='py-8 text-3xl font-bold tracking-tight text-white sm:text-5xl'>
                    Tayangan
				</h2>
                <form className="max-w-sm mx-auto">
                <label htmlFor="tayangan" className="block mb-2 text-sm font-medium text-gray-300">Jenis tayangan</label>
                <select value={selectedValue} onChange={handleChange} id="tayangan" className="bg-neutral-900 border border-gray-300 text-white text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5">
                    <option  defaultValue="film" value="film">Film</option>
                    <option value="series">Series</option>
                </select>
                <label htmlFor="search" className="block mt-4 mb-2 text-sm font-medium text-gray-300">Cari judul</label>
                <input id="search" type="text" className="bg-neutral-900 border border-gray-300 text-white text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5" placeholder="Search..." value={search} onChange={handleSearch}/>
                </form>
                <div className="py-8">
                <div className="relative overflow-x-auto shadow-md rounded-lg">
                {datas && headers && <Table headers={headers} data={datas}/>}
                </div>
                </div>
		</main>
	);
}
