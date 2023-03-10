chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        var url = details.url;
        // Use your trained model to classify the website as malicious or safe
        var isMalicious = 1 //myModel.classify(url);
        // Display a popup with the result
        if (isMalicious) {
            alert("Warning! This website has been identified as malicious.");
        } else {
            alert("This website is safe.");
        }
    },
    {urls: ["<all_urls>"]},
    ["blocking"]
);