$(document).ready(function (){
    let screenheight=window.height();
    console.log(screenheight);
    $(window).scroll(function (){
        let currentposition= $(this).scrollTop();
        if(currentposition =>screenheight){
            $(".site-nav").addClass("site-nav-scroll");
        }
        else{
            $(".site-nav").removeClass("site-nav-scroll")
        }
    });
});