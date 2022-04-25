import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";
import { SocialIcon } from "react-social-icons";
import { selectToken } from "../../store/user/selectors";
import "./styles.css";
// import { CgProfile } from "react-icons/cg/index";

const SocialMediaIcons = () => {
  const token = useSelector(selectToken);

  return (
    <div className="social-media-container">
      {token ? (
        <CgProfile
          style={{
            color: "white",
            width: "30px",
            height: "30px",
            margin: "auto",
          }}
        />
      ) : (
        ""
      )}
      <span
        style={{
          borderRight: "1px dashed #fff",
          marginLeft: "20px",
          marginRight: "20px",
        }}
      />
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
