import { SocialIcon } from "react-social-icons";
import "./styles.css";
// import { CgProfile } from "react-icons/cg/index";

const SocialMediaIcons = () => {
  return (
    <div className="social-media-container">
      <SocialIcon
        style={{ height: 25, width: 25 }}
        url="https://twitter.com/"
      />
      <span
        style={{
          borderRight: "1px dashed #fff",
          marginLeft: "20px",
          marginRight: "20px",
        }}
      />
      <SocialIcon
        style={{ height: 25, width: 25 }}
        url="https://facebook.com/"
      />
      <span
        style={{
          borderRight: "1px dashed #fff",
          marginLeft: "20px",
          marginRight: "20px",
        }}
      />
      <SocialIcon
        style={{ height: 25, width: 25 }}
        url="https://instagram.com/"
      />
    </div>
  );
};

export default SocialMediaIcons;
