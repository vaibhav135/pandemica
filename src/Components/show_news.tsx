import React from "react";

const ShowNews = ({ indexKey, news }: { indexKey: number; news: any }) => {
  const openNews = () => {
    window.open(news["url"]);
  };

  return (
    <>
      <div className="newsBox" onClick={openNews}>
        <li className="indvNews" key={indexKey}>
          {" "}
          <img
            className="newsImg"
            src={news["urlToImage"]}
            alt="this is the news"
          />
          <div className="text-container">
            <h3> {news["title"]} </h3> <p> {news["description"]} </p>
            <h4 id="news_footers"> source: {news["source"]["name"]}</h4>
            <h4> published on: {news["publishedAt"]} </h4>
          </div>
        </li>
      </div>{" "}
    </>
  );
};

export default ShowNews;
