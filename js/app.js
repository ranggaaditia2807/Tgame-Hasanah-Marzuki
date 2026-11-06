/**
 * MAIN APPLICATION ENTRY POINT
 * Mengelola Splash Screen, Dialog Modal Identitas Siswa, dan Penginisialisasian UI.
 */
document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    const appContainer = document.getElementById('app-container');
    const modalIdentity = document.getElementById('modal-identity');
    const formIdentity = document.getElementById('form-identity');

    // 1. Splash Screen Event (Klik di mana saja untuk mulai)
    splashScreen.addEventListener('click', () => {
        splashScreen.style.opacity = '0';
        splashScreen.style.transition = 'opacity 0.4s ease';
        setTimeout(() => {
            splashScreen.classList.add('hidden');
            appContainer.classList.remove('app-hidden');
            checkUserIdentity();
        }, 400);
    });

    // 2. Cek apakah identitas siswa sudah tersimpan di LocalStorage
    function checkUserIdentity() {
        const currentUser = StorageManager.getUser();
        if (!currentUser) {
            modalIdentity.classList.remove('hidden');
        } else {
            UIController.updateUserGreeting();
            UIController.init();
        }
    }

    // 3. Form Submit Handler (Simpan Identitas Siswa)
    formIdentity.addEventListener('submit', (e) => {
        e.preventDefault();
        const namaInput = document.getElementById('input-nama').value;
        const sekolahInput = document.getElementById('input-sekolah').value;

        if (!namaInput.trim()) {
            alert('Silakan masukkan nama lengkapmu terlebih dahulu.');
            return;
        }

        // Simpan ke LocalStorage via StorageManager
        StorageManager.saveUser(namaInput, sekolahInput);
        modalIdentity.classList.add('hidden');

        // Init UI Controller
        UIController.updateUserGreeting();
        UIController.init();
    });

    // 4. Klik Profil Siswa di Navbar untuk Mengubah Identitas
    document.getElementById('user-badge')?.addEventListener('click', () => {
        const user = StorageManager.getUser();
        if (user) {
            document.getElementById('input-nama').value = user.nama;
            document.getElementById('input-sekolah').value = user.sekolah;
        }
        modalIdentity.classList.remove('hidden');
    });
});
