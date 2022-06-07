import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{backgroundImage: `linear-gradient(to bottom, #00000080, #00000080), url(${BannerImage})`}}>
      <div className="headerContainer">
        <h1> Mario's Pizzeria </h1>
        <p> A melhor pizza imaginária do mundo</p>
        <Link to="/menu">
          <button>Veja nosso menu</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

