import React, { useEffect, useState } from "react";
import Wrapper from "../Wrapper";
import getAxiosInstance from "../config/axios";
import { useNewsContext } from "../context/NewsContext";
import Loader from "../Loader";

const News = () => {
  const { news, setNews, fetchNews, loading } = useNewsContext();

  useEffect(() => {
    (async () => {
      const data = await fetchNews();
      setNews(data.articles);
    })();
  }, []);

  if (loading) return <Loader />;
  return (
    <Wrapper>
      <div className="grid grid-cols-4 gap-6 pb-10">
        {news.map((newsDetails, index) => {
          if (!newsDetails.urlToImage) return null;
          return <NewsCards key={index} details={newsDetails} />;
        })}
      </div>
    </Wrapper>
  );
};

const NewsCards = ({ details }) => {
  return (
    <div className="card bg-base-200 shadow-sm">
      <figure className="px-10 pt-10">
        <img
          src={details?.urlToImage}
          alt="Shoes"
          className="w-full aspect-video object-contain"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title line-clamp-2">{details.title}</h2>
        <p className="line-clamp-3">{details.description}</p>
        <div className="card-actions m-4">
          <button
            onClick={() => window.open(details.url)}
            className="badge-outline btn"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};
export default News;
