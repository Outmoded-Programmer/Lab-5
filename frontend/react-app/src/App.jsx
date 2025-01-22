import FoodMenu from "./Components/Form/FoodMenu";
import FoodPost from "./Components/Form/FoodPost";
import Registration from "./Components/Form/Registration";
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
          <Route path="/addReservation" element={<Registration/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
