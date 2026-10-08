/* ==========================================================================
   NOVEL DATA — ADD NEW NOVELS HERE
   Copy one object, change the fields, add it to the array. That's all.
   - id: unique, used in the URL (novel.html?id=...)
   - previousPart / nextPart: the id of the neighbouring part, or null
   - addedAt: "YYYY-MM-DD" — newest dates appear first in Latest Additions
   - genres: any names from GENRE_GROUPS below (category = main genre label)
   - trending: true shows the book in Trending
   - previews: list of image URLs
   - readUrl: where "Read Now" opens (leave "" until the file link is ready)
   ========================================================================== */
   const NOVELS = [
    {
      id: "fellowship-of-the-ring",
      title: "The Fellowship of the Ring",
      author: "J.R.R. Tolkien",
      cover: "https://i.pinimg.com/736x/4d/8c/eb/4d8ceb7c6e967c8c7948475e43791a2b.jpg",
      description: "PART#1 of the legendary epic fantasy trilogy by J.R.R. Tolkien.",
      category: "Epic Fantasy",
      genres: ["Epic Fantasy", "Fantasy", "Adventure", "Classic Literature"],
      series: "The Lord of the Rings",
      part: 1,
      partLabel: "Part #1",
      previousPart: null,
      nextPart: "the-two-towers",
      addedAt: "2026-10-07",
      trending: true,
      readUrl: "",
      story: [
        { h: "Starting Plot", t: "The story begins in the peaceful Shire, where a young Hobbit named Frodo Baggins inherits a mysterious ancient ring, only to discover it is the dangerous \"One Ring\" forged by the Dark Lord Sauron." },
        { h: "Main Quest", t: "Frodo must embark on a perilous journey to destroy the ring in the fires of Mount Doom where it was created, in order to save the world of Middle-earth from ultimate darkness and destruction." },
        { h: "The Fellowship", t: "Frodo is joined by a diverse group known as \"The Fellowship,\" consisting of men, elves, dwarves, and the wise wizard Gandalf, to help him face the forces of evil." }
      ],
      note: "(This part is considered the cornerstone of one of the greatest and most famous fantasy series in the history of literature and cinema.)",
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
      description: "PART#2 of the legendary epic fantasy trilogy by J.R.R. Tolkien.",
      category: "Epic Fantasy",
      genres: ["Epic Fantasy", "Fantasy", "Adventure", "Classic Literature"],
      series: "The Lord of the Rings",
      part: 2,
      partLabel: "Part #2",
      previousPart: "fellowship-of-the-ring",
      nextPart: "the-return-of-the-king",
      addedAt: "2026-10-07",
      trending: true,
      readUrl: "",
      story: [
        { h: "Starting Plot", t: "The Fellowship is broken after a fierce battle; Frodo and Sam continue their journey to Mount Doom alone, while unknowingly tracked by the creature Gollum." },
        { h: "Main Conflict", t: "The remaining members of the broken fellowship (Aragorn, Legolas, and Gimli) travel across Middle-earth to help the kingdoms of men unite and fight against the massive armies of the Dark Lord Sauron and the traitorous wizard Saruman." },
        { h: "Climax", t: "The heroic defense of Helm's Deep takes place, marking a massive turning point in the war as free peoples stand together against overwhelming darkness." }
      ],
      note: "",
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
      description: "The #FINAL and climactic part of the legendary epic fantasy trilogy by J.R.R. Tolkien.",
      category: "Epic Fantasy",
      genres: ["Epic Fantasy", "Fantasy", "Adventure", "Classic Literature"],
      series: "The Lord of the Rings",
      part: 3,
      partLabel: "Part #3 — Final Part",
      previousPart: "the-two-towers",
      nextPart: null,
      addedAt: "2026-10-07",
      trending: true,
      readUrl: "",
      story: [
        { h: "The Journey's End", t: "Frodo and Sam reach the final stages of their harrowing journey across Mordor, guided by Gollum, facing immense physical and emotional exhaustion to finally cast the One Ring into Mount Doom." },
        { h: "The Great War", t: "Aragorn steps up to claim his rightful place as king, leading the remaining forces of men in a desperate, massive final battle at the Black Gate to distract Sauron's attention and buy time for the Hobbits." },
        { h: "The Resolution", t: "The Dark Lord Sauron is defeated once and for all as the ring is destroyed, restoring peace to Middle-earth and bringing the legendary saga to a heroic and emotional close." }
      ],
      note: "",
      previews: [
        "https://i.postimg.cc/Dw6ns6yk/Screenshot-2026-10-07-at-21-25-54.png",
        "https://i.postimg.cc/0jRLhK2S/Screenshot-2026-10-07-at-21-27-26.png",
        "https://i.postimg.cc/y8YwqHBy/Screenshot-2026-10-07-at-21-28-21.png"
      ]
    }
  ];
  /* ============================ END NOVEL DATA ============================ */
  
  /* Genre families shown in "Browse by Genre". Add a genre by adding its name to a list. */
  const GENRE_GROUPS = {
    "Romance": ["Romance", "Contemporary Romance", "Historical Romance", "Erotica"],
    "Fantasy": ["Fantasy", "Epic Fantasy", "Dark Fantasy", "Urban Fantasy", "Magical Realism"],
    "Sci-Fi": ["Science Fiction", "Dystopian", "Speculative Fiction"],
    "Mystery": ["Mystery", "Thriller", "Psychological Thriller", "Crime", "Crime Fiction", "Detective", "Suspense"],
    "Dark": ["Horror", "Gothic", "Paranormal", "Supernatural"],
    "Adventure": ["Adventure", "Action", "War", "Western"],
    "Literary": ["Literary Fiction", "Contemporary Fiction", "Classic Literature", "Historical Fiction", "Philosophical Fiction", "Political Fiction", "Religious Fiction", "Drama", "Comedy", "Satire"],
    "Young Readers": ["Young Adult", "New Adult", "Teen Fiction", "Coming of Age", "Middle Grade", "Children's Fiction"],
    "Life & Form": ["Family", "LGBTQ+", "Short Stories", "Novellas", "Biography / Autobiographical Fiction", "Memoir"]
  };
  
  /* ======================= LOGIC (no need to edit) ======================= */
  const DATA = (() => {
    const seen = new Set(), out = [];
    NOVELS.forEach(n => {
      if (!n || !n.id || !n.title) return console.warn("LorePDF: novel skipped (id and title required)", n);
      if (seen.has(n.id)) return console.warn("LorePDF: duplicate id skipped:", n.id);
      seen.add(n.id);
      const m = { author: "", cover: "", description: "", category: "Novel", series: "", part: null, partLabel: "", story: [], note: "", readUrl: "", trending: false, addedAt: "", previousPart: null, nextPart: null, ...n };
      m.genres = (n.genres && n.genres.length ? n.genres : [m.category]); m.previews = (n.previews || []).filter(Boolean);
      out.push(m);
    });
    out.forEach(n => ["previousPart", "nextPart"].forEach(k => { if (n[k] && !seen.has(n[k])) { console.warn(`LorePDF: ${n.id}.${k} unknown id`); n[k] = null; } }));
    return out;
  })();
  const $ = (s, r = document) => r.querySelector(s);
  const esc = s => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
  const byId = id => DATA.find(n => n.id === id);
  const href = n => `novel.html?id=${encodeURIComponent(n.id)}`;
  const img = (n, src, alt, eager, ph) => `<img src="${esc(src)}" alt="${esc(alt)}" data-ph="${esc(ph || alt)}" referrerpolicy="no-referrer" decoding="async" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'}>`;
  const cover = (n, eager) => `<div class="cov">${img(n, n.cover, n.title + " cover", eager, n.title)}</div>`;
  const hay = n => [n.title, n.author, n.series, n.category, ...n.genres].join(" ").toLowerCase();
  const uniq = f => [...new Set(DATA.map(f).flat().filter(x => x !== "" && x != null))];
  
  document.addEventListener("error", e => {
    const i = e.target;
    if (i.tagName !== "IMG" || i.dataset.failed || i.closest(".lb")) return;
    i.dataset.failed = 1; const s = document.createElement("span"); s.className = "ph"; s.textContent = i.dataset.ph || i.alt; i.replaceWith(s);
  }, true);
  
  /* ---------- Chrome ---------- */
  document.body.insertAdjacentHTML("afterbegin", `
  <header class="hdr"><div class="bar">
    <a class="logo" href="index.html">Lore<b>PDF</b></a>
    <nav class="nav" id="nav"><a href="index.html#latest">Latest</a><a href="index.html#trending">Trending</a><a href="index.html#library">Browse</a></nav>
    <button class="sbtn" id="sbtn" aria-label="Search"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg><span>Search</span></button>
    <button class="burger" id="burger" aria-label="Menu" aria-expanded="false"><i></i><i></i></button>
  </div><div class="bd" id="bd"></div></header>
  <div class="sov" id="sov" hidden role="dialog" aria-label="Search"><div class="sbox">
    <div class="srow"><input id="sin" type="search" enterkeyhint="search" placeholder="Title, author, genre or series" autocomplete="off" autocapitalize="off" spellcheck="false"><button class="x" id="sx" aria-label="Close search">✕</button></div>
    <div class="res" id="sres"></div></div></div>
  <div class="lb" id="lb" hidden role="dialog" aria-label="Preview"><button class="x lx" aria-label="Close preview">✕</button><div class="stage"><img alt=""></div><div class="lbar"><button class="x lp" aria-label="Previous image">‹</button><span class="lc"></span><button class="x ln" aria-label="Next image">›</button></div></div>`);
  document.body.insertAdjacentHTML("beforeend", `<footer class="ftr"><a class="logo" href="index.html">Lore<b>PDF</b></a><p>© ${new Date().getFullYear()} LorePDF</p></footer>`);
  const nav = $("#nav"), burger = $("#burger"), sov = $("#sov"), sin = $("#sin"), lb = $("#lb");
  const syncLock = () => document.body.classList.toggle("lock", !sov.hidden || !lb.hidden || nav.classList.contains("open"));
  const setMenu = o => { nav.classList.toggle("open", o); $("#bd").classList.toggle("on", o); burger.setAttribute("aria-expanded", o); syncLock(); };
  burger.onclick = e => { e.stopPropagation(); setMenu(!nav.classList.contains("open")); };
  nav.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("click", e => { if (nav.classList.contains("open") && !e.target.closest("#nav,#burger")) setMenu(false); });
  addEventListener("resize", () => { if (innerWidth >= 800) setMenu(false); });
  addEventListener("pageshow", () => { setMenu(false); closeS(); closeLb(); });
  
  /* Search overlay */
  function runS() {
    const w = sin.value.toLowerCase().split(/\s+/).filter(Boolean);
    const hits = DATA.filter(n => w.every(x => hay(n).includes(x)));
    $("#sres").innerHTML = hits.length ? hits.map(n => `<a class="row" href="${href(n)}">${cover(n, true)}<div><h3>${n.title}</h3><p>${n.author}</p><small>${n.series ? n.series + (n.partLabel ? " · " + n.partLabel : "") : n.genres.slice(0, 2).join(" · ")}</small></div></a>`).join("") : `<div class="empty"><h3>No novels found</h3><p>Try a title, author, genre or series.</p></div>`;
  }
  function openS() { setMenu(false); sov.hidden = false; syncLock(); sin.focus(); runS(); }
  function closeS() { if (sov.hidden) return; sov.hidden = true; sin.blur(); syncLock(); }
  $("#sbtn").onclick = openS; $("#sx").onclick = closeS; sin.oninput = runS;
  sov.addEventListener("click", e => { if (e.target === sov || e.target.classList.contains("sbox")) closeS(); });
  
  /* Lightbox */
  let lbList = [], lbI = 0, tx = 0;
  function showLb(i) {
    if (!lbList.length) return;
    lbI = (i + lbList.length) % lbList.length;
    const im = $("img", lb); im.referrerPolicy = "no-referrer"; im.alt = `Preview ${lbI + 1}`; im.src = lbList[lbI];
    $(".lc", lb).textContent = `${lbI + 1} / ${lbList.length}`; lb.hidden = false; syncLock();
  }
  function closeLb() { if (lb.hidden) return; lb.hidden = true; syncLock(); }
  $(".lx", lb).onclick = closeLb; $(".lp", lb).onclick = () => showLb(lbI - 1); $(".ln", lb).onclick = () => showLb(lbI + 1);
  lb.addEventListener("click", e => { if (e.target === lb || e.target.classList.contains("stage")) closeLb(); });
  lb.addEventListener("touchstart", e => { tx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", e => { const d = e.changedTouches[0].clientX - tx; if (Math.abs(d) > 50) showLb(lbI + (d < 0 ? 1 : -1)); }, { passive: true });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") { closeLb(); closeS(); setMenu(false); }
    if (!lb.hidden && e.key === "ArrowLeft") showLb(lbI - 1);
    if (!lb.hidden && e.key === "ArrowRight") showLb(lbI + 1);
  });
  
  /* Scroll strip with arrows + gentle auto-advance (optional) */
  function strip(track, box, auto) {
    if (!track || !box) return;
    const btns = [...box.querySelectorAll(".arr")];
    const step = () => { const c = track.firstElementChild; return c ? c.getBoundingClientRect().width + (parseFloat(getComputedStyle(track).columnGap) || 0) : 0; };
    const over = () => track.scrollWidth > track.clientWidth + 4, end = () => track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    const sync = () => { box.hidden = !over(); if (btns[0]) { btns[0].disabled = track.scrollLeft < 4; btns[1].disabled = end(); } };
    let until = 0, busy = false;
    const hold = ms => { until = Date.now() + ms; };
    btns.forEach(b => b.onclick = () => { hold(6000); track.scrollBy({ left: b.dataset.dir * step(), behavior: "smooth" }); });
    track.addEventListener("touchstart", () => { busy = true; }, { passive: true });
    ["touchend", "touchcancel"].forEach(t => track.addEventListener(t, () => { busy = false; hold(4500); }, { passive: true }));
    track.addEventListener("mouseenter", () => busy = true); track.addEventListener("mouseleave", () => { busy = false; hold(1500); });
    track.addEventListener("wheel", () => hold(4500), { passive: true });
    track.addEventListener("scroll", sync, { passive: true }); addEventListener("resize", sync); sync();
    if (auto && !matchMedia("(prefers-reduced-motion: reduce)").matches) setInterval(() => {
      if (busy || document.hidden || Date.now() < until || !over()) return;
      track.scrollTo({ left: end() ? 0 : track.scrollLeft + step(), behavior: "smooth" });
    }, 4500);
  }
  
  /* ---------- Home ---------- */
  function home() {
    const empty = !DATA.length;
    if (empty) { $("main").innerHTML = `<div class="empty pad"><h3>No novels yet</h3></div>`; return; }
    const latest = DATA.filter(n => n.addedAt).sort((a, b) => b.addedAt.localeCompare(a.addedAt)).slice(0, 12);
    if (latest.length) {
      $("#latest-track").innerHTML = latest.map((n, i) => `<a class="bk" style="--i:${i}" href="${href(n)}">${cover(n, i < 4)}<h3>${n.title}</h3><p>${n.author}</p></a>`).join("");
      strip($("#latest-track"), $("#latest .arrows"), true);
    } else $("#latest").hidden = true;
    const tr = DATA.filter(n => n.trending);
    if (tr.length) $("#ranks").innerHTML = tr.map((n, i) => `<a class="rank" href="${href(n)}"><span class="num">${i + 1}</span>${cover(n)}<div><h3>${n.title}</h3><p>${n.author}</p><small>${n.genres.slice(0, 2).join(" · ")}</small></div></a>`).join(""); else $("#trending").hidden = true;
    const series = uniq(n => n.series).map(s => ({ s, items: DATA.filter(n => n.series === s).sort((a, b) => (a.part || 0) - (b.part || 0)) })).sort((a, b) => b.items.length - a.items.length);
    if (series.length) $("#sgrid").innerHTML = series.map(x => `<button class="scard" data-s="${esc(x.s)}"><span class="fan">${x.items.slice(0, 3).map((n, i) => `<span class="fc" style="--k:${i}">${cover(n)}</span>`).join("")}</span><span class="st"><h3>${x.s}</h3><p>${x.items.length} ${x.items.length === 1 ? "part" : "parts"} · ${x.items[0].author}</p></span></button>`).join(""); else $("#series").hidden = true;
  
    /* Library state + filters */
    const st = { q: "", genre: "", author: "", series: "", part: "" };
    const fill = (id, label, vals) => { $(id).innerHTML = `<option value="">${label}</option>` + vals.map(v => `<option value="${esc(v)}">${id === "#lp" ? "Part " + v : v}</option>`).join(""); };
    fill("#lg", "All genres", Object.values(GENRE_GROUPS).flat()); fill("#la", "All authors", uniq(n => n.author).sort());
    fill("#ls", "All series", uniq(n => n.series).sort()); fill("#lp", "Any part", uniq(n => n.part).sort((a, b) => a - b));
    const map = { "#lq": "q", "#lg": "genre", "#la": "author", "#ls": "series", "#lp": "part" };
    const draw = () => {
      Object.entries(map).forEach(([id, k]) => { if ($(id).value !== String(st[k])) $(id).value = st[k]; });
      const w = st.q.toLowerCase().split(/\s+/).filter(Boolean);
      const hits = DATA.filter(n => w.every(x => hay(n).includes(x)) && (!st.genre || n.genres.includes(st.genre)) && (!st.author || n.author === st.author) && (!st.series || n.series === st.series) && (!st.part || String(n.part) === st.part));
      $("#count").textContent = `${hits.length} ${hits.length === 1 ? "novel" : "novels"}`;
      $("#lib").innerHTML = hits.length ? hits.map(n => `<a class="card" href="${href(n)}">${cover(n)}<h3>${n.title}</h3><p>${n.author}</p><small>${n.partLabel || n.category}</small></a>`).join("") : `<div class="empty"><h3>Nothing matches yet</h3><p>Try fewer filters or a different word.</p><button class="btn sm" data-reset>Clear filters</button></div>`;
    };
    const toLib = () => $("#library").scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    Object.entries(map).forEach(([id, k]) => $(id).addEventListener(k === "q" ? "input" : "change", e => { st[k] = e.target.value; draw(); }));
    const reset = () => { Object.keys(st).forEach(k => st[k] = ""); draw(); };
    $("#reset").onclick = reset; $("#lib").addEventListener("click", e => { if (e.target.closest("[data-reset]")) reset(); });
    $("#sgrid").addEventListener("click", e => { const b = e.target.closest(".scard"); if (b) { reset(); st.series = b.dataset.s; draw(); toLib(); } });
  
    draw();
    const p = new URLSearchParams(location.search);
    ["genre", "series", "author", "part"].forEach(k => { if (p.get(k)) st[k] = p.get(k); }); if (p.get("q")) st.q = p.get("q");
    if ([...p.keys()].length) { draw(); }
  }
  
  /* ---------- Novel page ---------- */
  function novelPage() {
    const root = $("#novel"), n = byId(new URLSearchParams(location.search).get("id"));
    if (!n) { document.title = "LorePDF — Not found"; root.innerHTML = `<div class="empty pad"><h3>Novel not found</h3><p><a class="btn" href="index.html">Browse novels</a></p></div>`; return; }
    document.title = `${n.title} — LorePDF`; lbList = n.previews;
    const pn = (m, label) => m ? `<a class="pn" href="${href(m)}">${cover(m)}<span><small>${label}</small><b>${m.title}</b></span></a>` : "";
    const prev = n.previousPart && byId(n.previousPart), next = n.nextPart && byId(n.nextPart);
    root.innerHTML = `
    <section class="nhero" style="--u:url(${esc(n.cover)})"><div class="wrap np">
      <div class="npc">${cover(n, true)}</div>
      <div class="npi">
        ${n.series ? `<p class="ser">${n.series}${n.partLabel ? " — " + n.partLabel : ""}</p>` : ""}
        <h1>${n.title}</h1><p class="by">by ${n.author}</p>
        <div class="gl">${n.genres.map(g => `<a href="index.html?genre=${encodeURIComponent(g)}#library">${g}</a>`).join("")}</div>
        ${n.description ? `<p class="desc">${n.title}, ${n.description}</p>` : ""}
        <a class="btn" href="${n.readUrl ? esc(n.readUrl) : "#previews"}"${n.readUrl ? ' target="_blank" rel="noopener"' : ""}>Read Now</a>
        ${prev || next ? `<div class="pns">${pn(prev, "Previous Part")}${pn(next, "Next Part")}</div>` : ""}
      </div></div></section>
    ${n.previews.length ? `<section class="wrap sec" id="previews"><div class="sh"><h2>Preview</h2><div class="arrows"><button class="arr" data-dir="-1" aria-label="Previous">‹</button><button class="arr" data-dir="1" aria-label="Next">›</button></div></div><div class="track pv" id="pv">${n.previews.map((p, i) => `<button class="slide" data-i="${i}" style="--u:url(${esc(p)})" aria-label="Open preview ${i + 1}">${img(n, p, `${n.title} preview ${i + 1}`, true, "Preview unavailable")}</button>`).join("")}</div></section>` : ""}
    ${n.story.length || n.note ? `<section class="wrap sec story">${n.story.map(s => `<div><h3>${s.h}</h3><p>${s.t}</p></div>`).join("")}${n.note ? `<p class="note">${n.note}</p>` : ""}</section>` : ""}`;
    root.querySelectorAll(".slide").forEach(b => b.onclick = () => showLb(+b.dataset.i));
    strip($("#pv"), $("#previews .arrows"), false);
  }
  
  try { document.body.dataset.page === "home" ? home() : novelPage(); }
  catch (err) { console.error(err); const m = $("main"); if (m) m.innerHTML = `<div class="empty pad"><h3>Something went wrong</h3><p><a class="btn" href="index.html">Back to LorePDF</a></p></div>`; }