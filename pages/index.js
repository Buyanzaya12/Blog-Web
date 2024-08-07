import { Header } from "@/pages/Header/Header";
import { Slider } from "@/pages/Slider/Slider";
import { Trend } from "@/pages/Trend/Trend";
import { Content } from "@/pages/Content/Content";
import { Upperfooter } from "@/pages/Upperfooter/Upperfooter";
import { Footer } from "@/pages/Footer/Footer";
import "@/components/dayjs-mn/";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { ArticleCard } from "@/components/ArticleCard";
import { MainLayout } from "@/components/MainLayout";

const inter = Inter({ subsets: ["latin"] });
const tags = [
  { value: "", name: "All" },
  { value: "beginners", name: "Beginners" },
  { value: "frontend", name: "Front-end" },
  { value: "javascript", name: "Javascript" },
  { value: "webdev", name: "Web-dev" },
  { value: "viewall", name: "View All" },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [ended, setEnded] = useState(false);
  const [page, setPage] = useState(0);

  async function loadInitialArticles() {
    setLoading(true);

    const response = await fetch(
      `https://dev.to/api/articles?username=paul_freeman&tag=${selectedCategory}&per_page=3`
    );
    const tagArticles = await response.json();
    setArticles(tagArticles);
    setPage(1);

    setLoading(false);
  }

async function loadNextArticles() {
  setLoading(true);


  const nextPage = page + 1;
  const response = await fetch(
    `https://dev.to/api/articles?username=paul_freeman&tag=${selectedCategory}&per_page=3&page=${nextPage}`
  );
  const nextArticles = await response.json();
  setArticles([...articles, ...nextArticles]);
  setPage(nextPage);

  setLoading(false);
};

  useEffect(() => {
    loadInitialArticles();
  }, [selectedCategory]);

  return (
    /* All blog post */
<MainLayout>
    <main className="">
      
      <Slider />
      <Trend />
      <div className="md:m-0">
        <p className="text-2xl font-semibold text-gray-900 p-8 md:p-0 md:mt-5">All Blog Post</p>
      </div>

      <div className="text-black gap-4 hidden md:block md:flex">
        {tags.map((tag) => (
          <div
            key={tag.value}
            className={`cursor-pointer font-bold hover:text-[#d4a373] ${selectedCategory === tag.value ? "text-[#d4a373]" : ""
              }`}
            onClick={() => setSelectedCategory(tag.value)}
          >
            {tag.name}
          </div>
        ))}
      </div>
      <div className="grid web:grid-cols-3 md:grid-cols-2 gap-4 ">
        {articles.map((item) => (
          <ArticleCard key={item.id} article={item}/>
        ))}
      </div>
      {!ended && (
        <div className="text-center mt-5">
          <button
            disabled={loading}
            className="btn bg-white border border-[#696a75] hover:bg-gray-200 hover:text-gray-600 text-base text-[696a75] font-medium"
            onClick={loadNextArticles}
          >
            {loading && <span className="loading loading-spinner"></span>}
            Load more
          </button>
        </div>
      )}
      <Content />
      
    </main>
    </MainLayout>
  );
}
