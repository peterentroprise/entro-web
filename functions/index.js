const functions = require("firebase-functions")

exports.cloneNewUser = functions.auth.user().onCreate(user => {
  console.log(user)
})
