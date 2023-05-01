import './App.css';
import Expensens from './components/Expensens/Expensens';
import NewExpensen from './components/NewExpensen/NewExpensen.js';
const App = () => {
  const expensens = [
    {
      title: "Suger",
      amount: 25.5,
      date: new Date("2022 Mar 22")
    },
    {
      title: "Milk",
      amount: 10.5,
      date: new Date('12 Mar 2022')
    },
    {
      title: "Butter",
      amount: 1.5,
      date: new Date('11 Jul 2022')
    }
  ]

  const NewExpensenHandler = (newExpensenData) =>{
    console.log("App.js")
    console.log(newExpensenData)
  }
  return (
    <>
        <NewExpensen onNewExpense={NewExpensenHandler}/>
        <Expensens expensensItems={expensens}/>
    </>
  );
}

export default App;
