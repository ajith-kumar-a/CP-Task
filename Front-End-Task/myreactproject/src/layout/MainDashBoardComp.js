import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import NavComp from '../layout/NavComp'
import FooterComp from './FooterComp'

const MainDashBoardComp = () => {
    return (
        <div className="container">
            <h4>Main MainDashBoard</h4>

            <div className='card border-praimary'>
                <div className='card-header border-primary'> <NavComp /> </div>
                <div className='card-body border-primary '><Outlet /></div>
                <div className='card-footer border-primary'><FooterComp /></div>
            </div>

          
        </div>
    )
}

export default MainDashBoardComp
