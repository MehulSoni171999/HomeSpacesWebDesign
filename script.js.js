

const pointer= document.querySelector("#mousecrl");

window.addEventListener("mousemove", function(dets){
const xvalue=dets.clientX

const yvalue=dets.pageY

this.setTimeout(() => {
pointer.style.top=`${yvalue}px`
pointer.style.left=`${xvalue}px`
},100);
})


function swiperslide(){
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 2,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

swiperslide();


var tl = gsap.timeline();

tl.to("#leftimg",{
  
height:"45%",
ease:"power4",
duration:2,
stagger:2,
},'a')
.to(".frimg",{
  height:"45%",
  ease:"power4",
  duration:4
  },'a')
.to("#centerup span ",{
 
  height:"22vh",
  ease:Expo.easeInOut,
  opacity:1,
  duration:2,
  
},'a')
  // .to("#centerup h1",{
  //   height:"20%",
    
  //   ease:"power4",
  //   duration:4,
  //   delay:0,
  //   },'a')
    .to(".hui span h2",{
      height:"15%",
      opacity: 1,
      ease:Expo.easeInOut,
      duration:2,
      delay:0.5,
      },'a')

      .to("#nav",{
        height:"10%",
        ease:Expo.easeInOut,
        duration:2,
        opacity:1,
        delay:2,
        },'a')


        gsap.to("#third .thirdimg ",{
          scrollTrigger:{
             trigger:"#third",
             start:"top 30%",
            delay:2,
            duration:2,
            
       
          },
          height:"40vh",
          ease:"power4",
          stagger:0.5,
       })
       
       gsap.to(".ttext ",{
        scrollTrigger:{
           trigger:"#third",
           start:"top 20%",
          delay:5,
          duration:5,
          
     
        },
        height:"30vh",
        ease:"power4",
        stagger:0.5,
        opacity:1,
     })


  gsap.to("#fourth .fourthimg ",{
    scrollTrigger:{
       trigger:"#fourth",
       start:"top 20%",
      delay:2,
      duration:5,
      
 
    },
    height:"70vh",
    ease:"power4",
    stagger:2.5,
 })

 gsap.to("#fourth .ftext .forest ",{
  scrollTrigger:{
     trigger:"#fourth",
     start:"top 20%",
    delay:2,
    duration:2,
    

  },
  height:"40vh",
  ease:"power4",
  stagger:1.5,
  opacity:1,
})
  