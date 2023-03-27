let stars = document.getElementById('stars');
let meteorid = document.getElementById('meteorid');
let rocket = document.getElementById('rocket')
let text = document.getElementById('love');
let button = document.getElementById('button');
let audio = document.getElementById('musik');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    rocket.style.left = value * 0.25 + 'px';
    love.style.marginBottom = value * 1 + 'px';
    button.style.marginBottom = value * 1 +'px';
    audio.style.marginBottom = value * 1 + 'px';
});