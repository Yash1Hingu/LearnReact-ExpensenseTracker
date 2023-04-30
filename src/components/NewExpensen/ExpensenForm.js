import './ExpensenForm.css'
import React, { useState } from 'react'

const ExpensenForm = () => {
    const [EnterTitle,setEnterTitle] = useState('');
    const [EnterAmount,setEnterAmount] = useState('');
    const [EnterDate,setEnterDate] = useState('');
    // const [EnterInput, setEnterInput] = useState({
    //     EnterTitle: '',
    //     EnterAmount: '',
    //     EnterDate: ''
    // })

    const titleChangeHandler = (event) => {
        setEnterTitle(event.target.value);
        // setEnterInput((userInput) => {
        //     return {
        //         ...userInput,
        //         EnterTitle: event.target.value
        //     }
        // });
    }
    const amountChangeHandler = (event) => {
        setEnterAmount(event.target.value);
        // setEnterInput((userInput) => {
        //     return {
        //         ...userInput,
        //         EnterAmount: event.target.value
        //     }
        // });
    }
    const dateChangeHandler = (event) => {
        setEnterDate(event.target.value);
        // setEnterInput((userInput) => {
        //     return {
        //         ...userInput,
        //         EnterDate: event.target.value
        //     }
        // });
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: EnterTitle,
            amount: EnterAmount,
            date: new Date(EnterDate)
        }
        console.log(expenseData);
        setEnterTitle('');
        setEnterAmount('');
        setEnterDate('');
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Title</label>
                    <input type="text" value={EnterTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__controls">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={EnterAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__controls">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2024-01-01" value={EnterDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expensens</button>
            </div>
        </form>
    );
}

export default ExpensenForm