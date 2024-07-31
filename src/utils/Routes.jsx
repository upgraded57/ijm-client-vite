import { Suspense } from "react";
import AboutPage from "../pages/about/About";
import ContactPage from "../pages/contact/Contact";
import Home from "../pages/home/Home";
import Call4help from "../pages/service/call4help";
import Spystore from "../pages/service/spystore";
import Spytrac from "../pages/service/spytrac";
import Vettme from "../pages/service/vettme";

export const routes = [
  {
    path: "/",
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "about",
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <AboutPage />
      </Suspense>
    ),
  },
  {
    path: "contact",
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <ContactPage />
      </Suspense>
    ),
  },
  {
    path: "service/vettme",
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <Vettme />
      </Suspense>
    ),
  },
  {
    path: "service/spytrac",
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <Spytrac />
      </Suspense>
    ),
  },
  {
    path: "service/spystore",
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <Spystore />
      </Suspense>
    ),
  },

  {
    path: "service/call4help",
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <Call4help />
      </Suspense>
    ),
  },
];
