import CalorieRecord from "./components/CalorieRecord"
function App() {
  return (
    <>
     <h1>Hello to my calorie tracker</h1>
    <CalorieRecord date={new Date(2024,8,6)} meal="Breakfast" content="Eggs" calories="340"></CalorieRecord>
    <CalorieRecord date={new Date(2024,8,5)} meal="Launch" content="Chicken" calories="400"></CalorieRecord>
    <CalorieRecord date={new Date(2024,8,4)} meal="Dinner" content="Cheese" calories="450"></CalorieRecord>
    <CalorieRecord date={new Date(2024,8,3)} meal="Snacks" content="Chocolate" calories="500"></CalorieRecord>
    </>
  )
}

export default App
