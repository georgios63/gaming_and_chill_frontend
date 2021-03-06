import { Container, Navbar } from "react-bootstrap";
import CategoryByBrowser from "../../components/CategoryByBrowser";
import CategoryByPc from "../../components/CategoryByPc";
import CategoryByReleaseDate from "../../components/CategoryByReleaseDate";
import Games from "../../components/Games";
import Preview from "../../components/Preview";
import SearchedGames from "../../components/SearchedGames";
import "./styles.css";

const HomePage = () => {
  return (
    <div>
      <Container className="mini-navbar-container">
        <Navbar variant="dark">
          <Navbar.Brand></Navbar.Brand>
        </Navbar>
      </Container>
      <div className="home-page-container">
        <div className="game-containers">
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
