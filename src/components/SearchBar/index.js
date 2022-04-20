import { useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import { useSelector } from "react-redux";
import { allGames } from "../../store/games/selectors";
import "./styles.css";

const SearchBar = ({ ...props }) => {
  const [filteredData, setfilteredData] = useState([]);
  const games = useSelector(allGames);

  const filterHandler = (event) => {
    const searchGame = event.target.value;
    const newFilter = games.filter((value) => {
      return value.title.toLowerCase().includes(searchGame.toLowerCase());
    });

    if (searchGame === "") {
      setfilteredData([]);
    } else {
      setfilteredData(newFilter);
    }
  };

  console.log(filteredData);
  return (
    <div>
      <Form className="search-bar-container">
        <FormControl
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={filterHandler}
          style={{
            border: "1px solid rgba(185, 180, 180, 0.158)",
            borderRadius: "50px",
            backgroundColor: "black",
            color: "white",
            marginLeft: "20px",
            width: "200px",
            ...props.style,
          }}
        />
      </Form>
    </div>
  );
};

export default SearchBar;
