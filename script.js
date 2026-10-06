/* ==========================================================
   LorePDF – all data and logic live here.
   To add a novel: add one object to the `novels` array below.
   ========================================================== */

   const novels = [
    {
      id: "example-novel",
      title: "The Last Archive",
      author: "Example Author",
      cover: "images/example.jpg",        // missing image? a styled fallback cover is drawn
      description: "Placeholder description. A keeper of a forgotten library discovers that every book she saves rewrites the world outside its walls.",
      category: "Fantasy",
      series: "The Archive Saga",
      part: 1,
      previousPart: null,                 // id of previous novel in series, or null
      nextPart: null,                     // id of next novel in series, or null
      recommended: true,
      trending: true,
      locker: { it: "EXAMPLE_IT", key: "EXAMPLE_KEY" }
    }
  ];
  
  /* ---------- Content Locker manager (AdBlueMedia) ---------- */
  const LOCKER = {
    SCRIPT_URL: "https://REPLACE_WITH_ADBLUEMEDIA_SCRIPT_URL", // the one common script URL
    CONFIG_VAR: "REPLACE_WITH_CONFIG_VARIABLE_NAME"             // global variable name AdBlueMedia gives you (it/key go inside it)
  };
  
  function openLocker(it, key) {
    // 1. remove previous locker script and 2-3. clear previous config / _VR
    const old = document.getElementById("locker-script");
    if (old) old.remove();
    try { delete window[LOCKER.CONFIG_VAR]; } catch (e) { window[LOCKER.CONFIG_VAR] = undefined; }
    try { delete window._VR; } catch (e) { window._VR = undefined; }
    // 4. set this novel's values
    window[LOCKER.CONFIG_VAR] = { it: it, key: key };
    // 5. load the shared script
    const s = document.createElement("script");
    s.id = "locker-script";
    s.src = LOCKER.SCRIPT_URL;
    // 6-7. when loaded, call the official _VR() (defined by AdBlueMedia, never by us)
    s.onload = function () { if (typeof window._VR === "function") window._VR(); };
    document.body.appendChild(s);
  }
  
  /* ---------- Helpers ---------- */
  const $ = (s, r = document) => r.querySelector(s);
  const esc = t => String(t ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const byId = id => novels.find(n => n.id === id);
  const url = n => "novel.html?id=" + encodeURIComponent(n.id);
  const categories = () => [...new Set(novels.map(n => n.category).filter(Boolean))].sort();
  
  function cover(n) {
    return `<div class="cover"><img src="${esc(n.cover)}" alt="${esc(n.title)} cover" loading="lazy"
      onerror="this.parentNode.classList.add('fb');this.replaceWith(document.createTextNode(this.alt.replace(' cover','')))"></div>`;
  }
  function card(n) {
    return `<a class="card" href="${url(n)}">${cover(n)}<h3>${esc(n.title)}</h3><p>${esc(n.author)}</p><span class="tag">${esc(n.category)}</span></a>`;
  }
  
  /* ---------- Shared header, search overlay, footer ---------- */
  function renderChrome() {
    const home = document.body.dataset.page === "home";
    $("#app-header").innerHTML = `
    <header class="hdr"><div class="wrap hdr-in">
      <a class="logo" href="index.html">Lore<b>PDF</b></a>
      <nav class="nav" id="nav">
        <a href="index.html">Home</a><a href="${home ? "#browse" : "index.html#browse"}">Browse</a>
      </nav>
      <button class="search-btn" data-open-search aria-label="Search novels">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg><span>Search novels</span>
      </button>
      <button class="burger" id="burger" aria-label="Menu">☰</button>
    </div></header>
    <div class="ov" id="ov" role="dialog" aria-label="Search"><div class="ov-in">
      <div class="sbox"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a79fbd" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
        <input id="q" type="search" placeholder="Title, author, category or series" autocomplete="off">
        <button id="qClear" aria-label="Clear" hidden>✕</button><button id="qClose" aria-label="Close search">Esc</button></div>
      <div class="sres" id="sres"></div></div></div>`;
    $("#app-footer").innerHTML = `<footer><div class="wrap">© ${new Date().getFullYear()} LorePDF. Discover, read, continue the series.</div></footer>`;
    $("#burger").onclick = () => $("#nav").classList.toggle("open");
    $("#nav").onclick = () => $("#nav").classList.remove("open");
    initSearch();
  }
  
  /* ---------- Search ---------- */
  // Every typed word must appear somewhere in title/author/category/series (case-insensitive, partial).
  function searchNovels(q) {
    const words = q.toLowerCase().split(/\s+/).filter(Boolean);
    if (!words.length) return [];
    return novels.filter(n => {
      const hay = [n.title, n.author, n.category, n.series].join(" ").toLowerCase();
      return words.every(w => hay.includes(w));
    });
  }
  function initSearch() {
    const ov = $("#ov"), q = $("#q"), res = $("#sres"), clear = $("#qClear");
    const open = () => { ov.classList.add("open"); document.body.style.overflow = "hidden"; q.focus(); draw(); };
    const close = () => { ov.classList.remove("open"); document.body.style.overflow = ""; };
    function draw() {
      const v = q.value.trim();
      clear.hidden = !v;
      if (!v) { res.innerHTML = `<div class="hint"><strong>What do you want to read?</strong>Search by title, author, category or series.</div>`; return; }
      const r = searchNovels(v);
      res.innerHTML = r.length ? r.map(n => `<a class="srow" href="${url(n)}">${cover(n)}<div><h3>${esc(n.title)}</h3>
        <p>${esc(n.author)} · ${esc(n.category)}${n.series ? " · " + esc(n.series) + (n.part ? " #" + n.part : "") : ""}</p></div></a>`).join("")
        : `<div class="hint"><strong>No novels found</strong>Try another title, author, or category.</div>`;
    }
    document.addEventListener("click", e => { if (e.target.closest("[data-open-search]")) open(); });
    q.addEventListener("input", draw);
    clear.onclick = () => { q.value = ""; draw(); q.focus(); };
    $("#qClose").onclick = close;
    ov.addEventListener("click", e => { if (e.target === ov) close(); });
    document.addEventListener("keydown", e => {
      if (e.key === "Escape") close();
      if (e.key === "/" && !/input|textarea/i.test(document.activeElement.tagName)) { e.preventDefault(); open(); }
    });
  }
  
  /* ---------- Homepage ---------- */
  function renderHome() {
    const feat = (novels.filter(n => n.recommended).concat(novels)).slice(0, 3);
    $("#heroCovers").innerHTML = [0, 1, 2].map(i => cover(feat[i % feat.length])).join("");
  
    const rec = $("#recommended");
    const recs = novels.filter(n => n.recommended);
    rec.innerHTML = recs.map(card).join("");
    initCarousel(rec, recs.length);
  
    $("#trending").innerHTML = novels.filter(n => n.trending).map((n, i) =>
      `<a class="trend-item" href="${url(n)}"><span class="rank">${i + 1}</span>${cover(n)}<div><h3>${esc(n.title)}</h3><p>${esc(n.author)}</p><span class="tag">${esc(n.category)}</span></div></a>`).join("");
  
    // Browse: chips built from data
    const chips = $("#chips"); let active = "All";
    const grid = $("#browseGrid");
    function draw() {
      chips.innerHTML = ["All", ...categories()].map(c => `<button class="chip ${c === active ? "on" : ""}" data-c="${esc(c)}">${esc(c)}</button>`).join("");
      grid.innerHTML = novels.filter(n => active === "All" || n.category === active).map(card).join("");
    }
    chips.onclick = e => { const b = e.target.closest(".chip"); if (b) { active = b.dataset.c; draw(); } };
    draw();
  }
  
  /* Carousel: scroll-snap + auto-advance + mouse drag + arrows */
  function initCarousel(el, count) {
    const step = () => (el.firstElementChild?.offsetWidth || 180) + 16;
    const go = d => {
      const max = el.scrollWidth - el.clientWidth;
      if (d > 0 && el.scrollLeft >= max - 4) el.scrollTo({ left: 0, behavior: "smooth" });
      else el.scrollBy({ left: d * step(), behavior: "smooth" });
    };
    document.querySelectorAll("[data-dir]").forEach(b => b.onclick = () => go(+b.dataset.dir));
    let paused = false;
    ["mouseenter", "touchstart", "focusin"].forEach(ev => el.addEventListener(ev, () => paused = true, { passive: true }));
    ["mouseleave", "touchend", "focusout"].forEach(ev => el.addEventListener(ev, () => paused = false, { passive: true }));
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches) setInterval(() => { if (!paused && count > 2) go(1); }, 3800);
    // desktop drag
    let down = false, sx = 0, sl = 0, moved = false;
    el.addEventListener("pointerdown", e => { if (e.pointerType !== "mouse") return; down = true; moved = false; sx = e.clientX; sl = el.scrollLeft; });
    window.addEventListener("pointermove", e => { if (!down) return; const dx = e.clientX - sx; if (Math.abs(dx) > 5) { moved = true; el.style.scrollSnapType = "none"; } el.scrollLeft = sl - dx; });
    window.addEventListener("pointerup", () => { if (down) { down = false; el.style.scrollSnapType = ""; } });
    el.addEventListener("click", e => { if (moved) { e.preventDefault(); moved = false; } }, true);
  }
  
  /* ---------- Novel page ---------- */
  function renderNovel() {
    const root = $("#novelRoot");
    const n = byId(new URLSearchParams(location.search).get("id"));
    if (!n) {
      root.innerHTML = `<div class="hint" style="padding-block:90px"><strong>Novel not found</strong>This link may be outdated. <a href="index.html" style="color:var(--accent)">Browse all novels</a> or use search.</div>`;
      return;
    }
    document.title = n.title + " – LorePDF";
    const prev = byId(n.previousPart), next = byId(n.nextPart);
    root.innerHTML = `<article class="novel">${cover(n)}
      <div class="novel-info"><h1>${esc(n.title)}</h1><p class="by">by ${esc(n.author)}</p>
        <div class="meta"><span class="pill">${esc(n.category)}</span>${n.series ? `<span class="pill">${esc(n.series)}</span>` : ""}${n.part ? `<span class="pill">Part ${esc(n.part)}</span>` : ""}</div>
        <p class="desc">${esc(n.description)}</p>
        <div class="read-box"><button class="btn btn-primary btn-lg" id="readBtn">Read now</button><p class="note">Complete a short step to unlock your copy.</p></div>
        ${(prev || next) ? `<div class="snav" dir="rtl">${next ? `<a class="btn btn-ghost" href="${url(next)}">الجزء التالي</a>` : ""}${prev ? `<a class="btn btn-ghost" href="${url(prev)}">الجزء السابق</a>` : ""}</div>` : ""}
      </div></article>`;
    $("#readBtn").onclick = () => openLocker(n.locker.it, n.locker.key);
  
    // Related: same category or series first, never itself
    const rel = novels.filter(x => x.id !== n.id && (x.category === n.category || (n.series && x.series === n.series))).slice(0, 6);
    if (rel.length) { $("#related").innerHTML = rel.map(card).join(""); $("#relatedSec").hidden = false; }
  }
  
  /* ---------- Boot ---------- */
  renderChrome();
  document.body.dataset.page === "novel" ? renderNovel() : renderHome();