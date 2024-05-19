"use client";

import { query } from '@/db';
import { useAppSelector } from '@/redux/hooks';
import Link from 'next/link';
import { ChangeEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';


interface Props {
	params: {
        id: string;
		episode: string;
	};
}

export default function Page({ params }: Props) {
    const episode = decodeURI(params.episode);
    const [datas, setDatas] = useState<any[]>();
    const [headers, setHeaders] = useState<string[]>();
    const [datas2, setDatas2] = useState<any[]>();
    const [headers2, setHeaders2] = useState<string[]>();
    const [slider, setSlider] = useState(0);

    const { username } = useAppSelector(state => state.auth);

    const handleSlider = (event: ChangeEvent<HTMLInputElement>) => {
        setSlider(parseInt(event.target.value));
    };

    const handleSubmission = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const result = await query("SELECT durasi FROM episode where id_series = $1 AND sub_judul = $2", [params.id, episode]);
        const durasi = result[0].durasi;
        let queryValue = `
        INSERT INTO RIWAYAT_NONTON (
            username,
            id_tayangan,
            start_date_time,
            end_date_time
        ) VALUES (
            $1,
            $2,
            CURRENT_TIMESTAMP - INTERVAL '${durasi * slider/100} minutes',
            CURRENT_TIMESTAMP
        )
        `;
        query(queryValue, [username, params.id]).then(() => {
			toast.success('Berhasil menonton');
		}).catch(() => {
			toast.error('Terjadi kesalahan');
		});
    };

    useEffect(() => {
        async function fetchData() {
            let queryValue = `
            SELECT 
                T.judul,
                E.sub_judul,
                E.sinopsis AS sinopsis_episode,
                E.durasi AS durasi_episode,
                E.url_video AS url_episode,
                E.release_date AS tanggal_rilis_episode,
                ARRAY_AGG(E2.sub_judul || ' - ' || E2.url_video) AS episode_lainnya
            FROM TAYANGAN T
            JOIN SERIES S ON T.id = S.id_tayangan
            JOIN EPISODE E ON S.id_tayangan = E.id_series
            LEFT JOIN EPISODE E2 ON E.id_series = E2.id_series AND E.sub_judul != E2.sub_judul
            WHERE T.id= $1 AND E.sub_judul = $2
            GROUP BY T.judul, E.sub_judul, E.sinopsis, E.durasi, E.url_video, E.release_date
            `;
            let queryValue2 = `
            SELECT sub_judul FROM EPISODE WHERE id_series = $1 AND sub_judul != $2
            `;
            let data = await query(queryValue, [params.id, episode]);
            let data2 = await query(queryValue2, [params.id, episode]);
            setDatas(data);
            setDatas2(data2);
            setHeaders(Object.keys(data[0]));
            setHeaders2(Object.keys(data2[0]));
        }
        fetchData();
    }, []);
    return (
        <main>
            <div className='relative isolate px-6 py-7 lg:px-8'>
            <div className='mx-auto py-4 sm:py-4 lg:py-10 px-5 sm:px-5 lg:px-10 bg-neutral-900 rounded-xl'>
                <h1 className='text-3xl font-bold tracking-tight text-white'>
                {datas && datas[0].sub_judul}
                </h1>
                &nbsp;
                <form onSubmit={handleSubmission}>
                <div className='flex items-center justify-center'>
                <input id="default-range" type="range" value={slider} onChange={handleSlider} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
                </input>
                </div>
                &nbsp;
                <div className='flex items-center justify-center'>
                <button type="submit" className='px-4 py-2 m-2 bg-red-600 hover:bg-red-500 text-white rounded-md'>Tonton</button>
                </div>
                </form>
                <p className='text-lg font-bold text-white'>
                Episode Lainnya:
                </p>
                <ul className='list-disc pl-6 text-white'>
                    {datas2 && datas2.map((data) => (
                        <li key={data.sub_judul}><Link
                        href={'/tayangan/series/' + params.id + '/' + data.sub_judul}
                        className='font-medium text-red-600 hover:text-red-500 rounded-lg'
                        >
                        {data.sub_judul}
                        </Link></li>
                    ))}
                </ul>
                &nbsp;
                <p className='text-lg font-bold text-white'>
                Sinopsis Episode: <span className='font-normal'>{datas && datas[0].sinopsis_episode}</span>
                </p>
                &nbsp;
                <p className='text-lg font-bold text-white'>
                Durasi Episode: <span className='font-normal'>{datas && datas[0].durasi_episode} menit</span>
                </p>
                &nbsp;
                <p className='text-lg font-bold text-white'>
                URL Episode: <a className='font-normal text-red-600 hover:text-red-500' href={datas && datas[0].url_episode}>Link Episode</a>
                </p>
                &nbsp;
                <p className='text-lg font-bold text-white'>
                Tanggal Rilis Episode: <span className='font-normal'>{datas && datas[0].tanggal_rilis_episode.toISOString().substring(0,10)}</span>
                </p>
            </div>
            </div>
        </main>
    );
}