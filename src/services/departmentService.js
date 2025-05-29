const departmentRepository = require('../repositories/departmentRepository');

const getAllDepartments = async () => {
  const data = await departmentRepository.getDepartmentsWithLinks();
   
  return data
};

module.exports = {
  getAllDepartments,
};