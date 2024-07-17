import React, { Component } from "react";

class MethodEvent extends Component{

    greeting = () => {
        window.alert("Good AfterNoon my deer Friends");
    }

    welcome = (...std) =>{
        window.alert(`welcome you ${std}`)
    }

    render(){
        return <div>
            <h3>This is  MethodEvent Component</h3>
            <button type="button" onClick={this.greeting}>greeting</button> | 
             | <button type="button" onClick={() => this.welcome("Ajith")}>Welcome</button>

             <h4 onMouseOver={()=>this.welcome("Kumar")}> Hover on Me I Will Welcome You  </h4>

             <h5 onMouseEnter={() => this.greeting()}>greeting</h5>
        </div>
    }
}

export default MethodEvent;