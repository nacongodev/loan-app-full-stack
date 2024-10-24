const mongoose = require('mongoose');

// Define the schema for roles
const roleSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true }, // Role name
    permissions: [String] // List of permissions
});

// Create the Role model from the schema
const Role = mongoose.model('Role', roleSchema);

module.exports = Role;
