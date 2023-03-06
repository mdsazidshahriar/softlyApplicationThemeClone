// showcase slider 
$(document).ready(function(){
    $('.showcase_slider').slick({
        infinite: true,
        arrows:false,
        speed: 500,
        dots:false,
        autoplay:true,
        autoplaySpeed : '700'
    });
});
// mobile screen slider 
$(document).ready(function(){
    $('.screen_mobile').slick({
        infinite:true,
        arrows:false,
        speed: 1000,
        dots:true,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
});
$(document).ready(function(){
    $('#gallerySlider').slick({
        infinite:true,
        arrows:true,
        speed: 1000,
        dots:true,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows:false

              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false
              }
            }
        ]
    });
});
// gallery slider 
// devloper slider 
$(document).ready(function(){
    $('#devloper_slide').slick({
        infinite:true,
        arrows:false,
        speed: 1000,
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});

function logOut(){
    window.location.href = '../logIn.html'
}

// berfiller 
$(document).ready(function(){

	$('#bar1').barfiller();
	$('#bar2').barfiller();
	$('#bar3').barfiller({ barColor: '#fc6' });
	$('#bar4').barfiller({ barColor: '#900', duration: 3000 });
	
});

// app freatures 
  $('#detailone').hide()
  $('#detailtwo').hide()
  $('#detailthree').hide()
  $('#detailfour').hide()

//   first button 
$("#detailoneBtn").click(function(){
    appQualityFunction($('#detailone'),$('#detailtwo'),$('#detailthree'),$('#detailfour'))
    appBtnQualityFunction($("#detailoneBtn"),$("#detailtwoBtn"),$("#detailthreeBtn"),$("#detailfourBtn"))
    appIconQualityFunction($('.crossone'),$('.crosstwo'),$('.crossthree'),$('.crossfour'))
});
//   second button 
$("#detailtwoBtn").click(function(){
    appQualityFunction($('#detailtwo'),$('#detailone'),$('#detailthree'),$('#detailfour'))
    appBtnQualityFunction($("#detailtwoBtn"),$("#detailoneBtn"),$("#detailthreeBtn"),$("#detailfourBtn"))
    appIconQualityFunction($('.crosstwo'),$('.crossthree'),$('.crossfour'),$('.crossone'))
});
// third button 
$("#detailthreeBtn").click(function(){
    appQualityFunction($('#detailthree'),$('#detailtwo'),$('#detailone'),$('#detailfour'))
    appBtnQualityFunction($("#detailthreeBtn"),$("#detailtwoBtn"),$("#detailoneBtn"),$("#detailfourBtn"))
    appIconQualityFunction($('.crossthree'),$('.crossone'),$('.crosstwo'),$('.crossfour'))
});
// fourth button 
$("#detailfourBtn").click(function(){
    appQualityFunction($('#detailfour'),$('#detailthree'),$('#detailtwo'),$('#detailone'))
    appBtnQualityFunction($("#detailfourBtn"),$("#detailthreeBtn"),$("#detailtwoBtn"),$("#detailoneBtn"))
    appIconQualityFunction($('.crossfour'),$('.crossone'),$('.crosstwo'),$('.crossthree'))
});
// app  quality function
function appQualityFunction(item1,item2,item3,item4){
    item1.show(300)
    item2.hide(300)
    item3.hide(300)
    item4.hide(300)
}
// button color function 
function appBtnQualityFunction(item1,item2,item3,item4) { 
    item1.css("color", "#C8385E");
    item2.css("color", "#3C3D3D");
    item3.css("color", "#3C3D3D");
    item4.css("color", "#3C3D3D");
}
// button rotate function 
function appIconQualityFunction(item1,item2,item3,item4){
    item1.css("transform", "rotate(90deg)");
    item2.css("transform", "rotate(45deg)");
    item3.css("transform", "rotate(45deg)");
    item4.css("transform", "rotate(45deg)");
}


