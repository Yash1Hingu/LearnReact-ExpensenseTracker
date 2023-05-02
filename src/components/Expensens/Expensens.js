import Card from "../UI/Card";
import ExpensensItem from "./ExpensensItem";
import ExpensensFilter from "./ExpensensFilter";
import { useState } from "react";
const Expensens = (props) => {
    const [filteredYear, setFilterYear] = useState('2023');
    const filterChangeHandler = selectedYear => {
        setFilterYear(selectedYear);
    }

    const expensensData = props.expensensItems.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    let expensensItems = <p>Not Found expensen.</p>;
    if (expensensData.length > 0) {
        expensensItems = expensensData.map((expensens) => (
            <ExpensensItem
                key={expensens.id}
                title={expensens.title}
                amount={expensens.amount}
                date={expensens.date}
            />
        ))
    }
    return (
        <Card className="App">
            <ExpensensFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {expensensItems}
        </Card>
    );
}

export default Expensens