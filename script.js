const rateBtns = document.querySelectorAll('div[class^="rate-container"]');
rateBtns.forEach(btn => btn.classList.toggle("isClicked"));
const rates = document.querySelectorAll('p[class="user-rating"]');
rates.forEach(p => p.classList.toggle("user-rating"))

rateBtns.forEach((btn, currentIndex) => {
    btn.addEventListener("click", () => {
        activate(currentIndex);
    });
});

function activate(index){
    for (let i = 0; i<rateBtns.length; i++){
        if(i===index){
            rateBtns[i].classList.toggle("isClicked");
            rates[i].classList.toggle("user-rating");
        } else if(rateBtns[i].classList.contains("isClicked")){
            rateBtns[i].classList.toggle("isClicked");
            rates[i].classList.toggle("user-rating");
        }
    }
}

function checkScore(){
    let rate;
    for (let i = 0; i<rates.length; i++){
        if (rates[i].classList.contains("user-rating")){
            rate = rates[i].textContent;
        }
    }
    return rate;
}

const message = document.querySelector('.message');

const submitButton = document.querySelector("button");
submitButton.addEventListener("click", () => {
    let score = checkScore();

    if (score === undefined){
        alert("Before submitting, click any of the number first");
    } else {
        message.textContent = message.textContent.replace("RATE", score);
        
        document.querySelector('.first-card').style.display = "none";
        document.querySelector('.second-card').style.display = "block";
    }
});