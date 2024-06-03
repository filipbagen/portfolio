// src/components/ui/Badge.tsx
import React from 'react';

interface BadgeProps {
  name: string;
}

const Badge: React.FC<BadgeProps> = ({ name }) => {
  return (
    <div className="w-fit px-4 py-1 rounded-full font-semibold bg-[#251434]/20">
      <h3>{name}</h3>
    </div>
  );
};

export default Badge;
