document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('pricing-form');
    const courseSelect = document.getElementById('course');
    const hoursInput = document.getElementById('hours');
    const daysCheckboxes = document.querySelectorAll('input[name="days[]"]');
    const totalPriceSpan = document.getElementById('total-price');

    function calculatePrice() {
        const coursePrice = parseInt(courseSelect.value);
        const hours = parseInt(hoursInput.value);
        const selectedDays = Array.from(daysCheckboxes).filter(cb => cb.checked).length;
        const totalPrice = coursePrice * hours * selectedDays;
        totalPriceSpan.textContent = totalPrice || 0;
    }

    courseSelect.addEventListener('change', calculatePrice);
    hoursInput.addEventListener('input', calculatePrice);
    daysCheckboxes.forEach(cb => cb.addEventListener('change', calculatePrice));

    calculatePrice(); // Calcul initial

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Formulaire soumis ! Total : ' + totalPriceSpan.textContent + ' €');
        // Ici, vous pouvez ajouter la logique pour envoyer les données à un serveur
    });
});
