import "./styles.css";
import SocialMedialIcons from "../../components/SocialMediaIcons";

const Footer = () => {
  return (
    <div className="footer-page-container">
      <div className="footer-container">
        <div className="row">
          {/* {column1} */}
          <div className="col">
            <h4>Gaming and Chill</h4>
            <ul className="list-unstyled">
              <li>+31 632578802</li>
              <li>Neverland, Happy place</li>
              <li>588 Mountain Behind Rocks</li>
            </ul>
          </div>
          {/* {column2} */}
          <div className="col">
            <h4>ABOUT THE PROJECT</h4>
            <ul className="list-unstyled">
              <li>
                API thanks to <a href="https://www.mmobomb.com/">Mmobomb</a>
              </li>
              <li>Feature Requests</li>
              <li>Help and support</li>
            </ul>
          </div>
          {/* {column3} */}
          <div className="col">
            <h4>INFORMATION</h4>
            <ul className="list-unstyled">
              <li>About us</li>
              <li>Customers</li>
              <li>Service</li>
            </ul>
          </div>
          <div className="col">
            <div className="row">
              <h4>SOCIAL MEDIA</h4>
              <SocialMedialIcons />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()}Gaming And Chill INC | All rights
            reserved | Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
