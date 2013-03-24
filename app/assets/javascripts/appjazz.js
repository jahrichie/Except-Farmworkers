 $(function(){

    $("a.clickthis").click(function() {
         var elementsId = $(this).attr("href");
         $.scrollTo(elementsId,1000,{offset:-75}); 
        //alert("this far!");
        //$(this).attr("href")
    });

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


});//end  function

