import { lazy } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Paths } from './utils/constants';
import { Layout } from './components';

const { MAIN, PROJECTS } = Paths;

const IntroPage = lazy(() => import('@/pages/intro-page/intro-page'));
const ProjectsPage = lazy(() => import('@/pages/projects-page/projects-page'));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={MAIN} element={<Layout />}>
      <Route index element={<IntroPage />} />
      <Route path={PROJECTS} element={<ProjectsPage />} />
    </Route>
  )
);
