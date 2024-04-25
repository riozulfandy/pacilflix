
import { FormEvent, useState } from "react";
import {
    ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";


interface TableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    datas: TData[]
};

export function DataTable<TData, TValue>({
    columns,
    datas
  }: TableProps<TData, TValue>) {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState(datas);
  const [inputSearchValue, setInputSearchValue] = useState("");
  const submitSearchForm = (e: FormEvent) => {
    e.preventDefault();
    setSearchValue(inputSearchValue);
  };
  const table = useReactTable({
    data,
    columns,
    debugTable: true,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div>
      <div className="search-bar">
        <form onSubmit={submitSearchForm}>
          <input
            type="text"
            placeholder="Search..."
            value={inputSearchValue}
            onChange={(e) => setInputSearchValue(e.target.value)}
          />
        </form>
      </div>
      <table className="users-table">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="users-table-cell">
                  <div
                    {...{
                      className: header.column.getCanSort()
                        ? "cursor-pointer select-none"
                        : "",
                      onClick: header.column.getToggleSortingHandler(),
                    }}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {{
                      asc: " 🔼",
                      desc: " 🔽",
                    }[header.column.getIsSorted() as string] ?? null}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="users-table-cell">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
