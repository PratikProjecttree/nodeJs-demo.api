const pool = require('../utils/db');
const { getDepartments } = require('../utils/databaseQuery/departmentQuery');

const getDepartmentsWithLinks = async () => {
  const result = await pool.query(getDepartments);
  return result[0];
};

module.exports = {
  getDepartmentsWithLinks,
};