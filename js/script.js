//JavaScript

   //Tabs

   const tabsTitle = document.querySelectorAll('.tabs__title');
   const tabsContent = document.querySelectorAll('.tabs__content');
   
   tabsTitle.forEach(item => item.addEventListener('click', event => {
      const tabsTitleTarget = event.target.getAttribute('data-tab');
   
      tabsTitle.forEach(element => element.classList.remove('active-tab'));
      tabsContent.forEach(element => element.classList.add('hidden-tab-content'));
   
      item.classList.add('active-tab');
      document.getElementById(tabsTitleTarget).classList.remove('hidden-tab-content');
   }));
   
   document.querySelector('[data-tab="tab-1"]').classList.add('active-tab');
   document.querySelector('#tab-1').classList.remove('hidden-tab-content');
   
   
//JQuery

   //Sliders

   $(document).ready(function () {
      $('.slider-person').slick({
         arrows: true,
         draggable: false,
         swipe: false,
         adaptiveHeight: true,
         infinite: false,
         speed: 500,
         asNavFor: ".slider-text",
      });
   });
   
   $(document).ready(function () {
      $('.slider-text').slick({
         arrows: false,
         draggable: false,
         swipe: false,
         infinite: false,
         speed: 500,
         asNavFor: ".slider-person",
      });
   });  

   //Spoiler

   $(document).ready(function () {
      $('.spoiler__title').click(function (event) {
         if ($('.spoiler').hasClass('one')) {
            $('.spoiler__title').not($(this)).removeClass('active');
            $('.spoiler__paragraph').not($(this).next()).slideUp(300);
         }
         $(this).toggleClass('active').next().slideToggle(300);
      });
   });

   //Scroll animation
   
   $('.main__info').addClass('animation');
   $('.main__phone').addClass('animation');

   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 300) {
         $('.companies').addClass('animation')
      }
   });

   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 750) {
         $('.apps__image').addClass('animation')
         $('.apps__info').addClass('animation')
      }
   });

   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 1450) {
         $('.jackpots').addClass('animation')
      }
   });

   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 1700) {
         $('.advantages').addClass('animation')
      }
   });

   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 2100) {
         $('.integration__image').addClass('animation')
         $('.integration__info').addClass('animation')
      }
   });
   
   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 2700) {
         $('.reason__element.element1').addClass('animation')
         $('.reason__element.element3').addClass('animation')
      }
   });

   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 3700) {
         $('.features__info').addClass('animation')
         $('.features__img').addClass('animation')
      }
   });

   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 4900) {
         $('.tabs__content.tab1').addClass('animation')
      }
   });

   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 5600) {
         $('.testiminial__image').addClass('animation')
         $('.testiminial__info').addClass('animation')
      }
   });

   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 6500) {
         $('.spoiler').addClass('animation')
      }
   });

   $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 7000) {
         $('.download__info').addClass('animation')
         $('.download__img').addClass('animation')
      }
   });


   //Smooth scroll
   $("[data-scroll]").on("click", function(event) {
      event.preventDefault();

      var blockId = $(this).data('scroll'),
         blockOffset = $(blockId).offset().top;
      
      $("html, body").animate({
         scrollTop: blockOffset
      }, 500);
      });