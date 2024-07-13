// import "./App.css";

// import { Home } from "@mui/icons-material";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
            <Route index element={<Navigate to="/home" />} />
            <Route path="home" element={<Home />} />
            <Route path="communities" element={<Communities />} />
            <Route path="places-spaces" element={<Places />} />
            <Route path="what-is-wibhoo" element={<WhatIsWibhoo />} />
            <Route path="our-approach" element={<OurApproach />} />
            {/* Additional Routes for SubMenu Items */}
            <Route path="shop1" element={<WhatIsWibhoo />} />
            <Route path="shop2" element={<Places />} />
            <Route path="shop3" element={<WhatIsWibhoo />} />
            <Route path="use1" element={<Places />} />
            <Route path="use2" element={<WhatIsWibhoo />} />
            <Route path="use3" element={<Places />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
