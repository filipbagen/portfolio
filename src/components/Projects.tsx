import React from 'react';
import Header from './ui/Header';
import Badge from './ui/Badge';
import { Github, ArrowUpRight } from 'lucide-react';
import { Card, CardContent, CardTitle } from './ui/Card';

interface ProjectCardProps {
  title: string;
  description: string;
  skills: string[];
  githubLink?: string;
  externalLink?: string;
  imgSrc: string;
  imgAlt: string;
  reverse?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  skills,
  githubLink,
  externalLink,
  imgSrc,
  imgAlt,
  reverse = false,
}) => {
  return (
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}>
      <Card>
        <div className="flex flex-row justify-between w-full">
          <CardTitle>{title}</CardTitle>
          <div className="flex gap-2">
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <Github size={22} />
              </a>
            )}
            {externalLink && (
              <a href={externalLink} target="_blank" rel="noopener noreferrer">
                <ArrowUpRight size={22} />
              </a>
            )}
          </div>
        </div>

        <CardContent>{description}</CardContent>

        <div className="flex gap-3">
          {skills.map((skill, index) => (
            <Badge key={index} name={skill} />
          ))}
        </div>
      </Card>

      <img src={imgSrc} alt={imgAlt} className="w-96 object-contain" />
    </div>
  );
};

export default function Projects() {
  return (
    <div className="flex p-28 flex-col self-stretch rounded-[56px] bg-custom-gradient-projects w-full">
      <Header
        badge="Projects"
        title="What I Have Done"
        paragraph="There are the projects which I'm most proud of"
      />

      <div className="flex flex-col gap-24">
        <ProjectCard
          title="Firebase Authentication"
          description="I developed a custom Firebase Authentication solution for a company-school fair platform, enabling companies to create an account, book their booth with various accessories, sign contracts and providing admins with features like revenue tracking, display of all participating companies and invoice generation."
          skills={['Typescript', 'React', 'Javascript']}
          githubLink="https://github.com/your-repo"
          externalLink="https://your-project-link.com"
          imgSrc="src/assets/image.png"
          imgAlt="Firebase Authentication Project"
        />
        <ProjectCard
          title="Firebase Authentication"
          description="I developed a custom Firebase Authentication solution for a company-school fair platform, enabling companies to create an account, book their booth with various accessories, sign contracts and providing admins with features like revenue tracking, display of all participating companies and invoice generation."
          skills={['Typescript', 'React', 'Javascript']}
          githubLink="https://github.com/your-repo"
          externalLink="https://your-project-link.com"
          imgSrc="src/assets/image.png"
          imgAlt="Firebase Authentication Project"
          reverse
        />
        <ProjectCard
          title="Firebase Authentication"
          description="I developed a custom Firebase Authentication solution for a company-school fair platform, enabling companies to create an account, book their booth with various accessories, sign contracts and providing admins with features like revenue tracking, display of all participating companies and invoice generation."
          skills={['Typescript', 'React', 'Javascript']}
          githubLink="https://github.com/your-repo"
          externalLink="https://your-project-link.com"
          imgSrc="src/assets/image.png"
          imgAlt="Firebase Authentication Project"
        />
      </div>
    </div>
  );
}
