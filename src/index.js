import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/database';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-202494290-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "random-cats-fc969.firebaseapp.com",
  databaseURL: "https://random-cats-fc969-default-rtdb.firebaseio.com",
  projectId: "random-cats-fc969",
  storageBucket: "random-cats-fc969.appspot.com",
  messagingSenderId: "427970997751",
  appId: "1:427970997751:web:a168e000ddca6bdcfd52f2"
};
firebase.initializeApp(firebaseConfig);
var db = firebase.database();

var initCount;
const init = () => {
  db.ref("/like").once("value", e => {
    initCount = e.val();
  }).then(() => {
    laterLoad()
  })
}
const laterLoad = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App db={ db } initCount={ initCount }/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
window.onload = init;


