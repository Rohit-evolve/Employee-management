package com.emp.www.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.emp.www.model.Employee;

@Repository
public interface EmployeRepository extends JpaRepository<Employee, Integer>
{

}
