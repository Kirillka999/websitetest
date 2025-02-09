import { GhostIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container max-w-2xl mx-auto px-4 h-20 flex items-center">
        <div className="flex items-center gap-4 text-2xl font-bold">
          <span className="transform rotate-12 text-3xl">👾</span>
          <span>BlogSite</span>
        </div>
      </div>
    </header>
  );
}