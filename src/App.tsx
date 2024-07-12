// import "./App.css";

// import { Home } from "@mui/icons-material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavbarLayout from "./routes/NavbarLayout";
import Communities from "./pages/Communities";
import Places from "./pages/Places";
import WhatIsWibhoo from "./pages/WhatIsWibhoo";
import OurApproach from "./pages/OurApproach";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="communities" element={<Communities />} />
            <Route path="places" element={<Places />} />
            <Route path="what-is-wibhoo" element={<WhatIsWibhoo />} />
            <Route path="our-approach" element={<OurApproach />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
