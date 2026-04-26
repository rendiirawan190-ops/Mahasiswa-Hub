// Menjalankan script setelah HTML beres dimuat
document.addEventListener('DOMContentLoaded', () => {
    console.log("✅ MyManager Ready!");
    checkUserLogin();
});

// 1. Modal Logic (Buka/Tutup pop-up)
function toggleModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = modal.style.display === 'none' ? 'flex' : 'none';
}

// 2. Auth Logic (Simpan data mahasiswa ke memori browser)
function handleSignUp() {
    const name = document.getElementById('reg-name').value;
    const univ = document.getElementById('reg-univ').value;
    
    if (name && univ) {
        const userData = { fullName: name, campus: univ };
        localStorage.setItem('mhs_user', JSON.stringify(userData));
        toggleModal('auth-modal');
        checkUserLogin(); // Update tampilan tanpa perlu refresh
    } else {
        alert("Nama dan Kampus wajib diisi ya!");
    }
}

// Mengecek apakah user sudah daftar sebelumnya
function checkUserLogin() {
    const savedUser = JSON.parse(localStorage.getItem('mhs_user'));
    if (savedUser) {
        // Ganti tombol daftar jadi nama user
        const btnDaftar = document.getElementById('btn-daftar');
        btnDaftar.innerText = `👋 Hai, ${savedUser.fullName}`;
        btnDaftar.style.background = "#059669"; // Ubah warna jadi hijau
        btnDaftar.onclick = null; // Matikan pop-up daftar

        // Update teks Hero
        const heroGreeting = document.getElementById('hero-greeting');
        heroGreeting.innerHTML = `Semangat Anak <span>${savedUser.campus}</span>! <br>IPK Tetap <span>Badai.</span>`;
    }
}

// 3. WhatsApp Bot Link Generator
document.getElementById('wa-bot-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem('mhs_user'));
    const nama = savedUser ? savedUser.fullName : "Mahasiswa";
    
    const message = `Halo bot MyManager, saya ${nama}. Tolong ingatkan tugas saya hari ini!`;
    const phoneNumber = "6280000000000"; // Ganti dengan nomor WA Bot/Pribadi kamu
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(url, '_blank');
});

// 4. AI Chat Widget Logic
function toggleAI() {
    const win = document.getElementById('chat-window');
    win.style.display = win.style.display === 'none' ? 'block' : 'none';
}

function askAI() {
    const input = document.getElementById('ai-input');
    const status = document.getElementById('ai-status');
    
    if(input.value.trim() !== "") {
        status.innerText = "🤖 AI sedang mengetik...";
        input.value = "";
        
        // Simulasi balasan AI (Nantinya diganti dengan API betulan)
        setTimeout(() => {
            status.innerHTML = "<em>Saran AI: Jangan lupa periksa sitasi jurnal terbaru untuk bab metodologimu!</em>";
        }, 1500);
    }
}
