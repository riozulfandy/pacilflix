'use client';

import { Spinner, Table } from '@/components/common';
import { query } from '@/db';
import { ChangeEvent, useEffect, useState } from 'react';


export default function Page() {
    const [datas, setDatas] = useState<any[]>();
    const [datas2, setDatas2] = useState<any[]>();
    const [headers, setHeaders] = useState<string[]>();
    const [headers2, setHeaders2] = useState<string[]>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
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
            let queryValue2 = `
            SELECT
                id AS "id",
                jenis_tayangan AS "jenis",
                ROW_NUMBER() OVER (ORDER BY SUM(view_count) DESC) AS "Peringkat",
                judul AS "Judul",
                sinopsis_trailer AS "Sinopsis Trailer",
                url_video_trailer AS "URL Trailer",
                release_date_trailer AS "Tanggal Rilis Trailer",
                SUM(view_count) AS "Total View 7 Hari Terakhir"
            FROM (
                SELECT
                    T.id,
                    T.judul,
                    T.sinopsis_trailer,
                    T.url_video_trailer,
                    T.release_date_trailer,
                    'film' AS jenis_tayangan,
                    CASE
                        WHEN RN.end_date_time >= RN.start_date_time + (F.durasi_film * INTERVAL '1 minute' * 0.70)
                            AND RN.end_date_time >= CURRENT_DATE - INTERVAL '7 days'
                        THEN 1
                        ELSE 0
                    END AS view_count
                FROM TAYANGAN T
                JOIN RIWAYAT_NONTON RN ON T.id = RN.id_tayangan
                LEFT JOIN FILM F ON T.id = F.id_tayangan
                UNION ALL
                SELECT
                    T.id,
                    T.judul,
                    T.sinopsis_trailer,
                    T.url_video_trailer,
                    T.release_date_trailer,
                    'series' AS jenis_tayangan,
                    CASE
                        WHEN RN.end_date_time >= RN.start_date_time + (E.durasi * INTERVAL '1 minute' * 0.70)
                            AND RN.end_date_time >= CURRENT_DATE - INTERVAL '7 days'
                        THEN 1
                        ELSE 0
                    END AS view_count
                FROM TAYANGAN T
                JOIN SERIES S ON T.id = S.id_tayangan
                JOIN EPISODE E ON S.id_tayangan = E.id_series
                JOIN RIWAYAT_NONTON RN ON E.id_series = RN.id_tayangan
            ) AS Combined
            GROUP BY judul, sinopsis_trailer, url_video_trailer, release_date_trailer, id, jenis_tayangan
            ORDER BY "Total View 7 Hari Terakhir" DESC
            LIMIT 10
            `;
            ;
            if (selectedValue === 'film') {
                queryValue = 'SELECT tayangan.id AS "id", tayangan.judul AS "Judul", tayangan.sinopsis_trailer AS "Sinopsis Trailer", tayangan.url_video_trailer AS "URL Trailer", tayangan.release_date_trailer "Tanggal Rilis Trailer" FROM tayangan, film WHERE film.id_tayangan = tayangan.id AND judul ILIKE $1';
            } else if (selectedValue === 'series') {
                queryValue = 'SELECT tayangan.id AS "id", tayangan.judul AS "Judul", tayangan.sinopsis_trailer AS "Sinopsis Trailer", tayangan.url_video_trailer AS "URL Trailer", tayangan.release_date_trailer "Tanggal Rilis Trailer" FROM tayangan, series WHERE series.id_tayangan = tayangan.id AND judul ILIKE $1';
            }
            const result = await query(queryValue, [`%${search}%`]);
            const result2 = await query(queryValue2, []);
            setDatas(result);
            setDatas2(result2);
            if (result.length > 0) setHeaders(Object.keys(result[0]));
            if (result2.length > 0) setHeaders2(Object.keys(result2[0]));
            setIsLoading(false);
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
                { isLoading ? <div className="flex items-center justify-center"><Spinner lg /></div> : datas2 && headers2 && <Table headers={headers2} data={datas2} dontShowId={true} hasAction={true} linkAction='tayangan' hasJenis={true} />}
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
                <input value={search} onChange={handleSearch} id="search" type="text" className="bg-neutral-900 border border-gray-300 text-white text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5" placeholder="Search..." />
                </form>
                <div className="py-8">
                <div className="relative overflow-x-auto shadow-md rounded-lg">
                { isLoading ? <div className="flex items-center justify-center"><Spinner lg /></div> : datas && headers && <Table headers={headers} data={datas} dontShowId={true} hasAction={true} linkAction={"tayangan/" + selectedValue}/>}
                </div>
                </div>
		</main>
	);
}
