import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchedGames from "../../components/SearchedGames";
import { fetchGames } from "../../store/games/actions";
import {
  allGamesByAdvancedSearchBar,
  gamesLoading,
} from "../../store/games/selectors";
import "./styles.css";

const SearchPage = () => {
  const loading = useSelector(gamesLoading);
  const advancedSearchBar = useSelector(allGamesByAdvancedSearchBar);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGames);
  }, [dispatch]);

  return (
    <div>
      <div className="search-page-container">
        <div className="game-containers">
          <h3>Search result: Search for a game...</h3>
          <div className="linked-container">
            <p style={{ margin: "20px" }}>Did you mean: </p>
            {!loading && advancedSearchBar.length > 0
              ? advancedSearchBar.map((game) => (
                  <Link
                    style={{ margin: "10px" }}
                    to={{ pathname: `/details/${game.id}` }}
                    key={game.id}
                  >
                    <span>{game.title}</span>
                  </Link>
                ))
              : ""}
          </div>
          <SearchedGames />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
