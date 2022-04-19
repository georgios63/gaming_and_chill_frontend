import "./styles.css";
import React, { useEffect, useRef, useState } from "react";
import { fetchGames } from "../../store/games/actions";
import { allGames, gamesLoading } from "../../store/games/selectors";
import { useDispatch, useSelector } from "react-redux";
import { IconContext } from "react-icons";
import { AiOutlineStar, AiOutlineDownload } from "react-icons/ai";
import { OverlayTrigger, Tooltip, Button } from "react-bootstrap";

const Games = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const dispatch = useDispatch();
  const loading = useSelector(gamesLoading);
  const games = useSelector(allGames);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Add to your library
    </Tooltip>
  );

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
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 100 }}
                    overlay={renderTooltip}
                  >
                    <Button
                      variant="secondary"
                      style={{
                        alignSelf: "center",
                        border: "1px solid black",
                        borderRadius: "50px",
                        margin: "15px",
                        width: "50px",
                        height: "50px",
                      }}
                    >
                      +
                    </Button>
                  </OverlayTrigger>
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
