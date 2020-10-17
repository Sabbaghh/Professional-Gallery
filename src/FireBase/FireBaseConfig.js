import * as firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyCv--rxYMjt2GdLvtIdQSEjBYJNLZxzBdg",
    authDomain: "jacob-galleryapp.firebaseapp.com",
    databaseURL: "https://jacob-galleryapp.firebaseio.com",
    projectId: "jacob-galleryapp",
    storageBucket: "jacob-galleryapp.appspot.com",
    messagingSenderId: "281046705820",
    appId: "1:281046705820:web:c0a5b5cebb250424bdef59"
};

firebase.initializeApp(firebaseConfig);
const ProjectStorage = firebase.storage();
const ProjectFireStore = firebase.firestore();
export { ProjectFireStore, ProjectStorage };