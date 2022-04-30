import { useEffect, useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { IoIosAdd } from "react-icons/io";
import { ImArrowRight } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CardButton from "../../components/CardButton";
import Preview from "../../components/Preview";
import { addGamesToLibrary, fetchGameById } from "../../store/games/actions";
import {
  aGameById,
  allGameIdsInLibrary,
  gamesLoading,
} from "../../store/games/selectors";
import { previewd } from "../../store/preview/actions";
import "./styles.css";
import { Table } from "react-bootstrap";
import { successAlert, warningAlert } from "../../store/alert/actions";
import { selectToken } from "../../store/user/selectors";

const DetailsPage = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const loading = useSelector(gamesLoading);
  const gameById = useSelector(aGameById);
  const libraryItems = useSelector(allGameIdsInLibrary);
  const [showVideo, setVideo] = useState(false);

  const { id } = useParams();
  const video = document.querySelector("video");

  const playVideo = () => {
    video.play();
    setVideo(!showVideo);
  };
  const pauseVideo = () => {
    video.pause();
    setVideo(!showVideo);
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
      window.scrollTo(0, 0);
      dispatch(warningAlert);
      setTimeout(() => {
        dispatch(warningAlert);
      }, "3000");
    }
  };

  useEffect(() => {
    dispatch(fetchGameById(id));
    dispatch(previewd(`https://www.mmobomb.com/g/${id}/videoplayback.webm`));
  }, [dispatch, id]);
  return (
    <div className="detail-page-container">
      <div className="preview-video">
        <h1>{gameById.title}</h1>
        <Preview
          onMouseOver={() => playVideo()}
          onMouseLeave={() => pauseVideo()}
          width="400"
          controls={false}
          autoPlay={false}
          poster={gameById.thumbnail}
          loop={true}
          controlsList={"nodownload"}
        />

        <div className="image-container">
          {!loading && gameById && gameById.screenshots
            ? gameById.screenshots.map((screenshot) => (
                <a key={screenshot.id} href={screenshot.image} target="__blank">
                  <img
                    style={{ width: "90px", height: "80px", margin: "5px" }}
                    src={screenshot.image}
                    alt="img"
                  />
                </a>
              ))
            : ""}
        </div>

        <div className="button-container">
          <CardButton
            title="Add to library"
            variant="outline-secondary"
            clickHandler={() => addToLibrary(gameById.id)}
            style={{ borderRadius: "" }}
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
            input={gameById.game_url}
            style={{ borderRadius: "" }}
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

      <div className="arrow-icon">
        <ImArrowRight
          style={{
            color: "white",
            width: "30px",
            height: "30px",
          }}
        />
      </div>

      <div className="details-container">
        {!loading && gameById ? (
          // <div className="">{gameById.description.replace(/<[^>]*>/gim, "")}</div>
          <div className="details">
            <h3>Details</h3>
            <p dangerouslySetInnerHTML={{ __html: gameById.description }}></p>
          </div>
        ) : (
          ""()
        )}
        <Table className="aditional-info" bordered size="sm" variant="dark">
          <tbody>
            <tr>
              <td colSpan={2}>Aditional Information</td>
            </tr>
            <tr>
              <td>Genre</td>
              <td>{gameById.genre}</td>
            </tr>
            <tr>
              <td>Platform</td>
              <td>{gameById.platform}</td>
            </tr>
            <tr>
              <td>Publisher</td>
              <td>{gameById.publisher}</td>
            </tr>
            <tr>
              <td>Developer</td>
              <td>{gameById.developer}</td>
            </tr>
            <tr>
              <td>Release Date</td>
              <td>{gameById.release_date}</td>
            </tr>
          </tbody>
        </Table>

        {!loading && gameById && gameById.minimum_system_requirements ? (
          <Table
            className="minimum-requirements"
            bordered
            size="sm"
            variant="dark"
          >
            <tbody>
              <tr>
                <td colSpan={2}>System Requirements</td>
              </tr>
              <tr>
                <td>Os</td>
                <td>{gameById.minimum_system_requirements.os}</td>
              </tr>
              <tr>
                <td>Processor</td>
                <td>{gameById.minimum_system_requirements.processor}</td>
              </tr>
              <tr>
                <td>Memory</td>
                <td>{gameById.minimum_system_requirements.memory}</td>
              </tr>
              <tr>
                <td>Graphics</td>
                <td>{gameById.minimum_system_requirements.graphics}</td>
              </tr>
              <tr>
                <td>Storage</td>
                <td>{gameById.minimum_system_requirements.storage}</td>
              </tr>
            </tbody>
          </Table>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default DetailsPage;
