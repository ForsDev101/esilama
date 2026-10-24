# Esilam waffle sitesi

## Dosyalar
- `index.html`: site
- `api/send.js`: cevabı Discord webhook'una güvenli şekilde ileten Vercel Function

## Vercel'e kurulum
1. Bu klasörün içindekileri bir GitHub deposuna yükle ve Vercel'den projeyi import et.
2. Vercel > Project Settings > Environment Variables bölümüne `DISCORD_WEBHOOK_URL` adında değişken ekle.
3. Değer olarak Discord webhook URL'ni gir. URL'yi `index.html` içine koyma.
4. Deploy et.
5. `resim1.png`, `resim2.png`, `resim3.png` ve `sonuc.png` dosyalarını `index.html` ile aynı kök klasöre ekle.

Başarılı gönderimde `sonuc.png` ekranın tamamını kaplar. Gönderim başarısızsa yalnızca istenen Instagram mesajı görünür.

Not: Daha önce mesajda paylaştığın webhook URL'sini güvenlik için Discord'da yenilemen (rotate etmen) iyi olur; yeni URL'yi sadece Vercel Environment Variables alanına ekle.
