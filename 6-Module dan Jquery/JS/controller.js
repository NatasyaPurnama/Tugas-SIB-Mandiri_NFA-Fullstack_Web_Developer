import users from "./data.js";

class UserManager {
  constructor() {
    this.users = users;
  }

  // Menampilkan data menggunakan map
  index() {
    console.log("Menampilkan daftar users:");
    this.users.map((user, id) =>
      console.log(
        `${id + 1}. ${user.nama} - ${user.umur} tahun - ${user.alamat} - ${
          user.email
        }`
      )
    );

    const table = document.getElementById("userTable");
    table.innerHTML = this.users
      .map(
        (user, id) => `
        <tr>
          <td>${id + 1}</td>
          <td>${user.nama}</td>
          <td>${user.umur}</td>
          <td>${user.alamat}</td>
          <td>${user.email}</td>
          <td><button class="delete-btn" data="${id}" style="background-color: red; color: white; border: none; padding: 5px 10px; cursor: pointer; border-radius: 5px;"><i class="fas fa-trash"></i></button></td>
        </tr>
      `
      )
      .join("");

    document.querySelectorAll(".delete-btn").forEach((btn) => {
      btn.addEventListener("click", (event) => {
        const index = event.target.closest(".delete-btn").getAttribute("data");
        this.destroy(index);
      });
    });
  }

  // Menambahkan data
  store(user) {
    this.users.push(user);
    console.log(`User "${user.nama}" berhasil ditambahkan.`);

    this.index();
  }

  // Menghapus data
  destroy(id) {
    const user = this.users[id];
    if (confirm(`Yakin ingin menghapus user ${user.nama}?`)) {
      this.users.splice(id, 1);
      console.log(`User "${user.nama}" berhasil dihapus.`);

      this.index();
    }
  }
}

export default UserManager;