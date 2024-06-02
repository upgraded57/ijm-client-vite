import logo from "@/src/assets/images/ijmlogo.svg";
import spytrac_logo from "@/src/assets/images/spytrac_logo.png";
import spystore_logo from "@/src/assets/images/spystore_logo.png";
import vettme_logo from "@/src/assets/images/vettme_logo.png";
import call4help_logo from "@/src/assets/images/call4help_logo.png";
import rescueme_logo from "@/src/assets/images/rescueme_logo.png";
import { Link } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import { FiChevronDown } from "react-icons/fi";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function Nav() {
  const navlinks = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/service",
      title: "Services",
      subpaths: [
        {
          path: "/service/spytrac",
          image: spytrac_logo,
        },
        {
          path: "/service/spystore",
          image: spystore_logo,
        },
        {
          path: "/service/vettme",
          image: vettme_logo,
        },
        {
          path: "/service/call4help",
          image: call4help_logo,
        },
        {
          path: "/service/rescueme",
          image: rescueme_logo,
        },
      ],
    },
    {
      path: "/about",
      title: "About",
    },
    {
      path: "/contact",
      title: "Contact",
    },
  ];
  return (
    <header className="w-full h-[50px] md:h-[70px] px-[4vw] flex justify-between items-center shadow-md">
      <Link
        to="/"
        className="w-[150px] h-[30px] md:w-[210px] md:h-[38px] relative"
      >
        <img
          src={logo}
          alt="IJM Global Limited Logo"
          className="w-full h-full object-contain"
        />
      </Link>
      <nav className="hidden md:flex items-center gap-10">
        {navlinks.map((link, idx) =>
          link.path === "/service" ? (
            <span
              key={idx}
              className="services text-sm flex gap-2 items-center cursor-pointer"
            >
              <p>Services</p>
              <FiChevronDown />
            </span>
          ) : (
            <Link
              key={idx}
              to={link.path}
              className={`font-normal text-sm hover:underline ${
                link.path === "/contact" &&
                "btn bg-green-clr text-white hover:bg-green-clr hover:no-underline"
              }`}
            >
              {link.title}
            </Link>
          )
        )}
      </nav>
      <label htmlFor="nav-toggle" className="md:hidden">
        <HiMiniBars3 className="text-2xl cursor-pointer" />
      </label>
      <input type="checkbox" className="peer" id="nav-toggle" hidden />
      <nav className="md:hidden overflow-hidden px-[4vw] flex scale-x-0 w-screen origin-right fixed inset-0 h-full bg-white z-50 transition-all peer-checked:scale-x-100">
        <div className="py-3 w-full text-green-clr">
          <div className="flex items-end justify-between mb-[50px]">
            <div className="w-[150px] h-[30px] relative">
              <img
                src={logo}
                alt="IJM Global Limited Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <label htmlFor="nav-toggle" className="text-xl">
              <IoIosCloseCircleOutline />
            </label>
          </div>
          {navlinks.map((link, idx) =>
            link.path === "/service" ? (
              <span
                key={idx}
                className="services text-sm flex gap-2 items-center cursor-pointer uppercase px-[4vw] py-4 mb-5 border-b text-[30px] "
              >
                <p>Services</p>
                <FiChevronDown />
              </span>
            ) : (
              <Link
                key={idx}
                to={link.path}
                className={`font-normal text-sm hover:underline block uppercase px-[4vw] py-4 mb-5 border-b text-[30px] ${
                  link.path === "/contact" &&
                  "flex my-5 btn w-full border-2 bg-transparent border-green-clr text-green-clr hover:bg-green-clr hover:text-white hover:no-underline"
                }`}
              >
                {link.title}
              </Link>
            )
          )}
        </div>
      </nav>
    </header>
  );
}
