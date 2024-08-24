import axios from 'axios'

const key ="http://localhost:9191/api/v1/employee"

class EmployeeService  {

    getEmployees()
    {
       return  axios.get(key)
    }

    createEmployee(employee)
    {
        return axios.post(key,employee)
    }

    getEmployeeById(id)
    {
        return axios.get(key+'/'+id);
    }

    putEmployee(id,employee)
    {
        return axios.put(key+'/'+id,employee)
    }

    deleteEmployee(id)
    {
        return axios.delete(key + '/' + id)
    }
}

export default new EmployeeService()
