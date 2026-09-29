/**
 * OTOPOL OTOMOTİV - Araç Listesi ve İşletme Yapılandırması
 * Bu dosyadan araç ekleyebilir, fiyatları ve Sahibinden.com ilan linklerini güncelleyebilirsiniz.
 */

const GALLERY_CONFIG = {
    brandName: "OTOPOL",
    fullName: "OTOPOL OTOMOTİV",
    tagline: "Güven ve Prestijin Maltepe'deki Adresi",
    phone: "0 533 225 68 86",
    phoneRaw: "905332256886", // Boşluksuz ve ülke kodlu (WhatsApp ve arama için)
    address: "Bağlarbaşı Mah. Bağdat Cad. No: 420, Maltepe / İSTANBUL",
    shortAddress: "Maltepe / İSTANBUL",
    sahibindenStoreUrl: "https://otopol.sahibinden.com",
    workingHours: "Hafta İçi & Cumartesi: 09:00 - 19:30 | Pazar: 11:00 - 18:00",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48243.60635174415!2d29.110283!3d40.928131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac46d5c643797%3A0x6b80153833f4a3e9!2sMaltepe%2C%20%C4%B0stanbul!5e0!3m2!1str!2str!4v1711660000000!5m2!1str!2str",
    googleMapsDirect: "https://maps.google.com/?q=Maltepe,+Istanbul"
};

const VEHICLES_DATA = [
    {
        id: "oto-01",
        title: "Mercedes-Benz C200 4MATIC AMG",
        subtitle: "Hatasız • Gece Paketi • Burmester • Panoramik Cam Tavan",
        category: "sedan",
        year: 2024,
        km: 14500,
        price: 3680000,
        currency: "TL",
        fuel: "Benzin / Hibrit",
        transmission: "Otomatik (9G-Tronic)",
        color: "Obsidiyen Siyahı",
        enginePower: "204 HP",
        traction: "4MATIC (4x4)",
        damageStatus: "Hatasız / Boyasız / Tramersiz",
        badges: ["Hatasız & Boyasız", "İlk Sahibinden", "Yetkili Servis Bakımlı"],
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80"
        ],
        sahibindenUrl: "https://www.sahibinden.com",
        features: [
            "Panoramik Açılır Cam Tavan",
            "Burmester 3D Surround Ses Sistemi",
            "360 Derece Çevre Görüş Kamerası",
            "Kör Nokta & Şerit Takip Asistanı",
            "Isıtmalı ve Hafızalı Ön Koltuklar",
            "Keyless-Go Anahtarsız Giriş & Çalıştırma",
            "Gece Paketi (Night Pack)",
            "Apple CarPlay & Android Auto"
        ],
        description: "Aracımız bayii çıkışlı olup ilk sahibindendir. Tüm bakımları yetkili servisinde zamanında yapılmıştır. Ezik, çizik, göçük ve tramer kaydı kesinlikle yoktur. Yedek anahtarı ve kitapçıkları mevcuttur."
    },
    {
        id: "oto-02",
        title: "BMW 520i M Sport Special Edition",
        subtitle: "Lazer Far • Harman Kardon • Vakumlu Kapılar • Head-Up",
        category: "sedan",
        year: 2023,
        km: 26000,
        price: 4150000,
        currency: "TL",
        fuel: "Benzin",
        transmission: "Otomatik (Steptronic)",
        color: "Karbon Siyah",
        enginePower: "170 HP",
        traction: "Arkadan İtiş",
        damageStatus: "Hatasız / Boyasız",
        badges: ["Lüks Paket", "Vakumlu Kapılar", "Ekspertiz Garantili"],
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
        ],
        sahibindenUrl: "https://www.sahibinden.com",
        features: [
            "BMW Laserlight Farlar",
            "Harman Kardon Surround Ses",
            "Soft-Close Vakumlu Kapılar",
            "Head-Up Display Gösterge",
            "Kablosuz Şarj & Kablosuz Apple Carplay",
            "Otonom Sürüş & Adaptif Cruise Control",
            "M Deri Direksiyon & Spor Koltuklar"
        ],
        description: "Borusan Otomotiv çıkışlı. Kapalı garajda muhafaza edilmiştir. Seramik kaplaması yeni uygulanmıştır. Sıfır kondisyondadır."
    },
    {
        id: "oto-03",
        title: "Porsche Macan GTS 2.9 V6",
        subtitle: "Sport Chrono • Havalı Süspansiyon • Spor Egzoz • Karbon Paket",
        category: "spor",
        year: 2023,
        km: 19800,
        price: 6850000,
        currency: "TL",
        fuel: "Benzin",
        transmission: "PDK (7 İleri Çift Kavrama)",
        color: "Tebeşir Grisi (Crayon)",
        enginePower: "440 HP",
        traction: "4x4 (AWD)",
        damageStatus: "Hatasız / Boyasız",
        badges: ["Özel Sipariş", "Sport Chrono", "GTS Performans"],
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80"
        ],
        sahibindenUrl: "https://www.sahibinden.com",
        features: [
            "Sport Chrono Paketi",
            "Porsche Aktif Süspansiyon Yönetimi (PASM)",
            "Açılabilir Panoramik Cam Tavan",
            "Bose High-End Ses Sistemi",
            "21 İnç RS Spyder Tasarım Jantlar",
            "Spor Egzoz Sistemi (Tuşlu Kontrol)",
            "18 Kademeli Adaptif Spor Koltuklar"
        ],
        description: "Doğuş Otomotiv bayii çıkışlı. Aracın tamamı Stek DynoShield şeffaf PPF kaplıdır. Fabrikasyon kondisyonda, titizlikle kullanılmıştır."
    },
    {
        id: "oto-04",
        title: "Range Rover Velar 2.0 D204 R-Dynamic SE",
        subtitle: "Meridian Ses • Matrix LED • 21' Jant • Siyah Tavan",
        category: "suv",
        year: 2023,
        km: 32000,
        price: 4950000,
        currency: "TL",
        fuel: "Dizel / MHEV",
        transmission: "Otomatik (8 İleri)",
        color: "Hakuba Gümüş / Kontrast Tavan",
        enginePower: "204 HP",
        traction: "AWD (Sürekli 4 Çeker)",
        damageStatus: "Hatasız / Boyasız",
        badges: ["R-Dynamic SE", "Prestij SUV", "Hemen Teslim"],
        image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=1200&q=80"
        ],
        sahibindenUrl: "https://www.sahibinden.com",
        features: [
            "Meridian 3D Surround Ses Sistemi",
            "R-Dynamic Dış & İç Tasarım Paketi",
            "Matrix LED Farlar ve İmzalı Gündüz Farları",
            "Pivi Pro Çift Dokunmatik Ekran",
            "Elektrikli Bagaj ve Sanal Pedal",
            "Kör Nokta Asistanı & Geri Görüş Kamerası"
        ],
        description: "Borusan yetkili servis bakımlı. Son bakımı 30.000 km'de yapılmıştır. Lastikleri sıfır ayarındadır. Takasa uygundur."
    },
    {
        id: "oto-05",
        title: "Tesla Model Y Long Range AWD",
        subtitle: "Çift Motor • Otopilot • 533 KM Menzil • Cam Tavan",
        category: "elektrikli",
        year: 2024,
        km: 8400,
        price: 2890000,
        currency: "TL",
        fuel: "Elektrik (%100 EV)",
        transmission: "Otomatik (Direct Drive)",
        color: "Derin Mavi Metalik",
        enginePower: "514 HP",
        traction: "Dual Motor AWD",
        damageStatus: "Hatasız / Boyasız / Sıfır Ayarında",
        badges: ["Sıfır Ayarında", "%100 Elektrik", "Uzun Menzil"],
        image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=80"
        ],
        sahibindenUrl: "https://www.sahibinden.com",
        features: [
            "Tesla Gelişmiş Otopilot Donanımı",
            "533 km WLTP Birleşik Menzil",
            "Panoramik UV Filtreli Tüm Cam Tavan",
            "15 İnç Dokunmatik Merkez Ekran",
            "Tüm Koltuklarda ve Direksiyonda Isıtma",
            "Premium Ses Sistemi (13 Hoparlör + Subwoofer)"
        ],
        description: "Tesla Türkiye resmi garantili. Batarya ve tahrik ünitesi garantisi 8 yıl veya 192.000 km boyunca devam etmektedir. Hatasızdır."
    },
    {
        id: "oto-06",
        title: "Audi A6 Sedan 40 TDI Quattro Design",
        subtitle: "Vakumlu Kapı • Matrix Far • Hayalet Ekran • Çift Cam",
        category: "sedan",
        year: 2023,
        km: 41000,
        price: 3820000,
        currency: "TL",
        fuel: "Dizel / Hibrit",
        transmission: "S-Tronic (7 İleri)",
        color: "Daytona Gri",
        enginePower: "204 HP",
        traction: "Quattro (4 Çeker)",
        damageStatus: "Hatasız / Boyasız",
        badges: ["Quattro 4x4", "Makam Konforu", "Yetkili Servis"],
        image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80"
        ],
        sahibindenUrl: "https://www.sahibinden.com",
        features: [
            "Audi Sanal Kokpit Plus (Hayalet Gösterge)",
            "Soft-Close Vakumlu Kapılar",
            "HD Matrix LED Ön Farlar ve Dinamik Sinyaller",
            "Akustik Çift İzolasyonlu Yan Camlar",
            "Bang & Olufsen 3D Premium Ses Sistemi",
            "Dört Bölgeli Bağımsız Dijital Klima"
        ],
        description: "Doğuş Otomotiv bakımlı. Uzun yol kullanımında titizlikle sürülmüştür. İç döşemelerinde deformasyon yoktur."
    },
    {
        id: "oto-07",
        title: "Volkswagen Touareg 3.0 V6 TDI Elegance",
        subtitle: "Air Suspension • Gece Görüş • Dynaudio • Masajlı Koltuk",
        category: "suv",
        year: 2022,
        km: 58000,
        price: 4750000,
        currency: "TL",
        fuel: "Dizel",
        transmission: "Tiptronic (8 İleri)",
        color: "Antrasit Gri",
        enginePower: "286 HP",
        traction: "4Motion (4 Çeker)",
        damageStatus: "Hatasız / 1 Parça Lokal Çizik Boyası",
        badges: ["Air Suspension", "V6 Motor", "Full Donanım"],
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80"
        ],
        sahibindenUrl: "https://www.sahibinden.com",
        features: [
            "Adaptif Havalı Süspansiyon (Yükseltme/Alçaltma)",
            "Innovision Cockpit 15 İnç Ekran",
            "Dynaudio Consequence Ses Sistemi",
            "Ön Koltuklarda Isıtma, Soğutma & Masaj",
            "Panoramik Açılır Cam Tavan",
            "IQ.Light LED Matrix Farlar"
        ],
        description: "Aracımız kurumsal ekspertiz raporlu olup yürüyeninde ve motorunda en ufak kusur yoktur. Maltepe mağazamızda görülebilir."
    },
    {
        id: "oto-08",
        title: "Volvo XC90 2.0 B5 AWD Inscription",
        subtitle: "7 Kişilik • Bowers & Wilkins • Otonom Sürüş • Masajlı Koltuk",
        category: "suv",
        year: 2022,
        km: 49000,
        price: 4400000,
        currency: "TL",
        fuel: "Dizel / MHEV",
        transmission: "Geartronic (8 İleri)",
        color: "Sedefli Kristal Beyaz",
        enginePower: "235 HP",
        traction: "AWD (Dört Çeker)",
        damageStatus: "Hatasız / Boyasız",
        badges: ["7 Kişilik", "Bowers & Wilkins", "En Güvenli SUV"],
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80"
        ],
        sahibindenUrl: "https://www.sahibinden.com",
        features: [
            "Bowers & Wilkins High Fidelity Ses Sistemi",
            "Pilot Assist Otonom Sürüş Desteği",
            "7 Bağımsız Konforlu Deri Koltuk",
            "Havalandırmalı & Isıtmalı Nappa Deri Koltuklar",
            "Panoramik Cam Tavan",
            "Orrefors Kristal Vites Topuzu"
        ],
        description: "Aile için en güvenli ve en konforlu SUV. Düzenli yetkili servis bakımlı, sıfır ayarında tertemiz bir araçtır."
    }
];

// Fiyat formatlayıcı
function formatPriceTL(amount) {
    return new Intl.NumberFormat('tr-TR').format(amount) + " TL";
}

// KM formatlayıcı
function formatKm(km) {
    return new Intl.NumberFormat('tr-TR').format(km) + " km";
}
