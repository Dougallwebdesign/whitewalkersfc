// single match buttons
const matchBtn = document.getElementsByClassName("match-btn")
// show match details
const styleMatchDetails = document.getElementsByClassName("fixture-button-columns")

let matchDetails = true;

//functions


//Match button logic once finished do DRY
matchBtn[0].addEventListener("click", function(){
    if (matchDetails == true) {
        matchDetails = false
        styleMatchDetails[0].style.display = "flex"
    } else {
        matchDetails = true
        styleMatchDetails[0].style.display = "none"
    }
})

matchBtn[1].addEventListener("click", function(){
    if (matchDetails == true) {
        matchDetails = false
        styleMatchDetails[1].style.display = "flex"
    } else {
        matchDetails = true
        styleMatchDetails[1].style.display = "none"
    }
})

matchBtn[2].addEventListener("click", function(){
    if (matchDetails == true) {
        matchDetails = false
        styleMatchDetails[2].style.display = "flex"
    } else {
        matchDetails = true
        styleMatchDetails[2].style.display = "none"
    }
})









