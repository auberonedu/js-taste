function changeScheme() {
    document.body.classList.toggle("dark-mode");
}


function faqReveal() {
    alert("The word potato comes from the Spanish word patata");
}

let counter = 0;

function changeTextSize() {
    const element = document.getElementById("changeSize");
        counter++;
    if(counter ==1) { 
        element.classList.remove("large-font");
        element.classList.add("smallest-font");
    }
    else if(counter == 2) { 
        element.classList.remove("smallest-font");
        element.classList.add("smaller-font");
    }
    else if(counter == 3) { 
        element.classList.remove("smaller-font");
        element.classList.add("medium-font");
    }
    else if(counter == 4) { 
        element.classList.remove("medium-font");
        element.classList.add("large-font");
        counter=0;

    }

}