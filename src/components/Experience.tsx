import Header from './ui/Header';
import Badge from './ui/Badge';
import { ArrowUpRight } from 'lucide-react';
import { Card, CardHeader, CardContent } from './ui/Card';
import { useBalancedColumns } from './hooks/useBalancedColumns';

interface ExperienceItem {
  id: string;
  title: string;
  companyDate: React.ReactNode;
  description: React.ReactNode;
  tags: string[];
  url?: string;
}

const experienceItems: ExperienceItem[] = [
  {
    id: 'netlight-consultant',
    title: 'Software Engineer (Consultant)',
    companyDate: <span className="font-semibold">Netlight • Sep 2025 — Present</span>,
    url: 'https://www.netlight.com',
    description: (
      <>
        Netlight is a leading IT consultancy, where I've worked with{' '}
        <span className="font-semibold">fast-growing scale-ups</span>, helping
        them build core systems at critical stages of growth. At a legal tech
        startup with <span className="font-semibold">60,000+ users</span>, I
        took <span className="font-semibold">end-to-end ownership</span> of an
        in-app marketing tool, building everything from database schema and
        backend services to a creation wizard with audience targeting and
        analytics tracking. This replaced what had been hardcoded announcements
        with a self-service system that removed a key engineering bottleneck. I
        also established the application's{' '}
        <span className="font-semibold">
          testing and audit logging infrastructure
        </span>{' '}
        from scratch.
        <br />
        <br />
        Before that, at a{' '}
        <span className="font-semibold">greentech scale-up</span> building a
        carbon-neutral manufacturing plant, I helped develop a scalable HR
        system with full traceability across people, structures, and approvals,
        implementing <span className="font-semibold">event-driven microservices</span>{' '}
        with <span className="font-semibold">gRPC in Go</span>, building the
        React frontend, and setting up{' '}
        <span className="font-semibold">
          CI/CD pipelines and cloud infrastructure
        </span>{' '}
        with Terraform on GCP.
      </>
    ),
    tags: [
      'TypeScript',
      'React',
      'Go',
      'gRPC',
      'Node.js',
      'tRPC',
      'PostgreSQL',
      'Docker',
      'Kubernetes',
      'Azure',
      'GCP',
      'Terraform',
      'PostHog',
      'LaunchDarkly',
    ],
  },
  {
    id: 'devant-ai-engineer',
    title: 'AI Engineer',
    companyDate: <span className="font-semibold">Devant • Jan 2025 — Jun 2025</span>,
    url: 'https://www.devant.ai',
    description: (
      <>
        Devant provides high-quality synthetic data for training and validating
        machine learning models, specializing in realistic, human-centric data
        for computer vision. To address challenges in aligning their data pipeline
        with real-world use cases, I benchmarked their existing{' '}
        <span className="font-semibold">CNN-based segmentation model</span> against
        a <span className="font-semibold">Vision Transformer (ViT)</span>{' '}
        architecture that I designed and implemented. I improved the{' '}
        <span className="font-semibold">training and inference pipeline</span>,
        prepared evaluation datasets with consistent preprocessing and
        augmentation, and analyzed key metrics like accuracy, precision, and model
        size. The ViT I developed achieved{' '}
        <span className="font-semibold">4.3% higher mIoU</span> while being{' '}
        <span className="font-semibold">9% more lightweight</span> and running at{' '}
        <span className="font-semibold">28% faster FPS</span>, giving the team a
        clear path toward production-ready models for clients working with
        synthetic data.
      </>
    ),
    tags: [
      'Vision Transformer',
      'CNN',
      'Python',
      'Synthetic Data',
      'Computer Vision',
      'Model Evaluation',
    ],
  },
  {
    id: 'devant-qa-engineer',
    title: 'Quality Assurance Engineer',
    companyDate: <span className="font-semibold">Devant • Jun 2024 — Aug 2024</span>,
    url: 'https://www.devant.ai',
    description: (
      <>
        Devant faced challenges in ensuring the accuracy and reliability of its
        synthetic data pipeline. As a QA Engineer, I developed and automated a
        testing system that{' '}
        <span className="font-semibold">reduced manual QA efforts by 50%</span>. I
        wrote custom analysis scripts, visualized metadata overlaid on images for
        faster QA review, and trained{' '}
        <span className="font-semibold">neural networks</span> to predict metadata
        accuracy. My contributions resulted in a{' '}
        <span className="font-semibold">10% increase in metadata accuracy</span>,
        strengthening the reliability of Devant's synthetic data for downstream ML
        workflows.
      </>
    ),
    tags: [
      'Python',
      'Machine Learning',
      'Neural Networks',
      'Testing Pipelines',
      'Data Analysis',
      'Automation',
    ],
  },
  {
    id: 'unga-utvecklare',
    title: 'Frontend Developer',
    companyDate: (
      <span className="font-semibold">Unga Utvecklare • May 2016 — Dec 2020</span>
    ),
    description: (
      <>
        Unga Utvecklare is a startup tech consulting firm working across web and
        app development, media production, graphic design, and server hosting. I
        played a key role in delivering custom websites and digital solutions for
        clients. For one project, I led the design and development of a website
        for a business that lacked an online presence, building it in{' '}
        <span className="font-semibold">React</span>,{' '}
        <span className="font-semibold">TypeScript</span>, and{' '}
        <span className="font-semibold">Tailwind CSS</span> with SEO optimization
        and scalable hosting. I maintained close communication with clients
        throughout, gathering feedback and iterating to ensure alignment with their
        goals. The final products improved customer engagement and established
        strong digital foundations for business growth.
      </>
    ),
    tags: [
      'React',
      'JavaScript',
      'UI/UX Design',
      'Graphic Design',
      'SEO',
      'App Development',
      'Branding',
    ],
  },
];

function ExperienceCard({
  item,
  cardRef,
}: {
  item: ExperienceItem;
  cardRef?: (element: HTMLDivElement | null) => void;
}) {
  return (
    <Card ref={cardRef} className="w-full">
      <CardHeader
        title={item.title}
        description={item.companyDate}
        actions={
          item.url ? (
            <a
              href={item.url}
              className="pt-2 pr-2 hover:translate-x-1 hover:-translate-y-1 transition rounded-md"
            >
              <ArrowUpRight strokeWidth={3} />
            </a>
          ) : null
        }
      />

      <CardContent>{item.description}</CardContent>

      <div className="flex flex-wrap gap-1.5">
        {item.tags.map((tag) => (
          <Badge key={`${item.id}-${tag}`} name={tag} />
        ))}
      </div>
    </Card>
  );
}

export default function Experience() {
  const { isDesktop, leftColumn, rightColumn, measurementRefs } =
    useBalancedColumns(experienceItems);

  return (
    <div className="flex p-4 md:pb-12 pt-12 md:px-28 flex-col self-stretch md:md:rounded-[56px] rounded-3xl bg-custom-gradient-experience dark:bg-custom-gradient-experience-dark w-full">
      <Header badge="Experience" title="Where I Have Worked" />

      <div className="flex flex-col md:gap-11 gap-6 max-w-[980px] mx-auto w-full">
        <div className="relative mx-auto h-fit p-3 self-stretch rounded-3xl border border-[#89236C]/10 dark:border-[#233989]/10 bg-[#89236C]/5 dark:bg-[#233989]/5">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col gap-4 flex-1">
              {leftColumn.map((item) => (
                <ExperienceCard key={item.id} item={item} />
              ))}
            </div>

            {isDesktop ? (
              <div className="flex flex-col gap-4 flex-1">
                {rightColumn.map((item) => (
                  <ExperienceCard key={item.id} item={item} />
                ))}
              </div>
            ) : null}
          </div>

          {isDesktop ? (
            <div
              aria-hidden
              className="absolute inset-3 pointer-events-none opacity-0 -z-10"
            >
              <div className="w-[calc(50%-0.5rem)] flex flex-col gap-4">
                {experienceItems.map((item) => (
                  <ExperienceCard
                    key={`measure-${item.id}`}
                    item={item}
                    cardRef={(element) => {
                      measurementRefs.current[item.id] = element;
                    }}
                  />
                ))}
              </div>
            </div>
          ) : null}
        </div>

        <a
          href="assets/doc/resume.pdf"
          className="flex items-center gap-2 w-fit py-2 px-4 transition rounded-md cursor-pointer hover:bg-[#251434]/5 group font-semibold"
        >
          View resume
          <ArrowUpRight
            strokeWidth={3}
            className="transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </a>
      </div>
    </div>
  );
}
