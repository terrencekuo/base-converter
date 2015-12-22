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

	// convert string to int
	var val = parseInt(input);

	// convert string to desired numerical value
	var output = {
		decimal: val.toString(10), 
		binary: val.toString(2),
		hexidecimal: val.toString(16),
	};

	var textNode;
	// iterate through output OBJ
	for(var key in output){
		if (key != type)
		{
			var string = key + ": " + output[key]+ " ";
			textNode = document.createTextNode(string); // create textNode w/ string
			div.appendChild(textNode);					// add text to Node
		}
	}

	document.getElementById("h_output").appendChild(div);
	document.getElementById("input").value = '';	// clear value in input field
}