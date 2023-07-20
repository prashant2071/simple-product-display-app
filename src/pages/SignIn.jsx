import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";


const signIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loginHandler =async () =>{
    try{
      const response = await axios.post("http://localhost:8085/users/login",{
        email,
        password
      })
      console.log("the response is",response);
      if(response.data.status){
        toast.success(response.data.message)
        navigate('/products')
      
    }
  }
    catch(err){
      console.log("the error is",err)
      toast.warning(err.response.data.message)
    }
  }
  const signupRoute = () =>{
    navigate('/')
  }
  return (
    <>
      <div className="mx-auto h-50 w-25 my-auto border bg-light rounded  p-5 mt-5 ">
        <h3 className="text-center">Login</h3>
        <Form>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              placeholder="Enter email"
              className="mb-2"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
            ></Form.Control>
            <Form.Label>password</Form.Label>
            <Form.Control
              className="mb-2"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter password"
              value={password}
            ></Form.Control>
          </Form.Group>
          <div className=" d-flex justify-content-between ">
            <Form.Check>Remember me</Form.Check>
            <a href="#" className="text-decoration-none">
              Forget Password?
            </a>
          </div>
          <Button className="mt-1 w-100" onClick={loginHandler} variant="success">
            submit
          </Button>
        </Form>
        <div className="text-center d-flex gap-5 mt-4">
          <p>Dont have an account? </p>
          <a className="text-decoration-none" onClick={signupRoute}>Sign Up</a>
        </div>
      </div>
    </>
  );
};

export default signIn;
