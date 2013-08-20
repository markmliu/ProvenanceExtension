
function popitup(info, tab) {
    localStorage.setItem("vocabWord",info.selectionText);
  var newwindow=window.open('popup.html','dummy','height=300,width=1500, location = no, menubar = no');
	if (window.focus) {newwindow.focus()}
	return false;
}
var context = "selection";
var title = "Add '%s' to your vocab list";
chrome.contextMenus.create({"title": title, "contexts":[context],
                            "onclick": popitup});
