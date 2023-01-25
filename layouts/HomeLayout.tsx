import { Header } from '@/components/Header';
import React from 'react';
import { Navbar } from '../components/Navbar';

interface Props {
  children: React.ReactNode;
  setTheme: any;
  theme: string;
}

export const HomeLayout = ({ children, setTheme, theme }: Props) => {
  return (
    <>
      <Header>
        <Navbar setTheme={setTheme} theme={theme} />
      </Header>
      {children}
    </>
  );
};
