import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [helpISOpen, setHelpIsOpen] = useState(false);
  const [companyISOpen, setCompanyIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleHelpOpen = () => {
    if (helpISOpen == false) {
      setHelpIsOpen(true);
    } else {
      setHelpIsOpen(false);
    }
  };

  const handleCompanyOpen = () => {
    if (companyISOpen == false) {
      setCompanyIsOpen(true);
    } else {
      setCompanyIsOpen(false);
    }
  };

  return (
    <div className="main flex flex-col w-full p-8 lg:p-24 lg:pb-2 lg:pt-8 bg-black text-white text-sm gap-16 mt-16">
      <section className="subFooter flex flex-col lg:flex-row justify-between">
        <div className="flex gap-8 lg:gap-32 flex-col lg:flex-row mb-8 lg:mb-0">
          <div className="flex flex-col gap-3 font-bold text-white">
            <Link>FIND A STORE</Link>
            <Link>SHOP LOCATION</Link>
            <Link>BECOME A MEMBER</Link>
            <Link>FEEDBACK</Link>
          </div>

          {isDesktop ? (
            <div className="flex gap-32">
              <div className="flex flex-col gap-3 text-gray-400">
                <Link className="font-bold text-white">HELP</Link>
                <Link>Get Help</Link>
                <Link>order Status</Link>
                <Link>Shipping and Delivery</Link>
                <Link>Returns</Link>
                <Link>Payment Options</Link>
              </div>
              <div className="flex flex-col gap-3 text-gray-400">
                <Link className="font-bold text-white">COMPANY</Link>
                <Link>About Lorem ipsum</Link>
                <Link>News</Link>
                <Link>Careers</Link>
                <Link>Investors</Link>
                <Link>Accessibility</Link>
              </div>
            </div>
          ) : (
            <div className=" flex flex-col gap-6">
              <div className="flex flex-col gap-3 text-gray-400">
                <div className="flex items-center justify-between ">
                  <Link className="font-bold text-white">HELP</Link>
                  <button>
                    <img
                      src="/images/icons8-plus-50.png"
                      alt=""
                      className="filter invert w-4 h-4 "
                      onClick={handleHelpOpen}
                    />
                  </button>
                </div>
                {helpISOpen ? (
                  <div className="flex flex-col gap-3 text-gray-400">
                    <Link>Get Help</Link>
                    <Link>order Status</Link>
                    <Link>Shipping and Delivery</Link>
                    <Link>Returns</Link>
                    <Link>Payment Options</Link>
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div className="flex flex-col gap-3 text-gray-400">
                <div className="flex items-center justify-between ">
                  <Link className="font-bold text-white">COMPANY</Link>
                  <button>
                    <img
                      src="/images/icons8-plus-50.png"
                      alt=""
                      className="filter invert w-4 h-4 "
                      onClick={handleCompanyOpen}
                    />
                  </button>
                </div>
                {companyISOpen ? (
                  <div className="flex flex-col gap-3 text-gray-400">
                    <Link>About Lorem ipsum</Link>
                    <Link>News</Link>
                    <Link>Careers</Link>
                    <Link>Investors</Link>
                    <Link>Accessibility</Link>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          )}

        </div>
        <div className="filter invert flex gap-4">
          <a href="https://www.facebook.com/">
            <img
              src="/images/facebook.png"
              alt="facebook"
              className="w-10 h-10"
            />
          </a>
          <a href="https://www.instagram.com/">
            <img
              src="/images/instagram.png"
              alt="instagram"
              className="w-10 h-10"
            />
          </a>
          <a href="https://twitter.com/">
            <img
              src="/images/twitter.png"
              alt="Twitter"
              className="w-10 h-10"
            />
          </a>
        </div>
      </section>
      <section className="sectionLeft flex flex-col lg:flex-row justify-between text-gray-400 gap-8">
        <div className="flex flex-col lg:flex-row gap-3">
          <div className="flex gap-2 text-white font-bold items-center">
            <img
              src="/images/icons8-place-50.png"
              alt=""
              className="filter invert w-4 h-4"
            />
            <div>Israel</div>
          </div>
          <div className="flex gap-1 items-center">
            <img src="/images/c.png" alt="" className="filter invert w-4 h-4" />
            <div>2024 Ido Sabach, Inc. All Rights Reserved</div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-8">
          <Link>Guides</Link>
          <Link>Terms of Use</Link>
          <Link>Terms of Sale</Link>
          <Link>Company Details</Link>
          <Link>Privacy & Cookie Policy</Link>
          <Link>Cookie Settings</Link>
        </div>
      </section>
    </div>
  );
}
