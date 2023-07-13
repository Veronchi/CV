import { FC } from 'react';
import Paper from '@mui/material/Paper';
import { Project } from '@/utils/types';
import './project-card.scss';

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const { src } = project;

  return (
    <Paper elevation={12} className="project" component="li" sx={{ cursor: 'pointer' }}>
      <img className="project__img" src={src} alt="project image" />
    </Paper>
  );
};
