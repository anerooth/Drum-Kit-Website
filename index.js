for(var i = 0;i < document.querySelectorAll(".drum").length;i++)
    {
        document.querySelectorAll(".drum")[i].addEventListener("click",playAudio);
    }

function playAudio()
{
    var buttonHtml = this.innerHTML;
    audioPlayer(buttonHtml);
    buttonAnimation(buttonHtml);
}

document.addEventListener("keydown",keypress);

function keypress()
{
    var pressedkey = event.key;
    audioPlayer(pressedkey);
    buttonAnimation(pressedkey);
}

function audioPlayer(identifier)
{
    switch (identifier) 
    {
    case "w":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;
    case "a":
        var kickBass = new Audio('sounds/kick-bass.mp3');
        kickBass.play();
        break;
    case "s":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;
    case "d":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;
    case "j":
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;
    case "k":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;
    case "l":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;
    default:
        console.log(identifier);
    }
}

function buttonAnimation(key)
{
    var clicked = document.querySelector("." + key);
    clicked.classList.add("pressed");  
    setTimeout(function ()
    {
        clicked.classList.remove("pressed");
    },100); 
}
