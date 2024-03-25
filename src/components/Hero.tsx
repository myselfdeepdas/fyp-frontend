import hero from "../assets/hero1.png";

const Hero = () => {
  return (
    <div>
      <img src={hero} className="w-full max-h-[540px] object-cover" />
    </div>
  );
};

export default Hero;
