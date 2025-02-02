const employeeModel = require('../models/employee_dashboard');

exports.getEmployeeDashboard = async (req, res) => {
    try {
        const employeeDashboards = await employeeModel.findAll({
            attributes: ['id', 'Name', 'Position', 'Email'] // Updated attribute names to match the model
        });

        res.json({ employeeDashboards });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createEmployee = async (req, res) => {
    try {
        const { Name, Email, Position } = req.body;

        if (!Name || !Position || !Email) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const data = {
            Name,
            Position,
            Email
        };
        
        const newEmployee = await employeeModel.create(data);

        res.status(201).json({ message: 'Employee created successfully', employee: newEmployee });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
