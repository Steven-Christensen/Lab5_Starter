// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let horn = document.getElementById("horn-select"); //grabs the drop down and sets it to horn
  let audioButton = document.querySelector("button");
  let audio = document.querySelector("audio");
  let volume = document.querySelector("input");

  let img = document.querySelectorAll('img');
  const confetti = new JSConfetti();
  horn.addEventListener("change", function(){
    //let img2 = document.getElementsByTagName('img').item(0);
    if(horn.value == "air-horn")
    {
      img[0].src = "assets/images/air-horn.svg";
    }
    else if(horn.value == "car-horn")
    {
      img[0].src = "assets/images/car-horn.svg";
    }
    else
    {
      img[0].src = "assets/images/party-horn.svg";
    }
  });

    volume.addEventListener("input", function(){
      
      if(volume.value == 0)
      {
        img[1].src = "assets/icons/volume-level-0.svg";
      }
      else if(this.value >=1 && this.value < 33)
      {
        img[1].src = "assets/icons/volume-level-1.svg";
      }
      else if(this.value >=33 && this.value < 67)
      {
        img[1].src = "assets/icons/volume-level-2.svg";
      }
      else
      {
        img[1].src = "assets/icons/volume-level-3.svg";
      }
      audio.volume = volume.value/100;
    
  });

    audioButton.addEventListener("click", function(){
      if(horn.value == "air-horn")
      {
        audio.src = "assets/audio/air-horn.mp3";
        audio.play();
      }
      else if(horn.value == "car-horn")
      {
        audio.src = "assets/audio/car-horn.mp3";
        audio.play();
      }
      else
      {
        audio.src = "assets/audio/party-horn.mp3";
        audio.play();
        confetti.addConfetti({confettiNumber: 5000,
          emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
       })
        confetti.addConfetti();
      }
    });
    
    
 
  

}