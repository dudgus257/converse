
$(function(){

// HEADER & top-btn

    $(window).scroll(function(){
        if ($(window).scrollTop() > 100) {
            $('header, .btn-top').addClass('active')
        }
        else {
            $('header, .btn-top').removeClass('active')
        }
    })

    // slick slide = converse x drk shdw
    $('.slideshow').slick({
        infinite: true, //무한반복
        dots: false, // 동그라미 네비게이션 사용안함
        autoplay: true, //자동 재생
        autoplaySpeed: 1000, // 머무는 시간
        fade: true,
        speed: 1000, //자동 재생 트랜지션 시간
        pauseOnHover: false // 마우스 오버 = 멈춤
    });
    $('.slideshow02').slick({
        infinite: true, //무한반복
        dots: false, // 동그라미 네비게이션 사용안함
        autoplay: true, //자동 재생
        autoplaySpeed: 1000, // 머무는 시간
        fade: true,
        speed: 1000, //자동 재생 트랜지션 시간
        pauseOnHover: false // 마우스 오버 = 멈춤
    });

    // Header Trigger
    $('.trigger').click(function(){
        $(this).toggleClass('active')
        $('.gnb_left').toggleClass('active')
    })
    $('section').click(function(){
        $('.gnb_left, .trigger').removeClass('active')
    })

})



