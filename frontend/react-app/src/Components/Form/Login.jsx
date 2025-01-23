import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Axios from "axios";

const url = "http://localhost:5000/api/v1/user/profile/getUser";
const Login = () => {
  const [getUser, setGetUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  const handleChange = (event) => {
    const { name, value } = event.target;
    setGetUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!getUser.email || !getUser.password) {
      console.log("All fields are required");
      toast.error("All field are required");
      return;
    }
    // const data = {
    //     userName : getUser.userName,
    //     email: getUser.email ,
    //     password: getUser.password ,
    // };

    try {
      const res = await Axios.get(url);
      const {error , jwtToken , userName } = res ;
      const details = error.details[0];
      localStorage.setItem('token' , jwtToken);
      localStorage.setItem('loggedIn' , userName);
      setGetUser(res);
      if (res.status !== 201) {
        toast.error("form could not be submitted " , details );
        return
      }
      toast.success("Form submitted");
      setTimeout(()=>{
        navigate('/getUser')
      } , 2000)

      console.log(res)
    } catch (error) {
      toast.error("Server Error! Cannot login" , error.message);
    }
    setGetUser({
        email:"",
        password:"",
      })
  };

  return (
    <>
      <h1>Sign Up</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          onChange={handleChange}
          value={getUser.email}
        />
        <label htmlFor="password">Pasword</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          onChange={handleChange}
          value={getUser.password}
        />
        <button>Sign Up</button>
        <span>
          Don't have a account? <Link to="/postUser">Login</Link>
        </span>
      </form>
      <ToastContainer />
    </>
  );
};

export default Login;








