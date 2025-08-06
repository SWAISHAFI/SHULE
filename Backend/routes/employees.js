const express = require('express');
const router = express.Router();
const { readData, writeData } = require('../utils/fileHelper');
const { v4: uuidv4 } = require('uuid');

// Helper: Basic validation
function validateEmployee(data) {
  return data.name && data.position;
}

// Create Employee with validation
router.post('/', (req, res, next) => {
  if (!validateEmployee(req.body)) {
    return res.status(400).json({ error: 'Name and position are required.' });
  }
  try {
    const employees = readData();
    const newEmployee = { id: uuidv4(), ...req.body, logbook: [], leaveRequests: [] };
    employees.push(newEmployee);
    writeData(employees);
    res.json(newEmployee);
  } catch (err) {
    next(err);
  }
});

// Get All Employees
router.get('/', (req, res, next) => {
  try {
    const employees = readData();
    res.json(employees);
  } catch (err) {
    next(err);
  }
});

// Update Employee
router.put('/:id', (req, res, next) => {
  if (!validateEmployee(req.body)) {
    return res.status(400).json({ error: 'Name and position are required.' });
  }
  try {
    const employees = readData();
    const idx = employees.findIndex(e => e.id === req.params.id);
    if (idx === -1) return res.status(404).send('Employee not found');
    employees[idx] = { ...employees[idx], ...req.body };
    writeData(employees);
    res.json(employees[idx]);
  } catch (err) {
    next(err);
  }
});

// Delete Employee
router.delete('/:id', (req, res, next) => {
  try {
    const employees = readData();
    const idx = employees.findIndex(e => e.id === req.params.id);
    if (idx === -1) return res.status(404).send('Employee not found');
    const removed = employees.splice(idx, 1);
    writeData(employees);
    res.json(removed[0]);
  } catch (err) {
    next(err);
  }
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
