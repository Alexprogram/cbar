setTimeout(function() {
  $('.formstyler').styler();
}, 100)


function setEqualHeight(columns){
 var tallestcolumn=0;
 columns.each(
  function(){
   currentHeight=$(this).height();
   if(currentHeight>tallestcolumn) {
    tallestcolumn=currentHeight;
   }
  }
 );
 columns.height(tallestcolumn);
}
 $(window).resize(function() {
 $('.card_item').css('height','auto'); //solve for all you browser stretchers out there!
        setEqualHeight($('.card_item'));
});
$(window).load(function() {
 setEqualHeight($(".card_item"));
});








$(document).ready(function() {
    $("#demo2").navgoco({accordion: true});
});
$(document).ready(function() {
    $("#demo3").navgoco({accordion: true});
});
$(document).ready(function() {
    $("#demo4").navgoco({accordion: true});
});

(function($) {
    $(function() {
        $('ul.tabs_caption').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.wrap_tabs').find('div.tabs_content').removeClass('active').eq($(this).index()).addClass('active');
        });
    });
})(jQuery);

var swiper = new Swiper('.swiper-container1', {
        nextButton: '.swiper-button-next1',
        prevButton: '.swiper-button-prev1',
        spaceBetween: 20,
        slidesPerView: 5,
        loop: true,
        breakpoints: {
            1170: {      
                slidesPerView: 4
            },
            980: {
            	 slidesPerView: 3
            },
            667: {
            	 slidesPerView: 2
            },
            480: {
            	slidesPerView: 1
            }
        }
    });

 var swiper = new Swiper('.swiper-container2', {
        nextButton: '.swiper-button-next2',
        prevButton: '.swiper-button-prev2',
        spaceBetween: 40,
        slidesPerView: 3,
        breakpoints: {
            1370: {      
                slidesPerView: 2
            },
            667: {      
                slidesPerView: 1
            }
        }
    });

   $('.lang_pull').click(function () {
            $(this).parents('.lang').find('.hidd_lang').fadeToggle(400);
            $(this).parents('.lang').find('.hidd_lang').toggleClass('lang_is_open');
        });
      $(document).mouseup(function (e) {
            var container = $(".hidd_lang");
            if (container.has(e.target).length === 0) {
                container.hide();
            }
        });




jQuery(document).ready(function( $ ) {
    $("#menu").mmenu({
       "extensions": [
          "pagedim-black"
       ],
       "navbars": [
          {
             "position": "top",
             "content": [
                "searchfield"
             ]
          }
       ]
    });
 });

pickmeup('.date', {
    format  : 'd B Y'
});
pickmeup('.date1', {
    format  : 'd B Y'
});
pickmeup('.date2', {
    format  : 'd b Y'
});

$(document).ready(function() {
var ctx = document.getElementById("myChart").getContext('2d');

var myChart = new Chart(ctx, {
     type: "line",
    data: {
        labels: [
            "Yan",
            "",
            "Mar",
            "",
            "May",
            "",
            "Iyl",
            "",
            "Sen",
            "",
            "Noy"
        ],
        datasets: [{
            label: "2018",
            data: [3, 8, 10, 12, 13, 12, 13, 13, 13, 13, 13, 12, ],
            fill: false,
            borderColor: "rgb(180, 180, 180)",
            lineTension: 0.1
        },{
        	 label: "2017",
            data: [15, 10, 8, 6, 8, 11, 12, 12, 12, 12, 12, 12, ],
            fill: false,
            borderColor: "rgb(28, 53, 80)",
            lineTension: 0.1
        }     
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
         legend: {
            display: true,
            labels: {
                fontColor: 'rgb(34, 34, 34)'
            }
        }

    }
});
});


