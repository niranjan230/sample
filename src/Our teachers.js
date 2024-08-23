import './Teacher.css';

export default function Ourteachers(){
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
        <main className="hero1-section">
          <p className="sub1-heading">Teachers</p>
          <h1>Browse and book an online language tutor</h1> <h2>lorem ipsum dolor sit amet.</h2>
        </main>
      </div>
      <section className="teacher-cards-section">
  <div className="container">
    
    <div className="teacher-card">
      <div className="teacher-card-img">
        
      
        
      </div>
      <div className="teacher-card-info">
        <h3 className="teacher-name">Jaxon Clarke</h3>
        <p className="teacher-subtitle">Native English Teacher from the U.S.</p>
        <p className="teacher-desc">
          Consectetur adipisicing elit, sed do eiusmod ut labore et magna aliqua...
        </p>
        <div className="teacher-languages">
          <span>English (Native)</span>, <span>French C1</span>
        </div>
        <div className="teacher-rating">
          <span className="rating-stars">⭐ 4.9</span>
          <span className="lessons-count">125 Lessons</span>
        </div>
        <div className="teacher-pricing">
          <p>
            Hourly Rate From: <span className="rate">USD 15.50</span>
          </p>
          <p>
            Trial: <span className="trial-rate">USD 6.50</span>
          </p>
        </div>
        <button className="book-trial-btn">Book Trial</button>
      </div>
    </div>

    <div className="teacher-card">
      <div className="teacher-card-img">
        
      </div>
      <div className="teacher-card-info">
        <h3 className="teacher-name">Amilia Luna</h3>
        <p className="teacher-subtitle">Native English Teacher from the U.S.</p>
        <p className="teacher-desc">
          Consectetur adipisicing elit, sed do eiusmod ut labore et magna aliqua...
        </p>
        <div className="teacher-languages">
          <span>English (Native)</span>
        </div>
        <div className="teacher-rating">
          <span className="rating-stars">⭐ 4.3</span>
          <span className="lessons-count">125 Lessons</span>
        </div>
        <div className="teacher-pricing">
          <p>
            Hourly Rate From: <span className="rate">USD 12.00</span>
          </p>
          <p>
            Trial: <span className="trial-rate">USD 7.50</span>
          </p>
        </div>
        <button className="book-trial-btn">Book Trial</button>
      </div>
    </div>

    
    <div className="teacher-card">
      <div className="teacher-card-img">
        
      </div>
      <div className="teacher-card-info">
        <h3 className="teacher-name">Mario Palmer</h3>
        <p className="teacher-subtitle">Native English Teacher from the U.S.</p>
        <p className="teacher-desc">
          Consectetur adipisicing elit, sed do eiusmod ut labore et magna aliqua...
        </p>
        <div className="teacher-languages">
          <span>English (Native)</span>, <span>Italian C1</span>
        </div>
        <div className="teacher-rating">
          <span className="rating-stars">⭐ 4.5</span>
          <span className="lessons-count">125 Lessons</span>
        </div>
        <div className="teacher-pricing">
          <p>
            Hourly Rate From: <span className="rate">USD 9.50</span>
          </p>
          <p>
            Trial: <span className="trial-rate">USD 4.50</span>
          </p>
        </div>
        <button className="book-trial-btn">Book Trial</button>
      </div>
    </div>
    <div className="teacher-card">
      <div className="teacher-card-img">
        
      </div>
      <div className="teacher-card-info">
        <h3 className="teacher-name">Inara Britt</h3>
        <p className="teacher-subtitle">Native English Teacher from the U.S.</p>
        <p className="teacher-desc">
          Consectetur adipisicing elit, sed do eiusmod ut labore et magna aliqua...
        </p>
        <div className="teacher-languages">
          <span>English (Native)</span>, <span>Italian C1</span>
        </div>
        <div className="teacher-rating">
          <span className="rating-stars">⭐ 4.7</span>
          <span className="lessons-count">125 Lessons</span>
        </div>
        <div className="teacher-pricing">
          <p>
            Hourly Rate From: <span className="rate">USD 9.50</span>
          </p>
          <p>
            Trial: <span className="trial-rate">USD 4.50</span>
          </p>
        </div>
        <button className="book-trial-btn">Book Trial</button>
      </div>
    </div>

  </div>
</section>

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
  




        
        
        </>
    );
}