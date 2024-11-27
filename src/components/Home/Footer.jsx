import footerLogo from "/footerLogo.png";

const Footer = () => {
  return (
    <footer className="sm:px-28 px-4 bg-[#07292F]">
      <div className="sm:py-[46px] py-[32px] flex sm:flex-row flex-col justify-between items-center gap-6">
        <div>
          <img src={footerLogo} alt="" />
        </div>
        <div>
          <p className="text-secondary font-workSans font-[300] text-[14px] sm:text-base leading-7 text-center">
            Copyright © 2023 Wizia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
