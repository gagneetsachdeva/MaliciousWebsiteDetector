const port = chrome.runtime.connect({ name: 'content' });
console.log(port);
//Define a function to load the Pyodide.js script and load the model

const script = document.createElement('script');
script.src = chrome.runtime.getURL('/pyodide/pyodide.js');
console.log(script.src);

function loadScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    console.log(script.src);
    script.onload = () => resolve();
    script.onerror = () => reject();
    if (document.head) {
        document.head.appendChild(script);
    }
  });
}

async function myAsyncFunction() {
  console.log('Start');

  // Load script using a Promise
  await loadScript(script.src);

  console.log('End');
}

myAsyncFunction();


//script.onload = async () => {
//  await(1000);
//  // Use the loadPyodide function here
////  const pyodide = await loadPyodide();
//  console.log(pyodide.runPython("print('Hello from Pyodide!')"));
//  port.postMessage({ type: 'pyodideReady' });
//};
console.log("after onload");

//
//
//      console.log("Entered here");
//
//      const pyodide = loadPyodide({ indexURL : script.src });
//
//      pyodide.runPythonAsync(`
//          import io
//          import pickle
//      `);
//
//      // Fetch the pickle file
//      const response = fetch(chrome.runtime.getURL('model.pkl'));
//      const binaryData = response.arrayBuffer();
//
//      // Unpickle the binary data using Pyodide
//      const pickleData = new Uint8Array(binaryData);
//      const unpickledObject = pyodide.runPythonAsync(`
//          with io.BytesIO(${pickleData}) as f:
//              unpickled_object = pickle.load(f)
//          unpickled_object
//      `);
//
//      console.log('Pyodide.js loaded successfully!');
//      console.log(port.name);

      //port.postMessage({ type: 'pyodideReady' });


//      await loadPyodidePromise;




//  script.onload = () => {
//    console.log('Pyodide.js loaded successfully!');
//    port.postMessage({ type: 'pyodideReady' });
//  };



  //script.src = 'https://localhost:*';
//  console.log('Adding event listeners to script element...');
//  script.addEventListener('load', () => {
//    console.log('Pyodide.js loaded successfully!');
//    document.head.appendChild(script);
//    port.postMessage({ type: 'pyodideReady' });
//  });
//  script.addEventListener('error', (event) => {
//    console.error('Error loading Pyodide.js:', event);
//  });
////  script.addEventListener('load', () => {
////    console.log('Script loaded successfully!');
////    document.head.appendChild(script);
////    //chrome.runtime.sendMessage({ type: 'pyodideReady' });
////    port.postMessage({ type: 'pyodideReady' });
////    console.log("Message send successfully");
////  });
