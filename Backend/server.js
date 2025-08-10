// ===== Import required packages =====
const express = require("express");
const cors = require("cors");

const app = express();

// ===== Middleware =====
app.use(cors()); // Allow requests from frontend
app.use(express.json()); // Parse incoming JSON requests

// ===== Temporary "Database" (In-memory) =====
let employees = [
  { id: 1, name: "John Doe", role: "Teacher" },
  { id: 2, name: "Jane Smith", role: "Accountant" },
];

// ===== Routes =====

// Get all employees
app.get("/api/employees", (req, res) => {
  res.json(employees);
});

// Get employee by ID
app.get("/api/employees/:id", (req, res) => {
  const employee = employees.find((emp) => emp.id == req.params.id);
  if (!employee) {
    return res.status(404).json({ message: "Employee not found" });
  }
  res.json(employee);
});

// Create new employee
app.post("/api/employees", (req, res) => {
  const newEmployee = {
    id: employees.length + 1,
    name: req.body.name,
    role: req.body.role,
  };
  employees.push(newEmployee);
  res.status(201).json(newEmployee);
});

// Update employee
app.put("/api/employees/:id", (req, res) => {
  const employee = employees.find((emp) => emp.id == req.params.id);
  if (!employee) {
    return res.status(404).json({ message: "Employee not found" });
  }
  employee.name = req.body.name || employee.name;
  employee.role = req.body.role || employee.role;
  res.json(employee);
});

// Delete employee
app.delete("/api/employees/:id", (req, res) => {
  employees = employees.filter((emp) => emp.id != req.params.id);
  res.json({ message: "Employee deleted successfully" });
});

// ===== Start Server =====
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
