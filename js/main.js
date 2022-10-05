//banner section

$('.banner-part').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  prevArrow: ".banner_prev",
  nextArrow: ".banner_next",
});
$('.service_part').slick({  
  vertical:true,
  centerPadding: '0px',
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow:".service_prev",
  nextArrow:".service_next",

}); 



$('.market_part').slick({
  centerMode: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    Padding: 0,
    centerPadding:0,
  prevArrow:".market_pre",
  nextArrow:".market_nex",
  

}); 
 


     //testimonial  slick
     $('.testimonial_part').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.testimonial_img',
    });

    $('.testimonial_img').slick({
      vertical:true,
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.testimonial_part',
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      centerPadding:0,
      prevArrow:".testi_prev",
      nextArrow:".testi_next",
      centerPadding: '0px',
      centerMode: true,
      centerPadding:0,
     
    });
