import React, { Component } from 'react'
import HOCComp from '../components/HOCComp'

export class HoverCounterComp extends Component {

    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count :0
    //     }
    // }

    // counerIns = () =>{
    //     this.setState({count:this.state.count+1})
    // }
    

    render() {
        return (
            <div>
                {/* <h5>Count : {this.state.count}</h5>
                <h6 onMouseOver={()=>this.counerIns()}>Hover Me to Increase Count</h6>                */}

                <h5>Count : {this.props.count}</h5>

                <h6 onMouseOver={()=>this.props.countIns()}>Hover Me to Increase Count</h6>                
            </div>
        )
    }
}

export default HOCComp(HoverCounterComp)
