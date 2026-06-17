import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Signup from "./pages/SignupPage/SignupPage";
import SignIn from "./pages/SigninPage/SigninPage";
// import Dashboard from "./pages/DashboardPage/SignDocument";
import SignDocument from "./pages/DashboardPage/SignDocument";
import PdfPreview from "./pages/DashboardPage/PreviewPdf";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Signup" element={<Signup />} />
         <Route path="/SignIn" element={<SignIn />} />
        {/* <Route path="/Dashboard" element={<Dashboard />} />
        
         */}
          <Route path="/SignDocument" element={<SignDocument />} />
        <Route path="/PdfPreview" element={<PdfPreview />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;