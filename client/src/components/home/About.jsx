const About = () => {
  return (
    <section className="about-section">
      <div className="about-layout max-w-7xl mx-auto px-4 md:py-32 py-24">
        <div className="flex flex-col lg:flex-row w-full md:justify-between item-center">
          <div className="flex flex-col  gap-2 md:gap-6 w-full lg:w-1/4">
            <h1 className="md:text-[64px] text-[56px] mb-0 mt-1 text-[var(--primary-green-cold)]">
              Little Lemon
            </h1>

            <h2 className="text-3xl md:text-[52px] text-[46px] text-[var(--primary-orange)]">
              Chicago
            </h2>

            <p className="text-lg  md:text-[18px] text-[16px] tracking-[1%] py-2">
              Little Lemon is owned by two Italian brothers, Mario and Adrian,
              who moved to the United States to pursue their shared dream of
              owning a restaurant.
            </p>
            <p className="text-lg md:text-[18px] text-[16px] tracking-[1%] py-2">
              To craft the menu, Mario relies on family recipes and his
              experience as a chef in Italy. Adrian does all the marketing for
              the restaurant and led the effort to expand the menu beyond
              classic Italian to incorporate additional cuisines from the
              Mediterranean region.
            </p>
          </div>
          <div className=" flex lg:justify-end justify-center w-full lg:w-2/4 gap-4">
            <div className=" rounded-lg p-4">
              <div className="relative w-auto h-auto">
                <img
                  src="/images/team/Mario.png"
                  className="mx-auto w-4/5 lg:w-auto"
                  alt=""
                />
                <img
                  src="/images/team/adrian.png"
                  className="absolute -bottom-20 md:right-50 right-30 w-2/3 lg:w-auto rounded-lg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
