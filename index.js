// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;






const callThisFuctionAfterAsyncOperationToOperateonDataFromAsyncOperation = (data) => {
  console.log('Data Received', data);
};


const somAsyncStarterFunction = (middleName, callTheCallBackFn) => {

  let fakeData;

  setTimeout(() => {
    fakeData = {
      firstName:"Appukkuttaa",
      lastName: "Thoppikaraa",
       midName: middleName
    }

  //console.log('fakeData', fakeData);
  callTheCallBackFn(fakeData);
  }, 2000);
   
};

somAsyncStarterFunction("Epo-kalyanum", callThisFuctionAfterAsyncOperationToOperateonDataFromAsyncOperation);
console.log("Main Thread Completed Already.");
console.log("After this main thread Aynchronous operations will take place\
soon after which call backs will be called");




