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
