import './Contact.css';
import { useForm } from 'react-hook-form';


export default function contact(){
    return(
        <>
       <div className="App">
        {/* Navbar */}
        <header className="navbar">
          <div className="logo">
          </div>
          <ul className="nav-links">
            <li><a href="http://localhost:3000/home">Home</a></li>
            <li><a href="http://localhost:3000/Courses">Courses</a></li>
            <li><a href="http://localhost:3000/Ourteachers">Our Teachers</a></li>
            <li><a href="http://localhost:3000/about">About</a></li>
            <li><a href="http://localhost:3000/Contact">Contact</a></li>
          </ul>
          <button className="find-tutor-btn">Find A Tutor</button>
        </header>

        {/* Main Section */}
        <main className="hero-section3">
          <p className="sub-heading3">Contact</p>
          <h1>Feel free to get in touch with us</h1> <h2> lorem ipsum dolor sit amet</h2>
        </main>
        <div className="main-container">
      <div className="form-container">
        <h1>Media and Business Inquiries</h1>
        <p>Send us a message below or email us at</p> <p><a href="mailto:contact@info.com">contact@info.com</a></p>
        <form>
          <div className="input-group">
            <label htmlFor="name">Name *</label>
            <div className="name-fields">
              <input type="text" id="first-name" name="first-name" placeholder="First" required />
              <input type="text" id="last-name" name="last-name" placeholder="Last" required />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <label htmlFor="message">Message *</label>
            <textarea id="message" name="message" placeholder="Message" required></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
    <div className="modal-container">
          <div className="banner-window">
            <p className="subtext">Choose a teacher for 1-on-1 lessons</p>
            <h1>
              <span className="highlight">Start</span> learning a new language <span className="highlight">today!</span>
            </h1>
            <button className="signup-button">Sign Up</button>
          </div>
        </div>
        <footer className="footer">
      <div className="footer-section about-us">
        <h3>About Us</h3>
        <ul>
          <li>How it Works</li>
          <li>Affiliate Program</li>
          <li>Education Partners</li>
          <li>We are Hiring!</li>
          <li>Become a Teacher</li>
        </ul>
      </div>
      <div className="footer-section teachers">
        <h3>Teachers</h3>
        <ul>
          <li>English Teachers</li>
          <li>Chinese Teachers</li>
          <li>French Teachers</li>
          <li>Spanish Teachers</li>
          <li>Portuguese Teachers</li>
          <li>Japanese Teachers</li>
          <li>German Teachers</li>
          <li>Arabic Teachers</li>
        </ul>
      </div>
      <div className="footer-section support">
        <h3>Support</h3>
        <p>Need any Help?</p>
        <p><a href="mailto:contact@info.com">contact@info.com</a></p>
      </div>
      <div className="footer-section contact">
        <h3>Contact</h3>
        <p>929-242-6868</p>
        <p>123 Fifth Avenue, New York, NY 10160</p>
      </div>
      <div className="footer-section follow-us">
        <h3>Follow Us</h3>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>YouTube</li>
          <li>Instagram</li>
          <li>Weibo</li>
        </ul>
      </div>
      <div className="footer-copyright">
        <p>Copyright © 2024 Language Tutors</p>
        <p>Powered by Language Tutors</p>
      </div>
    </footer>
  

       
    
    
    </div>
    
        


      
        </>
    );
}
