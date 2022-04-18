import { Container, Navbar } from "react-bootstrap";
import "./styles.css";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <Container>
        <Navbar></Navbar>
      </Container>
      <div>Welcome from HomePage</div>
      <div className="game-containers">{/* <Games /> */}</div>
    </div>
  );
};

export default HomePage;
