import React from 'react'
import { Link } from 'react-router-dom'

const NavComp = () => {
    return (
        <div>
           <Link to="mySlider" className='btn btn-primary btn-sm'>MySlider</Link>{" "}
           <Link to="myImg" className='btn btn-primary btn-sm'>MyImg</Link>{" "}
           <Link to="parent" className='btn btn-primary btn-sm'>parent</Link>{" "}
           <Link to="reactHook" className='btn btn-primary btn-sm'>HOOK</Link>{" "}
        </div>
    )
}

export default NavComp
