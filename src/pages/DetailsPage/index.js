import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Preview from "../../components/Preview";
import { fetchGameById } from "../../store/games/actions";
import { aGameById, gamesLoading } from "../../store/games/selectors";
import { previewd } from "../../store/preview/actions";
import "./styles.css";

const DetailsPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(gamesLoading);
  const gameById = useSelector(aGameById);

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchGameById(id));
    dispatch(previewd(`https://www.mmobomb.com/g/${id}/videoplayback.webm`));
  }, [dispatch, id]);
  return (
    <div className="details-page">
      <div className="preview-container">
        <Preview
          width="400"
          height="400"
          autoPlay={true}
          loop={true}
          controlsList={"nodownload"}
        />
        {<img src={gameById.thumbnail} alt="img" />}
      </div>

      <div className="details">
        {!loading && gameById ? (
          // <div className="">{gameById.description.replace(/<[^>]*>/gim, "")}</div>
          <div dangerouslySetInnerHTML={{ __html: gameById.description }}></div>
        ) : (
          ""()
        )}
      </div>
      <div className="latest-updates">
        <h3>Latest updates</h3>
      </div>
    </div>
  );
};

export default DetailsPage;
