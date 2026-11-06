/**
 * STORAGE MODULE (LocalStorage Manager)
 * Mengelola simpan & ambil data identitas siswa dan papan peringkat secara lokal.
 */
const STORAGE_KEYS = {
    USER_IDENTITY: 'pkbm_hasanah_user_identity',
    LEADERBOARD: 'pkbm_hasanah_leaderboard'
};

const StorageManager = {
    saveUser(nama, sekolah) {
        const userData = {
            nama: nama.trim(),
            sekolah: sekolah.trim() || 'PKBM Hasanah Marzuki',
            savedAt: new Date().toISOString()
        };
        localStorage.setItem(STORAGE_KEYS.USER_IDENTITY, JSON.stringify(userData));
        return userData;
    },

    getUser() {
        const data = localStorage.getItem(STORAGE_KEYS.USER_IDENTITY);
        return data ? JSON.parse(data) : null;
    },

    clearUser() {
        localStorage.removeItem(STORAGE_KEYS.USER_IDENTITY);
    },

    saveScore(score) {
        const user = this.getUser();
        if (!user) return;

        let leaderboard = this.getLeaderboard();
        const existingIndex = leaderboard.findIndex(
            item => item.nama.toLowerCase() === user.nama.toLowerCase() && item.sekolah.toLowerCase() === user.sekolah.toLowerCase()
        );

        if (existingIndex !== -1) {
            if (score > leaderboard[existingIndex].score) {
                leaderboard[existingIndex].score = score;
                leaderboard[existingIndex].updatedAt = new Date().toISOString();
            }
        } else {
            leaderboard.push({
                nama: user.nama,
                sekolah: user.sekolah,
                score: score,
                updatedAt: new Date().toISOString()
            });
        }

        // Urutkan nilai tertinggi
        leaderboard.sort((a, b) => b.score - a.score);
        localStorage.setItem(STORAGE_KEYS.LEADERBOARD, JSON.stringify(leaderboard));
        return leaderboard;
    },

    getLeaderboard() {
        const data = localStorage.getItem(STORAGE_KEYS.LEADERBOARD);
        if (data) {
            return JSON.parse(data);
        }
        
        // Data default awal agar leaderboard tidak kosong
        const initialData = [
            { nama: "Ahmad Rizky", sekolah: "PKBM Hasanah Marzuki", score: 90 },
            { nama: "Siti Rahmawati", sekolah: "PKBM Hasanah Marzuki", score: 80 },
            { nama: "Budi Santoso", sekolah: "PKBM Hasanah Marzuki", score: 70 }
        ];
        localStorage.setItem(STORAGE_KEYS.LEADERBOARD, JSON.stringify(initialData));
        return initialData;
    },

    getPersonalBest() {
        const user = this.getUser();
        if (!user) return 0;
        const leaderboard = this.getLeaderboard();
        const found = leaderboard.find(
            item => item.nama.toLowerCase() === user.nama.toLowerCase()
        );
        return found ? found.score : 0;
    }
};
