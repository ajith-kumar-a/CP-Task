import React, { Component, Fragment } from 'react'
import ChildCom from './ChildCom'

export class ParentComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {

            empName:"Ajith",
            empSalary : 150000
             
        }
    }
    
    changeVal = () =>{
        this.setState({empName:"Ajith Kumar"})
        this.setState({empSalary:5400000})
    }

    render() {
        return (
            <Fragment>
                <h3>This is Parent Components</h3>
                    <p> Employee Name is : <strong> {this.state.empName} </strong></p>
                    <p> Employee Salary is : {this.state.empSalary} </p>

                    <button type='button' onClick={()=>this.changeVal()}> change </button>
                <hr/> 

               
                <ChildCom name={this.state.empName} salary={this.state.empSalary} changeData={this.changeVal}></ChildCom>
            </Fragment>
        )
    }
}

export default ParentComp
