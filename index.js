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

function menu(e){
    let songs ={ 
        1:` 
            pg pf p g h f | p h g f d f |
            jj Jh ss j J h | d J j h g f |
            pg pf pp g h f | p h g f d f |
            s j J h s j J h d J j h g d |
            p fgd g gfp | p fgd g gf |
            p fgd j j h d | fg df s d |
            p fgd j j h d fg djhfgd |`,
        2: `
            osDdsDsdsOPo
            osDdsDsdsoIi
            
            i O a d
            i O a s
            tYPOoPOOoort
            ssaP dsOo
            oPoi | i O i o
            PosDdsDsdsOPo
            osDdsDsdsoIi
            ssaP dsOo
            tYPOoPOOoort`,
        3:`
            ert tyu uoy uytre
            ert tyu uop o ap
            p a s a p o i u y t uy
            trt trt rtytre
            ewe ewe wertre
            ert tyu uoy uytre
            ewe ewe wertre`,
        4:`
            wt wer 00 e wqw 88
            9 90q qwe rty 
            wu yty rw t rer 00
            e wqw 88 t rew  
            
            rtyu ytrty ww t rewer 00 
            t ert ert eti 
            i uytyu tt y trert ee
            t rew 88 t rew`,
        5:`
            Y T Q [EI] [EI] 
            Y T Q [EI] [EI] 
            Y T Q [EI] ( [EI] * [ri] [ri] 
            Y T * [ri] [ri] 
            Y T * [ri] [ri] 
            Y T * [ri] ( [ri] Q [EI] [EI] 
            Q [EI] ( [EI] * [ri] [ri] 
            * [ri] ( [ri] Q [EI] [EI]`,
        }
    let song_links = {
        1:"https://www.youtube.com/embed/zL2YL3YfxvA",
        2:"https://www.youtube.com/embed/IgGa7Hespzo",
        3:"https://www.youtube.com/embed/C-nswSgC9g4",
        4:"https://www.youtube.com/embed/7nr0xw6zfTo",
        5:"https://www.youtube.com/embed/qJT24vXykTU",
    
    } 
    let song =  e.target.attributes["data-song"].value
    let song_link = document.getElementsByTagName("iframe");
    song_link[0].setAttribute('src', song_links[song]);   
        console.log(song_link);
    document.querySelector(".text").innerHTML = songs[song];
}


let keys = Array.from(document.querySelectorAll(".key"));
let keys_black = Array.from(document.querySelectorAll(".key_black"));
let menu_keys = Array.from(document.querySelectorAll(".song_menu__bar--item"));

keys.forEach(key => key.addEventListener('mousedown', clickoutput));
keys_black.forEach(key => key.addEventListener('mousedown', clickoutput));
menu_keys.forEach(key => key.addEventListener('click', menu));


keys.forEach(key => key.addEventListener('transitionend', removeTransition));
keys_black.forEach(key => key.addEventListener("transitionend", removeTransition));



window.addEventListener("keydown", output);

