import "./styles.css";
import React, { useEffect } from "react";
import { fetchGames } from "../../store/games/actions";
import { allGamesBySearchBar, gamesLoading } from "../../store/games/selectors";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineDownload } from "react-icons/ai";
import { IoIosAdd } from "react-icons/io";
import { RiComputerLine } from "react-icons/ri";
import CardButton from "../CardButton";
import { previewd } from "../../store/preview/actions";
import { Link } from "react-router-dom";

const Games = () => {
  const dispatch = useDispatch();
  const loading = useSelector(gamesLoading);
  const searchedGames = useSelector(allGamesBySearchBar);

  const handleClick = (id) => {
    window.scrollTo(0, 0);
    dispatch(previewd(`https://www.mmobomb.com/g/${id}/videoplayback.webm`));
  };

  useEffect(() => {
    dispatch(fetchGames);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchGames]);

  return (
    <div>
      <h3>All Games</h3>
      <div className="card-games">
        {!loading && searchedGames.length !== 0 ? (
          searchedGames.map((game) => (
            <div className="card-game" key={game.id}>
              <Link
                className="link-container"
                to={{ pathname: `/details/${game.id}` }}
              >
                <img alt="" src={game.thumbnail} />
              </Link>
              <div className="icon-container">
                <CardButton title="Add to library">
                  <IoIosAdd
                    style={{
                      color: "white",
                      margin: "2px",
                      width: "30px",
                      height: "30px",
                    }}
                  />
                </CardButton>

                <CardButton
                  title="Click to see a preview"
                  clickHandler={() => handleClick(game.id)}
                >
                  <RiComputerLine
                    style={{
                      color: "white",
                      margin: "2px",
                      width: "30px",
                      height: "30px",
                    }}
                  />
                </CardButton>

                <CardButton
                  title="Click to go to the download page"
                  input={game.game_url}
                >
                  <AiOutlineDownload
                    style={{
                      color: "white",
                      width: "30px",
                      height: "30px",
                    }}
                  />
                </CardButton>
              </div>
            </div>
          ))
        ) : (
          <h3>Search result: Sorry, no games found!</h3>
        )}
      </div>
    </div>
  );
};

export default Games;
