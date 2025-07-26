import { Link } from "react-router-dom";
import HomePageMain from "../assets/HomePageMain.png";
import HomeLayout from "../Layouts/HomeLayout";
import "./HomePage.css"; // ⬅️ Linking the CSS file

function HomePage() {
  return (
    <HomeLayout>
      <div className="home-container">
        <div className="home-left">
          <h1>
            Welcome to the <span>Pokédex</span>
          </h1>
          <p>
            Discover, explore, and save your favorite Pokémon.
            Search by name, type, and stats. Dive into the world of Pokémon now!
          </p>
          <div className="home-buttons">
            <Link to="/pokemon">
              <button className="explore-btn">Explore Pokémon</button>
            </Link>

            <Link to="/contact">
              <button className="contact-btn">Contact Us</button>
            </Link>
          </div>
        </div>
        <div className="home-right">
          <img alt="homepage" src={HomePageMain} />
        </div>
      </div>
    </HomeLayout>
  );
}

export default HomePage;
