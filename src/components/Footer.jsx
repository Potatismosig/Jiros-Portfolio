import "./responsiv.css"
import "./styles.css";

export default function Footer() {
  return (
    <>
    <div className="footer-content">
      </div>
      <div className="contains-copyright">
      <span className="footer-copyright"> ©
      <div> {new Date().getFullYear()} by Jirawan Sangthong </div> 
      </span>
      <div className="contains-contact-info">
      <div className="contact-location">
        <p><i class="fa-solid fa-map-location"></i> Location</p>
          <p>Stockholm</p>
        </div>
        <div className="contact-phone">
          <p> <i class="fa-solid fa-square-phone"></i> Phone</p>
          <a href="tel:123-456-7890">+46 73 862 28 25</a>
        </div>
        <div className="contact-email">
          <p><i class="fa-solid fa-square-envelope"></i> Email</p>
          <a href="mailto:jirawan.sangthong1995@gmail.com">Jirawan.sangthong1995@gmail.com</a>
        </div>
        </div>
      </div>
    </>
    );
}