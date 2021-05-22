import React, { Component } from 'react'
import EmployeeService from '../service/EmployeeService'

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             employees:[]
        }
        this.addEmployee=this.addEmployee.bind(this);
        this.updateEmployee=this.updateEmployee.bind(this);
        this.deleteEmployee=this.deleteEmployee.bind(this);
        this.viewEmployee=this.viewEmployee.bind(this);
    }
    componentDidMount(){
        EmployeeService.getEmployees().then((res)=>{
            this.setState({employees:res.data});
        });         
        
    }
    addEmployee(){
      
        this.props.history.push('/add-employee/-1');
    }
    updateEmployee(id){
        this.props.history.push(`/add-employee/${id}`); 
    }
    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then((res)=>{
            this.setState({employees:this.state.employees.filter(e=>e.id!==id)})
        });
    }
    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Employee List</h2>
                <div className="row">
                    <div className="column">
                        <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                    </div>
                </div>
                <div className="row">
                        <table className="table table-stripted table-bordered">
                            <thead>
                                <tr>
                                    <th>Employee First Name</th>
                                    <th>Employee Last Name</th>
                                    <th>Emaployee Email Id</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        emp=>
                                        <tr key={emp.id}>
                                            <td>{emp.firstName}</td>
                                            <td>{emp.lastName}</td>
                                            <td>{emp.emailId}</td>
                                            <td><button className="btn btn-info" onClick={()=>this.updateEmployee(emp.id)}>Edit</button>
                                            <button className="btn btn-danger" style={{marginLeft:"10px"}} onClick={()=>this.deleteEmployee(emp.id)}>Delete</button>
                                            <button className="btn btn-info" style={{marginLeft:"10px"}} onClick={()=>this.viewEmployee(emp.id)}>View</button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                </div>
            </div>
        )
    }
}

export default ListEmployeeComponent
