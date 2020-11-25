const functions = require("firebase-functions")
const admin = require("firebase-admin")
admin.initializeApp()

exports.saveNewUser = functions.auth.user().onCreate(async user => {
  return admin
    .firestore()
    .collection("users")
    .doc(user.uid)
    .set(JSON.parse(JSON.stringify(user)))
})
