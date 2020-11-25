const functions = require("firebase-functions")

exports.cloneNewUser = functions.auth.user().onCreate(user => {
  db.collection("users")
    .add({
      displayName: user.displayName,
      uid: user.uid,
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id)
    })
    .catch(function (error) {
      console.error("Error adding document: ", error)
    })
})
