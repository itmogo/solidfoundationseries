//new config
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 var firebaseConfig = {
    apiKey: "AIzaSyBVIUDOEwEGxvFHfGvOQevx01FM3LR1JgQ",
    authDomain: "contactform-4b831.firebaseapp.com",
    projectId: "contactform-4b831",
    storageBucket: "contactform-4b831.appspot.com",
    messagingSenderId: "138054320649",
    appId: "1:138054320649:web:b63316ce0304628146aed8",
    measurementId: "G-VMQBJYVQWH"
  };

//   // Initialize Firebase
  firebase.initializeApp(Config);

   //reference messages collection
   var messagesRef = firebase.database().ref('messages');

  //end of new config

  //listen for form submit

  document.getElementById('contactForm').addEventListener('submit', submitForm);


  //submit form
  function submitForm(e){
      e.preventDefault();

      //get values
      var name = getInputVal('name');
      var email = getInputVal('email');
      var phone = getInputVal('phone');
      var message = getInputVal('message');

    //   console.log(name);// use to verify data pass to console
    //   console.log(email);
    //   console.log(phone);
    //   console.log(message);
    
      //save message
     saveMessage(name, email, phone, message);      
  }

//   //function to get form values
     function getInputVal(id){
      return document.getElementById(id).value;
   }

  //save message to firebase

  function saveMessage(name, email, phone, message){
      var newMessageRef = messagesRef.push();
      newMessageRef.set({
          name: name,
          email: email,
          phone: phone,
          message: message
      });
  } 