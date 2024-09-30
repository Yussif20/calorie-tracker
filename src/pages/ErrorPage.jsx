import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <>
      <h1>Something Went Wrong...</h1>
      <p>
        Click <Link to="/">Here</Link> to go back
      </p>
    </>
  );
};
