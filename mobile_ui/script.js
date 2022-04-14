const contents = document.querySelectorAll('.content');
const liEls = document.querySelectorAll('nav ul li');

liEls.forEach((liEl, index )=> {
    liEl.addEventListener('click', e => {
        hideAllContents();
        hideAllItems();

        liEl.classList.add('active');
        contents[index].classList.add("show");

    });
});


function hideAllContents() {
    contents.forEach(content => {
        content.classList.remove('show');
    });
}

function hideAllItems() {
    liEls.forEach(item => {
        item.classList.remove('active');
    });
}