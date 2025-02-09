import { Card, CardContent } from "@/components/ui/card";
import { Post } from "../types";
import ReactMarkdown from 'react-markdown';

interface PostBlockProps {
  post: Post;
}

export default function PostBlock({ post }: PostBlockProps) {
  return (
    <Card className="w-full bg-background border-border hover:bg-accent/5 transition-colors">
      <CardContent className="pt-6">
        <div className="prose prose-invert max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
        <div className="text-xs text-muted-foreground mt-4">
          {new Date(post.createdAt).toLocaleDateString()}
        </div>
      </CardContent>
    </Card>
  );
}
