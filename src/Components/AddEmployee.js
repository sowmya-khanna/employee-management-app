import React, { useState } from "react";

let AddEmployee = () => {

  const [name, updateName] = useState('');
  const [id, updateId] = useState('');
  const [role, updateRole] = useState('');
  const [department, updateDepartment] = useState('');

  const add = () => {
    fetch("https://61e17be563f8fc0017618c60.mockapi.io/employee",{
      method:"POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify({
        name,
        id,
        role,
        department
      })
    })
  }

  const updateEmp = () => {
    fetch("https://61e17be563f8fc0017618c60.mockapi.io/employee/"+id,{
      method:"PUT",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify({
        name,
        id,
        role,
        department
      })
    })
  }

  return(
      <div className="container">
        <input className="form-control" 
          onChange={(e) => updateName(e.target.value)}
        placeholder="Enter Employee Name"/>
        <input className="form-control" 
        onChange={(e) => updateId(e.target.value)}placeholder="Enter Employee Id"/>
        <input className="form-control" 
        onChange={(e) => updateRole(e.target.value)}
        placeholder="Enter Employee Role"/>
        <input className="form-control" 
        onChange={(e) => updateDepartment(e.target.value)}
        placeholder="Enter Employee Department"/>
        
        
        <button className="primary" onClick={ (e) => add(e) }>Save</button>

        <button className="primary" onClick={ (e) => updateEmp(e) }>Update</button>
      </div>
  );
}

export default AddEmployee;