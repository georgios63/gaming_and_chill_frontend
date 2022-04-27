import { Alert } from "react-bootstrap";
import { Container, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CategoryByBrowser from "../../components/CategoryByBrowser";
import CategoryByPc from "../../components/CategoryByPc";
import CategoryByReleaseDate from "../../components/CategoryByReleaseDate";
import Games from "../../components/Games";
import Preview from "../../components/Preview";
import SearchedGames from "../../components/SearchedGames";
import { successAlert } from "../../store/alert/actions";
import { successfulAlert } from "../../store/alert/selectors";
import "./styles.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const sucess = useSelector(successfulAlert);

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
            {sucess ? (
              <Alert
                onClose={() => dispatch(successAlert)}
                variant="success"
                style={{ width: "50%", alignSelf: "center" }}
              >
                <Alert.Heading>Success!</Alert.Heading>
                <p>You succesfuly added a game in your library!</p>
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
