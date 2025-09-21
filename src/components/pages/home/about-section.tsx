import MatchaText from "@/components/ui/matcha-text";
import CoffeeText from "@/components/ui/coffee-text";

const AboutSection = () => {
  return (
    <section className="w-full mx-auto">
      <h1 className="text-2xl mb-6 font-medium">what about me?</h1>
      <p className="w-full text-zeta font-medium text-[16px] text-start mb-6">
        Hi, you can call me Akyas, and I&apos;m living proof that <CoffeeText>caffeine</CoffeeText> and deadlines
        are the most potent combination in the world. I spend most of my time
        in front of a screen, whether it&apos;s &apos;seriously coding&apos; or
        just playing Roblox, lol. 
        </p>
      <p className="w-full text-zeta font-medium text-[16px] text-start">
        I am also a photo editor, usually I edit the color grading on photos
        and then add text or what could be called <MatchaText>typography</MatchaText>.Thank you for taking the time to stop by.
      </p>
    </section>
  );
};

export default AboutSection;
