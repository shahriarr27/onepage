var siteScroll = function() {
  $(window).on('scroll',function(){
    if($(window).scrollTop()>110){
        $('.navbar').addClass('nav-white');
    }
    else{
        $('.navbar').removeClass('nav-white');
    }
  });
};
siteScroll();

  var offsetTop = $(".my-skills").offset().top;
  $(window).scroll(function() {
    var height = $(window).height();
    if ($(window).scrollTop() + height > offsetTop) {
      jQuery(".skill").each(function() {
        jQuery(this).find(".skill-bar").delay(500).animate(
          {
            width: jQuery(this).attr("data-percentage")
          },
          2000
        );
        jQuery(this).find(".progress-number").delay(500).animate(
          {
            left: jQuery(this).attr("data-percentage")
          },2000
        );
      });
    }
  });

  AOS.init({
    offset: 100,
    duration: 1400,
  });


  let $btns = $('.p-buttons a');
    $btns.click(function(e){
    $('.p-buttons a').removeClass('active');
    e.target.classList.add('active');

    let selector = $(e.target).attr('data-filter');
    $('#projects .grid').isotope({
        filter: selector
    });
    return false;
  });

  $('.p-buttons #btn1').trigger('click');

  
//fancybox


$('#portfolio .owl-carousel').owlCarousel({
  loop:true,
  autoplay: true,
  smartSpeed:1000,
  center: true,
  margin:10,
  nav:false,
  dots: false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})

$('#client .owl-carousel').owlCarousel({
  loop:true,
  autoplay: true,
  smartSpeed:1000,
  nav:true,
  navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
  dots: false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:2
      }
  }
})

$("video").prop('muted', true);

  $("#unmuteButton").click( function (){
    if( $("video").prop('muted') ) {
          $("video").prop('muted', false);
    } else {
      $("video").prop('muted', true);
    }
  });
