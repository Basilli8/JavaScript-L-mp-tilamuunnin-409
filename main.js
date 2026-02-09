function muunnaLampotila() {
const syote = document.getElementById("lampotilaSyote").value.trim();
const muunnosTyyppi = document.getElementById("muunnosTyyppi").value;
const tarkkuus = parseInt(document.querySelector('input[name="tarkkuus"]:checked').value);
const tulosDiv = document.getElementById("tulos");
const virheDiv = document.getElementById("virhe");

tulosDiv.textContent = "";
virheDiv.textContent = "";

if (syote === "") {
    virheDiv.textContent = "Anna lämpötila!";
    return;
}

const lampotila = parseFloat(syote);

if (isNaN(lampotila)) {
    virheDiv.textContent = "Syötteen täytyy olla lukuarvo.";
    return;
}

let muunnettu;
if (muunnosTyyppi === "CtoF") {
    if (lampotila < -273.15) {
        virheDiv.textContent = "Lämpötila ei voi olla alle absoluuttisen nollapisteen (-273.15 °C).";
        return;
}
muunnettu = (lampotila * 9 / 5) + 32;
tulosDiv.textContent = `${lampotila.toFixed(tarkkuus)} °C = ${muunnettu.toFixed(tarkkuus)} °F`;
} else if (muunnosTyyppi === "FtoC") {
    if (lampotila < -459.67) {
      virheDiv.textContent = "Lämpötila ei voi olla alle absoluuttisen nollapisteen (-459.67 °F).";
      return;
    }
muunnettu = (lampotila - 32) * 5 / 9;
tulosDiv.textContent = `${lampotila.toFixed(tarkkuus)} °F = ${muunnettu.toFixed(tarkkuus)} °C`;
}
}
