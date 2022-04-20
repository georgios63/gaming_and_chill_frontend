import { Form, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchGamesBySearchBar } from "../../store/games/actions";
import { allGames } from "../../store/games/selectors";
import "./styles.css";

const SearchBar = ({ ...props }) => {
  const dispatch = useDispatch();
  const games = useSelector(allGames);

  const filterHandler = (event) => {
    const newFilter = games.filter((value) => {
      return value.title.toLowerCase().includes(event.toLowerCase());
    });

    if (event === "") {
      dispatch(fetchGamesBySearchBar([]));
    } else {
      dispatch(fetchGamesBySearchBar(newFilter));
    }
  };

  return (
    <div>
      <Form className="search-bar-container">
        <FormControl
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(event) => filterHandler(event.target.value)}
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
