import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProctedRouting = ({Component}) => {

    const nav = useNavigate();
    useEffect(() => {
        if(!sessionStorage.getItem("user")){
            nav("/");
        }

    },[])
    return (
        <div>
            <Component />
        </div>
    )
}

export default ProctedRouting
