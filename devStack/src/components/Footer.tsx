import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerTop">
        <div className="footerBrand">
          <div className="footerLogo">
            <span className="footerLogoIcon">DS</span>
            <span className="footerLogoText">
              Dev <span className="highlight">Stack</span>
            </span>
          </div>
          <p className="footerTagline">
            Curated tools, technologies, and resources for developers
            building modern software.
          </p>
          <div className="footerSocials">
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>

        <div className="footerColumn">
          <h4>Product</h4>
          <a href="#">Home</a>
          <a href="#">Technologies</a>
          <a href="#">Projects</a>
        </div>

        <div className="footerColumn">
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Careers</a>
        </div>

        <div className="footerColumn">
          <h4>Legal</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>

      <div className="footerDivider"></div>

      <div className="footerBottom">
        <span>© 2026 Dev Stack. All rights reserved.</span>
        <div className="footerBottomLinks">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}