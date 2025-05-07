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
    <div className="mt-10 w-full max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Hasil Kombinasi ({kombinasiList.length})</h2>
    <div className="overflow-x-auto rounded-2xl shadow-md bg-white">
      <table className="min-w-full text-sm text-gray-700">
        <thead className="bg-[#f3f4f6] text-gray-900 uppercase text-xs tracking-wider rounded-t-2xl">
          <tr>
            <th className="px-6 py-4 text-left">No</th>
            <th className="px-6 py-4 text-left">Makanan</th>
            <th className="px-6 py-4 text-left">Minuman</th>
            <th className="px-6 py-4 text-left">Tambahan</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {kombinasiList.map((item, i) => (
            <tr key={i} className="hover:bg-[#f9fafb] transition">
              <td className="px-6 py-4">{i + 1}</td>
              <td className="px-6 py-4">{item.makanan}</td>
              <td className="px-6 py-4">{item.minuman}</td>
              <td className="px-6 py-4">{item.tambahan.length > 0 ? item.tambahan.join(", ") : "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  
  );
};

export default TableMenu;
