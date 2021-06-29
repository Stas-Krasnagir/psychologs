import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




const firebaseConfig = {

  apiKey: "AIzaSyDYvJR-S2FzyDS1tnWPxnJ1ZG4jozmzoCs",
  authDomain: "test-72ef6.firebaseapp.com",
  databaseURL: "https://test-72ef6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "test-72ef6",
  storageBucket: "test-72ef6.appspot.com",
  messagingSenderId: "907241032914",
  appId: "1:907241032914:web:860504fa40cb8fec84310b"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const database = firebase.database();

export { storage, firebase, database as default };