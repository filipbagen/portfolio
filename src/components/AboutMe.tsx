import Header from './ui/Header';
import { Card, CardContent, CardTitle, CardContainer } from './ui/Card';

export default function AboutMe() {
  return (
    <div>
      <Header badge="About me" title="Who Am I?" />
      <CardContainer>
        <div className="flex flex-col gap-3 lg:flex-row">
          <Card>
            <img src="src/assets/memoji.png" alt="Memoji" className="h-32" />
            <CardContent>
              Hey there — my name is Filip and I'm a soon-to-be engineer in
              Computer Science, living in Sweden. I am an eager, creative, and
              curious tech geek, currently in my fourth year of the M.Sc.
              program in Media Technology. I've always been fascinated by the
              possibilities that Artificial Intelligence offers and I've found
              that my passion for web development and AI perfectly complements
              my love for technology.
              <br />
              <br />
              When I'm not studying, I build my own full-stack applications
              using my skills in UX, AI, and code development. My aim is to be
              at the center of new technological developments, working with the
              great combination of software and science. My focus is to broaden
              my knowledge in the implementation of new innovations and
              technological creations.
            </CardContent>
          </Card>

          <div className="flex flex-col gap-3">
            <Card>
              <CardTitle>I am currently...</CardTitle>
              <CardContent>
                ... preparing for my final year at university, where I will be
                studying Artificial Intelligence and Machine Learning at UC
                Berkeley, California. I am always working on my own projects and
                looking for an internship where I can apply my skills in
                practice.
              </CardContent>
            </Card>

            <Card>
              <CardTitle>I am looking for...</CardTitle>
              <CardContent>
                ... an opportunity to write my Master's thesis at a company
                where I can both learn and gain as much experience as possible
                and also get the chance to implement my own ideas.
              </CardContent>
            </Card>
          </div>
        </div>
      </CardContainer>
    </div>
  );
}
