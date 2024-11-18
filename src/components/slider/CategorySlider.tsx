"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CategoryCard from "../CategoryCard";
import "./Sliders.css";
import {PiCaretLeftBold, PiCaretRightBold} from "react-icons/pi";

function CategorySlider(): JSX.Element {
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
    speed: 300,
    nextArrow: <GalleryNextArrow onClick={() => {}} />,
    prevArrow: <GalleryPrevArrow onClick={() => {}} />,
  };

  return (
    <section className="slider-contenair w-2/4 mx-auto mt-20">
      <Slider {...settings}>
        {categoryData.map((item, index) => {
          return <CategoryCard key={index} title={item.name} p={item.depiction} img={item.img} />;
        })}
      </Slider>
    </section>
  );
}

// function CategorySlider() {
//   const settings = {
//     dots: true,
//     className: 'centered-item',
//     centerMode: true,
//     focusOnSelect: true,
//     infinite: true,
//     centerPadding: '100px',
//     slidesToShow: 3,
//     speed: 500,
//   };
//   return (
//     <section className="slider-contenair w-2/4 mx-auto mt-20">
//       <Slider {...settings}>
//           {categoryData.map((item, index) => {
//             return <CategoryCard key={index} title={item.name} p={item.depiction} img={item.img} />;
//           })}
//       </Slider>
//     </section>
//   );
// }

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
    name: "super heavy",
    depiction: "€500 to €950",
    img: "bg-green-400",
  },
  {
    name: "luxury",
    depiction: "€950 and more",
    img: "bg-purple-400",
  },
];

const sliderData = [
  {
    name: "One",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
  },
  {
    name: "Two",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
  },
  {
    name: "Three",
    image:
      "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    name: "Four",
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    name: "Five",
    image:
      "https://images.unsplash.com/photo-1493238792000-8113da705763?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
];

export default CategorySlider;
