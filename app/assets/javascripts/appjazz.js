 $(function(){

    //get the href of the element and 
    //scroll to coresponding div offset 75px for #nav 
    $("a.clickthis").click(function() {
       var elementsId = $(this).attr("href");
       $.scrollTo(elementsId,1000,{offset:-75}); 
    });

    //email slide off screen and cookie to not show
    $('[data-behavior~=slideUp]').click(function() {
      $("#subsribe-monkey").slideUp();
      $.cookie('hide_subscribe', 'true', { expires: 7 });   
    });    

    //hide subscribe if cookie is set
    if($.cookie("hide_subscribe") == "true") {
      $('#subsribe-monkey').hide();
    }
    //fade above fold content in
    $('[data-behavior~=fadein]').hide();
    $('[data-behavior~=fadein]').delay(3000).fadeIn(2000);


    //conflicting with something keeping it lower
    // init liquid slider with options
    $('#get-involved-slider').liquidSlider({
      responsive: false,
      autoSlide:false,
      autoHeight:true,
      preloader: true,
      hashLinking: true,
      hashNames: true,
      hashCrossLinks: true,
      dynamicTabs: false,
      crossLinks: true,
      keyboardNavigation: true,
      leftKey: 39,
      rightKey: 37,
    });





});//end  function

