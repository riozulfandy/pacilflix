'use client';

import { ChangeEvent, useState, useEffect} from 'react';
import { query } from '@/db';
import { Table } from '@/components/common';



export default function Page() {
    const [selectedValue, setSelectedValue] = useState('semua');
    const [datas, setDatas] = useState<any[]>();
    const [headers, setHeaders] = useState<string[]>();

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(event.target.value);
    };

    useEffect(() => {
        async function fetchData() {
            let queryValue = "";
            if (selectedValue === 'semua') {
                queryValue = `
                SELECT c.nama, c.jenis_kelamin, c.kewarganegaraan,
                CASE
                    WHEN s.id IS NOT NULL THEN 'Sutradara'
                    WHEN p.id IS NOT NULL THEN 'Pemain'
                    WHEN ps.id IS NOT NULL THEN 'Penulis skenario'
                END AS role
                FROM contributors c
                LEFT JOIN sutradara s ON c.id = s.id
                LEFT JOIN pemain p ON c.id = p.id
                LEFT JOIN penulis_skenario ps ON c.id = ps.id
                `
            } else if (selectedValue === 'sutradara') {
                queryValue = "SELECT c.nama, c.jenis_kelamin, c.kewarganegaraan, 'Sutradara' AS tipe FROM contributors c JOIN sutradara s ON c.id = s.id";
            } else if (selectedValue === 'pemain') {
                queryValue = "SELECT c.nama, c.jenis_kelamin, c.kewarganegaraan, 'Pemain' AS tipe FROM contributors c JOIN pemain p ON c.id = p.id";
            }
            else if (selectedValue === 'penulis') {
                queryValue = "SELECT c.nama, c.jenis_kelamin, c.kewarganegaraan, 'Penulis skenario' AS tipe FROM contributors c JOIN penulis_skenario ps ON c.id = ps.id";
            }
            const result = await query(queryValue, []);
            console.log(result);
            setDatas(result);
            setHeaders(Object.keys(result[0]));
        }

        fetchData();
    }, [selectedValue]);



	return (
		<main>			
                <h2 className='py-8 text-3xl font-bold tracking-tight text-white sm:text-5xl'>
                    Kontributor
				</h2>
                <form className="max-w-sm mx-auto">
                <label htmlFor="tayangan" className="block mb-2 text-sm font-medium text-gray-300">Tipe</label>
                <select id="tayangan" value={selectedValue} onChange={handleChange} className="bg-neutral-900 border border-gray-300 text-white text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5">
                    <option  defaultValue="semua" value="semua">Semua</option>
                    <option value="sutradara">Sutradara</option>
                    <option value="pemain">Pemain</option>
                    <option value="penulis">Penulis Skenario</option>
                </select>
                </form>
                <div className="py-8">
                <div className="relative overflow-x-auto shadow-md rounded-lg">
                {datas && headers && <Table headers={headers} data={datas}/>}
                </div>
                </div>
		</main>
	);
}
