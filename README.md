# 🚀 Portfolio Raffa Yuda Pratama

Portfolio website modern dan responsif untuk Junior Web Developer dengan desain yang menarik dan interaktif.

## 🎨 Fitur Utama

### ✨ Desain & UI/UX
- **Desain Modern**: Layout yang bersih dan profesional dengan gradien warna yang menarik
- **Responsive**: Optimal di semua perangkat (desktop, tablet, mobile)
- **Animasi Interaktif**: Efek hover, parallax, dan animasi loading yang smooth
- **Dark Mode**: Toggle tema gelap/terang untuk pengalaman pengguna yang lebih baik

### 🔧 Teknologi yang Digunakan
- **HTML5**: Struktur semantik dan accessibility
- **Tailwind CSS**: Utility-first CSS framework untuk styling cepat
- **Vanilla JavaScript**: Interaktivitas dan animasi tanpa dependency
- **Alpine.js**: Reactive components untuk UI interaktif
- **Font Awesome**: Icon library untuk visual yang menarik

### 📱 Fitur Interaktif
- **Typing Animation**: Efek mesin ketik pada hero section
- **Smooth Scrolling**: Navigasi yang halus antar section
- **Progress Bar**: Indikator progress scroll
- **Particle Background**: Efek partikel bergerak di background
- **3D Tilt Effect**: Efek 3D pada project cards
- **Cursor Trail**: Efek jejak kursor yang menarik
- **Form Validation**: Validasi form contact yang responsif

## 🏗️ Struktur Project

```
portfolio-lamar/
├── index.html          # File HTML utama
├── script.js           # JavaScript untuk interaktivitas
├── styles.css          # CSS custom untuk styling lanjutan
└── README.md          # Dokumentasi project
```

## 🎯 Sections Portfolio

### 1. **Hero Section**
- Foto profil dengan animasi floating
- Typing animation dengan berbagai role
- Call-to-action buttons
- Gradient background dengan particle effect

### 2. **About Section**
- Deskripsi pribadi dan professional
- Statistik pencapaian
- Informasi kontak dan lokasi
- Layout grid yang responsif

### 3. **Skills Section**
- Skill bars dengan animasi progress
- Kategori: Frontend, Frameworks, Tools
- Percentage indicator untuk setiap skill
- Card layout dengan hover effects

### 4. **Projects Section**
- Showcase project dengan preview
- Technology stack tags
- Live demo dan GitHub links
- 3D hover effects pada cards

### 5. **Contact Section**
- Form kontak dengan validasi
- Informasi kontak lengkap
- Social media links
- Interactive form dengan feedback

## 🎨 Customization

### Mengubah Warna Theme
Edit variabel CSS di `styles.css`:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
}
```

### Mengubah Informasi Personal
Edit data di `index.html`:
- Nama di section hero
- Deskripsi di section about
- Skills percentage di section skills
- Project information di section projects
- Contact information di section contact

### Menambah Project Baru
Duplikasi struktur project card di section projects:
```html
<div class="bg-white rounded-xl overflow-hidden shadow-lg card-hover">
    <!-- Project content -->
</div>
```

## 🚀 Cara Menjalankan

1. **Clone atau Download** project ini
2. **Buka file `index.html`** di browser web
3. **Atau gunakan live server** untuk development:
   ```bash
   # Menggunakan Python
   python -m http.server 8000
   
   # Menggunakan Node.js (http-server)
   npx http-server
   
   # Menggunakan PHP
   php -S localhost:8000
   ```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 SEO & Performance

- **Semantic HTML**: Struktur yang SEO-friendly
- **Meta Tags**: Optimasi untuk media sosial
- **Lazy Loading**: Optimasi loading gambar
- **Performance**: Animasi yang smooth tanpa lag
- **Accessibility**: Support keyboard navigation

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🎨 Desain Features

### Animasi & Effects
- **Fade In**: Animasi masuk yang smooth
- **Typing Effect**: Efek mesin ketik
- **Parallax**: Efek parallax pada scroll
- **Hover Effects**: Interaksi hover yang menarik
- **Loading Animation**: Spinner loading saat page load

### Visual Elements
- **Gradient Backgrounds**: Warna gradien yang menarik
- **Glass Morphism**: Efek kaca pada beberapa element
- **Neon Glow**: Efek cahaya neon pada hover
- **Particle System**: Sistem partikel di background

## 📊 Performance Tips

1. **Optimize Images**: Gunakan format WebP untuk gambar
2. **Minify CSS/JS**: Compress file untuk production
3. **Use CDN**: Gunakan CDN untuk library external
4. **Enable Caching**: Set up browser caching

## 🤝 Kontribusi

Jika Anda ingin berkontribusi atau memberikan feedback:

1. Fork repository ini
2. Buat branch baru (`git checkout -b feature/improvement`)
3. Commit perubahan (`git commit -am 'Add new feature'`)
4. Push ke branch (`git push origin feature/improvement`)
5. Buat Pull Request

## 📄 License

Project ini dibuat untuk keperluan portfolio pribadi. Silakan gunakan sebagai referensi atau template dengan mencantumkan credit yang sesuai.

## 👨‍💻 Kontak

**Raffa Yuda Pratama**
- Email: raffa.yuda@example.com
- LinkedIn: [linkedin.com/in/raffa-yuda](https://linkedin.com/in/raffa-yuda)
- GitHub: [github.com/raffa-yuda](https://github.com/raffa-yuda)

---

**⭐ Jika portfolio ini bermanfaat, jangan lupa berikan star!**

Made with ❤️ by Raffa Yuda Pratama
