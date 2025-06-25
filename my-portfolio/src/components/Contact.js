export default function Contact() {
  return (
      <section id="contact" className="contact-section">
          <h2 className="contact-heading">Contact</h2>
          <div className="contact-container">
              <p className="contact-item">
                  📍 <strong>Location:</strong> Bangalore, India
              </p>
              <p className="contact-item">
                  📧 <strong>Email:</strong> 
                  <a href="mailto:naveen@example.com" className="contact-link">
                      pothapalunaveen@gmail.com
                  </a>
              </p>
              <p className="contact-item">
                  📞 <strong>Phone:</strong> 
                  <a href="tel:+919876543210" className="contact-link">
                      +91 9110810125
                  </a>
              </p>
              <p className="contact-item">
                  🔗 <strong>LinkedIn:</strong> 
                  <a href="https://linkedin.com/in/naveen" target="_blank" rel="noreferrer" className="contact-link">
                      linkedin.com/in/naveen
                  </a>
              </p>
              <p className="contact-item">
                  🔗 <strong>GitHub:</strong> 
                  <a href="https://github.com/pothapalunaveen" target="_blank" rel="noreferrer" className="contact-link">
                      github.com/naveen
                  </a>
              </p>
          </div>
      </section>
  );
}
