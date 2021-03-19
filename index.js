const matchBtn = document.getElementById("match-btn");
const styleMatchDetails = document.getElementsByClassName("fixture-button-columns")
let matchDetails = true;


function showMatchDetails() {
    styleMatchDetails[0].style.display = "flex"
}

function hideMatchDetails() {
    styleMatchDetails[0].style.display = "none"
}

matchBtn.addEventListener("click", function(){
   if (matchDetails == true) {
       matchDetails = false
       showMatchDetails()
   } else {
       matchDetails = true
       hideMatchDetails()
   }
   
    
    
})



