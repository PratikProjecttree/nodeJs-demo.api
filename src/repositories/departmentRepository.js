const pool = require('../config/db');
const getDepartmentsWithLinks = async () => {
  const query = `
    SELECT 
        d.department_id,
        d.department_name,
        COALESCE(dcl.link, '[]'::json) AS link
    FROM 
        mds.department d
    LEFT JOIN (
        SELECT 
            dcl.department_id,
            json_agg(
                jsonb_build_object(
                    'coa_id', dcl.coa_id,
                    'coa_name', c.coa_name
                )
            ) AS link
        FROM 
            bmm.department_coa_link dcl
        JOIN 
            bmm.coa c ON c.coa_id = dcl.coa_id
        GROUP BY 
            dcl.department_id
    ) dcl ON dcl.department_id = d.department_id;
  `;

  const result = await pool.query(query);
  return result[0];
};

module.exports = {
  getDepartmentsWithLinks,
};