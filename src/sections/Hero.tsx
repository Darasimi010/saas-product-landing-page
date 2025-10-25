import ArrowRight from "@/icons/ArrowRight";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center gap-4">
          <div className="md:w-[478px]">
            <div className="tag">Introducing version 3.2</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Your journey to peak performance
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Unlock your potential with a platform built to monitor your
              growth, inspire consistent action, and highlight every milestone
              you achieve.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get started for free</button>
              <button className="btn btn-text gap-1">
                Discover more
                <span>
                  <ArrowRight className="w-5 h-5" />
                </span>
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image
              src={cogImage}
              alt="Cog image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
            />
            <Image
              src={cylinderImage}
              alt="Cylinder image"
              width={220}
              height={220}
              className="hidden md:block -top-8 -left-32 md:absolute"
            />
            <Image
              src={noodleImage}
              alt="Noodle image"
              width={220}
              className="hidden lg:block lg:absolute top-[524px] left-[448px] rotate-[30deg]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
