import backHub from "/BackHub logo.png";
import cableLabs from "/CableLabs logo.png";
import dbs from "/DBS logo.png";
import EasyEuro from "/EasyEuro logo.png";
import amd from "/AMD logo.png";
const Partners = () => {
  return (
    <div className="bg-[#07292F] sm:pt-8 pt-6 sm:pb-10 pb-8">
      <h3 className="text-primary font-Montserrat text-base leading-[19px] tracking-[5%] text-center">
        our trusted partners
      </h3>
      <div className="sm:flex grid grid-cols-2 justify-center justify-items-center sm:items-center sm:gap-8 gap-1 mt-6 ">
        <img src={backHub} alt="" />
        <img src={cableLabs} alt="" />
        <img src={dbs} alt="" />
        <img src={EasyEuro} alt="" />
        <img src={amd} alt="" className="col-span-2" />
      </div>
    </div>
  );
};

export default Partners;
