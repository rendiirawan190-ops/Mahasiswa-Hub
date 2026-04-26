// 1. AI Logic Placeholder
function openAI() {
    const status = document.getElementById('ai-status');
    status.innerText = "AI sedang berpikir...";
    
    // Simulate AI response
    setTimeout(() => {
        status.innerHTML = "<em>'Saran AI: Fokus selesaikan Bab 3 Skripsi hari ini!'</em>";
    }, 1500);
}

// 2. WhatsApp Bot Link Generator
document.getElementById('wa-bot-btn').addEventListener('click', function() {
    const message = "Halo MyManager! Saya mau tanya update jadwal kuliah saya hari ini.";
    const phoneNumber = "628xxxxxxxx"; // Your Bot Number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(url, '_blank');
});

// 3. Finance Display Logic
function updateFinanceDisplay(amount) {
    document.getElementById('display-finance').innerText = `Rp ${amount.toLocaleString('id-ID')}`;
}

// 1. Function to open/close the modal
function toggleModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = modal.style.display === 'none' ? 'flex' : 'none';
}

// 2. Link the "Daftar Akun" button in the Nav
document.querySelector('.nav-links .btn-primary').addEventListener('click', (e) => {
    e.preventDefault();
    toggleModal('auth-modal');
});

// 3. Handle the Sign Up Logic
function handleSignUp() {
    const name = document.getElementById('reg-name').value;
    const univ = document.getElementById('reg-univ').value;
    const email = document.getElementById('reg-email').value;

    if (name && univ && email) {
        const userData = {
            fullName: name,
            university: univ,
            email: email,
            joinDate: new Date().toLocaleDateString()
        };

        // Save to LocalStorage
        localStorage.setItem('mhs_user', JSON.stringify(userData));

        alert(`Selamat datang, ${name}! Akun Mahasiswa kamu telah siap.`);
        toggleModal('auth-modal');
        
        // Refresh UI to show the user's name
        location.reload(); 
    } else {
        alert("Mohon isi semua data ya!");
    }
}

// 4. Check if user is already logged in on Load
document.addEventListener('DOMContentLoaded', () => {
    const savedUser = JSON.parse(localStorage.getItem('mhs_user'));
    if (savedUser) {
        // Change the "Daftar Akun" button to the User's name
        const authBtn = document.querySelector('.nav-links .btn-primary');
        authBtn.innerText = savedUser.fullName;
        authBtn.style.background = "#059669"; // Change color to green
        
        // Update the Hero text
        document.querySelector('.hero-text h1').innerHTML = `Semangat Kuliah, <br><span>${savedUser.fullName}!</span>`;
    }
});
