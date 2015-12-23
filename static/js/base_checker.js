function addBinary(){
	var input = document.getElementById("input").value;
	var len = input.length;

	if (len == 0)
		document.getElementById("input").value = "b";
	else
	{
		if(input.substring(0,1) == "b" && len == 1)
			return
		document.getElementById("input").value = "b";
	}
}

function addHex(){
	var input = document.getElementById("input").value;
	var len = input.length;

	if (len == 0)
		document.getElementById("input").value = "0x";
	else
	{
		if(input.substring(0,1) == "0" && input.substring(0,1) == "x" && len == 2)
			return
		document.getElementById("input").value = "0x";
	}
}	

function addDecimal(){
	document.getElementById("input").value = "";
}	

function validate(event){
	var keyCode = ('which' in event) ? event.which : event.keyCode; 		// obtain ascii character from keyboard
	var ctrlDown = event.ctrlKey||event.metaKey 								// Mac support

	var numerical = (keyCode >= 48) && (keyCode <=57); 						// allow only numerical values of 0 to 9 to be entered 
	var lowAlpha = ((keyCode >= 97) && (keyCode <=102)) || keyCode == 120;	// allow a-f, x
	var upperAlpha = ((keyCode >= 65) && (keyCode <=70))|| keyCode == 88 ;	// allow A-F, x
	var modifier = (keyCode == 13) || (keyCode == 8) || 
					(keyCode == 37) || (keyCode == 39); 					// allow only backspace, enter, left, right
	var copy = ctrlDown && keyCode==67;											// c
	var cut = ctrlDown && keyCode==86;											// x
	var paste = ctrlDown && keyCode==88;										// v
	var refresh = ctrlDown && keyCode==114;										// r

	return numerical || modifier || lowAlpha || upperAlpha || modifier || copy || cut || paste || refresh;
}

function baseChecker(){
	var input = document.getElementById("input").value;
	var len = input.length;

	// check if decimal
	if((input.match(/^[0-9]+$/) != null) && len > 0)
	{
		if(len > 0)
			document.getElementById("submit").disabled = false;
		else
			document.getElementById("submit").disabled = true;
		document.getElementById("decimal").checked = true;
		return;
	}

	var	firstChar;
	var secondChar;

	if (len >= 1)
		firstChar = input.substring(0,1);

	// check if binary
	if (firstChar == 'b' && checkBinary(input.substring(1)))
	{
		if(len >= 2)
			document.getElementById("submit").disabled = false;
		else
			document.getElementById("submit").disabled = true;
		document.getElementById("binary").checked = true;
		return;
	}


	if (len >= 2)
		secondChar = input.substring(1,2);

	// check if hexidecimal
	if (firstChar == '0' && secondChar == 'x')
	{
		if(len>=3)
			document.getElementById("submit").disabled = false;
		else
			document.getElementById("submit").disabled = true;
		document.getElementById("hexidecimal").checked = true;
		return;
	}

	document.getElementById("decimal").checked = false;	
	document.getElementById("hexidecimal").checked = false;	
	document.getElementById("binary").checked = false;
	document.getElementById("submit").disabled = true; 
}

function checkBinary(val){
	len = val.length;
	for(var i = 0; i<len; i++)
	{
		if(val[i] != "0" && val[i] != "1") 
			return false;
	}
	return true;
}
