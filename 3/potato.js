

function toggleAltMode () {
    document.body.classList.toggle("alt-mode");
    console.log("WORKS");
}

function factButtonPressed () {
    const factElement = document.getElementById("faq-answer");
    factElement.classList.remove("hidden");
    console.log("facts");
}

let size = 16;

function increaseFontSize () {
   textElement = document.getElementById("textToChange");
   currentSize = window.getComputedStyle(textElement).fontSize;
   console.log(currentSize);
   size += 2;
   document.getElementById("textToChange").style.fontSize = size + "px";
}