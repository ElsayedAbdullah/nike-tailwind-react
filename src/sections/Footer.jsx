import { footerLogo } from "../assets/images/index.js";
import { footerLinks, socialMedia } from "../constants/index.js";

const Footer = () => {
  return (
    <footer className="max-container ">
      <div className="flex justify-between gap-20 flex-wrap flex-col lg:flex-row">
        <div>
          <a href="/">
            <img src={footerLogo} alt="logo" width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-md">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex gap-5 mt-8 items-center">
            {socialMedia.map((icon) => (
              <div
                key={icon.alt}
                className="w-12 h-12 bg-white rounded-full flex justify-center items-center"
              >
                <img src={icon.src} alt={icon.alt} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((link) => (
            <div key={link.title}>
              <h4 className="font-montserrat text-xl sm:text-2xl leading-normal font-medium mb-6 text-white">
                {link.title}
              </h4>
              <ul>
                {link.links.map((item) => (
                  <li
                    key={item.name}
                    className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"
                  >
                    <a href={item.link}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 gap-2 flex-col sm:flex-row items-center text-sm">
        <p className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          &copy; 2023 Copyright. All rights reserved.
        </p>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
