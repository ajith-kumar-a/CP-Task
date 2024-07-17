import React, { Component } from "react";

class ConditionRenComp extends Component {

    constructor() {
        super()
        this.state = {
            isCond: true
        }
    }

    render() {

        // 1. use of if-else
        
        // let msg = "";

        // if (!!!this.state.isCond) {

        //     msg = "User Login sucessFully"
        // }
        // else {
        //     msg = "User Login UnsucessFully"
        // }

        // return <h2>{msg}</h2>

        // use of Ternary
        // return this.state.isCond ? "User Login sucessFully" : "User Login UnsucessFully"
        
        //use of short circuit
        return this.state.isCond && <h4> Admin Login Sucessfully </h4>
    }

}

export default ConditionRenComp;