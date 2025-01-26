// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// // import Axios from "axios";

// const url = "http://localhost:5000/api/v1/user/profile/getUser";
// const Login = () => {
//   const [getUser, setGetUser] = useState({
//     email: "",
//     password: "",
//   });
//   const navigate = useNavigate()
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setGetUser((prevUser) => ({
//       ...prevUser,
//       [name]: value,
//     }));
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = {
//       id: getUser._id ,
//       email : getUser.email ,
//       password: getUser.password
//     }
//     if (!getUser.email || !getUser.password) {
//       console.log("All fields are required");
//       toast.error("All field are required");
//       return;
//     }
//     // const data = {
//     //     userName : getUser.userName,
//     //     email: getUser.email ,
//     //     password: getUser.password ,
//     // };


 
//     try {
//       const res = await fetch(`${url}?email${getUser.email}` ,{
//         method : "GET" ,
//         headers:{
//           "Content-Type" : "application/json"
//         },
//         body:JSON.stringify(data)
//       });
//       const resData = await res.json();
//       const {email  , password , jwtToken , userName} = resData
//       if(getUser.email !== email || getUser.password !== password ){
//         toast.error("Wrong email or password");
//         return
//       }
//       // const details = error.details[0].message;
//       localStorage.setItem('token' , jwtToken);
//       localStorage.setItem('loggedIn' , userName);
//       setGetUser(resData);
//       // if (!res.ok) {
//       //   toast.error("form could not be submitted ");
//       //   return
//       // }
//       toast.success("Form submitted");
//       setTimeout(()=>{
//         navigate('/getUser')
//       } , 2000)
//       setGetUser({
//         email:"",
//         password:"",
//       })
//       console.log(res)
//     } catch (error) {
//       toast.error("Server Error! Cannot login" , error.message);
//     }
//   };

//   return (
//     <>
//       <h1>Sign Up</h1>
//       <form action="" onSubmit={handleSubmit}>
//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           name="email"
//           id="email"
//           placeholder="Enter your email"
//           onChange={handleChange}
//           value={getUser.email}
//         />
//         <label htmlFor="password">Pasword</label>
//         <input
//           type="password"
//           name="password"
//           id="password"
//           placeholder="Enter your password"
//           onChange={handleChange}
//           value={getUser.password}
//         />
//         <button type="Submit">Sign Up</button>
//         <span>
//           Don't have a account? <Link to="/postUser">Login</Link>
//         </span>
//       </form>
//       <ToastContainer />
//     </>
//   );
// };

// export default Login;








import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const url = "http://localhost:5000/api/v1/user/login"; // Updated URL for login

const Login = () => {
  const [getUser, setGetUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

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
      toast.error("All fields are required");
      return;
    }

    const data = {
      email: getUser.email,
      password: getUser.password,
    };

    try {
      const res = await fetch(url, {
        method: "POST", // Use POST for login
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resData = await res.json();

      if (!res.ok) {
        // Handle invalid credentials or server errors
        toast.error(resData.message || "Invalid email or password");
        return;
      }

      const { jwtToken, name } = resData;

      // Save JWT and user info to localStorage
      localStorage.setItem("token", jwtToken);
      localStorage.setItem("loggedIn", name);

      toast.success("Login successful!");

      // Navigate to the user profile page
      setTimeout(() => {
        navigate("/getUser");
      }, 2000);

      // Reset form fields
      setGetUser({
        email: "",
        password: "",
      });

    } catch (error) {
      toast.error("Server Error! Unable to login");
      console.error(error.message);
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          onChange={handleChange}
          value={getUser.email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          onChange={handleChange}
          value={getUser.password}
        />
        <button type="submit">Login</button>
        <span>
          Don't have an account? <Link to="/postUser">Sign Up</Link>
        </span>
      </form>
      <ToastContainer />
    </>
  );
};

export default Login;
