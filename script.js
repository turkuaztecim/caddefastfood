// Sadece renk değişimini göstermek için basit bir örnek
// Gerçek bir açılış sayacı için daha gelişmiş bir çözüm kullanmanız gerekebilir.

const countdownElement = document.getElementById('countdown');

// Renk değişimini tetiklemek için bir fonksiyon (gereksiz)
function changeColor() {
    countdownElement.style.color = countdownElement.style.color === 'yellow' ? 'orange' : 'yellow';
}

// Her 1 saniyede bir rengi değiştir (gereksiz)
// setInterval(changeColor, 1000);
