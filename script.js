// Le texte de ta déclaration personnalisé pour Sanda
const messageDeclaration = "Salut Sanda... J'ai créé ce petit site pour te dire ce que je ressens. C'est vrai, j'aurais peut-être dû te le dire en face ou par message, mais à chaque fois que je te vois, je me fige et je perds mes mots. Au moment où je code ces lignes, j'hésite encore et je ne sais pas si j'aurai le courage de t'envoyer le lien... Mais je me lance. Tu sais, je t'aime. C'est peut-être un peu bizarre parce qu'on n'a jamais vraiment eu l'occasion de se parler, mais c'est ce que je ressens au fond de moi. Bref... Je t'aime, et j'aimerais vraiment qu'on apprenne à se connaître et que tu deviennes ma petite amie. ❤️ lique sur continier";

let indexTexte = 0;

// Sélection des éléments du DOM
const btnStart = document.getElementById('btn-start');
const btnToStep3 = document.getElementById('btn-to-step3');
const btnYes = document.getElementById('btn-yes');
const btnNo = document.getElementById('btn-no');

const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');
const step4Yes = document.getElementById('step4-yes');
const step4No = document.getElementById('step4-no');
const typewriterContainer = document.getElementById('typewriter-text');

// Fonction pour passer d'une étape à une autre
function goToStep(currentStep, nextStep) {
    currentStep.classList.remove('active');
    nextStep.classList.add('active');
}

// Clic sur l'emoji de départ 🥰
btnStart.addEventListener('click', () => {
    goToStep(step1, step2);
    ecrireTexte();
});

// Effet machine à écrire pour la déclaration
function ecrireTexte() {
    if (indexTexte < messageDeclaration.length) {
        typewriterContainer.innerHTML += messageDeclaration.charAt(indexTexte);
        indexTexte++;
        setTimeout(ecrireTexte, 45); // Vitesse d'affichage par lettre (ms)
    } else {
        btnToStep3.classList.remove('hidden'); // Affiche le bouton "Continuer" à la fin du texte
    }
}

// Clic pour passer à la question
btnToStep3.addEventListener('click', () => {
    goToStep(step2, step3);
});

// Clic sur OUI
btnYes.addEventListener('click', () => {
    goToStep(step3, step4Yes);
});

// Clic sur NON
btnNo.addEventListener('click', () => {
    goToStep(step3, step4No);
});

// --- Générateur d'Emojis Flottants ---
const emojis = ['❤️', '💖', '💘', '💙', '✨', '🌸', '🌹'];

function createFloatingEmoji() {
    const emojiEl = document.createElement('div');
    emojiEl.classList.add('emoji-floating');
    emojiEl.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    emojiEl.style.left = Math.random() * 100 + 'vw';
    
    const size = Math.random() * 20 + 15 + 'px';
    emojiEl.style.fontSize = size;
    
    const duration = Math.random() * 3 + 3 + 's';
    emojiEl.style.animationDuration = duration;

    document.body.appendChild(emojiEl);

    setTimeout(() => {
        emojiEl.remove();
    }, 6000);
}

// Génère un emoji toutes les 400 millisecondes
setInterval(createFloatingEmoji, 400);