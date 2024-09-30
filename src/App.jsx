import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  LandingPage,
  TrackPage,
  PageLayout,
  ErrorPage,
  DetailPage,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <LandingPage />,
      },
      {
        path: 'track',
        element: <TrackPage />,
      },
      {
        path: 'track/:recordId',
        element: <DetailPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

//TODO:Fix styles of the modal in the mobile view
