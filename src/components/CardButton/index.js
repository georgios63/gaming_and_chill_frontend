import { useEffect } from "react";
import { OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { previewd } from "../../store/preview/actions";

const CardButton = ({ children, title, input, id, ...props }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(previewd(`https://www.mmobomb.com/g/${id}/videoplayback.webm`));
  };

  useEffect(() => {}, []);

  return (
    <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 100 }}
      overlay={<Tooltip id="button-tooltip">{title}</Tooltip>}
    >
      <Button
        variant="outline-secondary"
        href={input}
        onClick={handleClick}
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
