import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useNavigateAfterCountDown = (startCount,redirectLink) => {
  const [counter, setCounter] = useState(startCount);
  const intervalHandler = useRef();
  const NavigateToHome = useNavigate();

  useEffect(() => {
    if (counter === 0) {
      clearInterval();
      NavigateToHome(redirectLink);
    }
  }, [counter]);

  useEffect(() => {
    intervalHandler.current = setInterval(() => {
      setCounter((prevState) => prevState - 1);
    }, 1000);

    return () => {
      clearInterval(intervalHandler.current);
    };
  }, []);

  return counter;
}