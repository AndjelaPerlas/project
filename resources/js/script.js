/*----------------JAVASCRIPT CODE---------------*/


 window.onload = function () {
    document.getElementById('btnReg').addEventListener('click', Validate);
    document.getElementById('userName').addEventListener('blur',verifyUserName);
    document.getElementById('emailReg').addEventListener('blur',verifyEmailReg);
    document.getElementById('passwordReg').addEventListener('blur',verifyPassword);
    document.getElementById('passwordConf').addEventListener('blur',verifyPasswordConfirm);
    document.getElementById('dropbtn').addEventListener('click', myFunction);
 }


/*----------------NAVIGATION MENU---------------*/


  function myFunction() {
     document.getElementById('myDropdown').classList.toggle('show');

 }



/*----------------REGISTRATION FORM VALIDATION---------------*/
  var userName, email, password, passwordConfirm;
 

function Validate() {
  userName = document.getElementById('userName').value;
  email = document.getElementById('emailReg').value;
  password = document.getElementById('passwordReg').value;
  passwordConfirm = document.getElementById('passwordConf').value;
 



//REGULAR EXPRESION

 var regUserName = /^[A-ZČĆŽŠĐ][a-zčćžšđ\.\_\-\d\W]{2,15}$/;
 var regEmail = /^[\w]+[\.\_\-\w\d]*\@[\w]+([\.][\w]+)+$/;
 
 
   if(!regUserName.test(userName)) {
     document.getElementById('userNameError').style.color = "#ff0000";
     document.getElementById('userNameError').innerHTML = "Korisničko ime nije u dobrom formatu!";
   } else {
     document.getElementById('userNameError').style.color = "";
     document.getElementById('userNameError').innerHTML = "";
   }
  
   if(!regEmail.test(email)) {
     document.getElementById('emailErrorReg').style.color = "#ff0000";
     document.getElementById('emailErrorReg').innerHTML = "Email nije u dobrom formatu!";
   } else {
     document.getElementById('emailErrorReg').style.color = "";
     document.getElementById('emailErrorReg').innerHTML = ""; 
   }
  
   if(!regPassword.test(password)) {
      document.getElementById('passwordError').style.color = "#ff0000";
      document.getElementById('passwordError').innerHTML = "Lozinka nije u dobrom formatu!";
   } else {
      document.getElementById('passwordError').style.color = "";
      document.getElementById('passwordError').innerHTML = "";
    }

   if(!regPasswordConf.test(passwordConfirm)) {
      document.getElementById('passwordErrorConf').style.color = "#ff0000";
      document.getElementById('passwordErrorConf').innerHTML = "Potvrda lozinke nije u dobrom formatu!";
   } else {
     document.getElementById('passwordErrorConf').style.color = "";
     document.getElementById('passwordErrorConf').innerHTML = "";
  }
}

/////////////////////////////////////////////////////////////////////////////////


 
 function verifyUserName() {
    userName = document.getElementById('userName');
    if (userName.value == "") {
      userName.style.border = "1px solid #ff0000";
      document.getElementById('userNameError').style.color = "#ff0000";
      document.getElementById('userNameError').innerHTML = "Morate uneti korisnicko ime";
      userName.focus();
   } else {
      userName.style.border = "1px solid #ccc";
      document.getElementById('userNameError').style.color = "";
      document.getElementById('userNameError').innerHTML = "";
   }
 }


  function verifyEmailReg() {
    email = document.getElementById('emailReg');
    if (email.value == "") {
      email.style.border = "1px solid #ff0000";
      document.getElementById('emailErrorReg').style.color = "#ff0000";
      document.getElementById('emailErrorReg').innerHTML = "Morate uneti email";
      email.focus();
   } else {
      email.style.border = "1px solid #ccc";
      document.getElementById('emailErrorReg').style.color = "";
      document.getElementById('emailErrorReg').innerHTML = "";
  }
 }


   function verifyPassword() {
    password = document.getElementById('passwordReg');
    if (password.value == "") {
      password.style.border = "1px solid #ff0000";
      document.getElementById('passwordError').style.color = "#ff0000";
      document.getElementById('passwordError').innerHTML = "Morate uneti lozinku";
  } else {
      password.style.border = "1px solid #ccc";
      document.getElementById('passwordError').style.color = "";
      document.getElementById('passwordError').innerHTML = "";
   }
 }

   function verifyPasswordConfirm() {
    password = document.getElementById('passwordReg');
    passwordConfirm = document.getElementById('passwordConf');
   if (password.value != passwordConfirm.value) {
      password.style.border = "1px solid #ff0000";
      passwordConfirm.style.border = "1px solid #ff0000";
      document.getElementById('passwordErrorConf').style.color = "#ff0000";
      document.getElementById('passwordErrorConf').innerHTML = "Lozinke se ne poklapaju";
      passwordConfirm.focus();
   } else {
      password.style.border = "1px solid #ccc";
      passwordConfirm.style.border = "1px solid #ccc";
      document.getElementById('passwordErrorConf').style.color = "";
      document.getElementById('passwordErrorConf').innerHTML = "";
   }
 }





  /*----------------JQUERY CODE---------------*/

$(document).ready(function() {
  
   
  /*----------------SCROLL TO BOTTOM BUTTON---------------*/


   $('.scroll-to-plans').click(function () {
    $('html, body').animate({scrollTop: $('.section-reservation').offset().top}, 2000);
     $('.destination').hide();
        $('.destination').fadeIn(6000);
  });

  
    
    $('.scroll-to-start').click( function () {
      $('html, body').animate({scrollTop: $('.section-features').offset().top}, 2000); 
        $('#scroll').hide();
        $('#scroll').fadeIn(6000);
  });


  /*----------------SLIDER FUNCTION CALL---------------*/

  slideShow();



   /*----------------SCROLL TO TOP BUTTON---------------*/


   $(document).scroll(function() {
    if ($(this).scrollTop() >= 50) {        
        $('#return-to-top').fadeIn();    
    } else {
        $('#return-to-top').fadeOut();  
    }
  });
  $('#return-to-top').click(function(e) {
  e.preventDefault();    
    $('body,html').animate({
        scrollTop : 0                     
      }, 1000);
  });
});
  


/*----------------SLIDER---------------*/
 
function slideShow() {
  var current = $('.photos .show');
 var next = current.next().length ? current.next() : current.parent().children(':first');
  
  current.hide().removeClass('show');
  next.fadeIn().addClass('show');
  
  setTimeout(slideShow, 3000);
}






/*--------------------AJAX---------------------------*/

$.ajax({
      type: 'GET',
      url: 'resources/json/destinations.json',
      dataType: "json",
      success: function(data) {
        sortDestination(data);
      },
      error: function(error) {
        console.log(error);
      }
  });


function sortDestination(data) {
 
  //sortiranje a-z
    $('.sort-name').click(function(e){
      e.preventDefault();
      var destinations =$('.destinations');
      destinations.sort(function(a,b){
       a=$(a).find('.title').text();
       b=$(b).find('.title').text();
        if(a > b){return 1;}
        else if(a < b){return -1;}
        else{return 0;}
      });
      $('.destination').append(destinations);
  });


//sortiranje-opadajuca cena

  $('.sort-price').click(function(e){
    e.preventDefault();
    var destinations=$('.destinations');
    destinations.sort(function(a,b){
      a= parseInt($(a).find('.price').text());
      b=parseInt($(b).find('.price').text());
      if(a > b){return -1;}
      else if(a < b){return 1;}
      else{return 0;}
    });
    $('.destination').append(destinations);
  });


//sortiranje-rastuca cena
$('.sort-price2').click(function(e){
    e.preventDefault();
     var destinations=$('.destinations');
     destinations.sort(function(a,b){
       a= parseInt($(a).find('.price').text());
       b=parseInt($(b).find('.price').text());
       if(a > b){return 1;}
       else if(a < b){return -1;}
       else{return 0;}
    });
     $('.destination').append(destinations);
   });

  showDestinations(data);
  
}
  

function showDestinations(data) {

var row = "";
 $.each(data, function(index, data) {
    row += "<div class='col span-1-of-3 destinations'>"
    row +="<div class='organisation-box'>" 
    row += "<div>"
    row+= "<h3 class='title'>" + data.name + "</h3>"
    row += "<img src='resources/images/" + data.picture.src + "' alt='" + data.picture.alt + "'>"
    row +="</div>" 
    row += "<div><ul><li>Polazak: " + data.info.departure + "</li><li>Povratak: " + data.info.return + "</li><li>Boravak: " + data.info.stay + "</li><li>Prevoz: " 
    row += data.info.transport + "</li><li>Smeštaj: " + data.info.apartment + "</li><li>Cena: <span class='price'>" + data.info.price + "</span>EUR</li></ul></div>" 
    row += "<div><a href='kontakt.html' class='btn btn-full fade'>Prijavi se</a></div>";
    row +="</div></div>";
 }); 

$('.destination').append(row);

}

















