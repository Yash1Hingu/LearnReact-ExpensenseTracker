import './ExpensensDate.css'
const ExpensensDate = (props) => {

    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const date = props.date.toLocaleString('en-US', { day: '2-digit' })
    const year = props.date.getFullYear();

    return (
        <div className="expensense_date">
            <div className="expensense_date__month">{month}</div>
            <div className="expensense_date__date">{date}</div>
            <div className="expensense_date__year">{year}</div>
        </div>
    );
}

export default ExpensensDate;