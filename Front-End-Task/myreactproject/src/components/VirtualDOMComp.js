import React, { Component } from 'react'

export class VirtualDOMComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            breakFast:[{id:1,name:"Idly"},{id:2,name:"Dosa"},{id:3,name:"Pongal"},{id:4,name:"Vada"}]
        }
        setTimeout(() => {
            let breakFastArray = this.state.breakFast;
            let itemIndex = breakFastArray.findIndex((val)=> val.id === 3);
            let item = breakFastArray.find((val) => val.id === 3);

                if(item){
                    breakFastArray.splice(itemIndex,1,{name:"Bismillabath"});
                    this.setState(breakFastArray);
                }
        }, 3000);
    }
    
    render() {
        return (
            <div>
                <h5> Virtual DOM Component</h5>
                <ul>
                    {this.state.breakFast.map((val,index) => {
                        return <li key={index}>{val.name}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default VirtualDOMComp
