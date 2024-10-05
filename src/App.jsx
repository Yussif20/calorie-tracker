import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  LandingPage,
  TrackPage,
  PageLayout,
  ErrorPage,
  DetailPage,
  EditPage,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // make it the same path as the parent "same as the line below"
        // path: ''
        element: <LandingPage />,
      },
      {
        path: 'track',
        children: [
          {
            index: true,
            element: <TrackPage />,
          },
          {
            path: ':recordId',
            element: <DetailPage />,
          },
          {
            path: 'create',
            element: <EditPage />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

//TODO:Fix styles of the modal in the mobile view
