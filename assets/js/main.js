/**
 * OTOPOL OTOMOTİV - CARNATION THEME JAVASCRIPT
 * Filtreleme, Popüler Markalar, Araç Arama Aracı, Modal ve WhatsApp Entegrasyonları
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. İşletme Bilgilerini Sayfaya Yerleştir
    injectConfigData();

    // 2. İlk Araç Listesini Oluştur
    renderVehicles(VEHICLES_DATA);

    // 3. Etkinlik Dinleyicilerini Başlat
    initEventListeners();

    // 4. Hero Slider Başlat
    initHeroSlider();
});

// Küresel Filtreleme Durumu
let currentCategory = 'all';
let currentBrand = 'all';
let currentSearchTerm = '';
let currentSort = 'featured';

/**
 * İşletme bilgilerini dinamik olarak HTML öğelerine bağlar
 */
function injectConfigData() {
    // Telefon numaraları
    document.querySelectorAll('.js-phone-display').forEach(el => {
        el.textContent = GALLERY_CONFIG.phone;
    });
    document.querySelectorAll('.js-phone-link').forEach(el => {
        el.href = `tel:${GALLERY_CONFIG.phoneRaw}`;
    });

    // WhatsApp bağlantıları
    const defaultWaMsg = encodeURIComponent(`Merhaba ${GALLERY_CONFIG.fullName}, araçlarınız hakkında bilgi almak istiyorum.`);
    document.querySelectorAll('.js-whatsapp-link').forEach(el => {
        el.href = `https://wa.me/${GALLERY_CONFIG.phoneRaw}?text=${defaultWaMsg}`;
    });

    // Adres bilgileri
    document.querySelectorAll('.js-address-display').forEach(el => {
        el.textContent = GALLERY_CONFIG.address;
    });
    document.querySelectorAll('.js-short-address').forEach(el => {
        el.textContent = GALLERY_CONFIG.shortAddress;
    });
    document.querySelectorAll('.js-maps-link').forEach(el => {
        el.href = GALLERY_CONFIG.googleMapsDirect;
    });

    // Sahibinden Mağaza Linkleri
    document.querySelectorAll('.js-sahibinden-store').forEach(el => {
        el.href = GALLERY_CONFIG.sahibindenStoreUrl;
    });

    // Çalışma Saatleri
    document.querySelectorAll('.js-working-hours').forEach(el => {
        el.textContent = GALLERY_CONFIG.workingHours;
    });
}

/**
 * Araç Kartlarını Render Eder (Carnation Template Card Design)
 */
function renderVehicles(vehicles) {
    const container = document.getElementById('vehicle-grid');
    const countEl = document.getElementById('vehicle-count');

    if (!container) return;

    if (countEl) {
        countEl.textContent = `${vehicles.length} Araç Listeleniyor`;
    }

    if (vehicles.length === 0) {
        container.innerHTML = `
            <div class="col-span-full py-16 text-center bg-white rounded-2xl border border-slate-200 shadow-sm">
                <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-50 text-[#ff5500] mb-4 border border-orange-200">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h3 class="text-xl font-black text-slate-900 mb-2 uppercase">Aradığınız Kriterlere Uygun Araç Bulunamadı</h3>
                <p class="text-slate-500 mb-6 text-sm">Lütfen filtreleri sıfırlayın veya farklı bir arama yapın.</p>
                <button onclick="resetFilters()" class="px-7 py-3 bg-[#ff5500] hover:bg-[#e04b00] text-white font-black text-xs uppercase tracking-wider rounded-sm transition-all shadow-md">
                    Filtreleri Sıfırla
                </button>
            </div>
        `;
        return;
    }

    container.innerHTML = vehicles.map(vehicle => {
        const waText = encodeURIComponent(
            `Merhaba ${GALLERY_CONFIG.fullName}, sitenizdeki "${vehicle.title}" (${vehicle.year} - ${formatPriceTL(vehicle.price)}) ilanı hakkında detaylı bilgi almak istiyorum.`
        );
        const waLink = `https://wa.me/${GALLERY_CONFIG.phoneRaw}?text=${waText}`;

        return `
            <article class="bg-white border border-slate-200 rounded-sm overflow-hidden flex flex-col group hover:shadow-2xl hover:border-slate-300 transition-all duration-300" data-id="${vehicle.id}">
                <!-- Araç Görseli & Sahibinden Rozeti -->
                <div class="card-image-wrap h-60 bg-slate-100 relative cursor-pointer" onclick="openVehicleModal('${vehicle.id}')">
                    <img 
                        src="${vehicle.image}" 
                        alt="${vehicle.title}" 
                        loading="lazy"
                        referrerpolicy="no-referrer"
                        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    <!-- Sahibinden Rozeti (Sol Üst) -->
                    <div class="absolute top-3 left-3 flex items-center gap-1.5 bg-[#ffd000] text-slate-950 px-2.5 py-1 text-xs font-black rounded-sm shadow-md">
                        <span class="w-1.5 h-1.5 rounded-full bg-slate-950"></span>
                        <span>sahibinden.com</span>
                    </div>

                    ${vehicle.badges[0] ? `
                        <div class="absolute top-3 right-3 bg-black/75 backdrop-blur-sm text-white px-2 py-0.5 text-[11px] font-bold rounded-sm border border-white/20">
                            ${vehicle.badges[0]}
                        </div>
                    ` : ''}
                </div>

                <!-- Kart Gövdesi (Carnation Layout) -->
                <div class="p-5 flex-1 flex flex-col justify-between">
                    <div>
                        <!-- Başlık & İmzalı Kesik Turuncu Fiyat Rozeti -->
                        <div class="flex items-start justify-between gap-2 mb-2">
                            <h3 class="text-base font-black text-slate-900 uppercase tracking-tight group-hover:text-[#ff5500] transition-colors line-clamp-1 cursor-pointer" onclick="openVehicleModal('${vehicle.id}')">
                                ${vehicle.title}
                            </h3>
                            <div class="carnation-price-badge shrink-0">
                                ${formatPriceTL(vehicle.price)}
                            </div>
                        </div>

                        <!-- Model Yılı -->
                        <div class="text-xs text-slate-500 font-medium mb-3">
                            Model Yılı : <strong class="text-slate-800 font-bold">${vehicle.year}</strong>
                        </div>

                        <!-- İnce Ayırıcı Çizgi -->
                        <div class="h-px bg-slate-100 my-3"></div>

                        <!-- 3'lü Özellik Sütunları (Carnation Icons) -->
                        <div class="grid grid-cols-3 gap-2 py-1 text-xs text-slate-600 font-medium">
                            <div class="flex items-center gap-1.5">
                                <svg class="w-4 h-4 text-[#ff5500] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span class="truncate">${vehicle.transmission.split(' ')[0]}</span>
                            </div>
                            <div class="flex items-center gap-1.5">
                                <svg class="w-4 h-4 text-[#ff5500] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                                <span class="truncate">${vehicle.fuel.split(' ')[0]}</span>
                            </div>
                            <div class="flex items-center gap-1.5">
                                <svg class="w-4 h-4 text-[#ff5500] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                <span class="truncate font-bold text-slate-800">${formatKm(vehicle.km)}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Aksiyon Butonları -->
                    <div class="pt-4 mt-3 border-t border-slate-100 flex items-center gap-2">
                        <!-- Sahibinden.com Butonu -->
                        <a 
                            href="${vehicle.sahibindenUrl}" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            class="flex-1 bg-slate-100 hover:bg-[#ffd000] hover:text-slate-950 text-slate-700 text-xs font-bold py-2 px-3 rounded-sm flex items-center justify-center gap-1 transition-all"
                            title="Sahibinden'de Gör"
                        >
                            <span>Sahibinden</span>
                        </a>

                        <!-- WhatsApp Bilgi Al -->
                        <a 
                            href="${waLink}" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            class="flex-1 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold py-2 px-3 rounded-sm flex items-center justify-center gap-1.5 transition-all shadow-sm"
                            title="WhatsApp'tan Yazın"
                        >
                            <svg class="w-3.5 h-3.5 fill-white shrink-0" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.37c1.45.78 3.08 1.2 4.74 1.2 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C17.18 3.03 14.69 2 12.04 2zm5.43 12.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.66.15-.2.29-.77.96-.94 1.16-.17.2-.35.22-.64.07-.29-.15-1.24-.46-2.36-1.46-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.3-.49.1-.2.05-.37-.03-.52-.08-.14-.67-1.6-.92-2.19-.24-.57-.48-.49-.66-.5-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.29-1.03 1-1.03 2.44 0 1.44 1.05 2.83 1.2 3.03.15.2 2.05 3.16 4.99 4.43.7.3 1.25.48 1.67.62.7.22 1.34.19 1.85.12.56-.09 1.73-.71 1.97-1.39.25-.68.25-1.27.17-1.39-.07-.12-.26-.17-.46-.31z"/>
                            </svg>
                            <span>WhatsApp</span>
                        </a>

                        <!-- Detay İncele -->
                        <button 
                            type="button" 
                            onclick="openVehicleModal('${vehicle.id}')"
                            class="p-2 bg-slate-900 hover:bg-[#ff5500] text-white rounded-sm transition-all"
                            title="Detaylı Özellikler"
                        >
                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </article>
        `;
    }).join('');
}

/**
 * Filtreleme & Arama Uygula
 */
function applyFilters() {
    let result = [...VEHICLES_DATA];

    // Kategori Filtresi
    if (currentCategory !== 'all') {
        if (currentCategory === 'quattro') {
            result = result.filter(v => v.traction.toLowerCase().includes('quattro') || v.traction.includes('4x4'));
        } else {
            result = result.filter(v => v.category === currentCategory);
        }
    }

    // Marka Filtresi
    if (currentBrand !== 'all') {
        result = result.filter(v => v.title.toLowerCase().includes(currentBrand.toLowerCase()));
    }

    // Arama Filtresi (Başlık, model, yakıt, vites, renk)
    if (currentSearchTerm.trim() !== '') {
        const query = currentSearchTerm.toLowerCase().trim();
        result = result.filter(v => 
            v.title.toLowerCase().includes(query) ||
            v.subtitle.toLowerCase().includes(query) ||
            v.year.toString().includes(query) ||
            v.fuel.toLowerCase().includes(query) ||
            v.transmission.toLowerCase().includes(query)
        );
    }

    // Sıralama
    if (currentSort === 'price-asc') {
        result.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-desc') {
        result.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'year-desc') {
        result.sort((a, b) => b.year - a.year);
    } else if (currentSort === 'km-asc') {
        result.sort((a, b) => a.km - b.km);
    }

    renderVehicles(result);
}

/**
 * Popüler Marka Kutusuna Tıklandığında Filtreler
 */
function filterByBrand(brand) {
    currentBrand = brand;
    currentCategory = 'all';

    // Marka kutularındaki aktifliği güncelle
    document.querySelectorAll('.brand-tile').forEach(tile => {
        if (tile.dataset.brand === brand) {
            tile.classList.add('active');
        } else {
            tile.classList.remove('active');
        }
    });

    // İlanlar bölümüne pürüzsüz kaydır
    const ilanlarSec = document.getElementById('ilanlar');
    if (ilanlarSec) {
        ilanlarSec.scrollIntoView({ behavior: 'smooth' });
    }

    applyFilters();
}

/**
 * "LOOKING FOR A CAR?" Arama Aracı Formunu Yönetir
 */
function handleCarFinderSubmit(e) {
    if (e) e.preventDefault();

    const makeSelect = document.getElementById('finder-make')?.value || 'all';
    const bodySelect = document.getElementById('finder-body')?.value || 'all';
    const statusSelect = document.getElementById('finder-status')?.value || 'all';
    const priceSelect = document.getElementById('finder-price')?.value || 'all';

    currentBrand = makeSelect !== 'all' ? makeSelect : 'all';
    currentCategory = bodySelect !== 'all' ? bodySelect : 'all';

    let filtered = [...VEHICLES_DATA];

    if (currentBrand !== 'all') {
        filtered = filtered.filter(v => v.title.toLowerCase().includes(currentBrand.toLowerCase()));
    }
    if (currentCategory !== 'all') {
        filtered = filtered.filter(v => v.category === currentCategory);
    }
    if (priceSelect !== 'all') {
        const [min, max] = priceSelect.split('-').map(Number);
        if (max) {
            filtered = filtered.filter(v => v.price >= min && v.price <= max);
        } else {
            filtered = filtered.filter(v => v.price >= min);
        }
    }

    renderVehicles(filtered);

    // İlanlar bölümüne kaydır
    const ilanlarSec = document.getElementById('ilanlar');
    if (ilanlarSec) {
        ilanlarSec.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * Tüm Araçları Göster (Show All Cars)
 */
function showAllCars() {
    resetFilters();
    const ilanlarSec = document.getElementById('ilanlar');
    if (ilanlarSec) {
        ilanlarSec.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * Filtreleri Sıfırlama
 */
function resetFilters() {
    currentCategory = 'all';
    currentBrand = 'all';
    currentSearchTerm = '';
    currentSort = 'featured';

    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.value = '';

    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) sortSelect.value = 'featured';

    const finderMake = document.getElementById('finder-make');
    if (finderMake) finderMake.value = 'all';

    const finderBody = document.getElementById('finder-body');
    if (finderBody) finderBody.value = 'all';

    document.querySelectorAll('.brand-tile').forEach(tile => tile.classList.remove('active'));

    document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.dataset.category === 'all') {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    renderVehicles(VEHICLES_DATA);
}

/**
 * Event Listener Başlatıcı
 */
function initEventListeners() {
    // 1. Kategori Butonları (All Seller, Sedan, SUV, Spor)
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            currentCategory = e.currentTarget.dataset.category || 'all';
            currentBrand = 'all';
            document.querySelectorAll('.brand-tile').forEach(t => t.classList.remove('active'));
            applyFilters();
        });
    });

    // 2. Arama Girişi
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearchTerm = e.target.value;
            applyFilters();
        });
    }

    // 3. Sıralama Seçimi
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            applyFilters();
        });
    }

    // 4. Car Finder Formu
    const finderForm = document.getElementById('car-finder-form');
    if (finderForm) {
        finderForm.addEventListener('submit', handleCarFinderSubmit);
    }

    // 5. Mobil Menü Aç/Kapa
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // 6. Takas Formu Gönderimi
    const tradeInForm = document.getElementById('trade-in-form');
    if (tradeInForm) {
        tradeInForm.addEventListener('submit', handleTradeInSubmit);
    }
}

/**
 * Araç Detay Modalını Açar
 */
function openVehicleModal(id) {
    const vehicle = VEHICLES_DATA.find(v => v.id === id);
    if (!vehicle) return;

    const modal = document.getElementById('vehicle-modal');
    const modalContent = document.getElementById('modal-vehicle-content');
    if (!modal || !modalContent) return;

    const waText = encodeURIComponent(
        `Merhaba ${GALLERY_CONFIG.fullName}, "${vehicle.title}" (${vehicle.year} Model - Fiyat: ${formatPriceTL(vehicle.price)}) hakkında ekspertiz ve satın alma detaylarını öğrenmek istiyorum.`
    );
    const waLink = `https://wa.me/${GALLERY_CONFIG.phoneRaw}?text=${waText}`;

    modalContent.innerHTML = `
        <div class="relative bg-white text-slate-800">
            <!-- Modal Başlığı ve Kapat Butonu -->
            <div class="flex items-start justify-between p-6 border-b border-slate-200 bg-slate-50">
                <div>
                    <div class="flex items-center gap-2 mb-1">
                        <span class="bg-[#ffd000] text-slate-950 text-xs px-2.5 py-0.5 rounded font-bold">sahibinden.com</span>
                        <span class="text-xs text-[#ff5500] font-black bg-orange-50 border border-orange-200 px-2 py-0.5 rounded">${vehicle.year} Model</span>
                    </div>
                    <h2 class="text-2xl font-black text-slate-950 uppercase">${vehicle.title}</h2>
                    <p class="text-sm text-slate-500 mt-0.5">${vehicle.subtitle}</p>
                </div>
                <button onclick="closeVehicleModal()" class="text-slate-500 hover:text-slate-950 p-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 transition-colors shadow-sm">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <!-- Modal Gövdesi -->
            <div class="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
                <!-- Ana Görsel -->
                <div class="rounded-xl overflow-hidden h-72 md:h-96 relative bg-slate-100">
                    <img id="modal-main-img" src="${vehicle.image}" alt="${vehicle.title}" referrerpolicy="no-referrer" class="w-full h-full object-cover">
                    <div class="absolute bottom-4 left-4 bg-slate-950/90 backdrop-blur-md px-4 py-2.5 rounded-sm border border-white/20 shadow-lg">
                        <span class="text-[11px] text-slate-300 block font-medium uppercase tracking-wider">Satış Fiyatı</span>
                        <span class="text-2xl font-black text-[#ff5500]">${formatPriceTL(vehicle.price)}</span>
                    </div>
                </div>

                <!-- Fotoğraf Galerisi Seçici -->
                ${vehicle.gallery && vehicle.gallery.length > 1 ? `
                    <div class="flex gap-2 overflow-x-auto pb-2">
                        ${vehicle.gallery.map(img => `
                            <img 
                                src="${img}" 
                                referrerpolicy="no-referrer"
                                onclick="document.getElementById('modal-main-img').src='${img}'"
                                class="w-20 h-16 object-cover rounded-sm border border-slate-200 cursor-pointer hover:border-[#ff5500] transition-all shrink-0 shadow-sm" 
                            />
                        `).join('')}
                    </div>
                ` : ''}

                <!-- Teknik Özellik Tablosu -->
                <div>
                    <h3 class="text-xs font-black text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                        <span class="w-1 h-3.5 bg-[#ff5500] inline-block"></span>
                        Teknik Özellikler & Detaylar
                    </h3>
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
                        <div class="p-3 rounded-sm bg-slate-50 border border-slate-200">
                            <span class="text-xs text-slate-500 block font-medium">Model Yılı</span>
                            <span class="font-bold text-slate-900">${vehicle.year}</span>
                        </div>
                        <div class="p-3 rounded-sm bg-slate-50 border border-slate-200">
                            <span class="text-xs text-slate-500 block font-medium">Kilometre</span>
                            <span class="font-bold text-slate-900">${formatKm(vehicle.km)}</span>
                        </div>
                        <div class="p-3 rounded-sm bg-slate-50 border border-slate-200">
                            <span class="text-xs text-slate-500 block font-medium">Yakıt Tipi</span>
                            <span class="font-bold text-slate-900">${vehicle.fuel}</span>
                        </div>
                        <div class="p-3 rounded-sm bg-slate-50 border border-slate-200">
                            <span class="text-xs text-slate-500 block font-medium">Vites Türü</span>
                            <span class="font-bold text-slate-900">${vehicle.transmission}</span>
                        </div>
                        <div class="p-3 rounded-sm bg-slate-50 border border-slate-200">
                            <span class="text-xs text-slate-500 block font-medium">Motor Gücü</span>
                            <span class="font-bold text-slate-900">${vehicle.enginePower}</span>
                        </div>
                        <div class="p-3 rounded-sm bg-slate-50 border border-slate-200">
                            <span class="text-xs text-slate-500 block font-medium">Çekiş</span>
                            <span class="font-bold text-slate-900">${vehicle.traction}</span>
                        </div>
                        <div class="p-3 rounded-sm bg-slate-50 border border-slate-200">
                            <span class="text-xs text-slate-500 block font-medium">Renk</span>
                            <span class="font-bold text-slate-900">${vehicle.color}</span>
                        </div>
                        <div class="p-3 rounded-sm bg-emerald-50 border border-emerald-200 col-span-2">
                            <span class="text-xs text-emerald-800 block font-bold">Ekspertiz / Tramer Durumu</span>
                            <span class="font-bold text-emerald-950">${vehicle.damageStatus}</span>
                        </div>
                    </div>
                </div>

                <!-- Donanım ve Artılar -->
                <div>
                    <h3 class="text-xs font-black text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                        <span class="w-1 h-3.5 bg-[#ff5500] inline-block"></span>
                        Öne Çıkan Donanımlar
                    </h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                        ${vehicle.features.map(f => `
                            <div class="flex items-center gap-2 p-2.5 rounded-sm bg-slate-50 border border-slate-200">
                                <svg class="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                                <span class="font-medium">${f}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Açıklama -->
                <div class="p-4 rounded-sm bg-slate-50 border border-slate-200">
                    <h4 class="text-xs text-[#ff5500] uppercase font-black mb-1">Galeri Notu</h4>
                    <p class="text-sm text-slate-700 leading-relaxed">${vehicle.description}</p>
                </div>
            </div>

            <!-- Modal Alt Butonları -->
            <div class="p-6 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row gap-3">
                <a 
                    href="${vehicle.sahibindenUrl}" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="sahibinden-btn flex-1 py-3.5 px-4 rounded-sm text-center text-sm font-black flex items-center justify-center gap-2 shadow-md border border-amber-400 hover:shadow-lg transition-all"
                >
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                    </svg>
                    <span>Sahibinden.com İlanını Aç</span>
                </a>

                <a 
                    href="${waLink}" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="bg-[#25D366] hover:bg-[#20ba59] text-white flex-1 py-3.5 px-4 rounded-sm text-center text-sm font-black flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 border border-emerald-400/40 hover:shadow-lg transition-all"
                >
                    <svg class="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.37c1.45.78 3.08 1.2 4.74 1.2 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C17.18 3.03 14.69 2 12.04 2zm5.43 12.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.66.15-.2.29-.77.96-.94 1.16-.17.2-.35.22-.64.07-.29-.15-1.24-.46-2.36-1.46-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.3-.49.1-.2.05-.37-.03-.52-.08-.14-.67-1.6-.92-2.19-.24-.57-.48-.49-.66-.5-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.29-1.03 1-1.03 2.44 0 1.44 1.05 2.83 1.2 3.03.15.2 2.05 3.16 4.99 4.43.7.3 1.25.48 1.67.62.7.22 1.34.19 1.85.12.56-.09 1.73-.71 1.97-1.39.25-.68.25-1.27.17-1.39-.07-.12-.26-.17-.46-.31z"/>
                    </svg>
                    <span>WhatsApp İle Teklif Al</span>
                </a>

                <a 
                    href="tel:${GALLERY_CONFIG.phoneRaw}" 
                    class="bg-slate-950 hover:bg-slate-900 text-white py-3.5 px-5 rounded-sm text-center text-sm font-black flex items-center justify-center gap-2 border border-slate-800 shadow-md hover:shadow-lg transition-all"
                >
                    <svg class="w-4 h-4 text-[#ff5500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    <span>Hemen Ara</span>
                </a>
            </div>
        </div>
    `;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

/**
 * Araç Detay Modalını Kapatır
 */
function closeVehicleModal() {
    const modal = document.getElementById('vehicle-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

/**
 * Takas / Değerleme Formu Gönderildiğinde WhatsApp'a Yönlendirir
 */
function handleTradeInSubmit(e) {
    e.preventDefault();

    const carBrand = document.getElementById('form-car-brand')?.value || '';
    const carModel = document.getElementById('form-car-model')?.value || '';
    const carYear = document.getElementById('form-car-year')?.value || '';
    const carKm = document.getElementById('form-car-km')?.value || '';
    const customerName = document.getElementById('form-name')?.value || '';
    const customerPhone = document.getElementById('form-phone')?.value || '';
    const note = document.getElementById('form-note')?.value || '';

    const text = `*OTOPOL Web Sitesi - Araç Değerleme / Takas Talebi*
---------------------------
*Ad Soyad:* ${customerName}
*Telefon:* ${customerPhone}
*Araç Marka/Seri:* ${carBrand} ${carModel}
*Model Yılı:* ${carYear}
*Kilometre:* ${carKm} km
*Not/Açıklama:* ${note}
---------------------------
Aracımı değerinde satmak / takas teklifi almak istiyorum.`;

    const waUrl = `https://wa.me/${GALLERY_CONFIG.phoneRaw}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
}

/**
 * Fiyat Formatlayıcı
 */
function formatPriceTL(price) {
    return new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY',
        maximumFractionDigits: 0
    }).format(price).replace('TRY', 'TL');
}

/**
 * Kilometre Formatlayıcı
 */
function formatKm(km) {
    return new Intl.NumberFormat('tr-TR').format(km) + ' km';
}

/**
 * ============================================================================
 * HERO MERCEDES SLIDER MANTIĞI
 * ============================================================================
 */
let currentHeroSlide = 0;
let heroSlideTimer = null;

function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    if (!slides.length) return;
    showHeroSlide(0);
    resetHeroTimer();
}

function showHeroSlide(index) {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    if (!slides.length) return;

    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;
    currentHeroSlide = index;

    slides.forEach((slide, idx) => {
        if (idx === currentHeroSlide) {
            slide.classList.remove('opacity-0');
            slide.classList.add('opacity-100');
        } else {
            slide.classList.remove('opacity-100');
            slide.classList.add('opacity-0');
        }
    });

    dots.forEach((dot, idx) => {
        if (idx === currentHeroSlide) {
            dot.className = 'hero-dot w-6 h-1.5 rounded-full bg-[#ff5500] cursor-pointer transition-all';
        } else {
            dot.className = 'hero-dot w-2 h-1.5 rounded-full bg-white/40 hover:bg-white cursor-pointer transition-all';
        }
    });
}

function nextHeroSlide() {
    showHeroSlide(currentHeroSlide + 1);
    resetHeroTimer();
}

function prevHeroSlide() {
    showHeroSlide(currentHeroSlide - 1);
    resetHeroTimer();
}

function goToHeroSlide(idx) {
    showHeroSlide(idx);
    resetHeroTimer();
}

function resetHeroTimer() {
    if (heroSlideTimer) clearInterval(heroSlideTimer);
    heroSlideTimer = setInterval(() => {
        showHeroSlide(currentHeroSlide + 1);
    }, 5000);
}

