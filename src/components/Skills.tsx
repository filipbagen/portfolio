import Header from './ui/Header';
import SkillCard from './ui/SkillCard';

export default function Skills() {
  return (
    <div className="flex flex-col items-center sm:items-start bg-custom-gradient-skills dark:bg-custom-gradient-skills-dark rounded-[56px] p-28">
      <Header
        badge="Skills"
        title="What I Can Do"
        paragraph="Through the years, I've had the opportunity to learn and develop some important, fun and even unnecessary skills. Here are a few examples. "
      />

      <div className="grid lg:grid-cols-2 gap-12 sm:w-full sm:mx-auto justify-items-center">
        <SkillCard
          imageSrc="src/assets/memoji.png"
          title="Programming"
          description="I am a self-taught coder with over 8 years of experience. I enjoy the problem-solving aspect of programming and the satisfaction of seeing my code come to life."
        />

        <SkillCard
          imageSrc="src/assets/memoji.png"
          title="Programming"
          description="I am a self-taught coder with over 8 years of experience. I enjoy the problem-solving aspect of programming and the satisfaction of seeing my code come to life."
        />

        <SkillCard
          imageSrc="src/assets/memoji.png"
          title="Programming"
          description="I am a self-taught coder with over 8 years of experience. I enjoy the problem-solving aspect of programming and the satisfaction of seeing my code come to life."
        />

        <SkillCard
          imageSrc="src/assets/memoji.png"
          title="Programming"
          description="I am a self-taught coder with over 8 years of experience. I enjoy the problem-solving aspect of programming and the satisfaction of seeing my code come to life."
        />

        <SkillCard
          imageSrc="src/assets/memoji.png"
          title="Programming"
          description="I am a self-taught coder with over 8 years of experience. I enjoy the problem-solving aspect of programming and the satisfaction of seeing my code come to life."
        />

        <SkillCard
          imageSrc="src/assets/memoji.png"
          title="Programming"
          description="I am a self-taught coder with over 8 years of experience. I enjoy the problem-solving aspect of programming and the satisfaction of seeing my code come to life."
        />
      </div>
    </div>
  );
}
