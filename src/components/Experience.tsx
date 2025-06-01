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
                <CardTitle>AI Engineer</CardTitle>
                <a
                  href="https://www.devant.ai"
                  className="p-2 hover:translate-x-1 hover:-translate-y-1 transition rounded-md"
                >
                  <ArrowUpRight strokeWidth={3} />
                </a>
              </div>
              <CardDescription>Devant • JAN 2025 — MAY 2025</CardDescription>
            </div>

            <CardContent>
              Devant provides high-quality synthetic data for training and
              validating machine learning models, specializing in realistic,
              human-centric data. To address challenges in aligning their data
              pipeline with real-world use cases, I compared their CNN-based
              segmentation model against a Vision Transformer (ViT) model that I
              designed and implemented. By improving the training pipeline and
              analyzing performance across critical metrics, I highlighted key
              trade-offs between models, enabling Devant to deliver stronger
              solutions and move closer to offering ready-to-use models for
              clients.
            </CardContent>

            <div className="flex flex-wrap gap-3">
              <Badge name="Vision Transformer" />
              <Badge name="Synthetic Data" />
              <Badge name="R&D" />
            </div>
          </Card>

          <Card>
            <div className="flex flex-col w-full">
              <div className="flex justify-between">
                <CardTitle>Quality Assurance Engineer</CardTitle>
                <a
                  href="https://www.devant.ai"
                  className="p-2 hover:translate-x-1 hover:-translate-y-1 transition rounded-md"
                >
                  <ArrowUpRight strokeWidth={3} />
                </a>
              </div>
              <CardDescription>Devant • JUN 2024 — AUG 2024</CardDescription>
            </div>

            <CardContent>
              Devant provides high-quality synthetic data for machine learning
              workflows, with a focus on realism and scalability. As a Quality
              Assurance Engineer, I improved the synthetic data pipeline by
              automating QA processes and developing tools to evaluate metadata
              accuracy. My work reduced manual testing by 50% and increased
              metadata accuracy by 10%, ensuring more reliable synthetic data
              generation. My contributions enhanced the pipeline's efficiency
              and consistency, bringing significant value to Devant's machine
              learning solutions.
            </CardContent>

            <div className="flex flex-wrap gap-3">
              <Badge name="Machine Learning" />
              <Badge name="Testing Pipelines" />
              <Badge name="Data Analysis" />
            </div>
          </Card>

          <Card>
            <div className="flex flex-col w-full">
              <div className="flex justify-between">
                <CardTitle>Frontend Developer</CardTitle>
              </div>
              <CardDescription>
                Unga Utvecklare • MAY 2016 — DEC 2020
              </CardDescription>
            </div>

            <CardContent>
              Unga Utvecklare is a consulting firm specializing in tailored
              digital solutions. I co-founded the company and played a key role
              in delivering a custom website for a small business seeking a
              professional online presence. Using React and Tailwind CSS, I
              designed and developed a visually cohesive and SEO-optimized
              platform that aligned with the client's goals. By maintaining
              close communication and delivering a user-friendly solution, I
              helped the business improve customer engagement and establish a
              strong foundation for future growth.
            </CardContent>

            <div className="flex flex-wrap gap-3">
              <Badge name="React" />
              <Badge name="UI/UX" />
              <Badge name="App Development" />
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
