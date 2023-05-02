import React,{useState} from 'react';
import ExpensensDate from './ExpensensDate'
import './ExpensensItem.css'
const ExpensensItem = (props) => {
    // const [title,setTitle] = useState(props.title)
    // const clickHandler = () => {
    //     setTitle("Update!");
    // }
    // console.log(props);
    return (
        <div className="expensenseBox">
            <ExpensensDate date = {props.date}/>
            <p className="expensense_item__name">{props.title}</p>
            <p className="expensense_item__price">${props.amount}</p>
            {/* <button>Change Title</button> */}
        </div>
    );
}

export default ExpensensItem;