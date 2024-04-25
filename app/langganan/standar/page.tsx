import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Pacilflix | Langganan Standar',
	description: 'Pacilflix langganan standar page',
};


export default function Page() {
	return (
		<main>			
				<h2 className='py-8 text-3xl font-bold tracking-tight text-white sm:text-5xl'>
                    Paket Dibeli:
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
                            </tr>
                        </thead>
                        <tbody>
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
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
                <form className="max-w-sm mx-auto pb-8">
                <label htmlFor="metode" className="block mb-2 text-sm font-medium text-gray-300">Metode Pembayaran</label>
                <select id="metode" className="bg-neutral-900 border border-gray-300 text-white text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5">
                    <option  defaultValue="transfer">Transfer Bank</option>
                    <option value="kredit">Kartu Kredit</option>
                    <option value="ewallet">E-Wallet</option>
                </select>
                <button type="submit" className="flex w-full justify-center mt-4 px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-md">Bayar</button>
                </form>
		</main>
	);
}
