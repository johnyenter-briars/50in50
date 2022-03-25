const header = document.getElementById('header');
const title = document.getElementById('title');
const exceprt = document.getElementById('excerpt');
const profileImg = document.getElementById('profile_img');
const nameEl = document.getElementById('name');
const date = document.getElementById('date');

const animatedBgs = document.querySelectorAll('.animated-bg');
const animatedBgTxts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
    header.innerHTML = `<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="">`;
    title.innerHTML = `Lorem ipsum dolor sit amet.`;
    exceprt.innerHTML = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, aliquam.`;
    profileImg.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />`;
    nameEl.innerHTML = `John Doe`;
    date.innerHTML = `October 08, 2020`;

    animatedBgs.forEach(bg => bg.classList.remove('animated-bg'));
    animatedBgTxts.forEach(bg => bg.classList.remove('animated-bg-text'));
}
