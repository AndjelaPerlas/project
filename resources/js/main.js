window.onload = function() {
  document.getElementById('dropbtn').addEventListener('click', myFunction);
}
/*-----------DROPDOWN MENU---------------------*/
 function myFunction() {
    document.getElementById('myDropdown').classList.toggle('show');

}

/*----------------------------------------------jQUERY----------------------------------------------*/

/*--------------------------GALLERY-----------------------------*/

(function($) {
  $(document).ready(function() {
 });
})(jQuery);


/*--------------------------BUTTON FROM BOTTOM TO TOP-----------------------------*/
 $(document).ready(function() {
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


  /*---------------SLIDETOGGLE-----------------*/

  $('.friday').click(function() {
    $('.program-text-1').slideToggle();
  });

  $('.saturday').click(function() {
    $('.program-text-2').slideToggle();
  });

  $('.sunday').click(function() {
    $('.program-text-3').slideToggle();
  });

});



/*-----------------------AJAX---------------------------------*/
$.ajax({
      type: 'GET',
      url: 'resources/json/gallery.json',
      dataType: "json",
      success: function(data) {
      var red = "";
      $.each(data, function(index, data) {
       red+="<a class='lightbox' href='" + data.source.href + "' data-fancybox='group' data-caption='" + data.source.caption +"'>" +
      "<img src='" + data.picture.src + "' alt='"+ data.picture.alt + "'/></a>";
     }); 

      $('.frame').append(red);
    },
    error: function(error) {
        console.log(error);
    }
  });


     







