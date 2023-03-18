let checkButton = document.getElementById('buttonId');
//listener to handle button onClick event
checkButton.addEventListener("click",() =>{
    //Get current active tab
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
   //Execute script for the current page
   chrome.scripting.executeScript({
   target: {tabId: tabs[0].id},
   files:['content.js']
   });
  })
  })


