const express = require('express');
const asyncHandler = require('../utils/middlewares/asyncHandler');
const departmentController = require('../controllers/departmentController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Department
 *   description: Department management
 */

/**
 * @swagger
 * /departments:
 *   get:
 *     summary: Get all departments with COA links
 *     tags: [Department]
 *     responses:
 *       200:
 *         description: List of departments with associated COAs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   department_id:
 *                     type: string
 *                   department_name:
 *                     type: string
 *                   link:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         coa_id:
 *                           type: string
 *                         coa_name:
 *                           type: string
 */
router.get('/departments', asyncHandler(departmentController.getDepartments));
 
module.exports = router;
