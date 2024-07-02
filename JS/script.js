
let section=document.querySelector('.about-section ');
let allcounters=document.querySelectorAll('.about-section .right-section  .numbers p');
var started=false;

window.onscroll=function (){
  // check if the scrolled reatched to the main section selected
  if (window.scrollY >= section.offsetTop){
  if (!started){
    allcounters.forEach((counternum) => {
  startcounter(counternum);
  });
  
  }
  started=true;
  
  
  
  
  }
  
  
  }
  
  // counting numbers
  function startcounter(ele){
  let gaol=ele.dataset.goal;
  let count=setInterval(()=>{
  ele.textContent++;
  if (ele.textContent ==gaol ){
  clearInterval(count);
  }
  
  
  } ,2000/gaol);
  
  
  }
  



(function ($){
  "use strict";

  var spinner = function () {
    setTimeout(function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
    }, 1);
};
spinner();

  
 


// show numbers when scrolling




$(document).ready(function(){
  $("#testimonial-slider").owlCarousel({
      items:2,
      itemsDesktop:[1000,2],
      itemsDesktopSmall:[979,2],
      itemsTablet:[768,2],
      itemsMobile:[650,1],
      pagination:true,
      navigation:false,
      slideSpeed:1000,
      autoPlay:true
  });
});

// Team Section
$(document).ready(function(){
  $("#Team").owlCarousel({
      items:4,
      itemsDesktop:[1000,1],
      itemsDesktopSmall:[979,1],
      itemsTablet:[769,1],
      navigation:false,
      pagination:true,
      autoplay:true,
      nav:true,
      navText:[
       ' <img src="../img/right-arrow.png" alt="">',
       ' <img src="../img/right-arrow.png" alt="">'


      ]
      
      

  });
});

// counter up



// init AOS animation
AOS.init();

}
)(jQuery);


