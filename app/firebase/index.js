import firebase from 'firebase';
  try {
    var config = {
      apiKey: "AIzaSyCR50qUTDh1YSi_O1T5-F2TpbbrJ-e6Rjc",
      authDomain: "todo-app-e1b10.firebaseapp.com",
      databaseURL: "https://todo-app-e1b10.firebaseio.com",
      storageBucket: "todo-app-e1b10.appspot.com"
    };

    firebase.initializeApp(config);
  } catch (e) {

  };

export var firebaseRef = firebase.database().ref();
export default firebase;
