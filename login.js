// login.js
import { dataPengguna } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  const btnLogin = document.getElementById("btnLogin");

  btnLogin.addEventListener("click", () => {
    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value.trim();
    // trim() → menghapus spasi di awal/akhir input
    // toLowerCase() → bikin email tidak sensitif huruf besar/kecil

    const user = dataPengguna.find(
      (u) => u.email.toLowerCase() === email && u.password === password
    );

    if (user) {
      alert(`Selamat datang, ${user.nama} (${user.role})`);

      // Simpan data user ke localStorage
      localStorage.setItem("userLogin", JSON.stringify(user));

      // Arahkan ke dashboard
      window.location.href = "dashboard.html";
    } else {
      alert("Email atau password salah!");
    }
  });
});
