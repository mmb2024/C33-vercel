import { j as json } from "../../../../chunks/index.js";
const GET = async () => {
  const posts = [
    {
      id: 1,
      title: "Fachada Principal",
      image: "http://localhost:5173/C33facFront1.png",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      id: 2,
      title: "Fachada Posterior",
      image: "http://localhost:5173/C33facPost.JPG",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      id: 3,
      title: "Sala",
      image: "http://localhost:5173/C33living1.JPG",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    }
  ];
  return json(posts);
};
export {
  GET
};
