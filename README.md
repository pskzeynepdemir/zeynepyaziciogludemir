# Zeynep Yazıcıoğlu Demir — Kişisel Web Sitesi

Statik bir site (HTML/CSS/JS). Build aracı gerektirmez; Cloudflare Pages'e olduğu gibi yüklenir.

## Dosya yapısı

- `index.html` — Ana sayfa
- `hakkimda.html` — Hakkımda
- `calisma-alanlari.html` — Terapi & koçluk, atölyeler, yoga (e-posta talep butonlarıyla)
- `iletisim.html` — E-posta + Instagram
- `yazilarim/` — Yazı listesi (`index.html`) ve her yazı için ayrı sayfa
- `assets/css/style.css` — Tüm stiller
- `assets/js/site.js` — Mobil menü + yazılar sekmesi
- `assets/img/` — Web için küçültülmüş görseller
- `404.html` — Bulunamayan sayfa

> Kaynak dosyalar (orijinal `.docx` yazılar, `fotolarım/`, kök dizindeki büyük görseller,
> `icerikler.html`) sitede kullanılmaz; yedek olarak klasörde durur.

## Yerelde önizleme

```bash
cd websitem
python3 -m http.server 8000
# Tarayıcıda: http://localhost:8000
```

## Cloudflare Pages'e yayınlama

İki yoldan biri:

1. **Sürükle-bırak (en kolay):** Cloudflare panel → Workers & Pages → Create → Pages →
   "Upload assets" → bu klasörü yükle. Build komutu / framework: **None**.
2. **Wrangler ile:**
   ```bash
   npx wrangler pages deploy .
   ```

Alan adı (domain) bağlamak Cloudflare Pages panelindeki "Custom domains" bölümünden yapılır.

## İletişim

Tüm talepler `mailto:` linkleriyle `psk.zeynepdemir@gmail.com` adresine gider; arka uç/form yoktur.
Instagram: https://instagram.com/zeynepyaziciogludemir

## Yeni yazı / öykü eklemek

Yeni bir yazı eklemek için en kolayı Claude'a metni verip sayfa oluşturmasını istemek. Elle yapmak isterseniz:

1. `yazilarim/` içindeki mevcut bir yazı dosyasını (ör. `luks-dert.html`) kopyalayın, yeni bir
   dosya adı verin (ör. `yeni-yazi.html`).
2. İçindeki `<h1>`, `<title>`, etiket/tarih ve `<div class="article-body">` içindeki `<p>`
   paragraflarını yeni metinle değiştirin.
3. `yazilarim/index.html` içindeki ilgili sekmeye (`data-panel="deneme"` ya da `data-panel="oyku"`)
   yeni bir `writing-card` kartı ekleyip yazıya link verin.
4. **Öyküler** için: `yazilarim/index.html` içindeki "Minik öykülerim çok yakında…" notunu
   silip kartları ekleyin; etiketi "Öykü" yapın.
