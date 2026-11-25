/* =========================================================
   1. CONFIGURACIÓN GENERAL (editá el WhatsApp acá)
   ========================================================= */
const WHATSAPP_NUMBER = "5492262670016"; // Ejemplo: "5492262000000" (código de país + área + número)

// encodeURI codifica tildes y espacios en nombres de archivos locales
const path = (folder, file) => encodeURI(`${folder}/${file}`);

// Imágenes fijas del encabezado y de la pestaña Estudio
document.getElementById("logo-img").src = path("fotos", "lu-nails-queen-logo.jpeg");
document.getElementById("studio-work-img").src = path("fotos", "lu-nails-queen-manicuria-necochea.jpeg");
document.getElementById("studio-tips-img").src = path("fotos", "aplicacion-tips-soft-gel.jpeg");

/* =========================================================
   2. LISTADO DE FOTOS Y VIDEOS (agregá o editá ítems acá)
   ========================================================= */
const ITEMS = [
  {"type": "image", "cat": "Soft Gel", "tag": "Soft Gel • Carey", "file": "soft-gel-stiletto-carey-nude-dorado.jpeg", "title": "Stiletto carey y nude con detalles dorados", "desc": "Francesa carey, base nude y microperlas doradas.", "alt": "Uñas Soft Gel stiletto carey y nude con detalles dorados"},
  {"type": "image", "cat": "Soft Gel", "tag": "Soft Gel • Stiletto", "file": "soft-gel-stiletto-carey-azul.jpeg", "title": "Stiletto carey con borde azul eléctrico", "desc": "Contraste de carey con punta francesa azul.", "alt": "Uñas Soft Gel stiletto carey con francesa azul eléctrica"},
  {"type": "image", "cat": "Soft Gel", "tag": "Soft Gel • Almendra", "file": "soft-gel-almendra-coral-francesa-negra.jpeg", "title": "Almendra coral con francesa negra y strass", "desc": "Base coral, punta negra y strass.", "alt": "Uñas Soft Gel almendra coral con francesa negra y strass"},
  {"type": "image", "cat": "Soft Gel", "tag": "Soft Gel • Cat Eye", "file": "soft-gel-efecto-ojo-de-gato.jpeg", "title": "Efecto ojo de gato tornasolado", "desc": "Destellos cat-eye en tonos lila y rosado.", "alt": "Uñas Soft Gel con efecto ojo de gato en tonos lila y rosado"},
  {"type": "image", "cat": "Soft Gel", "tag": "Soft Gel • Cuadradas", "file": "soft-gel-cuadradas-francesitas-monos.jpeg", "title": "Cuadradas francesitas con moños", "desc": "Francesa blanca y dijes de moños con perla.", "alt": "Uñas Soft Gel cuadradas con francesitas blancas y dijes de moños"},
  {"type": "image", "cat": "Soft Gel", "tag": "Soft Gel • Dijes", "file": "soft-gel-cuadradas-francesitas-mono-detalle.jpeg", "title": "Cuadradas francesitas — detalle de moño", "desc": "Acabado brillante con dije de moño.", "alt": "Detalle de uñas Soft Gel cuadradas con francesita y dije de moño"},
  {"type": "image", "cat": "Soft Gel", "tag": "Soft Gel • Blooming", "file": "soft-gel-stiletto-blooming-strass.jpeg", "title": "Stiletto efecto blooming y strass", "desc": "Verde agua marmolado con técnica blooming y strass.", "alt": "Uñas Soft Gel stiletto con efecto blooming y strass"},
  {"type": "image", "cat": "Soft Gel", "tag": "Soft Gel • Proceso", "file": "aplicacion-tips-soft-gel.jpeg", "title": "Aplicación de tips Soft Gel", "desc": "Colocación de tips en proceso.", "alt": "Aplicación de tips Soft Gel en proceso de manicura"},
  {"type": "image", "cat": "Semipermanente y Nail Art", "tag": "Semipermanente", "file": "semipermanente-negro-unas-cortas.jpeg", "title": "Cuadradas cortas en negro pleno", "desc": "Esmaltado negro brillante y prolijo.", "alt": "Esmaltado semipermanente negro brillante en uñas cortas cuadradas"},
  {"type": "image", "cat": "Semipermanente y Nail Art", "tag": "Nail Art • 3D", "file": "nail-art-francesa-estrellas-3d.jpeg", "title": "Vía láctea, francesa, estrellas y 3D", "desc": "Francesa blanca, destellos dorados y relieve.", "alt": "Nail Art con francesa blanca, estrellas, destellos dorados y relieve 3D"},
  {"type": "image", "cat": "Semipermanente y Nail Art", "tag": "Nail Art • Floral", "file": "nail-art-francesita-flor-rosa.jpeg", "title": "Francesita fina y florcita rosa", "desc": "Base lechosa con detalle floral.", "alt": "Nail Art con francesita fina y flor rosa sobre base lechosa"},
  {"type": "image", "cat": "Semipermanente y Nail Art", "tag": "Nail Art", "file": "nail-art-rojo-blanco-negro-lunares.jpeg", "title": "Rojo, blanco y negro con lunares", "desc": "Diseño temático con lunares.", "alt": "Nail Art rojo, blanco y negro con diseño de lunares"},
  {"type": "image", "cat": "Semipermanente y Nail Art", "tag": "Nail Art • Glitter", "file": "nail-art-rosa-glitter.jpeg", "title": "Rosa con uña acento en glitter", "desc": "Tono rosa combinado con brillo.", "alt": "Nail Art rosa con uña de acento en glitter"},
  {"type": "image", "cat": "Semipermanente y Nail Art", "tag": "Acabado • Perlado", "file": "semipermanente-acabado-perlado.jpeg", "title": "Acabado perlado suave", "desc": "Brillo nacarado sutil en formato corto.", "alt": "Esmaltado semipermanente con acabado perlado suave en uñas cortas"},
  {"type": "image", "cat": "Semipermanente y Nail Art", "tag": "Nail Art • Gatitos", "file": "nail-art-gatitos.jpeg", "title": "Nail Art de gatitos", "desc": "Gatitos en distintos tonos sobre base natural.", "alt": "Nail Art de gatitos sobre base natural"},
  {"type": "image", "cat": "Crecimiento", "tag": "3 semanas", "file": "soft-gel-crecimiento-3-semanas-francesa-lila.jpeg", "title": "3 semanas de crecimiento — francesa y lila", "desc": "Retención a las 3 semanas.", "alt": "Crecimiento de Soft Gel a las 3 semanas con diseño francés y lila"},
  {"type": "image", "cat": "Crecimiento", "tag": "3 semanas", "file": "soft-gel-crecimiento-3-semanas-almendra.jpeg", "title": "3 semanas de crecimiento — almendra", "desc": "Crecimiento de 3 semanas sin desprendimientos.", "alt": "Crecimiento de Soft Gel a las 3 semanas en uñas forma almendra"},
  {"type": "image", "cat": "Crecimiento", "tag": "1 mes", "file": "soft-gel-crecimiento-1-mes-dorado.jpeg", "title": "1 mes de crecimiento en Soft Gel", "desc": "Diseño con destellos dorados al mes.", "alt": "Soft Gel con 1 mes de crecimiento y destellos dorados"},
  {"type": "image", "cat": "Crecimiento", "tag": "Más de 1 mes", "file": "soft-gel-crecimiento-mas-de-1-mes-rojo.jpeg", "title": "Más de 1 mes de crecimiento — rojo", "desc": "Stiletto rojo con más de 1 mes de crecimiento.", "alt": "Soft Gel stiletto rojo con más de 1 mes de crecimiento"},
  {"type": "image", "cat": "Crecimiento", "tag": "Más de 1 mes", "file": "soft-gel-crecimiento-mas-de-1-mes-francesa.jpeg", "title": "Más de 1 mes de crecimiento — francesa", "desc": "Retención prolongada con apliques intactos.", "alt": "Soft Gel con más de 1 mes de crecimiento y diseño francés"},
  {"type": "image", "cat": "Crecimiento", "tag": "2 meses", "file": "soft-gel-crecimiento-2-meses.jpeg", "title": "2 meses de crecimiento en Soft Gel", "desc": "Estructura firme a los 2 meses.", "alt": "Soft Gel con registro de 2 meses de crecimiento"},
  {"type": "video", "cat": "Videos", "tag": "Video", "file": "soft-gel-antes-despues-carey-azul.mp4", "title": "Antes y después — Carey y borde azul", "desc": "De uña natural y extensión al diseño final."},
  {"type": "video", "cat": "Videos", "tag": "Video", "file": "soft-gel-crecimiento-3-semanas.mp4", "title": "3 semanas de crecimiento en Soft Gel", "desc": "Video del crecimiento a las 3 semanas."},
  {"type": "video", "cat": "Videos", "tag": "Video", "file": "francesita-blanca-microperlas.mp4", "title": "Francesa blanca y microperlas", "desc": "Primer plano en uñas cuadradas."},
  {"type": "video", "cat": "Videos", "tag": "Video", "file": "nail-art-carey-marron-dorado.mp4", "title": "Carey, marrón y detalles dorados", "desc": "Detalle de diseño en stiletto."},
  {"type": "video", "cat": "Videos", "tag": "Video", "file": "stiletto-rojo-ojo-de-gato.mp4", "title": "Stiletto rojo ojo de gato", "desc": "Reflejos cat-eye en rojo."},
  {"type": "video", "cat": "Videos", "tag": "Video", "file": "almendra-coral-francesa-negra-strass.mp4", "title": "Almendra coral, francesa negra y strass", "desc": "Primer plano con brillos y punta negra."},
  {"type": "video", "cat": "Videos", "tag": "Video", "file": "francesa-blanca-strass.mp4", "title": "Francesa blanca y strass", "desc": "Acabado con destellos en cada uña."}
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
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `Ver ${item.title}`);
  card.addEventListener("click", () => openViewer(list, idx));
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openViewer(list, idx);
    }
  });

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
    img.alt = item.alt || item.title;
    img.loading = "lazy";
    img.decoding = "async";
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
    img.alt = item.alt || item.title;
    img.decoding = "async";
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
const photoCount = ITEMS.filter((i) => i.type === "image").length + 2; // +2 fotos fijas (Logo y Trabajando))
const videoCount = ITEMS.filter((i) => i.type === "video").length;
document.getElementById("summary").textContent = `${photoCount} fotos y ${videoCount} videos`;

drawFilters();
drawGallery();
drawGrowth();