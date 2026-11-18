document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll("[data-tab]");
  function showTab(name) {
    document
      .getElementById("loginForm")
      ?.classList.toggle("hidden", name !== "login");
    document
      .getElementById("registerForm")
      ?.classList.toggle("hidden", name !== "register");
    tabs.forEach((t) => t.classList.toggle("active", t.dataset.tab === name));
  }
  tabs.forEach((t) =>
    t.addEventListener("click", () => showTab(t.dataset.tab)),
  );
  document.querySelectorAll("[data-switch]").forEach((a) =>
    a.addEventListener("click", (e) => {
      e.preventDefault();
      showTab(a.dataset.switch);
    }),
  );
  document.getElementById("loginForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.setItem("kostkitaLoggedIn", "true");
    alert("Login demo berhasil!");
    location.href = "index.html";
  });
  document.getElementById("registerForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.setItem("kostkitaLoggedIn", "true");
    alert("Pendaftaran demo berhasil! Silakan lanjut.");
    location.href = "index.html";
  });
  document.getElementById("rentForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.setItem("kostkitaRent", "Kost Melati Residence");
    location.href = "pembayaran.html";
  });
  document.getElementById("payForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.setItem("kostkitaPaid", "true");
    alert("Pembayaran demo berhasil dikonfirmasi.");
    location.href = "riwayat-sewa.html";
  });
  document.getElementById("adminForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("adminName").value,
      loc = document.getElementById("adminLocation").value,
      price = Number(
        document.getElementById("adminPrice").value,
      ).toLocaleString("id-ID");
    const p = document.createElement("p");
    p.className = "muted small";
    p.innerHTML = `${name} · ${loc} · Rp${price} `;
    const b = document.createElement("button");
    b.className = "btn outline";
    b.textContent = "Hapus";
    b.onclick = () => p.remove();
    p.appendChild(b);
    document.getElementById("adminList").appendChild(p);
    e.target.reset();
  });
});
function filterKost() {
  const q = (document.getElementById("searchKost")?.value || "").toLowerCase();
  document
    .querySelectorAll("#kostList .card")
    .forEach(
      (c) =>
        (c.style.display = c.innerText.toLowerCase().includes(q)
          ? "block"
          : "none"),
    );
}
