import React from 'react';
import { Link } from 'react-router-dom';

import Header from './ui/Header';
import Badge from './ui/Badge';
import { Github, ArrowUpRight } from 'lucide-react';
import { Card, CardContainer, CardContent, CardHeader } from './ui/Card';

interface ProjectCardProps {
  title: string;
  date?: string;
  description: React.ReactNode;
  tags: string[];
  githubLink?: string;
  externalLink?: string;
  imgSrc: string;
  imgAlt: string;
  reverse?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  date,
  description,
  tags,
  githubLink,
  externalLink,
  imgSrc,
  imgAlt,
  reverse = false,
}) => {
  return (
    <div
      className={`flex flex-col ${
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } gap-8 items-center`}
    >
      <div className="flex-1">
        <Card className="h-auto">
          <CardHeader
            title={title}
            description={date}
            actions={
              <div className="flex gap-2">
                {githubLink && (
                  <a href={githubLink} rel="noopener noreferrer">
                    <Github strokeWidth={2} />
                  </a>
                )}
                {externalLink && (
                  <a
                    href={externalLink}
                    rel="noopener noreferrer"
                    className="group p-1 rounded-md"
                  >
                    <ArrowUpRight
                      strokeWidth={3}
                      className="transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>
                )}
              </div>
            }
          />

          <CardContent>{description}</CardContent>

          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag, index) => (
              <Badge key={index} name={tag} />
            ))}
          </div>
        </Card>
      </div>

      <div className="md:w-[45%]">
        <CardContainer>
          <img
            src={imgSrc}
            alt={imgAlt}
            className="w-full object-contain rounded-xl"
          />
        </CardContainer>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <div className="flex gap-8 p-4 md:pb-12 pt-12 md:px-12 flex-col self-stretch md:rounded-4xl rounded-3xl bg-custom-gradient-projects dark:bg-custom-gradient-projects-dark w-full">
      <Header
        badge="Projects"
        title="What I Have Done"
        paragraph="These are my most recent projects that I'm most proud of."
      />

      <div className="flex flex-col md:gap-14 gap-10">
        <ProjectCard
          title="Amex Tracker"
          date="Feb 2026"
          description={
            <>
              My partner and I wanted to bring clarity to our monthly Amex
              invoices, which are dense PDFs with no built-in categorization. I
              built a tracker from scratch using{' '}
              <span className="font-semibold">Lovable</span> and{' '}
              <span className="font-semibold">Claude Code</span>, relying heavily
              on agentic coding to iterate fast and experiment with new tools.
              When a PDF invoice is uploaded, an{' '}
              <span className="font-semibold">AI intelligently scans</span> each
              entry and automatically extracts the date, purchaser, merchant name,
              and category. The result is a visual dashboard with{' '}
              <span className="font-semibold">
                category breakdowns, individual spend tracking, monthly trends, and
                total cashback
              </span>
              , transforming a confusing invoice into actionable insights.
            </>
          }
          tags={['React', 'TypeScript', 'AI/ML', 'Claude Code', 'Lovable']}
          githubLink="https://github.com/filipbagen/amex-tracker"
          imgSrc="assets/amex-tracker.png"
          imgAlt="Amex Tracker"
        />

        <ProjectCard
          title="Course Finder"
          date="Jan 2024 — Dec 2025"
          description={
            <>
              Course Finder is a web-based{' '}
              <span className="font-semibold">SaaS platform</span> I built to
              simplify the course selection process for graduate students at
              Linköping University. I developed the platform end to end, from
              concept to production, using{' '}
              <span className="font-semibold">Next.js</span>,{' '}
              <span className="font-semibold">TypeScript</span>, and{' '}
              <span className="font-semibold">Prisma</span>, with{' '}
              <span className="font-semibold">Supabase</span> for auth and{' '}
              <span className="font-semibold">Stripe</span> for subscription
              management. I also implemented an automated{' '}
              <span className="font-semibold">ETL pipeline</span> via GitHub
              Actions that ingests and refreshes course data monthly, and
              integrated social features like schedule management and peer
              connectivity. The platform{' '}
              <span className="font-semibold">
                reduced course selection time by 50%
              </span>{' '}
              and laid a clear path for AI-powered course recommendations.
            </>
          }
          tags={[
            'Next.js',
            'TypeScript',
            'Prisma',
            'Supabase',
            'PostgreSQL',
            'Stripe',
            'GitHub Actions',
          ]}
          githubLink="https://github.com/filipbagen/TDDD27_2024_course_finder_next"
          externalLink="https://coursefinder.se"
          imgSrc="assets/course-finder.jpg"
          imgAlt="Course Finder"
          reverse
        />

        <ProjectCard
          title="Multi-Agent Misconception Analysis"
          date="Aug 2024 — Dec 2024"
          description={
            <>
              A research project built at{' '}
              <span className="font-semibold">UC Berkeley</span> exploring how
              LLM agents can collaborate to improve learning outcomes. I
              developed a <span className="font-semibold">multi-agent system</span>{' '}
              to predict and analyze student misconceptions in mathematical
              problem-solving, using the{' '}
              <span className="font-semibold">
                Exchange-of-Thought (EoT) framework
              </span>
              , <span className="font-semibold">dspy</span>, and the{' '}
              <span className="font-semibold">OpenAI API</span>. The system
              processes student responses, generates likely misconceptions, and
              evaluates reasoning through{' '}
              <span className="font-semibold">semantic analysis</span>. By
              linking agents with distinct roles — like{' '}
              <span className="font-semibold">Memory</span> and{' '}
              <span className="font-semibold">Debate</span> - the system provides
              tailored explanations for incorrect answers, helping educators
              address student misunderstandings.
            </>
          }
          tags={[
            'Python',
            'DSPy',
            'OpenAI API',
            'Multi-Agent Systems',
            'Exchange-of-Thought',
          ]}
          githubLink="https://github.com/CS194Group/multi-agent-misconceptions"
          externalLink="https://cs194group-misconception-webpage-home-ff9be8.streamlit.app"
          imgSrc="assets/multi-agent-misconceptions.png"
          imgAlt="Multi Agent Misconceptions"
        />

        <ProjectCard
          title="Synthetic Data for Real-World Segmentation (Thesis)"
          date="Jan 2025 — Jun 2025"
          description={
            <>
              My master's thesis, published on DiVA, benchmarking{' '}
              <span className="font-semibold">Vision Transformer</span>{' '}
              architectures against{' '}
              <span className="font-semibold">CNN baselines</span> for
              synthetic-to-real segmentation at Devant. The ViT model achieved{' '}
              <span className="font-semibold">4.3% higher mIoU</span> while being{' '}
              <span className="font-semibold">9% more lightweight</span> and
              running at <span className="font-semibold">28% faster FPS</span>.
              The work highlighted critical trade-offs between model
              architectures and contributed to Devant's ability to deliver
              stronger, production-ready solutions.
            </>
          }
          tags={['ViT', 'CNN', 'Synthetic Data', 'Computer Vision', 'Python']}
          externalLink="https://www.diva-portal.org/smash/record.jsf?pid=diva2%3A1970762&dswid=-7822"
          imgSrc="assets/synthetic-data-thesis.png"
          imgAlt="Synthetic Data Thesis"
          reverse
        />
      </div>

      <Link
        to="/archive"
        className="flex items-center gap-2 w-fit py-2 px-4 transition rounded-md cursor-pointer hover:bg-primary/5 group font-semibold"
      >
        View Full Project Archive
        <ArrowUpRight
          strokeWidth={3}
          className="transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </Link>
    </div>
  );
}
