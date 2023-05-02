import React,{useState} from 'react';
import './App.css';
import Expensens from './components/Expensens/Expensens';
import NewExpensen from './components/NewExpensen/NewExpensen.js';
const DUMMY_EXPENSENS = [
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

const App = () => {
  const [expensens,setExpensens] = useState(DUMMY_EXPENSENS);

  const NewExpensenHandler = (newExpensenData) => {
    setExpensens(pervExpense => [newExpensenData , ...pervExpense])
  }
  return (
    <>
      <NewExpensen onNewExpense={NewExpensenHandler} />
      <Expensens expensensItems={expensens} />
    </>
  );
}

export default App;
