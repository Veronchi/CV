import { FC } from 'react';
import { Timeline } from '@/components';
import './projects-page.scss';

export const ProjectsPage: FC = () => {
  return (
    <section className="projects">
      <h2 className="projects__title">Portfolio</h2>
      <Timeline />
    </section>
  );
};
