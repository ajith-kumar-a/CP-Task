import React, { Component } from 'react'
import staticData from '../shared/constant/constantData'

export class ChangeSixImgComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
              name:staticData.Ash
        }
    }

    changeImg = (name) => {

        if(name == "ash"){
            this.setState({name:staticData.Ash})
        }else if(name == "blo"){
            this.setState({name:staticData.Blastoise})
        }else if(name == "chr"){
            this.setState({name:staticData.charizad})
        }else if(name == "gas"){
            this.setState({name:staticData.Gastly})
        }else if(name == "fi"){
            this.setState({name:staticData.firetype})
        }

    }
    chg(){

    }

    render() {
        return (
            <div>

                <img src={this.state.name} alt='name'></img>

                <br></br>
                <br></br>
                <br></br>

                <button type='button' onClick={() => this.changeImg("ash")}>ASH </button> |
                
               | <button type='button' onClick={() => this.changeImg("blo")}>Blastoise </button> |
              
               | <button type='button' onClick={() => this.changeImg("chr")}>charizad </button> |
              
               | <button type='button' onClick={() => this.changeImg("gas")}>Gastly </button> |
             
               | <button type='button' onClick={() => this.changeImg("fi")}>firetype </button>


            </div>
        )
    }
}

export default ChangeSixImgComp
