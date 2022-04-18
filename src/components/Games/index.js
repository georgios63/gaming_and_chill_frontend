import "./styles.css";
import React, { useEffect } from "react";
import { fetchGames } from "../../store/games/actions";
import { allGames, gamesLoading } from "../../store/games/selectors";
import { useDispatch, useSelector } from "react-redux";

const Games = () => {
  const dispatch = useDispatch();
  const loading = useSelector(gamesLoading);
  const games = useSelector(allGames);

  useEffect(() => {
    dispatch(fetchGames);
  }, [fetchGames]);

  return (
    <div>
      <div>
        {!loading
          ? games.map((game) => <img alt="" src={game.thumbnail} />)
          : "loading"}
      </div>
      <div>Hello from second category</div>
      <div>Hello from third category</div>
    </div>
  );
};

export default Games;
