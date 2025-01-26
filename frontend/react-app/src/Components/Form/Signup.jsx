import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const url = "http://localhost:5000/api/v1/user/signup";
const Signup = () => {



  //     try {
  //       const res = await Axios.post(url, postUser);
  //       const {error} = res ;
  //       const details = error?.details[0].message;
  //       setPostUser(res);

  //       toast.success("Form submitted");
  //       setTimeout(()=>{
  //         navigate('/getUser')
  //       } , 2000)

  //       console.log(res)
  //     } catch (error) {
  //       toast.error("Server Error! Cannot login" , error.message);
  //     }
  //     setPostUser({
  //         userName:"",
  //         email:"",
  //         password:"",
  //       })
  //   };

  const [postUser, setPostUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPostUser((prevItems) => ({
      ...prevItems,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: postUser.name,
      email: postUser.email,
      password: postUser.password,
    };
    if (!postUser.name || !postUser.email || !postUser.password) {
      toast.error("All fields needs to be filled");
      return;
    }
    if(postUser.password.length < 6){
      toast.error("Password is less than 6 charaters");
      return;
    }
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(
          "Form could not be submitted",
          response.status || error.message
        );
      }
      setTimeout(() => {
        navigate("/getUser");
      }, 2000);
      const result = await response.json();
      console.log("Data submitted", result);
      toast.success("Data submitted successfully");
    } catch (error) {
      console.log("failed to submit", error.message);
      toast.error("failed to submit");
    }
    console.log(postUser);
    setPostUser({
      name: "",
      email: "",
      password: "",
    });
  };
  return (
    <>
      <h1>Sign Up</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          autoFocus
          name="name"
          placeholder="Enter your name"
          onChange={handleChange}
          value={postUser.name}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          onChange={handleChange}
          value={postUser.email}
        />
        <label htmlFor="password">Pasword</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          onChange={handleChange}
          value={postUser.password}
        />
        <button type="submit">Sign Up</button>
        <span>
          Already have an account? <Link to="/getUser">Login</Link>
        </span>
      </form>
      <ToastContainer />
    </>
  );
};

export default Signup;
