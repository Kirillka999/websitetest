export interface Post {
  id: number;
  content: string;
  createdAt: Date;
  isArticle: boolean;
  title?: string;
  coverImage?: string;
}
