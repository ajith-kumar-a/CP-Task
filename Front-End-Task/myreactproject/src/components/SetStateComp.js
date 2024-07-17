import React, { Component } from "react";

class SetStateComp extends Component{

    constructor(props){
        super(props)

        this.state ={
            count : 0,
            name : "Ajith"
        }
    }

    countPlus = () =>{
        this.setState({count:this.state.count+1})
    }

    countMin = () =>{
        this.setState({count:this.state.count-1})
    }

    full = () =>{
        this.setState({name:this.state.name+" Kumar"})
    }

    render(){
        return (
            <div>
                <h3>This is SetStateComponent Component</h3>
                <p> Count Value is : {this.state.count}</p>
                <p> Name is : {this.state.name}</p>

                <button type="button" onClick={() => this.full()}>full Name</button> |
                | <button type="button" onClick={() => this.countPlus()}>Count++</button> |
                | <button type="button" onClick={() => this.countMin()}>Count--</button>
            </div>
        )
    }
}

export default SetStateComp;