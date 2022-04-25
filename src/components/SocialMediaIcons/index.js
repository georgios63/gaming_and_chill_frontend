import { Button } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";
import { SocialIcon } from "react-social-icons";
import { selectToken } from "../../store/user/selectors";
import { useNavigate } from "react-router-dom";

import "./styles.css";

const SocialMediaIcons = () => {
  const token = useSelector(selectToken);
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/userProfile");
  };

  return (
    <div className="social-media-container">
      {token ? (
        <Button
          variant="Dark"
          onClick={clickHandler}
          style={{ border: "none", borderRadius: "50px" }}
        >
          <CgProfile
            style={{
              color: "white",
              width: "30px",
              height: "30px",
              margin: "auto",
            }}
          />
        </Button>
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
        style={{ height: 25, width: 25, margin: 10 }}
        url="https://instagram.com/"
      />
    </div>
  );
};

export default SocialMediaIcons;
