import logo from "./logo.svg";
import "./App.css";
import menuBtn from "./img/menu-btn.png";
import img1 from "./img/img1.png";
import img2 from "./img/img2.png";
import img3 from "./img/img3.png";
import img4 from "./img/img4.png";
import img5 from "./img/img5.png";
import img6 from "./img/img6.png";



import React, {useState} from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen]= useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }


  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="App">
      <nav className="navbar">
        <h1 className="logo">ADVENTURE</h1>
        <ul className={isMenuOpen ? "nav-links mobile-menu" : "nav-links"}>
        {/* <ul className="nav-links"> */}
          {/* <li className="active">
            <a href="#home"></a>Home
          </li>
          <li>
            <a href="#tours"></a>Tours
          </li>
          <li>
            <a href="#explore"></a>Explore
          </li> */}
          <li className="active" onClick={() => scrollToSection("home")}>
            Home
          </li>
          <li onClick={() => scrollToSection("tours")}>
            Tours
          </li>
          <li onClick={() => scrollToSection("explore")}>
            Explore
          </li>
          <li>
            <a href="#about"></a>About
          </li>
          <li className="ctn">
            <a href="#"></a>Contact
          </li>
        </ul>

        <img src={menuBtn} alt="menu button" className="menu-btn" onClick={toggleMenu}></img>
      </nav>
      <header>
        <div className="header-content">
          <h2>Explore The Colorful World</h2>
          <div class="line"></div>
          <h1>A Wonderful Gift</h1>
          <a href="#" class="ctn">
            Learn More
          </a>
        </div>
      </header>

      <section className="events">
        <div className="title">
          <h1>Upcoming Events</h1>
          <div className="line"></div>
        </div>
        <div className="row">
          <div className="col">
          <img src={img1} alt="img1"></img>
          <h4>Everest Camp Trek</h4>
          <p>Lorean, ipsum dolor sit amet consectetur adipisicing elit Return. Voluptatibus</p>
          <a href="#" className="ctn">Learn More</a>
        </div>
        <div className="col">
          <img src={img2} alt="img2"></img>
          <h4>Walking Holidays</h4>
          <p>Lorean, ipsum dolor sit amet consectetur adipisicing elit Return. Voluptatibus</p>
          <a href="#" className="ctn">Learn More</a>
        </div>
        </div>
      </section>

      <section className="explore">
        <div className="explore-content">
        <h1>EXPLORE THE WORLD</h1>
        <div className="line"></div>
        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        <a href="#" className="ctn">Learn More</a>
        </div>
      </section>




      <section className="tours">
        <div  className="row">
          <div className="col content-col">
            <h1>
              UPCOMING TOURS & DESTINATIONS  
            </h1>
            <div className="line"></div>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
            <a href = "#" className="ctn">Learn More</a>
          </div>
          <div className="col image-col">
            <div className="image-gallery">
              <img src={img3} alt="img3"></img>
              <img src={img4} alt="img4"></img>
              <img src={img5} alt="img5"></img>
              <img src={img6} alt="img6"></img>
            </div>
          </div>
        </div>
      </section>

      <section className="footer">
        <p>123 Fifth Avenue, NY 10160, New York , USA | Phone: 800-123-456 | Email: contact@example.com </p>
        <p>Copyright © 2023 Outdoor Adventure</p>

      </section>

      
    </div>
  );
}

export default App;
