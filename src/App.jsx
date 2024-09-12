import RecordList from "./components/calorieRecordSection/RecordList"
function App() {
  const records =[
      {
        id:1,
        date:new Date(2024,8,6),
        meal:"Breakfast", content:"Eggs",
        calories:"340"
      },
      {
       id:2, date:new Date(2024,8,5), meal:"Launch", content:"Chicken", calories:"400"
      },
      {
       id:3, date:new Date(2024,8,4), meal:"Dinner", content:"Cheese", calories:"450"
      },
      {
       id:4, date:new Date(2024,8,6), meal:"Snacks", content:"Chocolate", calories:"500"
      }
  ]
  return (
    <>
     <h1>Hello to my calorie tracker</h1>
    <RecordList records={records} />
    </>
  )
}

export default App
