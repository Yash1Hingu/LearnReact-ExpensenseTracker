import ExpensensItem from "./ExpensensItem";
const ExpensensList = props => {
    if(props.expensensFilterData.length === 0) {
        return (
            <h1>Not Found.</h1>
        )
    }
    return (
        <ul>
            {props.expensensFilterData.map((expensens) => (
            <ExpensensItem
                key={expensens.id}
                title={expensens.title}
                amount={expensens.amount}
                date={expensens.date}
            />
            ))}
        </ul>
    )
}

export default ExpensensList;