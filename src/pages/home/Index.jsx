import Loader from "@/src/components/loader/Loader";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function Index() {
  return (
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  );
}
