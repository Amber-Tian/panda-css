const panda = document.querySelector('.panda');
const mouth = document.querySelector('.mouth');
const head = document.querySelector('.head');
const earLeft = document.querySelector('.ear-left');
const earRight = document.querySelector('.ear-right');
const eyeballLeft = document.querySelector('.eyeball-left');
const eyeballRight = document.querySelector('.eyeball-right');

panda.addEventListener('mouseover', () => {
    mouth.classList.remove('openMouth')
    head.classList.remove('breathe')
    earLeft.classList.remove('breathe')
    earRight.classList.remove('breathe')
    eyeballLeft.classList.add('active')
    eyeballRight.classList.add('active')
})

panda.addEventListener('mouseout', () => {
    mouth.classList.add('openMouth')
    head.classList.add('breathe')
    earLeft.classList.add('breathe')
    earRight.classList.add('breathe')
    eyeballLeft.classList.remove('active')
    eyeballRight.classList.remove('active')
})

