import React, { Component } from 'react'
import EmployeeService from '../service/EmployeeService'
import {Link} from 'react-router-dom' 

export default class ListEmployeeComponent extends Component {

   constructor()
   {
      super()

      this.state = {
        employee : []
      }
   }

   

   componentDidMount()
   {
     EmployeeService.getEmployees().then( res =>
     {
      this.setState({employee:res.data})
     }
     )
   }

   handleDelete = (id) => 
   {

   

    EmployeeService.deleteEmployee(id).then(() =>
      {
        EmployeeService.getEmployees().then(res => {this.setState({employee:res.data})})
      })
    .catch(error => console.log(error))
      


   }


  render() {

    return (
      <div className = 'container mt-2'>
         <h2 className='text-center'>Employee Details</h2>
         <div className = 'row mt-3'>
          <Link to = "/add-employee" className = "btn btn-outline-primary mb-4">Add Employee</Link>
             <table className = 'table table-stripped table-bordered' >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{
                    this.state.employee.map( 
                    emp => 
                     <tr key = {emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.firstName}</td>
                        <td>{emp.lastName}</td>
                        <td>{emp.email}</td>
                        <td>
                          <Link to = {`/update-employee/${emp.id}`} className = "btn btn-info">Update</Link>
                          <button className = "btn btn-danger" style = {{marginLeft : "20px"}} onClick = {()=> this.handleDelete(emp.id)}>delete</button>
                        </td>
                     </tr> )
                }
                </tbody>
             </table>
            
            
        </div> 
        
      </div>
    )
  }
}
