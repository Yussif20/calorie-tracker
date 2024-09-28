import { createContext } from "react";

const AppContext = createContext({
	currentDate: new Date(),
	setCurrentDate: (val) => {},
	totalCalories: 0,
	setTotalCalories: (val) => {},
	currentDateStr: "",
})
export default AppContext;