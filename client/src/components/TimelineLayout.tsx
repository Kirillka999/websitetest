import { Post } from "../types";
import PostBlock from "./PostBlock";
import ArticleBlock from "./ArticleBlock";

interface TimelineLayoutProps {
  posts: Post[];
}

export default function TimelineLayout({ posts }: TimelineLayoutProps) {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 space-y-6 pb-20">
      {posts.map((post) => (
        <div key={post.id} className="w-full">
          {post.isArticle ? (
            <ArticleBlock post={post} />
          ) : (
            <PostBlock post={post} />
          )}
        </div>
      ))}
    </div>
  );
}