import { useState } from "react";
import logo from "@/src/assets/images/ijmlogo.svg";
import spytrac_logo from "@/src/assets/images/spytrac_logo.webp";
import spystore_logo from "@/src/assets/images/spystore_logo.webp";
import vettme_logo from "@/src/assets/images/vettme_logo.webp";
import call4help_logo from "@/src/assets/images/call4help_logo.webp";
import { Link, NavLink } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
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
          name: "Spytrac",
        },
        {
          path: "/service/vettme",
          image: vettme_logo,
          name: "Vettme",
        },
        {
          path: "/service/spystore",
          image: spystore_logo,
          name: "Spystore",
        },
        {
          path: "/service/call4help",
          image: call4help_logo,
          name: "Spytrac",
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
    <header className="w-full h-[50px] md:h-[70px] px-[4vw] relative shadow-md">
      <div className="w-full h-full max-w-[1440px] mx-auto flex justify-between items-center">
        <NavLink
          to="/"
          className="w-[150px] h-[30px] md:w-[210px] md:h-[38px] relative"
        >
          <img
            src={logo}
            alt="IJM Global Limited Logo"
            className="w-full h-full object-contain"
          />
        </NavLink>
        <nav className="hidden md:flex items-center gap-10">
          {navlinks.map((link, idx) =>
            link.path === "/service" ? (
              <span
                key={idx}
                className="services p-text flex gap-2 items-center cursor-pointer"
                onClick={() => setNavOpen((prev) => !prev)}
              >
                <p>Services</p>
                {!navOpen ? <FiChevronDown /> : <FiChevronUp />}
              </span>
            ) : (
              <NavLink
                key={idx}
                to={link.path}
                className={`font-[300] p-text hover:underline ${
                  link.path === "/contact" &&
                  "btn bg-green-clr text-white hover:bg-green-clr hover:no-underline"
                }`}
              >
                {link.title}
              </NavLink>
            )
          )}
        </nav>

        <div
          className={`navOptions absolute top-[80px] right-[4vw] ${
            !navOpen ? "hidden" : "grid"
          } grid-cols-2 items-stretch justify-center gap-4 bg-white shadow-md p-4 z-10 rounded-lg`}
        >
          {navlinks.map(
            (link) =>
              link.subpaths &&
              link.subpaths.map((path, idx) => (
                <Link
                  key={idx}
                  to={path.path}
                  className="px-10 py-4 bg-white rounded-md border-[1px] overflow-hidden flex items-center justify-center w-full max-w-[180px] hover:shadow-md transition-shadow"
                >
                  <img src={path.image} alt={path.path} className="w-[100px]" />
                </Link>
              ))
          )}
        </div>
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
                <div key={idx}>
                  <span
                    onClick={() => setMobileNav((prev) => !prev)}
                    className="services p-text flex gap-2 items-center cursor-pointer uppercase px-[4vw] py-4 border-b text-[30px] "
                  >
                    <p className="font-normal">Services</p>
                    <FiChevronDown />
                  </span>
                  <div className={`${mobileNav ? "block" : "hidden"} ml-10`}>
                    {link.subpaths &&
                      link.subpaths.map((path, idx) => (
                        <Link to={path.path} key={idx} className="my-10 block">
                          <img src={path.image} alt="" className="w-[80px]" />
                        </Link>
                      ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={idx}
                  to={link.path}
                  className={`font-normal p-text hover:underline block uppercase px-[4vw] py-4 border-b text-[30px] ${
                    link.path === "/contact" &&
                    "flex my-5 btn w-full border-2 bg-transparent border-green-clr text-green-clr hover:bg-green-clr hover:text-white hover:no-underline"
                  }`}
                >
                  {link.title}
                </NavLink>
              )
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
