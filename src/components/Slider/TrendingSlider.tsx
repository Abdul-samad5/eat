import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import Chef from "../Chef";
import Image from "next/image";

const TrendingSlider = () => {
  const filteredItems = [
    {
      id: 1,
      
    },
    {
      id: 2,
      
    },
    {
      id: 3,
      
    },
    {
      id:4,
      
    },
    {
      id: 5,
      
    },
    {
      id: 6,
      
    },
    {
      id: 7,
      
    },
    {
      id: 8,
      
    },
    {
      id: 9,
      
    },
  ];

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 235;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 235;
  };
  return (
    <>
      <div className="trending">
        {/* <div className="max-w-7xl mr-auto ml-auto pr-8 pl-8 flex flex-col justify-center"> */}
        <div className="container">
          <div className="title-btns mb-24">
            <h3>This month chef&apos;s</h3>
            <p className="w-80">Lorem ipsum dolor sit amet consectetur. Enim morbi arcu hendrerit feugiat.
               Id dui bibendum massa auctor.</p>
            <div className="btns">
              <button title="scroll left" onClick={slideLeft}>
                <AiOutlineArrowLeft />
              </button>
              <button title="scroll right" onClick={slideRight}>
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>
          <div className="row-container" id="slider">
            {filteredItems.map((item) => (
              <div key={item.id} className="row-item">
                  <div>
                      <Chef src='/image.png' name='hello' chef='@Chef_bassy'/>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-around">
        <div>
          <Image 
          src='/Rectangle 4172.png'
          width={550}
          height={530}
          alt="one"
          />
        </div>
        <div className="flex">
        <Image 
          className="pr-5"
          src='/Rectangle 4175.png'
          width={170}
          height={530}
          alt="one"
          />
           <Image 
           className="pr-5"
            src='/Rectangle 4173.png'
            width={170}
            height={530}
            alt="one"
          />
           <Image 
            src='/Rectangle 4174.png'
            width={170}
            height={530}
            alt="one"
          />
        </div>
      </div>
      <div className="flex justify-around mt-10">
        <div>
          <Image
            src='/shot.png'
            alt="screen"
            width={400}
            height={616}
            />
        </div>
        <div className="text-lighten mt-44">
          <h1 className="text-5xl font-bold w-96 mb-14">Download our app and join the Live Deals</h1>
          <div className="flex flex-row">
              <Image
              className="pr-5"
              src='/google.png'
              alt="google"
              width={170}
              height={50}
              />
               <Image
              src='/applestore.png'
              alt="google"
              width={170}
              height={50}
              />
          </div>
        </div>
      </div>
    </>
  );
};
export default TrendingSlider;