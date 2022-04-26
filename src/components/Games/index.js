import "./styles.css";
import { Alert, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { fetchGames } from "../../store/games/actions";
import { allGames, gamesLoading } from "../../store/games/selectors";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineDownload } from "react-icons/ai";
import { IoIosAdd } from "react-icons/io";
import { RiComputerLine } from "react-icons/ri";
import CardButton from "../CardButton";
import { previewd } from "../../store/preview/actions";
import { addGamesToLibrary } from "../../store/games/actions";

import { Link } from "react-router-dom";

const Games = () => {
  const dispatch = useDispatch();
  const loading = useSelector(gamesLoading);
  const games = useSelector(allGames);
  const [showAlert, setshowAlert] = useState(false);

  const handleClick = (id) => {
    window.scrollTo(0, 0);
    dispatch(previewd(`https://www.mmobomb.com/g/${id}/videoplayback.webm`));
  };

  const addToLibrary = (id) => {
    setshowAlert(true);
    dispatch(addGamesToLibrary(id));
  };

  useEffect(() => {
    dispatch(fetchGames);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchGames]);

  return (
    <div>
      {/* <Alert show={showAlert} variant="success" style={{ width: "100%" }}>
        <Alert.Heading>Success</Alert.Heading>
        <p>Added on library!</p>
        <hr />
        <div className="alert-msg">
          <Button onClick={() => setshowAlert(false)} variant="outline-success">
            Close this alert
          </Button>
        </div>
      </Alert> */}
      <h3>All Games</h3>
      <div className="card-games">
        {!loading
          ? games.map((game) => (
              <div className="card-game" key={game.id}>
                <Link
                  className="link-container"
                  to={{ pathname: `/details/${game.id}` }}
                >
                  <img alt="" src={game.thumbnail} />
                </Link>
                <div className="icon-container">
                  <CardButton
                    title="Click to see a preview"
                    variant="outline-secondary"
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
                    title="Add to library"
                    variant="outline-secondary"
                    clickHandler={() => addToLibrary(game.id)}
                  >
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
                    title="Click to go to the download page"
                    variant="outline-secondary"
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
          : ""}
      </div>
    </div>
  );
};

export default Games;
