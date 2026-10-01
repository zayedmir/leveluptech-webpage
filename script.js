/* ===== 1. YOUR CONTACT DETAILS: edit only these three lines ===== */
const CONFIG = {
  whatsapp: "971541755209",              // country code + number, no + or spaces
  instagram: "leveluptech.ae",           // handle without the @
  email: "customercare@leveluptech.ae"   // swap for your customer care email later
};

/* ===== 2. YOUR BUILDS: add, remove, or edit a build here and the page updates ===== */
const BUILDS = [
  { tier: "E_SPORTS", img: "images/pc-1.png", alt: "E_SPORTS build with white RGB fans",
    specs: ["RYZEN 5 5600X", "XFX AMD RADEON 6700XT 12GB", "JUHOR 16GB RAM (8X2) 3200MHZ DDR4", "ASROCK B550M PRO", "KINGSTON NV3 1TB NVME SSD PCIE GEN 4", "CORSAIR 650W 80+ BRONZE"],
    blurb: "Fast and light, great for esports." },
  { tier: "HYBRID", img: "images/pc-2.png", alt: "HYBRID build in a white case with orange lighting",
    specs: ["RYZEN 7 5700G", "XFX AMD RADEON 7700XT 12GB", "LEXAR RAM 32GB (16X2) 3200MHZ DDR4", "GIGABYTE B550M DS3H", "KINGSTON 1TB NVME SSD PCIE GEN 4", "MSI MAG A750BN"],
    blurb: "Handles multitasking like a pro." },
  { tier: "OVERDRIVE", img: "images/pc-3.png", alt: "OVERDRIVE build with a Radeon 6950XT",
    specs: ["I7-12700K", "XFX AMD RADEON 6950XT 16GB", "CRUCIAL RAM 32GB (16X2) 6000MHZ DDR5", "GIGABYTE B760M E DDR5", "KINGSTON 2TB NVME SSD PCIE GEN 4", "CORSAIR SF850"],
    blurb: "Pure power." },
  { tier: "CORE", img: "images/pc-4.png", alt: "CORE build with blue lighting",
    specs: ["RYZEN 7 5700X", "XFX AMD RADEON 6700XT 12GB", "LEXAR 16GB RAM (8X2) 3200MHZ DDR4", "ASROCK B550M PRO", "WD BLUE 1TB NVME SSD PCIE GEN 4", "CORSAIR TX750W 80+ BRONZE"],
    blurb: "Great competitive edge." },
  { tier: "ELITE", img: "images/pc-5.png", alt: "ELITE compact build with white fans",
    specs: ["RYZEN 7 5800X", "XFX AMD RADEON 7800XT 16GB MAGAIR WHITE", "TRI-FORCE RAM 32GB (16X2) 3200MHZ DDR4", "MSI B550 VDH PRO", "KINGSTON 2TB NVME SSD PCIE GEN 4", "CORSAIR SF850"],
    blurb: "Sleek & compact gaming and productivity." },
  { tier: "ULTRA", img: "images/pc-6.png", alt: "ULTRA build with purple lighting",
    specs: ["RYZEN 7 7800X3D", "AMD RADEON 7900XTX 24GB", "XPG RAM 32GB (16X2) 6000M/TS DDR5", "GIGABYTE AORUS B650 WIFI ELITE", "KINGSTON 1TB NVME SSD PCIE GEN 4", "CORSAIR SF850"],
    blurb: "Peak performance and workloads." }
];

/* ===== 3. HELPERS ===== */
// Builds a WhatsApp link that opens a chat with a message already typed in
const waLink = (msg) => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;

/* ===== 4. BUILD THE CARDS ===== */
document.getElementById("build-grid").innerHTML = BUILDS.map((b) => `
  <article class="card">
    <div class="card-img"><img src="${b.img}" alt="${b.alt}" loading="lazy"></div>
    <div class="card-body">
      <h3>[ ${b.tier} ]</h3>
      <ul class="specs">${b.specs.map((s) => `<li>${s}</li>`).join("")}</ul>
      <p class="blurb">${b.blurb}</p>
      <a class="btn" target="_blank" rel="noopener"
         href="${waLink(`Hi Level Up Tech! I'm interested in the ${b.tier} build. Is it available?`)}">[ INITIALIZE_ORDER ]</a>
    </div>
  </article>`).join("");

/* ===== 5. FILL IN LINKS FROM CONFIG ===== */
document.querySelectorAll("[data-wa]").forEach((a) => (a.href = waLink(a.dataset.wa)));
document.querySelectorAll("[data-ig]").forEach((a) => (a.href = `https://instagram.com/${CONFIG.instagram}`));
document.querySelectorAll("[data-email]").forEach((a) => (a.href = `mailto:${CONFIG.email}`));
document.querySelectorAll("[data-email-text]").forEach((el) => (el.textContent = CONFIG.email));

/* ===== 6. HAMBURGER MENU ===== */
const burger = document.querySelector(".burger");
const menu = document.getElementById("menu");
burger.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
menu.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    menu.classList.remove("open");
    burger.setAttribute("aria-expanded", false);
  })
);

/* ===== 7. TICKER: parts brands, repeated twice so the loop is seamless ===== */
const PARTS = ["RYZEN", "RADEON", "XFX", "CORSAIR", "KINGSTON", "GIGABYTE", "ASROCK", "MSI", "LEXAR", "CRUCIAL", "XPG", "WD"];
const strip = PARTS.map((p) => `<span>${p}</span><span>//</span>`).join("");
document.getElementById("track").innerHTML = strip + strip;

/* ===== 8. ENQUIRY FORM: opens WhatsApp or email with your message filled in ===== */
const form = document.getElementById("enquiry");
document.getElementById("tier").innerHTML = [...BUILDS.map((b) => b.tier + " build"), "Custom build", "Something else"]
  .map((t) => `<option>${t}</option>`).join("");
const compose = () => {
  const f = new FormData(form);
  return `Hi Level Up Tech! My name is ${f.get("name")}. I'm interested in: ${f.get("tier")}.` + (f.get("msg") ? ` ${f.get("msg")}` : "");
};
form.addEventListener("submit", (e) => { e.preventDefault(); window.open(waLink(compose()), "_blank", "noopener"); });
document.getElementById("mail-btn").addEventListener("click", () => {
  if (form.reportValidity()) location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent("Enquiry from website")}&body=${encodeURIComponent(compose())}`;
});

/* ===== 9. SCROLL REVEAL: elements wipe in once as they enter the screen ===== */
document.documentElement.classList.add("js");
const targets = document.querySelectorAll(".box, .card, .sec > .wrap > h2, .hero .wrap > *");
targets.forEach((el) => {
  el.classList.add("reveal");
  el.style.setProperty("--i", [...el.parentElement.children].indexOf(el) % 4); // small stagger inside a row
});
const io = new IntersectionObserver((entries) => entries.forEach((en) => {
  if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
}), { threshold: 0.12 });
targets.forEach((el) => io.observe(el));
