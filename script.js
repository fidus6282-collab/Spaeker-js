const text = document.getElementById("text");
const speak = document.getElementById("speak");
const stop = document.getElementById("stop");
const voiceSelect = document.getElementById("voiceSelect");
const volume = document.getElementById("volume");


function loadVoices() {
    voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = voices.map((v, i) => `<option value="${i}">${v.name}</option>`)
}

speechSynthesis.onvoiceschanged = loadVoices;
loadVoices();

speak.onclick = () => {
    if (!text.value) return alert("Matn yozing!");

    const speech = new SpeechSynthesisUtterance(text.value);
    speech.voice = voices[voiceSelect.value];
    speech.volume = volume.value;

    speechSynthesis.speak(speech);
};

// To‘xtatish
stop.onclick = () => speechSynthesis.cancel();
