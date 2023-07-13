import { FC } from 'react';
import { ProjectCard } from '..';
import Box from '@mui/material/Box';
import { projects } from '@/utils/projects';

export const ProjectList: FC = () => {
  return (
    <Box
      component="ul"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 300,
          height: 200,
        },
      }}
    >
      {projects.map((project) => {
        return <ProjectCard key={project.id} project={project} />;
      })}
    </Box>
  );
};
