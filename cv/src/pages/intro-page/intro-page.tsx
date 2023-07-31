import { FC } from 'react';
import { Certificates, Intro, Skills } from '@/components';

const IntroPage: FC = () => {
  return (
    <>
      <Intro />

      <Skills />

      <Certificates />
    </>
  );
};

export default IntroPage;
