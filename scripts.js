const params = {
	amount: 200,
	size: {
	  min: 1,
	  max: 5,
	  giant: 9
	},
	duration: {
	  min: 5,
	  max: 25,
	}
  }
const randomBetween = (a, b) => {
	return (a + (Math.random() * (b - a)));
}

for (let i = 0; i < params.amount; i++) {
	
	var size = Math.round(Math.random() * 10) === 0 ? params.size.giant : randomBetween(params.size.min, params.size.max);
	

	var star = document.createElement("div");
	star.setAttribute(
		'style',
		'position: absolute; left: ' + randomBetween(0, 100) + '%;  top: ' + randomBetween(0, 100) + '%; width: ' + size + 'px; height: ' + size + 'px; pointer-events: none; box-shadow:0 0' + size + 'px ' + size/2 + 'px #043668; animation-duration: ' + randomBetween(params.duration.min, params.duration.max) + 's;',
		);
	star.innerHTML = "";
	document.getElementById("root").append(star);
}

function show_age(){
	if(document.getElementById("answerpanel").classList.contains("visible") && document.getElementById("answ1").classList.contains("visible")){
		document.getElementById("answerpanel").classList.remove("visible");
		document.getElementById("answ1").classList.remove("visible");
		document.getElementById("answerpanel").classList.add("notvisible");
		document.getElementById("answ1").classList.add("notvisible");
	} else{
		if(document.getElementById("answerpanel").classList.contains("visible")){
			document.getElementById("answ1").classList.remove("notvisible");
			document.getElementById("answ2").classList.remove("visible");
			document.getElementById("answ3").classList.remove("visible");
			document.getElementById("answ4").classList.remove("visible");
			document.getElementById("answ5").classList.remove("visible");
			document.getElementById("answ6").classList.remove("visible");

			document.getElementById("answ2").classList.add("notvisible");
			document.getElementById("answ3").classList.add("notvisible");
			document.getElementById("answ4").classList.add("notvisible");
			document.getElementById("answ5").classList.add("notvisible");
			document.getElementById("answ6").classList.add("notvisible");

			document.getElementById("answ1").classList.add("visible");
		} else{
			document.getElementById("answerpanel").classList.remove("notvisible");
			document.getElementById("answerpanel").classList.add("visible");
			document.getElementById("answ1").classList.remove("notvisible");
			document.getElementById("answ1").classList.add("visible");
		}
	}
}
function show_mass(){
	if(document.getElementById("answerpanel").classList.contains("visible") && document.getElementById("answ2").classList.contains("visible")){
		document.getElementById("answerpanel").classList.remove("visible");
		document.getElementById("answ2").classList.remove("visible");
		document.getElementById("answerpanel").classList.add("notvisible");
		document.getElementById("answ2").classList.add("notvisible");
	} else{
		if(document.getElementById("answerpanel").classList.contains("visible")){
			document.getElementById("answ1").classList.remove("visible");
			document.getElementById("answ2").classList.remove("notvisible");
			document.getElementById("answ3").classList.remove("visible");
			document.getElementById("answ4").classList.remove("visible");
			document.getElementById("answ5").classList.remove("visible");
			document.getElementById("answ6").classList.remove("visible");

			document.getElementById("answ1").classList.add("notvisible");
			document.getElementById("answ3").classList.add("notvisible");
			document.getElementById("answ4").classList.add("notvisible");
			document.getElementById("answ5").classList.add("notvisible");
			document.getElementById("answ6").classList.add("notvisible");

			document.getElementById("answ2").classList.add("visible");
		} else{
			document.getElementById("answerpanel").classList.remove("notvisible");
			document.getElementById("answerpanel").classList.add("visible");
			document.getElementById("answ2").classList.remove("notvisible");
			document.getElementById("answ2").classList.add("visible");
		}
	}
}
function show_star(){
	if(document.getElementById("answerpanel").className == "visible" && document.getElementById("answ3").className == "visible"){
		document.getElementById("answerpanel").classList.remove("visible");
		document.getElementById("answ3").classList.remove("visible");
		document.getElementById("answerpanel").classList.add("notvisible");
		document.getElementById("answ3").classList.add("notvisible");
	} else{
		if(document.getElementById("answerpanel").className == "visible"){
			document.getElementById("answ1").classList.remove("visible");
			document.getElementById("answ2").classList.remove("visible");
			document.getElementById("answ3").classList.remove("notvisible");
			document.getElementById("answ4").classList.remove("visible");
			document.getElementById("answ5").classList.remove("visible");
			document.getElementById("answ6").classList.remove("visible");

			document.getElementById("answ1").classList.add("notvisible");
			document.getElementById("answ2").classList.add("notvisible");
			document.getElementById("answ4").classList.add("notvisible");
			document.getElementById("answ5").classList.add("notvisible");
			document.getElementById("answ6").classList.add("notvisible");

			document.getElementById("answ3").classList.add("visible");
		} else{
			document.getElementById("answerpanel").classList.remove("notvisible");
			document.getElementById("answerpanel").classList.add("visible");
			document.getElementById("answ3").classList.remove("notvisible");
			document.getElementById("answ3").classList.add("visible");
		}
	}
}
function show_sat(){
	if(document.getElementById("answerpanel").className == "visible" && document.getElementById("answ4").className == "visible"){
		document.getElementById("answerpanel").classList.remove("visible");
		document.getElementById("answ4").classList.remove("visible");
		document.getElementById("answerpanel").classList.add("notvisible");
		document.getElementById("answ4").classList.add("notvisible");
	} else{
		if(document.getElementById("answerpanel").className == "visible"){
			document.getElementById("answ1").classList.remove("visible");
			document.getElementById("answ2").classList.remove("visible");
			document.getElementById("answ3").classList.remove("visible");
			document.getElementById("answ4").classList.remove("notvisible");
			document.getElementById("answ5").classList.remove("visible");
			document.getElementById("answ6").classList.remove("visible");
			document.getElementById("answ1").classList.add("notvisible");
			document.getElementById("answ2").classList.add("notvisible");
			document.getElementById("answ3").classList.add("notvisible");
			document.getElementById("answ5").classList.add("notvisible");
			document.getElementById("answ6").classList.add("notvisible");
			document.getElementById("answ4").classList.add("visible");
		} else{
			document.getElementById("answerpanel").classList.remove("notvisible");
			document.getElementById("answerpanel").classList.add("visible");
			document.getElementById("answ4").classList.remove("notvisible");
			document.getElementById("answ4").classList.add("visible");
		}
	}
}
function show_sm(){
	if(document.getElementById("answerpanel").className == "visible" && document.getElementById("answ5").className == "visible"){
		document.getElementById("answerpanel").classList.remove("visible");
		document.getElementById("answ5").classList.remove("visible");
		document.getElementById("answerpanel").classList.add("notvisible");
		document.getElementById("answ5").classList.add("notvisible");
	} else{
		if(document.getElementById("answerpanel").className == "visible"){
			document.getElementById("answ1").classList.remove("visible");
			document.getElementById("answ2").classList.remove("visible");
			document.getElementById("answ3").classList.remove("visible");
			document.getElementById("answ4").classList.remove("visible");
			document.getElementById("answ5").classList.remove("notvisible");
			document.getElementById("answ6").classList.remove("visible");
			document.getElementById("answ1").classList.add("notvisible");
			document.getElementById("answ2").classList.add("notvisible");
			document.getElementById("answ3").classList.add("notvisible");
			document.getElementById("answ4").classList.add("notvisible");
			document.getElementById("answ6").classList.add("notvisible");
			document.getElementById("answ5").classList.add("visible");
		} else{
			document.getElementById("answerpanel").classList.remove("notvisible");
			document.getElementById("answerpanel").classList.add("visible");
			document.getElementById("answ5").classList.remove("notvisible");
			document.getElementById("answ5").classList.add("visible");
		}
	}
}
function show_com(){
	if(document.getElementById("answerpanel").className == "visible" && document.getElementById("answ6").className == "visible"){
		document.getElementById("answerpanel").classList.remove("visible");
		document.getElementById("answ6").classList.remove("visible");
		document.getElementById("answerpanel").classList.add("notvisible");
		document.getElementById("answ6").classList.add("notvisible");
	} else{
		if(document.getElementById("answerpanel").className == "visible"){
			document.getElementById("answ1").classList.remove("visible");
			document.getElementById("answ2").classList.remove("visible");
			document.getElementById("answ3").classList.remove("visible");
			document.getElementById("answ4").classList.remove("visible");
			document.getElementById("answ5").classList.remove("visible");
			document.getElementById("answ6").classList.remove("notvisible");
			document.getElementById("answ1").classList.add("notvisible");
			document.getElementById("answ2").classList.add("notvisible");
			document.getElementById("answ3").classList.add("notvisible");
			document.getElementById("answ4").classList.add("notvisible");
			document.getElementById("answ5").classList.add("notvisible");
			document.getElementById("answ6").classList.add("visible");
		} else{
			document.getElementById("answerpanel").classList.remove("notvisible");
			document.getElementById("answerpanel").classList.add("visible");
			document.getElementById("answ6").classList.remove("notvisible");
			document.getElementById("answ6").classList.add("visible");
		}
	}
}