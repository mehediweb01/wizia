const Offers = () => {
  const list = [
    {
      image: "/magic-want.png",
      title: "You're in Control",
      description:
        "aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.",
    },
    {
      image: "/graph.png",
      title: "Infinitely Scalable",
      description:
        "Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.",
    },
    {
      image: "/arrow.png",
      title: "Incredibly Flexible",
      description:
        "Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.",
    },
  ];
  return (
    <section className="sm:px-10 px-8 sm:py-[120px] py-20 ">
      <div className="grid sm:grid-cols-3 grid-cols-1 justify-center justify-items-center sm:gap-6 gap-[48px]">
        {list.map((item, i) => (
          <div className="space-y-4" key={i}>
            <img src={item.image} alt="" />
            <h3 className="font-Montserrat font-semibold sm:text-[28px] text-2xl sm:leading-9 leading-7 text-white">
              {item.title}
            </h3>
            <p className="font-workSans font-[300] text-secondary sm:text-[22px] text-[18px] sm:leading-7 leading-6 -tracking-[1%]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offers;
