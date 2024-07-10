
// import "./App.css";

// import { Home } from "@mui/icons-material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>} >
            <Route path='' element={<Home/>} ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
    );
}

export default App;
