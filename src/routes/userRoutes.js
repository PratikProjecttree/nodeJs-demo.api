const express = require('express');
const asyncHandler = require('../utils/middlewares/asyncHandler');
const userController = require('../controllers/userController');

const router = express.Router();

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
