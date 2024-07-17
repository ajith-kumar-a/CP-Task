import React, { Component } from 'react'
import HOCComp from '../components/HOCComp'
import { Button } from '@mui/material'

export class ClickCounterComp extends Component {

    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count : 0
    //     }
    // }

  
    // counerIns = () =>{
    //     this.setState({count:this.state.count+1})
    // }
    

    render() {
        return (
            <div>
                {/* <h5>Count : {this.state.count}</h5>

                <button onClick={() => this.counerIns()}>Count ++</button> */}
                
                <h5>Count : {this.props.count}</h5>

                {/* <button type='button' className='btn btn-primary' onClick={() => this.props.countIns()}>Count ++</button> */}
                <Button variant="outlined" onClick={() => this.props.countIns()}>Count ++</Button>
            </div>
        )
    }
}

export default HOCComp(ClickCounterComp)
