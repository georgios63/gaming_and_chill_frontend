import React, { useEffect, useState } from "react";
import {
  gamesLoading,
  allGamesByCategoryPc,
} from "../../store/games/selectors";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineDownload } from "react-icons/ai";
import { IoIosAdd } from "react-icons/io";
import { RiComputerLine } from "react-icons/ri";
import CardButton from "../CardButton";
import {
  addGamesToLibrary,
  fetchGamesByCategoryPc,
} from "../../store/games/actions";
import { previewd } from "../../store/preview/actions";
import { Link } from "react-router-dom";

const CategoryByPc = () => {
  const [showAlert, setshowAlert] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector(gamesLoading);
  const gamesByCategoryPc = useSelector(allGamesByCategoryPc);

  const handleClick = (id) => {
    window.scrollTo(0, 0);
    dispatch(previewd(`https://www.mmobomb.com/g/${id}/videoplayback.webm`));
  };

  const addToLibrary = (id) => {
    setshowAlert(true);
    dispatch(addGamesToLibrary(id));
  };

  useEffect(() => {
    dispatch(fetchGamesByCategoryPc);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchGamesByCategoryPc]);

  return (
    <div>
      <h3>Games by Platform: PC</h3>
      <div className="card-games">
        {!loading
          ? gamesByCategoryPc.map((game) => (
              <div className="card-game" key={game.id}>
                <Link
                  className="link-container"
                  to={{ pathname: `/details/${game.id}` }}
                >
                  <img alt="" src={game.thumbnail} />
                </Link>
                <div className="icon-container">
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
          : "loading"}
      </div>
    </div>
  );
};

export default CategoryByPc;
