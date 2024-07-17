import React from 'react'
import staticData from '../shared/constant/constantData'

const PageNotFound = () => {
    return (
        <div>
            <h3 style={{color:"red",textAlign:"center"}}>Page Not Found</h3>
            <h3 style={{color:"green",textAlign:"center"}}>try again until sucess</h3>
            <img src={staticData.pnf} alt="Error" ></img>
        </div>
    )
}

export default PageNotFound
