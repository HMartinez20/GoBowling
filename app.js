// Initialize Firebase
var config = {
  apiKey: "AIzaSyBqm2UWSLit27_pLmEd6nn_WX41lzSRAYU",
  authDomain: "gobowling-55686.firebaseapp.com",
  databaseURL: "https://gobowling-55686.firebaseio.com",
  projectId: "gobowling-55686",
  storageBucket: "gobowling-55686.appspot.com",
  messagingSenderId: "523257812980"
};
firebase.initializeApp(config);

// Get  elements
const preObject = document.getElementById('object');

// Create references
const dbRefObject = firebase.database().ref().child('object');
    // ref() - refers to root of database: gobowling-55686/___

// Sync object changes
dbRefObject.on('value', snap => console.log(snap.val()));
    // snap - see updates on object everytime it is changed

console.log('test');
