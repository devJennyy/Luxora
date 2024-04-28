import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const Shop = () => {
  return (
    <div id="homepage">
      {/* Header */}
      <Header hasNavbar={true} />

      <div className="flex flex-col w-[1240px] mx-auto h-full text-[#0B0D21] px-8 pt-12 gap-20">
        {/* Container */}
        <p className="flex justify-center items-center text-[42px]">
          Ultimate Sales Collection!
        </p>

        {/* Filters */}
        <div className="flex flex-row justify-between w-full h-[100vh]">
          <div className="w-96 h-full">
            <p className="text-[20px] font-semibold">Filters</p>

            <div className="flex flex-col text-start gap-10 mt-5">

              <div className="flex flex-col gap-4">
                <p className="text-[18px] font-medium">Size</p>

                <div className="flex flex-row gap-4">
                  <div className="flex justify-center items-center border w-11 h-11 rounded-md">
                    S
                  </div>
                  <div className="flex justify-center items-center border w-11 h-11 rounded-md">
                    M
                  </div>
                  <div className="flex justify-center items-center border w-11 h-11 rounded-md">
                    L
                  </div>
                  <div className="flex justify-center items-center border w-11 h-11 rounded-md">
                    XL
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-[18px] font-medium">Colors</p>

                <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2">
                  <div className="w-7 h-7 rounded-full bg-slate-600"></div>
                  <div className="w-7 h-7 rounded-full bg-slate-600"></div>
                  <div className="w-7 h-7 rounded-full bg-slate-600"></div>
                  <div className="w-7 h-7 rounded-full bg-slate-600"></div>
                  <div className="w-7 h-7 rounded-full bg-slate-600"></div>
                  <div className="w-7 h-7 rounded-full bg-slate-600"></div>
                  <div className="w-7 h-7 rounded-full bg-slate-600"></div>
                </div>

                <div className="flex flex-row gap-2">
                  <div className="w-7 h-7 rounded-full bg-slate-600"></div>
                  <div className="w-7 h-7 rounded-full bg-slate-600"></div>
                  <div className="w-7 h-7 rounded-full bg-slate-600"></div>
                  <div className="w-7 h-7 rounded-full bg-slate-600"></div>
                  <div className="w-7 h-7 rounded-full bg-slate-600"></div>
                  <div className="w-7 h-7 rounded-full bg-slate-600"></div>
                  <div className="w-7 h-7 rounded-full bg-slate-600"></div>
                </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-[18px] font-medium">Prices</p>

                <div className="flex flex-col gap-4 text-[#8A8A8A]">
                  <p>$0-$50</p>
                  <p>$50-$100</p>
                  <p>$100-$150</p>
                  <p>$150-$200</p>
                  <p>$300-$400</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-[18px] font-medium">Collections</p>

                <div className="flex flex-col gap-4 text-[#8A8A8A]">
                  <p>All products</p>
                  <p>Best sellers</p>
                  <p>New arrivals</p>
                  <p>$150-$200</p>
                  <p>Accessories</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-full bg-slate-800"></div>
        </div>

        {/* Footer */}
        <Footer hasBorder={true} />
      </div>
    </div>
  );
};

export default Shop;
