import React from "react";
import HomeLayout from "../Layouts/HomeLayout";
import about from "../assets/about.png";
import "./AboutUs.css";

function AboutUs() {
  return (
    <HomeLayout>
      <div className="about-container">
        <div className="about-content">
          <section className="about-text">
            <h1 className="about-heading">Explore the World of Pokémon</h1>
            <p className="about-description">
              Welcome to our Pokédex platform! Whether you're a Pokémon trainer or a curious explorer,
              this application brings you a complete world of Pokémon knowledge.
              You can search, filter, and discover your favorite Pokémon, view stats, types,
              and even save them to your personal favorites collection.
              Start your journey and become the ultimate Pokémon Master!
            </p>
          </section>

          <div className="about-image">
            <img
              src={about}
              alt="Pokémon world representation"
              className="about-img-shadow"
            />
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default AboutUs;


