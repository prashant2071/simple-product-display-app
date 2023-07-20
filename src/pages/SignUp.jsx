import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate("");
  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleRoute = () => {
    navigate("/signin");
  };
  const handleRegister=async () =>{
    try{
      const response = await axios.post("http://localhost:8085/users/register",{
        fullName,
        email,
        password
      }, { headers: {
        'Content-Type': 'application/json'
      }})
      if(response.data.status){
        toast.success(response.data.message)
        navigate('/signin')
      }
    }
    catch(err){
      console.log("the error is",err)
      toast.warning(err.response.data.message)

    }
  }
  return (
    <div className="mx-auto h-50 w-25 my-auto border bg-light rounded  p-5 mt-5 ">
      <h3 className="text-center">Sign Up</h3>
    <Form>
      <Form.Group>
      <Form.Label>Full Name</Form.Label>
        <Form.Control 
          placeholder="Enter Full Name"
          className="mb-2"
          onChange={(e) => setfullName(e.target.value)}
          value={fullName}
          type="text"
        ></Form.Control>
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
      <Button className="mt-1" variant="success" onClick={handleRegister}>submit</Button>
    </Form>
    <div className="mt-2"> 
      <p>Already have an account?</p>
      <a onClick={(e)=>navigate('/signin')} className="text-decoration-none mt-2">Sign In</a>
    </div>
    </div>
  );
};

export default SignUp;
