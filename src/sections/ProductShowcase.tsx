"use client";
import productImage from "@/assets/product-image.png";
import tubeImage from "@/assets/tube.png";
import pyramidImage from "@/assets/pyramid.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const ProductShowcase = () => {
  const productShowcaseRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: productShowcaseRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={productShowcaseRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container mx-auto">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Unlock your full potential</div>
          </div>
          <h2 className="section-title mt-5">
            Smarter tools for measurable progress
          </h2>
          <p className="section-description mt-5">
            Quickly transform your ideas into a powerful, responsive workspace
            without writing a single line of code. Build, launch, and manage
            with ease, all in one place.
          </p>
        </div>
        <div>
          <div className="relative">
            <Image src={productImage} alt="Product image" className="mt-10" />
            <motion.img
              src={pyramidImage.src}
              alt="Pyramid image"
              height={262}
              width={262}
              className="hidden md:block absolute -right-36 -top-28"
              style={{ translateY }}
            />
            <motion.img
              src={tubeImage.src}
              alt="Tube image"
              height={248}
              width={248}
              className="hidden md:block absolute -left-28 bottom-32"
              style={{ translateY }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
