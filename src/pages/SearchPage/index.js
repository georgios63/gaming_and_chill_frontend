import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Preview from "../../components/Preview";
import SearchedGames from "../../components/SearchedGames";
import {
  allGamesByAdvancedSearchBar,
  gamesLoading,
} from "../../store/games/selectors";
import "./styles.css";

const SearchPage = () => {
  const loading = useSelector(gamesLoading);
  const advancedSearchBar = useSelector(allGamesByAdvancedSearchBar);

  return (
    <div>
      <div className="search-page-container">
        <div className="game-containers">
          <Preview />
          <h3>Search result: Search for a game...</h3>
          <div className="linked-container">
            <p style={{ margin: "20px" }}>Did you mean: </p>
            {!loading
              ? advancedSearchBar.map((game) => (
                  <Link
                    style={{ margin: "10px" }}
                    to={{ pathname: `/details/${game.id}` }}
                    key={game.id}
                  >
                    <span>{game.title}</span>
                  </Link>
                ))
              : "loading"}
          </div>
          <SearchedGames />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
