import React from 'react';
import Button from 'react-bootstrap/Button';
import {Row,Col} from "react-bootstrap"
import Form from 'react-bootstrap/Form';
import { GridColumn, GridRow } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import "./Signup.css"
import { Link } from 'react-router-dom';
function Signup() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
   


  return (
    <div className='signup'>
        <div className='signupcard'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>Signup</h3>
      <input  type="text" className='inputs' placeholder='First Name' {...register("firstname", { required: true, maxLength: 20 } )}   aria-invalid={errors.email ? "true" : "false"}  />
      {errors.firstname?.type === 'required' && <p role="alert" style={{color:'red'}}>Please Enter Your First Name</p>}
      <input  type="text" className='inputs' placeholder='Last Name' {...register("lastname", { required: true, maxLength: 20 } )}   aria-invalid={errors.email ? "true" : "false"}  />
      {errors.lastname?.type === 'required' && <p role="alert" style={{color:'red'}}>Please Enter Your Last Name</p>}
      <input  type="text" className='inputs' placeholder='Enter You Email' {...register("email", { required: true, maxLength: 20 } )}   aria-invalid={errors.email ? "true" : "false"}  />
      {errors.password?.type === 'required' && <p role="alert" style={{color:'red'}}>Please Enter Your Email</p>}
      <input  type="password" className='inputs' placeholder='Password' {...register("password", { required: true, maxLength: 20 } )}   aria-invalid={errors.email ? "true" : "false"}  />
      {errors.password?.type === 'required' && <p role="alert" style={{color:'red'}}>Please Enter Your password</p>}
      <input  type="password"  className='inputs' placeholder='Confirm password' {...register("confirmpassword", { pattern: /^[A-Za-z]+$/i })} />
<div>
      <Button onClick={handleSubmit(onSubmit)}>Signup</Button>
      </div>
   
      <div>
      <Row>
        <Col style={{textAlign:'right',marginTop:'5px'}}>Already an User?</Col>
        <Col> <Link to="/"><Button >Login</Button></Link></Col>
      </Row>
      </div>

      </form>
      </div>
    </div>
  )
}

export default Signup
