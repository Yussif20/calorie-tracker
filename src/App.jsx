import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LandingPage, TrackPage } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/track',
    element: <TrackPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

//TODO:Fix styles of the modal in the mobile view
