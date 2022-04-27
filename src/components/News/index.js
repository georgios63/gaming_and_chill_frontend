import "./styles.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../store/news/actions";
import { allNews, newsLoading } from "../../store/news/selectors";

const News = () => {
  const dispatch = useDispatch();
  const loading = useSelector(newsLoading);
  const news = useSelector(allNews);

  useEffect(() => {
    dispatch(fetchNews);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="news-container">
      <div
        style={{
          margin: "40px",
          display: "flex",
          justifyContent: "center",
          textShadow: "1px 1px 5px white",
        }}
      >
        <h1>Latest News</h1>
      </div>
      <div className="news-data-container">
        {!loading
          ? news.map((news) => (
              <div
                style={{
                  border: "1px solid rgba(185, 180, 180, 0.158)",
                  margin: "5px",
                }}
              >
                <p
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    maxWidth: "570px",
                  }}
                >
                  {news.title}
                </p>
                <div className="news-details-container">
                  <img
                    style={{ marginLeft: "5px" }}
                    alt=""
                    src={news.thumbnail}
                  />
                  <div>
                    <p style={{ maxWidth: "350px", margin: "10px" }}>
                      {news.short_description}
                    </p>
                    <p style={{ margin: "20px" }}>
                      Click<a href={news.article_url}> HERE </a> to see the full
                      article
                    </p>
                  </div>
                </div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default News;

//  <p dangerouslySetInnerHTML={{ __html: news.article_content }}></p>;
