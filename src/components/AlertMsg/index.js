import "./styles.css";
import { successfullAlert, warningAlert } from "../../store/alert/selectors";
import { useSelector } from "react-redux";
import { Alert } from "react-bootstrap";
import { selectToken } from "../../store/user/selectors";

const AlertMsg = () => {
  const success = useSelector(successfullAlert);
  const warning = useSelector(warningAlert);
  const token = useSelector(selectToken);

  return (
    <div
      className="alert-box"
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {success && token ? (
        <Alert
          variant="success"
          style={{
            margin: "10px",
            width: "50%",
            alignSelf: "center",
            textAlign: "center",
          }}
        >
          <Alert.Heading>Success!</Alert.Heading>
          <p>You succesfuly added a game in your library!</p>
        </Alert>
      ) : warning ? (
        <Alert
          variant="danger"
          style={{
            margin: "10px",
            width: "50%",
            alignSelf: "center",
            textAlign: "center",
          }}
        >
          <Alert.Heading>Warning!</Alert.Heading>
          <p> Oh snap!Something went wrong!</p>
        </Alert>
      ) : (
        ""
      )}
    </div>
  );
};

export default AlertMsg;
