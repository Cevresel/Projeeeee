document.getElementById("veriFormu").addEventListener("submit", function (e) {
    e.preventDefault();

    const tur = document.getElementById("tur").value;
    const kilo = parseFloat(document.getElementById("kilo").value);
    const puan = hesaplaPuan(tur, kilo);
    const tarih = new Date().toLocaleDateString();

    const veriler = JSON.parse(localStorage.getItem("atIkVerileri")) || [];
    veriler.push({ tur, kilo, puan, tarih });

    localStorage.setItem("atIkVerileri", JSON.stringify(veriler));
    alert("Veri başarıyla kaydedildi!");
    window.location.href = "index.html";
});

// Puan hesaplama
function hesaplaPuan(tur, kilo) {
    const puanlar = {
        "Kağıt": 10,
        "Plastik": 15,
        "Cam": 20,
        "Metal": 25,
        "Pil ve Elektronik": 50
    };
    return kilo * (puanlar[tur] || 0);
}

// Ana sayfaya dönmek için
function geriDon() {
    window.location.href = "index.html";
}
