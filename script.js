/* ==========================================================
   CENTRALIZED NOVEL DATA SECTION
   ========================================================== */
   const novelsData = [
    {
        id: "fellowship-of-the-ring",
        title: "The Fellowship of the Ring",
        author: "J.R.R. Tolkien",
        cover: "https://i.pinimg.com/736x/4d/8c/eb/4d8ceb7c6e967c8c7948475e43791a2b.jpg",
        fullTitle: "The Fellowship of the Ring PART#1 of the legendary epic fantasy trilogy by J.R.R. Tolkien.",
        description: "The story begins in the peaceful Shire, where a young Hobbit named Frodo Baggins inherits a mysterious ancient ring, only to discover it is the dangerous \"One Ring\" forged by the Dark Lord Sauron. Frodo must embark on a perilous journey to destroy the ring in the fires of Mount Doom where it was created, in order to save the world of Middle-earth from ultimate darkness and destruction. Frodo is joined by a diverse group known as \"The Fellowship,\" consisting of men, elves, dwarves, and the wise wizard Gandalf, to help him face the forces of evil.",
        specialNote: "(This part is considered the cornerstone of one of the greatest and most famous fantasy series in the history of literature and cinema.)",
        category: "Epic Fantasy",
        series: "The Lord of the Rings",
        part: "Part #1",
        previousPart: null,
        nextPart: "two-towers",
        recommended: true,
        trending: false,
        previews: [
            "https://i.postimg.cc/Vfc9VNDD/Whats-App-Image-2026-10-07-at-19-07-35.jpg",
            "https://i.postimg.cc/0kxmCByF/Whats-App-Image-2026-10-07-at-19-03-57.jpg",
            "https://i.postimg.cc/xnqmgHn7/Whats-App-Image-2026-10-07-at-19-03-40.jpg"
        ],
        locker: {
            it: 4636058,
            key: "b7c51",
            configVariable: "YSPmh_aWk_wXYhvc",
            script: "https://d18k3i06xdslhs.cloudfront.net/b335986.js",
            openFunction: "_dS"
        }
    },
    {
        id: "two-towers",
        title: "The Two Towers",
        author: "J.R.R. Tolkien",
        cover: "https://i.pinimg.com/1200x/ce/54/b0/ce54b0ab1ec76b64d312a8ec4ac2c8f1.jpg",
        fullTitle: "The Two Towers, PART#2 of the legendary epic fantasy trilogy by J.R.R. Tolkien.",
        description: "The Fellowship is broken after a fierce battle; Frodo and Sam continue their journey to Mount Doom alone, while unknowingly tracked by the creature Gollum. The remaining members of the broken fellowship (Aragorn, Legolas, and Gimli) travel across Middle-earth to help the kingdoms of men unite and fight against the massive armies of the Dark Lord Sauron and the traitorous wizard Saruman. The heroic defense of Helm's Deep takes place, marking a massive turning point in the war as free peoples stand together against overwhelming darkness.",
        specialNote: null,
        category: "Epic Fantasy",
        series: "The Lord of the Rings",
        part: "Part #2",
        previousPart: "fellowship-of-the-ring",
        nextPart: "return-of-the-king",
        recommended: true,
        trending: true,
        previews: [
            "https://i.postimg.cc/d1KvdfP2/Screenshot-2026-10-07-at-20-58-28.png",
            "https://i.postimg.cc/xCyQPPn7/Screenshot-2026-10-07-at-20-58-36.png",
            "https://i.postimg.cc/Kc0Svjzt/Screenshot-2026-10-07-at-20-59-35.png"
        ],
        locker: {
            it: 4636061,
            key: "1034e",
            configVariable: "VStJp_gqV_QHJytc",
            script: "https://d1chbu4sfo2xhu.cloudfront.net/c79b3b5.js",
            openFunction: "_Yf"
        }
    },
    {
        id: "return-of-the-king",
        title: "The Return of the King",
        author: "J.R.R. Tolkien",
        cover: "https://i.pinimg.com/736x/5a/a6/8d/5aa68d9bf23a1766c5c0c58f8a8e234f.jpg",
        fullTitle: "The Return of the King, the #FINAL and climactic part of the legendary epic fantasy trilogy by J.R.R. Tolkien.",
        description: "Frodo and Sam reach the final stages of their harrowing journey across Mordor, guided by Gollum, facing immense physical and emotional exhaustion to finally cast the One Ring into Mount Doom. Aragorn steps up to claim his rightful place as king, leading the remaining forces of men in a desperate, massive final battle at the Black Gate to distract Sauron's attention and buy time for the Hobbits. The Dark Lord Sauron is defeated once and for all as the ring is destroyed, restoring peace to Middle-earth and bringing the legendary saga to a heroic and emotional close.",
        specialNote: null,
        category: "Epic Fantasy",
        series: "The Lord of the Rings",
        part: "Part #3 — Final Part",
        previousPart: "two-towers",
        nextPart: null,
        recommended: false,
        trending: true,
        previews: [
            "https://i.postimg.cc/Dw6ns6yk/Screenshot-2026-10-07-at-21-25-54.png",
            "https://i.postimg.cc/0jRLhK2S/Screenshot-2026-10-07-at-21-27-26.png",
            "https://i.postimg.cc/y8YwqHBy/Screenshot-2026-10-07-at-21-28-21.png"
        ],
        locker: {
            it: 4636062,
            key: "2c480",
            configVariable: "UfTnR_eMk_Ojdnqc",
            script: "https://d18k3i06xdslhs.cloudfront.net/0dc5ad5.js",
            openFunction: "_FD"
        }
    }
];

/* ==========================================================
   APPLICATION STATE & ROUTING
   ========================================================== */
let currentFilter = 'All';

window.addEventListener('DOMContentLoaded', () => {
    // Check if we are on index or novel page
    const viewHome = document.getElementById('view-home');
    const viewNovel = document.getElementById('view-novel');

    if (viewHome) {
        renderHomepage();
    }

    if (viewNovel) {
        // Parse novel ID from URL query parameters or hash
        const urlParams = new URLSearchParams(window.location.search);
        let novelId = urlParams.get('id');
        
        if (!novelId && window.location.hash.startsWith('#/novel/')) {
            novelId = window.location.hash.replace('#/novel/', '');
        }

        // Default to first novel if none specified
        if (!novelId && novelsData.length > 0) {
            novelId = novelsData[0].id;
        }

        const novel = novelsData.find(n => n.id === novelId);
        if (novel) {
            renderNovelPage(novel);
        } else {
            window.location.href = 'index.html';
        }
    }
});

function navigateTo(view, novelId = null) {
    if (view === 'home') {
        window.location.href = 'index.html';
    } else if (view === 'novel' && novelId) {
        window.location.href = `novel.html?id=${novelId}`;
    }
}

function scrollToSection(sectionId) {
    const el = document.getElementById(sectionId);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    } else {
        window.location.href = `index.html#${sectionId}`;
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('mobile-menu-icon');
    if (!menu || !icon) return;
    menu.classList.toggle('hidden');
    if (menu.classList.contains('hidden')) {
        icon.className = 'fa-solid fa-bars text-xl';
    } else {
        icon.className = 'fa-solid fa-xmark text-xl';
    }
}

/* ==========================================================
   HOMEPAGE RENDERING
   ========================================================== */
function renderHomepage() {
    renderCarousel();
    renderTrending();
    renderLibrary();
}

function renderCarousel() {
    const container = document.getElementById('recommended-carousel');
    if (!container) return;
    const recommendedBooks = novelsData.filter(n => n.recommended);
    
    container.innerHTML = recommendedBooks.map(novel => `
        <div class="flex-shrink-0 w-72 sm:w-80 snap-start bg-warm-beige-light border border-muted-gold/30 rounded-2xl overflow-hidden book-card-shadow flex flex-col cursor-pointer transition" onclick="navigateTo('novel', '${novel.id}')">
            <div class="h-96 w-full relative overflow-hidden bg-vintage-wood-dark">
                <img src="${novel.cover}" alt="${novel.title}" class="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500" onerror="this.src='https://placehold.co/400x600/3D2314/F4EAD5?text=LorePDF'">
                <div class="absolute top-3 left-3 bg-burgundy/90 text-warm-beige text-[11px] font-semibold uppercase px-3 py-1 rounded-full border border-muted-gold/40 shadow-md">
                    ${novel.part || novel.category}
                </div>
            </div>
            <div class="p-5 flex flex-col flex-grow justify-between">
                <div>
                    <span class="text-xs uppercase tracking-wider text-muted-gold font-semibold">${novel.author}</span>
                    <h3 class="font-serif text-2xl font-bold text-vintage-wood mt-1 leading-snug">${novel.title}</h3>
                    <p class="text-xs text-vintage-wood/70 mt-2 line-clamp-2">${novel.description}</p>
                </div>
                <div class="mt-4 pt-4 border-t border-vintage-wood/10 flex items-center justify-between">
                    <span class="text-xs font-bold text-burgundy uppercase tracking-wider">Read Now</span>
                    <div class="w-8 h-8 rounded-full bg-burgundy text-warm-beige flex items-center justify-center shadow">
                        <i class="fa-solid fa-arrow-right text-xs"></i>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function scrollCarousel(direction) {
    const container = document.getElementById('recommended-carousel');
    if (!container) return;
    const scrollAmount = 320;
    if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}

function renderTrending() {
    const container = document.getElementById('trending-grid');
    if (!container) return;
    const trendingBooks = novelsData.filter(n => n.trending);

    container.innerHTML = trendingBooks.map(novel => `
        <div class="bg-warm-beige border border-muted-gold/40 rounded-2xl overflow-hidden book-card-shadow flex flex-col sm:flex-row cursor-pointer transition" onclick="navigateTo('novel', '${novel.id}')">
            <div class="sm:w-1/3 h-64 sm:h-auto relative overflow-hidden bg-vintage-wood-dark">
                <img src="${novel.cover}" alt="${novel.title}" class="w-full h-full object-cover object-center" onerror="this.src='https://placehold.co/400x600/3D2314/F4EAD5?text=LorePDF'">
                <div class="absolute top-3 left-3 bg-burgundy text-warm-beige text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full border border-muted-gold/40">
                    Trending
                </div>
            </div>
            <div class="sm:w-2/3 p-6 flex flex-col justify-between">
                <div>
                    <div class="flex items-center justify-between">
                        <span class="text-xs uppercase tracking-wider text-muted-gold font-semibold">${novel.series}</span>
                        <span class="text-xs bg-vintage-wood/10 text-vintage-wood px-2.5 py-0.5 rounded-full font-medium">${novel.part}</span>
                    </div>
                    <h3 class="font-serif text-2xl font-bold text-vintage-wood mt-2">${novel.title}</h3>
                    <p class="text-xs text-vintage-wood/70 mt-1 font-medium">By ${novel.author}</p>
                    <p class="text-xs text-vintage-wood/80 mt-3 line-clamp-3 leading-relaxed">${novel.description}</p>
                </div>
                <div class="mt-6 pt-4 border-t border-vintage-wood/10 flex items-center justify-between">
                    <span class="text-xs font-bold text-burgundy uppercase tracking-wider flex items-center gap-1.5"><i class="fa-solid fa-book-open"></i> Read Now</span>
                    <span class="text-xs text-muted-gold font-semibold">Explore Part &rarr;</span>
                </div>
            </div>
        </div>
    `).join('');
}

function filterCategory(category) {
    currentFilter = category;
    
    document.querySelectorAll('.category-btn').forEach(btn => {
        if (btn.textContent.trim() === category || (category === 'All' && btn.textContent.trim() === 'All')) {
            btn.className = 'category-btn px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider bg-vintage-wood text-warm-beige border border-muted-gold transition shadow-sm active';
        } else {
            btn.className = 'category-btn px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider bg-warm-beige text-vintage-wood border border-vintage-wood/30 hover:bg-vintage-wood hover:text-warm-beige transition shadow-sm';
        }
    });

    renderLibrary();
}

function renderLibrary() {
    const container = document.getElementById('library-grid');
    if (!container) return;
    const filteredBooks = currentFilter === 'All' 
        ? novelsData 
        : novelsData.filter(n => n.category.toLowerCase() === currentFilter.toLowerCase());

    container.innerHTML = filteredBooks.map(novel => `
        <div class="bg-warm-beige-light border border-muted-gold/30 rounded-2xl overflow-hidden book-card-shadow flex flex-col cursor-pointer transition" onclick="navigateTo('novel', '${novel.id}')">
            <div class="h-80 w-full relative overflow-hidden bg-vintage-wood-dark">
                <img src="${novel.cover}" alt="${novel.title}" class="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500" onerror="this.src='https://placehold.co/400x600/3D2314/F4EAD5?text=LorePDF'">
                <div class="absolute top-3 left-3 bg-vintage-wood/90 text-warm-beige text-[11px] font-semibold uppercase px-3 py-1 rounded-full border border-muted-gold/40 shadow">
                    ${novel.category}
                </div>
                <div class="absolute top-3 right-3 bg-burgundy text-warm-beige text-[11px] font-semibold uppercase px-3 py-1 rounded-full border border-muted-gold/40 shadow">
                    ${novel.part}
                </div>
            </div>
            <div class="p-6 flex flex-col flex-grow justify-between">
                <div>
                    <span class="text-xs uppercase tracking-wider text-muted-gold font-semibold">${novel.author}</span>
                    <h3 class="font-serif text-2xl font-bold text-vintage-wood mt-1">${novel.title}</h3>
                    <p class="text-xs text-vintage-wood/70 mt-2 line-clamp-3 leading-relaxed">${novel.description}</p>
                </div>
                <div class="mt-6 pt-4 border-t border-vintage-wood/10 flex items-center justify-between">
                    <span class="text-xs font-bold text-burgundy uppercase tracking-wider">Read Now</span>
                    <div class="w-8 h-8 rounded-full bg-vintage-wood text-warm-beige flex items-center justify-center shadow hover:bg-burgundy transition">
                        <i class="fa-solid fa-arrow-right text-xs text-muted-gold"></i>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

/* ==========================================================
   NOVEL PAGE RENDERING & SERIES NAVIGATION
   ========================================================== */
function renderNovelPage(novel) {
    const container = document.getElementById('view-novel');
    if (!container) return;

    const prevNovel = novel.previousPart ? novelsData.find(n => n.id === novel.previousPart) : null;
    const nextNovel = novel.nextPart ? novelsData.find(n => n.id === novel.nextPart) : null;

    container.innerHTML = `
        <div class="py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            
            <!-- Breadcrumb Navigation -->
            <div class="flex items-center space-x-2 text-xs uppercase tracking-wider text-vintage-wood/70 mb-8 font-medium">
                <button onclick="navigateTo('home')" class="hover:text-burgundy">Home</button>
                <span>/</span>
                <span>${novel.series || 'Library'}</span>
                <span>/</span>
                <span class="text-burgundy font-bold">${novel.part}</span>
            </div>

            <!-- Main Novel Header Card -->
            <div class="bg-warm-beige-light border-2 border-muted-gold/40 rounded-3xl p-6 sm:p-10 book-card-shadow mb-12">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    
                    <!-- Cover Image -->
                    <div class="lg:col-span-5 flex justify-center">
                        <div class="w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border-4 border-vintage-wood/20 bg-vintage-wood-dark">
                            <img src="${novel.cover}" alt="${novel.title}" class="w-full h-auto object-cover" onerror="this.src='https://placehold.co/400x600/3D2314/F4EAD5?text=LorePDF'">
                        </div>
                    </div>

                    <!-- Novel Details & Actions -->
                    <div class="lg:col-span-7 flex flex-col justify-between h-full">
                        <div>
                            <div class="flex flex-wrap items-center gap-2 mb-3">
                                <span class="bg-burgundy text-warm-beige text-xs font-bold uppercase px-3 py-1 rounded-full border border-muted-gold/40">${novel.part}</span>
                                <span class="bg-vintage-wood text-warm-beige text-xs font-semibold uppercase px-3 py-1 rounded-full">${novel.category}</span>
                                <span class="text-xs uppercase tracking-widest text-muted-gold font-bold">${novel.series}</span>
                            </div>

                            <h1 class="font-serif text-3xl sm:text-5xl font-bold text-vintage-wood leading-tight mb-2">${novel.title}</h1>
                            <p class="text-sm font-semibold uppercase tracking-wider text-vintage-wood/70 mb-4">Author: <span class="text-burgundy">${novel.author}</span></p>

                            <p class="font-serif italic text-lg sm:text-xl text-vintage-wood/90 border-l-4 border-muted-gold pl-4 py-1 my-4">${novel.fullTitle}</p>

                            ${novel.specialNote ? `<p class="text-xs text-burgundy font-medium bg-burgundy/10 p-3 rounded-xl border border-burgundy/20 mb-4">${novel.specialNote}</p>` : ''}

                            <div class="prose text-vintage-wood/80 text-sm sm:text-base leading-relaxed mb-8">
                                <p>${novel.description}</p>
                            </div>
                        </div>

                        <!-- Read Now Button -->
                        <div class="pt-6 border-t border-vintage-wood/20 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                            <button onclick="openContentLocker('${novel.id}')" class="flex-1 bg-burgundy hover:bg-burgundy-dark text-warm-beige font-bold text-lg uppercase tracking-wider py-4 px-8 rounded-2xl shadow-xl border border-muted-gold/60 transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-3">
                                <i class="fa-solid fa-book-open-reader text-muted-gold"></i>
                                <span>Read Now</span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <!-- Preview Gallery Section -->
            <div class="mb-12">
                <div class="border-b border-vintage-wood/20 pb-4 mb-6">
                    <span class="text-xs uppercase tracking-widest text-burgundy font-bold">Visual Atmosphere</span>
                    <h2 class="font-serif text-2xl sm:text-3xl font-bold text-vintage-wood">Preview Gallery</h2>
                </div>
                
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    ${novel.previews.map((imgUrl, idx) => `
                        <div class="rounded-2xl overflow-hidden border-2 border-muted-gold/30 shadow-lg bg-vintage-wood-dark h-64 sm:h-72 relative group">
                            <img src="${imgUrl}" alt="${novel.title} Preview ${idx + 1}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" onerror="this.src='https://placehold.co/600x400/3D2314/F4EAD5?text=Preview+${idx+1}'">
                            <div class="absolute inset-0 bg-vintage-wood/20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                                <span class="text-xs text-warm-beige bg-vintage-wood/80 px-3 py-1 rounded-full font-mono">Preview #${idx + 1}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Series Navigation -->
            <div class="bg-vintage-wood text-warm-beige rounded-3xl p-6 sm:p-8 border border-muted-gold/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
                
                <div class="w-full sm:w-auto">
                    ${prevNovel ? `
                        <button onclick="navigateTo('novel', '${prevNovel.id}')" class="w-full sm:w-auto flex items-center space-x-3 bg-vintage-wood-dark hover:bg-burgundy text-warm-beige px-6 py-3 rounded-2xl border border-muted-gold/40 transition group">
                            <i class="fa-solid fa-arrow-left text-muted-gold group-hover:-translate-x-1 transition"></i>
                            <div class="text-left">
                                <span class="block text-[10px] uppercase tracking-widest text-muted-gold">Previous Part</span>
                                <span class="font-serif text-base font-bold">${prevNovel.title}</span>
                            </div>
                        </button>
                    ` : '<div></div>'}
                </div>

                <div class="text-center">
                    <span class="font-serif text-lg italic text-muted-gold">${novel.series}</span>
                </div>

                <div class="w-full sm:w-auto text-right">
                    ${nextNovel ? `
                        <button onclick="navigateTo('novel', '${nextNovel.id}')" class="w-full sm:w-auto flex items-center justify-end space-x-3 bg-vintage-wood-dark hover:bg-burgundy text-warm-beige px-6 py-3 rounded-2xl border border-muted-gold/40 transition group">
                            <div class="text-right">
                                <span class="block text-[10px] uppercase tracking-widest text-muted-gold">Next Part</span>
                                <span class="font-serif text-base font-bold">${nextNovel.title}</span>
                            </div>
                            <i class="fa-solid fa-arrow-right text-muted-gold group-hover:translate-x-1 transition"></i>
                        </button>
                    ` : '<div></div>'}
                </div>

            </div>

        </div>
    `;
}

/* ==========================================================
   CONTENT LOCKER ARCHITECTURE
   ========================================================== */
let activeLockerScript = null;

function openContentLocker(novelId) {
    const novel = novelsData.find(n => n.id === novelId);
    if (!novel || !novel.locker) return;

    const lockerInfo = novel.locker;

    if (activeLockerScript && activeLockerScript.parentNode) {
        activeLockerScript.parentNode.removeChild(activeLockerScript);
        activeLockerScript = null;
    }

    novelsData.forEach(n => {
        if (n.locker && n.locker.configVariable && window[n.locker.configVariable]) {
            try {
                delete window[n.locker.configVariable];
            } catch (e) {
                window[n.locker.configVariable] = undefined;
            }
        }
    });

    window[lockerInfo.configVariable] = {
        it: lockerInfo.it,
        key: lockerInfo.key
    };

    const scriptTag = document.createElement('script');
    scriptTag.type = 'text/javascript';
    scriptTag.src = lockerInfo.script;
    scriptTag.async = true;

    scriptTag.onload = () => {
        if (typeof window[lockerInfo.openFunction] === 'function') {
            try {
                window[lockerInfo.openFunction]();
            } catch (err) {
                console.error('Locker execution error:', err);
            }
        } else {
            console.warn(`Locker function ${lockerInfo.openFunction} not immediately available or loaded.`);
        }
    };

    scriptTag.onerror = () => {
        console.error('Failed to load locker script:', lockerInfo.script);
    };

    document.body.appendChild(scriptTag);
    activeLockerScript = scriptTag;
}

/* ==========================================================
   PROFESSIONAL SEARCH SYSTEM
   ========================================================== */
function openSearchModal() {
    const modal = document.getElementById('search-modal');
    if (!modal) return;
    modal.classList.remove('hidden');
    const input = document.getElementById('search-input');
    if (input) {
        input.value = '';
        setTimeout(() => input.focus(), 50);
    }
    renderSearchResults('');
}

function closeSearchModal() {
    const modal = document.getElementById('search-modal');
    if (modal) modal.classList.add('hidden');
}

window.addEventListener('click', (e) => {
    const modal = document.getElementById('search-modal');
    if (e.target === modal) {
        closeSearchModal();
    }
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeSearchModal();
    }
});

function handleSearchInput(e) {
    const query = e.target.value.trim();
    renderSearchResults(query);
}

function renderSearchResults(query) {
    const container = document.getElementById('search-results-container');
    if (!container) return;
    
    if (!query) {
        container.innerHTML = `
            <div class="text-center py-12 text-vintage-wood/60 font-serif italic text-lg">
                Type a title, author, category, or series to explore the archives instantly...
            </div>
        `;
        return;
    }

    const searchTerms = query.toLowerCase().split(/\s+/);
    const results = novelsData.filter(novel => {
        const searchableText = `${novel.title} ${novel.author} ${novel.category} ${novel.series} ${novel.part} ${novel.description}`.toLowerCase();
        return searchTerms.every(term => searchableText.includes(term));
    });

    if (results.length === 0) {
        container.innerHTML = `
            <div class="text-center py-12">
                <i class="fa-solid fa-book-skull text-4xl text-vintage-wood/40 mb-3"></i>
                <h3 class="font-serif text-2xl font-bold text-vintage-wood">No literary matches found</h3>
                <p class="text-sm text-vintage-wood/70 mt-1">Try searching for "Tolkien", "Fellowship", "Epic Fantasy", or "Ring".</p>
            </div>
        `;
        return;
    }

    container.innerHTML = results.map(novel => `
        <div onclick="closeSearchModal(); navigateTo('novel', '${novel.id}');" class="flex items-center space-x-4 p-4 rounded-2xl bg-warm-beige-light border border-muted-gold/30 hover:bg-burgundy/10 cursor-pointer transition shadow-sm">
            <img src="${novel.cover}" alt="${novel.title}" class="w-16 h-24 object-cover rounded-lg border border-vintage-wood/20 shadow flex-shrink-0" onerror="this.src='https://placehold.co/100x150/3D2314/F4EAD5?text=LorePDF'">
            <div class="flex-grow">
                <div class="flex items-center space-x-2">
                    <span class="text-[10px] font-bold uppercase px-2 py-0.5 bg-burgundy text-warm-beige rounded-full">${novel.part}</span>
                    <span class="text-xs uppercase tracking-wider text-muted-gold font-semibold">${novel.category}</span>
                </div>
                <h4 class="font-serif text-xl font-bold text-vintage-wood mt-1">${novel.title}</h4>
                <p class="text-xs text-vintage-wood/70">By ${novel.author} &bull; ${novel.series}</p>
            </div>
            <div class="w-10 h-10 rounded-full bg-vintage-wood text-warm-beige flex items-center justify-center flex-shrink-0">
                <i class="fa-solid fa-arrow-right text-xs text-muted-gold"></i>
            </div>
        </div>
    `).join('');
}