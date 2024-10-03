import { homeButtonFunctionality } from "./comman.js"; 
const logoutButton= document.querySelector(".js-logout-button");
const createAppointmentButton= document.getElementById("js-create-appointment-button");
const drRajeshPaitentCount=document.querySelector('.patient-count-number-rajesh');
const drVrushaliPaitentCount=document.querySelector('.patient-count-number-vrushali');
let patientsArrayRajesh=JSON.parse(localStorage.getItem('patientsArrayRajesh'))||[];
let patientsArrayVrushali=JSON.parse(localStorage.getItem('patientsArrayVrushali'))||[];

logoutButton.addEventListener("click",()=>{
  window.location.href='index.html';
});

createAppointmentButton.addEventListener("click",()=>{
  window.location.href='createNewAppointmentPage.html';
});

function displayPatients(){
  let patientsArrayRajesh=JSON.parse(localStorage.getItem('patientsArrayRajesh'))||[];
  let patientsArrayVrushali=JSON.parse(localStorage.getItem('patientsArrayVrushali'))||[];
  let rajeshHTML=``;
  let vrushaliHTML=``;
  patientsArrayRajesh.forEach((formData,index)=>{
      let html=`
          <div class="column-details">
            <div>${index+1}</div>
            <div>${formData.patientsName}</div>
            <div>${formData.patientsMobileNo}</div>
            <div class="image-delete" data-dr="${formData.dr}" data-mobile-no="${formData.patientsMobileNo}"><img src="../icons/delete.png"></div>
            <div class="image-tick" data-dr="${formData.dr}" data-mobile-no="${formData.patientsMobileNo}"><img src="../icons/checkmark.png"></div>
          </div>  
      `;
      rajeshHTML+=html;
  });
  patientsArrayVrushali.forEach((formData,index)=>{
    let html=`
        <div class="column-details">
          <div>${index+1}</div>
          <div>${formData.patientsName}</div>
          <div>${formData.patientsMobileNo}</div>
          <div class="image-delete" data-dr="${formData.dr}" data-mobile-no="${formData.patientsMobileNo}"><img src="../icons/delete.png"></div>
          <div class="image-tick" data-dr="${formData.dr}" data-mobile-no="${formData.patientsMobileNo}"><img src="../icons/checkmark.png"></div>
        </div>  
    `;
    vrushaliHTML+=html;
  });
    
  document.querySelector(".column-details-rajesh").innerHTML=rajeshHTML;
  document.querySelector(".column-details-vrushali").innerHTML=vrushaliHTML;
}

displayPatients();
drRajeshPaitentCount.value=patientsArrayRajesh.length;
drVrushaliPaitentCount.value=patientsArrayVrushali.length;

function displayConsultedPatients(){
  let patientConsultedRajeshArray=JSON.parse(localStorage.getItem('patientConsultedRajeshArray'))||[];
  let patientConsultedVrushaliArray=JSON.parse(localStorage.getItem('patientConsultedVrushaliArray'))||[];
  let consultedRajeshHTML=``;
  let consultedVrushaliHTML=``;
  patientConsultedRajeshArray.forEach((formData,index)=>{
    let html=`
        <div class="column-details">
          <div>${index+1}</div>
          <div>${formData.patientsName}</div>
          <div>${formData.patientsMobileNo}</div>
          <div class="image-delete" data-dr="${formData.dr}" data-mobile-no="${formData.patientsMobileNo}"><img src="../icons/delete.png"></div>
          <div></div>
        </div>  
    `;
    consultedRajeshHTML+=html;
  });
  patientConsultedVrushaliArray.forEach((formData,index)=>{
    let html=`
        <div class="column-details">
          <div>${index+1}</div>
          <div>${formData.patientsName}</div>
          <div>${formData.patientsMobileNo}</div>
          <div class="image-delete" data-dr="${formData.dr}" data-mobile-no="${formData.patientsMobileNo}"><img src="../icons/delete.png"></div>
          <div></div>
        </div>  
    `;
    consultedVrushaliHTML+=html;
  });
  
  document.querySelector(".consulted-details-rajesh").innerHTML=consultedRajeshHTML;
  document.querySelector(".consulted-details-vrushali").innerHTML=consultedVrushaliHTML;
}

const deleteButtons=document.querySelectorAll('.image-delete');

deleteButtons.forEach((deleteButton,index)=>{
  deleteButton.addEventListener('click',()=>{
    const paitentToDelete=deleteButton.dataset.mobileNo;
    const drName=deleteButton.dataset.dr;
    if(drName==="Dr.Rajesh"){
      const updatedArray=patientsArrayRajesh.filter((formData,index)=>{
        if(formData.patientsMobileNo!==paitentToDelete){
          return true;
        }
        else{
          return false;
        }
      });  
      localStorage.setItem('patientsArrayRajesh',JSON.stringify(updatedArray));
    }
    else if(drName==="Dr.Vrushali"){
      const updatedArray=patientsArrayVrushali.filter((formData,index)=>{
        if(formData.patientsMobileNo!==paitentToDelete){
          return true;
        }
        else{
          return false;
        }
      });  
      localStorage.setItem('patientsArrayVrushali',JSON.stringify(updatedArray));
    }
    displayPatients();
    window.location.href='receptionDashboard.html';
  });
});

const tickButtons=document.querySelectorAll('.image-tick');

tickButtons.forEach((tickButton,index)=>{
  tickButton.addEventListener('click',()=>{
    const patientConsulted=tickButton.dataset.mobileNo;
    const drName=tickButton.dataset.dr;
    if(drName==="Dr.Rajesh"){
      const updatedArray=patientsArrayRajesh.filter((formData,index)=>{
        //updatedArray=[{"dr":"Dr.Rajesh",...}]
        if(formData.patientsMobileNo===patientConsulted){
          return true;
        }
        else{
          return false;
        }
      });
      let arr=JSON.parse(localStorage.getItem('patientConsultedRajeshArray'))||[];
      arr.push(updatedArray[0]);
      localStorage.setItem('patientConsultedRajeshArray',JSON.stringify(arr));
      
      patientsArrayRajesh=patientsArrayRajesh.filter((formData,index)=>{
        if(formData.patientsMobileNo!==patientConsulted){
          return true;
        }
        else{
          return false;
        }
      });
      localStorage.setItem('patientsArrayRajesh',JSON.stringify(patientsArrayRajesh));
    }
    else if(drName==="Dr.Vrushali"){
      const updatedArray=patientsArrayVrushali.filter((formData,index)=>{
        if(formData.patientsMobileNo===patientConsulted){
          return true;
        }
        else{
          return false;
        }
      });  
      const arr=JSON.parse(localStorage.getItem('patientConsultedVrushaliArray'))||[];
      arr.push(updatedArray[0]);
      localStorage.setItem('patientConsultedVrushaliArray',JSON.stringify(arr));

      patientsArrayVrushali=patientsArrayVrushali.filter((formData,index)=>{
      if(formData.patientsMobileNo!==patientConsulted){
        return true;
      }
      else{
        return false;
      }
      });
      localStorage.setItem('patientsArrayVrushali',JSON.stringify(patientsArrayVrushali));
    }
    displayPatients();
    displayConsultedPatients();
    window.location.href='receptionDashboard.html';
  });
});
displayConsultedPatients();

