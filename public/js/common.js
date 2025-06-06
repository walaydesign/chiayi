$(".header_lang_title").click(function() {
    $(this).parents(".header_lang").find("ul").slideToggle(300);
})

$(".header_nav_item.has-child>a").click(function() {
    if($(window).width() < 1200) {
        $(this).toggleClass("active");
        $(this).parents(".header_nav_item").find(".header_nav_second").slideToggle(300);
    }
})