import { Header } from '@/components/Header';
import React from 'react';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('../components/Navbar'), {
  ssr: false,
});

interface Props {
  children: React.ReactNode;
}

export const HomeLayout = ({ children }: Props) => {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      {children}
    </>
  );
};
