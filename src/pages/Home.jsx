import React from 'react';

//images
import Right from '../images/Right.svg'
 import Above from '../images/Above.svg'
 import Left from '../images/Left.svg'
 import Down from '../images/Down.svg'
 import Image1 from '../images/Image1.svg'
 import Image2 from '../images/Image2.svg'
 import Image3 from '../images/Image3.svg'
 import Image4 from '../images/Image4.svg'

const Home = () => {
  return (
    <div>
      <section className="mt-[160px] px-[120px]">
        <h1 className="font-black text-[96px]">
          Explore Collections<span className="text-[#FFC700]">.</span>
        </h1>
        <div className="flex gap-[40px] mt-[40px]">
          <div>
            <div>
              <img src={Above} alt="img1" />
            </div>
            <div className="flex gap-[40px] mt-[40px]">
              <div>
                <img src={Left} alt="img3" />
              </div>
              <div>
                <div>
                  <img src={Down} alt="img2" />
                </div>
                <button className="px-[30px] py-[24px] font-black text-[20px] bg-[#FFC700] rounded-[8px] mt-[35px] flex items-center">
                  SEE ALL COLLECTIONS
                  <i className="fa-solid fa-arrow-right ml-[10px]"></i>
                </button>
              </div>
            </div>
          </div>
          <div>
            <img src={Right} alt="img4" />
          </div>
        </div>
      </section>
      <section className="mt-[160px] px-[120px]">
        <h1 className="font-black text-[96px] mb-[40px]">
          Top Products<span className="text-[#FFC700]">.</span>
        </h1>
        <div className="flex gap-[20px]">
          <div>
            <div>
              <img src={Image1} alt="product4" />
            </div>
            <div className="flex justify-between mt-[20px]">
              <div>
                <h5 className="font-bold text-[20px]">Boxy fit Pop Smoke T-shirt</h5>
                <p className="font-bold text-base text-gray-500 mt-[10px]">T-shirts</p>
              </div>
              <div className="font-bold text-[24px]">13.99 USD</div>
            </div>
          </div>

          <div>
            <div>
              <img src={Image2} alt="product3" />
            </div>
            <div className="flex justify-between mt-[20px]">
              <div>
                <h5 className="font-bold text-[20px]">Boxy fit Pop Smoke T-shirt</h5>
                <p className="font-bold text-base text-gray-500 mt-[10px]">T-shirts</p>
              </div>
              <div className="font-bold text-[24px]">13.99 USD</div>
            </div>
          </div>

          <div>
            <div>
              <img src={Image4} alt="product2" />
            </div>
            <div className="flex justify-between mt-[20px]">
              <div>
                <h5 className="font-bold text-[20px]">Boxy fit Pop Smoke T-shirt</h5>
                <p className="font-bold text-base text-gray-500 mt-[10px]">T-shirts</p>
              </div>
              <div className="font-bold text-[24px]">13.99 USD</div>
            </div>
          </div>

          <div>
            <div>
              <img src={Image3} alt="product1" />
            </div>
            <div className="flex justify-between mt-[20px]">
              <div>
                <h5 className="font-bold text-[20px]">Boxy fit Pop Smoke T-shirt</h5>
                <p className="font-bold text-base text-gray-500 mt-[10px]">T-shirts</p>
              </div>
              <div className="font-bold text-[24px]">13.99 USD</div>
            </div>
          </div>
        </div>
        <a href="./product.html">
          <button className="px-[30px] py-[24px] font-black text-[20px] text-[#fff] bg-[#1D1D1D] rounded-[8px] mt-[35px] flex items-center">
            SEE ALL PRODUCTS
            <i className="fa-solid fa-arrow-right ml-[10px]"></i>
          </button>
        </a>
      </section>
      <div className="w-full] items-center flex text-center justify-center">
        <section className="mt-[160px] bg-[#1D1D1D] text-white w-full rounded-[10px]">
          <div className="flex flex-col ">
            <h1 className="font-medium text-5xl text-center px-[411px] py-[60px] flex items-center justify-center ">
              Don’t miss out and join our monthly newsletter to know about new arrivals.
            </h1>
            <div className="relative mb-[96px]">
              <input
                className=" h-[75px] font-bold text-[24px] text-black rounded-[8px] w-[641px]"
                placeholder="Your E-mail"
              />
              <i className="fa-solid fa-arrow-up absolute text-black text-[36px] rotate-[45deg] top-[50%] right-[16px] transform -translate-y-1/2"></i>
            </div>
          </div>
        </section>
      </div>
      <hr className="mt-[160px]" />
      <footer className="px-[120px] py-[50px]">
        <div className="flex justify-between">
          <div className="flex items-center gap-[56px]">
            <div>
              <img src="./images/Home/Logo-b&w.png" alt="Logo" />
            </div>
            <div>
              <p className="font-semibold text-base">© 2023 Company Name. </p>
            </div>
          </div>
          <div className="flex items-center gap-[30px] font-semibold text-base">
            <div>
              <p>Privacy Policy</p>
            </div>
            <div>
              <p>Terms & Conditions</p>
            </div>
            <div>
              <p>Contact</p>
            </div>
            <div className="bg-black text-white rounded-[6px] p-[10px]">
              <p>English</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
