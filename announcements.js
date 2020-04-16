var allannouncements = [];
var textholder = "";
var empty = "Sorry, there are no annoucnements for you today.";
function refresh(){
	//gets all items from local storage and stores them in usable variables
	var tname = JSON.parse(window.localStorage.getItem('tname'));
	var temail = JSON.parse(window.localStorage.getItem('temail'));
	var tgrade = JSON.parse(window.localStorage.getItem('tgrade'));
	var tgender = JSON.parse(window.localStorage.getItem('tgender'));
	var tclub = JSON.parse(window.localStorage.getItem('tclub'));
	var announcement = JSON.parse(window.localStorage.getItem('announcement'));
	var sclub = JSON.parse(window.localStorage.getItem('sclub'));
	var sgender = window.localStorage.getItem('sgender');
	var sgrade = window.localStorage.getItem('sgrade');

	for (i = 0; i < tname.length;i++){
	//if statement to check if the values are the same and present the announcement on the website
	if (((tgender[i] == "All") || (tgender[i] == sgender)) && ((tclub[i] == "All") || (sclub.includes(tclub[i]))) && ((tgrade[i].includes(sgrade)))) {
		textholder = "Announcement #" + ((document.getElementsByTagName("p")).length +1) + ": " + tname[i] + " sent the following announcement: " + JSON.stringify(announcement[i]) + "\nIf you wish to contact this person, email them at: " + temail[i];
		//following code creates paragraphs in the html 
		var p = document.createElement("p");
		var node = document.createTextNode(textholder);
		p.appendChild(node);
		var div = document.getElementById("main");
		div.appendChild(p);
	}else if (i > 1 &&(document.getElementsByTagName("p")).length == 0){
		var p = document.createElement("p");
		var node = document.createTextNode(empty);
		p.appendChild(node);
		var div = document.getElementById("main");
		div.appendChild(p);
	}
	}

}


