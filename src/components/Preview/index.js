import "./styles.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { defaultPreview } from "../../store/preview/selectors";
import { previewd } from "../../store/preview/actions";

const Preview = ({
  className,
  onMouseOver,
  onMouseLeave,
  width,
  height,
  autoPlay,
  loop,
  controls,
  controlsList,
  poster,
}) => {
  const dispatch = useDispatch();
  const prev = useSelector(defaultPreview);

  useEffect(() => {
    dispatch(previewd);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [previewd]);

  return (
    <div className="preview-container">
      <video
        className={className}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        controls={controls}
        width={width}
        height={height}
        key={prev}
        autoPlay={autoPlay}
        loop={loop}
        poster={poster}
        controlsList={controlsList}
        muted="muted"
      >
        <source src={prev} type="video/webm" />
        <source src={prev} type="video/mp4" />
      </video>
    </div>
  );
};

export default Preview;
