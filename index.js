function output(e){
    let audio 
    let note
    if (!e.shiftKey){
     audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
     note = document.querySelector(`div[data-key="${e.keyCode}"]`);
    }else{
        console.log(e.keyCode)
        audio = document.querySelector(`audio[data-key="shift+${e.keyCode}"]`);
        note = document.querySelector(`div[data-key="shift+${e.keyCode}"]`);
    }
    if (!audio) return; 

    audio.currentTime = 0;
    audio.play();
    
}

window.addEventListener("keydown", output);

