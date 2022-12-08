import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="first-row">
        <div className="row container">
          <div className="first-column">
            <h2>let's discuss making your interior like a dream place!</h2>
          </div>
          <div>
            <p>
              Contact us below to work together to build your amazing interior
            </p>
            <button className="btn">Contact Us</button>
          </div>
        </div>
      </div>
      <div className="second-row">
        <div className="row container">
          <div className="first-column">
            <img src="images/logo.png" alt="logo" className="logo" />
            <h2>One of the best furniture agency.</h2>
          </div>
          <div className="second-column">
            <div className="newsletter">
              <p>Enter your email to get the laterst news</p>
              <form className="form">
                <input
                  type="text"
                  placeholder="Email Address"
                  name="Email"
                  required
                  className="email-input"
                />
                <input
                  type="image"
                  src="/icons/arrow.png"
                  className="submit-btn"
                />
              </form>
            </div>
            <div className="sm-links-block">
              <div></div>
              <div>
                <p>Follow us on</p>
                <div className="sm-links">
                  <div className="sm-link">
                    <a href="https://www.facebook.com">
                      <img src="icons/facebook.png" alt="Facebook" />
                    </a>
                  </div>
                  <div className="sm-link">
                    <a href="https://www.instagram.com" target="_blank">
                      <img src="icons/instagram.png" alt="Instagram" />
                    </a>
                  </div>
                  <div className="sm-link">
                    <a href="https://www.tiktok.com" target="_blank">
                      <img src="icons/tiktok.png" alt="Tiktok" />
                    </a>
                  </div>
                  <div className="sm-link">
                    <a href="https://www.youtube.com" target="blank">
                      <img src="icons/youtube.png" alt="Youtube " />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
