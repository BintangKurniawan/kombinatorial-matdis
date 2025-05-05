"use client";

import React from "react";
import { Baloo_Bhai_2 } from "next/font/google";
import { useState } from "react";

const balooBhaiBold = Baloo_Bhai_2({
  weight: ["700"],
  subsets: ["latin"],
});

export default function Home() {
  // ini semua data
  const [makananList, setMakananList] = useState<string[]>([""]);
  const [minumanList, setMinumanList] = useState<string[]>([""]);
  const [tambahanList, setTambahanList] = useState<string[]>([""]);

  const handleAddMakananList = () => {
    setMakananList([...makananList, ""]);
  };
  const handleRemoveMakananList = (i: number) => {
    const deleteVal = [...makananList];
    deleteVal.splice(i, 1);
    setMakananList(deleteVal);
    console.log(minumanList);
  };

  const handleAddMinumanList = () => {
    setMinumanList([...minumanList, ""]);
  };
  const handleRemoveMinumanList = (i: number) => {
    const deleteVal = [...minumanList];
    deleteVal.splice(i, 1);
    setMinumanList(deleteVal);
    console.log(minumanList);
  };

  const handleAddTambahanList = () => {
    setTambahanList([...tambahanList, ""]);
  };
  const handleRemoveTambahanList = (i: number) => {
    const deleteVal = [...tambahanList];
    deleteVal.splice(i, 1);
    setTambahanList(deleteVal);
    console.log(tambahanList);
  };

  const handleInputMakananChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = event.target;
    const list = [...makananList];
    list[index] = value;
    setMakananList(list);
  };

  const handleInputMinumanChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = event.target;
    const list = [...minumanList];
    list[index] = value;
    setMinumanList(list);
  };

  const handleInputTambahanChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = event.target;
    const list = [...tambahanList];
    list[index] = value;
    setTambahanList(list);
  };

  const handleBuatKombinasi = () => {
    console.log(1);
  };

  return (
    <div className={`${balooBhaiBold.className} flex flex-col items-center justify-center my-10`}>
      <h1 className="font-bold text-7xl mb-7">Variasi Menu</h1>

      <div className="max-w-[1220px] flex flex-row items-center gap-28 justify-center">
        <div className="flex flex-col items-start justify-center gap-4">
          <h2 className="font-bold text-3xl">Makanan</h2>
          <div className="flex flex-col items-start justify-center gap-3">
            {makananList.map((makanan, index) => {
              const deleteBtn = index >= 1;

              return (
                <div className="flex flex-row items-start gap-2" key={index}>
                  <input type="text" placeholder="Masukkan nama makanan" className="border-2 border-gray-400 py-4 px-6 rounded-2xl" onChange={(event) => handleInputMakananChange(event, index)} />
                  {deleteBtn && (
                    <button className="bg-red-500 text-white shadow-xs hover:bg-red-600 py-4 px-6 rounded-2xl cursor-pointer" onClick={() => handleRemoveMakananList(index)}>
                      Hapus
                    </button>
                  )}{" "}
                </div>
              );
            })}
          </div>

          <button className="bg-blue-600 text-white shadow-xs hover:bg-primary/90 py-4 px-6 rounded-2xl cursor-pointer" onClick={handleAddMakananList}>
            Tambah list
          </button>
        </div>

        <div className="flex flex-col items-start justify-center gap-4">
          <h1 className="font-bold text-2xl">Minuman</h1>
          <div className="flex flex-col items-start justify-center gap-3">
            {minumanList.map((minuman, index) => {
              const deleteBtn = index >= 1;

              return (
                <div className="flex flex-row items-start gap-2" key={index}>
                  <input type="text" placeholder="Masukkan nama minuman" className="border-2 border-gray-400 py-4 px-6 rounded-2xl" onChange={(event) => handleInputMinumanChange(event, index)} />
                  {deleteBtn && (
                    <button className="bg-red-500 text-white shadow-xs hover:bg-red-600 py-4 px-6 rounded-2xl cursor-pointer" onClick={() => handleRemoveMinumanList(index)}>
                      Hapus
                    </button>
                  )}{" "}
                </div>
              );
            })}
          </div>

          <button className="bg-blue-600 text-white shadow-xs hover:bg-primary/90 py-4 px-6 rounded-2xl cursor-pointer" onClick={handleAddMinumanList}>
            Tambah list
          </button>
        </div>

        <div className="flex flex-col items-start justify-center gap-4">
          <h1 className="font-bold text-2xl">Tambahan (opsional)</h1>
          <div className="flex flex-col items-start justify-center gap-3">
            {tambahanList.map((tambahan, index) => {
              const deleteBtn = index >= 1;

              return (
                <div className="flex flex-row items-start gap-2" key={index}>
                  <input type="text" placeholder="Masukkan nama tambahan (opsional)" className="border-2 border-gray-400 py-4 px-6 rounded-2xl" onChange={(event) => handleInputTambahanChange(event, index)} />
                  {deleteBtn && (
                    <button className="bg-red-500 text-white shadow-xs hover:bg-red-600 py-4 px-6 rounded-2xl cursor-pointer" onClick={() => handleRemoveTambahanList(index)}>
                      Hapus
                    </button>
                  )}{" "}
                </div>
              );
            })}
          </div>

          <button className="bg-blue-600 text-white shadow-xs hover:bg-primary/90 py-4 px-6 rounded-2xl cursor-pointer" onClick={handleAddTambahanList}>
            Tambah list
          </button>
        </div>
      </div>

      <button className="bg-blue-600 text-white shadow-xs hover:bg-primary/90 py-4 px-6 rounded-2xl cursor-pointer" onClick={handleBuatKombinasi}>
        Buat Kombinasi
      </button>
    </div>
  );
}
