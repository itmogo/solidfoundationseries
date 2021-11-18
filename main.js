
//new config
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVIUDOEwEGxvFHfGvOQevx01FM3LR1JgQ",
  authDomain: "contactform-4b831.firebaseapp.com",
  projectId: "contactform-4b831",
  storageBucket: "contactform-4b831.appspot.com",
  messagingSenderId: "138054320649",
  appId: "1:138054320649:web:b63316ce0304628146aed8",
  measurementId: "G-VMQBJYVQWH"
};
//end of new config


// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');  
  var email = getInputVal('email');
  var telephone = getInputVal('telephone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, telephone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, telephone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,    
    email:email,
    telephone:telephone,
    message:message
  });
}