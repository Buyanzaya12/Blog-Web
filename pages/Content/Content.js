import Link from "next/link";
import Image from "next/image";
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
          <div key={item.id} className="card shadow-lg">
            <div className="">
              <Image
                src={item.social_image}
                width={325}
                height={240}
                className="rounded-t-xl aspect-video object-cover bg-slate-600 mx-auto"
              />
              <div className="p-6">
                <div className="grid grid-rows-3">
                  <div className="badge border-0 text-blue-600 bg-blue-50 ">
                    {item.tag_list[0]}
                  </div>
                  <Link
                    href={item.path}
                    target="_blank"
                    className="text-black font-semibold"
                  >
                    {item.title}
                  </Link>

                  <div className="flex items-center">
                    <Image
                      src={item.user.profile_image_90}
                      width={50}
                      height={50}
                      className="opacity-0 w-0"
                    />
                    <div className="">{item.user.name}</div>
                    <div className="text-gray-300">
                      {dayjs(item.published_at).locale("mn").fromNow()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {!ended && (
        <div className="text-center" onClick={loadMore}>
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