document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Novērš lapas pārlādi

        // Datu iegūšana no laukiem
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const country = document.getElementById('country').options[document.getElementById('country').selectedIndex].text;

        // Datu apstrāde - vienkārša validācija un ziņojuma izveide
        if (name && email) {
            formMessage.innerHTML = `Paldies, <strong>${name}</strong>! Mēs nosūtīsim informāciju par <strong>${country}</strong> uz tavu e-pastu: ${email}.`;
            formMessage.classList.remove('hidden');
            formMessage.classList.add('success');

            // Formas notīrīšana
            contactForm.reset();
        }
    });

    // Interaktīvs elements: Galerijas attēlu klikšķa funkcija
    const images = document.querySelectorAll('.gallery-item');
    images.forEach(img => {
        img.addEventListener('click', () => {
            alert("Jūs apskatāt attēlu: " + img.alt);
        });
    });
});