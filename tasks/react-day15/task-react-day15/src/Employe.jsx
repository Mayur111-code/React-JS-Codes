import React, { useRef, useState } from 'react';

const App = () => {
  const empData = {
    emp1: { id: 1, name: 'John Peter', email: 'johnpeter@gmail.com', skill: 'React' },
    emp2: { id: 2, name: 'Simon Michael', email: 'simon@gmail.com', skill: 'MERN Stack' },
    emp3: { id: 3, name: 'Andrew Clark', email: 'andrew@gmail.com', skill: 'HTML' },
  };

  const selectRef = useRef(null);
  const [selectedEmp, setSelectedEmp] = useState(null);

  const handleShowDetails = () => {
    const selectedKey = selectRef.current.value;
    setSelectedEmp(empData[selectedKey]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Emp Details</h1>
      <h2>Show Any One Emp Details</h2>

      {selectedEmp ? (
        <>
          <h3>Your Name: {selectedEmp.name}</h3>
          <h3>Your Email: {selectedEmp.email}</h3>
          <h3>Your Skill: {selectedEmp.skill}</h3>
        </>
      ) : (
        <h3>Please select an employee and click "Show Details"</h3>
      )}

      <hr />

      <label htmlFor="empSelect">Choose Emp: </label>
      <select ref={selectRef} id="empSelect" style={{ padding: '10px 30px', marginRight: '10px' }}>
        <option value="">-- Select --</option>
        <option value="emp1">Emp1</option>
        <option value="emp2">Emp2</option>
        <option value="emp3">Emp3</option>
      </select>

      <button onClick={handleShowDetails()} style={{ padding: '10px 20px' }}>
        Show Details
      </button>
    </div>
  );
};

export default App;