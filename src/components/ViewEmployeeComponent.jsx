import React, { Component } from 'react'
import EmployeeService from "../service/EmployeeService";


 class ViewEmployeeComponent extends Component {
     constructor(props) {
       
         super(props)
     
         this.state = {
            id:this.props.match.params.id,
            employee:{}
         }
     }
     componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then((res)=>{
            this.setState({employee:res.data});
        })

        
     }
    render() {
        return (
            <div>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="test-center">Empoyee Details</h3>
                    <div className="card-body">
                        <div className="row" style={{fontSize:20}}>
                            <label>First Name:      {this.state.employee.firstName}</label>
                            <label>Last Name:{this.state.employee.lastName}</label>
                            <label>Email:{this.state.employee.emailId}</label>
                            
                        </div>

                    </div>
                 
                </div>
            </div>
        )
    }
}
export  default ViewEmployeeComponent;
