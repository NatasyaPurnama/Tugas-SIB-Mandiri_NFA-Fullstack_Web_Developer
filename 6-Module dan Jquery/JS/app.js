import UserManager from "./controller.js";

const userManager = new UserManager();

const main = () => {
  document.getElementById("buttonKirim").addEventListener("click", () => {
    const nama = document.getElementById("nama").value;
    const umur = document.getElementById("umur").value;
    const alamat = document.getElementById("alamat").value;
    const email = document.getElementById("email").value;

    if(nama && umur && alamat && email){
      const userBaru = { nama, umur, alamat, email };
      userManager.store(userBaru);
    }else{
      alert("Semua kolom harus diisi!");
      return;
    }

    document.getElementById("nama").value = "";
    document.getElementById("umur").value = "";
    document.getElementById("alamat").value = "";
    document.getElementById("email").value = "";
  });

  // Menampilkan data
  userManager.index();

  // Menambahkan 2 data
  userManager.store({
    nama: "Elon Musk",
    umur: 52,
    alamat: "Texas, USA",
    email: "elon@gmail.com",
  });

  userManager.store({
    nama: "Jeff Bezos",
    umur: 60,
    alamat: "Washington, USA",
    email: "jeff@gmail.com",
  });
};

main();