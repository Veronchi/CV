import { FC } from 'react';
import { Timeline } from '@/components';
import './projects-page.scss';

export const ProjectsPage: FC = () => {
  return (
    <section className="projects-page">
      <Timeline />
    </section>
  );
};
