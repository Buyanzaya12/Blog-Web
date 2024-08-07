import { ArticleCard } from "@/components/ArticleCard";
import React from 'react';
import { useEffect, useState } from "react";
import "@/components/dayjs-mn/";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
const pageSize = 6;

export function Content() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [ended, setEnded] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loadMore();
  }, []);

  async function loadMore() {
    setLoading(true);

    const response = await fetch(
      `https://dev.to/api/articles?username=paul_freeman&page=${page}&per_page=${pageSize}`
    );
    const newArticles = await response.json();
    const updatedArticles = articles.concat(newArticles);
    setArticles(updatedArticles);
    setPage(page + 1);
    if (newArticles.length < pageSize) {
      setEnded(true);
    }
    setLoading(false);
  }
  return (
    <div className="container mx-auto">
      <div className="grid web:grid-cols-3 md:grid-cols-2 gap-4 ">
        {articles.map((item) => (
         <ArticleCard key={item.id} article={item}/>
        ))}
      </div>
      {!ended && (
        <div className="text-center mt-5" onClick={loadMore}>
          <button
            disabled={loading}
            className="btn bg-white border border-[#696a75] hover:bg-gray-200 hover:text-gray-600 text-base text-[696a75] font-medium"
          >
            {loading && <span className="loading loading-spinner"></span>}
            Load more
          </button>
        </div>
      )}
    </div>
  );
}
export default Content;