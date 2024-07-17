import { Button } from '@mui/material';
import React, { useState } from 'react'

const UseStateHookComp = () => {

    const[count,setCount] = useState(0);
    const[name,nameSet] = useState("Ajith");

    const increaseCount = () => {
        setCount(count+1);
    }


    return (
        <div>
            <h4>This is UseStateHookComp Hooks</h4>
            <p>Count value is : {count}</p>

            <Button variant='contained' onClick={()=> increaseCount()}>Count++</Button>{" "}
            <Button variant='contained' onClick={()=> setCount(count+1)}>Count++</Button>{" "}
            <hr />
            <h6>My Name is : {name}</h6>
            <Button variant='contained' onClick={() => nameSet("Ajith Kumar")}>FName</Button>

        </div>
    )
}

export default UseStateHookComp
