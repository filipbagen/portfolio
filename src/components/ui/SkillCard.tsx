import * as React from 'react';
import { Card, CardTitle, CardContent } from './Card';

interface SkillCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <div className="relative text-center flex flex-col items-center max-w-xl">
      <div className="absolute -top-8 flex md:w-20 md:h-20 h-16 w-16 flex-col justify-center items-center flex-shrink-0 rounded-full bg-white shadow-custom inset-shadow">
        <img src={imageSrc} alt="Skill" className="md:w-8 md:h-8 w-6 h-6" />
      </div>
      <Card>
        <div className="md:pt-10 pt-5 flex flex-col items-center w-full">
          <CardTitle>{title}</CardTitle>
          <CardContent>{description}</CardContent>
        </div>
      </Card>
    </div>
  );
};

export default SkillCard;
