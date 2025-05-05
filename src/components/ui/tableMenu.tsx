import React from "react";

interface Kombinasi {
  makanan: string;
  minuman: string;
  tambahan: string[];
}

interface TableMenuProps {
  kombinasiList: Kombinasi[];
}

const TableMenu: React.FC<TableMenuProps> = ({ kombinasiList }) => {
  if (kombinasiList.length === 0) return null;

  return (
    <div className="mt-10 w-[90%]">
      <h2 className="text-2xl font-bold mb-4">Hasil Kombinasi ({kombinasiList.length})</h2>
      <table className="table-auto w-full border border-gray-400 text-center">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-4 py-2">No</th>
            <th className="border px-4 py-2">Makanan</th>
            <th className="border px-4 py-2">Minuman</th>
            <th className="border px-4 py-2">Tambahan</th>
          </tr>
        </thead>
        <tbody>
          {kombinasiList.map((item, i) => (
            <tr key={i}>
              <td className="border px-4 py-2">{i + 1}</td>
              <td className="border px-4 py-2">{item.makanan}</td>
              <td className="border px-4 py-2">{item.minuman}</td>
              <td className="border px-4 py-2">
                {item.tambahan.length > 0 ? item.tambahan.join(", ") : "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableMenu;
