import { FC } from 'react';
import { ProjectList } from '@/components';
import './projects-page.scss';

export const ProjectsPage: FC = () => {
  return (
    <section className="projects-page">
      <ProjectList />
    </section>
  );
};
