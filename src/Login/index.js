import React ,{useState}from 'react';

import { Link } from 'react-router-dom';
import'./index.css';

function Login(){
  const[username,setUsername]  = useState('');
  const[password,setPassword] =useState('');
  console.log({username});
  console.log({password});

  const handleSubmit=async(e)=>{
     e.preventDefault();
     const data = {
        username:username,
        password:password
     }
     try{
      const response = await fetch('https://dummyjson.com/auth/login',{
        method:'POST',
        headers:{
          'content-Type': 'application/json'
        },
        body:JSON.stringify(data),
      });
      const result = await response.json();
      console.log({result});
    }catch(error){
      console.log(error.message);
    }


    
    };
  return (
    <div>
      <form className='form' onSubmit={(handleSubmit)}>
        <h1>Login</h1>
        <input type="text" placeholder="Enter Username" required
        onChange={(e)=>{setUsername(e.target.value)}} />
       
        <br/>
        <br/>

        <input type="password" placeholder="Enter Password" required
        onChange={(e)=>{setPassword(e.target.value)}}/>
        <br/>
        <br/>
        <br/>
        <Link to={'/products/'}>

        <button className='button'>Login</button>
        </Link>
      </form>
    </div>

  )
}

export default Login
