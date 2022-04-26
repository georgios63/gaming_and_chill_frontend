import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardButton from "../../components/CardButton";
import News from "../../components/News";
import Preview from "../../components/Preview";
import { fetchGamesInLibrary } from "../../store/games/actions";
import { gamesLoading, libraryGames } from "../../store/games/selectors";
import "./styles.css";

const UserPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(gamesLoading);
  const library = useSelector(libraryGames);

  useEffect(() => {
    dispatch(fetchGamesInLibrary());
  }, [dispatch]);
  return (
    <div className="user-page-container">
      <p>Hello from User profile page</p>
      <div className="user-library">
        {!loading
          ? library.map((game) => (
              <div className="library-card">
                <img key={game.id} alt="" src={game.thumbnail} />
                <div className="library-card-details">
                  <h3>{game.title}</h3>
                  <p>
                    {game.short_description.split(" ").slice(0, 10).join(" ")}
                    ...
                  </p>
                  <CardButton />
                  <p></p>
                </div>
              </div>
            ))
          : "loading"}
      </div>
      <div className="news-container">
        <News />
      </div>
    </div>
  );
};

export default UserPage;
