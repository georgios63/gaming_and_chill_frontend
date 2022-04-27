import { useEffect } from "react";
import { TiDelete } from "react-icons/ti";
import { GiClick } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import CardButton from "../../components/CardButton";
import News from "../../components/News";
import Preview from "../../components/Preview";
import {
  deleteLibraryItem,
  fetchGamesInLibrary,
} from "../../store/games/actions";
import { gamesLoading, libraryGames } from "../../store/games/selectors";
import "./styles.css";
import { Link } from "react-router-dom";

const UserPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(gamesLoading);
  const library = useSelector(libraryGames);
  const handleClick = (id) => {
    dispatch(deleteLibraryItem(id));
  };

  useEffect(() => {
    dispatch(fetchGamesInLibrary());
  }, [dispatch]);
  return (
    <div className="user-page-container">
      <div className="user-library">
        {!loading
          ? library.map((game) => (
              <div key={game.id} className="library-card-container">
                <img alt="" src={game.thumbnail} />

                <div className="library-card">
                  <div>
                    <h3>{game.title}</h3>
                    <p>
                      {game.short_description.split(" ").slice(0, 10).join(" ")}
                      ...
                    </p>
                  </div>
                  <div className="library-btn-container">
                    <CardButton
                      variant={"outline-secondary"}
                      title="Click to remove the item from the library"
                      clickHandler={() => handleClick(game.id)}
                      style={{ margin: 0 }}
                    >
                      <TiDelete
                        style={{
                          color: "white",
                          width: "35px",
                          height: "35px",
                        }}
                      />
                    </CardButton>
                    <Link
                      className="link-container"
                      to={{ pathname: `/details/${game.id}` }}
                    >
                      <CardButton
                        variant={"outline-secondary"}
                        title="Click to learn more!"
                        style={{
                          margin: "0 20px 0 0",
                        }}
                      >
                        <GiClick
                          style={{
                            color: "white",
                            width: "30px",
                            height: "30px",
                          }}
                        />
                      </CardButton>
                    </Link>
                  </div>
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
