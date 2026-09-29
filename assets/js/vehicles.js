/**
 * OTOPOL OTOMOTİV - Araç Listesi ve İşletme Yapılandırması
 * Sahibinden.com Mağazasıyla Tam Entegre Gerçek İlan Verileri
 */

const GALLERY_CONFIG = {
    brandName: "OTOPOL",
    fullName: "OTOPOL OTOMOTİV",
    tagline: "Güven ve Prestijin Otomotivdeki Adresi",
    phone: "0 533 225 68 86",
    phoneRaw: "905332256886", // Boşluksuz ve ülke kodlu (WhatsApp ve arama için)
    address: "Eyüp Sultan Mh. Sancaktepe & Maltepe / İSTANBUL",
    shortAddress: "Sancaktepe & Maltepe / İSTANBUL",
    sahibindenStoreUrl: "https://otopol.sahibinden.com",
    workingHours: "Haftanın 7 Günü: 09:00 - 19:30",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48243.60635174415!2d29.110283!3d40.928131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac46d5c643797%3A0x6b80153833f4a3e9!2sMaltepe%2C%20%C4%B0stanbul!5e0!3m2!1str!2str!4v1711660000000!5m2!1str!2str",
    googleMapsDirect: "https://maps.google.com/?q=Sancaktepe,+Istanbul"
};

const VEHICLES_DATA = [
    {
        id: "oto-01",
        title: "Audi A4 40 TDI 204HP Quattro Advanced",
        subtitle: "Değişensiz • K.Kartına 12 Taksit • Matrix LED • Geri Görüş",
        category: "sedan",
        year: 2022,
        km: 48000,
        price: 2929000,
        currency: "TL",
        fuel: "Dizel",
        transmission: "Otomatik (S-Tronic)",
        color: "Füme Gri",
        enginePower: "204 HP",
        traction: "Quattro (4x4)",
        damageStatus: "Değişensiz / Ekspertiz Garantili",
        badges: ["Değişensiz", "K.Kartına 12 Taksit", "Quattro 4x4"],
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80"
        ],
        sahibindenUrl: "https://www.sahibinden.com/ilan/vasita-otomobil-audi-otopol-2022-a4-40tdi-204hp-quattro-degisensiz-k.karti-12taksit-1342885760/detay/",
        features: [
            "Quattro Akıllı 4 Çeker Sistemi",
            "204 HP Güçlü & Ekonomik TDI Motor",
            "Advanced Donanım Paketi",
            "Kredi Kartına 12 Taksit İmkanı",
            "Matrix LED Ön ve Arka Farlar",
            "Geri Görüş Kamerası & Park Sensörü",
            "Apple CarPlay & Android Auto",
            "Hafızalı & Isıtmalı Sürücü Koltuğu"
        ],
        description: "OTOPOL Otomotiv güvencesiyle. 2022 Audi A4 40 TDI 204HP Quattro Advanced. Değişensiz, kurumsal ekspertiz garantili ve tüm bakımları eksiksizdir. Kredi kartına 12 taksit ve takas imkanı mevcuttur."
    },
    {
        id: "oto-02",
        title: "Mercedes-Benz Yeni E200d Exclusive Lacivert",
        subtitle: "%20 KDV Avantajlı • K.Kartına 12 Taksit • Vakum • Panoramik Tavan",
        category: "sedan",
        year: 2020,
        km: 74000,
        price: 3649000,
        currency: "TL",
        fuel: "Dizel",
        transmission: "Otomatik (9G-Tronic)",
        color: "Gece Mavisi / Lacivert",
        enginePower: "160 HP",
        traction: "Arkadan İtiş",
        damageStatus: "Hatasız Kondisyonda / Ekspertiz Garantili",
        badges: ["%20 KDV Avantajı", "K.Kartına 12 Taksit", "Exclusive Paket"],
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80"
        ],
        sahibindenUrl: "https://www.sahibinden.com/ilan/vasita-otomobil-mercedes-benz-otopol-2020-yeni-e200d-exclusive-lacivert-k.kart-12taksit-20kdv-1342875335/detay/",
        features: [
            "Exclusive Lüks Donanım Paketi",
            "%20 KDV Fatura Avantajı",
            "Kredi Kartına 12 Taksit Seçeneği",
            "Soft-Close Vakumlu Kapılar",
            "Panoramik Açılır Cam Tavan",
            "Widescreen Çift Dijital Gösterge Ekranı",
            "Hafızalı & Isıtmalı Elektrikli Koltuklar",
            "64 Renk Ambiyans Aydınlatması"
        ],
        description: "OTOPOL Otomotiv güvencesiyle. 2020 Yeni Kasa Mercedes-Benz E200d Exclusive. Şık lacivert gövde rengi, %20 KDV avantajı ve kredi kartına 12 taksit imkanıyla satışa hazırdır."
    },
    {
        id: "oto-03",
        title: "Audi A6 Avant S-Line 2.0 TDI Quattro",
        subtitle: "Orijinal S-Line • K.Kartına 12 Taksit • Panoramik Tavan • Elektrikli Bagaj",
        category: "sedan",
        year: 2016,
        km: 142000,
        price: 2999000,
        currency: "TL",
        fuel: "Dizel",
        transmission: "Otomatik (S-Tronic)",
        color: "Gümüş Gri",
        enginePower: "190 HP",
        traction: "Quattro (4x4)",
        damageStatus: "Orijinal / Ekspertiz Garantili",
        badges: ["Orijinal S-Line", "K.Kartına 12 Taksit", "Quattro 4x4"],
        image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
        ],
        sahibindenUrl: "https://www.sahibinden.com/ilan/vasita-otomobil-audi-otopol-2016-a6-avant-s-line-2.0tdi-quattro-orjinl-k.kart-12takst-1342858796/detay/",
        features: [
            "Orijinal Audi S-Line Spor Tasarım",
            "Quattro 4x4 Çekiş Güvencesi",
            "Panoramik Açılır Cam Tavan",
            "Elektrikli Otomatik Bagaj Kapağı",
            "Kredi Kartına 12 Taksit İmkanı",
            "F1 Kulakçıklı Spor Deri Direksiyon",
            "S-Line Spor Koltuklar & Alcantara",
            "Ön ve Arka Park Asistanı"
        ],
        description: "OTOPOL Otomotiv güvencesiyle. 2016 Audi A6 Avant S-Line 2.0 TDI Quattro. Geniş aile ve iş konforunu bir arada sunan özel station wagon tasarımı. Kredi kartına 12 taksit uygulanabilir."
    },
    {
        id: "oto-04",
        title: "Mercedes-Benz Vito Ekstra Uzun VIP Arabölmeli",
        subtitle: "Özel VIP Dizayn • Arabölmeli • K.Kartına 12 Taksit • Orijinal 114 BlueTec",
        category: "suv",
        year: 2020,
        km: 118000,
        price: 1899000,
        currency: "TL",
        fuel: "Dizel",
        transmission: "Otomatik",
        color: "Derin Siyah",
        enginePower: "136 HP",
        traction: "Arkadan İtiş",
        damageStatus: "Orijinal VIP / Ekspertiz Garantili",
        badges: ["VIP Arabölmeli", "Ekstra Uzun Şasi", "K.Kartına 12 Taksit"],
        image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80"
        ],
        sahibindenUrl: "https://www.sahibinden.com/ilan/vasita-minivan-panelvan-mercedes-benz-otopol-2020-vito-extra-uzun-vip-arabolme-orj-k.karti-12taksit-1342879479/detay/",
        features: [
            "Ekstra Uzun Şasi (Extra Long)",
            "Asansörlü Arabölme & Akıllı TV Ekranı",
            "Elektrikli Masajlı & Isıtmalı VIP Koltuklar",
            "Özel Tasarım Yıldız Tavan & Ambiyans Işıkları",
            "Buzdolabı & Elektrikli Masalar",
            "Kredi Kartına 12 Taksit Seçeneği",
            "Özel Ses ve Multimedya Sistemi",
            "VIP Makam Aracı Donanımı"
        ],
        description: "OTOPOL Otomotiv güvencesiyle. 2020 Mercedes-Benz Vito Extra Uzun Tourer 114 BlueTec. En üst kalite arabölmeli VIP iç tasarıma sahip, prestijli makam ve transfer aracı."
    },
    {
        id: "oto-05",
        title: "Skoda Superb 1.5 TSI DSG 150HP Premium",
        subtitle: "150 HP Turbo Benzin • DSG Otomatik • K.Kartına 12 Taksit • Premium Paket",
        category: "sedan",
        year: 2021,
        km: 62000,
        price: 1679000,
        currency: "TL",
        fuel: "Benzin",
        transmission: "Otomatik (DSG)",
        color: "Kristal Beyaz",
        enginePower: "150 HP",
        traction: "Önden Çekiş",
        damageStatus: "Hatasız / Ekspertiz Garantili",
        badges: ["150 HP TSI", "K.Kartına 12 Taksit", "Premium Donanım"],
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80"
        ],
        sahibindenUrl: "https://www.sahibinden.com/ilan/vasita-otomobil-skoda-otopol-2021-superb-1.5tsi-dsg-150hp-premium-kredi-karti-12taksit-1342882172/detay/",
        features: [
            "1.5 TSI 150 HP Performanslı & Tasarruflu Motor",
            "7 İleri DSG Çift Kavramalı Şanzıman",
            "Premium Geniş Lüks İç Mekan",
            "Kredi Kartına 12 Taksit İmkanı",
            "Geniş 625 Litre Bagaj Hacmi",
            "Apple CarPlay & Android Auto",
            "Anahtarsız Giriş & Çalıştırma (KESSY)",
            "Çift Bölgeli Dijital Otomatik Klima"
        ],
        description: "OTOPOL Otomotiv güvencesiyle. 2021 Skoda Superb 1.5 TSI DSG 150HP Premium. Üstün diz mesafesi, geniş bagajı ve kusursuz kondisyonu ile satışta. Kredi kartına 12 taksit seçeneği bulunmaktadır."
    }
];
