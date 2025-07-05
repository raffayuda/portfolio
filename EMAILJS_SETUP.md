# Setup EmailJS untuk Contact Form

Untuk mengaktifkan fitur pengiriman email pada form contact, Anda perlu mengsetup EmailJS. Berikut langkah-langkahnya:

## ✅ Status Setup Anda Saat Ini:
- **Public Key**: `zxdF7r_SKJntIpXkE` ✅
- **Service ID**: `service_l873065` (Gmail) ✅  
- **Template ID**: `template_080oxqk` ✅

## 🔧 Perbaiki Template EmailJS

Masalah kemungkinan ada di konfigurasi template. Ikuti langkah berikut:

### 1. Edit Template "Contact Us"
1. Klik template "Contact Us" di dashboard EmailJS
2. Pastikan template menggunakan variabel yang benar:

**Subject Template:**
```
New Contact from Portfolio: {{subject}}
```

**Body Template:**
```
Hello Raffa,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Reply to: {{reply_to}}
Sent from your portfolio contact form
```

### 2. Settings Template
1. **To Email**: `raffayudapratama20@gmail.com`
2. **From Name**: `Portfolio Contact Form`
3. **Reply To**: `{{reply_to}}`

### 3. Test Template
1. Klik "Test" di template editor
2. Gunakan data test seperti:
   - from_name: "Test User"
   - from_email: "test@example.com" 
   - subject: "Test Message"
   - message: "This is a test"
   - reply_to: "test@example.com"

## 🚨 Troubleshooting Error

### Error 400 - Bad Request
- Template variables tidak cocok
- Periksa nama variabel di template

### Error 401 - Unauthorized  
- Public key salah
- Service tidak terkoneksi

### Error 402 - Payment Required
- Limit email terlampaui (200/bulan)

### Error 404 - Not Found
- Service ID atau Template ID salah

## 🧪 Cara Test

1. Buka Developer Console (F12)
2. Isi form contact dan submit
3. Lihat log untuk error detail:
   ```
   Sending email with params: {...}
   Email sent successfully: {...}
   ```

## 📋 Checklist Perbaikan

- [ ] Pastikan Gmail service aktif
- [ ] Cek template variables cocok dengan kode
- [ ] Test template di dashboard EmailJS
- [ ] Periksa console browser untuk error detail
- [ ] Pastikan tidak ada ad blocker yang memblokir EmailJS

## 🔄 Alternative: Formspree (Backup)

Jika EmailJS masih bermasalah, gunakan Formspree sebagai backup:

1. Daftar di https://formspree.io
2. Ganti action form menjadi:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

---

**💡 Tip**: Buka Network tab di Developer Tools saat submit form untuk melihat request/response detail EmailJS.
