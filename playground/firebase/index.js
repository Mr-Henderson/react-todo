import firebase from 'firebase';
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCR50qUTDh1YSi_O1T5-F2TpbbrJ-e6Rjc",
    authDomain: "todo-app-e1b10.firebaseapp.com",
    databaseURL: "https://todo-app-e1b10.firebaseio.com",
    storageBucket: "todo-app-e1b10.appspot.com"
  };
  firebase.initializeApp(config);

  var firebaseRef = firebase.database().ref();

  firebaseRef.set({
    app: {
      name: 'Todo App',
      version: '1.0.0'
    },
    isRunning: true,
    user: {
      name: 'Toby',
      age: 25
    },
  });

  var todosRef = firebaseRef.child('todos');

  todosRef.on('child_added', (snapshot) => {
    console.log('New todo added', snapshot.key, snapshot.val());
  });

  todosRef.push({
      name: 'Todo1'
  });

  todosRef.push({
      name: 'Todo2'
  });
  // var notesRef = firebaseRef.child('notes');
  //
  // notesRef.on('child_added', (snapshot) => {
  //   console.log('child_added', snapshot.key, snapshot.val());
  // });
  //
  // notesRef.on('child_changed', (snapshot) => {
  //   console.log('child_changed', snapshot.key, snapshot.val());
  // });
  //
  // notesRef.on('child_removed', (snapshot) => {
  //   console.log('child_removed', snapshot.key, snapshot.val());
  // });



  // var newNoteRef = notesRef.push({
  //   text: 'Walk the dog!'
  // });
  // console.log('Todo id', newNoteRef.key);
