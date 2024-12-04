let isDarkMode = false;

// added comments so you dont think we were cheating this is based off little of our javascript experience
function changeScheme() {
    document.body.classList.toggle("dark"); // changes scheme

    isDarkMode = !isDarkMode // toggle the boolean true/false

    console.log(isDarkMode); // just to make sure it works :)

    if (isDarkMode) { // if the boolean is true then change to potato text
        document.getElementById("faq-answer").innerText = "Sweet Potatoes are versatile, delicious, and can be mashed, fried, baked, or boiled. What's not to love?"
        document.getElementById("ButtonChange").innerText = "Toggle to Potato Scheme"
        document.getElementById("Title").innerText = "🍠 Welcome to the Sweet Potato Fun Page 🍠"
        document.getElementById("faq-qu").innerText = "Why are sweet potatoes so great?"
        document.getElementById("revealfact").innerText = "Reveal Sweet Potato Fact"
        document.getElementById("BottomThing").innerText = "Sweet potatoes are life. Big sweet potatoes, small sweet potatoes, we love them all. Click the button to adjust your sweet potato text size!"
    } else { // if boolean is false change everything back to normal
        document.getElementById("faq-answer").innerText = "Potatoes are versatile, delicious, and can be mashed, fried, baked, or boiled. What's not to love?"
        document.getElementById("revealfact").innerText = "Reveal Potato Fact"
        document.getElementById("ButtonChange").innerText = "Toggle to Sweet Potato Scheme"
        document.getElementById("Title").innerText = "🥔 Welcome to the Potato Fun Page 🥔"
        document.getElementById("BottomThing").innerText = "Potatoes are life. Big potatoes, potatoes, we love them all. Click the button to adjust your potato text size!"
        document.getElementById("faq-qu").innerText = "Why are potatoes so great?"
    }
}

function revealFact() {
    document.getElementById("faq-answer").classList.toggle("hidden");
}

function changeSize() {
    document.body.classList.toggle("SizeText")
 //   document.getElementById("ChangeText").classList.toggle("SizeText"); <-- not sure if the entire page or just the button

}