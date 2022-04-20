import { Container, Navbar } from "react-bootstrap";
import CategoryByBrowser from "../../components/CategoryByBrowser";
import CategoryByPc from "../../components/CategoryByPc";
import CategoryByReleaseDate from "../../components/CategoryByReleaseDate";
import Games from "../../components/Games";
import Preview from "../../components/Preview";
import "./styles.css";

const HomePage = () => {
  return (
    <div>
      <Container className="mini-navbar-container">
        <Navbar variant="dark">
          <Navbar.Brand>Hello from Mini navbar</Navbar.Brand>
        </Navbar>
      </Container>
      <div className="home-page-container">
        <div className="game-containers">
          <Preview />
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
