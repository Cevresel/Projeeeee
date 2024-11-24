// Kullanıcının atık bilgilerini göster
function verileriGoster() {
    const veriler = JSON.parse(localStorage.getItem("atIkVerileri")) || [];
    const veriListesi = document.getElementById("veriListesi");

    if (veriler.length === 0) {
        veriListesi.innerHTML = "<p>Henüz veri yok.</p>";
    } else {
        veriListesi.innerHTML = veriler.map((veri, index) => `
            <div class="veri">
                <p><strong>Atık Türü:</strong> ${veri.tur}</p>
                <p><strong>Kilo:</strong> ${veri.kilo}</p>
                <p><strong>Puan:</strong> ${veri.puan}</p>
                <p><strong>Tarih:</strong> ${veri.tarih}</p>
            </div>
        `).join("");
    }
}

// Ana sayfaya dönmek için
function geriDon() {
    window.location.href = "index.html";
}

// Sayfa yüklendiğinde verileri göster
document.addEventListener("DOMContentLoaded", verileriGoster);
