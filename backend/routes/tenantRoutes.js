const express = require('express');
const router = express.Router();
const tenantController = require('../controllers/tenantController');
const authMiddleware = require('../middleware/authMiddleware'); // Middleware for authentication
const roleMiddleware = require('../middleware/roleMiddleware'); // Middleware for role-based access control

// Route to create a tenant
router.post('/', authMiddleware, roleMiddleware(['admin']), tenantController.createTenant);

// Route to update a tenant
router.put('/:id', authMiddleware, roleMiddleware(['admin']), tenantController.updateTenant);

// Route to delete a tenant
router.delete('/:id', authMiddleware, roleMiddleware(['admin']), tenantController.deleteTenant);

// Route to list all tenants
router.get('/', authMiddleware, roleMiddleware(['admin']), tenantController.listTenants);

module.exports = router;
