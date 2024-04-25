import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Pacilflix | Kontibutor',
	description: 'Pacilflix kontributor page',
};


export default function Page() {
	return (
		<main>			
                <h2 className='py-8 text-3xl font-bold tracking-tight text-white sm:text-5xl'>
                    Kontributor
				</h2>
                <form className="max-w-sm mx-auto">
                <label htmlFor="tayangan" className="block mb-2 text-sm font-medium text-gray-300">Tipe</label>
                <select id="tayangan" className="bg-neutral-900 border border-gray-300 text-white text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5">
                    <option  defaultValue="semua">Semua</option>
                    <option value="sutradara">Sutradara</option>
                    <option value="pemain">Pemain</option>
                    <option value="penulis">Penulis Skenario</option>
                </select>
                </form>
                <div className="py-8">
                <div className="relative overflow-x-auto shadow-md rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-300">
                        <thead className="text-xs uppercase bg-neutral-900 text-white">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Nama
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Tipe
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Jenis Kelamin
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Kewarganegaraan
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-neutral-900 border-b border-gray-300">
                                <td className="px-6 py-4">
                                    Ini nama
                                </td>
                                <td className="px-6 py-4">
                                    Ini tipe
                                </td>
                                <td className="px-6 py-4">
                                    Laki-laki
                                </td>
                                <td className="px-6 py-4">
                                    India
                                </td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-gray-300">
                                <td className="px-6 py-4">
                                    Ini nama
                                </td>
                                <td className="px-6 py-4">
                                    Ini tipe
                                </td>
                                <td className="px-6 py-4">
                                    Laki-laki
                                </td>
                                <td className="px-6 py-4">
                                    India
                                </td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-gray-300">
                                <td className="px-6 py-4">
                                    Ini nama
                                </td>
                                <td className="px-6 py-4">
                                    Ini tipe
                                </td>
                                <td className="px-6 py-4">
                                    Laki-laki
                                </td>
                                <td className="px-6 py-4">
                                    India
                                </td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-gray-300">
                                <td className="px-6 py-4">
                                    Ini nama
                                </td>
                                <td className="px-6 py-4">
                                    Ini tipe
                                </td>
                                <td className="px-6 py-4">
                                    Laki-laki
                                </td>
                                <td className="px-6 py-4">
                                    India
                                </td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-gray-300">
                                <td className="px-6 py-4">
                                    Ini nama
                                </td>
                                <td className="px-6 py-4">
                                    Ini tipe
                                </td>
                                <td className="px-6 py-4">
                                    Laki-laki
                                </td>
                                <td className="px-6 py-4">
                                    India
                                </td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-gray-300">
                                <td className="px-6 py-4">
                                    Ini nama
                                </td>
                                <td className="px-6 py-4">
                                    Ini tipe
                                </td>
                                <td className="px-6 py-4">
                                    Laki-laki
                                </td>
                                <td className="px-6 py-4">
                                    India
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
		</main>
	);
}
