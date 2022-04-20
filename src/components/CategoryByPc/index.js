import React, { useEffect } from "react";
import {
  gamesLoading,
  allGamesByCategoryPc,
} from "../../store/games/selectors";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineDownload } from "react-icons/ai";
import { IoIosAdd } from "react-icons/io";
import { RiComputerLine } from "react-icons/ri";
import CardButton from "../CardButton";
import { fetchGamesByCategoryPc } from "../../store/games/actions";
import { previewd } from "../../store/preview/actions";

const CategoryByPc = () => {
  const dispatch = useDispatch();
  const loading = useSelector(gamesLoading);
  const gamesByCategoryPc = useSelector(allGamesByCategoryPc);

  const handleClick = (id) => {
    dispatch(previewd(`https://www.mmobomb.com/g/${id}/videoplayback.webm`));
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
          : "loading"}
      </div>
    </div>
  );
};

export default CategoryByPc;
