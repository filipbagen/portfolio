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
    year: '2020',
    name: 'Project 1',
    company: 'Company 1',
    builtWith: ['React', 'Typescript'],
    link: 'website.com',
  },
  {
    year: '2021',
    name: 'Project 2',
    company: 'Company 2',
    builtWith: ['Vue', 'JavaScript'],
    link: 'anotherwebsite.com',
  },
  // Add more project objects as needed
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
                  {project.link}
                  <ArrowUpRight
                    strokeWidth={3}
                    size={18}
                    className="transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
