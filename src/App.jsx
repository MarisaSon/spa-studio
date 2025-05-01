import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Rituals from "./pages/Rituals";
import Massages from "./pages/Massages";
import Certificates from "./pages/Certificates";
import Contacts from "./pages/Contacts";
import Cart from "./pages/Cart";
import Booking from "./pages/Booking";
import rituals from "./data/rituals";
import massages from "./data/massages";
import certificates from "./data/certificates";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rituals" element={<Rituals data={rituals} />} />
        <Route path="/massages" element={<Massages data={massages} />} />
        <Route path="/certificates" element={<Certificates data={certificates}  />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
