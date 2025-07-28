import { Routes, Route } from "react-router-dom";
import Pokedex from "../Components/Pokedex/Pokedex";
import PokemonDetails from "../Components/PokemonDetails/PokemonDetails";
import AboutUs from "../Pages/AboutUs";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import NotFound from "../Pages/NotFound";
import Favorites from "../Pages/Favorites";
import ProtectedRoute from "../Components/ProtectedRoute";
import ContactUs from "../Pages/ContactUs";

function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pokedex" element={<Pokedex />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<ContactUs/>} />
      <Route
        path="/favorites"
        element={
          <ProtectedRoute>
            <Favorites />
          </ProtectedRoute>
        }
      />
      <Route path="/pokemon/:id" element={<PokemonDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default CustomRoutes;





