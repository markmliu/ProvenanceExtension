function getDef(language){
	var word = localStorage.getItem("vocabWord");
	word = word.toLowerCase();
	var defcontainer = document.getElementById("fromdict");
    var defheading = document.getElementById("defHeading");
	var xhr = new XMLHttpRequest();
	var url = "http://glosbe.com/gapi/translate?from=eng&dest="+language+"&format=json&phrase="+word+"&pretty=true";
//  var url = "http://www.dictionaryapi.com/api/v1/references/collegiate/xml/hypocrite?key=94cf6c42-8f95-4eb1-be29-179e664a470c";
	xhr.open("GET", url, true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			// JSON.parse does not evaluate the attacker's scripts.
			var resp = JSON.parse(xhr.responseText);
            if (language == "eng"){
                var def = resp["tuc"][0]["meanings"][0]["text"];
                defheading.innerHTML = "Definition";
            }
            else {
                var def = resp["tuc"][0]["phrase"]["text"];
                defheading.innerHTML = "Translation";
            }
			defcontainer.value = def;
            localStorage.setItem("vocabDef",def);
		}
	}
	xhr.send();
}

window.onload = function() {     
    var word = localStorage.getItem("vocabWord");
    var username = localStorage.getItem("username");
    word = word.toLowerCase();
    var wordContainer = document.getElementById("wordContainer");
    var userContainer = document.getElementById("userContainer");
    wordContainer.innerHTML=word;
    userContainer.innerHTML="Hello " + username+"! ";
    getDef("eng");
    //listen for changes in language or user/glosbe definition
	var defcontainer = document.getElementById("fromdict");
    var dictbutton = document.getElementById("dictbutton");
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
        defcontainer.value = localStorage.getItem("vocabDef");
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
	var language = this.id;
    getDef(language);
}	


