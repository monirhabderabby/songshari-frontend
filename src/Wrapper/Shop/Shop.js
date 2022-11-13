import React from "react";
import "./shop.css";
import shopData from "./shopData";
import ShopPagination from "./ShopPagination";
const Shop = () => {
  return (
    <section className="bg-[#F7F8FD] py-10 font-george">
      <div className="custom-container">
        {/* shop top menu  start here  */}
        <div className="bg-[#fff] py-[10px] px-[38px] border-[1px] rounded-md border-[#0003] ">
          <div className="flex justify-between items-center">
            <div className="flex">
              <div className="mr-[20px] border-[#0000001a] border-[1px] rounded-3xl w-[60px] h-[40px] flex justify-center items-center text-[#f36] cursor-pointer p-0 text-[18px]">
                <i className="fas fa-th"></i>
              </div>
              <div className="mr-[20px] border-[#0000001a] border-[1px] rounded-3xl w-[60px] h-[40px] flex justify-center items-center text-[#333] cursor-pointer p-0 text-[18px]">
                <i className="fas fa-bars"></i>
              </div>
            </div>

            <div className="flex flex-wrap justify-center items-center">
              <div className="mr-[30px]">
                <span className="mr-[20px]">Show :</span>
                <span className="nice-select">12</span>
              </div>
              <div className="mr-[30px]">
                <span className="mr-[20px]">Show :</span>
                <span className="nice-select">12</span>
              </div>
              <div>
                <div
                  style={{
                    backgroundImage:
                      "linear-gradient(166deg, #f22876 0%, #942dd9 100%)",
                  }}
                  className=" w-[40px] h-[40px] rounded-[50%] flex justify-center items-center leading-10 text-base text-[#fff]"
                >
                  <i className="fas fa-search"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* shop product  card start here  */}

        <div className="grid grid-cols-4 py-5 gap-5 ">
          {shopData.map((product) => (
            <div>
              <div className="border-[1px] ] shop-product-card bg-[#fff] border-[#0003] mb-7 overflow-hidden ease-in rounded-lg">
                <div className="relative overflow-hidden">
                  <img className="w-full" src={product.image} alt="" />
                  <ul className="more-links">
                    <li>
                      <a href="#">
                        <i className="fas fa-sliders-h"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-eye"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="content relative pb-[30px] px-[30px] pt-[62px]">
                  <span
                    className="w-[60px] h-[60px] flex text-white justify-center items-center font-bold text-[24px] absolute right-[10px] top-[-30px] leading-[60px] rounded-[50%]"
                    style={{
                      backgroundImage:
                        "linear-gradient(166deg, #f22876 0%, #942dd9 100%)",
                    }}
                  >
                    $15
                  </span>
                  <h4 className="text-[24px] text-[#000] leading-[34px] font-semibold">
                    Butterfly Rings
                  </h4>
                  <div className="flex items-center mt-2">
                    <div className="text-[12px] text-[#f87115] ">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <span className="text-[15px] mx-2">|</span>
                    <span className="text-[14px]">229 review</span>
                  </div>
                  <div className="hover-effect mt-[24px] cursor-pointer">
                    <span className="text-[#000] font-semibold">Buy Now</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* pagination start here */}
        <ShopPagination />
      </div>
    </section>
  );
};
export default Shop;
