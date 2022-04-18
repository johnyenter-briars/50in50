const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');
let selectedRating = 'Satisfied';

ratingsContainer.addEventListener('click', e => {
    if(e.target.parentNode.classList.contains('rating')) {
        removeActive();
        e.target.parentNode.classList.add('active');

        selectedRating = e.target.nextElementSibling.innerHTML;
    }
});

sendBtn.addEventListener('click', e => {
    panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank you!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>we'll whatever</p>
    `;

});

function removeActive() {
    ratings.forEach(r => {
        r.classList.remove('active');
    })
}