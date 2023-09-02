
var sounds = {
    "w": "./sounds/tom-1.mp3",
    "a": "./sounds/tom-2.mp3",
    "s": "./sounds/tom-3.mp3",
    "d": "./sounds/tom-4.mp3",
    "j": "./sounds/snare.mp3",
    "k": "./sounds/crash.mp3",
    "l": "./sounds/kick-bass.mp3"
};

function handleClick() {
    var key = this.innerHTML;
    var audio = new Audio(sounds[key])
    addAnimation(key);
    audio.play();
}

function handleKeys(Event) {
    var key = Event['key'];
    if (key in sounds) {
        var audio = new Audio(sounds[key]);
        addAnimation(key);
        audio.play();
    }
}

function addAnimation(key) {
    var cur_btn = document.querySelector("." + key);
    cur_btn.classList.add("pressed");
    setTimeout(function () {
        cur_btn.classList.remove("pressed");
    }, 50);
}

buttons = document.querySelectorAll("button.drum");
buttons.forEach(element => {

    element.addEventListener("click", handleClick);
    
});
document.addEventListener("keydown", handleKeys,Event);
