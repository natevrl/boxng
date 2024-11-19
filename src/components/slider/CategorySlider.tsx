"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BeltCard from "../BeltCard";
import "./Sliders.css";
import {PiCaretLeftBold, PiCaretRightBold} from "react-icons/pi";

interface CategorySliderProps {
  funcToGetCategory: (category: string) => void;
}

function CategorySlider({funcToGetCategory}: CategorySliderProps): JSX.Element {
  const GalleryPrevArrow = ({onClick}: { onClick: () => void }) => {
    return (
      <div  className="custom-prevArrow" onClick={onClick}>
        <PiCaretLeftBold size={24} />
      </div>
    );
  };
  const GalleryNextArrow = ({onClick}: { onClick: () => void }) => {
    return (
      <div  className="custom-nextArrow" onClick={onClick}>
        <PiCaretRightBold size={24} />
      </div>
    );
  };
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    speed: 100,
    nextArrow: <GalleryNextArrow onClick={() => {}} />,
    prevArrow: <GalleryPrevArrow onClick={() => {}} />,
  };



  return (
    <section className="h-full w-full flex flex-col pt-[80px] items-center">
      <h1>Choose Category</h1>
    <div className="slider-contenair w-2/4 min-w-[600px] mx-auto">
      <Slider {...settings}>
        {categoryData.map((item, index) => {
          return <BeltCard key={index} title={item.name} p={item.depiction} img={item.img} funcToGetCategory={funcToGetCategory}/>;
        })}
      </Slider>
    </div>
    </section>
  );
}


interface Category {
  name: string;
  depiction: string;
  img: string;
}

const categoryData: Category[] = [
  {
    name: "feather",
    depiction: "€30 to €60",
    img: "bg-red-400",
  },
  {
    name: "welter",
    depiction: "€60 to €120",
    img: "bg-orange-400",
  },
  {
    name: "middle",
    depiction: "€120 to €250",
    img: "bg-indigo-400",
  },
  {
    name: "heavy",
    depiction: "€250 to €500",
    img: "bg-blue-400",
  },
  {
    name: "super_heavy",
    depiction: "€500 to €950",
    img: "bg-green-400",
  },
  {
    name: "luxury",
    depiction: "€950 and more",
    img: "bg-purple-400",
  },
];

export default CategorySlider;
