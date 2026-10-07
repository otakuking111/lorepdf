/* ==========================================================================
   NOVEL DATA — ADD NEW NOVELS HERE
   Copy one object, change the fields, add it to the array. That's all.
   - id: unique, used in the URL (novel.html?id=...)
   - previousPart / nextPart: the id of the neighbouring part, or null
   - addedAt: "YYYY-MM-DD" — newest dates appear first in Latest Additions
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
  
  /* ======================= LOGIC (no need to edit) ======================= */
  /* Validate data: skip invalid/duplicate novels, drop broken part links. */
  const DATA = (() => {
    const seen = new Set(), out = [];
    NOVELS.forEach(n => {
      if (!n || !n.id || !n.title) return console.warn("LorePDF: novel skipped (id and title required)", n);
      if (seen.has(n.id)) return console.warn("LorePDF: duplicate id skipped:", n.id);
      seen.add(n.id);
      out.push({ author: "", cover: "", description: "", category: "Novel", series: "", partLabel: "", story: [], note: "", readUrl: "", trending: false, addedAt: "", previousPart: null, nextPart: null, ...n, previews: (n.previews || []).filter(Boolean) });
    });
    out.forEach(n => ["previousPart", "nextPart"].forEach(k => {
      if (n[k] && !seen.has(n[k])) { console.warn(`LorePDF: ${n.id}.${k} points to unknown id "${n[k]}"`); n[k] = null; }
    }));
    return out;
  })();
  
  const $ = (s, r = document) => r.querySelector(s);
  const byId = id => DATA.find(n => n.id === id);
  const href = n => `novel.html?id=${encodeURIComponent(n.id)}`;
  const img = (src, alt, eager, ph) => `<img src="${src}" alt="${alt}" data-ph="${ph || alt}" referrerpolicy="no-referrer" decoding="async" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'}>`;
  const card = (n, eager) => `<a class="card" href="${href(n)}"><div class="cov">${img(n.cover, n.title + " cover", eager, n.title)}</div><div class="meta"><span class="tag">${n.category}</span><h3>${n.title}</h3><p>${n.author}</p>${n.partLabel ? `<small>${n.partLabel}</small>` : ""}</div></a>`;
  
  /* Broken images degrade to a text placeholder; loaded previews adopt their real ratio. */
  document.addEventListener("error", e => {
    const i = e.target;
    if (i.tagName !== "IMG" || i.dataset.failed || i.closest(".lb")) return;
    i.dataset.failed = 1;
    const s = document.createElement("span"); s.className = "ph"; s.textContent = i.dataset.ph || i.alt;
    i.replaceWith(s);
  }, true);
  document.addEventListener("load", e => {
    const i = e.target, g = i.tagName === "IMG" && i.closest(".gi");
    if (g && i.naturalWidth) g.style.aspectRatio = Math.min(2.2, Math.max(.6, i.naturalWidth / i.naturalHeight));
  }, true);
  
  /* ---------- Shared chrome ---------- */
  document.body.insertAdjacentHTML("afterbegin", `
  <header class="hdr"><div class="bar">
    <a class="logo" href="index.html">Lore<span>PDF</span></a>
    <nav class="nav" id="nav"><a href="index.html">Home</a><a href="index.html#rec-sec">Latest Additions</a><a href="index.html#trend-sec">Trending</a><a href="index.html#library">Library</a></nav>
    <button class="ibtn" id="sbtn" aria-label="Search"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg></button>
    <button class="ibtn burger" id="burger" aria-label="Menu" aria-expanded="false"><i></i><i></i><i></i></button>
  </div><div class="bd" id="bd"></div></header>
  <div class="sov" id="sov" hidden role="dialog" aria-label="Search"><div class="sbox">
    <div class="srow"><input id="sin" type="search" enterkeyhint="search" placeholder="Title, author, genre or series" autocomplete="off" autocapitalize="off" spellcheck="false"><button class="ibtn" id="sx" aria-label="Close search">✕</button></div>
    <div class="grid" id="sres"></div>
  </div></div>`);
  document.body.insertAdjacentHTML("beforeend", `<footer class="ftr"><a class="logo" href="index.html">Lore<span>PDF</span></a><p>© ${new Date().getFullYear()} LorePDF</p></footer>`);
  
  const nav = $("#nav"), burger = $("#burger"), sov = $("#sov"), sin = $("#sin"), sres = $("#sres");
  const lb = document.createElement("div");
  lb.className = "lb"; lb.hidden = true; lb.setAttribute("role", "dialog");
  lb.innerHTML = `<button class="ibtn lx" aria-label="Close preview">✕</button><div class="stage"><img alt=""></div><div class="lbar"><button class="ibtn lp" aria-label="Previous image">‹</button><span class="lc"></span><button class="ibtn ln" aria-label="Next image">›</button></div>`;
  document.body.appendChild(lb);
  const syncLock = () => document.body.classList.toggle("lock", !sov.hidden || !lb.hidden || nav.classList.contains("open"));
  
  /* Menu */
  const setMenu = o => { nav.classList.toggle("open", o); $("#bd").classList.toggle("on", o); burger.setAttribute("aria-expanded", o); syncLock(); };
  burger.onclick = e => { e.stopPropagation(); setMenu(!nav.classList.contains("open")); };
  nav.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("click", e => { if (nav.classList.contains("open") && !e.target.closest("#nav,#burger")) setMenu(false); });
  addEventListener("resize", () => { if (innerWidth >= 760) setMenu(false); });
  addEventListener("pageshow", () => { setMenu(false); closeS(); closeLb(); });
  
  /* Search */
  function runS() {
    const words = sin.value.toLowerCase().split(/\s+/).filter(Boolean);
    const hits = DATA.filter(n => { const hay = [n.title, n.author, n.category, n.series].join(" ").toLowerCase(); return words.every(w => hay.includes(w)); });
    sres.innerHTML = hits.length ? hits.map(n => card(n, true)).join("") : `<div class="empty"><h3>No novels found</h3><p>Try a title, author, genre or series.</p></div>`;
  }
  function openS() { setMenu(false); sov.hidden = false; syncLock(); sin.focus(); runS(); }
  function closeS() { if (sov.hidden) return; sov.hidden = true; sin.blur(); syncLock(); }
  $("#sbtn").onclick = openS; $("#sx").onclick = closeS; sin.oninput = runS;
  sov.addEventListener("click", e => { if (e.target === sov || e.target.classList.contains("sbox")) closeS(); });
  sin.addEventListener("keydown", e => { if (e.key === "Enter") sin.blur(); });
  
  /* Lightbox */
  let lbList = [], lbI = 0, tx = 0;
  function showLb(i) {
    if (!lbList.length) return;
    lbI = (i + lbList.length) % lbList.length;
    const im = $("img", lb); im.alt = `Preview ${lbI + 1}`; im.src = lbList[lbI];
    $(".lc", lb).textContent = `${lbI + 1} / ${lbList.length}`;
    lb.hidden = false; syncLock();
  }
  function closeLb() { if (lb.hidden) return; lb.hidden = true; syncLock(); }
  $(".lx", lb).onclick = closeLb; $(".lp", lb).onclick = () => showLb(lbI - 1); $(".ln", lb).onclick = () => showLb(lbI + 1);
  $("img", lb).referrerPolicy = "no-referrer";
  lb.addEventListener("click", e => { if (e.target === lb || e.target.classList.contains("stage")) closeLb(); });
  lb.addEventListener("touchstart", e => { tx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", e => { const d = e.changedTouches[0].clientX - tx; if (Math.abs(d) > 50) showLb(lbI + (d < 0 ? 1 : -1)); }, { passive: true });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") { closeLb(); closeS(); setMenu(false); }
    if (!lb.hidden && e.key === "ArrowLeft") showLb(lbI - 1);
    if (!lb.hidden && e.key === "ArrowRight") showLb(lbI + 1);
  });
  
  /* ---------- Home ---------- */
  function carousel(track) {
    const gap = () => parseFloat(getComputedStyle(track).columnGap) || 0;
    const step = () => (track.firstElementChild ? track.firstElementChild.getBoundingClientRect().width + gap() : 0);
    const arrows = [...document.querySelectorAll(".arr")];
    const overflow = () => track.scrollWidth > track.clientWidth + 4;
    const atEnd = () => track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    const sync = () => {
      $(".arrows").hidden = !overflow();
      arrows[0].disabled = track.scrollLeft < 4; arrows[1].disabled = atEnd();
    };
    let until = 0, touching = false, hover = false;
    const hold = ms => { until = Date.now() + ms; };
    arrows.forEach(b => b.onclick = () => { hold(6000); track.scrollBy({ left: b.dataset.dir * step(), behavior: "smooth" }); });
    track.addEventListener("touchstart", () => { touching = true; }, { passive: true });
    ["touchend", "touchcancel"].forEach(t => track.addEventListener(t, () => { touching = false; hold(4500); }, { passive: true }));
    track.addEventListener("mouseenter", () => hover = true); track.addEventListener("mouseleave", () => { hover = false; hold(1500); });
    track.addEventListener("wheel", () => hold(4500), { passive: true });
    track.addEventListener("focusin", () => hold(6000));
    track.addEventListener("scroll", sync, { passive: true }); addEventListener("resize", sync); sync();
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setInterval(() => {
      if (touching || hover || document.hidden || Date.now() < until || !overflow()) return;
      track.scrollTo({ left: atEnd() ? 0 : track.scrollLeft + step(), behavior: "smooth" });
    }, 4500);
  }
  function home() {
    const latest = DATA.filter(n => n.addedAt).sort((a, b) => b.addedAt.localeCompare(a.addedAt)).slice(0, 10);
    const tr = DATA.filter(n => n.trending);
    const track = $("#rec");
    if (!DATA.length) { $("main").innerHTML = `<div class="empty pad"><h3>No novels yet</h3></div>`; return; }
    if (latest.length) { track.innerHTML = latest.map((n, i) => card(n, i < 3)).join(""); carousel(track); } else $("#rec-sec").hidden = true;
    if (tr.length) $("#trend").innerHTML = tr.map(n => card(n, false)).join(""); else $("#trend-sec").hidden = true;
    const cats = ["All", ...new Set(DATA.map(n => n.category))];
    const lib = $("#lib"), chips = $("#chips");
    const draw = c => {
      chips.innerHTML = cats.map(x => `<button class="chip${x === c ? " on" : ""}" data-c="${x}">${x}</button>`).join("");
      lib.innerHTML = DATA.filter(n => c === "All" || n.category === c).map(n => card(n, false)).join("");
    };
    chips.onclick = e => { const b = e.target.closest(".chip"); if (b) draw(b.dataset.c); };
    draw("All");
  }
  
  /* ---------- Novel page ---------- */
  function novelPage() {
    const n = byId(new URLSearchParams(location.search).get("id"));
    const root = $("#novel");
    if (!n) { document.title = "LorePDF — Not found"; root.innerHTML = `<div class="empty pad"><h3>Novel not found</h3><p><a class="btn" href="index.html">Browse novels</a></p></div>`; return; }
    document.title = `${n.title} — LorePDF`;
    lbList = n.previews;
    const prev = n.previousPart && byId(n.previousPart), next = n.nextPart && byId(n.nextPart);
    const parts = (prev ? `<a class="btn ghost" href="${href(prev)}">Previous Part</a>` : "") + (next ? `<a class="btn ghost" href="${href(next)}">Next Part</a>` : "");
    root.innerHTML = `
    <article class="np">
      <div class="npc cov">${img(n.cover, n.title + " cover", true, n.title)}</div>
      <div class="npi">
        <span class="tag">${n.category}</span>
        <h1>${n.title}</h1>
        <p class="by">${n.author}</p>
        ${n.series ? `<p class="ser">${n.series}${n.partLabel ? " — " + n.partLabel : ""}</p>` : ""}
        ${n.description ? `<p class="desc">${n.title}, ${n.description}</p>` : ""}
        <div class="acts"><a class="btn" href="${n.readUrl || "#previews"}"${n.readUrl ? ' target="_blank" rel="noopener"' : ""}>Read Now</a></div>
        ${parts ? `<div class="acts parts">${parts}</div>` : ""}
      </div>
    </article>
    ${n.previews.length ? `<section class="sec" id="previews"><div class="sec-h"><h2>Preview</h2></div><div class="gal">${n.previews.map((p, i) => `<button class="gi" data-i="${i}" aria-label="Open preview ${i + 1}">${img(p, `${n.title} preview ${i + 1}`, i === 0, "Preview unavailable")}</button>`).join("")}</div></section>` : ""}
    ${n.story.length || n.note ? `<section class="sec story">${n.story.map(s => `<div><h3>${s.h}</h3><p>${s.t}</p></div>`).join("")}${n.note ? `<p class="note">${n.note}</p>` : ""}</section>` : ""}`;
    root.querySelectorAll(".gi").forEach(b => b.onclick = () => showLb(+b.dataset.i));
  }
  
  try { document.body.dataset.page === "home" ? home() : novelPage(); }
  catch (err) { console.error(err); const m = $("main"); if (m) m.innerHTML = `<div class="empty pad"><h3>Something went wrong</h3><p><a class="btn" href="index.html">Back to LorePDF</a></p></div>`; }