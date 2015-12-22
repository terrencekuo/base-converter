var states = ["start", "decimal", "hexidecimal"];
var cState = "start";

function baseChecker(){
	var input = document.getElementById("input").value;
	var len = input.length;
	input = input.substring(len-1,len); // obtain each char
	console.log(input);
	switch(cState){
		case("start"):
			if(!isNaN(input))
			{	
				val = parseInt(input);
				if (val == 0)
					cState = "zero";
				else
					cState = "decimal"
				document.getElementById("decimal").checked = true;
			}
			else
			{
				console.log("error in start");
				document.getElementById("decimal").checked = false;	
				document.getElementById("hexidecimal").checked = false;	
				document.getElementById("binary").checked = false;	
			}
			break;
		case("zero"):
			if (len == 2 && input == "x")
			{
				cState = "hexidecimal";
				document.getElementById("hexidecimal").checked = true;
			}
			else{
				if(isNaN(input))
				{
					console.log("error in zero");
					document.getElementById("decimal").checked = false;	
					document.getElementById("hexidecimal").checked = false;	
					document.getElementById("binary").checked = false;	
				}
				else
				{
					if(parseInt(input) != 0)
					{
						cState = "decimal";
						document.getElementById("decimal").checked = true;
					}
				}
			}
			break;
		case("decimal"):
			break;
		case("hexidecimal"):
			break;
		default:
			console.log("error in default")
	}

}
