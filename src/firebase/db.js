import firebase from 'firebase/app'
import 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAhsUaUx4-653cLXyq9JZ26IN_Wu3mDhmg",
  authDomain: "childgame-60e8d.firebaseapp.com",
  databaseURL: "https://childgame-60e8d-default-rtdb.firebaseio.com",
  projectId: "childgame-60e8d",
  storageBucket: "childgame-60e8d.appspot.com",
  messagingSenderId: "951542475798",
  appId: "1:951542475798:web:8d398d431bc5e575099937",
  measurementId: "G-VCPSJSSF9S"
};
// Get a Firestore instance
export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true })
