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
    <div className="flex py-28 flex-col self-stretch rounded-[56px] bg-custom-gradient-experience w-full">
      <Header badge="Experience" title="Where I have Worked" />

      <div className="flex flex-col gap-11 max-w-[620px] mx-auto">
        <CardContainer>
          <Card>
            <div className="flex flex-col w-full">
              <div className="flex justify-between">
                <CardTitle>Designer & Front End developer</CardTitle>
                <a href="">
                  <ArrowUpRight strokeWidth={3} />
                </a>
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

            <div className="flex gap-3">
              <Badge name="Typescript" />
              <Badge name="React" />
              <Badge name="Javascript" />
            </div>
          </Card>

          <Card>
            <div className="flex flex-col w-full">
              <div className="flex justify-between">
                <CardTitle>Programming Tutor</CardTitle>
                <a href="">
                  <ArrowUpRight strokeWidth={3} />
                </a>
              </div>
              <CardDescription>
                Linköping University • SEP 2021 — JUN 2022
              </CardDescription>
            </div>

            <CardContent>
              I was a part of a student-managed project which helps other
              students with programming. I helped students with programming
              questions about JavaScript, C++, MATLAB, OpenGL and Java.
            </CardContent>

            <div className="flex gap-3">
              <Badge name="Typescript" />
              <Badge name="React" />
              <Badge name="Javascript" />
            </div>
          </Card>

          <Card>
            <div className="flex flex-col w-full">
              <div className="flex justify-between">
                <CardTitle>Project Manager</CardTitle>
                <a href="">
                  <ArrowUpRight strokeWidth={3} />
                </a>
              </div>
              <CardDescription>
                Media Technology Day • APR 2022 — DEC 2022
              </CardDescription>
            </div>

            <CardContent>
              I managed the work fair for our program by implementing an agile
              method with ten colleagues My key strategy was to think
              innovatively and not rely on decisions and plannings from earlier
              years to encourage the development of our own work process. We
              achieved an all time income record while at the same time cut the
              working time-frame in half (3 months compared to 6 months). I was
              involved in developing pricing strategies and I actively sold the
              product to companies.
            </CardContent>

            <div className="flex gap-3">
              <Badge name="Typescript" />
              <Badge name="React" />
              <Badge name="Javascript" />
            </div>
          </Card>
        </CardContainer>

        {/* <a
          href=""
          className="flex items-center gap-2 w-fit py-2 px-4 transition rounded-md cursor-pointer hover:bg-[#251434]/5 group font-semibold"
        >
          View full resume
          <ArrowUpRight
            strokeWidth={3}
            className="transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </a> */}
      </div>
    </div>
  );
}
