
window.onload = function() {     
  var word = localStorage.text;
	word = word.toLowerCase();
  var cust = document.getElementById("custom");
	var defcontainer = document.getElementById("fromdict");
  var dictbutton = document.getElementById("dictbutton");
  cust.innerHTML=word;
	
	var xhr = new XMLHttpRequest();
	var url = "http://glosbe.com/gapi/translate?from=eng&dest=eng&format=json&phrase="+word+"&pretty=true";
//    var url = "http://www.dictionaryapi.com/api/v1/references/collegiate/xml/hypocrite?key=94cf6c42-8f95-4eb1-be29-179e664a470c";

	xhr.open("GET", url, true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			// JSON.parse does not evaluate the attacker's scripts.
			var resp = JSON.parse(xhr.responseText);
			var def = resp["tuc"][0]["meanings"][0]["text"];
			defcontainer.value = def;
      localStorage.def = def;
		}
	}
  
	xhr.send();
  //listen for changes in language or user/glosbe definition
  $("#userDefSel").on("click", function() {
    $("#defsource").children().removeClass("disabled");   
    this.className+="disabled";
    dictbutton.innerHTML = "User";
    defcontainer.value = "";
    defcontainer.placeholder = "Enter definition here";
  });	
  $("#glosbeDefSel").on("click", function() {
    $("#defsource").children().removeClass("disabled");   
    this.className+="disabled";
    dictbutton.innerHTML = "Glosbe";
    defcontainer.value = localStorage.def;
    defcontainer.placeholder = "";
  });
  $("#mylist").delegate('li','click',redefine);
};
function redefine() {
  //undisable current language selection
  $("#mylist").children().removeClass("disabled");
  //disable new language selection
  this.className +="disabled";
  var langButton = document.getElementById("lang-button");
  langButton.innerHTML = this.getElementsByTagName('a')[0].innerHTML;

	var word = localStorage.text;
	word = word.toLowerCase();
	var defcontainer = document.getElementById("fromdict");
  var defheading = document.getElementById("defHeading");
	var sel = this.id;
	defcontainer.innerHTML = "Switched to "+sel;
	var xhr = new XMLHttpRequest();
	var url = "http://glosbe.com/gapi/translate?from=eng&dest="+sel+"&format=json&phrase="+word+"&pretty=true";
//    var url = "http://www.dictionaryapi.com/api/v1/references/collegiate/xml/hypocrite?key=94cf6c42-8f95-4eb1-be29-179e664a470c";

	xhr.open("GET", url, true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			// JSON.parse does not evaluate the attacker's scripts.
			var resp = JSON.parse(xhr.responseText);
      if (sel == "eng"){
        var def = resp["tuc"][0]["meanings"][0]["text"];
        defheading.innerHTML = "Definition";
      }
      else {
        var def = resp["tuc"][0]["phrase"]["text"];
        defheading.innerHTML = "Translation";
      }
			defcontainer.value = def;
      localStorage.def = def;
		}
	}
	xhr.send();
}	


