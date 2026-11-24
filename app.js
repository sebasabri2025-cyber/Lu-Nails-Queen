/* =========================================================
   1. CONFIGURACIÓN GENERAL (editá el WhatsApp acá)
   ========================================================= */
const WHATSAPP_NUMBER = "5492262670016"; // Ejemplo: "5492262000000" (código de país + área + número)

// encodeURI codifica tildes y espacios en nombres de archivos locales
const path = (folder, file) => encodeURI(`${folder}/${file}`);

// Imágenes fijas del encabezado y de la pestaña Estudio
document.getElementById("logo-img").src = path("fotos", "Logo.jpeg");
document.getElementById("studio-work-img").src = path("fotos", "Trabajando.jpeg");
document.getElementById("studio-tips-img").src = path("fotos", "Aplicación tips solt gel.jpeg");

/* =========================================================
   2. LISTADO DE FOTOS Y VIDEOS (agregá o editá ítems acá)
   ========================================================= */
const ITEMS = [
  { type: "image", cat: "Soft Gel", tag: "Soft Gel • Carey", file: "01.jpeg", title: "Stiletto carey y nude con detalles dorados", desc: "Francesa carey, base nude y microperlas doradas." },
  { type: "image", cat: "Soft Gel", tag: "Soft Gel • Stiletto", file: "02.jpeg", title: "Stiletto carey con borde azul eléctrico", desc: "Contraste de carey con punta francesa azul." },
  { type: "image", cat: "Soft Gel", tag: "Soft Gel • Almendra", file: "04.jpeg", title: "Almendra coral con francesa negra y strass", desc: "Base coral, punta negra y strass." },
  { type: "image", cat: "Soft Gel", tag: "Soft Gel • Cat Eye", file: "soft gel - efecto ojo de gato.jpeg", title: "Efecto ojo de gato tornasolado", desc: "Destellos cat-eye en tonos lila y rosado." },
  { type: "image", cat: "Soft Gel", tag: "Soft Gel • Cuadradas", file: "soft gel formato cuadradas - francesitas - dijes moños.jpeg", title: "Cuadradas francesitas con moños", desc: "Francesa blanca y dijes de moños con perla." },
  { type: "image", cat: "Soft Gel", tag: "Soft Gel • Dijes", file: "soft gel formato cuadradas - francesitas - dijes moños02.jpeg", title: "Cuadradas francesitas — detalle de moño", desc: "Acabado brillante con dije de moño." },
  { type: "image", cat: "Soft Gel", tag: "Soft Gel • Blooming", file: "soft gel formato styletto - efecto blooming - ful strass.jpeg", title: "Stiletto efecto blooming y strass", desc: "Verde agua marmolado con técnica blooming y strass." },
  { type: "image", cat: "Soft Gel", tag: "Soft Gel • Proceso", file: "Aplicación tips solt gel.jpeg", title: "Aplicación de tips Soft Gel", desc: "Colocación de tips en proceso." },

  { type: "image", cat: "Semipermanente y Nail Art", tag: "Semipermanente", file: "03.jpeg", title: "Cuadradas cortas en negro pleno", desc: "Esmaltado negro brillante y prolijo." },
  { type: "image", cat: "Semipermanente y Nail Art", tag: "Nail Art • 3D", file: "05.jpeg", title: "Vía láctea, francesa, estrellas y 3D", desc: "Francesa blanca, destellos dorados y relieve." },
  { type: "image", cat: "Semipermanente y Nail Art", tag: "Nail Art • Floral", file: "06.jpeg", title: "Francesita fina y florcita rosa", desc: "Base lechosa con detalle floral." },
  { type: "image", cat: "Semipermanente y Nail Art", tag: "Nail Art", file: "07.jpeg", title: "Rojo, blanco y negro con lunares", desc: "Diseño temático con lunares." },
  { type: "image", cat: "Semipermanente y Nail Art", tag: "Nail Art • Glitter", file: "08.jpeg", title: "Rosa con uña acento en glitter", desc: "Tono rosa combinado con brillo." },
  { type: "image", cat: "Semipermanente y Nail Art", tag: "Acabado • Perlado", file: "09.jpeg", title: "Acabado perlado suave", desc: "Brillo nacarado sutil en formato corto." },
  { type: "image", cat: "Semipermanente y Nail Art", tag: "Nail Art • Gatitos", file: "Semipermanente.jpeg", title: "Nail art de gatitos", desc: "Gatitos en distintos tonos sobre base natural." },

  { type: "image", cat: "Crecimiento", tag: "3 semanas", file: "3 semanas de crecimiento.jpeg", title: "3 semanas de crecimiento — francesa y lila", desc: "Retención a las 3 semanas." },
  { type: "image", cat: "Crecimiento", tag: "3 semanas", file: "3 semanas de crecimiento 002.jpeg", title: "3 semanas de crecimiento — almendra", desc: "Crecimiento de 3 semanas sin desprendimientos." },
  { type: "image", cat: "Crecimiento", tag: "1 mes", file: "1 mes de crecimiento sof gel.jpeg", title: "1 mes de crecimiento en Soft Gel", desc: "Diseño con destellos dorados al mes." },
  { type: "image", cat: "Crecimiento", tag: "Más de 1 mes", file: "mas de 1 mes de crecimiento sof gel.jpeg", title: "Más de 1 mes de crecimiento — rojo", desc: "Stiletto rojo con más de 1 mes de crecimiento." },
  { type: "image", cat: "Crecimiento", tag: "Más de 1 mes", file: "más de un mes de crecimiento.jpeg", title: "Más de 1 mes de crecimiento — francesa", desc: "Retención prolongada con apliques intactos." },
  { type: "image", cat: "Crecimiento", tag: "2 meses", file: "2 meses de crecimiento sof gel.jpeg", title: "2 meses de crecimiento en Soft Gel", desc: "Estructura firme a los 2 meses." },

  { type: "video", cat: "Videos", tag: "Video", file: "video-01.mp4", title: "Antes y después — Carey y borde azul", desc: "De uña natural y extensión al diseño final." },
  { type: "video", cat: "Videos", tag: "Video", file: "video-02.mp4", title: "3 semanas de crecimiento en Soft Gel", desc: "Video del crecimiento a las 3 semanas." },
  { type: "video", cat: "Videos", tag: "Video", file: "video-03.mp4", title: "Francesa blanca y microperlas", desc: "Primer plano en uñas cuadradas." },
  { type: "video", cat: "Videos", tag: "Video", file: "video-04.mp4", title: "Carey, marrón y detalles dorados", desc: "Detalle de diseño en stiletto." },
  { type: "video", cat: "Videos", tag: "Video", file: "video-05.mp4", title: "Stiletto rojo ojo de gato", desc: "Reflejos cat-eye en rojo." },
  { type: "video", cat: "Videos", tag: "Video", file: "video-06.mp4", title: "Almendra coral, francesa negra y strass", desc: "Primer plano con brillos y punta negra." },
  { type: "video", cat: "Videos", tag: "Video", file: "video-07.mp4", title: "Francesa blanca y strass", desc: "Acabado con destellos en cada uña." }
];

/* =========================================================
   3. NAVEGACIÓN ENTRE PESTAÑAS
   ========================================================= */
const tabBtns = document.querySelectorAll(".tab-btn");
const panels = document.querySelectorAll(".panel");

function openTab(tabName) {
  tabBtns.forEach((btn) => {
    const isActive = btn.dataset.tab === tabName;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-selected", String(isActive));
  });
  panels.forEach((panel) => {
    panel.classList.toggle("active", panel.id === `panel-${tabName}`);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => openTab(btn.dataset.tab));
});

document.querySelectorAll("[data-tab-jump]").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    openTab(el.dataset.tabJump);
  });
});

/* =========================================================
   4. FILTROS Y RENDERIZADO DE TARJETAS
   ========================================================= */
const CATS = ["Todos", "Soft Gel", "Semipermanente y Nail Art", "Crecimiento", "Videos"];
let currentCat = "Todos";
let viewerList = ITEMS;
let viewerIdx = 0;

const filtersEl = document.getElementById("filters");
const galleryEl = document.getElementById("gallery");
const growthEl = document.getElementById("growth");
const viewer = document.getElementById("viewer");
const viewerStage = document.getElementById("viewer-stage");

function cardNode(item, list, idx) {
  const folder = item.type === "video" ? "videos" : "fotos";
  const url = path(folder, item.file);

  const card = document.createElement("article");
  card.className = "card";
  card.addEventListener("click", () => openViewer(list, idx));

  const thumb = document.createElement("div");
  thumb.className = "thumb";

  if (item.type === "video") {
    const video = document.createElement("video");
    video.src = url;
    video.preload = "metadata";
    video.muted = true;
    video.playsInline = true;
    thumb.appendChild(video);

    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = "VIDEO";
    thumb.appendChild(badge);
  } else {
    const img = document.createElement("img");
    img.src = url;
    img.alt = item.title;
    img.loading = "lazy";
    thumb.appendChild(img);
  }

  const body = document.createElement("div");
  body.className = "card-body";
  body.innerHTML = `
    <span class="card-cat">${item.tag}</span>
    <h3 class="card-title">${item.title}</h3>
    <p class="card-desc">${item.desc}</p>
  `;

  card.append(thumb, body);
  return card;
}

function drawFilters() {
  filtersEl.innerHTML = "";
  CATS.forEach((cat) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `filter-btn${currentCat === cat ? " active" : ""}`;
    btn.textContent = cat;
    btn.addEventListener("click", () => {
      currentCat = cat;
      drawFilters();
      drawGallery();
    });
    filtersEl.appendChild(btn);
  });
}

function drawGallery() {
  galleryEl.innerHTML = "";
  const list = currentCat === "Todos" ? ITEMS : ITEMS.filter((item) => item.cat === currentCat);
  list.forEach((item, idx) => galleryEl.appendChild(cardNode(item, list, idx)));
}

function drawGrowth() {
  growthEl.innerHTML = "";
  const list = ITEMS.filter((item) => item.cat === "Crecimiento");
  list.forEach((item, idx) => growthEl.appendChild(cardNode(item, list, idx)));
}

/* =========================================================
   5. VISOR AMPLIADO DE FOTO O VIDEO
   ========================================================= */
function drawViewer() {
  viewerStage.querySelectorAll("video").forEach((v) => v.pause());
  const item = viewerList[viewerIdx];
  if (!item) return;

  const folder = item.type === "video" ? "videos" : "fotos";
  const url = path(folder, item.file);
  viewerStage.innerHTML = "";

  if (item.type === "video") {
    const video = document.createElement("video");
    video.src = url;
    video.controls = true;
    video.playsInline = true;
    viewerStage.appendChild(video);
  } else {
    const img = document.createElement("img");
    img.src = url;
    img.alt = item.title;
    viewerStage.appendChild(img);
  }

  document.getElementById("viewer-tag").textContent = item.tag;
  document.getElementById("viewer-title").textContent = item.title;
  document.getElementById("viewer-desc").textContent = item.desc;
}

function openViewer(list, idx) {
  viewerList = list;
  viewerIdx = idx;
  drawViewer();
  viewer.classList.add("open");
  viewer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeViewer() {
  viewerStage.querySelectorAll("video").forEach((v) => v.pause());
  viewer.classList.remove("open");
  viewer.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.getElementById("viewer-close").addEventListener("click", closeViewer);
viewer.addEventListener("click", (e) => {
  if (e.target === viewer) closeViewer();
});
document.getElementById("viewer-prev").addEventListener("click", () => {
  viewerIdx = (viewerIdx - 1 + viewerList.length) % viewerList.length;
  drawViewer();
});
document.getElementById("viewer-next").addEventListener("click", () => {
  viewerIdx = (viewerIdx + 1) % viewerList.length;
  drawViewer();
});

/* =========================================================
   6. FORMULARIO DE TURNOS (WHATSAPP Y COPIAR MENSAJE)
   ========================================================= */
const serviceSelect = document.getElementById("service-select");
const designNotes = document.getElementById("design-notes");
const bookingStatus = document.getElementById("booking-status");
const bookingForm = document.getElementById("booking-form");

function goToBooking(service, note = "") {
  if (service) serviceSelect.value = service;
  if (note) designNotes.value = note;
  bookingStatus.textContent = "";
  openTab("turnos");
}

document.querySelectorAll("[data-book]").forEach((btn) => {
  btn.addEventListener("click", () => goToBooking(btn.dataset.book));
});

document.getElementById("viewer-to-book").addEventListener("click", () => {
  const item = viewerList[viewerIdx];
  closeViewer();
  goToBooking(
    item?.cat === "Semipermanente y Nail Art" ? "Esmaltado Semipermanente" : "Soft Gel",
    item ? `Diseño de referencia: ${item.title}` : ""
  );
});

function buildMessage() {
  const name = document.getElementById("client-name").value.trim() || "Cliente";
  const service = serviceSelect.value;
  const day = document.getElementById("pref-day").value.trim() || "A coordinar";
  const time = document.getElementById("pref-time").value;
  const notes = designNotes.value.trim() || "Sin detalles adicionales";

  return [
    `Hola Lu! Soy ${name}, quiero consultar por un turno en LU NAILS QUEEN (@LUNAILSQUEEN).`,
    `• Servicio: ${service}`,
    `• Día preferido: ${day}`,
    `• Horario: ${time}`,
    `• Diseño / notas: ${notes}`
  ].join("\n");
}

bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = buildMessage();
  const cleanNum = WHATSAPP_NUMBER.replace(/\D/g, "");
  if (!cleanNum) {
    bookingStatus.textContent = "Cargá WHATSAPP_NUMBER en app.js o usá 'Copiar mensaje'.";
    return;
  }
  window.open(`https://wa.me/${cleanNum}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
});

document.getElementById("copy-msg").addEventListener("click", async () => {
  const text = buildMessage();
  try {
    await navigator.clipboard.writeText(text);
    bookingStatus.textContent = "Mensaje copiado al portapapeles.";
  } catch {
    bookingStatus.textContent = text;
  }
});

document.addEventListener("keydown", (e) => {
  if (!viewer.classList.contains("open")) return;
  if (e.key === "Escape") closeViewer();
  if (e.key === "ArrowLeft") {
    viewerIdx = (viewerIdx - 1 + viewerList.length) % viewerList.length;
    drawViewer();
  }
  if (e.key === "ArrowRight") {
    viewerIdx = (viewerIdx + 1) % viewerList.length;
    drawViewer();
  }
});

/* =========================================================
   7. INICIALIZACIÓN
   ========================================================= */
const photoCount = ITEMS.filter((i) => i.type === "image").length + 3; // +3 fotos fijas (Logo, Trabajando, Aplicación tips)
const videoCount = ITEMS.filter((i) => i.type === "video").length;
document.getElementById("summary").textContent = `${photoCount} fotos y ${videoCount} videos`;

drawFilters();
drawGallery();
drawGrowth();