import Card from "../UI/Card";
import ExpensensItem from "./ExpensensItem";
import ExpensensFilter from "./ExpensensFilter";
import { useState } from "react";
import ExpensensList from "./ExpensensList";
const Expensens = (props) => {
    const [filteredYear, setFilterYear] = useState('2023');
    const filterChangeHandler = selectedYear => {
        setFilterYear(selectedYear);
    }

    const expensensData = props.expensensItems.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear
    })
    
    return (
        <Card className="App">
            <ExpensensFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensensList expensensFilterData={expensensData}/>
        </Card>
    );
}

export default Expensens