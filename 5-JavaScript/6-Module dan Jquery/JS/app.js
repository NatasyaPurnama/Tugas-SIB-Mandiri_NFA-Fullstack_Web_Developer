import { index, store } from "./controller.js";

const main = () => {
  document.getElementById("buttonKirim").addEventListener("click", () => {
    const nama = document.getElementById("nama").value;
    const umur = document.getElementById("umur").value;
    const alamat = document.getElementById("alamat").value;
    const email = document.getElementById("email").value;

    if (nama && umur && alamat && email) {
      const userBaru = { nama, umur, alamat, email };
      store(userBaru);
    } else {
      alert("Semua kolom harus diisi!");
      return;
    }

    document.getElementById("nama").value = "";
    document.getElementById("umur").value = "";
    document.getElementById("alamat").value = "";
    document.getElementById("email").value = "";
  });

  // Menampilkan data
  index();

  // Menambahkan 2 data
  store({
    nama: "Elon Musk",
    umur: 52,
    alamat: "Texas, USA",
    email: "elon@gmail.com",
  });

  store({
    nama: "Jeff Bezos",
    umur: 60,
    alamat: "Washington, USA",
    email: "jeff@gmail.com",
  });
};

main();