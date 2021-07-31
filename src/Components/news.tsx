import React, { useState, useEffect } from "react";
import ShowNews from "./show_news";
import "../Style/news.css";

const News = () => {
  const [newsObj, setNewsObj] = useState<any>({});

  useEffect(() => {
    callNewsApi();
  }, []);

  const apiKey = `f5fda593a64f408a9764ac6aeea0eac5`;

  const callNewsApi = async () => {
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=covid OR covid-19&language=en&apiKey=${apiKey}`
    )
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error: ", error);
      });
    setNewsObj(res);
  };

  // newsObj['articles'] => author, content, description, publishedAr, source => (id, name), title, url , urlToImage

  if (Object.keys(newsObj).length > 0) {
    console.log("read the news");
    console.log(newsObj["articles"]);
    return (
      <div className="parentNewsBox">
        <ul>
          {newsObj["articles"].map((e: any, index: number) => (
            <ShowNews indexKey={index} news={e} />
          ))}{" "}
        </ul>{" "}
      </div>
    );
  } else {
    return <h2> fetching the news.... </h2>;
  }
  //console.log("news Object: " + Object.entries(newsObj).map((e: any) => e));
};

export default News;
