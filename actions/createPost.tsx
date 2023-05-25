import { toast } from "react-hot-toast";

export async function createPost(message: string) {
  try {
    const response = await fetch(`/api/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: message,
      }),
    });

    if (response.ok) {
      toast.success("Successfully created post!");
    }
    if (!response.ok) {
      throw new Error("Failed to create post");
    }

    return response.json();
  } catch (error: any) {
    throw new Error(error.message);
  }
}
