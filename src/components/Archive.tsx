import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/Table';

import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Badge from './ui/Badge';

// Define your data in a JSON-like structure
const projects = [
  {
    year: '2024',
    name: 'Course Finder',
    company: 'Personal Project',
    builtWith: ['Next.js', 'Typescript', 'Supabase'],
    link: 'https://www.coursefinder.se',
    displayLink: 'coursefinder.se',
  },
  {
    year: '2024',
    name: 'Fair Management App',
    company: 'Personal Project',
    builtWith: ['Next.js', 'Convex DB', 'Tailwind CSS'],
    link: '',
    displayLink: '',
  },
  {
    year: '2024',
    name: 'Golf Performance Analysis',
    company: 'School Project',
    builtWith: ['Python', 'Machine Learning', 'Feature Importance'],
    link: 'https://github.com/filipbagen/golf-performance-analysis',
    displayLink: 'Github',
  },
  {
    year: '2024',
    name: 'emelielarsson.se',
    company: 'Freelance Work',
    builtWith: ['React', 'Tailwind CSS'],
    link: 'https://emelielarsson.se',
    displayLink: 'emelielarsson.se',
  },
  {
    year: '2023',
    name: 'Facial Recognition',
    company: 'School Project',
    builtWith: ['PCA', 'SVM', 'Eigenfaces'],
    link: 'https://github.com/filipbagen/facial-recognition',
    displayLink: 'Github',
  },
  {
    year: '2023',
    name: 'Rocket Simulation',
    company: 'School Project',
    builtWith: ['Three.js', 'RK4', 'Physics'],
    link: 'https://github.com/filipbagen/rocket-simulation',
    displayLink: 'Github',
  },

  {
    year: '2023',
    name: 'Virtual Guide',
    company: 'School Project',
    builtWith: ['Python', 'Hugging Face', 'pyqt6'],
    link: 'https://github.com/filipbagen/virtual-guide',
    displayLink: 'Github',
  },
  {
    year: '2022',
    name: 'Looks & Books',
    company: 'Freelance Work',
    builtWith: ['React', 'Typescript'],
    link: 'https://looksandbooks.se',
    displayLink: 'looksandbooks.se',
  },
  {
    year: '2022',
    name: 'Personal Website v1',
    company: 'Personal Project',
    builtWith: ['React', 'Styled Components'],
    link: 'https://github.com/filipbagen/portfolio-v1',
    displayLink: 'Github',
  },

  {
    year: '2019',
    name: 'Guac-A-Mole',
    company: 'Personal Project',
    builtWith: ['HTML', 'CSS', 'JS'],
    link: 'https://filipbagen.github.io/guac-a-mole/',
    displayLink: 'Github',
  },
];

export default function Archive() {
  return (
    <div className="flex flex-col gap-12 w-full">
      <div className="flex flex-col gap-2 items-start">
        <Link to="/" className="group flex gap-1 justify-center items-center">
          <ArrowLeft
            strokeWidth={3}
            size={18}
            className="transform transition-transform group-hover:-translate-x-1"
          />
          <p>Back</p>
        </Link>
        <h1>All Projects</h1>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="text-sm">
            <TableHead>Year</TableHead>
            <TableHead>Project</TableHead>
            <TableHead>Made at</TableHead>
            <TableHead>Built with</TableHead>
            <TableHead>Link</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project, index) => (
            <TableRow key={index}>
              <TableCell className="text-opacity-85">{project.year}</TableCell>
              <TableCell className="font-semibold">{project.name}</TableCell>
              <TableCell>{project.company}</TableCell>
              <TableCell className="flex gap-2">
                {project.builtWith.map((skill) => (
                  <Badge key={skill} name={skill} />
                ))}
              </TableCell>
              <TableCell>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                >
                  {project.displayLink}
                  {project.displayLink && (
                    <ArrowUpRight
                      strokeWidth={3}
                      size={18}
                      className="transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  )}
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
