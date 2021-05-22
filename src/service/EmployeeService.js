import axios from 'axios';

const EMPOYEE_API_BASE_URL="http://localhost:8080/api/v1/employees";
const ADD_EMPLOYEE="http://localhost:8080/api/v1/addemployee"
const GET_EMPLOYEE_BY_ID="http://localhost:8080/api/v1/getEmployee/";
const UPDATE_EMPLOYEE="http://localhost:8080/api/v1/updateEmployee/";
const DELETE_EMPLOYEE="http://localhost:8080/api/v1/deleteEmployee/"
class EmployeeService{

    getEmployees(){
        return axios.get(EMPOYEE_API_BASE_URL);
    }
    addEmployee(employee){
        return axios.post(ADD_EMPLOYEE,employee);
    }
    getEmployeeById(empId){
        return axios.get(GET_EMPLOYEE_BY_ID+empId);
    }
    updateEmployee(employeeId,employee){
        return axios.put(UPDATE_EMPLOYEE+employeeId,employee);
    }
    deleteEmployee(employeeId){
        return axios.delete(DELETE_EMPLOYEE+employeeId);
    }

}
export default new EmployeeService();