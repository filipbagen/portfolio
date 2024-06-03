import Badge from './Badge';

interface HeaderProps {
  badge: string;
  title: string;
  paragraph?: string;
}

export default function Header({ badge, title }: HeaderProps) {
  return (
    <div className="flex flex-col items-center gap-4 w-full mb-20">
      <Badge name={badge} />
      <h1>{title}</h1>
    </div>
  );
}
