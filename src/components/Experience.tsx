import Header from './ui/Header';
import Badge from './ui/Badge';
import { ArrowUpRight } from 'lucide-react';

import {
  Card,
  CardContainer,
  CardContent,
  CardDescription,
  CardTitle,
} from './ui/Card';

export default function Experience() {
  return (
    <div className="flex p-4 md:pb-12 pt-12 md:px-28 flex-col self-stretch md:md:rounded-[56px] rounded-3xl bg-custom-gradient-experience dark:bg-custom-gradient-experience-dark w-full">
      <Header badge="Experience" title="Where I have Worked" />

      <div className="flex flex-col md:gap-11 gap-6 max-w-[620px] mx-auto">
        <CardContainer>
          <Card>
            <div className="flex flex-col w-full">
              <div className="flex justify-between">
                <CardTitle>Summer Internship</CardTitle>
                <a
                  href="https://www.devant.ai"
                  className="p-2 hover:translate-x-1 hover:-translate-y-1 transition rounded-md"
                >
                  <ArrowUpRight strokeWidth={3} />
                </a>
              </div>
              <CardDescription>Devant • JUN 2024 — PRESENT</CardDescription>
            </div>

            <CardContent>
              At Deviant, I support the development of high-quality synthetic
              data for Machine Learning. My tasks includes writing scripts to
              analyze output metadata, visualizing metadata over images for
              quality assurance, automating tests to catch potential issues, and
              training neural networks to predict metadata accuracy. This role
              enhanced my skills in Python, data analysis, and QA processes.
            </CardContent>

            <div className="flex flex-wrap gap-3">
              <Badge name="Quality Assurance" />
              <Badge name="Data Analysis" />
              <Badge name="Python" />
            </div>
          </Card>

          <Card>
            <div className="flex flex-col w-full">
              <div className="flex justify-between">
                <CardTitle>Project Manager</CardTitle>
                <a
                  href="https://www.medieteknikdagen.se"
                  className="p-2 hover:translate-x-1 hover:-translate-y-1 transition rounded-md"
                >
                  <ArrowUpRight strokeWidth={3} />
                </a>
              </div>
              <CardDescription>
                Media Technology Day • APR 2022 — DEC 2022
              </CardDescription>
            </div>

            <CardContent>
              I managed the work fair for our program, leading a team of ten
              colleagues using agile methodologies. By encouraging innovative
              thinking and developing our own processes, we set a new income
              record while reducing the project timeframe from six months to
              three. I contributed to pricing strategy development and actively
              sold the event to companies.
            </CardContent>

            <div className="flex flex-wrap gap-3">
              <Badge name="Project Management" />
              <Badge name="Sales" />
              <Badge name="Marketing" />
            </div>
          </Card>

          <Card>
            <div className="flex flex-col w-full">
              <div className="flex justify-between">
                <CardTitle>Designer & Front-End Developer</CardTitle>
                {/* <a href="">
                  <ArrowUpRight strokeWidth={3} />
                </a> */}
              </div>
              <CardDescription>
                Unga Utvecklare • MAY 2016 — DEC 2020
              </CardDescription>
            </div>

            <CardContent>
              I ran this consulting firm with a few of my friends. This is where
              I learnt the basics of customer contact, web development and
              design principles. I designed 50+ websites, logos, apps and
              animations, some of which are still up and running. I occasionally
              acted as a photographer and videographer. I feel confident both
              behind the camera and while editing.
            </CardContent>

            <div className="flex flex-wrap gap-3">
              <Badge name="UX & UI" />
              <Badge name="Web Development" />
            </div>
          </Card>
        </CardContainer>

        <a
          href="assets/doc/resume.pdf"
          className="flex items-center gap-2 w-fit py-2 px-4 transition rounded-md cursor-pointer hover:bg-[#251434]/5 group font-semibold"
        >
          View full resume
          <ArrowUpRight
            strokeWidth={3}
            className="transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </a>
      </div>
    </div>
  );
}
