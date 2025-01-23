import FoodMenu from "./Components/Form/FoodMenu";
import FoodPost from "./Components/Form/FoodPost";
import Login from "./Components/Form/Login";
import Signup from "./Components/Form/Signup";
// import Registration from "./Components/Form/Registration";
import NavBar from "./Components/NAV/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/foodMenu" element={<FoodMenu />} />
          <Route path="/addfood" element={<FoodPost />} />
          {/* <Route path="/addReservation" element={<Registration/>}/> */}
          <Route path="/getUser" element={<Login/>}/>
          <Route path="/postUser" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
