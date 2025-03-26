import users from "./data.js";

// Menampilkan data menggunakan map
const index = () => {
  console.log("Menampilkan daftar users:");
  users.map((user, id) =>
    console.log(
      `${id + 1}. ${user.nama} - ${user.umur} tahun - ${user.alamat} - ${
        user.email
      }`
    )
  );

  const table = document.getElementById("userTable");
  table.innerHTML = users
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
      destroy(index);
    });
  });
};

// Menambahkan data
const store = (user) => {
  users.push(user);
  console.log(`User  "${user.nama}" berhasil ditambahkan.`);
  index();
};

// Menghapus data
const destroy = (id) => {
  const user = users[id];
  if (confirm(`Yakin ingin menghapus user ${user.nama}?`)) {
    users.splice(id, 1);
    console.log(`User  "${user.nama}" berhasil dihapus.`);
    index();
  }
};

// Ekspor fungsi
export { index, store, destroy };