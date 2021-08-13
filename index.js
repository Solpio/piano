const color = ["0","1", "2", "3","4","5","6","7","8","9","A","B","C","D","E","F"]
function randomColor(){
    return `#${color[Math.floor(Math.random()*color.length)]}${color[Math.floor(Math.random()*color.length)]}${color[Math.floor(Math.random()*color.length)]}${color[Math.floor(Math.random()*color.length)]}${color[Math.floor(Math.random()*color.length)]}${color[Math.floor(Math.random()*color.length)]}`
}

function removeTransition(e) {
    if (e.propertyName !== 'background-color') return;
    e.target.classList.remove('playing');
    e.target.style.backgroundColor = null;
  }

function output(e){
    let audio 
    let note
    if (e.shiftKey){
        audio = document.querySelector(`audio[data-key="shift+${e.keyCode}"]`);
        note = document.querySelector(`div[data-key="shift+${e.keyCode}"]`);
    }else{
        audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        note = document.querySelector(`div[data-key="${e.keyCode}"]`);
    }
    if (!audio) return; 
    console.log(audio);
    audio.currentTime = 0;
    audio.play();
    note.classList.add("playing");

    note.style.backgroundColor = randomColor();

}

function clickoutput(e){
    let key = e.target.attributes["data-key"].value;
    let audio = document.querySelector(`audio[data-key="${key}`)
    let note = document.querySelector(`div[data-key="${key}"]`);
    if (!audio) return; 
    console.log(audio);
    audio.currentTime = 0;
    audio.play();
    note.classList.add("playing");

    note.style.backgroundColor = randomColor();
}



let keys = Array.from(document.querySelectorAll(".key"));
let keys_black = Array.from(document.querySelectorAll(".key_black"));

keys.forEach(key => key.addEventListener('click', clickoutput));
keys_black.forEach(key => key.addEventListener('click', clickoutput));



keys.forEach(key => key.addEventListener('transitionend', removeTransition));
keys_black.forEach(key => key.addEventListener("transitionend", removeTransition))

window.addEventListener("keydown", output);

