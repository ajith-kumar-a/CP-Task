import React, { Component } from "react";

class ClassComponent extends Component {

    constructor(){
        super();
        this.state = {
            company : "Changepond",
            salary : 20000  
        }
    }

    render() {
        // desturcturing of state and props 
        const {company,salary} = this.state;
        const {myName,post} = this.props;

        return <div>
            <h5>This is Class Components</h5>
            {/* accessing props data */}
            {/* <p>My Another Name is : {this.props.myName}, and i am : {this.props.post} Also</p> */}
            <p>My Another Name is : {myName}, and i am : {post} Also</p>
            
            {/* accessing state data */}
            {/* <p> Company Name is : {this.state.company} , and my salary is : {this.state.salary} </p> */}
            <p> Company Name is : {company} , and my salary is : {salary} </p>
        </div>
    }

}

export default ClassComponent;