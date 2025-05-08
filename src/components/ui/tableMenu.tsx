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
  return (
    <div className="mt-10 w-full max-w-7xl mx-auto">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <h3 className="text-lg font-semibold px-6 py-4 border-b border-gray-100">
          Semua Kemungkinan Kombinasi
        </h3>
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-[#f9fafb] text-gray-700 uppercase text-xs tracking-wide">
            <tr>
              <th className="px-6 py-3 text-left">No</th>
              <th className="px-6 py-3 text-left">Makanan</th>
              <th className="px-6 py-3 text-left">Minuman</th>
              <th className="px-6 py-3 text-left">Tambahan</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {kombinasiList.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-8 text-gray-400 italic">
                  Masukkan item menu dan hitung untuk melihat kombinasi
                </td>
              </tr>
            ) : (
              kombinasiList.map((item, i) => (
                <tr key={i} className="hover:bg-[#f9fafb] transition">
                  <td className="px-6 py-4">{i + 1}</td>
                  <td className="px-6 py-4">{item.makanan}</td>
                  <td className="px-6 py-4">{item.minuman}</td>
                  <td className="px-6 py-4">
                    {item.tambahan.length > 0 ? item.tambahan.join(", ") : "-"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableMenu;
