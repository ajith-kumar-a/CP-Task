import React from 'react'
import UseStateHookComp from './UseStateHookComp'
import { Link, Outlet } from 'react-router-dom'

const ReactHooks = () => {
    return (
        <div>
            <h4>This is React Hooks</h4>

            <div className='card border-secondary'>
                <div className='card-header border-primary'>
                        <Link to="usestate" className='btn btn-primary'>USE STATE</Link>{" "}
                        <Link to="useeffect" className='btn btn-primary'>USE EFFECT</Link>{" "}
                     </div>
                <div className='card-body border-primary'><Outlet></Outlet></div>
            </div>

            
        </div>
    )
}

export default ReactHooks
