import Header from "@/components/Header";
import TimelineLayout from "@/components/TimelineLayout";
import { posts } from "@/data/posts";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-28">
        <TimelineLayout posts={posts} />
      </main>
    </div>
  );
}