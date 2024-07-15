// firebase.ts

import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyCpuEF55uHiU-dsQ8qP1tosAr0fcME9quw',
  authDomain: 'freshcart-fad9b.firebaseapp.com',
  databaseURL: 'https://freshcart-fad9b.firebaseio.com', // Ganti dengan URL Realtime Database Anda
  projectId: 'freshcart-fad9b',
  storageBucket: 'freshcart-fad9b.appspot.com',
  messagingSenderId: '8367142083',
  appId: '1:8367142083:web:5722223a933e7a39d6de76',
  measurementId: 'G-5J9CMCJ1V4'
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase
