import "./styles.css";
import React, { useEffect, useRef, useState } from "react";
import { fetchGames } from "../../store/games/actions";
import { allGames, gamesLoading } from "../../store/games/selectors";
import { useDispatch, useSelector } from "react-redux";
import { IconContext } from "react-icons";
import { AiOutlineStar, AiOutlineDownload } from "react-icons/ai";
import { IoIosAdd } from "react-icons/io";
import { RiComputerLine } from "react-icons/ri";
import { OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import CardButton from "../CardButton";
import { Link } from "react-router-dom";

const Games = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

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

                  <CardButton title="Click to see a preview">
                    <RiComputerLine
                      style={{
                        color: "white",
                        margin: "2px",
                        width: "30px",
                        height: "30px",
                      }}
                    />
                  </CardButton>

                    <CardButton title="Click to go to the download page" input={game.game_url}>
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
          : "loading"}
      </div>
      <div>Hello from second category</div>
      <div>Hello from third category</div>
    </div>
  );
};

export default Games;
