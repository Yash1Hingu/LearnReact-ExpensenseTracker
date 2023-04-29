import React,{useState} from 'react';
import ExpensensDate from './ExpensensDate'
import './ExpensensItem.css'
const ExpensensItem = (props) => {
    const [title,setTitle] = useState(props.title)
    const clickHandler = () => {
        setTitle("Update!");
    }
    return (
        <div className="expensenseBox">
            <ExpensensDate date = {props.date}/>
            <p className="expensense_item__name">{title}</p>
            <p className="expensense_item__price">${props.amount}</p>
            <button onClick={clickHandler}>Change Title</button>
        </div>
    );
}

export default ExpensensItem;