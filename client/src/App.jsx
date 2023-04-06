import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import AdoptionProcess from "./Pages/AdoptionProcess";
import Home from "./Pages/Home";
import PetProfile from "./Pages/PetProfile";
import PetSearch from "./Pages/PetSearch";
import ShelterSearch from "./Pages/ShelterSearch";
import UserProfile from "./Pages/UserProfile";
import NotFound from "./Pages/NotFound";
import Foster from "./Pages/Foster";
import Donate from "./Pages/Donate";
import Footer from "./components/Footer";
import NavbarComp from "./components/NavbarComp";
import "./styles/App.scss";



function App() {
  return (
    <div className='App'>
      <NavbarComp />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* <Route path='/userprofile' element={<UserProfile />} /> */}
        <Route path='/adoptionprocess' element={<AdoptionProcess />} />
        <Route path="/shelter" element={<ShelterSearch />} />
        {/* <Route path='/petprofile' element={<PetProfile />} /> */}
        <Route path='/adoptionprocess' element={<AdoptionProcess />} />
        {/* <Route path='/petsearch' element={<PetSearch />} /> */}
        <Route path='/sheltersearch' element={<ShelterSearch />} />
        <Route path='/foster' element={<Foster />} />
        <Route path='/donate' element={<Donate />} />
        
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <h1>RescueUs</h1>
      <Footer />
    </div>
  );
}

export default App;
