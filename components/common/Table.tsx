import Link from "next/link";

interface Props {
    headers : string[];
    data : any[];
    hasAction? : boolean;
    linkAction? : string;
    dontShowId? : boolean;
    hasJenis? : boolean;
}


export default function Table({headers, data, hasAction, linkAction, dontShowId, hasJenis} : Props) {
    return (
        <table className="w-full text-sm text-left rtl:text-right text-gray-300">
                <thead className="text-xs uppercase bg-neutral-900 text-white">
                        <tr>
                        {headers.map((header, index) => (
                            (dontShowId && index === 0) || (hasJenis && index === 1) ? null : <th key={index} scope="col" className="px-6 py-3">{header}</th>
                        ))
                        }
                        {hasAction && <th scope="col" className="px-6 py-3">Action</th>}
                        </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index} className="bg-neutral-900 border-b border-gray-300">
                            {Object.values(row).map((value, valueIndex) => (
                                (dontShowId && valueIndex === 0) || (hasJenis && valueIndex === 1) ? null : <td key={valueIndex} className="px-6 py-4">{value instanceof Date ? value.toISOString().substring(0,10) : (String(value).includes("http") ? <a href={String(value)} className="text-red-600 hover:text-red-500">Link</a> : String(value))}</td>
                            ))}
                            {hasAction && <td className="px-6 py-4"><Link
								href={'/' + linkAction + '/' + (hasJenis ? row.jenis + '/' : "") + row.id}
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