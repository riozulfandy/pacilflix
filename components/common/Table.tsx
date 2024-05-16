import Link from "next/link";

interface Props {
    headers : string[];
    data : any[];
    hasAction? : boolean;
    linkAction? : string;
    dontShowId? : boolean;
}


export default function Table({headers, data, hasAction, linkAction, dontShowId} : Props) {
    return (
        <table className="w-full text-sm text-left rtl:text-right text-gray-300">
                <thead className="text-xs uppercase bg-neutral-900 text-white">
                        <tr>
                        {headers.map((header, index) => (
                            dontShowId && index === 0 ? null : <th scope="col" className="px-6 py-3" key={index}>{header}</th>
                        ))
                        }
                        {hasAction && <th scope="col" className="px-6 py-3">Action</th>}
                        </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index} className="bg-neutral-900 border-b border-gray-300">
                            {Object.values(row).map((value, valueIndex) => (
                                dontShowId && valueIndex === 0 ? null : <td key={valueIndex} className="px-6 py-4">{String(value)}</td>
                            ))}
                            {hasAction && <td className="px-6 py-4"><Link
								href={'/' + linkAction + '/' + row.id}
								className='p-3 font-medium text-white bg-red-600 hover:bg-red-500 rounded-lg'
								>
								<span aria-hidden='true'>&rarr;</span>
								</Link></td>}
                        </tr>
                    ))}
                </tbody>
            </table>
    );
}