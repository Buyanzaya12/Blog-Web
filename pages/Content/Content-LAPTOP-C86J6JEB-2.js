import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export function Content() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("https://dev.to/api/articles?username=paul_freeman")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setArticles(data);
      });
  }, []);

  function loadMore() {
    fetch("https://dev.to/api/articles?username=paul_freeman&page=2")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const newArticles = articles.concat(data);
        setArticles(newArticles);
      });
  }
  return (
    <div className="container mx-auto">
      <p className="text-2xl font-semibold text-gray-900 p-8 h-">
        All blog posts
      </p>
      <div className="invisible w-full flex justify-between text-[#495057] text-xs font-bold md:visible py-8">
        <div className="gap-5 flex">
          <button>All</button>
          <button>Design</button>
          <button>Travel</button>
          <button>Fashion</button>
          <button>Technology</button>
          <button>Branding</button>
        </div>
        <button className="flex flex-end">View All</button>
      </div>
      <div className="grid web:grid-cols-3 md:grid-cols-2">
        {articles.map((item) => (
          <div
            key={item.id}
            className="card border md:gap-5 md:w-[360px] md:h-[476px] border-1 border-[#e8e8ea] rounded-xl md:p-4 shadow-lg"
          >
            <div className="">
              <Image
                src={item.social_image}
                width={326}
                height={240}
                className="md:rounded-md mx-auto md:w-[360px] md:h-[240px]"
              />
              <div className="p-4">
                <div className="grid grid-rows-3">
                  <div className="badge border-0 text-blue-600 bg-blue-50 ">
                    {item.tag_list[0]}
                  </div>
                  <Link
                    href={item.url}
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
                      {dayjs(item.published_at).fromNow()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center" onClick={loadMore}>
        <button className="btn bg-white border border-[#696a75] hover:bg-gray-200 hover:text-gray-600 text-base text-[696a75] font-medium">
          Load more
        </button>
      </div>
    </div>
  );
}
