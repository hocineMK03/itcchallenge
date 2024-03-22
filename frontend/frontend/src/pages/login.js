import React, { useState } from 'react'
const authapi=require('../services/authAPI')
const Login = () => {
    const [user,setuser]=useState({
        name:'',
        password:''
    })

    
    const handleInputChange=(e)=>{
        const {name,value}=e.target
        console.log(name,value)
        setuser((prevdata)=>({
            ...prevdata,
            [name]:value,
        }))
    }
    const handleLogin=()=>{
        const result=authapi.login(user)
        if(result){
            console.log('login success')
        }
        else{
            console.log('login failed')
        }


    }
  return (
    <div>
      <input type="text" placeholder="name" name='name' value={user.name} onChange={handleInputChange}/>
      <input type="password" placeholder="name" name='password' value={user.password} onChange={handleInputChange}/>
    <button onClick={handleLogin}>login</button>
    </div>
  )
}

export default Login
