const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    class: String,
    rollNumber: String
});

module.exports = mongoose.model('Student', studentSchema);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});