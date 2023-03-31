import React from 'react'
import Button from 'react-bootstrap/Button';
import {Row,Col} from "react-bootstrap"
import Form from 'react-bootstrap/Form';
import { GridColumn, GridRow } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import "./Login.css"
import { Link } from 'react-router-dom';

function Login() {


  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
   
  return (

      <div className='submain'>
        <div className='loginclass'>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>Login</h3>
      <input  type="text" className='inputs' placeholder='Enter Your Email' {...register("email", { required: true, maxLength: 20 } )}   aria-invalid={errors.email ? "true" : "false"}  />
      {errors.email?.type === 'required' && <p role="alert" style={{color:'red'}}>Email is required</p>}
    
      <input  type="password"  className='inputs' placeholder='Enter Your password' {...register("password", { pattern: /^[A-Za-z]+$/i })} />
<div>
      <Button onClick={handleSubmit(onSubmit)}>Login</Button>
      </div>
   
      <div>
      <Row>
        <Col style={{textAlign:'right',marginTop:'5px'}}>New User?</Col>
        <Col> <Link to="/signup"><Button>Signup</Button></Link></Col>
      </Row>
      </div>

      </form>
  
        </div>
       
      </div>
      
  
  )
}

export default Login
