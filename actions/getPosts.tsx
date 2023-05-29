import { cache } from "react";

export const fetchPosts = cache(async (userId?: string) => {
  const url = userId
    ? `http://localhost:3000/api/users/${userId}/posts`
    : "http://localhost:3000/api/posts";

  const response = await fetch(url, { next: { revalidate: 0 } });

  if (!response.ok) {
    // throw new Error("Failed to fetch data");
    console.log("Failed to fetch data");
  }
  return response.json();
});

export default async function getPosts(userId?: string) {
  const data = await fetchPosts(userId);
  return data;
}
