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

// Reference to the database service
var database = firebase.database();

function writeNewUser() {
  // A post entry.
  var postData = {
    firstName: 'Jane',
    middleName: 'Doe',
    LastName: 'Smith',
    starCount: 0,
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('users').push().key;

  // Write new user data
  var updates = {};
  updates['/users/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}
