import { React } from "react";
import { Component } from "react";

class MyDetails extends Component{

    constructor(){
        super();
        this.state = {
            gender : "male",
            status : "single",
            address : "Chenenai"
        }
    }

    render() {
        
        const {gender,status,address} = this.state;
        const {fname,lname,email,contact} = this.props;

        return <div>

        <h5>This is Task</h5>
       
        <p>My Another Name is : {fname} {lname} </p>
        <p>Mail Id : {email}</p>
        <p>Contact : {contact}</p>

        <p>Gender : {gender}</p>
        <p>Status : {status}</p>
        <p>Address : {address}</p>
        
    </div>
    }
}

export default MyDetails;