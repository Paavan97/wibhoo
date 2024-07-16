// import "./App.css";

// import { Home } from "@mui/icons-material";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavbarLayout from "./routes/NavbarLayout";
import Communities from "./pages/Communities";
import Places from "./pages/Places";
import WhatIsWibhoo from "./pages/WhatIsWibhoo";
import ProductPage from "./pages/ProductPage";
import UsePage from "./pages/UsePage";
import HowWeOnboard from "./pages/HowWeOnboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarLayout />}>
            <Route index element={<Navigate to="/home" />} />
            <Route path="home" element={<Home />} />
            <Route path="/products/:category" element={<ProductPage />} />
            <Route path="/use/:category" element={<UsePage />} />
            <Route path="communities" element={<Communities />} />
            <Route path="places-spaces" element={<Places />} />
            <Route path="what-is-wibhoo" element={<WhatIsWibhoo />} />
            <Route path="how-we-onboard" element={<HowWeOnboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
