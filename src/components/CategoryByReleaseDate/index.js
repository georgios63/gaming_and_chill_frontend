import "./styles.css";
import React, { useEffect } from "react";
import {
  gamesLoading,
  allGamesSortedByReleaseDate,
} from "../../store/games/selectors";
import { fetchGamesSortedByReleaseDate } from "../../store/games/actions";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineDownload } from "react-icons/ai";
import { IoIosAdd } from "react-icons/io";
import { RiComputerLine } from "react-icons/ri";
import CardButton from "../CardButton";
import { previewd } from "../../store/preview/actions";

const CategoryByReleaseDate = () => {
  const dispatch = useDispatch();
  const loading = useSelector(gamesLoading);
  const sortedByReleaseDate = useSelector(allGamesSortedByReleaseDate);

  const handleClick = (id) => {
    dispatch(previewd(`https://www.mmobomb.com/g/${id}/videoplayback.webm`));
  };

  useEffect(() => {
    dispatch(fetchGamesSortedByReleaseDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchGamesSortedByReleaseDate]);

  return (
    <div>
      <h3>New Releases</h3>
      <div className="card-games">
        {!loading
          ? sortedByReleaseDate.map((game) => (
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

export default CategoryByReleaseDate;
