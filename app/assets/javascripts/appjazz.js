 $(function(){

              $('#navbar').scrollspy();
              $('[data-spy="scroll"]').each(function () {
                var $spy = $(this).scrollspy('refresh')
              });

              //hide the fadein element with js and then fade it back in
              $('[data-behavior~=fadein]').hide();
              $('[data-behavior~=fadein]').delay(1000).fadeIn(2000);
            });//end  function