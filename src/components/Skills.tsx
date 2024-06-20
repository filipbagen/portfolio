import Header from './ui/Header';
import SkillCard from './ui/SkillCard';

export default function Skills() {
  const yearsOfExperience = new Date().getFullYear() - 2016;

  const renderSkillCard = (
    imageSrc: string,
    title: string,
    description: string
  ) => {
    return (
      <SkillCard imageSrc={imageSrc} title={title} description={description} />
    );
  };

  return (
    <div className="flex p-4 py-16 md:px-12 px-4 flex-col items-center md:items-start bg-custom-gradient-skills dark:bg-custom-gradient-skills-dark md:rounded-[56px] rounded-3xl">
      <Header
        badge="Skills"
        title="What I Can Do"
        paragraph="Through the years, I've had the opportunity to learn and develop some important, fun and even unnecessary skills. Here are a few examples. "
      />

      <div className="grid md:grid-cols-2 md:gap-x-10 md:gap-y-14 gap-14 md:w-full md:mx-auto justify-items-center mt-8 md:mt-8">
        {renderSkillCard(
          'assets/emoji/robot_face.png',
          'AI & Machine Learning',
          "I am specializing in AI and Machine Learning during my master's and I have a strong foundation in Python and key libraries such as NumPy, pandas, and scikit-learn. I am passionate about leveraging data to derive insights and improve decision-making processes."
        )}

        {renderSkillCard(
          'assets/emoji/computer.png',
          'Full-Stack Development',
          'With over ' +
            yearsOfExperience +
            ' years of experience, I have developed strong skills in both frontend and backend development. Skilled in Next.js, TypeScript, and Tailwind, I enjoy solving complex problems and building scalable, robust web applications that deliver excellent user experiences.'
        )}

        {renderSkillCard(
          'assets/emoji/star2.png',
          'Frontend Development',
          'Experience in creating responsive and interactive web applications both HTML, CSS, JS, and frameworks like React and Next.js. My projects emphasize performance, accessibility, and seamless user experiences.'
        )}

        {renderSkillCard(
          'assets/emoji/art.png',
          'UI/UX Design',
          'I create intuitive, visually appealing interfaces. Skilled in Figma, Affinity Designer, and Adobe Illustrator, I design user-centered apps and websites to boost engagement and satisfaction.'
        )}

        {renderSkillCard(
          'assets/emoji/rocket.png',
          'Project Management',
          'Proven ability to lead and organize teams to achieve specific goals and objectives. I have successfully managed projects from conception to completion, ensuring timely delivery and quality outcomes.'
        )}

        {renderSkillCard(
          'assets/emoji/pizza.png',
          'Cooking',
          "This is't a job-related skill and might not be relevant for my next employer, but I'm a self-appointed master in the kitchen. I just wanted to take a moment to brag about my culinary skills."
        )}
      </div>
    </div>
  );
}
