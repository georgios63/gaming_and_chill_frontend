import { OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardButton = ({ children, title, input, ...props }) => {
  return (
    <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 100 }}
      overlay={<Tooltip id="button-tooltip">{title}</Tooltip>}
    >
      <Button
        variant="outline-secondary"
        href={input}
        style={{
          display: "flex",
          alignSelf: "center",
          border: "1px solid rgba(185, 180, 180, 0.158)",
          borderRadius: "50px",
          margin: "15px",
          width: "50px",
          height: "50px",
        }}
      >
        {children}
      </Button>
    </OverlayTrigger>
  );
};

export default CardButton;
