# 🚗 OTOPOL OTOMOTİV - Modern Tek Sayfa Web Sitesi & Sahibinden İlan Vitrini

Maltepe / İSTANBUL lokasyonundaki **OTOPOL OTOMOTİV** için özel olarak hazırlanmış, modern, lüks tasarımlı ve mobil uyumlu tek sayfalık (single-page) oto galeri web sitesi.

---

## 🌟 Öne Çıkan Özellikler

1. **Sahibinden.com Kurumsal Entegrasyonu**:
   - Her araç kartında orijinal Sahibinden.com sarı rozeti ve doğrudan Sahibinden ilanına giden buton.
   - Sahibinden.com kurumsal mağazanızı öne çıkaran özel tanıtım bölümü.
2. **Akıllı Araç Vitrini**:
   - **Kategori Filtreleme**: Sedan, SUV & 4x4, Lüks & Spor, Elektrikli & Hibrit.
   - **Canlı Arama**: Model, marka, donanım araması.
   - **Sıralama**: Fiyata göre (artan/azalan), model yılına ve kilometreye göre sıralama.
3. **Detaylı Ekspertiz & Araç Modalı**:
   - Müşteri araca tıkladığında açılan fotoğraf galerisi, tam teknik özellikler, tramer/boya durumu ve ekspertiz garantisi.
4. **Tek Tıkla Doğrudan İletişim**:
   - **Telefon**: `0 533 225 68 86` (tıklanabilir arama)
   - **WhatsApp**: Araç bilgilerini otomatik olarak dolduran akıllı WhatsApp teklif bağlantısı
   - **Mobil Sabit Alt Bar**: Mobilde her zaman ekranda duran "Hemen Ara" ve "WhatsApp" butonları
   - **Sağ Alt Yüzen Buton**: Masaüstünde nabız efektli WhatsApp ikonu
5. **Takas & Hızlı Değerleme Formu**:
   - Müşterilerin araç bilgilerini girip tek tıkla galeri sahibinin WhatsApp'ına teklif gönderebildiği form.
6. **Lokasyon & Harita**:
   - **Adres**: Maltepe / İSTANBUL
   - Canlı Google Harita ve tek tıkla navigasyon/yol tarifi alma.

---

## 📁 Dosya Yapısı

```
OTOPOL/
├── index.html               # Ana web sayfası
├── README.md                # Kurulum ve kullanım kılavuzu
└── assets/
    ├── css/
    │   └── style.css        # Özel stiller, animasyonlar ve Sahibinden rozetleri
    └── js/
        ├── vehicles.js      # Araç listesi ve işletme iletişim ayarları (Buradan güncelleyebilirsiniz)
        └── main.js          # Filtreleme, arama, modal ve iletişim mantığı
```

---

## 🛠️ Nasıl Güncellenir? (Telefon, Adres, Araç Ekleme)

Tüm işletme ayarları ve araç ilanları **`assets/js/vehicles.js`** dosyası içerisindedir. Herhangi bir kodlama bilmeden metin düzenleyicisi ile kolayca değiştirebilirsiniz:

### 1. Telefon ve Adres Değiştirme:
`assets/js/vehicles.js` dosyasının en üstündeki `GALLERY_CONFIG` nesnesini düzenleyin:

```javascript
const GALLERY_CONFIG = {
    brandName: "OTOPOL",
    fullName: "OTOPOL OTOMOTİV",
    phone: "0 533 225 68 86",
    phoneRaw: "905332256886", // WhatsApp ve arama için başında 90 ile bitişik
    address: "Bağdat Cad. No: 420, Maltepe / İSTANBUL",
    shortAddress: "Maltepe / İSTANBUL",
    sahibindenStoreUrl: "https://otopol.sahibinden.com", // Kendi Sahibinden mağaza linkiniz
    ...
};
```

### 2. Yeni Araç Ekleme veya İlan Güncelleme:
`assets/js/vehicles.js` içerisindeki `VEHICLES_DATA` listesine yeni bir araç ekleyebilir veya mevcut olanların fiyatlarını ve `sahibindenUrl` adreslerini değiştirebilirsiniz:

```javascript
{
    id: "oto-09",
    title: "Mercedes-Benz E200 Edition 1 AMG",
    category: "sedan", // sedan, suv, spor, elektrikli
    year: 2024,
    km: 12000,
    price: 4950000,
    fuel: "Benzin",
    transmission: "Otomatik",
    damageStatus: "Hatasız / Boyasız",
    image: "gorsel-linki-veya-dosya-yolu",
    sahibindenUrl: "https://www.sahibinden.com/ilan/ornek-ilan-linki"
}
```

---

## 🚀 Siteyi Çalıştırma & Yayına Alma

- **Yerel Bilgisayarda Açmak İçin**: `index.html` dosyasına çift tıklayarak herhangi bir tarayıcıda (Chrome, Edge, Safari vb.) doğrudan açabilirsiniz. Herhangi bir sunucu kurulumu gerektirmez.
- **İnternette Yayına Almak İçin**: Dosyaları (index.html ve assets klasörü) doğrudan cPanel hosting, Vercel, Netlify veya GitHub Pages üzerine yükleyebilirsiniz.
