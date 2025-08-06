const express = require('express');
const router = express.Router();
const { readData, writeData } = require('../utils/fileHelper');
const { v4: uuidv4 } = require('uuid');

// Create Employee
router.post('/', (req, res) => {
  const employees = readData();
  const newEmployee = { id: uuidv4(), ...req.body, logbook: [], leaveRequests: [] };
  employees.push(newEmployee);
  writeData(employees);
  res.json(newEmployee);
});

// Get All Employees
router.get('/', (req, res) => {
  const employees = readData();
  res.json(employees);
});

// Add Logbook Entry
router.post('/:id/logbook', (req, res) => {
  const employees = readData();
  const employee = employees.find(e => e.id === req.params.id);
  if (!employee) return res.status(404).send('Employee not found');
  employee.logbook.push({ date: new Date(), ...req.body });
  writeData(employees);
  res.json(employee);
});

// Submit Leave Request
router.post('/:id/leave', (req, res) => {
  const employees = readData();
  const employee = employees.find(e => e.id === req.params.id);
  if (!employee) return res.status(404).send('Employee not found');
  employee.leaveRequests.push({ ...req.body, status: 'Pending' });
  writeData(employees);
  res.json(employee);
});

module.exports = router;
