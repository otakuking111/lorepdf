/* ==========================================================================
   NOVEL DATA — ADD NEW NOVELS HERE
   Copy one object, change the fields, add it to the array. That's all.
   - id: unique, used in the URL (novel.html?id=...)
   - previousPart / nextPart: the id of the neighbouring part, or null
   - recommended / trending: true shows the book in that section
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
      recommended: true,
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
      recommended: true,
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
      recommended: true,
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
  
  const $ = (s, r = document) => r.querySelector(s);
  const byId = id => NOVELS.find(n => n.id === id);
  const href = n => `novel.html?id=${encodeURIComponent(n.id)}`;
  const card = n => `<a class="card" href="${href(n)}"><div class="cov"><img loading="lazy" src="${n.cover}" alt="${n.title} cover"></div><div class="meta"><span class="tag">${n.category}</span><h3>${n.title}</h3><p>${n.author}</p>${n.partLabel ? `<small>${n.partLabel}</small>` : ""}</div></a>`;
  
  /* ---------- Shared chrome ---------- */
  document.body.insertAdjacentHTML("afterbegin", `
  <header class="hdr"><div class="bar">
    <a class="logo" href="index.html">Lore<span>PDF</span></a>
    <nav class="nav" id="nav">
      <a href="index.html">Home</a><a href="index.html#rec-sec">Recommended</a><a href="index.html#trend-sec">Trending</a><a href="index.html#library">Library</a>
    </nav>
    <button class="ibtn" id="sbtn" aria-label="Search">⌕</button>
    <button class="ibtn burger" id="burger" aria-label="Menu" aria-expanded="false"><i></i><i></i><i></i></button>
  </div></header>
  <div class="sov" id="sov" hidden><div class="sbox">
    <div class="srow"><input id="sin" type="search" placeholder="Search title, author, genre or series" autocomplete="off"><button class="ibtn" id="sx" aria-label="Close search">✕</button></div>
    <div class="grid sres" id="sres"></div>
  </div></div>`);
  document.body.insertAdjacentHTML("beforeend", `<footer class="ftr"><a class="logo" href="index.html">Lore<span>PDF</span></a><p>© ${new Date().getFullYear()} LorePDF</p></footer>`);
  
  /* ---------- Menu ---------- */
  const nav = $("#nav"), burger = $("#burger");
  const setMenu = o => { nav.classList.toggle("open", o); burger.setAttribute("aria-expanded", o); };
  burger.onclick = e => { e.stopPropagation(); setMenu(!nav.classList.contains("open")); };
  nav.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("click", e => { if (!e.target.closest("#nav")) setMenu(false); });
  
  /* ---------- Search ---------- */
  const sov = $("#sov"), sin = $("#sin"), sres = $("#sres");
  const openS = () => { sov.hidden = false; setMenu(false); sin.focus(); runS(); };
  const closeS = () => { sov.hidden = true; };
  function runS() {
    const words = sin.value.toLowerCase().split(/\s+/).filter(Boolean);
    const hits = NOVELS.filter(n => { const hay = [n.title, n.author, n.category, n.series].join(" ").toLowerCase(); return words.every(w => hay.includes(w)); });
    sres.innerHTML = hits.length ? hits.map(card).join("") : `<div class="empty"><h3>No novels found</h3><p>Try a title, author, genre or series.</p></div>`;
  }
  $("#sbtn").onclick = openS; $("#sx").onclick = closeS;
  sin.oninput = runS;
  sov.addEventListener("click", e => { if (e.target === sov) closeS(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") { closeS(); closeLb(); } });
  
  /* ---------- Home ---------- */
  function home() {
    const rec = NOVELS.filter(n => n.recommended), tr = NOVELS.filter(n => n.trending);
    const track = $("#rec");
    track.innerHTML = rec.map(card).join("");
    if (!rec.length) $("#rec-sec").hidden = true;
    if (!tr.length) $("#trend-sec").hidden = true;
    $("#trend").innerHTML = tr.map(card).join("");
    const step = () => track.clientWidth * 0.6;
    document.querySelectorAll(".arr").forEach(b => b.onclick = () => track.scrollBy({ left: b.dataset.dir * step(), behavior: "smooth" }));
    let paused = false;
    ["mouseenter", "touchstart", "focusin"].forEach(ev => track.addEventListener(ev, () => paused = true, { passive: true }));
    ["mouseleave", "touchend", "focusout"].forEach(ev => track.addEventListener(ev, () => paused = false, { passive: true }));
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce) setInterval(() => {
      if (paused || track.scrollWidth <= track.clientWidth + 4) return;
      const end = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
      track.scrollTo({ left: end ? 0 : track.scrollLeft + step(), behavior: "smooth" });
    }, 4000);
    const cats = ["All", ...new Set(NOVELS.map(n => n.category))];
    const lib = $("#lib"), chips = $("#chips");
    const draw = c => {
      chips.innerHTML = cats.map(x => `<button class="chip${x === c ? " on" : ""}" data-c="${x}">${x}</button>`).join("");
      lib.innerHTML = NOVELS.filter(n => c === "All" || n.category === c).map(card).join("");
    };
    chips.onclick = e => { const b = e.target.closest(".chip"); if (b) draw(b.dataset.c); };
    draw("All");
  }
  
  /* ---------- Novel page ---------- */
  let lbList = [], lbI = 0;
  const lb = document.createElement("div");
  lb.className = "lb"; lb.hidden = true;
  lb.innerHTML = `<button class="ibtn lx" aria-label="Close">✕</button><button class="ibtn lp" aria-label="Previous image">‹</button><img alt="Preview"><button class="ibtn ln" aria-label="Next image">›</button>`;
  document.body.appendChild(lb);
  const showLb = i => { lbI = (i + lbList.length) % lbList.length; $("img", lb).src = lbList[lbI]; lb.hidden = false; };
  function closeLb() { lb.hidden = true; }
  $(".lx", lb).onclick = closeLb; $(".lp", lb).onclick = () => showLb(lbI - 1); $(".ln", lb).onclick = () => showLb(lbI + 1);
  lb.addEventListener("click", e => { if (e.target === lb) closeLb(); });
  document.addEventListener("keydown", e => { if (lb.hidden) return; if (e.key === "ArrowLeft") showLb(lbI - 1); if (e.key === "ArrowRight") showLb(lbI + 1); });
  
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
      <div class="npc"><img src="${n.cover}" alt="${n.title} cover"></div>
      <div class="npi">
        <span class="tag">${n.category}</span>
        <h1>${n.title}</h1>
        <p class="by">${n.author}</p>
        ${n.series ? `<p class="ser">${n.series}${n.partLabel ? " — " + n.partLabel : ""}</p>` : ""}
        <p class="desc">${n.title}, ${n.description}</p>
        <div class="acts"><a class="btn" id="read" href="${n.readUrl || "#previews"}"${n.readUrl ? ' target="_blank" rel="noopener"' : ""}>Read Now</a></div>
        ${parts ? `<div class="acts parts">${parts}</div>` : ""}
      </div>
    </article>
    <section class="sec story">${n.story.map(s => `<div><h3>${s.h}</h3><p>${s.t}</p></div>`).join("")}${n.note ? `<p class="note">${n.note}</p>` : ""}</section>
    ${n.previews.length ? `<section class="sec" id="previews"><div class="sec-h"><h2>Preview</h2></div><div class="gal">${n.previews.map((p, i) => `<button class="gi" data-i="${i}" aria-label="Open preview ${i + 1}"><img loading="lazy" src="${p}" alt="${n.title} preview ${i + 1}"></button>`).join("")}</div></section>` : ""}`;
    root.querySelectorAll(".gi").forEach(b => b.onclick = () => showLb(+b.dataset.i));
  }
  
  document.body.dataset.page === "home" ? home() : novelPage();