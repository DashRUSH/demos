$().ready(function(){
    resizeElements();
    $( window ).resize(resizeElements);
    $(".element").hover(switchItemHover,switchItemHover);
    $(".sort-title li").click(sortClick);
});

function switchItemHover() {
    var hide = $(this).find(".active");
    hide.removeClass("active");
    var show = $(this).find(".hide");
    show.removeClass("hide");
    show.addClass("active");
    hide.addClass("hide");
}

function sortClick(){
    var item = $(this);
    var hide = item.find(".active");
    hide.removeClass("active");
    var show = item.find(".hide");
    show.removeClass("hide");
    show.addClass("active");
    hide.addClass("hide");
}

function resizeElements(){
    var isIe = (navigator.userAgent.toLowerCase().indexOf("msie") !== -1
    || navigator.userAgent.toLowerCase().indexOf("trident") !== -1);

    $('.nth-child-3np3').removeClass('nth-child-3np3');
    $('.nth-child-2np2').removeClass('nth-child-2np2');

    var max = window.matchMedia("(min-width: 700px)");
    if(isIe){
        max.matches = document.documentElement.clientWidth >= 700;
    }
    if(max.matches){
        $('.box:nth-child(3n+3)').addClass('nth-child-3np3');
    }else{
        $('.box:nth-child(2n+2)').addClass('nth-child-2np2');
    }
}
