import './Home.css';


export default function Home(){
    return(
        <><><><div className="App">
        {/* Navbar */}
        <header className="navbar">
          <div className="logo">
            


          </ div>
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
        <main className="hero-section2">
          <p className="sub-heading2">In look for a language tutor?</p>
          <h1>Start learning a new language today with the best online tutors!</h1>
        </main>

        {/* Language Cards Section */}
        <section className="language-cards-section2">
          <div className="cards-grid2">
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

          </div>
          <div className="show-all-button2">
            <button className="show-all-button2">Show All+</button>
          </div>
        </section>


        <section className="how-it-works-section2">
          <h2>How it all works</h2>
          <p>Donec sagittis sagittis vestibulum. Morbi vestibulum neque.</p>
          <div className="how-it-works-content2">
            <div className="how-it-works-image2">
              <img src="laptop1.png" alt="Working" />
            </div>
            <div className="how-it-works-steps2">
              <div className="step2">
                <div className="step-number2">1</div>
                <div className="step-details2">
                  <h3>Find the perfect tutor</h3>
                  <p>Elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam varius consectetur.</p>
                </div>
              </div>
              <div className="step2">
                <div className="step-number2">2</div>
                <div className="step-details2">
                  <h3>Schedule your lesson</h3>
                  <p>Elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam varius elementum.</p>
                </div>
              </div>
              <div className="step2">
                <div className="step-number2">3</div>
                <div className="step-details2">
                  <h3>Start the journey</h3>
                  <p>Elit tellus, luctus nec mattis, pulvinar dapibus leo. Nam varius consectetur elementum.</p>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Features Section */}
        <section className="features-section2">
          <div className="feature-item2">
            <div className="feature-icon2">🎓</div>
            <h3>Expert Tutors</h3>
            <p>
              Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
          <div className="feature-item2">
            <div className="feature-icon2">✅</div>
            <h3>Verified Profiles</h3>
            <p>
              Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
          <div className="feature-item2">
            <div className="feature-icon2">💰</div>
            <h3>Pay Per Lesson</h3>
            <p>
              Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
          <div className="feature-item2">
            <div className="feature-icon2">💲</div>
            <h3>Affordable Prices</h3>
            <p>
              Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </section>
      </div><div className="container2">
          <div className="left-section2">
            <h2>Why us</h2>
            <h1>Learn a new language online anywhere, anytime!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-arrow-right-circle"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm2.5-8.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H7.5v-1H9.293l-2.147-2.146a.5.5 0 1 1 .707-.707L10 8.707V7.5H7.5v-1H10z" />
                </svg>
                Customized learning
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                </p>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-arrow-right-circle"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm2.5-8.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H7.5v-1H9.293l-2.147-2.146a.5.5 0 1 1 .707-.707L10 8.707V7.5H7.5v-1H10z" />
                </svg>
                Get expert help when you need it
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                </p>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-arrow-right-circle"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm2.5-8.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H7.5v-1H9.293l-2.147-2.146a.5.5 0 1 1 .707-.707L10 8.707V7.5H7.5v-1H10z" />
                </svg>
                Learn anytime, anywhere
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                </p>
              </li>
            </ul>
          </div>
          <div className="right-section2">
            <h1>" We prepare you to achieve your goals with professional tutors. "</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button>Read More</button>
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
  



        
        
        
        
        
        </></></>
    );
  }


  

function LanguageCard({ code, language, tutors }) {
    return (
      <div className="language-card2">
        <div className="language-code2">{code}</div>
        <div className="language-name2">{language}</div>
        <div className="language-tutors2">{tutors}</div>
      </div>
    );
  }
        
        
    