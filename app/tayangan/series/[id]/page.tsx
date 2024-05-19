"use client";

import Link from 'next/link';
import { Table } from "@/components/common";
import { query } from "@/db";
import { useAppSelector } from "@/redux/hooks";
import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";


interface Props {
	params: {
		id: string;
	};
}


export default function Page({ params }: Props) {
    const [datas, setDatas] = useState<any[]>();
    const [headers, setHeaders] = useState<string[]>();
    const [datas2, setDatas2] = useState<any[]>();
    const [headers2, setHeaders2] = useState<string[]>();
    const [datas3, setDatas3] = useState<any[]>();
    const [headers3, setHeaders3] = useState<string[]>();
    const [selectedValue, setSelectedValue] = useState('0');
    const [deskripsiRating, setDeskripsiRating] = useState('');
    const [submit, setSubmit] = useState(false);

    const { username } = useAppSelector(state => state.auth);

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(event.target.value);
    };

    const handleDeskripsiRating = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setDeskripsiRating(event.target.value);
    };

    const handleSubmission = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let queryValue = `
        INSERT INTO ULASAN (
            username,
            timestamp,
            id_tayangan,
            rating,
            deskripsi
        ) VALUES (
            $1,
            CURRENT_TIMESTAMP,
            $2,
            $3,
            $4
        )
        `;
        query(queryValue, [username, params.id, selectedValue, deskripsiRating]).then(() => {
            setSubmit(!submit);
			toast.success('Berhasil memberikan ulasan');
		}).catch(() => {
			toast.error('Terjadi kesalahan');
		});
    };



    useEffect(() => {
        async function fetchData() {
            let queryValue = `
            SELECT 
                T.judul,
                T.sinopsis,
                T.asal_negara,
                COALESCE(ROUND(AVG(R.rating), 1), 0) AS total_rating,
                COALESCE(COUNT(DISTINCT RN.start_date_time), 0) AS total_view,
                STRING_AGG(DISTINCT P.nama, ', ') AS pemain,
                STRING_AGG(DISTINCT SC.nama, ', ') AS penulis_skenario,
                STRING_AGG(DISTINCT P.nama, ', ') AS sutradara
            FROM TAYANGAN T
            JOIN SERIES S ON T.id = S.id_tayangan
            LEFT JOIN EPISODE E ON S.id_tayangan = E.id_series
            LEFT JOIN MEMAINKAN_TAYANGAN MT ON T.id = MT.id_tayangan
            LEFT JOIN CONTRIBUTORS P ON MT.id_pemain = P.id
            LEFT JOIN MENULIS_SKENARIO_TAYANGAN MST ON T.id = MST.id_tayangan
            LEFT JOIN CONTRIBUTORS SC ON MST.id_penulis_skenario = SC.id
            LEFT JOIN ULASAN R ON T.id = R.id_tayangan
            LEFT JOIN SUTRADARA D ON T.id_sutradara = D.id
            LEFT JOIN RIWAYAT_NONTON RN ON T.id = RN.id_tayangan
            WHERE T.id = $1
            GROUP BY T.id`;
            let queryValue2 = `
            SELECT username,rating,deskripsi FROM ULASAN WHERE id_tayangan = $1
            `;
            let queryValue3 = `
            SELECT sub_judul FROM EPISODE WHERE id_series = $1
            `;
            const result = await query(queryValue, [params.id]);
            const result2 = await query(queryValue2, [params.id]);
            const result3 = await query(queryValue3, [params.id]);
            setDatas(result);
            setDatas2(result2);
            setDatas3(result3);
            if (result.length > 0) setHeaders(Object.keys(result[0]));
            if (result2.length > 0) setHeaders2(Object.keys(result2[0]));
            if (result3.length > 0) setHeaders3(Object.keys(result3[0]));
        }

        fetchData();
    }, [submit]);

    return (
        <main>
            <div className='relative isolate px-6 py-7 lg:px-8'>
            <div className='mx-auto py-4 sm:py-4 lg:py-10 px-5 sm:px-5 lg:px-10 bg-neutral-900 rounded-xl'>
                <h1 className='text-3xl font-bold tracking-tight text-white py-4'>
                {datas && datas[0].judul}
                </h1>
                <p className='text-lg font-bold text-white'>
                Episode:
                </p>
                <ul className='list-disc pl-6 text-white'>
                    {datas3 && datas3.map((data) => (
                        <li key={data.sub_judul}><Link
                        href={'/tayangan/series/' + params.id + '/' + data.sub_judul}
                        className='font-medium text-red-600 hover:text-red-500 rounded-lg'
                        >
                        {data.sub_judul}
                        </Link></li>
                    ))}
                </ul>
                <button className='px-4 py-2 m-2 bg-green-600 hover:bg-green-500 text-white rounded-md'>Download{' '}<span aria-hidden='true'>&darr;</span></button>
                <button className='px-4 py-2 m-2 bg-yellow-600 hover:bg-yellow-500 text-white rounded-md'>Favorit{' '}<span aria-hidden='true'>&#9733;</span></button>
                <p className='text-lg font-bold text-white'>
                Total View: <span className='font-normal'>{datas && String(datas[0].total_view)}</span>
                </p>
                &nbsp;
                <p className='text-lg font-bold text-white'>
                Rating: <span className='font-normal'>{datas && String(datas[0].total_rating)}</span>
                </p>
                &nbsp;
                <p className='text-lg font-bold text-white'>
                Sinopsis: <span className='font-normal'>{datas && String(datas[0].sinopsis)}</span>
                </p>
                &nbsp;
                <p className='text-lg font-bold text-white'>
                Asal Negara: <span className='font-normal'>{datas && String(datas[0].asal_negara)}</span>
                </p>
                &nbsp;
                <p className='text-lg font-bold text-white'>
                Pemain: <span className='font-normal'>{datas && String(datas[0].pemain)}</span>
                </p>
                &nbsp;
                <p className='text-lg font-bold text-white'>
                Penulis Skenario: <span className='font-normal'>{datas && String(datas[0].penulis_skenario)}</span>
                </p>
                &nbsp;
                <p className='text-lg font-bold text-white'>
                Sutradara: <span className='font-normal'>{datas && String(datas[0].sutradara)}</span>
                </p>
                &nbsp;
                <h1 className='text-3xl font-bold tracking-tight text-white py-4'>
                 Ulasan
                </h1>
                <form className="max-w-sm mx-auto" onSubmit={handleSubmission}>
                <label htmlFor="rating" className="block mb-2 text-sm font-medium text-gray-300">Rating</label>
                <select value={selectedValue} onChange={handleChange} id="rating" className="bg-neutral-900 border border-gray-300 text-white text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5">
                    <option  defaultValue="0" value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <label htmlFor="textbox" className="block mt-4 mb-2 text-sm font-medium text-gray-300">Deskripsi Rating</label>
                <textarea id="textbox" className="bg-neutral-900 border border-gray-300 text-white text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5" value={deskripsiRating} onChange={handleDeskripsiRating} />
                <button type="submit" className="flex w-full justify-center mt-4 px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-md">Kirim</button>
                </form>
                <p className='text-lg font-bold text-white'>
                Daftar Ulasan:
                </p>
                {datas2 && headers2 && <Table headers={headers2} data={datas2} />}
            </div>
            </div>			
        </main>
    );
}