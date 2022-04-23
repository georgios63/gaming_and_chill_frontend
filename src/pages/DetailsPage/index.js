import { useEffect, useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { IoIosAdd } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CardButton from "../../components/CardButton";
import Preview from "../../components/Preview";
import { fetchGameById } from "../../store/games/actions";
import { aGameById, gamesLoading } from "../../store/games/selectors";
import { previewd } from "../../store/preview/actions";
import "./styles.css";

const DetailsPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(gamesLoading);
  const gameById = useSelector(aGameById);
  const [showVideo, setVideo] = useState(false);

  const { id } = useParams();
  const video = document.querySelector("video");

  const playVideo = () => {
    video.play();
    setVideo(!showVideo);
    console.log(showVideo);
  };
  const pauseVideo = () => {
    video.pause();
    setVideo(!showVideo);
    console.log(showVideo);
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
        <div className="button-container">
          <CardButton
            title="Add to library"
            variant="outline-secondary"
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
        <div className="aditional-info">
          <h3>Aditional Information</h3>
          <span className="text-container">Genre: {gameById.genre}</span>
          <br />
          <span>Platform: {gameById.platform}</span>
          <br />
          <span>Publisher: {gameById.publisher}</span>
          <br />
          <span>Developer: {gameById.developer}</span>
          <br />
          <span>Release date: {gameById.release_date}</span>
        </div>

        {!loading && gameById && gameById.minimum_system_requirements ? (
          <div className="minimum-requirements">
            <h3>System Requirements</h3>
            <span>Os: {gameById.minimum_system_requirements.os}</span>
            <br />
            <span>
              Processor: {gameById.minimum_system_requirements.processor}
            </span>
            <br />
            <span>Memory: {gameById.minimum_system_requirements.memory}</span>
            <br />
            <span>
              Graphics: {gameById.minimum_system_requirements.graphics}
            </span>
            <br />
            <span>Storage: {gameById.minimum_system_requirements.storage}</span>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default DetailsPage;
