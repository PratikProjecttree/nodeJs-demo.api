const express = require('express');
const lookupController = require('../controllers/lookupController');
const asyncHandler = require('../utils/middlewares/asyncHandler');
const departmentController = require('../controllers/departmentController');
const userController = require('../controllers/userController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Lookup
 *   description: Lookup management
 */

/**
 * @swagger
 * /lookup:
 *   get:
 *     summary: Get all lookup entries
 *     tags: [Lookup]
 *     responses:
 *       200:
 *         description: List of lookup records
 */
router.get('/lookup', asyncHandler(lookupController.getAll));

/**
 * @swagger
 * /lookup/{uuid}:
 *   get:
 *     summary: Get a lookup entry by UUID
 *     tags: [Lookup]
 *     parameters:
 *       - in: path
 *         name: uuid
 *         schema:
 *           type: string
 *         required: true
 *         description: Lookup UUID
 *     responses:
 *       200:
 *         description: A single lookup record
 *       404:
 *         description: Not found
 */
router.get('/lookup/:uuid', asyncHandler(lookupController.getById));

/**
 * @swagger
 * /lookup:
 *   post:
 *     summary: Create a new lookup entry
 *     tags: [Lookup]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - lookup_group
 *               - lookup_key
 *               - lookup_value
 *             properties:
 *               lookup_group:
 *                 type: string
 *               lookup_key:
 *                 type: string
 *               lookup_value:
 *                 type: string
 *               lookup_display:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/lookup', asyncHandler(lookupController.create));

/**
 * @swagger
 * /lookup/{uuid}:
 *   put:
 *     summary: Update a lookup entry by UUID
 *     tags: [Lookup]
 *     parameters:
 *       - in: path
 *         name: uuid
 *         schema:
 *           type: string
 *         required: true
 *         description: Lookup UUID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               lookup_group:
 *                 type: string
 *               lookup_key:
 *                 type: string
 *               lookup_value:
 *                 type: string
 *               lookup_display:
 *                 type: string
 *     responses:
 *       200:
 *         description: Updated
 *       404:
 *         description: Not found
 */
router.put('/lookup/:uuid', asyncHandler(lookupController.update));

/**
 * @swagger
 * /lookup/{uuid}:
 *   delete:
 *     summary: Delete a lookup entry by UUID
 *     tags: [Lookup]
 *     parameters:
 *       - in: path
 *         name: uuid
 *         schema:
 *           type: string
 *         required: true
 *         description: Lookup UUID
 *     responses:
 *       204:
 *         description: Deleted
 *       404:
 *         description: Not found
 */
router.delete('/lookup/:uuid', asyncHandler(lookupController.remove));

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

/**
 * @swagger
 * tags:
 *   name: User
 *   description: User and UserRole management
 */

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user with multiple roles
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - roleIds
 *             properties:
 *               name:
 *                 type: string
 *                 description: User name
 *               roleIds:
 *                 type: array
 *                 items:
 *                   type: integer
 *                 description: List of role IDs to assign to the user
 *     responses:
 *       201:
 *         description: User created successfully with roles
 *       400:
 *         description: Bad request, invalid input
 */
router.post('/users', asyncHandler(userController.createUserWithRoles));


/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update user name and roles
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - roleIds
 *             properties:
 *               name:
 *                 type: string
 *               roleIds:
 *                 type: array
 *                 items:
 *                   type: integer
 *     responses:
 *       200:
 *         description: User updated successfully with roles
 *       400:
 *         description: Invalid input
 *       404:
 *         description: User not found
 */
router.put('/users/:id', asyncHandler(userController.updateUserWithRoles));

module.exports = router;
