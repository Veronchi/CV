import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Layout } from '@/components';
import { Paths } from './utils/constants';
import { IntroPage, ProjectsPage } from './pages';

const { MAIN, PROJECTS } = Paths;

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={MAIN} element={<Layout />}>
      <Route index element={<IntroPage />} />
      <Route path={PROJECTS} element={<ProjectsPage />} />
    </Route>
  )
);
