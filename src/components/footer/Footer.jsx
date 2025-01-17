import logo from "@/src/assets/images/ijmlogo.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  const footerLinks = [
    {
      title: "Links",
      paths: [
        { path: "/", title: "Home" },
        { path: "/about", title: "About Us" },
        { path: "/contact", title: "Contact Us" },
      ],
    },
    {
      title: "Services",
      paths: [
        { path: "/service/spytrac", title: "Spytrac" },
        { path: "https://vettme.ng", title: "VettMe", target: "blank" },
        { path: "https://spytrac.ng", title: "Spystore", target: "_blank" },
        { path: "/service/call4help", title: "Call4Help" },
      ],
    },
    {
      title: "Social",
      paths: [
        {
          path: "https://web.facebook.com/profile.php?id=61558031707838",
          title: "Facebook",
        },
        { path: "https://www.instagram.com/ijm.africa/", title: "Instagram" },
        { path: "https://x.com/IJMAfrica", title: "X - Twitter" },
        {
          path: "https://www.linkedin.com/company/ijm-global-limited/",
          title: "LinkedIn",
        },
      ],
    },
    {
      title: "Social",
      addresses: [
        "+234 903 783 8141",
        "+234 906 295 1504",
        "426 A Oluwadamilola Fasade Street, Omole Phase 1, Lagos",
      ],
    },
  ];

  return (
    <>
      <footer className="py-10 px-[4vw] block md:flex items-start  w-full max-w-screen-xl mx-auto">
        <div className="basis-2/5 mb-10">
          <div className="w-[150px] h-[30px] md:w-[210px] md:h-[38px] relative">
            <img
              src={logo}
              alt="IJM Global Limited Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="basis-3/5 block md:flex justify-between items-start text-grey-clr">
          {footerLinks.map((footerLink, idx) => (
            <div key={idx} className="basis-1/4 mb-5 md:mb-0">
              <p className="font-[400] text-lg md:mb-5">{footerLink.title}</p>
              {footerLink.paths &&
                footerLink.paths.map((path, idx) => (
                  <Link
                    key={idx}
                    to={path.path}
                    target={
                      footerLink.title === "Social" || path.target
                        ? "_blank"
                        : "_self"
                    }
                    className="block p-text text-grey-clr mb-2 hover:underline max-w-max"
                  >
                    {path.title}
                  </Link>
                ))}

              {footerLink.addresses &&
                footerLink.addresses.map((address, idx) => (
                  <p key={idx} className="p-text text-grey-clr mb-3">
                    {address}
                  </p>
                ))}
            </div>
          ))}
        </div>
      </footer>
      <p className="text-center text-grey-clr p-text my-5">
        Copyright 2024 IJM Global Limited. All Rights Reserved.
      </p>
    </>
  );
}
