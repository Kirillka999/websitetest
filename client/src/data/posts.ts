import { Post } from "../types";

export const posts: Post[] = [
  {
    id: 1,
    content: "Hello world! This is my first post with some **bold** and *italic* text. 👾",
    createdAt: new Date("2024-01-01"),
    isArticle: false
  },
  {
    id: 2,
    title: "Getting Started with React",
    content: "Learn the basics of React and component-based architecture",
    coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    createdAt: new Date("2024-01-02"),
    isArticle: true
  },
  {
    id: 3,
    content: "Just testing ~~strikethrough~~ and __underline__ formatting! Let's see how it looks.",
    createdAt: new Date("2024-01-03"),
    isArticle: false
  }
];
