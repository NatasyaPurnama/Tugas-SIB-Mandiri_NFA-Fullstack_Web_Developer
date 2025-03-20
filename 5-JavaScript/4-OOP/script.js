// parent class
class Kendaraan {
  constructor(merk, tipe, platNomor, warna) {
    this.merk = merk;
    this.tipe = tipe;
    this.platNomor = platNomor;
    this.warna = warna;
  }
}

// child class
class Sedan extends Kendaraan {
  constructor(merk, platNomor, warna) {
    super(merk, "Sedan", platNomor, warna);
  }
}

// child class
class SUV extends Kendaraan {
  constructor(merk, platNomor, warna) {
    super(merk, "SUV", platNomor, warna);
  }
}

// child class
class Pickup extends Kendaraan {
  constructor(merk, platNomor, warna) {
    super(merk, "SUV Hybrid", platNomor, warna);
  }
}

// parent class
class Pelanggan {
  constructor(nama, nomorTelepon) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = null;
  }

  tglSewa(kendaraan, tanggal) {
    this.kendaraanDisewa = {
      kendaraan: kendaraan,
      tanggalPeminjaman: tanggal,
    };
  }

  daftarSewa() {
    return (
      `Nama: ${this.nama}\n` +
      `   Nomor Telepon: ${this.nomorTelepon}\n` +
      `   Kendaraan Disewa: ${this.kendaraanDisewa.kendaraan.merk}\n` +
      `   Tipe: ${this.kendaraanDisewa.kendaraan.tipe}\n` +
      `   Plat Nomor: ${this.kendaraanDisewa.kendaraan.platNomor}\n` +
      `   Warna: ${this.kendaraanDisewa.kendaraan.warna}\n` +
      `   Tanggal Peminjaman: ${this.kendaraanDisewa.tanggalPeminjaman}`
    );
  }
}

// parent class
class Sistem {
  constructor() {
    this.pelangganList = [];
  }

  // abstraksi
  tambahPelanggan(pelanggan) {
    this.pelangganList.push(pelanggan);
  }

  // abstraksi
  tampilkanData() {
    console.log("\n===========================================");
    console.log("       Sistem Manajemen Transportasi");
    console.log("===========================================");
    console.log(">> Daftar Pelanggan yang Sedang Menyewa:");
    this.pelangganList.forEach((pelanggan, index) => {
      console.log(`${index + 1}. ${pelanggan.daftarSewa()}`);
      console.log("--------------------------------");
    });
  }
}

const sistem = new Sistem();

const kendaraan1 = new Sedan("Toyota Camry HEV hev", "B 9999 EV", "Merah");
const kendaraan2 = new SUV("Mazda CX-60", "L 1234 LX", "Hitam");
const kendaraan3 = new Pickup("Lexus RX 500h", "D 5678 MB", "Biru");

const pelanggan1 = new Pelanggan("Purnama", "08123456789");
const pelanggan2 = new Pelanggan("Amirah", "08987654321");
const pelanggan3 = new Pelanggan("Natasya", "08567891234");

pelanggan1.tglSewa(kendaraan1, "04-03-2020");
pelanggan2.tglSewa(kendaraan2, "06-04-2023");
pelanggan3.tglSewa(kendaraan3, "12-02-2024");

sistem.tambahPelanggan(pelanggan1);
sistem.tambahPelanggan(pelanggan2);
sistem.tambahPelanggan(pelanggan3);

sistem.tampilkanData();