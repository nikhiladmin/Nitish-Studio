var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navigation-bar").style.top = "0";
  } else {
    document.getElementById("navigation-bar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}


$("#send").click(function() {
    swal({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
      });
});

if(window.location.href == "http://localhost:3000/portfolio" || window.location.href =="http://localhost:3000/booknow" ){
  document.getElementById("foot").classList.remove("bg-light");
  document.getElementById("foot").classList.add("bg-dark");
  document.getElementById("foot").firstElementChild.style.color= "white";
  document.getElementById("about").onclick= function(){
    window.location.href="/#about-page";
  }
  document.getElementById("contect").onclick= function(){
    window.location.href="/#contectus";
  }

}