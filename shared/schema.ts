import { pgTable, text, serial, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  isArticle: boolean("is_article").default(false).notNull(),
  title: text("title"),
  coverImage: text("cover_image"),
});

export const insertPostSchema = createInsertSchema(posts).omit({
  id: true,
  createdAt: true
});

export type InsertPost = z.infer<typeof insertPostSchema>;
export type Post = typeof posts.$inferSelect;
