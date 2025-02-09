import { Card, CardContent } from "@/components/ui/card";
import { Post } from "../types";

interface ArticleBlockProps {
  post: Post;
}

export default function ArticleBlock({ post }: ArticleBlockProps) {
  return (
    <Card className="w-full overflow-hidden group cursor-pointer" style={{
      clipPath: `path("M 0 60 C 0 25 25 0 60 0 H calc(100% - 60) C calc(100% - 25) 0 100% 25 100% 60 V calc(100% - 60) C 100% calc(100% - 25) calc(100% - 25) 100% calc(100% - 60) 100% H 60 C 25 100% 0 calc(100% - 25) 0 calc(100% - 60) Z")`
    }}>
      <div className="relative aspect-[2/1]">
        {post.coverImage && (
          <img 
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 p-6">
          <h2 className="text-xl font-semibold text-white">{post.title}</h2>
        </div>
      </div>
    </Card>
  );
}