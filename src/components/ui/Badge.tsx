// src/components/ui/Badge.tsx
import React from 'react';

interface BadgeProps {
  name: string;
}

const Badge: React.FC<BadgeProps> = ({ name }) => {
  return (
    <div className="w-fit px-2.5 py-0.5 rounded-full font-medium bg-primary/10 dark:bg-accent/10">
      <p className="text-xs">{name}</p>
    </div>
  );
};

export default Badge;
