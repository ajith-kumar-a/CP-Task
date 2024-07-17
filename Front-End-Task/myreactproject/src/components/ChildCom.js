import React from 'react'


const ChildCom = (props) => {
    return (
        <div>
            <h4>This is Child Component</h4>
            <p> Employee Name Is : {props.name}</p>
            <p> Employee Salary Is : {props.salary}</p>
            <button type='button' onClick={() => props.changeData()}>Change Data</button>
        </div>
    )
}

export default ChildCom
