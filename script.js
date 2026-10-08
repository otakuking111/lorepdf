/* ==========================================================================
   NOVEL DATA — ADD NEW NOVELS HERE
   Copy one object, change the fields, add it to the array. That's all.
   - id: unique, used in the URL (novel.html?id=...)
   - previousPart / nextPart: the id of the neighbouring part, or null
   - prequel (optional): { id, text } — shows a small clickable note above Preview linking to another novel
   - addedAt: "YYYY-MM-DD" — newest dates appear first in Latest Additions
   - genres: any names from GENRE_GROUPS below (category = main genre label)
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
      prequel: { id: "the-hobbit", text: "The Hobbit takes place earlier in the story." },
      addedAt: "2026-10-07",
      readUrl: "https://salmane.freedev.app/?/c97c3c9",
      story: [
        { h: "Starting Plot", t: "The story begins in the peaceful Shire, where a young Hobbit named Frodo Baggins inherits a mysterious ancient ring, only to discover it is the dangerous \"One Ring\" forged by the Dark Lord Sauron." },
        { h: "Main Quest", t: "Frodo must embark on a perilous journey to destroy the ring in the fires of Mount Doom where it was created, in order to save the world of Middle-earth from ultimate darkness and destruction." },
        { h: "The Fellowship", t: "Frodo is joined by a diverse group known as \"The Fellowship,\" consisting of men, elves, dwarves, and the wise wizard Gandalf, to help him face the forces of evil." }
      ],
      note: "(This part is considered the cornerstone of one of the greatest and most famous fantasy series in the history of literature and cinema.)",
      previews: [
        "https://i.pinimg.com/1200x/fc/b7/91/fcb7917fa40a33616c27079034635001.jpg",
        "https://i.pinimg.com/1200x/e6/4a/ba/e64aba1d1b7ded4e4f379aad096b2d03.jpg",
        "https://i.pinimg.com/1200x/e9/82/25/e98225a2993b96ff53f6d1cbff3ef5b4.jpg"
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
      readUrl: "https://salmane.freedev.app/?/6b18981",
      story: [
        { h: "Starting Plot", t: "The Fellowship is broken after a fierce battle; Frodo and Sam continue their journey to Mount Doom alone, while unknowingly tracked by the creature Gollum." },
        { h: "Main Conflict", t: "The remaining members of the broken fellowship (Aragorn, Legolas, and Gimli) travel across Middle-earth to help the kingdoms of men unite and fight against the massive armies of the Dark Lord Sauron and the traitorous wizard Saruman." },
        { h: "Climax", t: "The heroic defense of Helm's Deep takes place, marking a massive turning point in the war as free peoples stand together against overwhelming darkness." }
      ],
      note: "",
      previews: [
        "https://i.pinimg.com/1200x/ed/93/a1/ed93a180f49f1dd43515ffeba36ed521.jpg",
        "https://i.pinimg.com/1200x/92/d5/1d/92d51d071d53d70a17620fa635e94c3e.jpg",
        "https://i.pinimg.com/1200x/93/d8/d3/93d8d3bdf013c124b5dc0add3560a353.jpg"
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
      readUrl: "https://salmane.freedev.app/?/ec0a6c2",
      story: [
        { h: "The Journey's End", t: "Frodo and Sam reach the final stages of their harrowing journey across Mordor, guided by Gollum, facing immense physical and emotional exhaustion to finally cast the One Ring into Mount Doom." },
        { h: "The Great War", t: "Aragorn steps up to claim his rightful place as king, leading the remaining forces of men in a desperate, massive final battle at the Black Gate to distract Sauron's attention and buy time for the Hobbits." },
        { h: "The Resolution", t: "The Dark Lord Sauron is defeated once and for all as the ring is destroyed, restoring peace to Middle-earth and bringing the legendary saga to a heroic and emotional close." }
      ],
      note: "",
      previews: [
        "https://i.pinimg.com/1200x/67/b2/c8/67b2c8a2075c32add6cabe43a2ba8f55.jpg",
        "https://i.pinimg.com/1200x/bc/8c/0f/bc8c0fb9fd63b092b6bf8db9180251c4.jpg",
        "https://i.pinimg.com/1200x/04/4c/a8/044ca80456855ef6e20d6d8de48d7f00.jpg"
      ]
    },
    {
      id: "the-hobbit",
      title: "The Hobbit, or There and Back Again",
      author: "J.R.R. Tolkien",
      cover: "https://i.pinimg.com/1200x/46/1b/e8/461be8714cfb9eca8fa58c5572ea8a59.jpg",
      description: "Bilbo Baggins is a comfort-loving Hobbit whose peaceful life changes when the wizard Gandalf and thirteen dwarves led by Thorin Oakenshield invite him on an unexpected adventure. Their mission is to reclaim the Lonely Mountain and its lost treasure from the dragon Smaug. Along the way, Bilbo faces trolls, goblins, giant spiders, and other dangers. Deep within the Misty Mountains, he encounters Gollum and discovers a mysterious ring that will later play a major role in the fate of Middle-earth.",
      plainDesc: true, /* show the description as written (no "Title, " prefix) */
      category: "Fantasy",
      genres: ["Fantasy", "Adventure", "Classics", "Epic Fantasy"],
      series: "",   /* standalone prequel: not part of The Lord of the Rings series list */
      part: null,
      partLabel: "",
      previousPart: null,
      nextPart: "fellowship-of-the-ring",
      addedAt: "2026-10-08",
      readUrl: "", /* add the Read Now link here when ready */
      story: [],
      note: "",
      previews: [
        "https://i.pinimg.com/1200x/c0/9c/71/c09c7123de7110cad5facbc45a1b0437.jpg",
        "https://i.pinimg.com/1200x/77/bf/47/77bf479d6df0e50ded396f4906c78aa3.jpg",
        "https://i.pinimg.com/1200x/06/08/e5/0608e5b395c4fb816f3b990de05ba6dc.jpg"
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
      const m = { author: "", cover: "", description: "", category: "Novel", series: "", part: null, partLabel: "", story: [], note: "", readUrl: "", addedAt: "", previousPart: null, nextPart: null, prequel: null, ...n };
      m.genres = (n.genres && n.genres.length ? n.genres : [m.category]); m.previews = (n.previews || []).filter(Boolean);
      out.push(m);
    });
    out.forEach(n => ["previousPart", "nextPart"].forEach(k => { if (n[k] && !seen.has(n[k])) { console.warn(`LorePDF: ${n.id}.${k} unknown id`); n[k] = null; } }));
    out.forEach(n => { if (n.prequel && !seen.has(n.prequel.id)) { console.warn(`LorePDF: ${n.id}.prequel unknown id`); n.prequel = null; } });
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
  
  /* Image fallbacks. Preview images get a retry ladder before any placeholder is shown:
     1) retry with the browser's default referrer (some hosts reject requests with no referrer)
     2) retry through an image CDN proxy (avoids host-side hotlink rules)
     The "unavailable" placeholder appears only after both retries have failed. */
  const proxied = u => "https://wsrv.nl/?url=" + encodeURIComponent(u.replace(/^https?:\/\//, ""));
  document.addEventListener("error", e => {
    const i = e.target;
    if (i.tagName !== "IMG" || i.dataset.failed || i.closest(".lb")) return;
    if (i.closest(".slide")) {
      const orig = i.dataset.orig || (i.dataset.orig = i.getAttribute("src")), t = +i.dataset.try || 0;
      if (t === 0) { i.dataset.try = 1; i.removeAttribute("loading"); i.referrerPolicy = "strict-origin-when-cross-origin"; i.src = orig; return; }
      if (t === 1) { i.dataset.try = 2; i.referrerPolicy = "no-referrer"; i.src = proxied(orig); return; }
    }
    i.dataset.failed = 1; const s = document.createElement("span"); s.className = "ph"; s.textContent = i.dataset.ph || i.alt; i.replaceWith(s);
  }, true);
  /* Lightbox uses whichever address actually loaded for each preview. */
  document.addEventListener("load", e => { const i = e.target, s = i.tagName === "IMG" && i.closest(".slide"); if (s && i.dataset.try) lbList[+s.dataset.i] = i.currentSrc || i.src; }, true);
  
  /* ---------- Chrome ---------- */
  document.body.insertAdjacentHTML("afterbegin", `
  <header class="hdr"><div class="bar">
    <a class="logo" href="index.html">Lore<b>PDF</b></a>
    <nav class="nav" id="nav"><a href="series.html">Series</a><a href="index.html#latest">Latest</a><a href="library.html">Library</a></nav>
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
  
  /* ---------- Series helpers ---------- */
  const seriesList = () => uniq(n => n.series).map(x => ({ s: x, items: DATA.filter(n => n.series === x).sort((a, b) => (a.part || 0) - (b.part || 0)) })).sort((a, b) => b.items.length - a.items.length || a.s.localeCompare(b.s));
  const firstPart = x => x.items.find(n => n.part === 1) || x.items.find(n => n.part != null) || x.items[0];
  const fan = items => `<span class="fan">${items.slice(0, 3).map((n, i) => `<span class="fc" style="--k:${i}">${cover(n)}</span>`).join("")}</span>`;
  const scard = (x, link) => `<a class="scard" href="${link}">${fan(x.items)}<span class="st"><h3>${x.s}</h3><p>${x.items.length} ${x.items.length === 1 ? "part" : "parts"} · ${x.items[0].author}</p></span></a>`;
  const emptyMsg = (t, p) => `<div class="empty"><h3>${t}</h3><p>${p}</p></div>`;
  
  /* ---------- Home ---------- */
  function home() {
    if (!DATA.length) { $("main").innerHTML = `<div class="empty pad"><h3>No novels yet</h3></div>`; return; }
    const sl = seriesList();
    if (sl.length) { $("#sgrid").innerHTML = sl.map(x => scard(x, "series.html")).join(""); strip($("#sgrid"), $("#series .arrows"), true); } else $("#series").hidden = true;
    const bk = (n, i, eager) => `<a class="bk" style="--i:${i}" href="${href(n)}">${cover(n, eager)}<h3>${n.title}</h3><p>${n.author}</p></a>`;
    const latest = DATA.filter(n => n.addedAt).sort((a, b) => b.addedAt.localeCompare(a.addedAt)).slice(0, 3);
    if (latest.length) $("#latest-track").innerHTML = latest.map((n, i) => bk(n, i, true)).join(""); else $("#latest").hidden = true;
    $("#lib-track").innerHTML = DATA.slice(0, 12).map((n, i) => bk(n, i, false)).join("");
  }
  
  /* ---------- Popular Series page ---------- */
  function seriesPage() {
    const all = seriesList(), input = $("#qs");
    const draw = () => {
      const w = input.value.toLowerCase().split(/\s+/).filter(Boolean);
      const hits = all.filter(x => w.every(t => x.s.toLowerCase().includes(t)));
      $("#count").textContent = `${hits.length} series`;
      $("#sgrid").innerHTML = hits.length ? hits.map(x => scard(x, href(firstPart(x)))).join("") : emptyMsg("No series found", "Try a different name.");
    };
    input.value = new URLSearchParams(location.search).get("q") || "";
    input.oninput = draw; draw();
  }
  
  /* ---------- Library page ---------- */
  function libraryPage() {
    const st = { q: "", genre: "", author: "", series: "", part: "" }, PAGE = 24; let shown = PAGE;
    const fill = (id, label, vals) => { $(id).innerHTML = `<option value="">${label}</option>` + vals.map(v => `<option value="${esc(v)}">${id === "#lp" ? "Part " + v : v}</option>`).join(""); };
    fill("#lg", "All genres", [...new Set([...Object.values(GENRE_GROUPS).flat(), ...uniq(n => n.genres)])]); fill("#la", "All authors", uniq(n => n.author).sort());
    fill("#ls", "All series", uniq(n => n.series).sort()); fill("#lp", "Any part", uniq(n => n.part).sort((a, b) => a - b));
    const map = { "#lq": "q", "#lg": "genre", "#la": "author", "#ls": "series", "#lp": "part" };
    const draw = () => {
      Object.entries(map).forEach(([id, k]) => { if ($(id).value !== String(st[k])) $(id).value = st[k]; });
      const w = st.q.toLowerCase().split(/\s+/).filter(Boolean);
      const hits = DATA.filter(n => w.every(x => hay(n).includes(x)) && (!st.genre || n.genres.includes(st.genre)) && (!st.author || n.author === st.author) && (!st.series || n.series === st.series) && (!st.part || String(n.part) === st.part));
      $("#count").textContent = `${hits.length} ${hits.length === 1 ? "novel" : "novels"}`;
      $("#lib").innerHTML = hits.length ? hits.slice(0, shown).map(n => `<a class="card" href="${href(n)}">${cover(n)}<h3>${n.title}</h3><p>${n.author}</p><small>${n.partLabel || n.category}</small></a>`).join("") : `<div class="empty"><h3>Nothing matches yet</h3><p>Try fewer filters or a different word.</p><button class="btn sm" data-reset>Clear filters</button></div>`;
      $("#more").hidden = hits.length <= shown;
    };
    Object.entries(map).forEach(([id, k]) => $(id).addEventListener(k === "q" ? "input" : "change", e => { st[k] = e.target.value; shown = PAGE; draw(); }));
    const reset = () => { Object.keys(st).forEach(k => st[k] = ""); shown = PAGE; draw(); };
    $("#reset").onclick = reset; $("#lib").addEventListener("click", e => { if (e.target.closest("[data-reset]")) reset(); });
    $("#more").onclick = () => { shown += PAGE; draw(); };
    const p = new URLSearchParams(location.search);
    ["q", "genre", "series", "author", "part"].forEach(k => { if (p.get(k)) st[k] = p.get(k); });
    draw();
  }
  
  /* ---------- Novel page ---------- */
  function novelPage() {
    const root = $("#novel"), n = byId(new URLSearchParams(location.search).get("id"));
    if (!n) { document.title = "LorePDF — Not found"; root.innerHTML = `<div class="empty pad"><h3>Novel not found</h3><p><a class="btn" href="index.html">Browse novels</a></p></div>`; return; }
    document.title = `${n.title} — LorePDF`; lbList = [...n.previews];
    const pn = (m, label) => m ? `<a class="pn" href="${href(m)}">${cover(m)}<span><small>${label}</small><b>${m.title}</b></span></a>` : "";
    const prev = n.previousPart && byId(n.previousPart), next = n.nextPart && byId(n.nextPart);
    const pre = n.prequel && byId(n.prequel.id);
    root.innerHTML = `
    <section class="nhero" style="--u:url(${esc(n.cover)})"><div class="wrap np">
      <div class="npc">${cover(n, true)}</div>
      <div class="npi">
        ${n.series ? `<p class="ser">${n.series}${n.partLabel ? " — " + n.partLabel : ""}</p>` : ""}
        <h1>${n.title}</h1><p class="by">by ${n.author}</p>
        <div class="gl">${n.genres.map(g => `<a href="library.html?genre=${encodeURIComponent(g)}#library">${g}</a>`).join("")}</div>
        ${n.description ? `<p class="desc">${n.plainDesc ? "" : n.title + ", "}${n.description}</p>` : ""}
        <a class="btn" href="${n.readUrl ? esc(n.readUrl) : "#previews"}"${n.readUrl ? ' target="_blank" rel="noopener"' : ""}>Read Now</a>
        ${prev || next ? `<div class="pns">${pn(prev, "Previous Part")}${pn(next, "Next Part")}</div>` : ""}
      </div></div></section>
    ${pre && n.previews.length ? `<div class="wrap prew"><a class="pre" href="${href(pre)}">${cover(pre)}<span><b>Before this series:</b> ${n.prequel.text} <b>Read it here →</b></span></a></div>` : ""}${n.previews.length ? `<section class="wrap sec" id="previews"><div class="sh"><h2>Preview</h2><div class="arrows"><button class="arr" data-dir="-1" aria-label="Previous">‹</button><button class="arr" data-dir="1" aria-label="Next">›</button></div></div><div class="track pv" id="pv">${n.previews.map((p, i) => `<button class="slide" data-i="${i}" style="--u:url(${esc(p)})" aria-label="Open preview ${i + 1}">${img(n, p, `${n.title} preview ${i + 1}`, true, "Preview unavailable")}</button>`).join("")}</div></section>` : ""}
    ${n.story.length || n.note ? `<section class="wrap sec story">${n.story.map(s => `<div><h3>${s.h}</h3><p>${s.t}</p></div>`).join("")}${n.note ? `<p class="note">${n.note}</p>` : ""}</section>` : ""}`;
    root.querySelectorAll(".slide").forEach(b => b.onclick = () => showLb(+b.dataset.i));
    strip($("#pv"), $("#previews .arrows"), false);
  }
  
  document.querySelectorAll(".back").forEach(a => a.addEventListener("click", e => { if (history.length > 1 && document.referrer.startsWith(location.origin)) { e.preventDefault(); history.back(); } }));
  try { ({ home, series: seriesPage, library: libraryPage }[document.body.dataset.page] || novelPage)(); }
  catch (err) { console.error(err); const m = $("main"); if (m) m.innerHTML = `<div class="empty pad"><h3>Something went wrong</h3><p><a class="btn" href="index.html">Back to LorePDF</a></p></div>`; }