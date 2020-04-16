//sets variables in javascript to be able to process storage
var sgrade = "";
var sgender = "";
var sclub = [];

function getData(){
	//stores student information in the local storage
	//grade processing, looks through the radio options for students 
	var grade = document.getElementsByName("sgrade");
	for (i = 0; i<grade.length;i++){
		if(grade[i].checked){
			var sgrade = grade[i].value;
		}
	}
	//stores grade data in local storage
	localStorage.setItem("sgrade",(sgrade));

	//gender processing, looks through the radio options for students 
	var gender = document.getElementsByName("sgender");
	for (i = 0; i<gender.length;i++){
		if(gender[i].checked){
			var sgender = gender[i].value;
		}
	}
	//stores gender data in local storage
	localStorage.setItem("sgender",(sgender));

	//clubs processing, looks through the checkboxes options for students 
	var club = document.getElementsByName("sclub");
	for (i = 0; i<club.length;i++){
		if(club[i].checked){
			sclub.push(club[i].value);
		}
	}
	//stores club data in local storage
	localStorage.setItem("sclub",JSON.stringify(sclub));
	alert("Congratulations, you have successfully submitted your information.\n" + "Grade: " + (sgrade) + "\nGender: " + (sgender) + "\nClubs: " + (sclub));
}