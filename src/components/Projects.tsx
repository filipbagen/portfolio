import React from 'react';
import { Link } from 'react-router-dom';

import Header from './ui/Header';
import Badge from './ui/Badge';
import { Github, ArrowUpRight } from 'lucide-react';
import { Card, CardContainer, CardContent, CardTitle } from './ui/Card';

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
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
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

          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <Badge key={index} name={skill} />
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
    <div className="flex p-4 md:pb-12 pt-12 md:px-12 flex-col self-stretch md:rounded-[56px] rounded-3xl bg-custom-gradient-projects dark:bg-custom-gradient-projects-dark w-full">
      <Header
        badge="Projects"
        title="What I Have Done"
        paragraph="These are my most recent projects that I'm most proud of."
      />

      <div className="flex flex-col md:gap-16 gap-12">
        <ProjectCard
          title="Course Finder"
          description="SaaS tool designed to streamline course selection for graduate students at Linköping University, featuring detailed course information, personalized scheduling, and social connectivity."
          skills={['Next.js', 'Typescript', 'Supabase']}
          githubLink="https://github.com/filipbagen/TDDD27_2024_course_finder_next"
          externalLink="https://coursefinder.se"
          imgSrc="assets/course-finder.jpg"
          imgAlt="Course Finder"
        />

        <ProjectCard
          title="Multi Agent Misconception Analysis"
          description="Research project, made at UC Berkeley, that aims to predict and analyze misconceptions within a multi-agent system to better understand and explain student errors in mathematical problem-solving."
          skills={['Exchange of Though', 'DSPy', 'APIs']}
          githubLink="https://github.com/CS194Group/multi-agent-misconceptions"
          externalLink="https://cs194group-misconception-webpage-home-ff9be8.streamlit.app"
          imgSrc="assets/multi-agent-misconceptions.png"
          imgAlt="Multi Agent Misconceptions"
          reverse
        />

        <ProjectCard
          title="Fair Management App"
          description="Currently developing a Fair Management SaaS platform designed to streamline expo and fair organization, featuring event creation, vendor coordination, attendee management, promotional activities, and real-time analytics."
          skills={['Next.js', 'Convex DB', 'Tailwind']}
          githubLink="https://github.com/denmo530/fairify"
          imgSrc="assets/event-app.jpg"
          imgAlt="Fair Managment App"
        />
      </div>

      <Link
        to="/archive"
        className="flex items-center gap-2 w-fit py-2 px-4 transition rounded-md cursor-pointer hover:bg-[#251434]/5 group font-semibold"
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
