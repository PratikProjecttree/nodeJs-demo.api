const departmentService = require('../services/departmentService');
const response = require('../utils/response');
const message = require('../utils/constants/messages');  

const getDepartments = async (req, res) => {
  const data = await departmentService.getAllDepartments();
 
  response.success(res, data, message.RECORDS_FETCHED);
};

module.exports = {
  getDepartments,
};