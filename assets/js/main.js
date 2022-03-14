window.onload = function() {
    let preloader = document.getElementById('preloader');
    preloader.classList.add('hide-preloader');
    setInterval(function() {
          preloader.classList.add('preloader-hidden');
    }, 3500);
}

$(document).ready(function() {
    $('#preloader').fadeOut(400);
});


$('.carousel').carousel({
    interval: 200
  })



  function viewDiv(){
    document.getElementById("div0").style.display = "block";
  };

  function viewDiv1(){
    document.getElementById("div1").style.display = "block";
  };
  
  function viewDiv2(){
    document.getElementById("div2").style.display = "block";
  };
  
  function viewDiv3(){
    document.getElementById("div3").style.display = "block";
  };
  
  function viewDiv4(){
    document.getElementById("div4").style.display = "block";
  };
  
  function viewDiv5(){
    document.getElementById("div5").style.display = "block";
  };
  
  function viewDiv6(){
    document.getElementById("div6").style.display = "block";
  };
  
  function viewDiv7(){
    document.getElementById("div7").style.display = "block";
  };
  
  function viewDiv8(){
    document.getElementById("div8").style.display = "block";
  };
  
  function viewDiv9(){
    document.getElementById("div9").style.display = "block";
  }; 
  
  function viewDiv10(){
    document.getElementById("div10").style.display = "block";
  }; 
  
  function viewDiv11(){
    document.getElementById("div11").style.display = "block";
  };