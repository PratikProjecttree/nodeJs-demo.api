const express = require('express');
const lookupController = require('../controllers/lookupController');
const asyncHandler = require('../utils/middlewares/asyncHandler');

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

module.exports = router;
