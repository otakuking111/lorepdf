/* =====================================================================
   LorePDF – script.js
   1) NOVEL DATA
   2) Helpers
   3) Homepage
   4) Novel page + series navigation
   5) Locker manager (AdBlueMedia)
   ===================================================================== */


/* ---------- 1) NOVEL DATA ---------- */

const novels = [
    {
      id: "test-novel",
      title: "Test Novel",
      author: "LorePDF",
      cover: "images/example.jpg",
      description: "This is a test novel for LorePDF.",
      category: "Fantasy",
  
      series: null,
      part: null,
      previousPart: null,
      nextPart: null,
  
      recommended: true,
      trending: true,
  
      locker: {
        it: "4516914",
        key: "328d8"
      }
    }
  ];
  
  
  /* ---------- 2) HELPERS ---------- */
  
  const findNovel = (id) => novels.find((n) => n.id === id);
  
  function esc(text) {
    const d = document.createElement("div");
    d.textContent = text == null ? "" : text;
    return d.innerHTML;
  }
  
  
  // Cover image with a text placeholder if the image is missing
  function coverHTML(n) {
    return `
      <div class="cover">
        <img
          src="${esc(n.cover)}"
          alt="Cover of ${esc(n.title)}"
          loading="lazy"
          onerror="this.parentNode.textContent=this.alt.replace('Cover of ','')"
        >
      </div>
    `;
  }
  
  
  function cardHTML(n) {
    return `
      <a class="card" href="novel.html?id=${encodeURIComponent(n.id)}">
        ${coverHTML(n)}
  
        <div class="card-body">
          <h3 class="card-title">${esc(n.title)}</h3>
          <p class="card-meta">${esc(n.author)}</p>
          <span class="tag">${esc(n.category)}</span>
        </div>
      </a>
    `;
  }
  
  
  /* ---------- 3) HOMEPAGE ---------- */
  
  function initHome() {
    const carousel = document.getElementById("recommendedCarousel");
    const grid = document.getElementById("trendingGrid");
  
    if (!carousel || !grid) return;
  
    const recommended = novels.filter((n) => n.recommended);
    const trending = novels.filter((n) => n.trending);
  
    carousel.innerHTML =
      recommended.map(cardHTML).join("") ||
      '<p class="empty">No recommended novels yet.</p>';
  
    grid.innerHTML =
      trending.map(cardHTML).join("") ||
      '<p class="empty">No trending novels yet.</p>';
  
  
    // Auto-scroll
    const step = () =>
      (carousel.querySelector(".card")?.offsetWidth || 160) + 16;
  
    let paused = false;
  
    setInterval(() => {
      if (paused || document.hidden) return;
  
      const atEnd =
        carousel.scrollLeft + carousel.clientWidth >=
        carousel.scrollWidth - 4;
  
      carousel.scrollTo({
        left: atEnd ? 0 : carousel.scrollLeft + step(),
        behavior: "smooth"
      });
    }, 3000);
  
  
    // Pause while interacting
    ["pointerenter", "touchstart", "focusin"].forEach((event) => {
      carousel.addEventListener(
        event,
        () => (paused = true),
        { passive: true }
      );
    });
  
    ["pointerleave", "touchend", "focusout"].forEach((event) => {
      carousel.addEventListener(
        event,
        () => (paused = false),
        { passive: true }
      );
    });
  
  
    // Desktop arrows
    const prev = document.getElementById("carouselPrev");
    const next = document.getElementById("carouselNext");
  
    if (prev) {
      prev.onclick = () =>
        carousel.scrollBy({
          left: -step(),
          behavior: "smooth"
        });
    }
  
    if (next) {
      next.onclick = () =>
        carousel.scrollBy({
          left: step(),
          behavior: "smooth"
        });
    }
  
  
    // Desktop mouse drag
    let down = false;
    let startX = 0;
    let startLeft = 0;
    let moved = false;
  
    carousel.addEventListener("mousedown", (e) => {
      down = true;
      moved = false;
      startX = e.pageX;
      startLeft = carousel.scrollLeft;
    });
  
    window.addEventListener("mouseup", () => {
      down = false;
    });
  
    carousel.addEventListener("mousemove", (e) => {
      if (!down) return;
  
      if (Math.abs(e.pageX - startX) > 5) {
        moved = true;
      }
  
      carousel.style.scrollSnapType = "none";
  
      carousel.scrollLeft =
        startLeft - (e.pageX - startX);
    });
  
    carousel.addEventListener("mouseup", () => {
      carousel.style.scrollSnapType = "";
    });
  
    carousel.addEventListener(
      "click",
      (e) => {
        if (moved) e.preventDefault();
      },
      true
    );
  }
  
  
  /* ---------- 4) NOVEL PAGE ---------- */
  
  function initNovel() {
    const root = document.getElementById("novelRoot");
  
    if (!root) return;
  
    const id = new URLSearchParams(location.search).get("id");
    const n = findNovel(id);
  
  
    // Novel not found
    if (!n) {
      root.innerHTML = `
        <div>
          <h1>Novel not found</h1>
  
          <p class="by">
            We couldn't find a novel with this link.
          </p>
  
          <a class="btn btn-primary" href="index.html">
            Back to all novels
          </a>
        </div>
      `;
  
      document.title = "Novel not found – LorePDF";
  
      return;
    }
  
  
    document.title = `${n.title} – LorePDF`;
  
  
    // Series information
    const seriesFacts = n.series
      ? `
        <span class="tag">${esc(n.series)}</span>
        <span class="tag">Part ${esc(n.part)}</span>
      `
      : "";
  
  
    // Previous part
    const prevBtn =
      n.series && n.previousPart
        ? `
          <a
            class="btn"
            href="novel.html?id=${encodeURIComponent(n.previousPart)}"
          >
            &#8249; Previous Part
          </a>
        `
        : "";
  
  
    // Next part
    const nextBtn =
      n.series && n.nextPart
        ? `
          <a
            class="btn btn-primary"
            href="novel.html?id=${encodeURIComponent(n.nextPart)}"
          >
            Next Part &#8250;
          </a>
        `
        : "";
  
  
    const seriesNav =
      prevBtn || nextBtn
        ? `
          <p class="series-label">
            Continue the series
          </p>
  
          <div class="series-nav">
            ${prevBtn}
            ${nextBtn}
          </div>
        `
        : "";
  
  
    // Render novel
    root.innerHTML = `
      ${coverHTML(n)}
  
      <div>
        <h1>${esc(n.title)}</h1>
  
        <p class="by">
          by ${esc(n.author)}
        </p>
  
        <div class="facts">
          <span class="tag">${esc(n.category)}</span>
          ${seriesFacts}
        </div>
  
        <p class="description">
          ${esc(n.description)}
        </p>
  
        <button
          class="btn btn-primary read-btn"
          id="readBtn"
        >
          Read now
        </button>
  
        <p
          class="locker-msg"
          id="lockerMsg"
          role="status"
        ></p>
  
        ${seriesNav}
      </div>
    `;
  
  
    // Read button
    const btn = document.getElementById("readBtn");
    const msg = document.getElementById("lockerMsg");
  
  
    btn.addEventListener("click", async () => {
  
      btn.disabled = true;
  
      msg.className = "locker-msg";
      msg.textContent = "Loading…";
  
  
      try {
  
        // Load this novel's own locker
        await openLocker(
          n.locker.it,
          n.locker.key
        );
  
        msg.textContent = "";
  
      } catch (err) {
  
        msg.className = "locker-msg error";
  
        msg.textContent =
          "Couldn't load the download. Turn off your ad blocker or check your connection, then try again.";
  
        console.error(
          "Locker error:",
          err
        );
  
      }
  
  
      btn.disabled = false;
    });
  }
  
  
  /* ---------- 5) LOCKER MANAGER (AdBlueMedia) ---------- */
  
  const LOCKER = {
  
    // Common AdBlueMedia script
    SCRIPT_URL:
      "https://d18k3i06xdslhs.cloudfront.net/e02d6e3.js",
  
    // AdBlueMedia global variable
    VAR_NAME:
      "MnuOd_hJE_TAKyuc",
  
    // ID used to identify the currently loaded script
    SCRIPT_ID:
      "adbluemedia-locker-script"
  };
  
  
  /*
    Only ONE locker is active at a time.
  
    When a visitor clicks Read now:
  
    1. Remove previous locker script.
    2. Remove previous configuration.
    3. Remove previous _VR().
    4. Set the selected novel's it/key.
    5. Load the common AdBlueMedia script.
    6. Wait for the script.
    7. Call the official AdBlueMedia _VR().
  */
  
  function openLocker(it, key) {
  
    return new Promise((resolve, reject) => {
  
  
      // 1. Remove previous script
      document
        .getElementById(LOCKER.SCRIPT_ID)
        ?.remove();
  
  
      // 2. Remove previous configuration
      try {
  
        delete window[LOCKER.VAR_NAME];
  
      } catch (e) {
  
        window[LOCKER.VAR_NAME] =
          undefined;
      }
  
  
      // 3. Remove previous _VR()
      try {
  
        delete window._VR;
  
      } catch (e) {
  
        window._VR =
          undefined;
      }
  
  
      // 4. Set selected novel's locker values
      window[LOCKER.VAR_NAME] = {
  
        it: it,
        key: key
  
      };
  
  
      // 5. Create AdBlueMedia script
      const s =
        document.createElement("script");
  
      s.id =
        LOCKER.SCRIPT_ID;
  
  
      // Cache busting
      s.src =
        LOCKER.SCRIPT_URL +
        (
          LOCKER.SCRIPT_URL.includes("?")
            ? "&"
            : "?"
        ) +
        "t=" +
        Date.now();
  
  
      s.async = true;
  
  
      // 6 + 7. Script loaded
      s.onload = () => {
  
        if (
          typeof window._VR ===
          "function"
        ) {
  
          // Official AdBlueMedia function
          window._VR();
  
          resolve();
  
        } else {
  
          reject(
            new Error(
              "AdBlueMedia script loaded but _VR() was not found."
            )
          );
  
        }
      };
  
  
      // Script loading error
      s.onerror = () => {
  
        s.remove();
  
        reject(
          new Error(
            "Could not load the AdBlueMedia script."
          )
        );
  
      };
  
  
      // Add script to page
      document.head.appendChild(s);
  
    });
  
  }
  
  
  /* ---------- START ---------- */
  
  document.addEventListener(
    "DOMContentLoaded",
    () => {
  
      // Footer year
      const year =
        document.getElementById("year");
  
      if (year) {
  
        year.textContent =
          new Date().getFullYear();
  
      }
  
  
      // Detect current page
      const page =
        document.body.dataset.page;
  
  
      if (page === "home") {
  
        initHome();
  
      }
  
  
      if (page === "novel") {
  
        initNovel();
  
      }
  
    }
  );