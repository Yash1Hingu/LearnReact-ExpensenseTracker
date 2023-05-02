import { useState } from 'react';
import './ExpensensFilter.css'
const ExpensensFilter = (props) => {
    const dropdownHandler = (event) => {
        props.onChangeFilter(event.target.value);
    }
    return (
        <div className="expensens__filter">
            <label>Filter Year</label>
            <select value={props.selected} onChange={dropdownHandler}>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
            </select>
        </div>
    );
}

export default ExpensensFilter;