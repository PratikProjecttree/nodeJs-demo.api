const response = require('../response');

module.exports = (err, req, res, next) => {
  console.error('Error:', err); // Optional logging
  response.error(res, err.message || 'Unexpected error', err.status || 500);
};
