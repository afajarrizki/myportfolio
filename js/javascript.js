       AOS.init();

        $(window).scroll(function () {
          var scrollnya = $(document).scrollTop()

          if(scrollnya > 100) {
            
            if ($('.card1').css('visibility') == 'visible'){
              $('.card1').className = 'card1modified'

                if ($('.card3').css('visibility') == 'visible'){
                  $('.card3').className = 'card3modified'
                }
                  if ($('.card2').css('opacity') == '1') {}
                    $('.card2').className = 'card2modified'
            }

           else {
              $('.card1').css('visibility','visible')
              slideout()
              
              if ($('.card3').css('visibility') == 'hidden') {
                 $('.card3').css('visibility','visible')
                slideout3()
              }

                if ($('.card2').css('opacity') == '0') {
                  $('.card2').css({'opacity':'1','transition':'3s'})
                }

           }
          }
        })


        // start of Smooth scroll navbar
        
        // $('.nav-link2').click(function (event) {
        //   event.preventDefault();
        //   $('html, body').animate({
        //   scrollTop: $(".cont-bagian-3").offset().top
        //   }, 1000);
        // })

        $('.nav-link1').click(function (event) {
            if (this.hash !== "") {
              event.preventDefault();
              var hash = this.hash;
              $('html, body').animate({
                scrollTop: $(hash).offset().top
              }, 800, function(){
                window.location.hash = hash;
              });
            }
        })

        $('.nav-link2').click(function (event) {
            if (this.hash !== "") {
              event.preventDefault();
              var hash = this.hash;
              $('html, body').animate({
                scrollTop: $(hash).offset().top
              }, 1000, function(){
                window.location.hash = hash;
              });
            }
        })

        $('.nav-link3').click(function (event) {
            if (this.hash !== "") {
              event.preventDefault();
              var hash = this.hash;
              $('html, body').animate({
                scrollTop: $(hash).offset().top
              }, 1000, function(){
                window.location.hash = hash;
              });
            }
        })
            

        // end of smooth scroll navbar
        

        
        // setTimeout(slideout,2500)        

        function slideout() {
          $('.card1').ready(function () {
            $('.card1').effect('slide',{direction:'left'},1000)
          })
        }

        function slideout3() {
          $('.card3').ready(function () {
            $('.card3').effect('slide',{direction:'right'},1000)
          })
        }





        // Start of progrress bar1
        var bar = document.querySelector(".progress-bar")

        var waktu = setInterval(progress,200)

        var width = 0

        function progress() {


            if(width>=90) {
              clearInterval(waktu)
            }

            else {
              width +=10
              var loading = bar.style.width = width+"%"
              bar.innerHTML = loading
                bar.style.transition = '1s'
                if (width>=50 && width<90) {
                bar.className = "progress-bar bg-info"
                }
                
            }
            

        }
        // End of progrress bar1

        // Start of progrress bar2
        var bar2 = document.querySelector(".progress-bar2")

        var waktu2 = setInterval(progress2,200)

        var width2 = 0

        function progress2() {


            if(width2>=80) {
              clearInterval(waktu2)
            }

            else {
              width2 +=10
              var loading = bar2.style.width = width2+"%"
              bar2.innerHTML = loading
              bar2.style.transition = '1s'

                if (width2>=50 && width2<80) {
                bar2.className = "progress-bar2 bg-info"
                }
                
            }
            

        }

        // End of progrress bar2

       // Start of progrress bar3
        var bar3 = document.querySelector(".progress-bar3")

        var waktu3 = setInterval(progress3,200)

        var width3 = 0

        function progress3() {


            if(width3>=80) {
              clearInterval(waktu3)
            }

            else {
              width3 +=10
              var loading = bar3.style.width = width3+"%"
              bar3.innerHTML = loading
              bar3.style.transition = '1s'

                if (width3>=50 && width3<80) {
                bar3.className = "progress-bar3 bg-info"
                }
                
            }
            

        }

        // End of progrress bar3

        // Start of progrress bar4
        var bar4 = document.querySelector(".progress-bar4")

        var waktu4 = setInterval(progress4,200)

        var width4 = 0

        function progress4() {


            if(width4>=70) {
              clearInterval(waktu4)
            }

            else {
              width4 +=10
              var loading = bar4.style.width = width4+"%"
              bar4.innerHTML = loading
              bar4.style.transition = '1s'

                if (width4>=50 && width4<70) {
                bar4.className = "progress-bar4 bg-info"
                }
                
            }
            

        }

        // End of progrress bar4

        // Start of progrress bar5
        var bar5 = document.querySelector(".progress-bar5")

        var waktu5 = setInterval(progress5,200)

        var width5 = 0

        function progress5() {


            if(width5>=70) {
              clearInterval(waktu5)
            }

            else {
              width5 +=10
              var loading = bar5.style.width = width5+"%"
              bar5.innerHTML = loading
              bar5.style.transition = '1s'

                if (width5>=50 && width5<70) {
                bar5.className = "progress-bar5 bg-info"
                }
                
            }
            

        }

        // End of progrress bar5

        // Start of progrress bar6
        var bar6 = document.querySelector(".progress-bar6")

        var waktu6 = setInterval(progress6,200)

        var width6 = 0

        function progress6() {


            if(width6>=70) {
              clearInterval(waktu6)
            }

            else {
              width6 +=10
              var loading = bar6.style.width = width6+"%"
              bar6.innerHTML = loading
              bar6.style.transition = '1s'

                if (width6>=50 && width6<70) {
                bar6.className = "progress-bar6 bg-info"
                }
                
            }
            

        }

        // End of progrress bar6

        // start of progress bar 7

        var bar7 = document.querySelector(".progress-bar7")

        var waktu7 = setInterval(progress7,200)

        var width7 = 0

        function progress7() {


            if(width7>=90) {
              clearInterval(waktu7)
            }

            else {
              width7 +=10
              var loading = bar7.style.width = width7+"%"
              bar7.innerHTML = loading
              bar7.style.transition = '1s'

                if (width7>=50 && width7<90) {
                bar7.className = "progress-bar7 bg-info"
                }
                
            }
            

        }
        
        // end of progress bar 7

        // start of progress bar 8

        var bar8 = document.querySelector(".progress-bar8")

        var waktu8 = setInterval(progress8,200)

        var width8 = 0

        function progress8() {


            if(width8>=70) {
              clearInterval(waktu8)
            }

            else {
              width8 +=10
              var loading = bar8.style.width = width8+"%"
              bar8.innerHTML = loading
              bar8.style.transition = '1s'

                if (width8>=50 && width8<70) {
                bar8.className = "progress-bar8 bg-info"
                }
                
            }
            

        }
        
        // end of progress bar 7

        // Start of Loading

        $(document).ready(function(){
        $(".preloader").fadeOut();
        })

        // End of Loading

        function cetak(buttonygdiclick) {
        var nav1 = document.querySelector('.nav-link1')
        var nav2 = document.querySelector('.nav-link2')
        var nav3 = document.querySelector('.nav-link3')
        if (buttonygdiclick==0) {   
              nav1.className = 'nav-link1 '+'Visited'
              nav2.className = 'nav-link2'
              nav3.className = 'nav-link3'
        }
        else if (buttonygdiclick==1) {
              nav2.className = 'nav-link2 '+'Visited'
              nav1.className = 'nav-link1'
              nav3.className = 'nav-link3'
        }
        else {
              nav3.className = 'nav-link3 '+'Visited'
              nav1.className = 'nav-link1'
              nav2.className = 'nav-link2'
        }
        
        }

        // $('.row.navigasi').ready(function () {
        // $('.row.navigasi').slideDown(2000);
        // $('.row.navigasi').css('display','inline-block');
        // })

        $('.col-md-12.perkenalan-atas').ready(function () {
        $('.col-md-12.perkenalan-atas').slideDown(1000);
        })

        $('.K1').ready(function () {
        $('.K1').css({'opacity':'1',
                    'transition':'1s'
                  });
      })

        $('.K2').ready(function () {
        $('.K2').css({'opacity':'1',
                    'transition':'1s',
                    'transition-delay': '0.25s'
                  });
      })

        $('.K3').ready(function () {
        $('.K3').css({'opacity':'1',
                    'transition':'1s',
                    'transition-delay': '0.5s'
                  });
      })

        $('.K4').ready(function () {
        $('.K4').css({'opacity':'1',
                    'transition':'1s',
                    'transition-delay': '0.75s'
                  });
      })

        $('.K5').ready(function () {
        $('.K5').css({'opacity':'1',
                    'transition':'1s',
                    'transition-delay': '1s'
                  });
      })

        $('.K6').ready(function () {
        $('.K6').css({'opacity':'1',
                    'transition':'1s',
                    'transition-delay': '1.25s'
                  });
      })

        $('.K7').ready(function () {
        $('.K7').css({'opacity':'1',
                    'transition':'1s',
                    'transition-delay': '1.5s'
                  });
      })

        $('p').ready(function () {
        $('p').css({'opacity':'1',
                    'transition':'3s',
                    'transition-delay': '1s'
                  });
      })

        $('.col-md-4.text-center.bagian-3').ready(function () {
        $('.col-md-4.text-center.bagian-3').slideDown(2000);
        })

        // Start of Scroll Navbar
        var getHeaderHeight = $('.container-fluid.Header').outerHeight();
        var borderAmount = 2;
        var shadowAmount = 65
        var lastScrollPosition = 0;
        $('.container-fluid.Header').css('top', '-' + (getHeaderHeight + shadowAmount + borderAmount) + 'px');

        $(window).scroll(function() {
          var currentScrollPosition = $(window).scrollTop();

          if ($(window).scrollTop() > 2 * (getHeaderHeight + shadowAmount + borderAmount) ) {

            $('.row.navigasi').addClass('scrollActive').css('padding-top', getHeaderHeight);
            $('.row.navigasi').css('top', '-52px');

            if (currentScrollPosition < lastScrollPosition) {
              $('.row.navigasi').css('top', '-' + (getHeaderHeight + shadowAmount + borderAmount) + 'px');
            }

            lastScrollPosition = currentScrollPosition;

          } else {
            $('.row.navigasi').removeClass('scrollActive').css('padding-top', 0);
          }
        });
        // End of Scroll Navbar
        