// src/components/ui/Badge.tsx
import React from 'react';

interface BadgeProps {
  name: string;
}

const Badge: React.FC<BadgeProps> = ({ name }) => {
  return (
    <div className="w-fit px-3 py-0.5 rounded-full font-semibold bg-[#251434]/20 dark:bg-[#E0BDFF]/20">
      <h6>{name}</h6>
    </div>
  );
};

export default Badge;
