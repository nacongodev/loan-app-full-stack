const mongoose = require('mongoose');

// Define the schema for tenants
const tenantSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true }, // Tenant name
    config: Object // Configuration specific to the tenant
});

// Create the Tenant model from the schema
const Tenant = mongoose.model('Tenant', tenantSchema);

module.exports = Tenant;
