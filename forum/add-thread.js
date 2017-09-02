var textarea_content;
var main_thread_content;
var new_content;

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDOrV-iKEDNaZJaSO5zcx1I2_59O2NkEYQ",
    authDomain: "forum-746da.firebaseapp.com",
    databaseURL: "https://forum-746da.firebaseio.com",
    projectId: "forum-746da",
    storageBucket: "forum-746da.appspot.com",
    messagingSenderId: "567942458547"
  };
  firebase.initializeApp(config);

  function toggleButton(ref,bttnID){
    document.getElementById("submit").disabled= ((ref.value !== ref.defaultValue) ? false : true);
  }

function add_thread(){
    textarea_content=document.getElementById("content").value;

    new_content=textarea_content;
    document.getElementById("content").value="";

    var database = firebase.database();
    saveMessage(new_content);
    document.getElementById("submit").disabled = true;
    firebase.database().goOffline();
}

var messagesRef = firebase.database().ref("messages");

function saveMessage(new_content){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    new_content:new_content
  });
}

// Retrieve new posts as they are added to our database
messagesRef.on("child_added", function(snapshot, prevChildKey) {
  var messages = snapshot.val();
  var content = "<p id='thread'>" + messages.new_content + "</p>";
  document.getElementById("main-thread").innerHTML += content;

});
