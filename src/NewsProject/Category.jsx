import React from "react";
import Wrapper from "./Wrapper";
import { useNewsContext } from "./context/NewsContext";
const Category = () => {
  const { setNews, fetchNews } = useNewsContext();
  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const handleClick = async (e) => {
    const cat = e.target.value;
    const data = await fetchNews(`/everything?q=${cat}`);
    console.log(data);
    setNews(data.articles);
  };

  return (
    <div className="sticky top-14 z-10 bg-base-200">
      <Wrapper>
        <div className="max-w-full w-fit m-auto flex overflow-x-auto px-4 py-5 gap-5 scollbar-none">
          {categories.map((category) => {
            return (
              <button
                onClick={handleClick}
                value={category}
                key={category}
                className="btn btn-primary"
              >
                {category}
              </button>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default Category;
