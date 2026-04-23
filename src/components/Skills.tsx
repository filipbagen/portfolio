import Header from './ui/Header';
import SkillCard from './ui/SkillCard';

export default function Skills() {
  const renderSkillCard = (
    imageSrc: string,
    title: string,
    description: React.ReactNode
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
          'assets/emoji/computer.png',
          'Full-Stack Development',
          <>
            With experience spanning back to 2016, I've developed strong skills
            across both frontend and backend development. I work primarily with{' '}
            <span className="font-semibold">TypeScript</span>,{' '}
            <span className="font-semibold">React</span>,{' '}
            <span className="font-semibold">Next.js</span>, and{' '}
            <span className="font-semibold">Node.js</span> on the frontend, and{' '}
            <span className="font-semibold">Go</span>,{' '}
            <span className="font-semibold">gRPC</span>, and{' '}
            <span className="font-semibold">PostgreSQL</span> on the backend. I
            enjoy building scalable systems from scratch, from database schema
            and microservice architecture to responsive, user-facing UIs.
          </>
        )}

        {renderSkillCard(
          'assets/emoji/robot_face.png',
          'AI & Machine Learning',
          <>
            Specialized in AI and Machine Learning during my master's at
            Linköping University and UC Berkeley. I have hands-on experience
            with <span className="font-semibold">Python</span>,{' '}
            <span className="font-semibold">computer vision</span>, and{' '}
            <span className="font-semibold">deep learning</span>, and key
            libraries like <span className="font-semibold">NumPy</span>,{' '}
            <span className="font-semibold">pandas</span>, and{' '}
            <span className="font-semibold">scikit-learn</span>. I've designed
            and trained Vision Transformer models, built multi-agent LLM
            systems, and worked on synthetic data pipelines.
          </>
        )}

        {renderSkillCard(
          'assets/emoji/art.png',
          'Frontend Development',
          <>
            My core strength. I build responsive, interactive web applications
            with <span className="font-semibold">React</span>,{' '}
            <span className="font-semibold">Next.js</span>,{' '}
            <span className="font-semibold">TypeScript</span>, and{' '}
            <span className="font-semibold">Tailwind CSS</span>, with a strong
            emphasis on performance, accessibility, and seamless user
            experiences. I'm comfortable working with modern tooling like{' '}
            <span className="font-semibold">TanStack Router</span>,{' '}
            <span className="font-semibold">TanStack React Query</span>, and{' '}
            <span className="font-semibold">shadcn/ui</span>.
          </>
        )}

        {renderSkillCard(
          'assets/emoji/globe.png',
          'Backend & Infrastructure',
          <>
            Hands-on experience with <span className="font-semibold">Go</span>,{' '}
            <span className="font-semibold">gRPC</span>,{' '}
            <span className="font-semibold">Node.js</span>,{' '}
            <span className="font-semibold">tRPC</span>, and{' '}
            <span className="font-semibold">Drizzle ORM</span>. I've built
            event-driven microservices, established{' '}
            <span className="font-semibold">CI/CD pipelines</span> with GitHub
            Actions, managed cloud resources with{' '}
            <span className="font-semibold">Terraform</span> on{' '}
            <span className="font-semibold">GCP</span> and{' '}
            <span className="font-semibold">Azure</span>, and worked with{' '}
            <span className="font-semibold">Docker</span> and{' '}
            <span className="font-semibold">Kubernetes</span> for containerized
            deployments.
          </>
        )}

        {renderSkillCard(
          'assets/emoji/rocket.png',
          'Project Management',
          <>
            As Project Manager for an annual career fair, I led a
            team of 13, reworking the
            sponsorship model and sales process from scratch. The event achieved{' '}
            <span className="font-semibold">record-breaking income</span> in{' '}
            <span className="font-semibold">half the preparation time</span> of
            previous years.
          </>
        )}

        {renderSkillCard(
          'assets/emoji/pizza.png',
          'Cooking',
          <>
            Not a job-related skill and probably not relevant for my next
            employer, but I'm a self-appointed master in the kitchen. Just
            wanted to take a moment to brag about my culinary skills.
          </>
        )}
      </div>
    </div>
  );
}
