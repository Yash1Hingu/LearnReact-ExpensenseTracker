import Card from "../UI/Card";
import ExpensensItem from "./ExpensensItem";
import ExpensensFilter from "./ExpensensFilter";
import { useState } from "react";
const Expensens = (props) => {
    const [filteredYear,setFilterYear] = useState('2023');

    const filterChangeHandler = selectedYear => {
        setFilterYear(selectedYear);
    }
    return (
        <Card className="App">
            <ExpensensFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {props.expensensItems.map((expensens) => (
            <ExpensensItem
                title={expensens.title}
                amount={expensens.amount}
                date={expensens.date}
            />
            ))}
        </Card>
    );
}

export default Expensens