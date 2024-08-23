import './App.css';

export default function Courses() {
  return (
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
        <main className="hero-section">
          <p className="sub-heading">Courses</p>
          <h1>Prepare to learn a new language with the best online tutors.</h1>
        </main>
      </div>

      <section className="language-cards-section">
          <div className="cards-grid">
            <LanguageCard code="EN" language="English language" tutors="125 Tutors" />
            <LanguageCard code="ES" language="Spanish language" tutors="83 Tutors" />
            <LanguageCard code="JP" language="Japanese language" tutors="76 Tutors" />
            <LanguageCard code="DE" language="German language" tutors="64 Tutors" />
            <LanguageCard code="FR" language="French language" tutors="92 Tutors" />
            <LanguageCard code="SA" language="Arabic language" tutors="13 Tutors" />
            <LanguageCard code="IT" language="Italian language" tutors="48 Tutors" />
            <LanguageCard code="PT" language="Portuguese language" tutors="39 Tutors" />
            <LanguageCard code="KR" language="Korean language" tutors="12 Tutors" />
            <LanguageCard code="HI" language="Hindi language" tutors="25 Tutors" />
            <LanguageCard code="GR" language="Greek language" tutors="36 Tutors" />
            <LanguageCard code="RU" language="Russian language" tutors="41 Tutors" />
            <LanguageCard code="KR" language="Korean language" tutors="19 Tutors" />
            <LanguageCard code="RU" language="Russian language" tutors="31 Tutors" />
            <LanguageCard code="GR" language="Greek language" tutors="36 Tutors" />
            <LanguageCard code="HI" language="Hindi language" tutors="25 Tutors" />
            <LanguageCard code="IT" language="Italian language" tutors="48 Tutors" />
            <LanguageCard code="PT" language="Portuguese language" tutors="39 Tutors" />
            <LanguageCard code="FR" language="French language" tutors="92 Tutors" />
            <LanguageCard code="SA" language="Arabic language" tutors="13 Tutors" />


          </div>
          
        </section>
 <section className="features-section">
          <div className="feature-item">
            <div className="feature-icon">🎓</div>
            <h3>Expert Tutors</h3>
            <p>
              Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">✅</div>
            <h3>Verified Profiles</h3>
            <p>
              Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">💰</div>
            <h3>Pay Per Lesson</h3>
            <p>
              Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">💲</div>
            <h3>Affordable Prices</h3>
            <p>
              Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </section>
        <><div className="modal-container">
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
          </>
          );
          }
      
        
    
  
function LanguageCard({ code, language, tutors }) {
  return (
    <div className="language-card">
      <div className="language-code">{code}</div>
      <div className="language-name">{language}</div>
      <div className="language-tutors">{tutors}</div>
    </div>
  );
}