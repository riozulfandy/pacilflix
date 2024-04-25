import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Pacilflix | Langganan',
	description: 'Pacilflix langganan page',
};


export default function Page() {
	return (
		<main>			
				<h2 className='py-8 text-3xl font-bold tracking-tight text-white sm:text-5xl'>
                    Paket Anda:
				</h2>
                <div className="py-8">
                <div className="relative overflow-x-auto shadow-md rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-300">
                        <thead className="text-xs uppercase bg-neutral-900 text-white">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Nama
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Harga
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Resolusi Layar
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Dukungan Perangkat
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Tanggal Mulai
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Tanggal Akhir
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-neutral-900 border-b border-gray-300">
                                <td className="px-6 py-4">
                                    Premium
                                </td>
                                <td className="px-6 py-4">
                                    1000
                                </td>
                                <td className="px-6 py-4">
                                    720p
                                </td>
                                <td className="px-6 py-4">
                                    Android, iOS, Web
                                </td>
                                <td className="px-6 py-4">
                                    2021-10-10
                                </td>
                                <td className="px-6 py-4">
                                    2022-10-10
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
                <h2 className='py-8 text-3xl font-bold tracking-tight text-white sm:text-5xl'>
                    Pilih Paket Lain
				</h2>
                <div className="py-8">
                <div className="relative overflow-x-auto shadow-md rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-300">
                        <thead className="text-xs uppercase bg-neutral-900 text-white">
                            <tr>
                            <th scope="col" className="px-6 py-3">
                                    Nama
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Harga
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Resolusi Layar
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Dukungan Perangkat
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Beli
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-neutral-900 border-b border-gray-300">
                                <td className="px-6 py-4">
                                    Premium
                                </td>
                                <td className="px-6 py-4">
                                    1000
                                </td>
                                <td className="px-6 py-4">
                                    720p
                                </td>
                                <td className="px-6 py-4">
                                    Android, iOS, Web
                                </td>
                                <td className="px-6 py-4">
                                <Link
								href='/langganan/premium'
								className='p-3 font-medium text-white bg-red-600 hover:bg-red-500 rounded-lg'
								>
								<span aria-hidden='true'>&rarr;</span>
								</Link>
                                </td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-gray-300">
                                <td className="px-6 py-4">
                                    Standar
                                </td>
                                <td className="px-6 py-4">
                                    500
                                </td>
                                <td className="px-6 py-4">
                                    720p
                                </td>
                                <td className="px-6 py-4">
                                    Android, iOS
                                </td>
                                <td className="px-6 py-4">
                                <Link
								href='/langganan/standar'
								className='p-3 font-medium text-white bg-red-600 hover:bg-red-500 rounded-lg'
								>
								<span aria-hidden='true'>&rarr;</span>
								</Link>
                                </td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-gray-300">
                                <td className="px-6 py-4">
                                    Basic
                                </td>
                                <td className="px-6 py-4">
                                    200
                                </td>
                                <td className="px-6 py-4">
                                    480p
                                </td>
                                <td className="px-6 py-4">
                                    Android
                                </td>
                                <td className="px-6 py-4">
                                <Link
								href='/langganan/basic'
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
                    Riwayat Transaksi
				</h2>
                <div className="py-8">
                <div className="relative overflow-x-auto shadow-md rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-300">
                        <thead className="text-xs uppercase bg-neutral-900 text-white">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Nama Paket
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Tanggal Dimulai
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Tanggal Akhir
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Metode Pembayaran
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Tanggal Pembayaran
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Total Pembayaran
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-neutral-900 border-b border-gray-300">
                                <td className="px-6 py-4">
                                    Premium
                                </td>
                                <td className="px-6 py-4">
                                    2021-10-10
                                </td>
                                <td className="px-6 py-4">
                                    2022-10-10
                                </td>
                                <td className="px-6 py-4">
                                    Transfer Bank
                                </td>
                                <td className="px-6 py-4">
                                    2021-10-10
                                </td>
                                <td className="px-6 py-4">
                                    1000
                                </td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-gray-300">
                                <td className="px-6 py-4">
                                    Premium
                                </td>
                                <td className="px-6 py-4">
                                    2021-10-10
                                </td>
                                <td className="px-6 py-4">
                                    2022-10-10
                                </td>
                                <td className="px-6 py-4">
                                    Transfer Bank
                                </td>
                                <td className="px-6 py-4">
                                    2021-10-10
                                </td>
                                <td className="px-6 py-4">
                                    1000
                                </td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-gray-300">
                                <td className="px-6 py-4">
                                    Premium
                                </td>
                                <td className="px-6 py-4">
                                    2021-10-10
                                </td>
                                <td className="px-6 py-4">
                                    2022-10-10
                                </td>
                                <td className="px-6 py-4">
                                    Transfer Bank
                                </td>
                                <td className="px-6 py-4">
                                    2021-10-10
                                </td>
                                <td className="px-6 py-4">
                                    1000
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
		</main>
	);
}
