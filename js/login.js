
    $("#loginHere").submit(function() {
        formData = $('#loginHere').serializeArray();
        localStorage.setItem("username", formData[0]["value"]);
        chrome.tabs.create({url:"popup.html"});
    });
