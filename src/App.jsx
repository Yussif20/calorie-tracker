import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LandingPage, TrackPage, PageLayout } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/tracker',
        element: <TrackPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

//TODO:Fix styles of the modal in the mobile view
