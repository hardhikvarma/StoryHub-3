import * as firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyCQpxN7yCEOPb71Nj49BTOiatRf7X1D-cI",
    authDomain: "story-hub-2-d9e29.firebaseapp.com",
    projectId: "story-hub-2-d9e29",
    storageBucket: "story-hub-2-d9e29.appspot.com",
    messagingSenderId: "592268942590",
    appId: "1:592268942590:web:847db6313409e7700a59af"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();