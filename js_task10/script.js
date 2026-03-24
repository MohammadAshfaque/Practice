window.addEventListener("scroll"  , function(){
    var scrollTop = document.documentElement.scrollTop;
    var  scrollHeight=  document.documentElement.scrollHeight-  document.documentElement.clientHeight;

    var scrolled =  (scrollTop / scrollHeight)  *  100;
    document.getElementById("progress-bar").style.width=  scrolled+"%";
});