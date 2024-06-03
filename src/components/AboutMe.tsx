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
              Computer Science, living in Sweden. I've always been fascinated by
              the endless possibilities that Artificial Intelligence offers and
              I've found that my passion for web design and project management
              perfectly complements my love for technology. I'm a firm believer
              that the ability to be curious and to learn new skills is the key
              to success.
              <br />
              <br />
              When I'm not studying, you can find me building on my own projects
              using my skills in design and code development. I find it
              incredibly fascinating how technology and design can work together
              in order to create something truly beautiful and functional. My
              earlier work combined with my curiosity have given me valuable
              experience in developing and deploying production-level code. I am
              always eager to learn more and take on new challenges.
            </CardContent>
          </Card>

          <div className="flex flex-col gap-3">
            <Card>
              <CardTitle>I am currently...</CardTitle>
              <CardContent>
                ... preparing for my final year at university where I will be
                stydying Artificial Intelligence and Machine Learning at UC
                Berkeley, California. I am also working on my own projects and
                looking for an internship where I can apply my skills in
                practice.
              </CardContent>
            </Card>

            <Card>
              <CardTitle>I am looking for...</CardTitle>
              <CardContent>
                ... an opportunity to write my Master thesis at a company where
                I can both learn and gain as much experience as possible and
                also get the chance to implement my own ideas.
              </CardContent>
            </Card>
          </div>
        </div>
      </CardContainer>
    </div>
  );
}
