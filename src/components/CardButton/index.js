import { OverlayTrigger, Tooltip, Button } from "react-bootstrap";

const CardButton = ({ children, title, input, clickHandler, ...props }) => {
  const defaultValues = {
    display: "flex",
    alignSelf: "center",
    border: "1px solid rgba(185, 180, 180, 0.158)",
    borderRadius: "50px",
    margin: "15px",
    width: "50px",
    height: "50px",
  };

  return (
    <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 100 }}
      overlay={<Tooltip id="button-tooltip">{title}</Tooltip>}
    >
      <Button
        variant="outline-secondary"
        href={input}
        onClick={clickHandler}
        style={{
          ...defaultValues,
          ...props.style,
        }}
      >
        {children}
      </Button>
    </OverlayTrigger>
  );
};

export default CardButton;
