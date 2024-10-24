const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roleController');
const authMiddleware = require('../middleware/authMiddleware'); // Middleware for authentication
const roleMiddleware = require('../middleware/roleMiddleware'); // Middleware for role-based access control

// Route to create a role
router.post('/', authMiddleware, roleMiddleware(['admin']), roleController.createRole);

// Route to update a role
router.put('/:id', authMiddleware, roleMiddleware(['admin']), roleController.updateRole);

// Route to delete a role
router.delete('/:id', authMiddleware, roleMiddleware(['admin']), roleController.deleteRole);

// Route to list all roles
router.get('/', authMiddleware, roleMiddleware(['admin']), roleController.listRoles);

module.exports = router;
