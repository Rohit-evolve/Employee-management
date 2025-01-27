package com.emp.www.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


import com.emp.www.model.Employee;
import com.emp.www.service.EmployeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class EmployeController
{
  @Autowired	
  EmployeService ser;
  
  @GetMapping("/employee")
  public List<Employee> getAllemployees()
  {
	  return ser.getAllemployees();
  }
  
  @PostMapping("/employee")
  public Employee postAllemployees(@RequestBody Employee emp)
  {
	  return ser.postAllemployees(emp);
  }
  
  @GetMapping("/employee/{id}")
  public Employee findEmployee(@PathVariable int id)
  {
	  return ser.findEmployee(id);
  }
  
  @PutMapping("/employee/{id}")
  public ResponseEntity<Employee> putEmployee( @PathVariable int id , @RequestBody Employee emp)
  {
	  return ser.putEmployee(emp,id);
  }
  
  @DeleteMapping("/employee/{id}")
  public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable int id )
  {
	  return ser.deleteEmployee(id);
  }

}
