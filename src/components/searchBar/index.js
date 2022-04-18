import { Button } from "react-bootstrap";
import { Form, FormControl } from "react-bootstrap";
import "./styles.css";

const SearchBar = () => {
  return (
    <div>
      <Form className="search-bar-container">
        <FormControl
          type="search"
          placeholder="Search"
          aria-label="Search"
          style={{
            borderRadius: "50px",
            backgroundColor: "black",
            color: "white",
            marginLeft: "20px",
            width: "200px",
          }}
        />
      </Form>
    </div>
  );
};

export default SearchBar;