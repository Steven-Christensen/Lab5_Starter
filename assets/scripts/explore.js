// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var synth = window.speechSynthesis;

  var inputForm = document.querySelector('button');
  var inputTxt = document.querySelector('textarea');
  var voiceSelect = document.querySelector('select');
  let image = document.querySelector("img");

  let utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  
  var voices = [];
  
  function populateVoiceList() {
    voices = synth.getVoices();
  
    for(var i = 0; i < voices.length ; i++) {
      var option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
  
      if(voices[i].default) {
        option.textContent += ' -- DEFAULT';
      }
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  
  inputForm.addEventListener("click", function(event) {
    event.preventDefault();
  
    utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for(var i = 0; i < voices.length ; i++) {
      if(voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    //utterThis.pitch = pitch.value;
    //utterThis.rate = rate.value;
    synth.speak(utterThis);
    utterThis.onstart =()=> {
      image.src = "assets/images/smiling-open.png";
    }
    utterThis.onend =()=> {
      image.src = "assets/images/smiling.png";
    }
    inputTxt.blur();
  });
}