
function popitup(info, tab) {
    localStorage.setItem("vocabWord",info.selectionText);
    if (localStorage.getItem("username")== null){
        chrome.tabs.create({url:"login.html"});    
    }
    else
        chrome.tabs.create({url:"popup.html"});
}
var context = "selection";
var title = "Add '%s' to your vocab list";
chrome.contextMenus.create({"title": title, "contexts":[context],"onclick": popitup});
