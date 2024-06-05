import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="flex flex-col items-center gap-12 px-5 pt-5 mx-auto max-w-[1440px] min-w-xl">
      {children}
    </main>
  );
};

export default Layout;
