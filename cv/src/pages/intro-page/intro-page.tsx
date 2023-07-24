import { FC } from 'react';
import { Divider } from '@mui/material';
import { Certificates, Intro, Skills } from '@/components';

export const IntroPage: FC = () => {
  return (
    <>
      <Intro />

      <Divider variant="middle" />

      <Skills />

      <Divider variant="middle" />

      <Certificates />
    </>
  );
};
