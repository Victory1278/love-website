const alphabetContainer = document.getElementById("alphabet");
const intro = document.querySelector(".intro");
const finalPage = document.getElementById("final");

const loveWords = [
    "Adorable and cute face of yours", "Beloved, you are my only bae", "Cherish you till my last breath", "Devotion of your love attracts me towards you", "Eternal beauty of you words, i wanna experience everyday",
    "Forever with you my love", "Grace", "Heartbeat of mine belongs to you", "Infinite happiness of yours is my inspiration to live", "Joy of being with you is unmatchable",
    "King of my heart", "Love you to the moon and back", "Magic of your love", "Nest", "Obsessed with you forever",
    "Passionate kisses is all i need", "Queen of yours loves you very much, my king", "Romance with me, fight with me but always be with me", "Soulmate and my Sweetheart", "Together forever with you",
    "Unconditional love that you give me no one else can give", "Vows", "Warmth of you love heals me", "XOXO kisses",
    "You are my home", "Zeal of loving you"
];

function startLove() {
    intro.classList.add("hidden");
    alphabetContainer.classList.remove("hidden");

    loveWords.forEach((word, index) => {
        const card = document.createElement("div");
        card.className = "card";
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `<span>${String.fromCharCode(65 + index)}</span>${word}`;
        card.onclick = () => {
            if (index === 25) showFinal();
        };
        alphabetContainer.appendChild(card);
    });
}

function showFinal() {
    alphabetContainer.classList.add("hidden");
    finalPage.classList.remove("hidden");
}
