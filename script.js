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
    },
    {
        id: "fourth-wing",
        title: "Fourth Wing",
        author: "Rebecca Yarros",
        cover: "https://i.pinimg.com/1200x/ca/8b/10/ca8b10c46050f336b2aea172f98ba534.jpg",
        description: "Twenty-year-old Violet Sorrengail expected to live a quiet life among books, but her mother orders her to enter Basgiath War College and compete to become a dragon rider. In a world where dragons are deadly and survival is never guaranteed, Violet must rely on her intelligence and determination while uncovering dangerous secrets about her kingdom.",
        category: "Fantasy Romance",
        genres: ["Fantasy Romance", "Fantasy", "Romance", "New Adult", "Dragons"],
        series: "The Empyrean",
        part: 1,
        partLabel: "Part #1",
        previousPart: null,
        nextPart: "iron-flame",
        addedAt: "2026-10-09",
        readUrl: "",
        story: [
        {
        h: "A Dangerous Beginning",
        t: "Violet Sorrengail is expected to join the Scribe Quadrant, but her mother commands her to enter the brutal Riders Quadrant at Basgiath War College."
        },
        {
        h: "The Dragon Riders",
        t: "Violet must survive deadly trials and earn a dragon's bond in a world where weakness can mean death."
        },
        {
        h: "Secrets and Survival",
        t: "As Violet faces dangerous rivals and an increasingly threatening war, she begins to suspect that the kingdom's leaders are hiding a terrible secret."
        }
        ],
        note: "",
        previews: [
        "https://i.pinimg.com/1200x/34/10/f4/3410f4e72d9ba8346e9a541d7851626b.jpg",
        "https://i.pinimg.com/1200x/90/35/e3/9035e31ac3a300bd9d909fa347e4cb9c.jpg",
        "https://i.pinimg.com/1200x/5a/0a/40/5a0a401f3215c2b85b43b0974e14ba14.jpg"
        ]
        },
        {
        id: "iron-flame",
        title: "Iron Flame",
        author: "Rebecca Yarros",
        cover: "https://i.pinimg.com/1200x/dd/65/53/dd6553980874fd475008513b5a051885.jpg",
        description: "Violet Sorrengail survived her first year at Basgiath War College, but the real training is only beginning. Facing brutal challenges and a vice commandant determined to break her, Violet must protect the people she loves while confronting secrets that could threaten everything.",
        category: "Fantasy Romance",
        genres: ["Fantasy Romance", "Fantasy", "Romance", "New Adult", "Dragons"],
        series: "The Empyrean",
        part: 2,
        partLabel: "Part #2",
        previousPart: "fourth-wing",
        nextPart: "onyx-storm",
        addedAt: "2026-10-09",
        readUrl: "",
        story: [
        {
        h: "The Second Year",
        t: "After surviving the first year at Basgiath, Violet faces even harsher training and new dangers."
        },
        {
        h: "A Test of Loyalty",
        t: "A ruthless vice commandant pushes Violet toward impossible choices, threatening her relationship and her freedom."
        },
        {
        h: "Secrets Beneath Basgiath",
        t: "Violet must use her intelligence and determination as she confronts secrets that could change the fate of the kingdom."
        }
        ],
        note: "",
        previews: [
        "https://i.pinimg.com/1200x/bd/cb/94/bdcb94593798d30235706c3c4ffa5ccd.jpg",
        "https://i.pinimg.com/1200x/5d/5d/f3/5d5df378f2f7ab972ccd1d1bd62bb9ec.jpg",
        "https://i.pinimg.com/1200x/4c/fa/33/4cfa33c88e86a34b89fa4bd2ae93d322.jpg"
        ]
        },
        {
        id: "onyx-storm",
        title: "Onyx Storm",
        author: "Rebecca Yarros",
        cover: "https://i.pinimg.com/1200x/f8/4a/8d/f84a8dc14c1fcc99ac1ffb3212bc573c.jpg",
        description: "After eighteen months at Basgiath War College, Violet Sorrengail knows that training alone cannot prepare her for what lies ahead. With danger approaching and the kingdom's protective wards failing, she must travel beyond familiar borders to seek allies and discover truths that could change everything.",
        category: "Fantasy Romance",
        genres: ["Fantasy Romance", "Fantasy", "Romance", "New Adult", "Dragons"],
        series: "The Empyrean",
        part: 3,
        partLabel: "Part #3",
        previousPart: "iron-flame",
        nextPart: null,
        addedAt: "2026-10-09",
        readUrl: "",
        story: [
        {
        h: "Beyond the Wards",
        t: "Violet must venture beyond the kingdom's failing magical protections to search for allies who may help defend Navarre."
        },
        {
        h: "Dangerous Alliances",
        t: "As threats grow and trust becomes harder to find, Violet faces difficult choices that put her courage and loyalty to the test."
        },
        {
        h: "A Fight for Everything",
        t: "Violet risks everything to protect her dragons, her family, her home, and the people she loves."
        }
        ],
        note: "",
        previews: [
        "https://i.pinimg.com/1200x/27/3f/f0/273ff06532978fcc3ac11dadca1d8818.jpg",
        "https://i.pinimg.com/1200x/da/9b/54/da9b54d29fc1ac322d813dc3548fc104.jpg",
        "https://i.pinimg.com/1200x/21/69/bb/2169bbc76b0a7ee2f1698ac699669a46.jpg"
        ]
    },

    {
        id: "a-game-of-thrones",
        title: "A Game of Thrones",
        author: "George R. R. Martin",
        cover: "https://i.pinimg.com/1200x/24/4a/b4/244ab4b95aee380c26bc95fa7b879d13.jpg",
        description: "Part #1 of A Song of Ice and Fire, an epic fantasy saga of rival noble houses, political intrigue, dangerous ambitions, and a struggle for the Iron Throne.",
        category: "Epic Fantasy",
        genres: ["Epic Fantasy", "Fantasy", "Adventure", "Political Fiction"],
        series: "A Song of Ice and Fire",
        part: 1,
        partLabel: "Part #1",
        previousPart: null,
        nextPart: "a-clash-of-kings",
        addedAt: "2026-10-09",
        readUrl: "https://salmane.freedev.app/?/39377cf",
        story: [
          {
            h: "The Great Houses",
            t: "Noble families across Westeros compete for power as old rivalries threaten to plunge the Seven Kingdoms into conflict."
          },
          {
            h: "A Dangerous Discovery",
            t: "As the Stark family becomes entangled in the affairs of the royal court, secrets and betrayals put lives at risk."
          },
          {
            h: "Beyond the Wall",
            t: "Far to the north, an ancient danger begins to emerge beyond the boundaries of the known kingdoms."
          }
        ],
        note: "",
        previews: [
          "https://i.pinimg.com/1200x/00/a1/b5/00a1b55ac10a912224158d1c420ba2ad.jpg",
          "https://i.pinimg.com/1200x/19/79/11/197911f78d60ff4df45fb574220b1de0.jpg",
          "https://i.pinimg.com/1200x/9a/ad/8e/9aad8ecc65a13d536e998aa4c25cae34.jpg"
        ]
      },
      {
        id: "a-clash-of-kings",
        title: "A Clash of Kings",
        author: "George R. R. Martin",
        cover: "https://i.pinimg.com/1200x/88/88/cc/8888cc39413b186c8fcc672c0dc8ab15.jpg",
        description: "Part #2 of A Song of Ice and Fire. As rival claimants fight for the throne, war spreads across Westeros and alliances become increasingly dangerous.",
        category: "Epic Fantasy",
        genres: ["Epic Fantasy", "Fantasy", "Adventure", "Political Fiction"],
        series: "A Song of Ice and Fire",
        part: 2,
        partLabel: "Part #2",
        previousPart: "a-game-of-thrones",
        nextPart: "a-storm-of-swords",
        addedAt: "2026-10-09",
        readUrl: "https://salmane.freedev.app/?/32a9919",
        story: [
          {
            h: "War for the Throne",
            t: "Several powerful leaders claim the right to rule, drawing the Seven Kingdoms into a devastating struggle."
          },
          {
            h: "Shifting Alliances",
            t: "Political manoeuvres, secret plans, and fragile partnerships shape the fortunes of the competing houses."
          },
          {
            h: "Darkness Approaches",
            t: "While the kingdoms fight among themselves, troubling forces gather beyond their immediate conflicts."
          }
        ],
        note: "",
        previews: [
          "https://i.pinimg.com/1200x/10/72/52/10725207e99377896cedf5a674a93ea0.jpg",
          "https://i.pinimg.com/1200x/36/7d/87/367d87b2b3166def4f7df831065a6450.jpg",
          "https://i.pinimg.com/1200x/7d/4c/09/7d4c09b312e3b091242c9e94d1f1350c.jpg"
        ]
      },
      {
        id: "a-storm-of-swords",
        title: "A Storm of Swords",
        author: "George R. R. Martin",
        cover: "https://i.pinimg.com/236x/7f/34/b0/7f34b053baa94c64497599891be525e0.jpg",
        description: "Part #3 of A Song of Ice and Fire. The war for the Iron Throne intensifies as shifting loyalties, shocking revelations, and dangerous decisions reshape the fate of Westeros.",
        category: "Epic Fantasy",
        genres: ["Epic Fantasy", "Fantasy", "Adventure", "Political Fiction"],
        series: "A Song of Ice and Fire",
        part: 3,
        partLabel: "Part #3",
        previousPart: "a-clash-of-kings",
        nextPart: "a-feast-for-crows",
        addedAt: "2026-10-09",
        readUrl: "https://salmane.freedev.app/?/ec0a6c2",
        story: [
          {
            h: "A Kingdom in Turmoil",
            t: "The struggle for power reaches a critical stage, testing the strength and loyalty of the rival houses."
          },
          {
            h: "Betrayal and Consequences",
            t: "Unexpected turns and dangerous political choices change the course of the conflict."
          },
          {
            h: "Threats Beyond the War",
            t: "The battles for the throne unfold alongside growing dangers that could threaten the entire realm."
          }
        ],
        note: "",
        previews: [
          "https://i.pinimg.com/1200x/e2/92/60/e2926096559a6c0bcf449730543ea047.jpg",
          "https://i.pinimg.com/1200x/e8/32/2d/e8322dc62bd8dfb5c181db0ce787f69c.jpg",
          "https://i.pinimg.com/1200x/af/b0/a8/afb0a8591f6c4acf439b53ec00f200e4.jpg"
        ]
      },
      {
        id: "a-feast-for-crows",
        title: "A Feast for Crows",
        author: "George R. R. Martin",
        cover: "https://i.pinimg.com/1200x/c2/18/a2/c218a2da0679d962fe806884e2022fd5.jpg",
        description: "Part #4 of A Song of Ice and Fire. In the aftermath of war, surviving houses struggle to rebuild their power while new rivalries and threats emerge.",
        category: "Epic Fantasy",
        genres: ["Epic Fantasy", "Fantasy", "Adventure", "Political Fiction"],
        series: "A Song of Ice and Fire",
        part: 4,
        partLabel: "Part #4",
        previousPart: "a-storm-of-swords",
        nextPart: "a-dance-with-dragons",
        addedAt: "2026-10-09",
        readUrl: "https://salmane.freedev.app/?/fef4153",
        story: [
          {
            h: "Aftermath of War",
            t: "The Seven Kingdoms face the consequences of prolonged conflict as powerful families attempt to secure their positions."
          },
          {
            h: "A Fragile Peace",
            t: "New political struggles arise as ambitious figures compete to influence the future of the realm."
          },
          {
            h: "New Dangers",
            t: "Far from the main centres of power, personal journeys and emerging threats continue to reshape the wider story."
          }
        ],
        note: "",
        previews: [
          "https://i.pinimg.com/1200x/d8/fa/84/d8fa8436c083974ac569149b210b1595.jpg",
          "https://i.pinimg.com/1200x/7f/5e/ae/7f5eae689a265ec3b6995f57e3dddfc5.jpg",
          "https://i.pinimg.com/1200x/3f/a0/63/3fa0639f98aefcb3b9caf2e3840dcf04.jpg"
        ]
      },
      {
        id: "a-dance-with-dragons",
        title: "A Dance with Dragons",
        author: "George R. R. Martin",
        cover: "https://i.pinimg.com/1200x/f9/da/ad/f9daadb705b0ceba81339cdc356f2729.jpg",
        description: "Part #5 of A Song of Ice and Fire. Across a divided world, leaders and survivors confront political unrest, uncertain loyalties, and the growing threat of winter.",
        category: "Epic Fantasy",
        genres: ["Epic Fantasy", "Fantasy", "Adventure", "Political Fiction"],
        series: "A Song of Ice and Fire",
        part: 5,
        partLabel: "Part #5",
        previousPart: "a-feast-for-crows",
        nextPart: null,
        addedAt: "2026-10-09",
        readUrl: "https://salmane.freedev.app/?/77660c3",
        story: [
          {
            h: "A Land Divided",
            t: "The struggle for influence continues as competing leaders face unrest and difficult choices across the realm."
          },
          {
            h: "Beyond Familiar Borders",
            t: "Journeys far from home expose characters to unfamiliar dangers and complicated alliances."
          },
          {
            h: "The Coming Winter",
            t: "As winter approaches, the consequences of political conflict become increasingly difficult to ignore."
          }
        ],
        note: "",
        previews: [
          "https://i.pinimg.com/1200x/81/cd/b6/81cdb6ce17e15ce09dfaee7d65b3390e.jpg",
          "https://i.pinimg.com/1200x/fc/d3/03/fcd303b1ffae21c9d75e30ce5c243160.jpg",
          "https://i.pinimg.com/1200x/e9/c2/d5/e9c2d55cfa7ab5b0ebba4589a5d937c5.jpg"
        ]
      }
        
  ];
  /* ============================ END NOVEL DATA ============================ */
  
  /* Genre families shown in "Browse by Genre". Add a genre by adding its name to a list. */
  const GENRE_GROUPS = {
    "Romance": ["Romance", "Contemporary Romance", "Historical Romance", "Fantasy Romance", "Erotica"],
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
const seriesList = () =>
    uniq(n => n.series)
      .map(s => ({
        s,
        items: DATA
          .filter(n => n.series === s)
          .sort((a, b) => (a.part || 0) - (b.part || 0))
      }))
      .sort((a, b) => b.items.length - a.items.length || a.s.localeCompare(b.s));
  
  const firstPart = x =>
    x.items.find(n => n.part === 1) ||
    x.items.find(n => n.part != null) ||
    x.items[0];
  
  const fan = items => `
    <span class="series-covers">
      <span class="series-cover-stack">
        ${items.map((n, i) => `
          <span class="series-cover-item${i === 0 ? " is-front" : ""}" data-cover-index="${i}">
            ${cover(n)}
            <span class="series-part-badge">PART ${n.part ?? i + 1}</span>
          </span>
        `).join("")}
      </span>
    </span>
  `;
  
  const scard = (x, link) => {
    const first = firstPart(x);
    return `
      <a class="scard" href="${link}">
        ${fan(x.items)}
        <span class="st">
          <span class="series-eyebrow">COLLECTION</span>
          <h3 data-fit-title>${esc(x.s)}</h3>
          <p>${x.items.length} ${x.items.length === 1 ? "Part" : "Parts"}</p>
          <p class="series-author">${esc(first.author)}</p>
          <span class="series-explore">Explore series <span>→</span></span>
        </span>
      </a>
    `;
  };
  
  function updateSeriesCoverStack(card, activeIndex) {
    const items = [...card.querySelectorAll(".series-cover-item")];
    const total = items.length;
  
    items.forEach((item, index) => {
      item.classList.remove("is-front", "is-behind-1", "is-behind-2", "is-hidden");
      const position = (index - activeIndex + total) % total;
  
      if (position === 0) item.classList.add("is-front");
      else if (position === 1) item.classList.add("is-behind-1");
      else if (position === 2) item.classList.add("is-behind-2");
      else item.classList.add("is-hidden");
    });
  }
  
  let seriesCoverTimer = null;
  
  function initSeriesCoverRotations(root = document) {
    if (seriesCoverTimer) {
      clearInterval(seriesCoverTimer);
      seriesCoverTimer = null;
    }
  
    const cards = [...root.querySelectorAll(".scard")];
  
    cards.forEach(card => {
      const items = card.querySelectorAll(".series-cover-item");
      const savedIndex = Number(card.dataset.activeCoverIndex || 0);
      const activeIndex = items.length ? savedIndex % items.length : 0;
  
      card.dataset.activeCoverIndex = activeIndex;
      updateSeriesCoverStack(card, activeIndex);
    });
  
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  
    seriesCoverTimer = setInterval(() => {
      cards.forEach(card => {
        if (!card.isConnected) return;
  
        const total = card.querySelectorAll(".series-cover-item").length;
        if (total < 2) return;
  
        const nextIndex = (Number(card.dataset.activeCoverIndex || 0) + 1) % total;
        card.dataset.activeCoverIndex = nextIndex;
        updateSeriesCoverStack(card, nextIndex);
      });
    }, 1000);
  }
  
  function fitSeriesTitles(root = document) {
    root.querySelectorAll("[data-fit-title]").forEach(title => {
      title.style.fontSize = "";
  
      let size = parseFloat(getComputedStyle(title).fontSize) || 23;
      const minSize = 11;
  
      title.style.fontSize = `${size}px`;
  
      while (
        size > minSize &&
        title.scrollHeight > parseFloat(getComputedStyle(title).lineHeight) * 2.15
      ) {
        size -= 1;
        title.style.fontSize = `${size}px`;
      }
    });
  }
  
  let seriesTitleResizeTimer = null;
  
  if (!window.__lorePdfSeriesResizeBound) {
    window.__lorePdfSeriesResizeBound = true;
  
    window.addEventListener("resize", () => {
      clearTimeout(seriesTitleResizeTimer);
      seriesTitleResizeTimer = setTimeout(() => fitSeriesTitles(), 100);
    });
  }
    
  /* Home page: one series card at a time. After all covers of the current card have been shown, slide to the next card. */
  function initSeriesCarousel(track) {
    if (seriesCoverTimer) { clearInterval(seriesCoverTimer); seriesCoverTimer = null; }
    const cards = [...track.querySelectorAll(".scard")];
    if (!cards.length) return;
    track.classList.add("sgrid--carousel");

    const old = track.nextElementSibling;
    if (old && old.classList.contains("sdots")) old.remove();
    const dotsBox = document.createElement("div");
    dotsBox.className = "sdots";
    dotsBox.innerHTML = cards.length > 1 ? cards.map((_, i) => `<button type="button" aria-label="Series ${i + 1}"></button>`).join("") : "";
    track.after(dotsBox);
    const dots = [...dotsBox.children];

    let cur = 0, tick = 0, paused = false, resumeAt = 0, scrollT = null;
    const covers = c => c.querySelectorAll(".series-cover-item").length;
    const stepW = () => cards[0].getBoundingClientRect().width + (parseFloat(getComputedStyle(track).columnGap) || 0);
    const showCover = (c, i) => { c.dataset.activeCoverIndex = i; updateSeriesCoverStack(c, i); };
    const setDots = () => dots.forEach((d, i) => d.classList.toggle("on", i === cur));
    const go = (i, smooth = true) => {
      cur = (i + cards.length) % cards.length; tick = 0;
      showCover(cards[cur], 0);
      track.scrollTo({ left: cur * stepW(), behavior: smooth ? "smooth" : "auto" });
      setDots();
    };
    const hold = ms => { resumeAt = Date.now() + ms; };

    cards.forEach(c => showCover(c, 0));
    setDots();
    dots.forEach((d, i) => d.onclick = () => { hold(5000); go(i); });

    track.addEventListener("touchstart", () => { paused = true; }, { passive: true });
    ["touchend", "touchcancel"].forEach(t => track.addEventListener(t, () => { paused = false; hold(4000); }, { passive: true }));
    track.addEventListener("mouseenter", () => { paused = true; });
    track.addEventListener("mouseleave", () => { paused = false; hold(1500); });
    track.addEventListener("scroll", () => {
      clearTimeout(scrollT);
      scrollT = setTimeout(() => {
        const idx = Math.max(0, Math.min(cards.length - 1, Math.round(track.scrollLeft / (stepW() || 1))));
        if (idx !== cur) { cur = idx; tick = 0; showCover(cards[cur], 0); setDots(); }
      }, 120);
    }, { passive: true });
    window.addEventListener("resize", () => go(cur, false));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    seriesCoverTimer = setInterval(() => {
      if (paused || document.hidden || Date.now() < resumeAt || !track.isConnected) return;
      tick++;
      if (tick < covers(cards[cur])) showCover(cards[cur], tick);
      else if (cards.length > 1) go(cur + 1);
      else { tick = 0; showCover(cards[cur], 0); }
    }, 1500);
  }

  const emptyMsg = (t, p) => `<div class="empty"><h3>${t}</h3><p>${p}</p></div>`;
  
  /* ---------- Home ---------- */
  function home() {
    if (!DATA.length) { $("main").innerHTML = `<div class="empty pad"><h3>No novels yet</h3></div>`; return; }
    const sl = seriesList();
    if (sl.length) { $("#sgrid").innerHTML = sl.map(x => scard(x, "series.html")).join(""); initSeriesCarousel($("#sgrid"));
        fitSeriesTitles($("#sgrid")); } else $("#series").hidden = true;
    const bk = (n, i, eager) => `<a class="bk" style="--i:${i}" href="${href(n)}">${cover(n, eager)}<h3>${n.title}</h3><p>${n.author}</p></a>`;
   
const latest = DATA.filter(n => n.addedAt)
.sort((a, b) =>
  b.addedAt.localeCompare(a.addedAt) ||
  DATA.indexOf(b) - DATA.indexOf(a)
)
.slice(0, 10);

if (latest.length) {
$("#latest-track").innerHTML =
  latest.map((n, i) => bk(n, i, true)).join("") +
  `<a class="latest-view-all" href="library.html" aria-label="View all novels" title="View all novels">
    <span>→</span>
    <small>View All</small>
  </a>`;
} else {
$("#latest").hidden = true;
}

$("#lib-track").innerHTML = DATA.slice(0, 12)
.map((n, i) => bk(n, i, false))
.join("");
  }
  
  /* ---------- Popular Series page ---------- */
  function seriesPage() {
    const all = seriesList(), input = $("#qs");
    const draw = () => {
      const w = input.value.toLowerCase().split(/\s+/).filter(Boolean);
      const hits = all.filter(x => w.every(t => x.s.toLowerCase().includes(t)));
      $("#count").textContent = `${hits.length} series`;
      $("#sgrid").innerHTML = hits.length ? hits.map(x => scard(x, href(firstPart(x)))).join("") : emptyMsg("No series found", "Try a different name."); initSeriesCoverRotations($("#sgrid"));
      fitSeriesTitles($("#sgrid"));
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
      $("#count").textContent = `${hits.length} ${hits.length === 1 ? "book" : "books"}`;
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
  /* SEO helpers (novel page): per-novel title, description, canonical, social tags and Book schema */
  function setMeta(key, val, attr = "name") {
    let m = document.head.querySelector(`meta[${attr}="${key}"]`);
    if (!m) { m = document.createElement("meta"); m.setAttribute(attr, key); document.head.appendChild(m); }
    m.setAttribute("content", val);
  }
  function seoNovel(n) {
    const url = `https://lorepdf.com/novel.html?id=${encodeURIComponent(n.id)}`;
    const base = `${n.title} by ${n.author}${n.series ? ` — ${n.series}${n.partLabel ? `, ${n.partLabel}` : ""}` : ""}.`;
    const desc = (base + " " + (n.description || "")).replace(/\s+/g, " ").trim().slice(0, 158);
    const title = `${n.title} by ${n.author} — Read Online | LorePDF`;
    document.title = title;
    let c = document.head.querySelector('link[rel="canonical"]');
    if (!c) { c = document.createElement("link"); c.rel = "canonical"; document.head.appendChild(c); }
    c.href = url;
    setMeta("description", desc);
    [["og:title", title], ["og:description", desc], ["og:url", url], ["og:image", n.cover], ["og:type", "book"]].forEach(([k, v]) => setMeta(k, v, "property"));
    [["twitter:title", title], ["twitter:description", desc], ["twitter:image", n.cover]].forEach(([k, v]) => setMeta(k, v));
    const book = { "@type": "Book", name: n.title, author: { "@type": "Person", name: n.author }, image: n.cover, description: desc, genre: n.genres, inLanguage: "en", url };
    if (n.series) book.isPartOf = { "@type": "BookSeries", name: n.series };
    if (n.part != null) book.position = n.part;
    const crumbs = { "@type": "BreadcrumbList", itemListElement: [["Home", "https://lorepdf.com/"], ["Library", "https://lorepdf.com/library.html"], [n.title, url]].map(([name, item], i) => ({ "@type": "ListItem", position: i + 1, name, item })) };
    let ldEl = document.getElementById("ld-novel");
    if (!ldEl) { ldEl = document.createElement("script"); ldEl.type = "application/ld+json"; ldEl.id = "ld-novel"; document.head.appendChild(ldEl); }
    ldEl.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": [book, crumbs] });
  }
  /* Back arrows: go to the previous page on this site, otherwise follow the link */
  function wireBack() {
    document.querySelectorAll(".back").forEach(a => { if (a.dataset.wired) return; a.dataset.wired = 1; a.addEventListener("click", e => { if (history.length > 1 && document.referrer.startsWith(location.origin)) { e.preventDefault(); history.back(); } }); });
  }

  function novelPage() {
    const root = $("#novel"), n = byId(new URLSearchParams(location.search).get("id"));
    if (!n) { document.title = "LorePDF — Not found"; setMeta("robots", "noindex, follow"); root.innerHTML = `<div class="empty pad"><h3>Novel not found</h3><p><a class="btn" href="index.html">Browse novels</a></p></div>`; return; }
    document.title = `${n.title} — LorePDF`; lbList = [...n.previews];
    const pn = (m, label) => m ? `<a class="pn" href="${href(m)}">${cover(m)}<span><small>${label}</small><b>${m.title}</b></span></a>` : "";
    const prev = n.previousPart && byId(n.previousPart), next = n.nextPart && byId(n.nextPart);
    const pre = n.prequel && byId(n.prequel.id);
    root.innerHTML = `
    <section class="nhero" style="--u:url(${esc(n.cover)})"><div class="wrap nb"><a class="back" href="index.html" aria-label="Back">←</a></div><div class="wrap np">
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
    wireBack(); seoNovel(n);
    root.querySelectorAll(".slide").forEach(b => b.onclick = () => showLb(+b.dataset.i));
    strip($("#pv"), $("#previews .arrows"), false);
  }
  
  wireBack();
  try { ({ home, series: seriesPage, library: libraryPage }[document.body.dataset.page] || novelPage)(); }
  catch (err) { console.error(err); const m = $("main"); if (m) m.innerHTML = `<div class="empty pad"><h3>Something went wrong</h3><p><a class="btn" href="index.html">Back to LorePDF</a></p></div>`; }