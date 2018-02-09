$(document).ready(function(){
    /*For the sticky navigation*/
    $(".js--section-features").waypoint(function(direction){
        if(direction=="down"){
            $("nav").addClass("sticky");
        }else{
            $("nav").removeClass("sticky");
        }
    },{offset:"60px"});
    
    /*Scroll to plans*/
    $(".js--scroll-to-plans").click(function(){
        $("html,body").animate({scrollTop:$(".js--section-plans").offset().top},2000);
    });
    
    $(".js--scroll-to-start").click(function(){
        $("html,body").animate({scrollTop:$(".js--section-features").offset().top},2000);
    });
    
    $(".btn-features").click(function(){
        $("html,body").animate({scrollTop:$("#features").offset().top},2000);
    });
    
    $(".btn-works").click(function(){
        $("html,body").animate({scrollTop:$("#works").offset().top},3000);
    });
    
    $(".btn-cities").click(function(){
        $("html,body").animate({scrollTop:$("#cities").offset().top},3000);
    });
    
    $(".btn-plans").click(function(){
        $("html,body").animate({scrollTop:$("#plans").offset().top},3000);
    });
    
    $(".js--wp-1").waypoint(function(direction){
        $(".js--wp-1").addClass("animated fadeInDown");
    },{offset:"50%"});
    
    $(".js--wp-2").waypoint(function(direction){
        $(".js--wp-2").addClass("animated fadeInUp");
    },{offset:"50%"});
    
    $(".js--wp-3").waypoint(function(direction){
        $(".js--wp-3").addClass("animated fadeIn");
    },{offset:"50%"});
    
    $(".js--wp-4").waypoint(function(direction){
        $(".js--wp-4").addClass("animated pulse");
    },{offset:"50%"});
    
    /*Mobile navigation*/
    $(".js--nav-icon").click(function(){
        var nav=$(".js--main-nav");
        var icon=$(".js--nav-icon i");
        
        nav.slideToggle(800);
        
        if(icon.hasClass("ion-navicon-round")){
            icon.addClass("ion-close-round");
            icon.removeClass("ion-navicon-round");
        }else{
            icon.addClass("ion-navicon-round");
            icon.removeClass("ion-close-round");
        }
    });
    
});