import React from 'react'
import staticData from '../shared/constant/constantData';
import'../css/externalCss.css';
import myModulecss from '../css/myModulecss.module.css';

const MyCssComp = () => {

    const txtObj = {
        color :true? "green":"red",
        fontSize:false?"20px":"30px",
        backgroundColor:true?"pink":"lightgray"
    }

    return (
        <>
            <h4 style={{color:"blue",backgroundColor:"yellow"}}>This is MyCss Component</h4>
            <p style={txtObj}> hello al my dear frd , i hope you all are doing well</p>
            <img className='imgProp' src={staticData.Blastoise} alt='Blastoise'></img> <br></br>
            <img className={myModulecss.mod} src={staticData.CharizardGif} ></img>
        </>
    )
}

export default MyCssComp
