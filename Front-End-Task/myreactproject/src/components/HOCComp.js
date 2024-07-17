import React, { Component } from 'react'

const HOCComp = (WaraperComp) => {

    class HOC extends Component{

        constructor(props) {
            super(props)
        
            this.state = {
                 count : 0
            }
        }
    
      
        counerIns = () =>{
            this.setState({count:this.state.count+1})
        }
        
        render(){
            return <WaraperComp count={this.state.count} countIns ={this.counerIns}></WaraperComp>
        }

    }

    return HOC
}

export default HOCComp
