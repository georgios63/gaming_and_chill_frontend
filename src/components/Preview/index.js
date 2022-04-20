import "./styles.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { defaultPreview, loadingPreview } from "../../store/preview/selectors";
import { previewd } from "../../store/preview/actions";

const Preview = () => {
  const dispatch = useDispatch();
  const loading = useSelector(loadingPreview);
  const prev = useSelector(defaultPreview);

  useEffect(() => {
    dispatch(previewd);
  }, [previewd]);

  useEffect(() => {
    console.log("prev", prev);
  }, [prev]);

  return (
    <div className="preview-container">
      <video controls width="700" key={prev} autoPlay={true} loop={true}>
        <source src={prev} type="video/webm" />

        {/* {!loading ? <source src={prev} type="video/webm" /> : "loading"} */}
      </video>
    </div>
  );
};

export default Preview;
