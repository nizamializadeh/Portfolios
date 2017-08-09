var imgcaunt = 1;
var total = 3;

function slidee(x){
	var image = document.getElementById("image");
	imgcaunt = imgcaunt + x;
	if(imgcaunt<1){imgcaunt = total;}
	if(imgcaunt>total){imgcaunt = 1;}
	image.src= "img/slide_" + imgcaunt +".jpg"
	clearInterval(time); 								
	time =  window.setInterval(function slider() { 		
	var image = document.getElementById("image");	
	imgcaunt = imgcaunt + 1;
	if(imgcaunt<1){imgcaunt = total;}
	if(imgcaunt>total){imgcaunt = 1;}
	image.src= "img/slide_" + imgcaunt +".jpg"
	},1200);
}
	var time = window.setInterval(function slider() {   
	var image = document.getElementById("image");
	imgcaunt = imgcaunt + 1;
	if(imgcaunt<1){imgcaunt = total;}
	if(imgcaunt>total){imgcaunt = 1;}
	image.src= "img/slide_" + imgcaunt +".jpg"
	},1400);
		var popular1 = document.getElementsByClassName("popular_list")[0];
		var last1 = document.getElementsByClassName("last_list")[0];
		var best1 = document.getElementsByClassName("best_list")[0];
		var offers1 = document.getElementsByClassName("offers_list")[0];
		var other1 = document.getElementsByClassName("other_list")[0];

		var li11 = document.getElementById("li1")
		var li22 = document.getElementById("li2")
		var li33 = document.getElementById("li3")
		var li44 = document.getElementById("li4")
		var li255 = document.getElementById("li5")
	
	function popular(){
		
		
		// c.style.background = "#A8D700"
		// d.style.background = "#6b5f53"
	
		popular1.style.display="block";
		last1.style.display="none";
		best1.style.display="none";
		offers1.style.display="none";
		other1.style.display="none";

	}
	function last(){
		
		
		// d.style.background = "#A8D700"
		// c.style.background = "#6b5f53"
		last1.style.display="block";
		best1.style.display="none";
		offers1.style.display="none";
		popular1.style.display="none";
		other1.style.display="none";

		

	}
	function best(){
		
		
		// c.style.background = "#A8D700"
		// d.style.background = "#6b5f53"
	
		best1.style.display="block";
		last1.style.display="none";
		offers1.style.display="none";
		popular1.style.display="none";
		other1.style.display="none";
	}
	function offers(){
		
		
		// c.style.background = "#A8D700"
		// d.style.background = "#6b5f53"
		
		offers1.style.display="block";
		last1.style.display="none";
		best1.style.display="none";
		popular1.style.display="none";
		other1.style.display="none";
	}
	function other(){
		
		
		// c.style.background = "#A8D700"
		// d.style.background = "#6b5f53"
	
		other1.style.display="block";
		last1.style.display="none";
		best1.style.display="none";
		offers1.style.display="none";
		popular1.style.display="none";
	}
