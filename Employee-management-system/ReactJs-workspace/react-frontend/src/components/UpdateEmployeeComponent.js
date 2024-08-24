import React,{useState,useEffect} from 'react'
import { useNavigate , useParams} from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';


export default function UpdateEmployeeComponent() {
      var navigate = useNavigate();

    const[firstName, setFirstName] = useState("")
    const[lastName, setLastName] = useState("")
    const[email, setEmail] = useState("")
    const{id} = useParams()

    useEffect(()=>{

      EmployeeService.getEmployeeById(id).then((response) =>{

        setFirstName(response.data.firstName);
        setLastName(response.data.lastName)
        setEmail(response.data.email) 
      })
      .catch(error => console.log(error))
    },[])

    const updateHandle = ()=>{

      const employee = {firstName,lastName,email}

      if(id)
      {
        EmployeeService.putEmployee(id,employee).then(navigate('/employee'))
      }

      else{
         
         EmployeeService.createEmployee(employee).then(navigate('/employee'))
         .catch(error => console.log(error))
      }
    }

    const handleCancle = () => {

      navigate('/employee')
    }
    

  return (
    <div className = "container mt-3">
    <div>
      <div className = "card w-50 offset-md-3">
        <h3 className = 'text-center mt-3'>Update Employee</h3>
        <div className = "card-body">
          <form>
            <div className = 'form-group my-3'>
              <label>FirstName : </label>
                <input type = "text" name = "firstName" id="firstName" className = "form-control"
                 autoComplete='off' value = {firstName} onChange = {(e) => setFirstName(e.target.value)} />
            </div>

            <div className = 'form-group my-3'>
              <label>LastName : </label>
                <input type = "text" name = "lastName" id="lastName" className = "form-control"
                autoComplete='off' value = {lastName}  onChange = {(e) => setLastName(e.target.value)}/>
            </div>

            <div className = 'form-group my-3'>
              <label>Email : </label>
                <input type = "text" name = "email" id="email" className = "form-control"
                autoComplete='off' value = {email} onChange = {(e) => setEmail(e.target.value)}/>
            </div>

            <button  className="btn btn-success float-start" onClick={updateHandle} >save</button>
            <button className= 'btn btn-danger' style = {{marginLeft: "10px"}} onClick = {handleCancle}>cancel</button>

          </form>
        </div>
      </div>
    </div>
 
  </div>
  )
}
