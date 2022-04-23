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
    <div className="details-container">
      <div style={{ margin: "10px" }}>
        <Preview />
      </div>
      {!loading ? (
        <div>{gameById.description.replace(/<[^>]*>/gim, "")}</div>
      ) : (
        // <div dangerouslySetInnerHTML={{ __html: gameById.description }}></div>
        ""
      )}
    </div>
  );
};

export default DetailsPage;
