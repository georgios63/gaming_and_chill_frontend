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
      <div>
        <h1>News</h1>
      </div>
      <div>
        {!loading
          ? news.map((news) => (
              <div>
                <img alt="" src={news.thumbnail} />
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default News;
