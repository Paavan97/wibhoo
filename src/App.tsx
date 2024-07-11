// import "./App.css";

// import { Home } from "@mui/icons-material";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavbarLayout from "./routes/NavbarLayout";
import Communities from "./pages/Communities";
import Places from "./pages/Places";
import WhatIsWibhoo from "./pages/WhatIsWibhoo";
import OurApproach from "./pages/OurApproach";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavbarLayout />} >
          <Route path='' element={<Home/>} /> 
          <Route path='events-communities' element={<Communities/>} /> 
          <Route path='places-spaces' element={<Places/>} /> 
          <Route path='what-is-wibhoo' element={<WhatIsWibhoo/>} /> 
          <Route path='our-approach' element={<OurApproach/>} /> 
        </Route>
      </Routes>
    </>
  );
}

export default App;
