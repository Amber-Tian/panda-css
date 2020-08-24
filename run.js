const css = document.querySelector('.css')
const output = document.querySelector('.output')
const pause = document.querySelector('.pause')
const play = document.querySelector('.play')
const slow = document.querySelector('.slow')
const normal = document.querySelector('.normal')
const fast = document.querySelector('.fast')

const str = `
body {
    background-color: wheat;
}
.container {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50vh;
}
.panda {
    width: 45vh;
    height: 45vh;
    background-color: lightgreen;
    border-radius: 50%;
    position: relative;
    margin: 1em auto;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}
.body {
    position: absolute;
    width: 85%;
    height: 85%;
    border-radius: 50%;
    background-color: #000;
    top: 50%;
}
.chest {
    position: absolute;
    width: 70%;
    height: 70%;
    border-radius: 50%;
    background-color: #fff;
    top: 85%;
}
.head {
    background-color: #fff;
    width: 80%;
    height: 60%;
    border-radius: 50% / 58% 58% 42% 42%;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.head .mouth {
    position: absolute;
    background-color: #000;
    width: 8%;
    height: 4%;
    border-radius: 50%;
    bottom: 10%;
}
.openMouth {
    animation: openMouth 3s ease-in-out infinite alternate;
}
@keyframes openMouth {
    from {
        transform: scale(2);
    }
    to {
        transform: scale(1);
    }
}
.head .nose {
    position: absolute;
    bottom: 28%;
    background-color: #000;
    width: 12%;
    height: 12%;
    border-radius: 50% / 30% 30% 70% 70%;
}
.head > .face-left, .head > .face-right {
    background-color: #000;
    width: 38%;
    height: 38%;
    border-radius: 50% / 40% 40% 60% 60%;
    position: absolute;
    top: 30%;
}
.head .face-left {
    transform: rotate(-60deg);
    left: 6%;
}
.head .face-right {
    transform: rotate(60deg);
    right: 6%;
}
.eye-left, .eye-right {
    background-color: #fff;
    width: 36%;
    height: 36%;
    border-radius: 50%;
    position: absolute;
    top: 45%;
}
.eye-left {
    left: 35%;
    transform: rotate(20deg);
}
.eye-right {
    right: 35%;
    transform: rotate(-20deg);
}
.eyeball-left, .eyeball-right {
    background-color: #000;
    position: absolute;
    width: 55%;
    height: 12%;
    border-radius: 50%;
    top: 45%;
}
.active {
    height: 65%;
    top: 25%
}
.eyeball-left {
    left: 20%;
    transform: rotate(40deg);
}
.eyeball-right {
    right: 20%;
    transform: rotate(-40deg);
}
.ear-left, .ear-right {
    position: absolute;
    top: 24%;
    background-color: #000;
    width: 20%;
    height: 20%;
    border-radius: 50%;
}
.ear-left {
    left: 10%;
}
.ear-right {
    right: 10%;
}
.breathe {
    animation: breathe 3s ease-in-out infinite alternate;
}
@keyframes breathe {
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(-5%);
    }
}`

let n = 1, speed = 100 

const run = () => {
    n += 1
    if (n > str.length) {
        window.clearInterval(timer)
        return
    }
    output.innerText = css.innerHTML = str.substr(0, n)
    output.scrollTop = output.scrollHeight
}

let timer = setInterval(run, speed)

const newTimer = () => {
    timer =  setInterval(run, speed)
}

const stop = () => {
    window.clearInterval(timer)
}

pause.onclick = () => stop()
play.onclick = () => {
    stop()
    newTimer()
}
slow.onclick = () => {
    stop()
    speed = 300
    newTimer()
}
normal.onclick = () => {
    stop()
    speed = 100
    newTimer()
}
fast.onclick = () => {
    stop()
    speed = 0
    newTimer()
}