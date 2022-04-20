import "./styles.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { defaultPreview } from "../../store/preview/selectors";
import { previewd } from "../../store/preview/actions";

const Preview = () => {
  const dispatch = useDispatch();
  const prev = useSelector(defaultPreview);

  useEffect(() => {
    dispatch(previewd);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [previewd]);

  return (
    <div className="preview-container">
      <video
        controls
        width="700"
        key={prev}
        autoPlay={true}
        loop={true}
        controlsList="nodownload"
      >
        <source src={prev} type="video/webm" />
        <source src={prev} type="video/mp4" />
      </video>
    </div>
  );
};

export default Preview;
