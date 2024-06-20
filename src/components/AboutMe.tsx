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
              <span className="font-semibold">soon-to-be engineer</span> in{' '}
              <span className="font-semibold">Computer Science</span>, living in
              Sweden. I am an <span className="font-semibold">eager</span>,{' '}
              <span className="font-semibold">creative</span>, and{' '}
              <span className="font-semibold">curious tech geek</span>,
              currently in my fourth year of the M.Sc. program in Media
              Technology. I've always been fascinated by the possibilities that{' '}
              <span className="font-semibold">Artificial Intelligence</span>{' '}
              offers and I've found that my passion for{' '}
              <span className="font-semibold">Web Development</span> and{' '}
              <span className="font-semibold">AI </span>
              perfectly complements my love for technology.
              <br />
              <br />
              When I'm not studying, I{' '}
              <span className="font-semibold">
                build my own full-stack applications{' '}
              </span>
              using my skills in <span className="font-semibold">UX</span>,{' '}
              <span className="font-semibold">AI</span>, and{' '}
              <span className="font-semibold">code development</span>. My aim is
              to be at the center of new{' '}
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
                ... preparing for my final year at university, where I will be
                studying{' '}
                <span className="font-semibold">
                  Artificial Intelligence and Machine Learning
                </span>{' '}
                at{' '}
                <span className="font-semibold">UC Berkeley, California</span>.
                I am always working on my own projects and looking for an
                internship where I can apply my skills in practice.
              </CardContent>
            </Card>

            <Card>
              <CardTitle>I am looking for...</CardTitle>
              <CardContent>
                ... an opportunity to write my{' '}
                <span className="font-semibold">Master's thesis</span> at a
                company where I can both{' '}
                <span className="font-semibold">learn</span> and{' '}
                <span className="font-semibold">
                  gain as much experience as possible
                </span>{' '}
                and also get the chance to{' '}
                <span className="font-semibold">implement my own ideas</span>.
              </CardContent>
            </Card>
          </div>
        </div>
      </CardContainer>
    </div>
  );
}
