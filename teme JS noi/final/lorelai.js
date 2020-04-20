 async function getList() {
      var response = await fetch("https://site-81d77.firebaseio.com/list/.json");
      window.list = await response.json();
      draw();
    }

    function draw() {
      var str = "";
      for (var i in list) {
        str += `
		
				<div class="container">
				<div class="smallContainer">
					<img src="${list[i].imagine}" class="box">
					<p class="textContainer">${list[i].nume}</p>
					<p class="textContainer">Pret: ${list[i].pret} RON</p>
					<button class="detalii"><a href="Detalii.html?id=${i}" class="linkDetalii">Detalii</a></button>
				</div>
				</div>
				`;
      }
      document.querySelector(".wrapper").innerHTML = str;
    }

    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {
        slideIndex = 1
      }
      if (n < 1) {
        slideIndex = slides.length
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
	  
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    }

function showMain (){
 
	setTimeout(function(){
	var main=document.querySelector(".wrapper");
	main.classList.remove("hidden");
	
	var main=document.querySelector(".loader");
	main.classList.add("hidden");
	
	}, 2000);
 }