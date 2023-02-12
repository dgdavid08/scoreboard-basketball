let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homescore = 0
let guestscore = 0

function homebtn1(){
    homescore += 1
    homeScore.textContent =  homescore
}
function homebtn2(){
    homescore += 2
    homeScore.textContent =  homescore
}
function homebtn3(){
    homescore += 3
    homeScore.textContent =  homescore
}

function guestbtn1(){
    guestscore += 1
    guestScore.textContent = guestscore
}
function guestbtn2(){
    guestscore += 2
    guestScore.textContent = guestscore
}
function guestbtn3(){
    guestscore += 3
    guestScore.textContent = guestscore
}