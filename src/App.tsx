import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
// import NavbarLayout from "./routes/NavbarLayout";
import Communities from "./pages/Communities";
import Places from "./pages/Places";
import WhatIsWibhoo from "./pages/WhatIsWibhoo";
import ProductPage from "./pages/ProductPage";
import UsePage from "./pages/UsePage";
import Service from "./pages/fourpillars/Service";
import Product from "./pages/fourpillars/Products";
import Terms from "./pages/Support/Terms";
import Shippping from "./pages/Support/Shipping";
import Privacy from "./pages/Support/Privacy";
import HowWeOnboard from "./pages/HowWeOnboard";
import OurApproach from "./pages/OurApproach";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/" element={<NavbarLayout />}> */}
          {/* <Route index element={<Navigate to="/home" />} /> */}
          <Route
            path="/"
            element={
              <ProtectedRoutes>
                <Navbar />
                <Home />
                <Footer />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/products/:category"
            element={
              <ProtectedRoutes>
                <Navbar />
                <ProductPage />
                <Footer />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/use/:category"
            element={
              <ProtectedRoutes>
                <Navbar />
                <UsePage />
                <Footer />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/service/:category"
            element={
              <ProtectedRoutes>
                <Navbar />
                <UsePage />
                <Footer />
              </ProtectedRoutes>
            }
          />
          <Route
            path="communities"
            element={
              <ProtectedRoutes>
                <Navbar />
                <Communities />
                <Footer />
              </ProtectedRoutes>
            }
          />
          <Route
            path="places-spaces"
            element={
              <ProtectedRoutes>
                <Navbar />
                <Places />
                <Footer />
              </ProtectedRoutes>
            }
          />
          <Route
            path="what-is-wibhoo"
            element={
              <ProtectedRoutes>
                <Navbar />
                <WhatIsWibhoo />
                <Footer />
              </ProtectedRoutes>
            }
          />
          <Route
            path="our-approach"
            element={
              <ProtectedRoutes>
                <Navbar />
                <OurApproach />
                <Footer />
              </ProtectedRoutes>
            }
          />
          <Route
            path="service"
            element={
              <ProtectedRoutes>
                <Navbar />
                <Service />
                <Footer />
              </ProtectedRoutes>
            }
          />
          <Route
            path="Product"
            element={
              <ProtectedRoutes>
                <Navbar />
                <Product />
                <Footer />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/Product/:category"
            element={
              <ProtectedRoutes>
                <Navbar />
                <ProductPage />
                <Footer />
              </ProtectedRoutes>
            }
          />
          <Route
            path="terms"
            element={
              <ProtectedRoutes>
                <Navbar />
                <Terms />
                <Footer />
              </ProtectedRoutes>
            }
          />
          <Route
            path="shipping"
            element={
              <ProtectedRoutes>
                <Navbar />
                <Shippping />
                <Footer />
              </ProtectedRoutes>
            }
          />
          <Route
            path="how-we-onboard"
            element={
              <ProtectedRoutes>
                <Navbar />
                <HowWeOnboard />
                <Footer />
              </ProtectedRoutes>
            }
          />
          <Route
            path="privacy"
            element={
              <ProtectedRoutes>
                <Navbar />
                <Privacy />
                <Footer />
              </ProtectedRoutes>
            }
          />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
      <ToastContainer />{" "}
    </>
  );
}

export default App;
