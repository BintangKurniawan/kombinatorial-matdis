interface Kombinasi {
  makanan: string;
  minuman: string;
  tambahan: string[];
}

export function getKombinasiMenu(
  makananList: string[],
  minumanList: string[],
  tambahanList: string[]
): Kombinasi[] {
  const makananValid = makananList.filter((m) => m.trim() !== "");
  const minumanValid = minumanList.filter((m) => m.trim() !== "");
  const tambahanValid = tambahanList.filter((t) => t.trim() !== "");

  const tambahanSubsets = getSubsets(tambahanValid);
  const hasil: Kombinasi[] = [];

  makananValid.forEach((makanan) => {
    minumanValid.forEach((minuman) => {
      tambahanSubsets.forEach((tambahanCombo) => {
        hasil.push({ makanan, minuman, tambahan: tambahanCombo });
      });
    });
  });

  return hasil;
}

// Fungsi bantu: menghasilkan semua subset dari array
function getSubsets(arr: string[]): string[][] {
  const result: string[][] = [];
  const total = 1 << arr.length;

  for (let i = 0; i < total; i++) {
    const subset: string[] = [];
    for (let j = 0; j < arr.length; j++) {
      if (i & (1 << j)) {
        subset.push(arr[j]);
      }
    }
    result.push(subset);
  }

  return result;
}
