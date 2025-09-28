import ArrowRight from "@/icons/ArrowRight";
import cogImage from "@/assets/cog.png";
import Image from "next/image";

export const Hero = () => {
  return (
    <section>
      <div className="container">
        <div>
          <div className="text-sm inline-flex px-3 py-1 bg-transparent border border-[#222]/10 rounded-lg tracking-tight">
            Introducing version 3.2
          </div>
          <h1 className="text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
            Turn ambition into achievement
          </h1>
          <p className="text-xl text-[#010D3E] tracking-tight mt-6">
            Your goals deserve more than sticky notes and scattered apps. Our
            platform gives you a clear path forward to organize your work, track
            real progress, and celebrate every milestone along the way.
          </p>
          <div className="flex gap-1 items-center mt-[30px]">
            <button>Get started for free</button>
            <button>
              Discover more <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <Image src={cogImage} alt="Cog image" width={500} height={500} />
      </div>
    </section>
  );
};
