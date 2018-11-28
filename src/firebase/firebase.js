import firebase from 'firebase/app';
import 'firebase/database';

const prodConfig = {
    apiKey: "AIzaSyB-MJZmCD08GuHS7ZvSiEC4M4pqCm9RplQ",
    authDomain: "business-website-fddfc.firebaseapp.com",
    databaseURL: "https://business-website-fddfc.firebaseio.com",
    projectId: "business-website-fddfc",
    storageBucket: "business-website-fddfc.appspot.com",
    messagingSenderId: "752878706528"
};

const devConfig = {
    apiKey: "AIzaSyB-MJZmCD08GuHS7ZvSiEC4M4pqCm9RplQ",
    authDomain: "business-website-fddfc.firebaseapp.com",
    databaseURL: "https://business-website-fddfc.firebaseio.com",
    projectId: "business-website-fddfc",
    storageBucket: "business-website-fddfc.appspot.com",
    messagingSenderId: "752878706528"
};

const config = process.env.NODE_ENV === 'production'
    ? prodConfig
    : devConfig;

if(!firebase.apps.length){
    firebase.initializeApp(config)
}

const db = firebase.database();

export {
    db,
}
x