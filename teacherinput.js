var tname = [];
var temail = [];
var announcement = [];
var tclub = [];
var tgender = [];
var tgrade = [];


function getData(){
	//stores values of teacher input in the code
	tname.push(document.getElementById("tname").value);
	localStorage.setItem("tname",JSON.stringify(tname));

	temail.push(document.getElementById("temail").value);
	localStorage.setItem("temail",JSON.stringify(temail));

	announcement.push(document.getElementById("announcement").value);
	localStorage.setItem("announcement",JSON.stringify(announcement));

	//goes through the checkboxes and if it is checked, then it is added to the local storage clubs for teacher
	var club = document.getElementsByName("tclub");
	for (i = 0; i < club.length; i++){
		if(club[i].checked){
			tclub.push(club[i].value);
		}
	}
	localStorage.setItem("tclub",JSON.stringify(tclub));

	//goes through the checkboxes and if it is checked, then it is added to the local storage genders for teacher
	var gender = document.getElementsByName("tgender");
	for (i = 0; i < gender.length;i++){
		if(gender[i].checked){
			tgender.push(gender[i].value);
		}
	}
	
	localStorage.setItem("tgender",JSON.stringify(tgender));

	//goes through the checkboxes and if it is checked, then it is added to the local storage grades for teacher
	var grade = document.getElementsByName("tgrade");
	var g = ''
	for (i = 0; i<grade.length;i++){
		if(grade[i].checked){
			g += grade[i].value ;
		}
	}
	tgrade.push(g);
	localStorage.setItem("tgrade",JSON.stringify(tgrade));
	//confirms the datas and presents it to the user
	var empty = document.getElementsByTagName("input");
	for(var i = 0; i < empty.length;i++){
		if ((empty[i].type == "checkbox") || (empty[i].type == "radio")){
			empty[i].checked = false;
		}else if (empty[i].type == "text"){
			empty[i].value = "";
		}
	}
	document.getElementById("announcement").value = "";
}