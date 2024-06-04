$(function(){
    $('.menu li').mouseenter(function(){
        $('.sub').stop().slideDown()
    })
    $('.menu li').mouseleave(function(){
        $('.sub').stop().slideUp()
    });


    // 페이드인 페이드아웃

    // $('.slide_all li').eq(0).siblings().hide();

    // var slideI=0;

    // setInterval(function(){
    //     if(slideI<2){
    //         slideI++;
    //     } else {
    //         slideI=0;
    //     }
    //     $('.slide_all li').eq(slideI).siblings().fadeOut(500);
    //     $('.slide_all li').eq(slideI).fadeIn(500);
    // },2500);

    //좌<->우
    $('.slide_all li').eq(0).siblings().css('left','-1200px');

    var slideI=0;

    setInterval(function(){
        if(slideI<2){
            slideI++;
        } else {
            slideI=0;
        }
        $('.slide_all li').eq(slideI).siblings().animate({left:'-1200px'},500);
        $('.slide_all li').eq(slideI).animate({left:'0'},500);
    },2500);


    //위아래
//     $('.slide_all li').eq(0).siblings().css('top','-350px');

//     var slideI=0;

//     setInterval(function(){
//         if(slideI<2){
//             slideI++;
//         } else {
//             slideI=0;
//         }
//         $('.slide_all li').eq(slideI).siblings().animate({top:'350px'},500);
//         $('.slide_all li').eq(slideI).animate({top:'0'},500);
//     },2500);


$('div.tab dl dt').click(function(){
    $('div.tab dl dt').removeClass('on');
    $(this).addClass('on');
    $('div.tab dl dd').addClass('hidden');
    $(this).next().removeClass('hidden');
})


});