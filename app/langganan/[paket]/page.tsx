"use client";

import { Table } from "@/components/common";
import { query } from "@/db";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

interface Props {
	params: {
		paket: string;
	};
}

export default function Page({params}: Props) {
    const router = useRouter();

    const [datas, setDatas] = useState<any[]>();
    const [headers, setHeaders] = useState<string[]>();

    const { username } = useAppSelector(state => state.auth);
    const [selectedValue, setSelectedValue] = useState('transfer');

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(event.target.value);
    };

    const handleSubmission = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let queryValue = `
        INSERT INTO TRANSACTION (
            username,
            start_date_time,
            end_date_time,
            nama_paket,
            metode_pembayaran,
            timestamp_pembayaran
        )
        VALUES (
            $1,
            CURRENT_DATE,
            CURRENT_DATE + INTERVAL '1 month',
            $2,
            $3,
            CURRENT_TIMESTAMP
        )
        `;
        query(queryValue, [username, params.paket, selectedValue]).then(() => {
			toast.success('Akun berhasil dibuat');
			router.push('/langganan');
		}).catch(() => {
			toast.error('Terjadi kesalahan');
		});
    };

    
    
    useEffect(() => {
        async function fetchData() {
            let queryValue = `
            SELECT 
                pk.nama AS "Nama",
                pk.harga AS "Harga",
                pk.resolusi_layar AS "Resolusi Layar",
                STRING_AGG(dp.dukungan_perangkat, ', ') AS "Dukungan Perangkat"
            FROM 
                PAKET pk
            LEFT JOIN 
                DUKUNGAN_PERANGKAT dp ON pk.nama = dp.nama_paket
            WHERE
                pk.nama ILIKE $1
            GROUP BY 
                pk.nama, pk.harga, pk.resolusi_layar`
            const result = await query(queryValue, [params.paket]);
            setDatas(result);
            if (result.length > 0) setHeaders(Object.keys(result[0]));
        }

        fetchData();
    }, []);

	return (
		<main>			
				<h2 className='py-8 text-3xl font-bold tracking-tight text-white sm:text-5xl'>
                    Paket Dibeli:
				</h2>
                <div className="py-8">
                <div className="relative overflow-x-auto shadow-md rounded-lg">
                    {datas && headers && <Table headers={headers} data={datas} />}
                </div>
                </div>
                <form className="max-w-sm mx-auto pb-8" onSubmit={handleSubmission}>
                <label htmlFor="metode" className="block mb-2 text-sm font-medium text-gray-300">Metode Pembayaran</label>
                <select value={selectedValue} onChange={handleChange} id="metode" className="bg-neutral-900 border border-gray-300 text-white text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5">
                    <option  defaultValue="transfer" value="transfer">Transfer Bank</option>
                    <option value="kredit">Kartu Kredit</option>
                    <option value="ewallet">E-Wallet</option>
                </select>
                <button type="submit" className="flex w-full justify-center mt-4 px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-md">Bayar</button>
                </form>
		</main>
	);
}