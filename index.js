// single match buttons
const matchBtn = document.getElementsByClassName("match-btn")

// show match details
const styleMatchDetails = document.getElementsByClassName("fixture-button-columns")

let matchDetails = true;



        

for (let i = 0; i < matchBtn.length; i++) {
    
    matchBtn[i].addEventListener("click", function(){
        console.log("clicked")
        if (matchDetails == true) {
            matchDetails = false
            for (let i = 0; i < styleMatchDetails.length; i++) {
                styleMatchDetails[i].style.display = "flex"
            }
                
        } else {
            matchDetails = true
            for (let i = 0; i < styleMatchDetails.length; i++) {
                styleMatchDetails[i].style.display = "none"
            }
        }
    })
}







