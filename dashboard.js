// Hamburger menu
const menu = document.querySelector(".navbar-nav");
const toggle = document.querySelector("#menu");

if (toggle) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
}

// Fungsi dropdown
function toggleDropdown(event, id) {
  event.preventDefault();
  const dropdown = document.getElementById(id);

  document.querySelectorAll(".dropdown-laporan").forEach((d) => {
    if (d !== dropdown) {
      d.classList.remove("dropdown-show");
      setTimeout(() => (d.style.display = "none"), 200);
    }
  });

  if (dropdown.classList.contains("dropdown-show")) {
    dropdown.classList.remove("dropdown-show");
    setTimeout(() => (dropdown.style.display = "none"), 200);
  } else {
    dropdown.style.display = "flex";
    setTimeout(() => dropdown.classList.add("dropdown-show"), 10);
  }
}

// ============================================
// 🔍 Fungsi Tracking Pengiriman
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  const btnCari = document.getElementById("btnCari");
  const trackingBtn = document.getElementById("tracking-btn");
  const trackingSection = document.getElementById("tracking-section");

  trackingBtn.addEventListener("click", (e) => {
    e.preventDefault();
    trackingSection.classList.toggle("hidden");
  });

  btnCari.addEventListener("click", cariDO);
});

function cariDO() {
  const input = document.getElementById("inputDO").value.trim();
  const resultSection = document.getElementById("tracking-result");

  const dataTracking = {
    2023001234: {
      nomorDO: "2023001234",
      nama: "Rina Wulandari",
      status: "Dalam Perjalanan",
      ekspedisi: "JNE",
      tanggalKirim: "2025-08-25",
      paket: "0JKT01",
      total: "Rp 180.000",
      perjalanan: [
        {
          waktu: "2025-08-25 10:12:20",
          keterangan: "Penerimaan di Loket: TANGERANG SELATAN",
        },
        {
          waktu: "2025-08-25 14:07:56",
          keterangan: "Tiba di Hub: TANGERANG SELATAN",
        },
        {
          waktu: "2025-08-25 18:30:10",
          keterangan: "Diteruskan ke Kantor Jakarta Selatan",
        },
      ],
    },
    2023005678: {
      nomorDO: "2023005678",
      nama: "Agus Pranoto",
      status: "Dikirim",
      ekspedisi: "Pos Indonesia",
      tanggalKirim: "2025-08-25",
      paket: "0UPBJJBDG",
      total: "Rp 220.000",
      perjalanan: [
        {
          waktu: "2025-08-25 10:12:20",
          keterangan: "Penerimaan di Loket: TANGERANG SELATAN",
        },
        { waktu: "2025-08-26 15:06:12", keterangan: "Proses antar ke Cimahi" },
        {
          waktu: "2025-08-26 20:00:00",
          keterangan: "Selesai Antar. Penerima: Agus Pranoto",
        },
      ],
    },
  };

  const result = dataTracking[input];

  if (result) {
    resultSection.classList.remove("hidden");
    document.getElementById("namaMahasiswa").textContent = result.nama;
    document.getElementById("ekspedisi").textContent = result.ekspedisi;
    document.getElementById("tanggalKirim").textContent = result.tanggalKirim;
    document.getElementById("jenisPaket").textContent = result.paket;
    document.getElementById("totalPembayaran").textContent = result.total;
    document.getElementById("statusPengiriman").textContent = result.status;

    const perjalananList = document.getElementById("perjalananList");
    perjalananList.innerHTML = result.perjalanan
      .map((p) => `<li>${p.waktu} - ${p.keterangan}</li>`)
      .join("");
  } else {
    resultSection.classList.add("hidden");
    alert("❌ Nomor DO tidak ditemukan.");
  }
}

// ============================================
// Fungsi Logout
// ============================================
function logout() {
  localStorage.removeItem("userLogin");
  window.location.href = "index.html";
}

// ============================================
// Menampilkan nama pengguna di navbar
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  const userData = JSON.parse(localStorage.getItem("userLogin"));
  const welcomeText = document.getElementById("welcomeUser");

  if (userData && welcomeText) {
    welcomeText.textContent = `Hi, ${userData.nama}`;
  } else {
    window.location.href = "index.html"; // Kalau belum login, balik ke halaman login
  }
});
