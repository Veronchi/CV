import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Layout } from '@/components';
import { Paths } from './utils/constants';
import { IntroPage, ProjectsPage, SkillsPage } from './pages';

const { MAIN, SKILLS, PROJECTS } = Paths;

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={MAIN} element={<Layout />}>
      <Route index element={<IntroPage />} />
      <Route path={SKILLS} element={<SkillsPage />} />
      <Route path={PROJECTS} element={<ProjectsPage />} />
    </Route>
  )
);
