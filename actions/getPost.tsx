export async function fetchPost(postId?: string) {
  const url = `http://localhost:3000/api/posts/${postId}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

export default async function getPost(postId?: string) {
  const data = await fetchPost(postId);
  return data;
}
