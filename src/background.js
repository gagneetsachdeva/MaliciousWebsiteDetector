//Add listener to handle onMessageReceive
chrome.runtime.onConnect.addListener(port => {
  if (port.name === 'content') {
    console.log("Entered here");
//    port.onMessage.addListener(message => {
////chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//  if (message.type === 'pyodideReady') {
      // Fetch model.pkl file
      fetch(chrome.runtime.getURL('model.pkl'))
              .then(response => response.arrayBuffer())
              .then(buffer => {
                // Use Pyodide to load the model
                const bytes = new Uint8Array(buffer);
                const model = pyodide.globals.get('pickle').loads(bytes);
                console.log("Model loaded successfully")
                })
                }
//  else{
//  console.log("Model load Unsuccessful")
//  }
//  }
//  )}
//  else {
//  console.log("Nothing here");
//  }
  })


