import "./styles.css";
import React, { useEffect } from "react";
import { fetchGames } from "../../store/games/actions";
import { allGames, gamesLoading } from "../../store/games/selectors";
import { useDispatch, useSelector } from "react-redux";
import { IconContext } from "react-icons";
import { AiOutlineStar, AiOutlineDownload } from "react-icons/ai";
import { RiAddFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Games = () => {
  const dispatch = useDispatch();
  const loading = useSelector(gamesLoading);
  const games = useSelector(allGames);

  useEffect(() => {
    dispatch(fetchGames);
  }, [fetchGames]);

  return (
    <div>
      <div className="card-games">
        {!loading
          ? games.map((game) => (
              <div className="card-game" key={game.id}>
                <img alt="" src={game.thumbnail} />
                <div className="icon-container">
                  <Button className="add-to-library-button">+</Button>
                  <IconContext.Provider
                    value={{ className: "card-icons", size: 30 }}
                  >
                    <a href={game.game_url}>
                      <AiOutlineDownload />
                    </a>
                    <AiOutlineStar />
                  </IconContext.Provider>
                </div>
              </div>
            ))
          : "loading"}
      </div>
      <div>Hello from second category</div>
      <div>Hello from third category</div>
    </div>
  );
};

export default Games;
