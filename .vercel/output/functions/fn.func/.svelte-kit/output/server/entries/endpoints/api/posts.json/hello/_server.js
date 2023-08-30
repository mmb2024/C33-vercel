import { j as json } from "../../../../../chunks/index.js";
function GET() {
  const responseBody = {
    status: "success",
    message: "Hello, SvelteKit"
  };
  return json(responseBody);
}
export {
  GET
};
