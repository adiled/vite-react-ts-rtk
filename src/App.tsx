import { useEffect } from 'react';

import type { Counter } from '@/types';
import { useDispatch, useSelector } from '@/app/hooks';

import { addItems, removeItems } from '@/features/counting/counter-slice';

import logo from './assets/logo.png';
import { RouteObject, useRoutes, Outlet, Link } from 'react-router-dom';

import Home from '@/pages/Home';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
];

function Layout() {
  const dispatch = useDispatch();

  const counterList = useSelector((state) => state.counter.list);

  return (
    <>
      <header>
        <Link to="/" className="logo">
          <img src={logo} alt="" />
        </Link>
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}

export default function App() {
  const currentRouteElement = useRoutes(routes);
  return <div className="App">{currentRouteElement}</div>;
}
