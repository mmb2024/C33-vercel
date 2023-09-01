import { json } from "@sveltejs/kit";

export const GET = async () => {
  const posts = [
  ];

  return json(posts)
};
