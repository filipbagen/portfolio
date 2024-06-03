import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="flex flex-col items-center gap-12 p-5 mx-auto max-w-[1440px]">
      {children}
    </main>
  );
};

export default Layout;
