const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/employees.json');

function readData() {
  if (!fs.existsSync(dataPath)) fs.writeFileSync(dataPath, '[]');
  const jsonData = fs.readFileSync(dataPath);
  return JSON.parse(jsonData);
}

function writeData(data) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

module.exports = { readData, writeData };
