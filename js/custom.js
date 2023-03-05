// backe to top button

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}






// flot menu

 const element = document.getElementsByClassName("navbar");
 window.addEventListener("scroll", function() {
if (window.scrollY > 400) {
element[0].classList.add("navbg");
} else {
element[0].classList.remove("navbg");
}
});

// ideas_munu slick start
 

  $('.ideas_munu').slick({
    slidesToShow: 3,
    slidesToScroll:1,
    nextArrow:".next",
    prevArrow:".prev",
    centerMode:true,
    centerPadding:"0px",
    responsive: [
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll:1,
          nextArrow:".next",
          prevArrow:".prev",
          centerMode:true,
          centerPadding:"0px",
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1,
          nextArrow:".next",
          prevArrow:".prev",
          centerMode:true,
          centerPadding:"0px",
        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1,
          nextArrow:".next",
          prevArrow:".prev",
          centerMode:true,
          centerPadding:"0px",
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
          
  

//   video 
new VenoBox({
    selector: ".my-video-links"
});

// posts slider

$('.posts_inner').slick({
  slidesToShow: 3,
    slidesToScroll:1,
    nextArrow:".next",
    prevArrow:".prev",
    centerMode:true,
    centerPadding:"0px",
  responsive: [
    {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 2,
    slidesToScroll:1,
    nextArrow:".next",
    prevArrow:".prev",
    centerMode:true,
    centerPadding:"0px",
      }
    },
    {
      breakpoint: 768.96,
      settings: {
        slidesToShow: 1,
    slidesToScroll:1,
    nextArrow:".next",
    prevArrow:".prev",
    centerMode:true,
    centerPadding:"0px",
      }
    },
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll:1,
        nextArrow:".next",
        prevArrow:".prev",
        centerMode:true,
        centerPadding:"0px",
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
				




// counter
$('.counter').counterUp({
    delay: 10,
    time: 10000
});