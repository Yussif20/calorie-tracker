import { createContext, useState } from 'react';

export const AppContext = createContext({
  currentDate: new Date(),
  setCurrentDate: () => {},
  totalCalories: 0,
  setTotalCalories: () => {},
  currentDateStr: '',
});
const AppContextProvider = (props) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [totalCalories, setTotalCalories] = useState(0);

  const { children } = props;
  return (
    <AppContext.Provider
      value={{ currentDate, setCurrentDate, totalCalories, setTotalCalories }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
