import { FC } from 'react';
import { Certificates, Intro, Skills } from '@/components';

export const IntroPage: FC = () => {
  return (
    <>
      <Intro />

      <Skills />

      <Certificates />
    </>
  );
};
