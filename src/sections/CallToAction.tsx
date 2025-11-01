"use client";
import ArrowRight from "@/icons/ArrowRight";
import springImage from "@/assets/spring.png";
import starImage from "@/assets/star.png";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const CallToAction = () => {
  const callToActionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: callToActionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={callToActionRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container mx-auto">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5">
            Take control of your projects with a platform built to help you
            grow, stay motivated, and achieve more.
          </p>
          <motion.img
            src={springImage.src}
            alt="Spring image"
            width={360}
            height={360}
            className="hidden md:block absolute -right-[331px] -top-[19px]"
            style={{ translateY }}
          />
          <motion.img
            src={starImage.src}
            alt="Star image"
            width={360}
            height={360}
            className="hidden md:block absolute -left-[350px] -top-[137px]"
            style={{ translateY }}
          />
        </div>
        <div className="flex justify-center gap-2 mt-10">
          <button className="btn btn-primary">Get started for free</button>
          <button className="btn btn-text gap-1">
            <span>Discover more</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
