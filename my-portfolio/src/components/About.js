import "../styles/About.css"; // Import the CSS file

export default function About() {
  return (
    <section id="about">
      <div className="about-image">
        <img
          src="https://media.geeksforgeeks.org/img-practice/Asset1-1641910145.svg"
          alt="About"
        />
      </div>
      <div className="about-text">
        <div>
          <h2>About Me :</h2>
        </div>
        <p>
          As I said, I am a React Developer with 5+ years of experience in UI/Frontend Development.
        </p>
        <p>
        Hey there! 👋 I'm Naveen P, a self-taught React Developer with a passion for building intuitive, scalable, and high-performing web applications.

I've spent the past 5+ years crafting beautiful user interfaces, solving complex UI challenges, and making the web a little better one line of code at a time
        </p>
      </div>
    </section>
  );
}
