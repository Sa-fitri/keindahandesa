# Website Desa Sepinggan Kecil

Website statis 6 halaman yang dibuat mengikuti referensi tampilan:
- Beranda
- Tentang Desa
- Kehidupan
- Keindahan
- Galeri
- Lokasi

Kontak sengaja tidak dibuat sesuai permintaan.

## Struktur gambar
Semua gambar berada di satu folder:
assets/images/

Nama gambar dibuat sederhana: 01.svg, 02.svg, dst.
Karena semua halaman memakai folder gambar yang sama, nama file cukup dibuat unik SATU KALI lalu boleh dipakai ulang di banyak halaman.

Jika nanti ingin mengganti dengan JPG/PNG:
1. Simpan gambar baru di assets/images/
2. Pertahankan nama file, atau ubah src di file HTML.
3. Contoh: assets/images/01.jpg

Catatan: file dengan nama sama tidak boleh berada dalam folder yang sama. Tetapi nama yang sama boleh dipakai jika lokasinya berbeda, misalnya:
halaman-a/images/01.jpg
halaman-b/images/01.jpg

Untuk versi paling sederhana, website ini memakai satu folder gambar bersama agar tidak perlu menggandakan file.
