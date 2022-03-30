const button = document.getElementById('button');
const toastsDiv = document.getElementById('toasts');

const messages = [
    "Message 1",
    "Message 2",
    "Message 3",
    "Message 4",
];

button.addEventListener('click', () => createNotification());

function createNotification() {

    const toastDiv = document.createElement('div');
    toastDiv.classList.add('toast');

    toastDiv.innerText = getRandomMessage();

    toastsDiv.appendChild(toastDiv);

    setTimeout(() => {
        toastDiv.remove();
    }, 3000);
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}