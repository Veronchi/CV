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
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 400,
          height: 230,
        },
      }}
    >
      {projects.map((project) => {
        return <ProjectCard key={project.id} project={project} />;
      })}
    </Box>
  );
};
