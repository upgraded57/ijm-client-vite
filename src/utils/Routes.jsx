import { lazy, Suspense } from "react";
const AboutPage = lazy(() => import("../pages/about/About"));
const ContactPage = lazy(() => import("../pages/contact/Contact"));
const Home = lazy(() => import("../pages/home/Home"));
const Call4help = lazy(() => import("../pages/service/call4help/index"));
const Spystore = lazy(() => import("../pages/service/spystore/index"));
const Spytrac = lazy(() => import("../pages/service/spytrac/index"));
const Vettme = lazy(() => import("../pages/service/vettme/Waitlist"));
const NotFound = lazy(() => import("../pages/not-found/not-found"));
import Index from "../pages/home/Index";

export const routes = [
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "service/vettme",
        element: <Vettme />,
      },
      {
        path: "service/spytrac",
        element: <Spytrac />,
      },
      {
        path: "service/spystore",
        element: <Spystore />,
      },

      {
        path: "service/call4help",
        element: <Call4help />,
      },
    ],
  },

  {
    path: "/*",
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <NotFound />
      </Suspense>
    ),
  },
];
