require('typeface-muli')
const LogRocket = require("logrocket")

exports.onClientEntry = () => {
    LogRocket.init('xjwz8l/entro-web');
  }