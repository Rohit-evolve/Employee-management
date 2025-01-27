package com.emp.www.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.HttpStatus;


import com.emp.www.exception.ResourceNotFoundException;
import com.emp.www.model.Employee;
import com.emp.www.repository.EmployeRepository;

@Service
public class EmployeService 
{
	@Autowired
	EmployeRepository repo;
	
	public List<Employee> getAllemployees()
	{
		return repo.findAll();
	}
	
	public Employee postAllemployees(Employee emp)
	{
		return repo.save(emp);
	}
	
	public Employee findEmployee(int id)
	{
		return repo.findById(id).orElseThrow(() ->new ResourceNotFoundException("Id wrong"));
		
	
	}
	public ResponseEntity<Employee> putEmployee(Employee emp, int id)
	{
	  Employee em = repo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not found"));
	  em.setFirstName(emp.getFirstName());
	  em.setLastName(emp.getLastName());
	  em.setEmail(emp.getEmail()); 
	  
	  repo.save(em);
	  
	  return ResponseEntity.ok(em);
	 
	}
	
	public ResponseEntity<HttpStatus> deleteEmployee(int id)
	{
		Employee em = repo.findById(id).orElseThrow(()-> new ResourceNotFoundException("data not found"));
		
		repo.delete(em);
		
		return  new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	

}
