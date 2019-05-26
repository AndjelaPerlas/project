window.onload = function() {
    document.getElementById('pressing').addEventListener('click', formConfirm);
    document.getElementById('nameBox').addEventListener('blur',verifyName);
    document.getElementById('lastName').addEventListener('blur',verifyLastName);
    document.getElementById('emailBox').addEventListener('blur',verifyEmail);
    document.getElementById('dropbtn').addEventListener('click',myFunction);
}

/*-----------------DROPDOWN MENU------------------*/

 function myFunction() {
    document.getElementById('myDropdown').classList.toggle('show');

}

/*--------------------FORM VALIDATION------------------*/

function formConfirm() {
var formName, formLastName, formEmail, dropdown, dropCh, chb, chbCh, formMessage;
  formName = document.getElementById('nameBox').value;
  formLastName = document.getElementById('lastName').value;
  formEmail = document.getElementById('emailBox').value;
  chb = document.getElementsByName('chbx');

//CHECKBOX
 
  chbCh = "";
  for(var i = 0; i < chb.length; i++) {
    if (chb[i].checked) {
      chbCh = chbCh + chb[i].value + " ";
    }
  }

  dropdown = document.getElementById('find-us');
  dropCh = dropdown.options[dropdown.selectedIndex].value;


  formMessage = document.getElementById('messageBox').value;


//REGULAR EXPRESION

  var regName = /^[A-ZČĆŽŠĐ][a-zčćžšđ]{2,11}(\s[A-ZČĆŽŠĐ][a-zčćžšđ]{2,11})*$/;
  var regLastName = /^[A-ZČĆŽŠĐ][a-zčćžšđ]{2,11}$/;
  var regEmail = /^[\w]+[\.\_\-\w\d]*\@[\w]+([\.][\w]+)+$/;


  if(!regName.test(formName)) {
     document.getElementById('nameError').style.color = "#ff0000";
     document.getElementById('nameError').innerHTML = "Ime nije u dobrom formatu!";
  } else {
    document.getElementById('nameError').style.color = "";
    document.getElementById('nameError').innerHTML = "";
  }
  
  if(!regLastName.test(formLastName)) {
     document.getElementById('lastNameError').style.color = "#ff0000";
     document.getElementById('lastNameError').innerHTML = "Prezime nije u dobrom formatu!";
  } else {
    document.getElementById('lastNameError').style.color = "";
    document.getElementById('lastNameError').innerHTML = ""; 
  }
  
  if(!regEmail.test(formEmail)) {
    document.getElementById('emailError').style.color = "#ff0000";
    document.getElementById('emailError').innerHTML = "Email nije u dobrom formatu!";
  }
  else {
    document.getElementById('emailError').style.color = "";
    document.getElementById('emailError').innerHTML = "";
  }

  if(dropCh == "0") {
    document.getElementById('listError').style.color = "#ff0000";
    document.getElementById('listError').innerHTML = "Morate izabrati jednu od ponuđenih opcija";
  } else {
    document.getElementById('listError').style.color = "";
    document.getElementById('listError').innerHTML = "";
  }

}


/*------------FORM VALIDATION-------------------------*/

 function verifyName() {
    var vrName = document.getElementById('nameBox');
    if (vrName.value == "") {
      vrName.style.border = "1px solid #ff0000";
      document.getElementById('nameError').style.color = "#ff0000";
      document.getElementById('nameError').innerHTML = "Morate uneti ime";
      vrName.focus();
  }
  else {
    vrName.style.border = "1px solid #ccc";
   document.getElementById('nameError').style.color = "";
   document.getElementById('nameError').innerHTML = "";
  }
 }


 function verifyLastName() {
   var vrLastName = document.getElementById('lastName');
   if (vrLastName.value == "") {
      vrLastName.style.border = "1px solid #ff0000";
      document.getElementById('lastNameError').style.color = "#ff0000";
      document.getElementById('lastNameError').innerHTML = "Morate uneti prezime";
      vrLastName.focus();
  }
  else {
      vrLastName.style.border = "1px solid #ccc";
      document.getElementById('lastNameError').style.color = "";
      document.getElementById('lastNameError').innerHTML = "";
  }

 }


 function verifyEmail() {
   var vrEmail = document.getElementById('emailBox');
   if (vrEmail.value == "") {
      vrEmail.style.border = "1px solid #ff0000";
      document.getElementById('emailError').style.color = "#ff0000";
      document.getElementById('emailError').innerHTML = "Morate uneti email";
      vrEmail.focus();
  }
  else{
    vrEmail.style.border = "1px solid #ccc";
    document.getElementById('emailError').style.color = "";
    document.getElementById('emailError').innerHTML = "";
  }

 }




  







