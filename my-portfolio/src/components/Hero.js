import "../styles/Hero.css"; // Import the CSS file
import myImage from "../images/myimg.jpg"
export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-text">
        <div>
          <h4>Hi and welcome to</h4>
          <h2>My Portfolio Website</h2>
        </div>
        <p>I am your friendly neighbourhood FrontEndDeveloper</p>
      </div>
      <div className="hero-image">
        <img
          src={myImage}
          alt="My Image"
        />
      </div>
    </section>
  );
}
