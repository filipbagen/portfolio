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
    <div
      className={`flex flex-col ${
        reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } gap-8 items-center`}
    >
      <div className="flex-1">
        <Card className="h-auto">
          <div className="flex flex-row justify-between w-full">
            <CardTitle>{title}</CardTitle>
            <div className="flex gap-2">
              {githubLink && (
                <a href={githubLink} rel="noopener noreferrer">
                  <Github size={22} />
                </a>
              )}
              {externalLink && (
                <a href={externalLink} rel="noopener noreferrer">
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
      </div>

      <div className="w-[45%]">
        <img
          src={imgSrc}
          alt={imgAlt}
          className="w-full object-contain rounded-xl"
        />
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <div className="flex p-28 flex-col self-stretch rounded-[56px] bg-custom-gradient-projects dark:bg-custom-gradient-projects-dark w-full">
      <Header
        badge="Projects"
        title="What I Have Done"
        paragraph="There are the projects which I'm most proud of"
      />

      <div className="flex flex-col gap-24">
        <ProjectCard
          title="Course Finder"
          description="SaaS tool designed to streamline course selection for graduate students at Linköping University, featuring detailed course information, personalized scheduling, and social connectivity."
          skills={['Next.js', 'Typescript', 'Supabase']}
          githubLink="https://github.com/filipbagen/TDDD27_2024_course_finder_next"
          imgSrc="public/assets/course-finder.jpg"
          imgAlt="Course Finder"
        />

        <ProjectCard
          title="Fair Management App"
          description="Currently developing a Fair Management SaaS Platform designed to streamline expo and fair organization, featuring event creation, vendor coordination, attendee management, promotional activities, and real-time analytics."
          skills={['Next.js', 'Convex DB', 'Tailwind']}
          githubLink="https://github.com/denmo530/fairify"
          imgSrc="public/assets/event-app.jpg"
          imgAlt="Fair Managment App"
          reverse
        />

        <ProjectCard
          title="Golf Performance Analysis"
          description="Analyzed PGA Tour data from 2010-2017 using machine learning models (Random Forest and SVM) to predict tournament winners and identify key performance metrics, achieving a maximum prediction accuracy of 91%."
          skills={['Python', 'Machine Learning', 'Feature Importance']}
          githubLink="https://github.com/filipbagen/golf-performance-analysis"
          imgSrc="public/assets/golf-analysis.jpg"
          imgAlt="Golf Performance Analysis"
        />
      </div>
    </div>
  );
}
