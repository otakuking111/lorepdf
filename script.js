/* =====================================================================
   LorePDF – script.js
   1) NOVEL DATA  – add new novels here (nothing else to edit)
   2) Helpers
   3) Homepage
   4) Novel page + series navigation
   5) Locker manager (AdBlueMedia)
   ===================================================================== */

/* ---------- 1) NOVEL DATA ----------
   To add a novel, copy one object, change the values, add a comma.
   recommended: true -> shows in the Recommended carousel
   trending:    true -> shows in Trending books
   previousPart / nextPart: the id of the other part, or null.        */
   const novels = [
    {
      id: "example-novel",
      title: "Example Novel",
      author: "Example Author",
      cover: "images/example.jpg",   // missing image = placeholder cover is shown
      description: "This is a placeholder description. Replace it with the real story summary.",
      category: "Fantasy",
  
      series: "Example Series",      // use null for standalone novels
      part: 1,
      previousPart: null,
      nextPart: "example-novel-2",
  
      recommended: true,
      trending: true,
  
      locker: { it: "EXAMPLE_IT", key: "EXAMPLE_KEY" }
    }
  ];
  
  /* ---------- 2) HELPERS ---------- */
  const findNovel = (id) => novels.find((n) => n.id === id);
  
  function esc(text) {
    const d = document.createElement("div");
    d.textContent = text == null ? "" : text;
    return d.innerHTML;
  }
  
  // Cover image with a text placeholder if the image file is missing
  function coverHTML(n) {
    return `<div class="cover"><img src="${esc(n.cover)}" alt="Cover of ${esc(n.title)}" loading="lazy"
      onerror="this.parentNode.textContent=this.alt.replace('Cover of ','')"></div>`;
  }
  
  function cardHTML(n) {
    return `<a class="card" href="novel.html?id=${encodeURIComponent(n.id)}">
      ${coverHTML(n)}
      <div class="card-body">
        <h3 class="card-title">${esc(n.title)}</h3>
        <p class="card-meta">${esc(n.author)}</p>
        <span class="tag">${esc(n.category)}</span>
      </div></a>`;
  }
  
  /* ---------- 3) HOMEPAGE ---------- */
  function initHome() {
    const carousel = document.getElementById("recommendedCarousel");
    const grid = document.getElementById("trendingGrid");
  
    const recommended = novels.filter((n) => n.recommended);
    const trending = novels.filter((n) => n.trending);
    carousel.innerHTML = recommended.map(cardHTML).join("") || '<p class="empty">No recommended novels yet.</p>';
    grid.innerHTML = trending.map(cardHTML).join("") || '<p class="empty">No trending novels yet.</p>';
  
    // Auto-scroll: move one card every 3s, loop at the end, pause while the user interacts
    const step = () => (carousel.querySelector(".card")?.offsetWidth || 160) + 16;
    let paused = false;
    setInterval(() => {
      if (paused || document.hidden) return;
      const atEnd = carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 4;
      carousel.scrollTo({ left: atEnd ? 0 : carousel.scrollLeft + step(), behavior: "smooth" });
    }, 3000);
    ["pointerenter", "touchstart", "focusin"].forEach((e) => carousel.addEventListener(e, () => (paused = true), { passive: true }));
    ["pointerleave", "touchend", "focusout"].forEach((e) => carousel.addEventListener(e, () => (paused = false), { passive: true }));
  
    // Desktop arrows
    document.getElementById("carouselPrev").onclick = () => carousel.scrollBy({ left: -step(), behavior: "smooth" });
    document.getElementById("carouselNext").onclick = () => carousel.scrollBy({ left: step(), behavior: "smooth" });
  
    // Desktop mouse drag
    let down = false, startX = 0, startLeft = 0, moved = false;
    carousel.addEventListener("mousedown", (e) => { down = true; moved = false; startX = e.pageX; startLeft = carousel.scrollLeft; });
    window.addEventListener("mouseup", () => (down = false));
    carousel.addEventListener("mousemove", (e) => {
      if (!down) return;
      if (Math.abs(e.pageX - startX) > 5) moved = true;
      carousel.style.scrollSnapType = "none";
      carousel.scrollLeft = startLeft - (e.pageX - startX);
    });
    carousel.addEventListener("mouseup", () => (carousel.style.scrollSnapType = ""));
    carousel.addEventListener("click", (e) => { if (moved) e.preventDefault(); }, true); // dragging must not open a card
  }
  
  /* ---------- 4) NOVEL PAGE ---------- */
  function initNovel() {
    const root = document.getElementById("novelRoot");
    const id = new URLSearchParams(location.search).get("id");
    const n = findNovel(id);
  
    if (!n) {
      root.innerHTML = `<div><h1>Novel not found</h1>
        <p class="by">We couldn't find a novel with this link.</p>
        <a class="btn btn-primary" href="index.html">Back to all novels</a></div>`;
      document.title = "Novel not found – LorePDF";
      return;
    }
  
    document.title = `${n.title} – LorePDF`;
    const seriesFacts = n.series ? `<span class="tag">${esc(n.series)}</span><span class="tag">Part ${esc(n.part)}</span>` : "";
  
    // Series buttons: shown only when previousPart / nextPart is set. Standalone novels get none.
    const prevBtn = n.series && n.previousPart ? `<a class="btn" href="novel.html?id=${encodeURIComponent(n.previousPart)}">&#8249; Previous Part</a>` : "";
    const nextBtn = n.series && n.nextPart ? `<a class="btn btn-primary" href="novel.html?id=${encodeURIComponent(n.nextPart)}">Next Part &#8250;</a>` : "";
    const seriesNav = prevBtn || nextBtn ? `<p class="series-label">Continue the series</p><div class="series-nav">${prevBtn}${nextBtn}</div>` : "";
  
    root.innerHTML = `
      ${coverHTML(n)}
      <div>
        <h1>${esc(n.title)}</h1>
        <p class="by">by ${esc(n.author)}</p>
        <div class="facts"><span class="tag">${esc(n.category)}</span>${seriesFacts}</div>
        <p class="description">${esc(n.description)}</p>
        <button class="btn btn-primary read-btn" id="readBtn">Read now</button>
        <p class="locker-msg" id="lockerMsg" role="status"></p>
        ${seriesNav}
      </div>`;
  
    const btn = document.getElementById("readBtn");
    const msg = document.getElementById("lockerMsg");
    btn.addEventListener("click", async () => {
      btn.disabled = true;
      msg.className = "locker-msg";
      msg.textContent = "Loading…";
      try {
        await openLocker(n.locker.it, n.locker.key);
        msg.textContent = "";
      } catch (err) {
        msg.className = "locker-msg error";
        msg.textContent = "Couldn't load the download. Turn off your ad blocker or check your connection, then try again.";
        console.error("Locker error:", err);
      }
      btn.disabled = false;
    });
  }
  
  /* ---------- 5) LOCKER MANAGER (AdBlueMedia) ----------
     Only ONE locker is active at a time. Every click: remove the old script,
     clear the old config, set the new it/key, load the common script, then call
     the official _VR() that the AdBlueMedia script provides (we never define it). */
  const LOCKER = {
    // Paste the common AdBlueMedia script URL from your dashboard here (only place it appears)
    SCRIPT_URL: "https://REPLACE-WITH-ADBLUEMEDIA-SCRIPT-URL.js",
    // Names of the global variables AdBlueMedia gives you in its embed code.
    // Typical embed:  var abc123 = { "it": 123, "key": "xyz" };
    VAR_NAME: "REPLACE_WITH_ADBLUEMEDIA_VARIABLE_NAME",
    SCRIPT_ID: "adbluemedia-locker-script"
  };
  
  function openLocker(it, key) {
    return new Promise((resolve, reject) => {
      // 1 + 2: remove previous script and previous configuration
      document.getElementById(LOCKER.SCRIPT_ID)?.remove();
      try { delete window[LOCKER.VAR_NAME]; } catch (e) { window[LOCKER.VAR_NAME] = undefined; }
      try { delete window._VR; } catch (e) { window._VR = undefined; }
  
      // 3: set the selected novel's values
      window[LOCKER.VAR_NAME] = { it: it, key: key };
  
      // 4: load the common script (cache-busting query makes the browser run it again)
      const s = document.createElement("script");
      s.id = LOCKER.SCRIPT_ID;
      s.src = LOCKER.SCRIPT_URL + (LOCKER.SCRIPT_URL.includes("?") ? "&" : "?") + "t=" + Date.now();
      s.async = true;
  
      // 5 + 6 + 7: when loaded, call the official _VR() to show the locker
      s.onload = () => {
        if (typeof window._VR === "function") {
          window._VR();
          resolve();
        } else {
          reject(new Error("AdBlueMedia script loaded but _VR() was not found."));
        }
      };
      s.onerror = () => { s.remove(); reject(new Error("Could not load the AdBlueMedia script.")); };
      document.head.appendChild(s);
    });
  }
  
  /* ---------- Start ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
    const page = document.body.dataset.page;
    if (page === "home") initHome();
    if (page === "novel") initNovel();
  });