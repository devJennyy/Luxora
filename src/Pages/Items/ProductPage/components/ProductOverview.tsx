import { FaTicketSimple } from "react-icons/fa6";
import { LuMinus, LuPlus } from "react-icons/lu";

interface Props {
  selectedMedia: string;
  selectionMedia?: string[];
  shopName: string;
  productName: string;
  itemCurrentPrice: number;
  itemPreviousPrice: number;
  discountPercentage: number;
  itemLeft: number;
  size?: string[];
  colors?: string[];
}

const ProductOverview = ({
  selectedMedia,
  selectionMedia,
  shopName,
  productName,
  itemCurrentPrice,
  itemPreviousPrice,
  discountPercentage,
  itemLeft,
  size,
  colors,
} : Props) => {
  return (
    <div className="flex flex-row justify-between w-full h-fit">
      {/* Picture */}
      <div className="flex flex-row w-fit h-[600px] gap-4">
        <div className="flex flex-col justify-between w-28 h-full gap-4">
          {selectionMedia?.map((selection, index) => {
            return (
              <img src={selection} className={`${selection} ${
                index == 0 
                ? `outline outline-2 outline-offset-4`
                : ``
              } w-full h-full object-cover mt-[6px]`} />
            );
          })}
        </div>

        <div className="min-w-[500px] h-full">
          <img src={selectedMedia} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Content */}
      <div className=" flex flex-col w-1/2 h-full pl-10">
        <p className="uppercase text-[14px] text-[#666666]">{shopName}</p>
        <p className="text-[30px] font-semibold">{productName}</p>

        <div className="flex flex-row items-center gap-3 my-4">
          <p className="text-[24px] font-bold">
            ${itemCurrentPrice.toFixed(2)}
          </p>
          <p className="text-[#666666] line-through">
            ${itemPreviousPrice.toFixed(2)}
          </p>
          <div className="flex justify-center items-center w-16 h-5 bg-[#DA3F3F] rounded-full">
            <p className="uppercase text-[10px] text-white">
              Save {discountPercentage}%
            </p>
          </div>
        </div>

        <div className="flex justify-start items-center bg-[#FDEFEE] w-full h-10 outline outline-1 outline-[#F8CCCC] rounded-sm">
          <p className="text-[#FF706B] text-[14px] font-medium ml-3">
            Hurry up! Sale ends in:
          </p>
        </div>
        <div className="flex flex-col justify-start items-start mt-8 gap-2">
          <p className="text-[12px] text-[#666666] font-normal">
            Only <span className="font-bold">{itemLeft}</span> item(s) left in
            stock!
          </p>

          <div className="w-full h-1 bg-[#DEDEDE] rounded-full">
            <div className="w-10 h-1 bg-[#EF2D2D] rounded-full"></div>
          </div>
        </div>

        <div className="flex flex-col gap-6 mt-8">
          <div className="flex flex-col gap-2">
            <p className="text-[16px] font-medium">Vouchers</p>

            <div className="flex flex-row gap-3 text-[14px]">
              <FaTicketSimple size={30} />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-[16px] font-medium">Size</p>

            <div className="flex flex-row gap-3 text-[14px]">
              {size?.map((sizes) => {
                return (
                  <button className="flex justify-center items-center border w-11 h-11 rounded-md bg-[#030812] text-white">
                    {sizes}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-[16px] font-medium">Color</p>
            <div className="flex flex-row justify-start items-center gap-3">
              {colors?.map((color, index) => {
                return (
                  <div
                    className={`${color} ${
                      index == 0
                        ? `w-4 h-4 outline outline-1 outline-offset-2`
                        : `w-5 h-5`
                    } rounded-full`}
                  ></div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-[16px] font-medium">Quantity</p>
            <div className="flex flex-row justify-start gap-5">
              <div className="flex flex-row">
                <div className="flex justify-center items-center w-16 h-11 border rounded-tl-md rounded-bl-md">
                  <LuMinus size={14} />
                </div>
                <p className="flex justify-center items-center border-t border-b w-16 h-11">
                  1
                </p>
                <div className="flex justify-center items-center w-16 h-11 border rounded-tr-md rounded-br-md">
                  <LuPlus size={14} />
                </div>
              </div>

              <div className="flex justify-center items-center w-full h-11 bg-black rounded-md">
                <p className="text-white">Add to cart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
