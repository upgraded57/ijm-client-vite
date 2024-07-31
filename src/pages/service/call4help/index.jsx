import Nav from "@/src/components/nav/Nav";
import { IoHandLeftOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

export default function Call4help() {
  const navigate = useNavigate();
  return (
    <>
      <Nav />

      <div className="w-full max-w-screen-lg mx-auto">
        <div className="flex flex-col w-full py-10 px-[4vw] mt-10 justify-center items-center">
          <div className="p-4 rounded-lg shadow-lg max-w-max">
            <div className="flex items-center gap-3 mb-3">
              <IoHandLeftOutline className="text-3xl text-yellow-400 -scale-1" />
              <h3 className="text-3xl">Wait</h3>
            </div>
            <p className="mb-5">
              The page you're trying to access is currently being developed. Try
              navigating to another page
            </p>

            <div className="flex gap-3">
              <button
                className="btn btn-ghost text-green-clr"
                onClick={() => navigate(-1)}
              >
                Go Back
              </button>

              <Link to="/">
                <button className="btn bg-green-clr text-white">Go Home</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
