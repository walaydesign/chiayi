AOS.init({startEvent: 'load'});
window.addEventListener('load', AOS.refresh);

$(".header_lang_title").click(function() {
    $(this).parents(".header_lang").find("ul").slideToggle(300);
})

$(".header_nav_item.has-child>a").click(function() {
    if($(window).width() < 1200) {
        $(this).toggleClass("active");
        $(this).parents(".header_nav_item").find(".header_nav_second").slideToggle(300);
    }
})

$(".header_menu").click(function() {
    $(this).toggleClass("active");
    $(".header_nav").slideToggle(300);
})

$(".header_top").click(function(){
    $("html, body").animate({scrollTop: 0},300);
})

$(window).on("resize scroll", function () {
    if ($(window).scrollTop()>0) {
        $(".header_top").addClass("active");
    } else {
        $(".header_top").removeClass("active");
    }
})

