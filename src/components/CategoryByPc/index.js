import React, { useEffect } from "react";
import {
  gamesLoading,
  allGamesByCategoryPc,
  allGameIdsInLibrary,
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
import { successAlert, warningAlert } from "../../store/alert/actions";
import { selectToken } from "../../store/user/selectors";

const CategoryByPc = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const loading = useSelector(gamesLoading);
  const gamesByCategoryPc = useSelector(allGamesByCategoryPc);
  const libraryItems = useSelector(allGameIdsInLibrary);

  const handleClick = (id) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    dispatch(previewd(`https://www.mmobomb.com/g/${id}/videoplayback.webm`));
  };

  const addToLibrary = (id) => {
    const result = libraryItems.every((game) => {
      if (game.gameId !== id) {
        return true;
      }
      return false;
    });

    if (result && token) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      dispatch(successAlert);
      dispatch(addGamesToLibrary(id));
      setTimeout(() => {
        dispatch(successAlert);
      }, "3000");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      dispatch(warningAlert);
      setTimeout(() => {
        dispatch(warningAlert);
      }, "3000");
    }
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
