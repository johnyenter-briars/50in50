const password = document.getElementById('password');
const background = document.getElementById('background');

password.addEventListener('click', e => {
    const input = e.target.value;
    const length = input.length;
    const blurValue = 5 - length * 2;

    background.style.filter = `blur(${blurValue}px)`;
});
