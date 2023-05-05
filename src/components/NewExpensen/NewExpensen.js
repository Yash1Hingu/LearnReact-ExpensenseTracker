import './NewExpensen.css'
import ExpensenForm from './ExpensenForm';
const NewExpensen = (props) => {

    const ExpenseSave = (enterExpense) => {
        const ExpenseData = {
            ...enterExpense,
            id: Math.random().toString()
        }
        props.onNewExpense(ExpenseData);
    }
    return (
        <div className="new-expense">-
            <ExpensenForm onExpenseSave={ExpenseSave} show='true'/>
        </div>
    );
}

export default NewExpensen