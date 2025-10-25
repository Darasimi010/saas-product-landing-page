import logoImage from "@/assets/logosaas.png";
import Image from "next/image";
import SocialInsta from "@/icons/SocialInsta";
import SocialLinkedin from "@/icons/SocialLinkedin";
import SocialPin from "@/icons/SocialPin";
import SocialX from "@/icons/SocialX";
import SocialYoutube from "@/icons/SocialYoutube";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container mx-auto">
        <div className="inline-flex relative before:content-[''] before:w-full before:top-2 before:bottom-0 before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD98,#C2F0B1,#2FD8FE)] before:absolute">
          <Image
            src={logoImage}
            alt="Logo image"
            height={40}
            className="relative"
          />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6 text-3xl">
          <SocialInsta />
          <SocialLinkedin />
          <SocialPin />
          <SocialX />
          <SocialYoutube />
        </div>
        <p className="mt-6">
          &copy; 2025 Oluwadarasimi, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
