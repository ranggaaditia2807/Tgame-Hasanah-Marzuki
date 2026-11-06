/**
 * MATERI & QUIZ DATABASE (BAHASA INDONESIA PAKET B / SETARA SMP)
 */
const QUIZ_DATA = {
    'quiz-lho': {
        title: 'Kuis Teks Laporan Hasil Observasi (LHO)',
        difficulty: 'Sedang',
        questions: [
            {
                id: 1,
                question: 'Apakah tujuan utama penulisan Teks Laporan Hasil Observasi (LHO)?',
                options: [
                    'A. Menyampaikan informasi fakta berdasarkan pengamatan objektif secara sistematis',
                    'B. Membujuk pembaca agar menyetujui opini pribadi penulis',
                    'C. Menceritakan kisah rekaan fiksi untuk menghibur pembaca',
                    'D. Menggambarkan perasaan emosional penulis mengenai suatu peristiwa'
                ],
                answer: 0,
                explanation: 'Teks LHO bertujuan menyampaikan data faktual dan objektif dari hasil pengamatan langsung tanpa rekaan.'
            },
            {
                id: 2,
                question: 'Struktur Teks LHO yang berisi pembuka, pengenalan, atau definisi umum objek pengamatan adalah...',
                options: [
                    'A. Deskripsi Bagian',
                    'B. Pernyataan Umum / Definisi Umum',
                    'C. Deskripsi Manfaat',
                    'D. Penegasan Ulang'
                ],
                answer: 1,
                explanation: 'Pernyataan Umum merupakan struktur pertama Teks LHO yang berisi definisi atau pengenalan awal subjek.'
            },
            {
                id: 3,
                question: 'Ciri bahasa khas Teks Laporan Hasil Observasi adalah...',
                options: [
                    'A. Menggunakan ungkapan majas dan kiasan imajinatif',
                    'B. Menggunakan kalimat ajakan (persuasif)',
                    'C. Menggunakan kata istilah ilmiah dan kata kerja material',
                    'D. Menggunakan kata ganti orang pertama (Saya, Aku)'
                ],
                answer: 2,
                explanation: 'Teks LHO bersifat ilmiah sehingga banyak menggunakan kata istilah teknis/ilmiah dan kalimat deskripsi faktual.'
            },
            {
                id: 4,
                question: 'Bagian teks yang menjelaskan rincian fisik, organ, atau klasifikasi objek observasi disebut...',
                options: [
                    'A. Deskripsi Bagian',
                    'B. Pernyataan Umum',
                    'C. Penutup',
                    'D. Orientasi'
                ],
                answer: 0,
                explanation: 'Deskripsi bagian memerinci objek yang diamati secara detail (misalnya bentuk, rupa, bagian-bagian organ).'
            },
            {
                id: 5,
                question: 'Manakah di bawah ini yang merupakan kalimat fakta dalam Teks LHO?',
                options: [
                    'A. Lidah buaya sepertinya tanaman terindah di dunia.',
                    'B. Lidah buaya (Aloe vera) memiliki daun berdaging tebal dan mengandung gel.',
                    'C. Menurut saya semua orang harus menanam lidah buaya.',
                    'D. Lidah buaya mungkin bisa menyembuhkan segala penyakit.'
                ],
                answer: 1,
                explanation: 'Kalimat B merupakan fakta nyata yang dapat dibuktikan kebenarannya secara empiris.'
            },
            {
                id: 6,
                question: 'Ciri utama informasi dalam teks laporan hasil observasi adalah...',
                options: [
                    'A. Bersifat subjektif',
                    'B. Bersifat objektif dan faktual',
                    'C. Bersifat khayalan',
                    'D. Berisi khayalan penulis'
                ],
                answer: 1,
                explanation: 'Objektif artinya sesuai dengan keadaan sebenarnya tanpa dipengaruhi pendapat pribadi.'
            },
            {
                id: 7,
                question: 'Bagian akhir Teks LHO yang berisi kegunaan objek yang diamati dalam kehidupan sehari-hari disebut...',
                options: [
                    'A. Definisi Umum',
                    'B. Deskripsi Bagian',
                    'C. Deskripsi Manfaat',
                    'D. Tesis'
                ],
                answer: 2,
                explanation: 'Deskripsi manfaat menjelaskan faedah atau kegunaan objek observasi bagi manusia atau lingkungan.'
            },
            {
                id: 8,
                question: 'Kata-kata seperti "habitat", "fotosintesis", dan "ekosistem" dalam Teks LHO termasuk ke dalam...',
                options: [
                    'A. Kata populer',
                    'B. Istilah teknis / ilmiah',
                    'C. Kata konotatif',
                    'D. Kata kiasan'
                ],
                answer: 1,
                explanation: 'Istilah teknis adalah kata khusus yang berkaitan dengan bidang ilmu tertentu.'
            },
            {
                id: 9,
                question: 'Kalimat berikut yang merupakan definisi umum adalah...',
                options: [
                    'A. Komodo adalah spesies biawak besar yang terdapat di pulau Komodo, Rinca, dan Flores.',
                    'B. Komodo memiliki ekor yang panjang dan kuat.',
                    'C. Daging komodo sangat disukai oleh predator lain.',
                    'D. Komodo berburu pada sore hari.'
                ],
                answer: 0,
                explanation: 'Kalimat A menjelaskan konsep dasar atau pengertian umum dari komodo.'
            },
            {
                id: 10,
                question: 'Sebelum menyusun Teks LHO, langkah awal yang harus dilakukan adalah...',
                options: [
                    'A. Mempublikasikan buku',
                    'B. Melakukan pengamatan/observasi objek',
                    'C. Meminta maaf kepada pembaca',
                    'D. Menulis kesimpulan tanpa data'
                ],
                answer: 1,
                explanation: 'Observasi objek secara langsung adalah syarat utama dalam pengumpulan fakta Teks LHO.'
            }
        ]
    },
    'quiz-eksposisi': {
        title: 'Kuis Teks Eksposisi & Struktur Argumen',
        difficulty: 'Mudah',
        questions: [
            {
                id: 1,
                question: 'Struktur pembuka Teks Eksposisi yang berisi sudut pandang atau pandangan awal penulis disebut...',
                options: [
                    'A. Tesis (Pernyataan Pendapat)',
                    'B. Rangkaian Argumen',
                    'C. Penegasan Ulang',
                    'D. Orientasi'
                ],
                answer: 0,
                explanation: 'Tesis adalah pengenalan isu atau sudut pandang penulis terhadap topik pembahasan.'
            },
            {
                id: 2,
                question: 'Bagian Teks Eksposisi yang memuat alasan, fakta, atau data untuk memperkuat tesis disebut...',
                options: [
                    'A. Tesis',
                    'B. Rangkaian Argumen',
                    'C. Koda',
                    'D. Komplikasi'
                ],
                answer: 1,
                explanation: 'Argumen berfungsi membuktikan kebenaran tesis melalui data dan alasan yang logis.'
            },
            {
                id: 3,
                question: 'Tujuan utama dari penulisan Teks Eksposisi adalah...',
                options: [
                    'A. Menghibur pembaca dengan dongeng',
                    'B. Menjelaskan pengetahuan atau informasi agar menambah wawasan pembaca',
                    'C. Melukiskan keindahan alam secara dramatis',
                    'D. Menceritakan pengalaman masa kecil'
                ],
                answer: 1,
                explanation: 'Teks Eksposisi bertujuan memaparkan pengetahuan dan informasi faktual bagi pembaca.'
            },
            {
                id: 4,
                question: 'Di mana letak Penegasan Ulang pada Teks Eksposisi?',
                options: [
                    'A. Di awal teks',
                    'B. Di tengah teks',
                    'C. Di akhir teks sebagai perumusan kembali kesimpulan',
                    'D. Di dalam judul'
                ],
                answer: 2,
                explanation: 'Penegasan ulang berada pada bagian penutup untuk menguatkan kembali tesis secara ringkas.'
            },
            {
                id: 5,
                question: 'Manakah yang merupakan ciri fakta dalam Teks Eksposisi?',
                options: [
                    'A. Mengandung angka, data nyata, dan waktu yang jelas',
                    'B. Menggunakan kata "mungkin", "sebaiknya", "rasanya"',
                    'C. Berisi angan-angan penulis',
                    'D. Tidak memiliki bukti pendukung'
                ],
                answer: 0,
                explanation: 'Fakta ditandai oleh data nyata, statistik, dan kejadian yang dapat diverifikasi.'
            },
            {
                id: 6,
                question: 'Manakah yang merupakan contoh opini?',
                options: [
                    'A. Kebersihan lingkungan sangat penting untuk menjaga kesehatan.',
                    'B. Menurut saya, pelajaran Bahasa Indonesia adalah pelajaran paling menyenangkan.',
                    'C. Indonesia merdeka pada tahun 1945.',
                    'D. Air mendidih pada suhu 100 derajat Celcius.'
                ],
                answer: 1,
                explanation: 'Frasa "Menurut saya" menunjukkan pandangan atau pendapat subjektif (opini).'
            },
            {
                id: 7,
                question: 'Pola pengembangan eksposisi dari khusus ke umum disebut pola...',
                options: [
                    'A. Induktif',
                    'B. Deduktif',
                    'C. Analogi',
                    'D. Ilustrasi'
                ],
                answer: 0,
                explanation: 'Pola induktif menyajikan rincian khusus terlebih dahulu lalu diakhiri kesimpulan umum.'
            },
            {
                id: 8,
                question: 'Pola pengembangan teks eksposisi dari umum ke khusus disebut pola...',
                options: [
                    'A. Deduktif',
                    'B. Induktif',
                    'C. Kronologis',
                    'D. Deskriptif'
                ],
                answer: 0,
                explanation: 'Pola deduktif menempatkan gagasan utama umum di awal diikuti penjelasan khusus.'
            },
            {
                id: 9,
                question: 'Kata penghubung (konjungsi) sebab-akibat yang sering digunakan dalam teks eksposisi adalah...',
                options: [
                    'A. Karena, sebab, oleh karena itu',
                    'B. Dan, serta, lagi pula',
                    'C. Atau, maupun',
                    'D. Tetapi, melainkan'
                ],
                answer: 0,
                explanation: 'Konjungsi kausalitas (sebab-akibat) menghubungkan alasan dengan dampak argumen.'
            },
            {
                id: 10,
                question: 'Fungsi kalimat fakta dalam teks eksposisi adalah untuk...',
                options: [
                    'A. Memperkuat argumen penulis',
                    'B. Mengelabui pembaca',
                    'C. Memperpanjang paragraf',
                    'D. Mengganti tesis'
                ],
                answer: 0,
                explanation: 'Fakta memperkokoh kebenaran argumen sehingga meyakinkan pembaca.'
            }
        ]
    },
    'quiz-puisi': {
        title: 'Kuis Puisi Rakyat & Sastra Lama',
        difficulty: 'Sulit',
        questions: [
            {
                id: 1,
                question: 'Pantun standar memiliki rima akhir dengan pola...',
                options: [
                    'A. a-a-a-a',
                    'B. a-b-a-b',
                    'C. a-a-b-b',
                    'D. a-b-b-a'
                ],
                answer: 1,
                explanation: 'Pantun bersajak silang a-b-a-b, baris 1 rima dengan baris 3, baris 2 dengan baris 4.'
            },
            {
                id: 2,
                question: 'Dua baris pertama pada pantun berfungsi sebagai...',
                options: [
                    'A. Isi pesan',
                    'B. Sampiran',
                    'C. Kesimpulan',
                    'D. Penjelas'
                ],
                answer: 1,
                explanation: 'Baris 1 dan 2 pantun merupakan sampiran untuk menyiapkan rima, sedangkan baris 3 dan 4 adalah isi.'
            },
            {
                id: 3,
                question: 'Puisi rakyat yang terdiri dari 2 baris tiap bait dan berisi nasihat agama/moral adalah...',
                options: [
                    'A. Pantun',
                    'B. Gurindam',
                    'C. Syair',
                    'D. Talibun'
                ],
                answer: 1,
                explanation: 'Gurindam terdiri dari 2 baris per bait dengan rima a-a dan memuat pesan sebab-akibat atau nasihat.'
            },
            {
                id: 4,
                question: 'Pola rima akhir pada Syair adalah...',
                options: [
                    'A. a-b-a-b',
                    'B. a-a-a-a',
                    'C. a-a-b-b',
                    'D. a-b-c-d'
                ],
                answer: 1,
                explanation: 'Syair terdiri dari 4 baris per bait dan seluruh barisnya bersajak lurus a-a-a-a.'
            },
            {
                id: 5,
                question: 'Jumlah suku kata ideal pada tiap baris pantun adalah...',
                options: [
                    'A. 4 - 6 suku kata',
                    'B. 8 - 12 suku kata',
                    'C. 15 - 20 suku kata',
                    'D. 2 - 4 suku kata'
                ],
                answer: 1,
                explanation: 'Tiap baris pantun umumnya terdiri atas 8 hingga 12 suku kata.'
            },
            {
                id: 6,
                question: 'Perhatikan gurindam ini: "Barang siapa mengenal yang empat, maka ia itulah orang yang ma'rifat." Rima gurindam tersebut berpola...',
                options: [
                    'A. a-b',
                    'B. a-a',
                    'C. a-b-a-b',
                    'D. a-a-a-a'
                ],
                answer: 1,
                explanation: 'Gurindam selalu memiliki rima sama a-a pada kedua barisnya.'
            },
            {
                id: 7,
                question: 'Majas yang membandingkan benda mati seolah-olah memiliki sifat hidup manusia disebut...',
                options: [
                    'A. Majas Metafora',
                    'B. Majas Personifikasi',
                    'C. Majas Hiperbola',
                    'D. Majas Simile'
                ],
                answer: 1,
                explanation: 'Personifikasi menginsankan benda mati (contoh: "Angin berbisik mesra").'
            },
            {
                id: 8,
                question: 'Majas yang menggunakan ungkapan berlebihan untuk melebihi kenyataan disebut...',
                options: [
                    'A. Hiperbola',
                    'B. Litotes',
                    'C. Ironi',
                    'D. Metonimia'
                ],
                answer: 0,
                explanation: 'Hiperbola membesar-besarkan sesuatu (contoh: "Suaranya menggelegar membelah angkasa").'
            },
            {
                id: 9,
                question: 'Apakah perbedaan mendasar antara pantun dan syair?',
                options: [
                    'A. Pantun memiliki sampiran, syair seluruh barisnya adalah isi',
                    'B. Syair tidak memiliki rima',
                    'C. Pantun selalu terdiri 2 baris',
                    'D. Syair hanya berisi teka-teki'
                ],
                answer: 0,
                explanation: 'Pantun punya sampiran (baris 1-2) dan isi (baris 3-4), sedangkan syair keempat barisnya adalah isi.'
            },
            {
                id: 10,
                question: 'Ciri utama puisi rakyat secara umum adalah...',
                options: [
                    'A. Bebas tanpa aturan',
                    'B. Terikat oleh aturan jumlah baris, suku kata, dan rima',
                    'C. Ditulis oleh pengarang modern berlisensi',
                    'D. Hanya ada di media sosial'
                ],
                answer: 1,
                explanation: 'Puisi rakyat terikat struktur ketat warisan sastra melayu lama.'
            }
        ]
    },
    'quiz-cerpen': {
        title: 'Kuis Unsur Intrinsik Cerita Pendek',
        difficulty: 'Sedang',
        questions: [
            {
                id: 1,
                question: 'Gagasan utama atau ide dasar yang menjadi landasan cerita pendek disebut...',
                options: [
                    'A. Latar / Setting',
                    'B. Tema',
                    'C. Alur / Plot',
                    'D. Amanat'
                ],
                answer: 1,
                explanation: 'Tema merupakan ide pokok atau masalah utama yang melandasi keseluruhan isi cerita.'
            },
            {
                id: 2,
                question: 'Tempat, waktu, dan suasana terjadinya peristiwa dalam cerpen disebut...',
                options: [
                    'A. Latar (Setting)',
                    'B. Penokohan',
                    'C. Sudut Pandang',
                    'D. Amanat'
                ],
                answer: 0,
                explanation: 'Latar meliputi latar tempat (di mana), latar waktu (kapan), dan latar suasana (bagaimana perasaan lingkungan).'
            },
            {
                id: 3,
                question: 'Pesan moral atau ajaran kebaikan yang disampaikan pengarang kepada pembaca disebut...',
                options: [
                    'A. Konflik',
                    'B. Alur',
                    'C. Amanat',
                    'D. Watak'
                ],
                answer: 2,
                explanation: 'Amanat adalah nilai moral positif yang diharapkan dipetik oleh pembaca.'
            },
            {
                id: 4,
                question: 'Tokoh utama yang berwatak baik dan menjadi pusat simpati pembaca disebut tokoh...',
                options: [
                    'A. Antagonis',
                    'B. Protagonis',
                    'C. Tritagonis',
                    'D. Figuran'
                ],
                answer: 1,
                explanation: 'Protagonis adalah tokoh utama penentu alur yang bernilai positif.'
            },
            {
                id: 5,
                question: 'Tokoh penentang tokoh utama yang memicu konflik disebut tokoh...',
                options: [
                    'A. Protagonis',
                    'B. Antagonis',
                    'C. Tritagonis',
                    'D. Pembantu'
                ],
                answer: 1,
                explanation: 'Antagonis menimbulkan pertentangan dan perselisihan terhadap tokoh utama.'
            },
            {
                id: 6,
                question: 'Rangkaian jalannya peristiwa dalam cerpen dari awal hingga akhir disebut...',
                options: [
                    'A. Alur (Plot)',
                    'B. Tema',
                    'C. Sudut Pandang',
                    'D. Gaya Bahasa'
                ],
                answer: 0,
                explanation: 'Alur menjalin rangkaian kejadian secara sebab-akibat (maju, mundur, atau campuran).'
            },
            {
                id: 7,
                question: 'Sudut pandang pengarang yang menggunakan kata ganti "Aku" atau "Saya" adalah sudut pandang...',
                options: [
                    'A. Orang Pertama',
                    'B. Orang Ketiga Serba Tahu',
                    'C. Orang Kedua',
                    'D. Pengamat Eksternal'
                ],
                answer: 0,
                explanation: 'Pengarang menjadi pelaku utama atau sampingan dengan kata "Aku/Saya".'
            },
            {
                id: 8,
                question: 'Puncak ketegangan atau masalah tertinggi dalam alur cerpen disebut...',
                options: [
                    'A. Orientasi',
                    'B. Komplikasi / Klimaks',
                    'C. Resolusi',
                    'D. Koda'
                ],
                answer: 1,
                explanation: 'Klimaks adalah titik balik konflik paling menegangkan dalam cerita.'
            },
            {
                id: 9,
                question: 'Tahap penyelesaian masalah atau penentuan nasib tokoh di akhir cerita disebut...',
                options: [
                    'A. Klimaks',
                    'B. Resolusi',
                    'C. Orientasi',
                    'D. Pengenalan'
                ],
                answer: 1,
                explanation: 'Resolusi merupakan peleraian di mana konflik menemukan jalan keluar.'
            },
            {
                id: 10,
                question: 'Unsur intrinsik cerpen adalah unsur pembangun cerita yang berasal dari...',
                options: [
                    'A. Dalam cerita itu sendiri',
                    'B. Luar cerita (kehidupan penulis)',
                    'C. Penerbit buku',
                    'D. Komentar pembaca'
                ],
                answer: 0,
                explanation: 'Unsur intrinsik melebarkan struktur internal seperti tema, tokoh, alur, latar, dan amanat.'
            }
        ]
    },
    'quiz-tatabahasa': {
        title: 'Kuis Tata Bahasa & Kalimat Efektif',
        difficulty: 'Mudah',
        questions: [
            {
                id: 1,
                question: 'Manakah di bawah ini yang merupakan penulisan kata baku yang benar?',
                options: [
                    'A. Apotik',
                    'B. Apotek',
                    'C. Apotheek',
                    'D. Apotict'
                ],
                answer: 1,
                explanation: 'Kata baku menurut KBBI adalah "Apotek" (menggunakan huruf e).'
            },
            {
                id: 2,
                question: 'Manakah pasangan kata baku dan tidak baku yang tepat?',
                options: [
                    'A. Baku: Praktik - Tidak Baku: Praktek',
                    'B. Baku: Praktek - Tidak Baku: Praktik',
                    'C. Baku: Ijin - Tidak Baku: Izin',
                    'D. Baku: Kwalitas - Tidak Baku: Kualitas'
                ],
                answer: 0,
                explanation: 'Kata baku adalah "Praktik", sedangkan "Praktek" adalah bentuk tidak baku.'
            },
            {
                id: 3,
                question: 'Penggunaan tanda baca titik dua (:) yang tepat terdapat pada kalimat...',
                options: [
                    'A. Ibu membeli: sayur, buah, dan roti.',
                    'B. PKBM Hasanah Marzuki membutuhkan peralatan berikut: komputer, buku, dan alat tulis.',
                    'C. Saya ingin makan: bakso.',
                    'D. Hari ini: hujan deras.'
                ],
                answer: 1,
                explanation: 'Titik dua digunakan setelah pemerian lengkap jika didahului kata pengantar resmi.'
            },
            {
                id: 4,
                question: 'Ciri-ciri kalimat efektif adalah...',
                options: [
                    'A. Menggunakan kata-kata pemborosan (mubazir)',
                    'B. Bertele-tele dan ambiguous',
                    'C. Hemat kata, jelas fungsinya (S-P-O-K), dan tidak ambigu',
                    'D. Sangat panjang hingga 5 baris'
                ],
                answer: 2,
                explanation: 'Kalimat efektif harus hemat kata, memiliki struktur jelas, serta mudah dipahami.'
            },
            {
                id: 5,
                question: 'Manakah contoh kalimat hemat (efektif) yang tepat?',
                options: [
                    'A. Para siswa-siswa sedang belajar di kelas.',
                    'B. Para siswa sedang belajar di kelas.',
                    'C. Banyak para siswa-siswa belajar.',
                    'D. Seluruh para siswa belajar bersama-sama.'
                ],
                answer: 1,
                explanation: 'Kata "Para" sudah menandakan jamak, sehingga tidak perlu diulang "siswa-siswa".'
            },
            {
                id: 6,
                question: 'Penulisan huruf kapital yang benar terdapat pada kalimat...',
                options: [
                    'A. kami tinggal di kota depok.',
                    'B. Kami tinggal di Kota Depok.',
                    'C. Kami tinggal di kota Depok.',
                    'D. Kami Tinggal Di Kota depok.'
                ],
                answer: 2,
                explanation: 'Nama geografi (Depok) diawali huruf kapital, sedangkan "kota" diikuti nama diri ditulis "kota Depok".'
            },
            {
                id: 7,
                question: 'Imbuhan me- kan pada kata "baca" membentuk kata berimbuhan...',
                options: [
                    'A. Membacakan',
                    'B. Membaca',
                    'C. Dibacakan',
                    'D. Pembacaan'
                ],
                answer: 0,
                explanation: 'Imbuhan me-kan + baca menjadi membacakan.'
            },
            {
                id: 8,
                question: 'Penulisan imbuhan di- yang menunjukkan tempat yang tepat adalah...',
                options: [
                    'A. di makan',
                    'B. di PKBM Hasanah Marzuki',
                    'C. diJual',
                    'D. dibaca'
                ],
                answer: 1,
                explanation: 'Sebagai kata depan penunjuk tempat, "di" ditulis terpisah ("di PKBM...").'
            },
            {
                id: 9,
                question: 'Kalimat yang memuat unsur Subjek, Predikat, Objek, dan Keterangan (SPOK) secara utuh adalah...',
                options: [
                    'A. Budi membaca buku di perpustakaan.',
                    'B. Sedang membaca buku.',
                    'C. Di perpustakaan kemarin.',
                    'D. Budi yang sangat rajin.'
                ],
                answer: 0,
                explanation: 'Budi (Subjek), membaca (Predikat), buku (Objek), di perpustakaan (Keterangan Tempat).'
            },
            {
                id: 10,
                question: 'Kata hubung yang digunakan untuk menghubungkan dua kalimat yang bertentangan adalah...',
                options: [
                    'A. Dan',
                    'B. Tetap / Namun',
                    'C. Sehingga',
                    'D. Karena'
                ],
                answer: 1,
                explanation: 'Konjungsi pertentangan contohnya "namun", "tetapi", atau "akan tetapi".'
            }
        ]
    }
};

const MATERIALS_DATA = {
    'lho': {
        title: 'Teks Laporan Hasil Observasi (LHO)',
        category: 'Paket B - SMP',
        content: `
            <h3>1. Pengertian Teks LHO</h3>
            <p>Teks Laporan Hasil Observasi (LHO) adalah teks yang menyampaikan informasi faktual mengenai suatu objek (tumbuhan, hewan, fenomena alam, atau benda) berdasarkan hasil pengamatan langsung secara sistematis dan objektif.</p>

            <h3>2. Struktur Utama Teks LHO</h3>
            <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
                <li><strong>Pernyataan Umum / Definisi Umum:</strong> Berisi pembuka, pengertian dasar, atau klasifikasi umum tentang objek yang diamati.</li>
                <li><strong>Deskripsi Bagian:</strong> Rincian gambaran khusus mengenai bagian-bagian objek, ciri fisik, atau karakteristik uniknya.</li>
                <li><strong>Deskripsi Manfaat:</strong> Menjelaskan manfaat, fungsi, atau nilai kegunaan objek tersebut bagi manusia dan lingkungan.</li>
            </ul>

            <h3>3. Ciri Kebahasaan</h3>
            <p>Menggunakan kata istilah teknis/ilmiah (misal: <em>fotosintesis, habitat, mamalia</em>), kalimat definisi (menggunakan kata <em>adalah, merupakan</em>), dan kalimat fakta tanpa opini pribadi.</p>

            <div class="material-example-box">
                <strong>Contoh Paragraf Definisi Umum:</strong><br>
                "Lidah buaya (Aloe vera) adalah jenis tumbuhan berdaging tebal yang termasuk dalam genus Aloe. Tumbuhan ini kaya akan kandungan vitamin dan gel alami."
            </div>
        `
    },
    'eksposisi': {
        title: 'Teks Eksposisi',
        category: 'Paket B - SMP',
        content: `
            <h3>1. Pengertian Teks Eksposisi</h3>
            <p>Teks Eksposisi adalah teks ilmiah nonfiksi yang bertujuan untuk memaparkan, menjelaskan, dan menyampaikan ilmu pengetahuan atau informasi kepada pembaca secara jelas dan terperinci.</p>

            <h3>2. Struktur Teks Eksposisi</h3>
            <ol style="margin-left: 1.5rem; margin-bottom: 1rem;">
                <li><strong>Tesis (Pernyataan Pendapat):</strong> Sudut pandang atau gagasan utama penulis terhadap isu yang dibahas.</li>
                <li><strong>Rangkaian Argumen:</strong> Alasan, data statistik, atau bukti empiris yang mendukung kebenaran tesis.</li>
                <li><strong>Penegasan Ulang:</strong> Kesimpulan di akhir teks yang menegaskan kembali tesis secara ringkas.</li>
            </ol>

            <div class="material-example-box">
                <strong>Contoh Tesis:</strong><br>
                "Menjaga kebersihan lingkungan sekolah merupakan faktor penting dalam meningkatkan konsentrasi dan prestasi belajar peserta didik."
            </div>
        `
    },
    'puisi': {
        title: 'Puisi Rakyat (Pantun & Gurindam)',
        category: 'Paket B - SMP',
        content: `
            <h3>1. Pengertian Puisi Rakyat</h3>
            <p>Puisi rakyat adalah warisan sastra lisan masyarakat Melayu/Indonesia terdahulu yang terikat oleh aturan-aturan tertentu seperti jumlah baris, suku kata, dan rima akhir.</p>

            <h3>2. Ciri-Ciri Pantun</h3>
            <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
                <li>Tiap bait terdiri atas 4 baris.</li>
                <li>Tiap baris memuat 8 sampai 12 suku kata.</li>
                <li>Bersajak/berrima silang <strong>a-b-a-b</strong>.</li>
                <li>Baris 1 & 2 adalah <em>sampiran</em>, baris 3 & 4 adalah <em>isi</em>.</li>
            </ul>

            <h3>3. Ciri-Ciri Gurindam</h3>
            <p>Gurindam terdiri dari 2 baris per bait dengan rima <strong>a-a</strong>. Baris pertama berisi masalah/syarat, baris kedua berisi jawaban/akibat atau pesan nasihat moral.</p>

            <div class="material-example-box">
                <strong>Contoh Pantun:</strong><br>
                Beli asam di pasar baru (a)<br>
                Buah nangka masak di dahan (b)<br>
                Tuntutlah ilmu tanpa jemu (a)<br>
                Untuk bekal di masa depan (b)
            </div>
        `
    },
    'cerpen': {
        title: 'Unsur Intrinsik Cerita Pendek',
        category: 'Paket B - SMP',
        content: `
            <h3>1. Pengertian Cerita Pendek (Cerpen)</h3>
            <p>Cerpen adalah karya sastra fiksi yang menceritakan suatu peristiwa kehidupan tokoh secara fokus, padat, dan habis dibaca dalam sekali duduk.</p>

            <h3>2. Unsur Intrinsik Utama</h3>
            <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
                <li><strong>Tema:</strong> Gagasan inti atau ide pokok cerita.</li>
                <li><strong>Tokoh & Penokohan:</strong> Pelaku cerita dan penggambaran wataknya (protagonis, antagonis).</li>
                <li><strong>Alur (Plot):</strong> Rangkaian peristiwa (Orientasi ➔ Komplikasi/Klimaks ➔ Resolusi).</li>
                <li><strong>Latar (Setting):</strong> Latar tempat, waktu, dan suasana.</li>
                <li><strong>Sudut Pandang:</strong> Posisi pengarang dalam bercerita (Orang pertama "Aku" atau Orang ketiga "Dia/Nama").</li>
                <li><strong>Amanat:</strong> Pesan moral yang ingin disampaikan pengarang.</li>
            </ul>
        `
    },
    'tatabahasa': {
        title: 'Tata Bahasa & Kalimat Efektif',
        category: 'Paket B - SMP',
        content: `
            <h3>1. Kalimat Efektif</h3>
            <p>Kalimat efektif adalah kalimat yang disusun sesuai kaidah tata bahasa yang berlaku (PUEBI/EYD), memiliki unsur gramatikal yang jelas (Minimal Subjek dan Predikat), hemat kata, dan tidak membingungkan pembaca.</p>

            <h3>2. Penggunaan Kata Baku</h3>
            <p>Kata baku adalah kata yang pengucapannya dan penulisannya sesuai dengan Kamus Besar Bahasa Indonesia (KBBI).</p>
            <ul>
                <li>Baku: <em>Apotek, Praktik, Izin, Kualitas, Jadwal</em></li>
                <li>Tidak Baku: <em>Apotik, Praktek, Ijin, Kwalitas, JADWAL/Jadual</em></li>
            </ul>

            <div class="material-example-box">
                <strong>Contoh Perbaikan Kalimat:</strong><br>
                <em>Salah (Mubazir):</em> Para siswa-siswa sedang berdiskusi.<br>
                <em>Benar (Efektif):</em> Para siswa sedang berdiskusi.
            </div>
        `
    }
};
