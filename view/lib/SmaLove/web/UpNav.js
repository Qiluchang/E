$(".leftsidebar_box dt").css({"background-color":"#FFFFFF"});
$(".leftsidebar_box dt img").attr("src","../images/01.png");
$(function(){
    $(".leftsidebar_box dd").hide();
    $(".leftsidebar_box dt").click(function(){
        $(".leftsidebar_box dt").css({"background-color":"#FFFFFF"})
        $(this).css({"background-color": "#F8FAF9"});
        $(this).parent().find('dd').removeClass("menu_chioce");
        $(".leftsidebar_box dt img").attr("src","../images/01.png");
        $(this).parent().find('img').attr("src","../images/02.png");
        $(".menu_chioce").slideUp();
        $(this).parent().find('dd').slideToggle();
        $(this).parent().find('dd').addClass("menu_chioce");
    });
})
//折叠