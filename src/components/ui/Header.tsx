import Badge from './Badge';

interface HeaderProps {
  badge: string;
  title: string;
  paragraph?: string;
}

export default function Header({ badge, title, paragraph }: HeaderProps) {
  return (
    <div className="flex flex-col items-center gap-4 w-full mb-6 md:mb-10 text-center">
      <Badge name={badge} />
      <h1 className="md:text-5xl text-4xl">{title}</h1>
      <p>{paragraph}</p>
    </div>
  );
}
