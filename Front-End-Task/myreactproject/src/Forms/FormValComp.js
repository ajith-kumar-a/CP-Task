import { Button } from '@mui/material';
import React, { useState } from 'react'

const FormValComp = () => {

    const [user,setUser]=useState({
        userName:"",
        userPassword:"",
        term:false
    })

    const inputChangeHandler=(event)=>{
        // console.log(event.target.type)
        // console.log(event.target.name)
        // console.log(event.target.value)
        const {type,name,value} = event.target;
        setUser({...user,[name]:value})
    }
    const checkData=(event)=>{
        event.preventDefault()
        if(user.userName.trim()===""){
            window.alert("user name is required")
            return false
        }
        if(!user.userName.trim().match('^[a-zA-Z ]{3,20}$')){
            window.alert("username must contain only character min-3 max-20")
            return false
        }
        if(user.term===false){
            window.alert(" please click the checkbox")
            return false
        }
        window.alert(JSON.stringify(user))
    }

    return (
        <div>
            <h1>hii friends </h1>
            <form onSubmit={checkData}>
                <label>enter user name : </label>
                <input type='text' name='userName' onChange={inputChangeHandler} value={user.userName} /> <br />
                <label>enter user password : </label>
                <input type='text' name='userPassword' onChange={inputChangeHandler} value={user.userPassword} /> <br />
                <label>
                <input type='checkbox' name='term' onChange={inputChangeHandler} value={user.term} />
                i accept term and condition</label><br />
                <Button variant='outlined'>submit</Button>
            </form>
        </div>
    )
}

export default FormValComp