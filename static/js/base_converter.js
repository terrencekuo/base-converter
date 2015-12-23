function Converter(){
	// obtain the value of the radio button that is selected
	function getRadioVal(form, name) {
	    var val;
	    // get list of radio buttons with specified name
	    var radios = form.elements[name];
	    
	    // loop through list of radio buttons
	    for (var i=0, len=radios.length; i<len; i++) {
	        if ( radios[i].checked ) { // radio checked?
	            val = radios[i].value; // if so, hold its value in val
	            break; // and break out of for loop
	        }
	    }
	    return val; // return value of checked radio or undefined if none checked
	}

	var input = document.getElementById("input").value;	// obtain value fron input
	var type = getRadioVal( document.getElementById('base_converter'), 'baseType' );
	console.log(type);
	var div = document.createElement('div');
	var span = document.createElement('span');
	span.innerHTML = "x"
	span.setAttribute("id", "close");
	span.onclick = function(){
		this.parentElement.parentElement.removeChild(this.parentElement);
	}
	div.className = "fragment";
	div.appendChild(span);

	var div1 = document.createElement('div');
	div1.setAttribute("id", "floating");

	var p = document.createElement('p');
	p.innerHTML = "input ";
	div1.appendChild(p);					

	var p = document.createElement('p');
	p.innerHTML = type + ": " + input +" ";
	div1.appendChild(p);

	div.appendChild(div1);				

	if (type == "binary")
	{
		var val = parseInt(input.substring(1));
		var decimalValue = 0;
		var i = 0;
		while(val != '')
		{
			lastInt = val % 10;
			decimalValue += lastInt*Math.pow(2,i);
			val = Math.floor(val / 10);
			i++;
		}
		input = decimalValue.toString();
	}

	// convert string to int
	var val = parseInt(input);

	// convert string to desired numerical value
	var output = {
		decimal: val.toString(10), 
		binary: val.toString(2),
		hexidecimal: val.toString(16),
	};

	var textNode;

	var div1 = document.createElement('div');
	div1.setAttribute("id", "floating");

	var p = document.createElement('p');
	p.innerHTML = "output ";
	div1.appendChild(p);					

	// iterate through output OBJ

	for(var key in output){
		if (key != type)
		{
			if (key == "hexidecimal")
				output[key] = "0x" + output[key];
			var p = document.createElement('p');
			p.innerHTML += key + ": " + output[key]+ " ";
			div1.appendChild(p);
		}
	}
		

	div.appendChild(div1);	

	var parent = document.getElementById("h_output");
	parent.insertBefore(div, parent.firstChild)

	document.getElementById("input").value = '';	// clear value in input field

	document.getElementById("decimal").checked = false;	
	document.getElementById("hexidecimal").checked = false;	
	document.getElementById("binary").checked = false;
	document.getElementById("submit").disabled = true; 
}