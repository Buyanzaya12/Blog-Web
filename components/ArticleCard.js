import Link from "next/link";
import Image from "next/image";
import "@/components/dayjs-mn/";
import dayjs from "dayjs";


export function ArticleCard({ article }) {
  return (
    <div key={article.id} className="card shadow-lg">
      <Image
        src={article.social_image}
        width={325}
        height={240}
        className="rounded-t-xl aspect-video object-cover bg-slate-600 mx-auto"
      />
      <div className="p-6">
        <div className="grid grid-rows-3">
          <div className="badge border-0 text-blue-600 bg-blue-50 ">
            {article.tag_list[0]}
          </div>
          <Link
            href={article.path}
            target="_blank"
            className="text-black font-semibold"
          >
            {article.title}
          </Link>
          <div className="flex items-center">
            <Image
              src={article.user.profile_image_90}
              width={50}
              height={50}
              className="opacity-0 w-0"
            />
            <div className="">{article.user.name}</div>
            <div className="text-gray-300">
              {dayjs(article.published_at).locale("mn").fromNow()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}