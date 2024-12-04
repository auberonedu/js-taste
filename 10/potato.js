let sizemode = 0;
function changeScheme() {
    document.body.classList.toggle("altscheme");
}

function changeFact() {
    document.getElementById("faq-answer").classList.toggle("hidden");
    console.log("1");
}

function changeSize() {
    // const element = document.getElementById("potatoheader").classList.toggle("textBig");
    const element = document.getElementById("potatoheader");
    const style = window.getComputedStyle(element);
    let fontSize = style.fontSize;
    let fontSizeNum = fontSize.slice(0, -2);
    fontSizeNum = +fontSizeNum;
    
    if (sizemode === 1) {
        element.style.fontSize = fontSizeNum - 4 + "px";
        if (fontSizeNum < 20) {
            sizemode = 0;
        }
    }


    if (sizemode === 0) {
        element.style.fontSize = fontSizeNum + 4 + "px";
        if (fontSizeNum > 50) {
            sizemode = 1;
        }
    }
}