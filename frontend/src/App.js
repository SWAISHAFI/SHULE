// src/App.jsx
import React, { useEffect, useState } from "react";
import { getEmployees } from "./services/employees";

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getEmployees();
      setEmployees(data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Employee List</h1>
      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <ul>
          {employees.map((emp) => (
            <li key={emp.id}>
              {emp.name} - {emp.role}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
// src/services/users/userservices.js
