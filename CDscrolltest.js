
$(document).ready(function() {


/*
  //Get header height
  var headerHeight = $('header').outerHeight();


  //var scrollLink = $('.scroll');

  $('.nav-link-scroll').click(function(e) {

   var linkHref = $(this).attr('href');
   


   $('html, body').animate({
    scrollTop: $(linkHref).offset().top - headerHeight
   }, 1000);

   e.preventDefault();

   });

  //active link switching

  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();
    
    scrollLink.each(function() {
      
      var sectionOffset = $(this.hash).offset().top - 20;

      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');

      }

    })

  });

});

*/


//commenting out to test another approach. This one works except for the anchor active switching =/ 

  var scrollLink = $('.scroll');

  //smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top 
    }, 1000 );
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  });
 

//Active link switching
    $(window).scroll(function() {
      var scrollbarLocation = $(this).scrollTop();

      scrollLink.each(function(){
        var sectionOffset = $(this.hash).offset().top -50;
        
        //var sectionOffset = $(this.hash).offset().top - 20;

    if ( sectionOffset <= scrollbarLocation ) {
      $(this).addClass('active');
      $(this).siblings().removeClass('active');

      //$(this).parent().addClass('active');
      //$(this).parent().siblings().removeClass('active');
    }
    });
   });
});








