const express = require('express');
const { createEmployee, getEmployeeDashboard } = require('../controller/dashboardController');

const router = express.Router();


router.get('/employee_dashboards', getEmployeeDashboard);
router.post('/employee_dashboards', createEmployee);

module.exports = router;
