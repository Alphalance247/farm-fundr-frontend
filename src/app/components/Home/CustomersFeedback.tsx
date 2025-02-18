"use client";
import Container from "../common/container";
import HeadingTextWithSubHead from "../common/headingTextWithSubHead";
import ReviewCard from "../common/reviewCard";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../common/Buttons";
import { GoArrowRight } from "react-icons/go";

const CustomersFeedbacks = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="bg-[#FCFCFC]">
      <Container>
        <HeadingTextWithSubHead
          className="text-center mb-10"
          width={782}
          height={50}
          iconImage="/assets/LandingPage/icons/vector2.svg"
          heading={"What our customers are saying"}
          subhead={
            "Explore testimonials showcasing clients’ success stories with FarmFundr, highlighting the transformative agricultural investment journeys they’ve experienced."
          }
        />

        <Slider {...settings} className="mt-16">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </Slider>

        <Button
          size="medium"
          className="flex items-center gap-x-4 justify-center mt-20 text-center w-[535px] mx-auto"
        >
          <span>Explore More and Invest Now</span>
          <span>
            <GoArrowRight size={24} className="text-white" />
          </span>
        </Button>
      </Container>
    </section>
  );
};

export default CustomersFeedbacks;
