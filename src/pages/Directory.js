import React, { useState, useEffect } from 'react';
import employee from '../employees.json';
import Card from '../components/Card';

function Directory() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    setEmployees(employee);
  }, []);

  return (
    <div className="container">
      {employees.map(employee => (
        <Card name={employee.name} />
      ))}
    </div>
  );
}

export default Directory;
