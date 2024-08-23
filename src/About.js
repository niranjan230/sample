import './Our.css';
export default function About(){
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
        <main className="hero2-section">
          <p className="sub2-heading">About</p>
          <h1>We are an online language learning community </h1> <h2>lorem ipsum dolor sit amet..</h2>
        </main>
      </div>
      <section className="about-section">
      <div className="about-header">
        <p className="about-us1">About us</p>
        <h1 className="about-title">
          We connect students and teachers
          <br />
          lorem ipsum dolor sit amet,
          <br />
          consectetur.
        </h1>
        <hr className="divider" />
        <p className="about-description">
         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui.
        </p>
      </div>
      <div className="about-vision-mission">
        <div className="vision">
          <p className="vision-title">Our Vision</p>
          <h2 className="vision-text"><p>Consectetur adipisicing elit,</p> sed do eiusmod tempor incididunt.</h2>
        </div>
        <div className="mission">
          <p className="mission-title">Our Mission</p>
          <h2 className="mission-text">Adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</h2>
        </div>
      </div>


      <div className="modal1-container">
          <div className="banner1-window">
    </div>
    <div>
      
      <div className="niranjan">

      </div>

    
      <div className="language-learning-container">
        <div className="language-learning-left">
          <h2 className="section-title">Why us</h2>
          <h1 className="section-heading">Learn a new language online anywhere, anytime!</h1>
        </div>
        <div className="language-learning-right">
          <div className="learning-feature">
            <span className="feature-icon">➜</span>
            <div>
              <h3 className="feature-title">Customized learning</h3>
              <p className="feature-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            </div>
          </div>
          <div className="learning-feature">
            <span className="feature-icon">➜</span>
            <div>
              <h3 className="feature-title">Learn anytime, anywhere</h3>
              <p className="feature-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            </div>
          </div>
          <div className="learning-feature">
            <span className="feature-icon">➜</span>
            <div>
              <h3 className="feature-title">Expert help</h3>
              <p className="feature-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            </div>
          </div>
          <div className="learning-feature">
            <span className="feature-icon">➜</span>
            <div>
              <h3 className="feature-title">Pay per lesson</h3>
              <p className="feature-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr className="divider1" />

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

    </section>



        
        </>
    );
}