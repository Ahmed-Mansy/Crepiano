let menuspic;

$('.delivery').click(
    function(){
        $('.delivery-pop').fadeToggle()
    }
)
$('#delivery-pop').click(
    function (e) {
      
      if(e.target.getAttribute('id')=='delivery-pop'){
      $('.delivery-pop').fadeToggle()
    }
    }
)

$('.carousel-item img').click(
  function (e){
    menuspic=e.target.src
    $('.menus #boxContainer').addClass('d-flex')
    $('#innerBox').css('backgroundImage',`url(${menuspic})`)

  }
)

$('.menus #close').click(
  function () {
    $('.menus #boxContainer').removeClass('d-flex')
  }
)
$('#boxContainer').click(
  function (e) {
    if(e.target.getAttribute('id')=='boxContainer'){
      $('#boxContainer').removeClass('d-flex')
    }
  }
)
// $('.delivery').click(
//   function () {
//     $('.delivery-pop').addClass('d-flex')
//   }
// )
// $('#delivery-pop').click(
//   function (e) {
//     if(e.target.getAttribute('id')=='delivery-pop'){
//       $('.delivery-pop').removeClass('d-flex')
//     }
  
//   }
// )


$(document).ready(function(){
  $('#loading .loader').fadeOut(500, ()=>{
    $('#loading').fadeOut(400, ()=>{
      $('#loading').remove();
      $('body').css("overflow-y","auto");
    })
  })
})



let myImgs = Array.from(document.querySelectorAll(".myImg img"));
let boxContainer = document.getElementById("boxContainer");
let innerBox = document.getElementById("innerBox");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let close = document.getElementById("close");
let currentIndex = 0;

for (let i = 0; i < myImgs.length; i++) {
    myImgs[i].addEventListener("click", function (eventInfo) {
        boxContainer.style.display = "flex";
        let imgSrc = eventInfo.target.getAttribute("src")
        innerBox.style.backgroundImage = `url(${imgSrc})`;
        currentIndex = myImgs.indexOf(eventInfo.target);

    })
}


function nextSlide() {

    currentIndex++
    if (currentIndex == myImgs.length) {
        currentIndex = 0
    }

    let imgSrc = myImgs[currentIndex].getAttribute("src");
    innerBox.style.backgroundImage = `url(${imgSrc})`;

}

function prevSlide() {
    currentIndex--
    if (currentIndex < 0) {
        currentIndex = myImgs.length - 1;
    }
    let imgSrc = myImgs[currentIndex].getAttribute("src");
    innerBox.style.backgroundImage = `url(${imgSrc})`;

}
function closeSlide() {
    boxContainer.style.display = 'none';
}
next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
close.addEventListener("click", closeSlide);

document.addEventListener("keyup", function (eventInfo) {
    if (eventInfo.code == "ArrowRight") {
        nextSlide();
    }
    else if (eventInfo.code == "ArrowLeft") {
        prevSlide();
    }
    else if (eventInfo.code == "Escape") {
        closeSlide();
    }
})

boxContainer.addEventListener("click", function (e) {
    if (e.target.getAttribute('id') == 'boxContainer') {

        boxContainer.style.display = 'none';
    }
})

// menus ==================================