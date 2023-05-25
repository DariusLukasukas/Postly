export const fetchUser = async (userId: string) => {
  const response = await fetch(`http://localhost:3000/api/users/${userId}`);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};

export const useUser = async (userId: string) => {
  const data = await fetchUser(userId);

  return data;
};
