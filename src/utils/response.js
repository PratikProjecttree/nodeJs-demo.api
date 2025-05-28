module.exports = {
  success(res, data, message = 'Success') {
    return res.status(200).json({
      success: true,
      data,
      message,
    });
  },

  error(res, message = 'Error', status = 500) {
    return res.status(status).json({
      success: false,
      data: null,
      message,
    });
  }
};
