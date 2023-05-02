import Card from "../UI/Card";
import ExpensensItem from "./ExpensensItem";
const Expensens = (props) => {
    return (
        <Card className="App">
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