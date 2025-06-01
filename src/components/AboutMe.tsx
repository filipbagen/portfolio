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
              <span className="font-semibold">full-stack engineer</span> living
              in Sweden. I am an <span className="font-semibold">eager</span>,{' '}
              <span className="font-semibold">creative</span>, and{' '}
              <span className="font-semibold">curious tech geek</span> with a
              M.Sc. in Computer Science from Linköping University, where I
              specialized in{' '}
              <span className="font-semibold">Web Development</span> and{' '}
              <span className="font-semibold">AI</span>. I also studied at{' '}
              <span className="font-semibold">UC Berkeley</span> to deepen my
              knowledge in{' '}
              <span className="font-semibold">
                Artificial Intelligence and Machine Learning
              </span>
              . I've always been fascinated by the possibilities that{' '}
              <span className="font-semibold">AI</span> offers and how it
              perfectly complements my love for technology.
              <br />
              <br />
              In my work, I enjoy{' '}
              <span className="font-semibold">
                solving complex technical challenges{' '}
              </span>
              using my skills in <span className="font-semibold">UX</span>,{' '}
              <span className="font-semibold">AI</span>, and{' '}
              <span className="font-semibold">full-stack development</span>. My
              aim is to be at the center of new{' '}
              <span className="font-semibold">technological developments</span>,
              working with the great combination of{' '}
              <span className="font-semibold">software</span> and{' '}
              <span className="font-semibold">science</span>. My focus is to
              broaden my knowledge in the implementation of new innovations and
              <span className="font-semibold"> technological creations</span>.
            </CardContent>
          </Card>

          <div className="flex flex-col gap-3">
            <Card>
              <CardTitle>I am currently...</CardTitle>
              <CardContent>
                ... working as a{' '}
                <span className="font-semibold">Software Engineer</span> at{' '}
                <span className="font-semibold">Netlight in Stockholm</span>,{' '}
                where I help clients tackle complex technical challenges while
                continuing to work on my personal projects and enhancing my
                skills in AI, web development, and full-stack applications.
              </CardContent>
            </Card>

            {/*
              
            UC Berkeley, California, 
            */}

            <Card>
              <CardTitle>In my free time...</CardTitle>
              <CardContent>
                ... I love exploring new technologies, building side projects,
                and staying up-to-date with the latest developments in{' '}
                <span className="font-semibold">AI</span> and{' '}
                <span className="font-semibold">web development</span>. I'm also
                passionate about <span className="font-semibold">design</span>{' '}
                and enjoy creating beautiful, user-friendly interfaces that
                solve real problems.
              </CardContent>
            </Card>
          </div>
        </div>
      </CardContainer>
    </div>
  );
}
