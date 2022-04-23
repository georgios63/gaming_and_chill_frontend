import { Form, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchGamesByAdvancedFilterSearchBar,
  fetchGamesBySearchBar,
} from "../../store/games/actions";
import { allGames } from "../../store/games/selectors";
import "./styles.css";

const SearchBar = ({ placeholder, type, gameselector, ...props }) => {
  const games = useSelector(allGames);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const filterHandler = (eventValue) => {
    const newFilter = games.filter((game) => {
      return game.title.toLowerCase().includes(eventValue.toLowerCase());
    });

    if (eventValue === "") {
      dispatch(fetchGamesBySearchBar([]));
      dispatch(fetchGamesByAdvancedFilterSearchBar([]));
      return;
    }

    if (newFilter.length !== 0 && newFilter.length <= 7) {
      dispatch(fetchGamesByAdvancedFilterSearchBar(newFilter));
    }

    dispatch(fetchGamesBySearchBar(newFilter));
  };

  const navigateTo = (event) => {
    event.preventDefault();
    navigate("/searchPage");
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
      <Form className="search-bar-container" onSubmit={navigateTo}>
        <FormControl
          type={type}
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
