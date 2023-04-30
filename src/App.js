import './App.css';
import ExpensensItem from './components/Expensens/ExpensensItem';
import NewExpensen from './components/NewExpensen/NewExpensen.js';
import Card from './components/UI/Card'
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
    <div>
        <NewExpensen onNewExpense={NewExpensenHandler}/>
      <Card className="App">
        <ExpensensItem
          title={expensens[0].title}
          amount={expensens[0].amount}
          date={expensens[0].date}
        ></ExpensensItem>
        <ExpensensItem
          title={expensens[1].title}
          amount={expensens[1].amount}
          date={expensens[1].date}
        ></ExpensensItem>
        <ExpensensItem
          title={expensens[2].title}
          amount={expensens[2].amount}
          date={expensens[2].date}
        ></ExpensensItem>
      </Card>
    </div>
  );
}

export default App;
