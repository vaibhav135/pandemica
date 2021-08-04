import React, { useState, useEffect } from "react";
import ShowNews from "./show_news";
import "../Style/news.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const News = () => {
  const [newsObj, setNewsObj] = useState<any>({});
  const [topHeadlinesObj, setTopHeadlinesObj] = useState<any>({});
  const [showNews, setShowNews] = useState(true);
  const [showTopHeadlines, setShowTopHeadlines] = useState(false);

  useEffect(() => {
    callNewsApi();
    callTopHeadlinesApi();
  }, []);

  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const pageSize = 10;
  const newsUrl = `https://newsapi.org/v2/everything?q=covid OR covid-19&language=en&apiKey=${apiKey}`;
  const topHeadlinesUrl = `https://newsapi.org/v2/top-headlines?q=covid OR covid-19&pageSize=${pageSize}&language=en&apiKey=${apiKey}`;

  const callNewsApi = async () => {
    const res = await fetch(newsUrl)
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error: ", error);
      });
    setNewsObj(res);
  };

  const callTopHeadlinesApi = async () => {
    const res = await fetch(topHeadlinesUrl)
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error: ", error);
      });
    setTopHeadlinesObj(res);
  };

  // newsObj['articles'] => author, content, description, publishedAr, source => (id, name), title, url , urlToImage

  if (
    Object.keys(newsObj).length > 0 &&
    Object.keys(topHeadlinesObj).length > 0
  ) {
    //console.log("read the news");
    //console.log(newsObj["articles"]);
    return (
      <div className="parentNewsBox">
        <div>
          <h2 onClick={() => setShowTopHeadlines(!showTopHeadlines)}>
            {" "}
            Top Headlines {showTopHeadlines ? (
              <FaAngleUp />
            ) : (
              <FaAngleDown />
            )}{" "}
          </h2>
          <ul id="news_ul">
            {showTopHeadlines ? (
              topHeadlinesObj["articles"].map((e: any, index: number) => (
                <li
                  id="headlines_li"
                  key={index}
                  onClick={() => window.open(e["url"])}
                >
                  {" "}
                  {e["title"]}
                </li>
              ))
            ) : (
              <> </>
            )}{" "}
          </ul>{" "}
        </div>
        <div>
          <h2 id="news_h2" onClick={() => setShowNews(!showNews)}>
            {" "}
            Articles {showNews ? <FaAngleUp /> : <FaAngleDown />}
          </h2>
          <ul id="news_ul">
            {showNews ? (
              newsObj["articles"].map((e: any, index: number) => (
                <ShowNews key={index} indexKey={index} news={e} />
              ))
            ) : (
              <> </>
            )}{" "}
          </ul>{" "}
        </div>
        <footer></footer>
      </div>
    );
  } else {
    return <h2> fetching the news.... </h2>;
  }
  //console.log("news Object: " + Object.entries(newsObj).map((e: any) => e));
};

export default News;
