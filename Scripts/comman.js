const homeButton= document.getElementById("home");

function homeButtonFunctionality(homeButton){
  homeButton.addEventListener("click",()=>{
    window.location.href='receptionDashboard.html';
  });
}

homeButtonFunctionality(homeButton);

export {homeButtonFunctionality};