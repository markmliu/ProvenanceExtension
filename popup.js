//	listen for changes to language selection	
	document.addEventListener('DOMContentLoaded', function(){
		$("#langselect").on("change",redefine);
	});

window.onload = function() {     
    var word = localStorage.text;
	word = word.toLowerCase();
    var cust = document.getElementById("custom");
	var defcontainer = document.getElementById("fromdict");
<<<<<<< HEAD
    cust.innerHTML="Word: "+ word;
=======
    cust.innerHTML=word;
>>>>>>> bootstrap stuff

	
	var xhr = new XMLHttpRequest();
	var url = "http://glosbe.com/gapi/translate?from=eng&dest=eng&format=json&phrase="+word+"&pretty=true";
//    var url = "http://www.dictionaryapi.com/api/v1/references/collegiate/xml/hypocrite?key=94cf6c42-8f95-4eb1-be29-179e664a470c";

	xhr.open("GET", url, true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			// JSON.parse does not evaluate the attacker's scripts.
			var resp = JSON.parse(xhr.responseText);
<<<<<<< HEAD
			var def = "Definition: "+resp["tuc"][0]["meanings"][0]["text"];
=======
			var def = resp["tuc"][0]["meanings"][0]["text"];
>>>>>>> bootstrap stuff
			defcontainer.innerHTML = def;
		}
	}
	xhr.send();
	
};
function redefine() {
	var word = localStorage.text;
	word = word.toLowerCase();
	var defcontainer = document.getElementById("fromdict");
	var sel = $("#langselect").val();
	defcontainer.innerHTML = "Switched to "+sel;
	var xhr = new XMLHttpRequest();
	var url = "http://glosbe.com/gapi/translate?from=eng&dest="+sel+"&format=json&phrase="+word+"&pretty=true";
//    var url = "http://www.dictionaryapi.com/api/v1/references/collegiate/xml/hypocrite?key=94cf6c42-8f95-4eb1-be29-179e664a470c";

	xhr.open("GET", url, true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			// JSON.parse does not evaluate the attacker's scripts.
			var resp = JSON.parse(xhr.responseText);
<<<<<<< HEAD
			var def = "Translation: "+resp["tuc"][0]["phrase"]["text"];
=======
      if (sel == "eng")
        var def = resp["tuc"][0]["meanings"][0]["text"];
      else
        var def = resp["tuc"][0]["phrase"]["text"];
>>>>>>> bootstrap stuff
			defcontainer.innerHTML = def;
		}
	}
	xhr.send();
}	


