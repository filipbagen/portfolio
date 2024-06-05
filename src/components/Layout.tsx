import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="flex flex-col items-center gap-12 p-4 md:px-5 md:pt-5 mx-auto max-w-[1440px] min-w-xl">
      {children}
    </main>
  );
};

export default Layout;
