

function requestPass(){
	//requests password from the user to connect them to the teacher page if they put in the password
	var pass = prompt("What's the password?");
	if (pass == "test"){
		document.location.href = "teacherinput.html"
	}
}