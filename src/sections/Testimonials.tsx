import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const testimonials = [
  {
    text: "Our team’s productivity skyrocketed since we started using this tool.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "This platform has completely redefined how our team works together. Our efficiency has never been higher.",
    imageSrc: avatar2.src,
    name: "Alex Monroe",
    username: "@alexmonroe",
  },
  {
    text: "Managing projects is no longer stressful. I can track every detail and nothing slips through the cracks.",
    imageSrc: avatar3.src,
    name: "Jordan Roe",
    username: "@jroe72",
  },
  {
    text: "The customization and ease of use set this apart from anything else we have tried.",
    imageSrc: avatar4.src,
    name: "Taylor Kiera",
    username: "@taylorthedesigner",
  },
  {
    text: "Clear progress tracking and task breakdowns make it simple to stay aligned as a team.",
    imageSrc: avatar5.src,
    name: "Casey Harden",
    username: "@sassycasey91",
  },
  {
    text: "We’ve improved communication across departments and finally have one central hub for everything.",
    imageSrc: avatar6.src,
    name: "Morgan Liebnitz",
    username: "@itsMorganLeibnitz",
  },
  {
    text: "The clean design and powerful features make this the only tool I recommend to colleagues.",
    imageSrc: avatar7.src,
    name: "Jason Doe",
    username: "@jasonnotstatham",
  },
  {
    text: "It keeps the whole team aligned, and I never worry about missing deadlines anymore.",
    imageSrc: avatar8.src,
    name: "Riley Sarah",
    username: "@sarah.riley9",
  },
  {
    text: "The balance of customization and simplicity is unmatched. We can set it up our way without losing time.",
    imageSrc: avatar9.src,
    name: "Alex Max",
    username: "@maximaalex09",
  },
  {
    text: "Finally, a tool that simplifies planning instead of complicating it. Every project feels achievable now.",
    imageSrc: avatar1.src,
    name: "Lucas Shelby",
    username: "@shelby27",
  },
  {
    text: "Since switching, our output has doubled without the late nights. It feels like we’ve unlocked a hidden gear.",
    imageSrc: avatar5.src,
    name: "Hamilton Alexander",
    username: "@founding-father1",
  },
  {
    text: "Planning and executing events has never been easier since we switched to this.",
    imageSrc: avatar2.src,
    name: "Taylor Kim",
    username: "@kimthewise234",
  },
];

const firstColumn = testimonials.slice(0, 4);
const secondColumn = testimonials.slice(4, 8);
const thirdColumn = testimonials.slice(8, 12);

const TestimonialsColumns = (props: {
  className?: string;
  testimonials: typeof testimonials;
}) => {
  return (
    <div
      className={twMerge(
        "flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]",
        props.className
      )}
    >
      {props.testimonials.map(({ text, imageSrc, name, username }) => (
        <div key={username} className="card">
          <div className="">{text}</div>
          <div className="flex gap-2 items-center mt-5">
            <Image
              src={imageSrc}
              alt={name}
              width={40}
              height={40}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex flex-col">
              <div className="font-medium tracking-tight leading-5">{name}</div>
              <div className="leading-5 tracking-tight text-black/60">
                {username}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Testimonials</div>
          </div>
          <h2 className="section-title mt-5">Hear from our users</h2>
          <p className="section-description mt-5">
            From intuitive design to powerful features, our app has become an
            essential tool for users around the world.
          </p>
        </div>
        <div className="flex justify-center gap-6">
          <TestimonialsColumns testimonials={firstColumn} />
          <TestimonialsColumns
            testimonials={secondColumn}
            className="hidden md:flex"
          />
          <TestimonialsColumns
            testimonials={thirdColumn}
            className="hidden lg:flex"
          />
        </div>
      </div>
    </section>
  );
};
