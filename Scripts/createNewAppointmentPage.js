import {homeButtonFunctionality} from "./comman.js";
const homeButton= document.getElementById("home");
const submitButton=document.getElementById("submit");
homeButtonFunctionality(homeButton);
 //[{"key":"value","key":"value"},{},...]
 let patientsArrayRajesh=JSON.parse(localStorage.getItem('patientsArrayRajesh'))||[];
 let patientsArrayVrushali=JSON.parse(localStorage.getItem('patientsArrayVrushali'))||[];

submitButton.addEventListener("click",(event)=>{
  const dr=document.getElementById('dr').value;
  const referredBy=document.getElementById('referred-by').value;
  const patientsName=document.getElementById('name').value;
  const patientsMobileNo=document.getElementById('mobile-no').value;
  const patientsEmail=document.getElementById('email').value;
  const patientsAge=document.getElementById('age').value;
  const patientsHeight=document.getElementById('height').value;
  const patientsWeight=document.getElementById('weight').value;
  const patientsGender=document.getElementById('gender').value;
  const patientsAddress=document.getElementById('address').value;
  const patientsPincode=document.getElementById('pincode').value;
  const patientsCity=document.getElementById('city').value;
  const patientsState=document.getElementById('state').value;
  const patientsCountry=document.getElementById('country').value;
  
  const formData={
    dr,
    referredBy,
    patientsName,
    patientsMobileNo,
    patientsEmail,
    patientsAge,
    patientsHeight,
    patientsWeight,
    patientsGender,
    patientsAddress,
    patientsPincode,
    patientsCity,
    patientsState,
    patientsCountry
  };

  if(formData.dr==='Dr.Rajesh'){
    patientsArrayRajesh.push(formData);
    localStorage.setItem('patientsArrayRajesh',JSON.stringify(patientsArrayRajesh));
  }
  if(formData.dr==='Dr.Vrushali'){
    patientsArrayVrushali.push(formData);
    localStorage.setItem('patientsArrayVrushali',JSON.stringify(patientsArrayVrushali));
  }
  
  alert('Patient appointment fixed');
});