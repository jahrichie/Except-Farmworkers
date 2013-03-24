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

    // $('[data-behavior~=slideup]').hide();
    // $('[data-behavior~=slideup]').delay(1000).slideUp(2000);
    // ('[data-behavior~=slideup]').slideDown('slow')
    //hide the fadein element with js and then fade it back in
    $('[data-behavior~=fadein]').hide();
    $('[data-behavior~=fadein]').delay(1000).fadeIn(2000);


    

    // $('#nav').scrollspy();
    // $('[data-spy="scroll"]').each(function () {
    //   var $spy = $(this).scrollspy('refresh')
    // });

     // $('.thing').waypoint(function(direction) {
     //  alert('Top of thing hit top of viewport.');
     //  $(".yelaa").parent().addClass("yella");
     //  $(".yella").next().addClass("yella")
     //  //$("#nav li a").removeClass("yella");

          //$('#slider-id').liquidSlider();
          $('#get-involved-slider').delay(5000).liquidSlider({
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

