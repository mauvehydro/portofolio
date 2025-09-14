const container = document.querySelector('.container');
const inner = document.querySelector('.inner-container');
const navBtns = document.querySelectorAll('.nav-btn');

let angle = 0;
let speed = 0.005;
let radius = 3;
let tiltAmount = 0.5;

function animate() {

  const offsetX = Math.cos(angle) * radius;
  const offsetY = Math.sin(angle * 1.3) * radius;
  const tilt = (offsetX / radius) * tiltAmount;

  container.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(${tilt}deg)`;

  angle += speed;

  requestAnimationFrame(animate);

}

animate();

const defaultContent = inner.innerHTML;

const contentMap = {
  'about-btn': `
    <p>i only accept commissions starting from 25$ and above. i prefer working alone but i have no issues working with others (coding wise). i don't have fixed prices, depending on the difficulty of the task we can negotiate the price. also, an upfront payment of 50% is required. i prefer paypal, but i also accept robux (tax covered)</p>
  `,
  'contact-btn': `
    <p>you're free to message me on discord @mauvehydro</a></p>
  `,
  'info-btn': `
    <p>i've been on roblox studio since i created my first account back in 2016. altough i didn't understand much, i kept messing around. i started learning luau in 2020 and i began taking it seriously in 2022.
    i'm experienced in both modular and oop frameworks and i have a weird obsession of writing clean and optimized code. i'm taking projects seriously and i dedicate myself to them as if they were mine</p>
  `,
  'projects-btn': `
    <p>optimized modular (easy to add new buttons/droppers/upgraders/etc) and oop tycoon with data saving (it's also my first commission)</p>
  `
};

navBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const wasActive = btn.classList.contains('active');

    navBtns.forEach(b => b.classList.remove('active'));

    if (wasActive) {
      inner.innerHTML = defaultContent;
    } else {
      btn.classList.add('active');
      inner.innerHTML = contentMap[btn.id] || defaultContent;
    }
  });
});