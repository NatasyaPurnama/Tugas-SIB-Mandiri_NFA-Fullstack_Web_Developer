console.log("\n================================================================");
console.log("                Sistem Manajemen Produk Toko");
console.log("================================================================\n");

//Array daftar produk yang tersedia
let produkToko = [
  { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
  { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
  { id: 3, nama: "Keyboard", harga: 350000, stok: 7 },
];

//Fungsi untuk Menambahkan Produk
function tambahProduk(nama, harga, stok) {
  let idBaru =
    produkToko.length > 0 ? produkToko[produkToko.length - 1].id + 1 : 1;
  produkToko.push({ id: idBaru, nama, harga, stok });
  console.log(
    `Produk "${nama}" berhasil ditambahkan!`
  );
}

//Fungsi untuk Menghapus Produk
function hapusProduk(id) {
  let index = produkToko.findIndex((produk) => produk.id === id);
  if (index !== -1) {
    let produkDihapus = produkToko.splice(index, 1);
    console.log(
      `Produk "${produkDihapus[0].nama}" berhasil dihapus!`
    );
  }
}

//Fungsi untuk Menampilkan Daftar Produk
function tampilkanProduk() {
  console.log(
    `\nDaftar Produk Toko\n================================================================`
  );
  produkToko.forEach((produk) => {
    console.log(
      `ID: ${produk.id} | Nama: ${
        produk.nama
      } | Harga: Rp${produk.harga.toLocaleString()} | Stok: ${produk.stok}`
    );
  });
  console.log(
    `================================================================`
  );
}

// Menambahkan produk baru
tambahProduk("Monitor", 1500000, 4); 

// Menampilkan daftar produk
tampilkanProduk(); 

// Menghapus produk dengan ID 2
hapusProduk(2);

// Menampilkan daftar produk setelah perubahan
tampilkanProduk(); 
