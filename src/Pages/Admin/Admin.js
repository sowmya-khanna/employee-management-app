import React, { useEffect, useState } from "react";
import Navigation from '../../Components/Navigation';
import MaterialTable from "material-table";
import { Modal, Button } from 'react-bootstrap';
import './Admin.css';
import {useNavigate} from 'react-router-dom';
import AddEmployee from "../../Components/AddEmployee";

let Admin = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    refresh();
  }
  const handleShow = () => setShow(true);

  const [empData, setEmpData] = useState([]);
  const navigate = useNavigate();

  const refresh = () => {
    window.location.reload();
  }

  useEffect(()=> {
    fetch("https://61e17be563f8fc0017618c60.mockapi.io/employee", {
      method: "GET",
    }).then(
      res => res.json()
    ).then(
      res => setEmpData(res)
    ).catch(
      err => {
        console.log(err);
      }
    )
  }, []);

  const deleteEmp = (id) => {
    fetch("https://61e17be563f8fc0017618c60.mockapi.io/employee/"+id, {
      method: "DELETE"
    }).then(()=>{
      refresh();
    }).catch(err=>console.log(err))
  };

  return(
      <div className="container">
        <Navigation />
        <div className="row">
          <div className="col-sm-12">
              <button onClick={handleShow}>Add Employee</button>
              
              <MaterialTable
                title="Multiple Actions Preview"
                columns={[
                  { title: 'Name', field: 'name' },
                  { title: 'Role', field: 'role'},
                  { title: 'Department', field: 'department'},
                  { title: 'Employee Id', field: 'id' }
                ]}
                data={empData}        
                actions={[
                  {
                    icon: 'save',
                    tooltip: 'Save User',
                    onClick: (event, rowData) => {navigate('/addEmployee', {rowData: rowData})}
                  },
                  {
                    icon: 'delete',
                    tooltip: 'Delete User',
                    onClick: (event, rowData) => {deleteEmp(rowData.id)}
                  }
                ]}
              />

          </div>
        </div>



        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add / Update Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body><AddEmployee/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


      </div>
  );
}

export default Admin;