import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./utils/Routes";
import "aos/dist/aos.css";

function App() {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}

export default App;
