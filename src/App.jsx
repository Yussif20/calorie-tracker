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
        index: true,
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

//TODO: handle date change in the form ✅
//TODO: save data to Local storage ✅
//TODO: fix total calories bug in the form
//TODO: add delete record button
//TODO: make website fully responsive
