import { Container, Navbar } from "react-bootstrap";
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
      <Preview />
      <div className="home-page-container">
        <div>Welcome from random details</div>
        <div className="game-containers">
          <Games />
        </div>
        <div>Hello from random news</div>
      </div>
    </div>
  );
};

export default HomePage;
