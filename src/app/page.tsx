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
  const [kombinasiList, setKombinasiList] = useState<
    { makanan: string; minuman: string; tambahan: string[] }[]
  >([]);
  const inputSections = [
  { label: "Makanan", list: makananList, setList: setMakananList },
  { label: "Minuman", list: minumanList, setList: setMinumanList },
  { label: "Tambahan (Opsional)", list: tambahanList, setList: setTambahanList },
];


  const handleAdd = (list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>) =>
    setList([...list, ""]);
  const handleRemove = (i: number, list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>) => {
    const newList = [...list];
    newList.splice(i, 1);
    setList(newList);
  };
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    const updated = [...list];
    updated[index] = event.target.value;
    setList(updated);
  };

  const handleBuatKombinasi = () => {
    const hasil = getKombinasiMenu(makananList, minumanList, tambahanList);
    setKombinasiList(hasil);
  };

  return (
    <div className={`${balooBhaiBold.className} flex flex-col items-center justify-center my-10`}>
      <h1 className="text-5xl font-bold mb-8">Variasi Menu Restoran</h1>

      <div className="flex gap-16">
        {inputSections.map(({ label, list, setList }, idx) => (
  <div key={idx} className="flex flex-col gap-4">
    <h2 className="text-2xl font-bold">{label}</h2>
    {list.map((val, i) => (
      <div key={i} className="flex gap-2">
        <input
          type="text"
          className="border border-gray-400 px-4 py-2 rounded-xl"
          placeholder={`Masukkan ${label.toLowerCase()}`}
          value={val}
          onChange={(e) => handleInputChange(e, i, list, setList)}
        />
        {i > 0 && (
          <button
            className="bg-red-500 text-white px-4 rounded-xl"
            onClick={() => handleRemove(i, list, setList)}
          >
            Hapus
          </button>
        )}
      </div>
    ))}
    <button
      className="bg-blue-600 text-white px-4 py-2 rounded-xl mt-2"
      onClick={() => handleAdd(list, setList)}
    >
      Tambah {label}
    </button>
  </div>
))}

      </div>

      <button
        onClick={handleBuatKombinasi}
        className="mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"
      >
        Buat Kombinasi
      </button>

      <TableMenu kombinasiList={kombinasiList} />
    </div>
  );
}
