import { Form, FormControl } from "react-bootstrap";
import "./styles.css";

const SearchBar = ({ placeholder, type, onChange, ...props }) => {
  const defaultValues = {
    border: "1px solid rgba(185, 180, 180, 0.158)",
    borderRadius: "50px",
    backgroundColor: "black",
    color: "white",
    marginLeft: "20px",
    width: "200px",
  };

  return (
    <div>
      <Form className="search-bar-container">
        <FormControl
          type={type}
          placeholder={placeholder}
          aria-label="Search"
          onChange={onChange}
          style={{
            ...defaultValues,
            ...props.style,
          }}
        />
      </Form>
    </div>
  );
};

export default SearchBar;
