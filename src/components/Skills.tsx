import Header from './ui/Header';
import SkillCard from './ui/SkillCard';

export default function Skills() {
  return (
    <div className="flex p-4 py-16 lg:px-28 flex-col items-center sm:items-start bg-custom-gradient-skills dark:bg-custom-gradient-skills-dark rounded-[56px]">
      <Header
        badge="Skills"
        title="What I Can Do"
        paragraph="Through the years, I've had the opportunity to learn and develop some important, fun and even unnecessary skills. Here are a few examples. "
      />

      <div className="grid lg:grid-cols-2 gap-12 sm:w-full sm:mx-auto justify-items-center">
        <SkillCard
          imageSrc="assets/emoji/robot_face.png"
          title="AI & Machine Learning "
          description="I am specializing in AI and Machine Learning during my master's and I have a strong foundation in Python and key libraries such as NumPy, pandas, and scikit-learn. I am passionate about leveraging data to derive insights and improve decision-making processes."
        />

        <SkillCard
          imageSrc="assets/emoji/computer.png"
          title="Full-Stack Development"
          description="With over 8 years of experience, I have developed strong skills in both frontend and backend development. Skilled in Next.js, TypeScript, and Tailwind, I enjoy solving complex problems and building scalable, robust web applications that deliver excellent user experiences."
        />

        <SkillCard
          imageSrc="assets/emoji/star2.png"
          title="Frontend Development"
          description="Extensive experience in creating responsive and interactive web applications using HTML, CSS, JavaScript, and frameworks like React. My projects emphasize performance, accessibility, and seamless user experiences."
        />

        <SkillCard
          imageSrc="assets/emoji/art.png"
          title="UI/UX Design "
          description="With a keen eye for design and user experience, I create intuitive and visually appealing interfaces. Proficient in Figma, Affinity Designer, and Adobe Illustrator, I design user-centered apps and websites that enhance user engagement and satisfaction."
        />

        <SkillCard
          imageSrc="assets/emoji/rocket.png"
          title="Project Management"
          description="Proven ability to lead and organize teams to achieve specific goals and objectives. I have successfully managed projects from conception to completion, ensuring timely delivery and quality outcomes."
        />

        <SkillCard
          imageSrc="assets/emoji/pizza.png"
          title="Cooking"
          description="This isn't a job-related skill and might not be relevant for my next employer, but I'm a self-appointed master in the kitchen. I just wanted to take a moment to brag about my culinary skills."
        />
      </div>
    </div>
  );
}
