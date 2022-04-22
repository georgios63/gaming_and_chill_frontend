import { Form, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchGamesBySearchBar } from "../../store/games/actions";
import { allGames } from "../../store/games/selectors";
import "./styles.css";

const SearchBar = ({ placeholder, type, gameselector, ...props }) => {
  const games = useSelector(allGames);
  const dispatch = useDispatch();

  const filterHandler = (eventValue) => {
    const newFilter = games.filter((game) => {
      return game.title.toLowerCase().includes(eventValue.toLowerCase());
    });

    if (eventValue === "") {
      dispatch(fetchGamesBySearchBar(games));
    } else {
      dispatch(fetchGamesBySearchBar(newFilter));
    }
  };

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
          gameselector={gameselector}
          placeholder={placeholder}
          aria-label="Search"
          onChange={(event) => filterHandler(event.target.value)}
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
