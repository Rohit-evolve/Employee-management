import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../service/EmployeeService';

export default function CreateEmployee() {

  var navigate = useNavigate();

  const[employee, setEmployee] = useState({
    firstName:"",
    lastName: "",
    email : ""
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setEmployee({...employee,[name]:value})
  }

  const saveChanges = (e) => {
    e.preventDefault()

    console.log("employee =>" +  JSON.stringify(employee))

    EmployeeService.createEmployee(employee).then(navigate('/employee'))
  }

  const cancelHandler = (e) =>{
   navigate("/")

  }
  return (
    <div className = "container mt-3">
      <div>
        <div className = "card w-50 offset-md-3">
          <h3 className = 'text-center mt-3'>AddEmployee</h3>
          <div className = "card-body">
            <form>
              <div className = 'form-group my-3'>
                <label>FirstName : </label>
                  <input type = "text" name = "firstName" id="firstName" className = "form-control"
                   autoComplete='off' value={employee.firstName} onChange = {handleChange}/>
              </div>

              <div className = 'form-group my-3'>
                <label>LastName : </label>
                  <input type = "text" name = "lastName" id="lastName" className = "form-control"
                  autoComplete='off' value = {employee.lastName} onChange = {handleChange}/>
              </div>

              <div className = 'form-group my-3'>
                <label>Email : </label>
                  <input type = "text" name = "email" id="email" className = "form-control"
                  autoComplete='off' value = {employee.email} onChange = {handleChange}/>
              </div>

              <button  className="btn btn-success float-start" onClick = {saveChanges}>save</button>
              <button className= 'btn btn-danger float-end' onClick = {cancelHandler}>cancel</button>

            </form>
          </div>
        </div>
      </div>
   
    </div>
  )
}
