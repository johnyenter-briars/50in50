const buttons = document.getElementsByClassName("faq-toggle");

for(var btn of buttons){
    btn.addEventListener('click', e => {
        e.target.parentNode.parentNode.classList.toggle('active');
    });
}
