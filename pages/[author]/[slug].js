import { useEffect, useState } from "react";
import parse from "html-react-parser";
import { useRouter } from "next/router";
export default function Page() {
  const [article, setArticle] = useState();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { author, slug } = router.query;

  useEffect(() => {
    if (router.isReady) {
      getArticle();
    }
  }, [router.isReady]);

  async function getArticle() {
    setLoading(true);

    const response = await fetch(
      `https://dev.to/api/articles/${author}/${slug}`
    );
    const detail = await response.json();
    setArticle(detail);

    setLoading(false);
  }
  if (!article) return <div>Loading...</div>;

  return (
    <div className="container mx-auto text-white">
      <div>{article.title}</div>
      <div className="prose">{parse(article.body_html)}</div>
    </div>
  );
}
