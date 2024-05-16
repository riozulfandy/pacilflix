'use client';

import { Table } from '@/components/common';
import { query } from '@/db';
import { useAppSelector } from '@/redux/hooks';
import { use, useEffect, useState } from 'react';



export default function Page() {
    const [datas, setDatas] = useState<any[]>();
    const [headers, setHeaders] = useState<string[]>();
    const [datas2, setDatas2] = useState<any[]>();
    const [headers2, setHeaders2] = useState<string[]>();
    const [datas3, setDatas3] = useState<any[]>();
    const [headers3, setHeaders3] = useState<string[]>();

	const { username } = useAppSelector(state => state.auth);
    
    
    useEffect(() => {
        async function fetchData() {
            let queryValue = `
            SELECT 
                t.nama_paket AS "Nama",
                pk.harga AS "Harga",
                pk.resolusi_layar AS "Resolusi Layar",
                STRING_AGG(dp.dukungan_perangkat, ', ') AS "Dukungan Perangkat",
                t.start_date_time AS "Tanggal Dimulai",
                t.end_date_time AS "Tanggal Akhir"
            FROM 
                PENGGUNA p
            JOIN 
                TRANSACTION t ON p.username = t.username
            JOIN 
                PAKET pk ON t.nama_paket = pk.nama
            JOIN 
                DUKUNGAN_PERANGKAT dp ON pk.nama = dp.nama_paket
            WHERE 
                p.username = $1
                AND t.start_date_time <= CURRENT_DATE
                AND t.end_date_time >= CURRENT_DATE
            GROUP BY 
                t.nama_paket, pk.harga, pk.resolusi_layar, t.start_date_time, t.end_date_time
            `;
            let queryValue2 = `
            SELECT 
                t.nama_paket AS "Nama",
                t.start_date_time AS "Tanggal Dimulai",
                t.end_date_time AS "Tanggal Akhir",
                t.metode_pembayaran AS "Metode Pembayaran",
                t.timestamp_pembayaran AS "Tanggal Pembayaran",
                pk.harga AS "Total Pembayaran"
            FROM 
                TRANSACTION t
            JOIN 
                PAKET pk ON t.nama_paket = pk.nama
            WHERE 
                t.username = $1
            `
            let queryValue3 = `
            SELECT
                pk.nama AS "id", 
                pk.nama AS "Nama",
                pk.harga AS "Harga",
                pk.resolusi_layar AS "Resolusi Layar",
                STRING_AGG(dp.dukungan_perangkat, ', ') AS "Dukungan Perangkat"
            FROM 
                PAKET pk
            LEFT JOIN 
                DUKUNGAN_PERANGKAT dp ON pk.nama = dp.nama_paket
            GROUP BY 
                pk.nama, pk.harga, pk.resolusi_layar`
            const result = await query(queryValue, [username]);
            const result2 = await query(queryValue2, [username]);
            const result3 = await query(queryValue3, []);
            setDatas(result);
            setDatas2(result2);
            setDatas3(result3);
            if (result.length > 0) setHeaders(Object.keys(result[0]));
            if (result2.length > 0) setHeaders2(Object.keys(result2[0]));
            if (result3.length > 0) setHeaders3(Object.keys(result3[0]));
        }

        fetchData();
    }, []);

	return (
		<main>			
				<h2 className='py-8 text-3xl font-bold tracking-tight text-white sm:text-5xl'>
                    Paket Anda:
				</h2>
                <div className="py-8">
                <div className="relative overflow-x-auto shadow-md rounded-lg">
                    {datas && headers && <Table headers={headers} data={datas} />}
                </div>
                </div>
                <h2 className='py-8 text-3xl font-bold tracking-tight text-white sm:text-5xl'>
                    Pilih Paket Lain
				</h2>
                <div className="py-8">
                <div className="relative overflow-x-auto shadow-md rounded-lg">
                    {datas3 && headers3 && <Table headers={headers3} data={datas3} dontShowId={true} hasAction={true} linkAction='langganan'/>}
                </div>
                </div>
                <h2 className='py-8 text-3xl font-bold tracking-tight text-white sm:text-5xl'>
                    Riwayat Transaksi
				</h2>
                <div className="py-8">
                <div className="relative overflow-x-auto shadow-md rounded-lg">
                    {datas2 && headers2 && <Table headers={headers2} data={datas2} />}
                </div>
                </div>
		</main>
	);
}
