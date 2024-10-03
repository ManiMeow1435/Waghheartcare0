const loginbutton=document.querySelector(".js-login-button");
const passwordField=document.querySelector('.js-password-field');
const usernameField=document.querySelector('.js-username-field');

loginbutton.addEventListener('click',()=>{
  if(document.getElementById("js-username").value==="reception" && document.getElementById("js-password").value==="r_admin"){
    window.location.href= 'receptionDashboard.html';
  }
  else if(document.getElementById("js-username").value==="vrusha" && document.getElementById("js-password").value==="harsh"){
    window.location.href= 'drVrushaliDashboard.html';
  }
  else if(document.getElementById("js-username").value==="rajesh" && document.getElementById("js-password").value==="raghav"){
    window.location.href= 'drRajeshDashboard.html';
  }
  else if(document.getElementById("js-username").value==="pharmacy" && document.getElementById("js-password").value==="p_admin"){
    window.location.href= 'pharmacyDashboard.html';
  }
});

usernameField.addEventListener("keydown",(event)=>{
  if(event.key==="Enter"){
    loginbutton.click();
  }
});

passwordField.addEventListener("keydown",(event)=>{
  if(event.key==="Enter"){
    loginbutton.click();
  }
});