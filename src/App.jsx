import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./utils/Routes";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}

export default App;
