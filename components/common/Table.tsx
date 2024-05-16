interface Props {
    headers : string[];
    data : any[];
}


export default function Table({headers, data} : Props) {
    return (
        <table className="w-full text-sm text-left rtl:text-right text-gray-300">
                <thead className="text-xs uppercase bg-neutral-900 text-white">
                        <tr>
                        {headers.map((header, index) => (
                            <th scope="col" className="px-6 py-3" key={index}>{header}</th>
                        ))}
                        </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index} className="bg-neutral-900 border-b border-gray-300">
                            {Object.values(row).map((value, valueIndex) => (
                                <td key={valueIndex} className="px-6 py-4">{String(value)}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
    );
}