import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCnfcC-fLpmW7X5YGB0NyNUtdfDQrtMK7A",
  authDomain: "infocorona-a960d.firebaseapp.com",
  databaseURL: "https://infocorona-a960d.firebaseio.com",
  projectId: "infocorona-a960d",
  storageBucket: "infocorona-a960d.appspot.com",
  messagingSenderId: "451333196473",
  appId: "1:451333196473:web:2e4ae2bbf244ace9992968"
};

const app = firebase.initializeApp(firebaseConfig);

export default app;
