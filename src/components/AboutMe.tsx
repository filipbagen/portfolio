import Header from './ui/Header';
import { Card, CardContent, CardTitle, CardContainer } from './ui/Card';

export default function AboutMe() {
  return (
    <div>
      <Header badge="About me" title="Who Am I?" />
      <CardContainer>
        <div className="flex flex-col gap-3 md:flex-row">
          <Card>
            <img
              src="assets/memoji.png"
              alt="Memoji"
              className="md:h-32 h-24"
            />
            <CardContent>
              <span className="font-semibold">Hey there</span> — my name is
              Filip and I'm a{' '}
              <span className="font-semibold">full-stack developer</span> 
              based in Stockholm. I am an <span className="font-semibold">eager</span>,{' '}
              <span className="font-semibold">creative</span>, and{' '}
              <span className="font-semibold">curious tech geek</span> with a
              M.Sc. in Computer Science from Linköping University, where I
              specialized in{' '}
              <span className="font-semibold">
                machine learning and web development
              </span>.
              I also studied{' '}
              <span className="font-semibold">Computer Science</span> at{' '}
              <span className="font-semibold">UC Berkeley</span> with coursework
              in{' '}
              <span className="font-semibold">
                Computer Vision, Applied ML, and LLM Agents
              </span>
              .
              <br />
              <br />
              In my work, I enjoy{' '}
              <span className="font-semibold">
                solving complex technical challenges
              </span>{' '}
              across the full stack, from{' '}
              <span className="font-semibold">
                event-driven microservices and cloud infrastructure
              </span>{' '}
              to{' '}
              <span className="font-semibold">
                responsive, user-focused frontends
              </span>
              . I'm drawn to early-stage projects where there's a lot to figure
              out and build, and I have a genuine passion for{' '}
              <span className="font-semibold">AI</span> and how it can be
              applied to real-world problems. Colleagues describe me as{' '}
              <span className="font-semibold">
                positive and easy to work with
              </span>
              , quick to involve the right people, and always focused on what
              benefits the <span className="font-semibold">end user</span>.
            </CardContent>
          </Card>

          <div className="flex flex-col gap-3">
            <Card>
              <CardTitle>I am currently...</CardTitle>
              <CardContent>
                ... working as a{' '}
                <span className="font-semibold">
                  Consultant at Netlight in Stockholm
                </span>
                , where I help clients tackle complex technical challenges. So
                far, I've worked with scaleups in{' '}
                <span className="font-semibold">greentech</span> and{' '}
                <span className="font-semibold">legal tech</span>, and I have
                shipped systems in everything from{' '}
                <span className="font-semibold">
                  event-driven microservices
                </span>{' '}
                and <span className="font-semibold">frontend applications</span>{' '}
                to <span className="font-semibold">CI/CD pipelines</span> and{' '}
                <span className="font-semibold">cloud infrastructure</span>. I
                enjoy early-stage projects where there's a lot to figure out and
                build, especially when it comes to{' '}
                <span className="font-semibold">
                  frontend-heavy, user-focused development
                </span>{' '}
                with <span className="font-semibold">React</span> and{' '}
                <span className="font-semibold">TypeScript</span>.
              </CardContent>
            </Card>

            <Card>
              <CardTitle>In my free time...</CardTitle>
              <CardContent>
              ... I love exploring new technologies, building side projects, and staying up-to-date with the latest developments in <span className="font-semibold">AI</span> and <span className="font-semibold">web development</span>. I'm also passionate about <span className="font-semibold">design</span> and enjoy creating beautiful, user-friendly interfaces that solve real problems. Outside of tech, I like to stay active through <span className="font-semibold">golf</span>, <span className="font-semibold">climbing</span>, and <span className="font-semibold">running</span>.
              </CardContent>
            </Card>
          </div>
        </div>
      </CardContainer>
    </div>
  );
}
