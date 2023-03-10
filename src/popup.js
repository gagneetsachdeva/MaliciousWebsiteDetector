chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  var url = tabs[0].url;
  var isMalicious = 1 //myModel.classify(url);
  var result = document.getElementById('result');
  if (isMalicious) {
    result.innerHTML = "Warning! This website has been identified as malicious.";
  } else {
    result.innerHTML = "This website is safe.";
  }
});