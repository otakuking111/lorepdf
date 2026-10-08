/* ===== DATA: add a new novel by adding an object to NOVELS. ===== */
const NOVELS = [
    {
      id: "the-fellowship-of-the-ring",
      title: "The Fellowship of the Ring",
      author: "J.R.R. Tolkien",
      cover: "https://i.pinimg.com/736x/4d/8c/eb/4d8ceb7c6e967c8c7948475e43791a2b.jpg",
      description: "Frodo Baggins inherits a ring of terrible power and leaves the Shire with eight companions to destroy it in the fires of Mordor.",
      category: "Fantasy",
      genres: ["Fantasy", "Epic Fantasy", "Adventure"],
      series: "The Lord of the Rings", part: 1, previousPart: null, nextPart: "the-two-towers",
      addedAt: "2026-10-07", trending: false, readUrl: "",
      previews: [
        "https://i.postimg.cc/Vfc9VNDD/Whats-App-Image-2026-10-07-at-19-07-35.jpg",
        "https://i.postimg.cc/0kxmCByF/Whats-App-Image-2026-10-07-at-19-03-57.jpg",
        "https://i.postimg.cc/xnqmgHn7/Whats-App-Image-2026-10-07-at-19-03-40.jpg"
      ]
    },
    {
      id: "the-two-towers",
      title: "The Two Towers",
      author: "J.R.R. Tolkien",
      cover: "https://i.pinimg.com/1200x/ce/54/b0/ce54b0ab1ec76b64d312a8ec4ac2c8f1.jpg",
      description: "The Fellowship is broken. Frodo and Sam press on toward Mordor while Aragorn, Legolas and Gimli ride to the defense of Rohan.",
      category: "Fantasy",
      genres: ["Fantasy", "Epic Fantasy", "Adventure"],
      series: "The Lord of the Rings", part: 2, previousPart: "the-fellowship-of-the-ring", nextPart: "the-return-of-the-king",
      addedAt: "2026-10-07", trending: false, readUrl: "",
      previews: [
        "https://i.postimg.cc/d1KvdfP2/Screenshot-2026-10-07-at-20-58-28.png",
        "https://i.postimg.cc/xCyQPPn7/Screenshot-2026-10-07-at-20-58-36.png",
        "https://i.postimg.cc/Kc0Svjzt/Screenshot-2026-10-07-at-20-59-35.png"
      ]
    },
    {
      id: "the-return-of-the-king",
      title: "The Return of the King",
      author: "J.R.R. Tolkien",
      cover: "https://i.pinimg.com/736x/5a/a6/8d/5aa68d9bf23a1766c5c0c58f8a8e234f.jpg",
      description: "Gondor stands against the armies of Sauron as Frodo and Sam near Mount Doom, where the fate of Middle-earth will be decided.",
      category: "Fantasy",
      genres: ["Fantasy", "Epic Fantasy", "Adventure"],
      series: "The Lord of the Rings", part: 3, previousPart: "the-two-towers", nextPart: null,
      addedAt: "2026-10-07", trending: false, readUrl: "",
      previews: [
        "https://i.postimg.cc/Dw6ns6yk/Screenshot-2026-10-07-at-21-25-54.png",
        "https://i.postimg.cc/0jRLhK2S/Screenshot-2026-10-07-at-21-27-26.png",
        "https://i.postimg.cc/y8YwqHBy/Screenshot-2026-10-07-at-21-28-21.png"
      ]
    }
  ];
  
  /* Genre taxonomy. Add a name here to make it appear in "All genres". Genres used by a novel appear automatically. */
  const GENRES = ["Romance","Contemporary Romance","Historical Romance","Fantasy","Epic Fantasy","Dark Fantasy","Urban Fantasy","Science Fiction","Dystopian","Mystery","Thriller","Psychological Thriller","Crime","Detective","Horror","Gothic","Paranormal","Supernatural","Adventure","Historical Fiction","Literary Fiction","Contemporary Fiction","Classic Literature","Young Adult","New Adult","Teen Fiction","Coming of Age","Drama","Comedy","Satire","Action","War","Political Fiction","Philosophical Fiction","Magical Realism","Western","Family","LGBTQ+","Short Stories","Novellas","Memoir","Suspense","Children's Fiction","Middle Grade","Speculative Fiction","Crime Fiction"];
  
  /* ===== HELPERS ===== */
  const $ = (s, r = document) => r.querySelector(s);
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const byId = id => NOVELS.find(n => n.id === id);
  const img = (src, alt, eager) => `<img src="${esc(src)}" alt="${esc(alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" referrerpolicy="no-referrer">`;
  const sortedNew = () => [...NOVELS].sort((a, b) => b.addedAt.localeCompare(a.addedAt) || (a.series === b.series ? (a.part || 0) - (b.part || 0) : a.title.localeCompare(b.title)));
  const uniq = arr => [...new Set(arr)].sort((a, b) => a.localeCompare(b));
  
  /* Broken images fall back to a title block so layout never collapses. */
  document.addEventListener("error", e => {
    const t = e.target;
    if (t.tagName !== "IMG") return;
    const box = t.closest(".ph") || t.closest(".pv");
    if (box) box.classList.add("broken");
    t.remove();
  }, true);
  
  const card = n => `<a class="card" href="novel.html?id=${encodeURIComponent(n.id)}">
    <div class="ph" data-title="${esc(n.title)}">${img(n.cover, n.title + " cover")}</div>
    <div class="meta"><h3>${esc(n.title)}</h3><p>${esc(n.author)}</p>
    <p class="sub">${esc(n.genres[0] || n.category)}${n.series ? `, ${esc(n.series)}${n.part ? " Part " + n.part : ""}` : ""}</p></div></a>`;
  
  /* ===== HEADER / FOOTER ===== */
  function initChrome() {
    const links = [["Home","index.html"],["Browse","index.html#browse"],["Categories","index.html#categories"],["Search","index.html#search"]];
    $("#site-header").innerHTML = `<div class="wrap"><a class="brand" href="index.html" aria-label="LorePDF home">Lore<span>PDF</span></a>
      <button class="burger" aria-label="Menu" aria-expanded="false" aria-controls="nav"><i></i></button>
      <nav class="nav" id="nav">${links.map(l => `<a href="${l[1]}">${l[0]}</a>`).join("")}</nav></div>`;
    $("#site-footer").innerHTML = `<div class="wrap"><span>LorePDF</span><span>&copy; ${new Date().getFullYear()} LorePDF. All rights reserved.</span></div>`;
    const nav = $("#nav"), btn = $(".burger");
    const set = open => { nav.classList.toggle("open", open); btn.setAttribute("aria-expanded", open); document.body.classList.toggle("lock", open); };
    btn.addEventListener("click", () => set(!nav.classList.contains("open")));
    nav.addEventListener("click", e => { if (e.target === nav || e.target.closest("a")) set(false); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") set(false); });
    matchMedia("(min-width:821px)").addEventListener("change", () => set(false));
  }
  
  /* ===== HOME ===== */
  function initHome() {
    $("#latest-grid").innerHTML = sortedNew().slice(0, 10).map(card).join("");
    const trend = NOVELS.filter(n => n.trending);
    if (trend.length) { $("#trending").hidden = false; $("#trending-grid").innerHTML = trend.map(card).join(""); }
  
    const used = {}; NOVELS.forEach(n => n.genres.forEach(g => used[g] = (used[g] || 0) + 1));
    const state = { q: "", genre: "", author: "", series: "" };
    const chip = (g, c) => `<button class="chip" data-g="${esc(g)}">${esc(g)}${c ? `<small>${c}</small>` : ""}</button>`;
    $("#genre-chips").innerHTML = uniq(Object.keys(used)).map(g => chip(g, used[g])).join("");
    $("#all-genre-chips").innerHTML = uniq([...GENRES, ...Object.keys(used)]).map(g => chip(g, used[g])).join("");
  
    const opts = (label, list) => `<option value="">${label}</option>` + list.map(v => `<option>${esc(v)}</option>`).join("");
    $("#f-genre").innerHTML = opts("All genres", uniq(Object.keys(used)));
    $("#f-author").innerHTML = opts("All authors", uniq(NOVELS.map(n => n.author)));
    $("#f-series").innerHTML = opts("All series", uniq(NOVELS.map(n => n.series).filter(Boolean)));
  
    const render = () => {
      const toks = state.q.toLowerCase().split(/\s+/).filter(Boolean);
      const res = sortedNew().filter(n => {
        const hay = [n.title, n.author, n.category, n.series, ...n.genres].join(" ").toLowerCase();
        return toks.every(t => hay.includes(t)) && (!state.genre || n.genres.includes(state.genre)) && (!state.author || n.author === state.author) && (!state.series || n.series === state.series);
      });
      $("#lib-grid").innerHTML = res.map(card).join("");
      $("#empty").hidden = res.length > 0;
      $("#count").textContent = `${res.length} ${res.length === 1 ? "novel" : "novels"}`;
      $("#f-genre").value = state.genre;
      document.querySelectorAll(".chip").forEach(c => c.classList.toggle("on", c.dataset.g === state.genre));
    };
    $("#q").addEventListener("input", e => { state.q = e.target.value; render(); });
    $("#f-genre").addEventListener("change", e => { state.genre = e.target.value; render(); });
    $("#f-author").addEventListener("change", e => { state.author = e.target.value; render(); });
    $("#f-series").addEventListener("change", e => { state.series = e.target.value; render(); });
    const reset = () => { Object.assign(state, { q: "", genre: "", author: "", series: "" }); $("#q").value = ""; $("#f-author").value = ""; $("#f-series").value = ""; render(); };
    $("#reset").addEventListener("click", reset);
    $("#empty-reset").addEventListener("click", reset);
    document.querySelectorAll(".chip").forEach(c => c.addEventListener("click", () => {
      state.genre = state.genre === c.dataset.g ? "" : c.dataset.g; render();
      if (state.genre) $("#browse").scrollIntoView();
    }));
    render();
    const focusSearch = () => { if (location.hash === "#search") setTimeout(() => $("#q").focus({ preventScroll: true }), 400); };
    focusSearch(); addEventListener("hashchange", focusSearch);
  }
  
  /* ===== LIGHTBOX ===== */
  function lightbox(list, start, title) {
    let i = start, x0 = 0;
    const lb = document.createElement("div");
    lb.className = "lb open"; lb.setAttribute("role", "dialog"); lb.setAttribute("aria-label", title + " previews");
    lb.innerHTML = `<button class="x" aria-label="Close">&times;</button><button class="pr" aria-label="Previous image">&lsaquo;</button><figure></figure><button class="nx" aria-label="Next image">&rsaquo;</button><div class="n"></div>`;
    document.body.append(lb); document.body.classList.add("lock");
    const show = () => { $("figure", lb).innerHTML = img(list[i], `${title} preview ${i + 1}`, true); $(".n", lb).textContent = `${i + 1} / ${list.length}`; $(".pr", lb).hidden = $(".nx", lb).hidden = list.length < 2; };
    const go = d => { i = (i + d + list.length) % list.length; show(); };
    const close = () => { lb.remove(); document.body.classList.remove("lock"); document.removeEventListener("keydown", key); };
    const key = e => { if (e.key === "Escape") close(); if (e.key === "ArrowLeft") go(-1); if (e.key === "ArrowRight") go(1); };
    document.addEventListener("keydown", key);
    lb.addEventListener("click", e => { if (e.target === lb || e.target.closest(".x")) close(); if (e.target.closest(".pr")) go(-1); if (e.target.closest(".nx")) go(1); });
    lb.addEventListener("touchstart", e => x0 = e.changedTouches[0].clientX, { passive: true });
    lb.addEventListener("touchend", e => { const d = e.changedTouches[0].clientX - x0; if (Math.abs(d) > 50) go(d > 0 ? -1 : 1); }, { passive: true });
    show(); $(".x", lb).focus();
  }
  
  /* ===== NOVEL PAGE ===== */
  function initNovel() {
    const root = $("#novel");
    const n = byId(new URLSearchParams(location.search).get("id"));
    if (!n) {
      document.title = "Novel not found | LorePDF";
      root.innerHTML = `<div class="wrap empty"><h1 class="sec-title">Novel not found</h1><p>This link does not match a novel in the library.</p><a class="btn" href="index.html#browse">Browse the library</a></div>`;
      return;
    }
    document.title = `${n.title} by ${n.author} | LorePDF`;
    const prev = n.previousPart && byId(n.previousPart), next = n.nextPart && byId(n.nextPart);
    const sn = (p, label, cls) => `<a class="${cls}" href="novel.html?id=${encodeURIComponent(p.id)}"><div class="ph" data-title="${esc(p.title)}">${img(p.cover, p.title + " cover")}</div><span><small>${label}</small><b>${esc(p.title)}</b></span></a>`;
    const read = n.readUrl
      ? `<a class="read" href="${esc(n.readUrl)}" target="_blank" rel="noopener">Read Now ${arrow}</a>`
      : `<button class="read" type="button" data-read>Read Now ${arrow}</button>`;
    root.innerHTML = `<section class="hero"><div class="hero-bg" style="background-image:url('${esc(n.cover)}')"></div><div class="wrap">
      <div class="ph" data-title="${esc(n.title)}">${img(n.cover, n.title + " cover", true)}</div>
      <div class="info">
        ${n.series ? `<p class="crumb">${esc(n.series)}${n.part ? ", Part " + n.part : ""}</p>` : ""}
        <h1>${esc(n.title)}</h1><p class="author">by ${esc(n.author)}</p>
        <div class="tags">${n.genres.map(g => `<a class="tag" href="index.html#browse" data-g="${esc(g)}">${esc(g)}</a>`).join("")}</div>
        <p class="desc">${esc(n.description)}</p>${read}
      </div></div></section>
      <div class="wrap">
      ${n.previews.length ? `<section class="block" id="previews"><h2>Previews</h2><div class="strip">${n.previews.map((p, i) => `<button class="pv" data-i="${i}" aria-label="Open preview ${i + 1}">${img(p, `${n.title} preview ${i + 1}`)}</button>`).join("")}</div></section>` : ""}
      ${prev || next ? `<section class="block"><h2>${esc(n.series)}</h2><div class="series">${prev ? sn(prev, "Previous Part", "prv") : ""}${next ? sn(next, "Next Part", "nxt") : ""}</div></section>` : ""}
      </div>`;
    const open = i => lightbox(n.previews, i, n.title);
    root.addEventListener("click", e => {
      const pv = e.target.closest(".pv"); if (pv) open(+pv.dataset.i);
      if (e.target.closest("[data-read]")) { if (n.previews.length) open(0); }
    });
  }
  const arrow = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;
  
  initChrome();
  document.body.classList.contains("novel-page") ? initNovel() : initHome();