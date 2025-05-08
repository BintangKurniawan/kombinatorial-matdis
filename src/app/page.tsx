"use client";

import React, { useState } from "react";
import { Baloo_Bhai_2 } from "next/font/google";
import TableMenu from "@/components/ui/tableMenu";
import { getKombinasiMenu } from "@/lib/kombinasi";

const balooBhaiBold = Baloo_Bhai_2({
  weight: ["700"],
  subsets: ["latin"],
});

export default function Home() {
  const [makananList, setMakananList] = useState<string[]>([""]);
  const [minumanList, setMinumanList] = useState<string[]>([""]);
  const [tambahanList, setTambahanList] = useState<string[]>([""]);
  const [kombinasiList, setKombinasiList] = useState<{ makanan: string; minuman: string; tambahan: string[] }[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleAdd = (list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>) => setList([...list, ""]);
  const handleRemove = (i: number, list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>) => {
    const newList = [...list];
    newList.splice(i, 1);
    setList(newList);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, index: number, list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>) => {
    const updated = [...list];
    updated[index] = event.target.value;
    setList(updated);
  };

  const handleBuatKombinasi = () => {
    if (makananList[0] === "" || minumanList[0] === "") {
      setToastMessage("Kolom Makanan dan Minuman wajib diisi!");
      setTimeout(() => {
        setToastMessage(null);
      }, 3000);
      return;
    }

    const hasil = getKombinasiMenu(makananList, minumanList, tambahanList);
    setKombinasiList(hasil);
  };

  return (
    <>
      <div className="w-full shadow-sm bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-orange-600">QuickBite Combos</h1>
        </div>
      </div>

      <div className={`${balooBhaiBold.className} flex flex-col items-center justify-center gap-8 py-8`}>
        <div className="max-w-7xl w-full p-6 rounded-xl shadow-lg bg-white">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Kalkulator Kombinasi Menu</h2>

          <div className="flex items-center justify-between bg-[#fef6ee] border border-orange-100 text-orange-700 px-4 py-4 rounded-lg mb-6">
            <div>
              <div className="font-semibold">Total Kombinasi yang Mungkin</div>
              <div className="text-sm text-gray-600">Berdasarkan pilihan menu</div>
            </div>
            <div className="text-orange-600 text-2xl font-bold">{kombinasiList.length}</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="border border-gray-300 rounded-xl shadow-sm p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-orange-700 flex items-center gap-2">🍔 Makanan</span>
                <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded">Wajib</span>
              </div>
              {makananList.map((val, i) => (
                <div key={i} className="flex items-center gap-2 mb-2">
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Masukkan item makanan..."
                    value={val}
                    onChange={(e) => handleInputChange(e, i, makananList, setMakananList)}
                  />
                  {i > 0 && (
                    <button onClick={() => handleRemove(i, makananList, setMakananList)} className="text-gray-400 hover:text-red-500">✕</button>
                  )}
                </div>
              ))}
              <button
                onClick={() => handleAdd(makananList, setMakananList)}
                className="w-full bg-orange-50 text-orange-600 py-2 rounded text-sm hover:bg-orange-100"
              >
                + Tambah Opsi Makanan
              </button>
            </div>

            <div className="border border-gray-300 rounded-xl shadow-sm p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-blue-700 flex items-center gap-2">🥤 Minuman</span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">Wajib</span>
              </div>
              {minumanList.map((val, i) => (
                <div key={i} className="flex items-center gap-2 mb-2">
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Masukkan item minuman..."
                    value={val}
                    onChange={(e) => handleInputChange(e, i, minumanList, setMinumanList)}
                  />
                  {i > 0 && (
                    <button onClick={() => handleRemove(i, minumanList, setMinumanList)} className="text-gray-400 hover:text-red-500">✕</button>
                  )}
                </div>
              ))}
              <button
                onClick={() => handleAdd(minumanList, setMinumanList)}
                className="w-full bg-blue-50 text-blue-700 py-2 rounded text-sm hover:bg-blue-100"
              >
                + Tambah Opsi Minuman
              </button>
            </div>

            <div className="border border-gray-300 rounded-xl shadow-sm p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-green-700 flex items-center gap-2">🧂 Tambahan</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">Opsional</span>
              </div>
              {tambahanList.map((val, i) => (
                <div key={i} className="flex items-center gap-2 mb-2">
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Masukkan item tambahan..."
                    value={val}
                    onChange={(e) => handleInputChange(e, i, tambahanList, setTambahanList)}
                  />
                  {i > 0 && (
                    <button onClick={() => handleRemove(i, tambahanList, setTambahanList)} className="text-gray-400 hover:text-red-500">✕</button>
                  )}
                </div>
              ))}
              <button
                onClick={() => handleAdd(tambahanList, setTambahanList)}
                className="w-full bg-green-50 text-green-700 py-2 rounded text-sm hover:bg-green-100"
              >
                + Tambah Opsi Tambahan
              </button>
            </div>
          </div>

          <button
            onClick={handleBuatKombinasi}
            className="w-full bg-orange-600 text-white py-3 rounded-lg mt-6 shadow-lg hover:bg-orange-700"
          >
            Hitung Kombinasi
          </button>
        </div>

        {toastMessage && (
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-4 rounded-lg shadow-md">
            {toastMessage}
          </div>
        )}

        <TableMenu kombinasiList={kombinasiList} />
      </div>
    </>
  );
}
