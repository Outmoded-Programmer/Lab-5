import FoodMenu from "./Components/Form/FoodMenu";
import NavBar from "./Components/NAV/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
<>
<BrowserRouter>
<NavBar/>
      <Routes>
        <Route path="/foodMenu" element={<FoodMenu />}>
        </Route>
      </Routes>
    </BrowserRouter>
</>
  );
}

export default App;
