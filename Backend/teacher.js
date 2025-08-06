const express = require('express');
const router = express.Router();

let teachers = [
    { id: "1", name: "Mr. John", subject: "Math" },
    { id: "2", name: "Ms. Mary", subject: "Science" },
];

// Get all teachers
router.get('/', (req, res) => {
    res.json(teachers);
});

// Add a new teacher
router.post('/', (req, res) => {
    const { name, subject } = req.body;
    const newTeacher = { id: Date.now().toString(), name, subject };
    teachers.push(newTeacher);
    res.status(201).json(newTeacher);
});

module.exports = router;
