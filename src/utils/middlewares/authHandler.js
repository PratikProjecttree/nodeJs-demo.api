require('dotenv').config();

const axios = require('axios');
const message = require('../constants/messages');


module.exports = async function (req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ success: false, message: message.MISSING_AUTHORIZATION_TOKEN });
  }


  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: process.env.SSO_URL + process.env.SSO_ENDPOINT_TOKEN_VALIDATE,
    headers: {
      'Authorization': token,
      'client-id': process.env.CLIENT_ID
    }
  };

  axios.request(config)
    .then((response) => {
      if (response.status === 200) {
        next(); // Authorized
      } else {
        res.status(401).json({ success: false, message: message.UNAUTHORIZED });
      }
    })
    .catch((error) => {
      res.status(403).json({ success: false, message: message.TOKEN_VERIFICATION_FAILED });
    });


};
