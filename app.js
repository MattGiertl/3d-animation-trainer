// Movement animation
const card = document.querySelector('.card');
const container = document.querySelector('.container');
//Items
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.p');
const description = document.querySelector('.title');
const sizes = document.querySelector('.title');

// Moving animation Event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 15
    let yAxis = (window.innerHeight / 2 - e.pageY) / 15

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate in
container.addEventListener("mouseenter", e => {
    card.style.transition = 'none';
})

// Animate out
container.addEventListener("mouseleave", _ => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
})