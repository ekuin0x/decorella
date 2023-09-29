window.onload = function(){
    AOS.init();
    $("#load").css("display", "none")
    showcase
 
}

const closer = function(){
    $("#displayer").html("")
    $("#displayer").css({"z-index": "-50"})
}

const display = (elem) =>{
    $("#displayer").html("<img src='' data-aos='fade-right' />")
    $("#displayer img").attr("src", $(elem).attr("src")) 
    $("#displayer").css({"z-index": "50"})
}

const scroller = (elem)=>{
    $([document.documentElement, document.body]).animate({
        scrollTop: $(elem).offset().top 
    }, 1000);
    if(screen.width < 670 ){
        $("nav").css("width" , "0")
    }
    
}
var i = 1
let dir = "positive"
const showcase = setInterval(()=>{
    let leap = screen.width
    if( i == 4 ){
        i = 1 
        if (dir == "positive"){  dir = "negative" }
        else{ dir = "positive" }
        }
    if (dir == "positive"){
        $("#index").animate({scrollLeft : "+=" +leap },2400) 
        }
    else{ 
        $("#index").animate({scrollLeft : "-=" +leap },2400) 
    }
    i++
}, 5800)

$(".bi-list").click(()=>{
    setTimeout(()=>{
        $("nav").css("width" , "100vw")
    }, 300)
})

$(".bi-x-lg").click(()=>{
    setTimeout(()=>{
        $("nav").css("width" , "0")
    }, 300)
})

$(window).on("scroll",()=>{

    if($("nav").offset().top < 10){
        $("nav").css({"background-color":  "transparent"})
        $("nav a").css({"color":  "white"})
    }else{
        $("nav").css({"background-color":  "rgb(240, 245, 240, 1)"})
        $("nav a").css({"color":  "black"})
    }
    
})










