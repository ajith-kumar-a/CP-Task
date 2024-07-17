import React, { Component } from "react";
import Gastly from "../shared/Images/Gastly.png"
import staticData from "../shared/constant/constantData";

    class MyImageComp extends Component {

        constructor(props){
            super(props)

        }

        render() {
            return (
                <div>
                    <h4>This is MyImaages Components</h4>
                    <img src={Gastly} alt='Gastly' height="200px" width="200px" />
                    <img src={staticData.Blastoise} alt='Blastoise' height="200px" width="200px" />
                    <br/>
                    <hr />
                    <audio src={staticData.ado} controls></audio>

                    <br/>
                    <hr />
                    <video src={staticData.vdo} controls></video>
                </div>
            )
        }

    }

export default MyImageComp