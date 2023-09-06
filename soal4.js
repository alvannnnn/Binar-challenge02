const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Broen High - Original",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon High - Original",
    hargaSatuan: 360000,
    kategori: "Sepatu Sport",
    totalTerjual: 98,
  },
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 98,
  },
];
function hitungTotalPenjualan(dataPenjualan) {
  let totalPenjualan = 0;

  for (let i = 0; i < dataPenjualan.length; i++) {
    totalPenjualan += dataPenjualan[i].totalTerjual;
  }

  return totalPenjualan;
}

console.log(hitungTotalPenjualan(dataPenjualanPakAldi));
