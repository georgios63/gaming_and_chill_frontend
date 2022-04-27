import { Alert } from "react-bootstrap";
import { Container, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import CategoryByBrowser from "../../components/CategoryByBrowser";
import CategoryByPc from "../../components/CategoryByPc";
import CategoryByReleaseDate from "../../components/CategoryByReleaseDate";
import Games from "../../components/Games";
import Preview from "../../components/Preview";
import SearchedGames from "../../components/SearchedGames";
import { successfullAlert, warningAlert } from "../../store/alert/selectors";
import "./styles.css";

const HomePage = () => {
  const success = useSelector(successfullAlert);
  const warning = useSelector(warningAlert);

  return (
    <div>
      <Container className="mini-navbar-container">
        <Navbar variant="dark">
          <Navbar.Brand></Navbar.Brand>
        </Navbar>
      </Container>
      <div className="home-page-container">
        <div className="game-containers">
          <div
            className="alert-box"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {success ? (
              <Alert
                variant="success"
                style={{ width: "50%", alignSelf: "center" }}
              >
                <Alert.Heading>Success!</Alert.Heading>
                <p>You succesfuly added a game in your library!</p>
              </Alert>
            ) : warning ? (
              <Alert
                variant="danger"
                style={{ width: "50%", alignSelf: "center" }}
              >
                <Alert.Heading>Warning!</Alert.Heading>
                <p> Oh snap!Game is already in your library!</p>
              </Alert>
            ) : (
              ""
            )}
          </div>
          <Preview
            height="500"
            autoPlay={true}
            loop={true}
            controls={true}
            controlsList={"nodownload"}
          />
          <SearchedGames />
          <Games />
          <CategoryByReleaseDate />
          <CategoryByBrowser />
          <CategoryByPc />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
